import { useEffect, useState, useMemo, useCallback } from "react";
import Image from "next/image";
import { LOCALE_COPY, Locale } from "../constants/locale";

const IMAGE_ROTATE_INTERVAL_MS = 7000;

interface HumanTouchProps {
  id: string;
  locale: Locale;
}

const HumanTouch = ({ id, locale }: HumanTouchProps) => {
  const copy = LOCALE_COPY[locale].humanTouch;
  const images = useMemo(() => copy.images, [copy.images]);

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
            >
              {images.map((image, index) => (
                <Image
                  key={image.src}
                  src={image.src}
                  alt={image.alt}
                  width={320}
                  height={320}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${index === activeIndex ? "opacity-100" : "opacity-0"}`}
                  onError={e => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = "/profile-picture.JPG";
                  }}
                  draggable="false"
                />
              ))}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/10 to-transparent" />

              <button
                type="button"
                aria-label={copy.prev}
                onClick={goPrev}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-theme-background/75 hover:bg-theme-background/95 text-theme-primary rounded-full w-8 h-8 flex items-center justify-center shadow pointer-events-auto"
              >
                <span className="sr-only">{copy.prev}</span>‹
              </button>
              <button
                type="button"
                aria-label={copy.next}
                onClick={goNext}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-theme-background/75 hover:bg-theme-background/95 text-theme-primary rounded-full w-8 h-8 flex items-center justify-center shadow pointer-events-auto"
              >
                <span className="sr-only">{copy.next}</span>›
              </button>

              <div className="absolute bottom-3 left-0 right-0 flex items-center justify-center gap-2 pointer-events-none">
                {images.map((_, index) => (
                  <span
                    key={index}
                    className={`h-2 w-2 rounded-full transition-colors ${index === activeIndex ? "bg-theme-accent" : "bg-theme-border"}`}
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
                    className={`text-theme-secondary font-body ${
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
