import PropTypes from 'prop-types';
import { useEffect, useState, useMemo, useCallback } from 'react';
import Card from './ui/Card';

const IMAGE_ROTATE_INTERVAL_MS = 7000;

const HumanTouch = ({ id }) => {
  const images = useMemo(
    () => [
      { src: '/bread.jpg', alt: 'Freshly baked bread' },
      { src: '/jits.jpg', alt: 'Brazilian jiu-jitsu training' },
      { src: '/cat-picture.jpg', alt: 'Cat picture' },
    ],
    []
  );

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const goTo = useCallback(
    index => {
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
    <section id={id} className="section-padding">
      <div className="container-custom">
        <Card>
          <h4 className="text-lg font-semibold text-theme-primary mb-3 font-heading">
            The Human Touch
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-2 items-stretch">
            <div
              className="relative aspect-square w-56 sm:w-64 md:w-72 lg:w-80 mx-auto md:mx-0 rounded-xl overflow-hidden shadow-md bg-gray-200"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {images.map((image, index) => (
                <img
                  key={image.src}
                  src={image.src}
                  alt={image.alt}
                  referrerPolicy="no-referrer"
                  decoding="async"
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${index === activeIndex ? 'opacity-100' : 'opacity-0'}`}
                  onError={e => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = '/profile-picture.JPG';
                  }}
                  loading="lazy"
                  draggable="false"
                />
              ))}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/10 to-transparent" />

              <button
                type="button"
                aria-label="Previous image"
                onClick={goPrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-theme-background/70 hover:bg-theme-background/90 text-theme-primary rounded-full w-9 h-9 flex items-center justify-center shadow pointer-events-auto"
              >
                <span className="sr-only">Previous</span>‹
              </button>
              <button
                type="button"
                aria-label="Next image"
                onClick={goNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-theme-background/70 hover:bg-theme-background/90 text-theme-primary rounded-full w-9 h-9 flex items-center justify-center shadow pointer-events-auto"
              >
                <span className="sr-only">Next</span>›
              </button>

              <div className="absolute bottom-3 left-0 right-0 flex items-center justify-center gap-2 pointer-events-none">
                {images.map((_, index) => (
                  <span
                    key={index}
                    className={`h-2 w-2 rounded-full transition-colors ${index === activeIndex ? 'bg-theme-accent' : 'bg-theme-border'}`}
                  />
                ))}
              </div>
            </div>

            <div className="flex items-center">
              <div className="md:text-right">
                <p className="text-theme-secondary italic font-body">
                  When I&apos;m not writing code, you&apos;ll find me on the mats doing
                  jits🥋, baking bread🍞, or organizing women-led communities.
                  Shoot me a text about any of those and we’ll go on for hours.
                </p>
                <p className="text-theme-secondary italic font-body mt-3">
                  And I have a cat named Sushi 🐱, the unofficial supervisor of
                  all the code I write.
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

HumanTouch.propTypes = {
  id: PropTypes.string.isRequired,
};

export default HumanTouch;
