import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { LOCALE_COPY, Locale } from "@/constants/locale";

const IMAGE_ROTATE_INTERVAL_MS = 7000;

interface HumanTouchProps {
  id: string;
  locale: Locale;
}

const HumanTouch = ({ id, locale }: HumanTouchProps) => {
  const copy = LOCALE_COPY[locale].humanTouch;
  const images = copy.images;

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      const total = images.length;
      const nextIndex = ((index % total) + total) % total;
      setActiveIndex(nextIndex);
    },
    [images.length]
  );

  const goNext = useCallback(() => goTo(activeIndex + 1), [activeIndex, goTo]);
  const goPrev = useCallback(() => goTo(activeIndex - 1), [activeIndex, goTo]);

  useEffect(() => {
    if (isPaused) return undefined;
    const idInterval = setInterval(goNext, IMAGE_ROTATE_INTERVAL_MS);
    return () => clearInterval(idInterval);
  }, [goNext, isPaused]);

  return (
    <section id={id} className="section-padding pt-8">
      <div className="container-custom">
        <div className="mx-auto max-w-4xl border-t border-theme-border/70 pt-10">
          <div className="grid grid-cols-1 md:grid-cols-[13rem_1fr] gap-8 md:gap-10 items-center">
            <div
              className="relative aspect-square w-44 sm:w-48 md:w-52 mx-auto md:mx-0 rounded-lg overflow-hidden shadow-sm bg-theme-background-alt"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              onTouchStart={() => setIsPaused(true)}
              onTouchEnd={() => setIsPaused(false)}
              aria-label="Image gallery"
            >
              {images.map((image, index) => (
                <Image
                  key={image.src}
                  src={image.src}
                  alt={image.alt}
                  width={320}
                  height={320}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                    index === activeIndex ? "opacity-100" : "opacity-0"
                  }`}
                  onError={e => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = "/profile-picture.JPG";
                  }}
                  draggable="false"
                />
              ))}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/20 via-transparent to-transparent" />

              <button
                type="button"
                aria-label={copy.prev}
                onClick={goPrev}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-theme-background/85 hover:bg-theme-background/95 text-theme-primary rounded-full w-9 h-9 flex items-center justify-center shadow-md transition-transform active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-theme-primary cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                aria-label={copy.next}
                onClick={goNext}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-theme-background/85 hover:bg-theme-background/95 text-theme-primary rounded-full w-9 h-9 flex items-center justify-center shadow-md transition-transform active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-theme-primary cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" aria-hidden="true" />
              </button>

              <div className="absolute bottom-2.5 left-0 right-0 flex items-center justify-center gap-1.5 z-10">
                {images.map((img, index) => (
                  <button
                    key={img.src}
                    type="button"
                    onClick={() => goTo(index)}
                    aria-label={`View ${img.alt}`}
                    aria-pressed={index === activeIndex}
                    className={`h-2.5 rounded-full transition-all cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-theme-primary ${
                      index === activeIndex
                        ? "w-5 bg-theme-accent"
                        : "w-2.5 bg-white/70 hover:bg-white"
                    }`}
                  />
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-theme-primary mb-3 font-heading">
                {copy.title}
              </h4>
              <div className="max-w-2xl">
                {copy.body.map((text, idx) => (
                  <p
                    key={text}
                    className={`text-theme-secondary font-body leading-relaxed ${
                      idx > 0 ? "mt-3" : ""
                    }`}
                  >
                    {text}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HumanTouch;
