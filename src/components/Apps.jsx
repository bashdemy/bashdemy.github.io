import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Card from './ui/Card';
import StatusBadge from './ui/StatusBadge';
import Tag from './ui/Tag';
import SectionIntro from './ui/SectionIntro';

const APPS_DATA = [
  {
    id: 1,
    title: 'Yes Help Network',
    description:
      'A youth-led platform focused on early intervention for Domestic & Family Violence (DFV). Yes Help Network creates safe spaces and programs that equip young people with mentorship, skills, and community—so they can speak up, heal, and lead.',
    stack: [
      'Next.js (App Router)',
      'TypeScript',
      'MUI',
      'Tailwind CSS',
      'GitHub Actions',
      'GitHub Pages',
    ],
    status: 'Production',
    href: 'https://yeshelpnetwork.github.io/',
    imageSrc: '/yeshelp-brand-lockup.png',
    imageAlt: 'Yes Help Network brand lockup',
  },
];

const AppCard = ({ app }) => (
  <Card className="group">
    {app.imageSrc ? (
      app.href ? (
        <a
          href={app.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open ${app.title}`}
        >
          <img
            src={app.imageSrc}
            alt={app.imageAlt || `${app.title} logo`}
            className="mb-4 w-full rounded border border-theme-border bg-white object-contain p-3"
          />
        </a>
      ) : (
        <img
          src={app.imageSrc}
          alt={app.imageAlt || `${app.title} logo`}
          className="mb-4 w-full rounded border border-theme-border bg-white object-contain p-3"
        />
      )
    ) : null}
    <div className="flex items-center justify-between mb-4">
      <h3 className="text-xl font-semibold text-theme-primary group-hover:text-theme-accent transition-colors font-heading">
        {app.href ? (
          <a
            href={app.href}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            {app.title}
          </a>
        ) : (
          app.title
        )}
      </h3>
      <StatusBadge status={app.status} />
    </div>

    <p className="text-theme-secondary mb-4 font-body description">
      {app.description}
    </p>

    <div className="space-y-2">
      <h4 className="text-sm font-medium text-theme-primary font-heading">
        Tech Stack
      </h4>
      <div className="flex flex-wrap gap-2">
        {app.stack.map(tech => (
          <Tag
            key={tech}
            tone="accent"
            variant="solid"
            className="px-3 py-1 rounded-full text-sm shadow-sm"
          >
            {tech}
          </Tag>
        ))}
      </div>
    </div>
  </Card>
);

AppCard.propTypes = {
  app: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    stack: PropTypes.arrayOf(PropTypes.string).isRequired,
    status: PropTypes.string.isRequired,
    imageSrc: PropTypes.string,
    imageAlt: PropTypes.string,
    href: PropTypes.string,
  }).isRequired,
};

const Apps = ({ id }) => {
  const hasApps = Array.isArray(APPS_DATA) && APPS_DATA.length > 0;
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const [slideWidth, setSlideWidth] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const gapPx = 24; // Tailwind gap-6

  const carouselItems = hasApps
    ? APPS_DATA.length >= 3
      ? APPS_DATA.slice(0, 3)
      : Array.from({ length: 3 }, (_, i) => APPS_DATA[i % APPS_DATA.length])
    : [];

  useEffect(() => {
    const measure = () => {
      const container = containerRef.current;
      if (!container) return;
      const firstSlide = container.querySelector('[data-slide="true"]');
      if (firstSlide) {
        const { width } = firstSlide.getBoundingClientRect();
        setSlideWidth(width);
      }
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    const track = trackRef.current;
    if (!container || !track || !slideWidth) return;
    const containerWidth = container.getBoundingClientRect().width;
    const offset =
      activeIndex * (slideWidth + gapPx) - (containerWidth - slideWidth) / 2;
    track.style.transform = `translateX(${-offset}px)`;
  }, [activeIndex, slideWidth]);

  useEffect(() => {
    if (isHovered || carouselItems.length === 0) return;
    const id = setInterval(() => {
      setActiveIndex(current => (current + 1) % carouselItems.length);
    }, 4000);
    return () => clearInterval(id);
  }, [carouselItems.length, isHovered]);

  const goPrev = () => {
    setActiveIndex(
      current => (current - 1 + carouselItems.length) % carouselItems.length
    );
  };
  const goNext = () => {
    setActiveIndex(current => (current + 1) % carouselItems.length);
  };

  return (
    <section id={id} className="section-padding bg-theme-background-alt">
      <div className="container-custom">
        <SectionIntro
          title="Experience & Projects"
          subtitle="A collection of my work experience, technical projects, and contributions to building scalable systems."
        />

        {hasApps ? (
          <div className="relative">
            <div
              ref={containerRef}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="overflow-hidden px-1"
            >
              <div
                ref={trackRef}
                className="flex items-stretch gap-6 transition-transform duration-500 ease-out will-change-transform"
              >
                {carouselItems.map((app, index) => {
                  const isActive = index === activeIndex;
                  return (
                    <div
                      key={`${app.id}-${index}`}
                      data-slide="true"
                      className={[
                        'shrink-0 w-72 md:w-96 lg:w-[28rem] transition-all duration-500',
                        isActive
                          ? 'scale-100 opacity-100 z-10'
                          : 'scale-90 opacity-60 z-0',
                      ].join(' ')}
                    >
                      <AppCard app={app} />
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="pointer-events-none absolute inset-0 flex items-center justify-between">
              <button
                type="button"
                aria-label="Previous"
                onClick={goPrev}
                className="pointer-events-auto mx-2 rounded-full bg-theme-surface/80 text-theme-primary hover:bg-theme-surface p-2 shadow"
              >
                <ChevronLeft className="h-5 w-5 text-pink-500" />
              </button>
              <button
                type="button"
                aria-label="Next"
                onClick={goNext}
                className="pointer-events-auto mx-2 rounded-full bg-theme-surface/80 text-theme-primary hover:bg-theme-surface p-2 shadow"
              >
                <ChevronRight className="h-5 w-5 text-pink-500" />
              </button>
            </div>
          </div>
        ) : (
          <div className="text-center">
            <Card className="inline-block max-w-2xl">
              <p className="text-theme-secondary mb-4 font-body">
                Experience content coming soon...
              </p>
              <p className="text-sm text-theme-muted font-body">
                I'm working on showcasing my projects and experience in software
                engineering, AI integration, and cloud infrastructure.
              </p>
            </Card>
          </div>
        )}
      </div>
    </section>
  );
};

Apps.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Apps;
