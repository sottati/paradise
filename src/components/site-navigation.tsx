import { useState } from "react";
import { ArrowUpRight, Menu, Waves } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { cabinLinks, site } from "@/lib/site";

export function SiteNavigation({ pathname }: { pathname: string }) {
  const [open, setOpen] = useState(false);
  const isCabin = pathname.startsWith("/cabanas");
  return (
    <>
      <NavigationMenu
        aria-label="Navegación principal"
        className="hidden md:flex"
      >
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger
              className="bg-transparent"
              data-active={isCabin || undefined}
            >
              Cabañas
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[360px] gap-1 p-2">
                <li>
                  <NavigationMenuLink asChild>
                    <a
                      href="/cabanas"
                      aria-current={
                        pathname.replace(/\/$/, "") === "/cabanas"
                          ? "page"
                          : undefined
                      }
                      className="flex-row items-center gap-3"
                    >
                      <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-secondary">
                        <Waves className="size-5" />
                      </span>
                      <span>
                        <span className="block font-medium">
                          Todas las cabañas
                        </span>
                        <span className="text-xs text-muted-foreground">
                          Encontrá tu lugar en Chapa
                        </span>
                      </span>
                    </a>
                  </NavigationMenuLink>
                </li>
                {cabinLinks.map((link) => (
                  <li key={link.href}>
                    <NavigationMenuLink asChild>
                      <a
                        href={link.href}
                        aria-current={
                          pathname.replace(/\/$/, "") === link.href
                            ? "page"
                            : undefined
                        }
                        className="flex-row justify-between"
                      >
                        <span>{link.label}</span>
                        <span className="text-xs text-muted-foreground">
                          {link.capacity}
                        </span>
                      </a>
                    </NavigationMenuLink>
                  </li>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <a href="/#experiencia" className="bg-transparent">
                La experiencia
              </a>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <a href="/#ubicacion" className="bg-transparent">
                Ubicación
              </a>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div className="flex items-center gap-2">
        <Button asChild size="sm" className="hidden min-h-10 sm:inline-flex">
          <a href={site.whatsapp} target="_blank" rel="noopener noreferrer">
            Consultar disponibilidad
            <ArrowUpRight className="size-4" />
          </a>
        </Button>
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="size-11 md:hidden"
              aria-label="Abrir menú"
            >
              <Menu className="size-5" />
            </Button>
          </SheetTrigger>
          <SheetContent className="w-[min(90vw,380px)]">
            <SheetHeader className="pb-6 pt-10">
              <SheetTitle>Paradise Chapadmalal</SheetTitle>
              <SheetDescription>
                Unos días entre el campo y el mar.
              </SheetDescription>
            </SheetHeader>
            <nav
              aria-label="Navegación móvil"
              className="flex flex-col gap-1 px-4"
            >
              {[
                { label: "Inicio", href: "/" },
                { label: "Todas las cabañas", href: "/cabanas" },
                ...cabinLinks,
                { label: "La experiencia", href: "/#experiencia" },
                { label: "Ubicación", href: "/#ubicacion" },
              ].map((link) => (
                <Button
                  asChild
                  variant="ghost"
                  className="h-11 justify-start"
                  key={link.href}
                >
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    aria-current={
                      pathname.replace(/\/$/, "") ===
                      link.href.replace(/\/$/, "")
                        ? "page"
                        : undefined
                    }
                  >
                    {link.label}
                  </a>
                </Button>
              ))}
              <Separator className="my-4" />
              <Button asChild>
                <a
                  href={site.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Consultar disponibilidad
                  <ArrowUpRight className="size-4" />
                </a>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}
