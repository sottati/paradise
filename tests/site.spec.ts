import { expect, test } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

const routes = [
  "/",
  "/cabanas/",
  "/cabanas/casa-paradise/",
  "/cabanas/del-mar/",
  "/cabanas/rincon/",
];

test.beforeEach(async ({ page }) => {
  // Test the site independently from Google, Instagram and font availability.
  await page.route(
    (url) => url.hostname !== "127.0.0.1",
    (route) => route.abort(),
  );
});

for (const route of routes) {
  test(`${route} renders without overflow or accessibility violations`, async ({
    page,
  }, testInfo) => {
    const errors: string[] = [];
    page.on("pageerror", (error) => errors.push(error.message));
    page.on("console", (message) => {
      if (
        message.type() === "error" &&
        /hydration|react|render/i.test(message.text())
      )
        errors.push(message.text());
    });
    const response = await page.goto(route);
    expect(response?.status()).toBe(200);
    await page
      .locator("astro-island[component-export='SiteNavigation']")
      .evaluate((element) =>
        element.hasAttribute("ssr")
          ? new Promise<void>((resolve) =>
              element.addEventListener("astro:hydrate", () => resolve(), {
                once: true,
              }),
            )
          : undefined,
      );
    await expect(page.locator("h1")).toHaveCount(1);
    await expect(page.locator("html")).toHaveAttribute("lang", "es");
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
    ).toBe(true);
    const results = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
      .analyze();
    expect(results.violations).toEqual([]);
    expect(errors).toEqual([]);
    for (const image of await page.locator("main img, footer img").all()) {
      await image.scrollIntoViewIfNeeded();
      await expect(image).toHaveJSProperty("complete", true);
      await expect
        .poll(() =>
          image.evaluate(
            (element) => (element as HTMLImageElement).naturalWidth,
          ),
        )
        .toBeGreaterThan(0);
    }
    await page.evaluate(() => scrollTo({ top: 0, behavior: "instant" }));
    await page.screenshot({
      path: testInfo.outputPath("page.png"),
      fullPage: true,
    });
  });
}

test("navigation exposes every cabin and handles keyboard dismissal", async ({
  page,
}, testInfo) => {
  await page.goto("/");
  if (testInfo.project.name === "mobile") {
    const trigger = page.getByRole("button", { name: "Abrir menú" });
    await trigger.click();
    const dialog = page.getByRole("dialog");
    await expect(dialog).toBeVisible();
    await expect(
      dialog.getByRole("link", { name: "Rincón", exact: true }),
    ).toHaveAttribute("href", "/cabanas/rincon");
    expect(
      (await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa"]).analyze())
        .violations,
    ).toEqual([]);
    await page.keyboard.press("Escape");
    await expect(dialog).toBeHidden();
    await expect(trigger).toBeFocused();
    await trigger.click();
    await dialog.getByRole("link", { name: "Todas las cabañas" }).click();
  } else {
    const navigation = page.getByRole("navigation", {
      name: "Navegación principal",
    });
    await navigation.getByRole("button", { name: "Cabañas" }).click();
    await expect(
      navigation.getByRole("link", { name: /Rincón/ }),
    ).toBeVisible();
    await navigation.getByRole("link", { name: /Todas las cabañas/ }).click();
  }
  await expect(page).toHaveURL(/\/cabanas\/?$/);
});

test("gallery opens all photos, wraps, and restores focus", async ({
  page,
}) => {
  await page.goto("/cabanas/casa-paradise/");
  const trigger = page.getByRole("button", { name: /Ver las \d+ fotos/ });
  const total = (await trigger.innerText()).match(/\d+/)![0];
  await trigger.click();
  const dialog = page.getByRole("dialog");
  await expect(dialog).toBeVisible();
  await expect(dialog.getByText(/Foto 1 de/)).toBeVisible();
  await dialog.getByRole("button", { name: "Foto siguiente" }).click();
  await expect(dialog.getByText(/Foto 2 de/)).toBeVisible();
  await page.keyboard.press("ArrowLeft");
  await expect(dialog.getByText(/Foto 1 de/)).toBeVisible();
  await page.keyboard.press("ArrowLeft");
  await expect(dialog.getByText(`Foto ${total} de ${total}`)).toBeVisible();
  expect(
    (await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa"]).analyze())
      .violations,
  ).toEqual([]);
  await page.keyboard.press("Escape");
  await expect(dialog).toBeHidden();
  await expect(trigger).toBeFocused();
});

test("header fits narrow phones and tablet widths", async ({ page }) => {
  for (const width of [320, 640, 768, 820, 1024]) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto("/cabanas/");
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
      `overflow at ${width}px`,
    ).toBe(true);
  }
});

test("cabin content and remaining photos are available without JavaScript", async ({
  browser,
}) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  await page.route(
    (url) => url.hostname !== "127.0.0.1",
    (route) => route.abort(),
  );
  await page.goto("http://127.0.0.1:4387/cabanas/casa-paradise/");
  await expect(
    page.getByRole("heading", { name: "Casa Paradise", exact: true }),
  ).toBeVisible();
  await expect(
    page.getByRole("navigation", { name: "Navegación", exact: true }),
  ).toBeVisible();
  await expect(
    page.getByRole("img", { name: "Casa Paradise, foto 6", exact: true }),
  ).toBeAttached();
  await context.close();
});
