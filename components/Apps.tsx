import { useEffect, useMemo, useRef, useState, useCallback } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Card from './ui/Card';
import StatusBadge from './ui/StatusBadge';
import Tag from './ui/Tag';
import SectionIntro from './ui/SectionIntro';

const AUTO_ROTATE_INTERVAL_MS = 8000;

interface AppData {
  id: number;
  title: string;
  description: string;
  stack: string[];
  status: string;
  statuses?: string[];
  isSubheading?: boolean;
  href?: string;
  imageSrc?: string;
  imageSrcs?: string[];
  imageAlt?: string;
  imageClassName?: string;
  linkImage?: boolean;
  chipsLabel?: string;
  yc?: {
    label: string;
    href: string;
  };
  extraLinks?: Array<{
    label: string;
    href: string;
  }>;
  extraLinksStyle?: string;
}

const APPS_DATA: AppData[] = [
  {
    id: 1,
    title: 'Yes Help Network',
    description:
      'A youth-led platform focused on early intervention for Domestic & Family Violence (DFV). Yes Help Network creates safe spaces and programs that equip young people with mentorship, skills, and community, so they can speak up, heal, and lead.',
    stack: [
      'Next.js (App Router)',
      'TypeScript',
      'MUI',
      'Tailwind CSS',
      'GitHub Actions',
      'GitHub Pages',
    ],
    status: 'Production',
    statuses: ['Production', 'Completed'],
    isSubheading: true,
    href: 'https://yeshelpnetwork.github.io/',
    imageSrc: '/yeshelp-brand-lockup.png',
    imageAlt: 'Yes Help Network brand lockup',
  },
  {
    id: 2,
    title: 'Workflow86 (YC W22)',
    description:
      'Workflow86 helps teams automate and streamline complex business operations with AI-powered workflow automation, turning manual processes into reliable, scalable workflows.',
    stack: [
      'React',
      'Java (Spring Boot)',
      'AWS',
      'OpenAI',
      'LangChain',
      'Microservices',
    ],
    status: 'Current Role',
    statuses: ['Current Role', 'Production'],
    yc: {
      label: 'YC W22',
      href: 'https://www.ycombinator.com/companies/workflow86',
    },
    href: 'https://www.workflow86.com',
    imageSrc: '/workflow86-icon.png',
    imageAlt: 'Workflow86 logo',
    imageClassName: 'w-24 h-24 mx-auto',
    extraLinks: [
      { label: 'Learn more', href: 'https://www.workflow86.com' },
      { label: 'Sign up 😉', href: 'https://app.workflow86.com' },
    ],
    extraLinksStyle: 'or',
  },
  {
    id: 3,
    title: 'Sydney Trains',
    description:
      'Data visualisation software built as a university capstone: processed live GTFS feeds and presented insights across maps, charts, and dashboards. Recognised as runner-up for Best Project at the EIS Projects Trade Show.',
    stack: [
      'Node.js',
      'JavaScript',
      'MySQL',
      'HTML',
      'CSS',
      'GTFS',
      'Data Viz',
    ],
    status: 'Completed',
    href: 'https://transportnsw.info/',
    imageSrcs: ['/group.JPG', '/runner-up-project.jpg'],
    imageAlt: 'Sydney Trains data visualisation project',
    isSubheading: true,
    linkImage: false,
    extraLinks: [
      {
        label: 'Sydney Trains',
        href: 'https://transportnsw.info/',
      },
      {
        label: 'UOW',
        href: 'https://www.uow.edu.au/',
      },
    ],
  },
  {
    id: 4,
    title: 'Education',
    description:
      'Bachelor of Computer Science (Software Engineering) at the University of Wollongong, and Certificate IV in Business (BSB40215) at Navitas Professional.',
    stack: [
      'B.CompSci (Software Engineering)',
      'Cert IV in Business (BSB40215)',
    ],
    chipsLabel: 'Credentials',
    status: 'Completed',
    isSubheading: true,
    imageSrc: '/grad.jpg',
    imageAlt: 'Graduation photo',
    imageClassName: 'w-full h-auto max-h-56 md:max-h-72 object-contain p-0',
    extraLinks: [
      { label: 'UOW', href: 'https://www.uow.edu.au/' },
      { label: 'Navitas', href: 'https://www.navitas.com/' },
    ],
  },
];

interface AppCardProps {
  app: AppData;
}

const AppCard = ({ app }: AppCardProps) => (
  <Card className="group">
    {Array.isArray(app.imageSrcs) && app.imageSrcs.length > 0 ? (
      <SwitchableImages
        sources={app.imageSrcs}
        alt={app.imageAlt || `${app.title} image`}
      />
    ) : app.imageSrc ? (
      app.href && app.linkImage !== false ? (
        <a
          href={app.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open ${app.title}`}
        >
          <Image
            src={app.imageSrc}
            alt={app.imageAlt || `${app.title} logo`}
            width={300}
            height={200}
            className={[
              'mb-4 rounded border border-theme-border bg-white object-contain p-3',
              app.imageClassName || 'w-full',
            ].join(' ')}
          />
        </a>
      ) : (
        <Image
          src={app.imageSrc}
          alt={app.imageAlt || `${app.title} logo`}
          width={300}
          height={200}
          className={[
            'mb-4 rounded border border-theme-border bg-white object-contain p-3',
            app.imageClassName || 'w-full',
          ].join(' ')}
        />
      )
    ) : null}
    <div className="flex items-center justify-between mb-4">
      <div className="flex-1 min-w-0">
        {app.isSubheading ? (
          <h4 className="text-lg font-semibold text-theme-primary group-hover:text-theme-accent transition-colors font-heading">
            {app.href ? (
              <a
                href={app.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                {app.title.replace('(YC W22)', '').trim()}
              </a>
            ) : (
              app.title.replace('(YC W22)', '').trim()
            )}
          </h4>
        ) : (
          <h3 className="text-xl font-semibold text-theme-primary group-hover:text-theme-accent transition-colors font-heading">
            {app.href ? (
              <a
                href={app.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                {app.title.replace('(YC W22)', '').trim()}
              </a>
            ) : (
              app.title.replace('(YC W22)', '').trim()
            )}
          </h3>
        )}
        {app.yc ||
        (Array.isArray(app.statuses) &&
          app.statuses.some(s => s !== 'Production')) ||
        (app.status && app.status !== 'Production') ? (
          <div className="mt-1 flex flex-wrap items-center gap-2">
            {Array.isArray(app.statuses) ? (
              app.statuses
                .filter(s => s !== 'Production')
                .map(s => <StatusBadge key={s} status={s} />)
            ) : app.status && app.status !== 'Production' ? (
              <StatusBadge status={app.status} />
            ) : null}
            {app.yc ? (
              <a
                href={app.yc.href}
                target="_blank"
                rel="noopener noreferrer"
                className="px-2 py-1 rounded text-xs font-mono bg-[#f0652f] text-white hover:opacity-90"
              >
                {app.yc.label}
              </a>
            ) : null}
          </div>
        ) : null}
      </div>
      <div className="flex items-center gap-2">
        {Array.isArray(app.statuses) && app.statuses.length > 0 ? (
          app.statuses
            .filter(s => s === 'Production')
            .map(s => <StatusBadge key={s} status={s} />)
        ) : app.status === 'Production' ? (
          <StatusBadge status={app.status} />
        ) : null}
      </div>
    </div>

    <p className="text-theme-secondary mb-4 font-body description">
      {app.description}
    </p>

    {Array.isArray(app.extraLinks) && app.extraLinks.length > 0 ? (
      <div className="mb-4 flex flex-wrap items-center gap-2">
        {app.extraLinksStyle === 'or' && app.extraLinks.length >= 2 ? (
          <>
            <a
              href={app.extraLinks[0].href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-theme-accent hover:text-theme-accent-hover font-mono text-sm underline"
            >
              {app.extraLinks[0].label}
            </a>
            <span className="text-theme-muted font-mono text-sm">or</span>
            <a
              href={app.extraLinks[1].href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-theme-accent hover:text-theme-accent-hover font-mono text-sm underline"
            >
              {app.extraLinks[1].label}
            </a>
          </>
        ) : (
          app.extraLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-theme-accent hover:text-theme-accent-hover font-mono text-sm underline"
            >
              {link.label}
            </a>
          ))
        )}
      </div>
    ) : null}

    <div className="space-y-2">
      <h4 className="text-sm font-medium text-theme-primary font-heading">
        {app.chipsLabel || 'Tech Stack'}
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



interface AppsProps {
  id: string;
}

const Apps = ({ id }: AppsProps) => {
  const hasApps = Array.isArray(APPS_DATA) && APPS_DATA.length > 0;
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const [slideWidth, setSlideWidth] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const gapPx = 24; // Tailwind gap-6

  const itemsWithClones = useMemo(() => {
    const carouselItems = hasApps ? APPS_DATA : [];
    if (carouselItems.length > 1) {
      const first = carouselItems[0];
      const last = carouselItems[carouselItems.length - 1];
      return [last, ...carouselItems, first];
    }
    return carouselItems;
  }, [hasApps]);
  const [enableTransition, setEnableTransition] = useState(true);

  useEffect(() => {
    const measure = () => {
      const container = containerRef.current;
      if (!container) return;
      const firstSlide = container.querySelector('[data-slide="true"]');
      if (firstSlide) {
        const width = firstSlide.offsetWidth;
        setSlideWidth(width);
      }
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  useEffect(() => {
    // Initialize to first real item when using clones
    if (itemsWithClones.length > 1) {
      setActiveIndex(1);
    } else {
      setActiveIndex(0);
    }
  }, [itemsWithClones.length]);

  useEffect(() => {
    const container = containerRef.current;
    const track = trackRef.current;
    if (!container || !track || !slideWidth) return;
    const containerWidth = container.getBoundingClientRect().width;
    const offset =
      activeIndex * (slideWidth + gapPx) - (containerWidth - slideWidth) / 2;
    track.style.transform = `translateX(${-offset}px)`;
  }, [activeIndex, slideWidth, gapPx]);

  const goPrev = useCallback(() => {
    setActiveIndex(current => {
      const next = current - 1;
      return next < 0 ? 0 : next; // allow hitting leading clone (0) but not beyond
    });
  }, []);
  const goNext = useCallback(() => {
    setActiveIndex(current => {
      const lastIndex = Math.max(0, itemsWithClones.length - 1);
      const next = current + 1;
      return next > lastIndex ? lastIndex : next; // allow hitting trailing clone but not beyond
    });
  }, [itemsWithClones.length]);

  useEffect(() => {
    if (isHovered || itemsWithClones.length <= 1) return;
    const id = setInterval(() => {
      goNext();
    }, AUTO_ROTATE_INTERVAL_MS);
    return () => clearInterval(id);
  }, [goNext, isHovered, itemsWithClones.length]);

  const handleTransitionEnd = () => {
    if (itemsWithClones.length <= 1) return;
    // If we moved to the leading clone (index 0), jump to last real item
    if (activeIndex === 0) {
      setEnableTransition(false);
      const target = itemsWithClones.length - 2; // last real
      // next frame: jump without transition, then re-enable
      requestAnimationFrame(() => {
        setActiveIndex(target);
        requestAnimationFrame(() => setEnableTransition(true));
      });
    }
    // If we moved to the trailing clone (last index), jump to first real item
    if (activeIndex === itemsWithClones.length - 1) {
      setEnableTransition(false);
      requestAnimationFrame(() => {
        setActiveIndex(1);
        requestAnimationFrame(() => setEnableTransition(true));
      });
    }
  };

  return (
    <section id={id} className="section-padding bg-theme-background-alt">
      <div className="container-custom">
        <SectionIntro
          title="Experience & Projects"
          subtitle="A collection of my work experience, technical projects, and contributions."
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
                onTransitionEnd={handleTransitionEnd}
                className={[
                  'flex items-stretch gap-6 will-change-transform',
                  enableTransition
                    ? 'transition-transform duration-500 ease-out'
                    : 'transition-none',
                ].join(' ')}
              >
                {itemsWithClones.map((app, index) => {
                  const keySuffix =
                    index === 0
                      ? 'clone-start'
                      : index === itemsWithClones.length - 1
                        ? 'clone-end'
                        : 'real';
                  const isActive = index === activeIndex;
                  return (
                    <div
                      key={`${app.id}-${keySuffix}-${index}`}
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
                I&apos;m working on showcasing my projects and experience in software
                engineering, AI integration, and cloud infrastructure.
              </p>
            </Card>
          </div>
        )}
      </div>
    </section>
  );
};



export default Apps;

interface SwitchableImagesProps {
  sources: string[];
  alt: string;
}

function SwitchableImages({ sources, alt }: SwitchableImagesProps) {
  const [active, setActive] = useState(0);
  const safeSources = Array.isArray(sources) ? sources.slice(0, 5) : [];
  return (
    <div className="mb-4">
      <div className="w-full h-40 md:h-48 rounded border border-theme-border overflow-hidden">
        <Image
          src={safeSources[active]}
          alt={alt}
          width={400}
          height={200}
          className="w-full h-full object-cover bg-white"
        />
      </div>
      <div className="mt-2 flex gap-2">
        {safeSources.map((src, index) => (
          <button
            key={src}
            type="button"
            onClick={() => setActive(index)}
            className={[
              'h-10 w-14 md:w-16 rounded border transition-colors',
              index === active
                ? 'border-theme-accent ring-1 ring-theme-accent'
                : 'border-theme-border hover:border-theme-accent/60',
            ].join(' ')}
          >
            <Image
              src={src}
              alt={`${alt} thumbnail ${index + 1}`}
              width={60}
              height={40}
              className="h-full w-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
