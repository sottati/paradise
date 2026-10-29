import { useState } from "react";
import { ChevronLeft, ChevronRight, Grid2X2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type Photo = {
  src: string;
  srcSet: string;
  alt: string;
  width: number;
  height: number;
};
export function CabinGallery({
  photos,
  name,
}: {
  photos: Photo[];
  name: string;
}) {
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState(false);
  const photo = photos[active];
  if (!photo) return null;
  function move(delta: number) {
    setActive((index) => (index + delta + photos.length) % photos.length);
  }
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <div className="relative">
        <div className="grid grid-cols-2 gap-2 overflow-hidden rounded-xl sm:gap-3 md:grid-cols-4">
          {photos.slice(0, 5).map((image, index) => (
            <DialogTrigger asChild key={image.src}>
              <button
                type="button"
                onClick={() => setActive(index)}
                aria-label={`Ampliar foto ${index + 1} de ${name}`}
                className={`group relative overflow-hidden bg-muted ${index === 0 ? "col-span-2 aspect-[4/3] md:row-span-2 md:aspect-auto" : "aspect-[4/3]"}`}
              >
                <img
                  src={image.src}
                  srcSet={image.srcSet}
                  width={image.width}
                  height={image.height}
                  alt={image.alt}
                  sizes={
                    index === 0
                      ? "(max-width: 767px) 100vw, 50vw"
                      : "(max-width: 767px) 50vw, 25vw"
                  }
                  loading={index === 0 ? "eager" : "lazy"}
                  className="size-full object-cover transition-opacity group-hover:opacity-90"
                />
              </button>
            </DialogTrigger>
          ))}
        </div>
        <DialogTrigger asChild>
          <Button
            variant="secondary"
            className="absolute bottom-4 right-4 border border-white/60 bg-background shadow-sm"
            onClick={() => setActive(0)}
          >
            <Grid2X2 className="size-4" />
            Ver las {photos.length} fotos
          </Button>
        </DialogTrigger>
      </div>
      <DialogContent
        className="flex max-h-[94svh] flex-col overflow-y-auto p-4 sm:max-w-5xl sm:p-6"
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft") {
            event.preventDefault();
            move(-1);
          }
          if (event.key === "ArrowRight") {
            event.preventDefault();
            move(1);
          }
        }}
      >
        <DialogHeader className="pr-8 text-left">
          <DialogTitle>{name}</DialogTitle>
          <DialogDescription>
            Recorré la cabaña. Usá las flechas para cambiar de foto.
          </DialogDescription>
        </DialogHeader>
        <div className="flex min-h-0 items-center justify-center overflow-hidden rounded-lg bg-muted">
          <img
            src={photo.src}
            srcSet={photo.srcSet}
            alt={photo.alt}
            width={photo.width}
            height={photo.height}
            sizes="(max-width: 1024px) 100vw, 1000px"
            className="max-h-[62svh] w-full object-contain"
          />
        </div>
        <div className="flex items-center justify-between gap-3">
          <Button
            variant="outline"
            size="icon"
            onClick={() => move(-1)}
            aria-label="Foto anterior"
          >
            <ChevronLeft className="size-5" />
          </Button>
          <p
            className="text-sm tabular-nums text-muted-foreground"
            aria-live="polite"
          >
            Foto {active + 1} de {photos.length}
          </p>
          <Button
            variant="outline"
            size="icon"
            onClick={() => move(1)}
            aria-label="Foto siguiente"
          >
            <ChevronRight className="size-5" />
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
