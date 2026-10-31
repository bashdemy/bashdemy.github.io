import { useMemo, useState } from "react";
import Image from "next/image";
import { ArrowUpRight, X } from "lucide-react";
import Card from "./ui/Card";
import StatusBadge from "./ui/StatusBadge";
import Tag from "./ui/Tag";
import SectionIntro from "./ui/SectionIntro";
import { LOCALE_COPY, Locale } from "@/constants/locale";

interface LocalizedFields {
  title?: string;
  description?: string;
  stack?: string[];
  chipsLabel?: string;
  extraLinks?: Array<{
    label: string;
    href: string;
  }>;
  imageAlt?: string;
}

interface AppData {
  id: number;
  title: string;
  description: string;
  stack: string[];
  status: string;
  statuses?: string[];
  category?: "work" | "client" | "education";
  categories?: ("work" | "client" | "education")[];
  isSubheading?: boolean;
  href?: string;
  imageSrc?: string;
  imageSrcs?: string[];
  imageAlt?: string;
  imageClassName?: string;
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
  translations?: Partial<Record<Locale, LocalizedFields>>;
}

const APPS_DATA: AppData[] = [
  {
    id: 5,
    title: "Eucalyptus",
    description:
      "Engineering work on digital healthcare products across web, backend, and mobile systems, with a focus on dependable patient and clinician experiences.",
    stack: [
      "TypeScript",
      "Node.js",
      "GraphQL",
      "React Native",
      "PostgreSQL",
      "Go",
      "Microservices",
      "GCP",
    ],
    status: "Production",
    statuses: ["Current Role", "Production"],
    category: "work",
    href: "https://www.eucalyptus.vc/",
    imageSrc: "/euc.jpg",
    imageAlt: "Eucalyptus logo",
    extraLinks: [
      { label: "Meet Eucalyptus", href: "https://www.eucalyptus.vc/" },
    ],
    translations: {
      ru: {
        description:
          "Инженерная работа над цифровыми медицинскими продуктами: веб, backend и мобильные системы с фокусом на надежный опыт для пациентов и клиницистов.",
        stack: [
          "TypeScript",
          "Node.js",
          "GraphQL",
          "React Native",
          "PostgreSQL",
          "Go",
          "Микросервисы",
          "GCP",
        ],
        extraLinks: [
          {
            label: "О компании Eucalyptus",
            href: "https://www.eucalyptus.vc/",
          },
        ],
        imageAlt: "Логотип Eucalyptus",
      },
    },
  },
  {
    id: 6,
    title: "UNSW",
    description:
      "Currently completing a Master of Information Technology at UNSW, specialising in Artificial Intelligence.",
    stack: ["M.IT (Artificial Intelligence)"],
    chipsLabel: "Credentials",
    status: "Currently in Progress",
    statuses: ["Currently in Progress"],
    category: "education",
    isSubheading: true,
    href: "https://www.unsw.edu.au/",
    imageSrc: "/unsw_0.png",
    imageAlt: "UNSW logo",
    extraLinks: [{ label: "UNSW", href: "https://www.unsw.edu.au/" }],
    translations: {
      ru: {
        description:
          "Учусь на Master of Information Technology в UNSW со специализацией в области искусственного интеллекта.",
        stack: ["Магистр ИТ (Искусственный интеллект)"],
        extraLinks: [{ label: "UNSW", href: "https://www.unsw.edu.au/" }],
        imageAlt: "Логотип UNSW",
      },
    },
  },
  {
    id: 7,
    title: "Sonia Kania Photography",
    description:
      "Designed and built a photography portfolio and booking website for Sonia Kania, shaping the visual system, image-led gallery experience, service pages, and contact flow for a small creative business.",
    stack: [
      "Next.js",
      "TypeScript",
      "Responsive Design",
      "Image Optimisation",
      "SEO",
      "Cloudflare",
    ],
    status: "Production",
    statuses: ["Completed", "Production"],
    categories: ["client", "work"],
    href: "https://soniakania.com",
    imageSrc: "/sonia-kania/branding.jpg",
    imageAlt: "Sonia Kania photography portfolio website",
    extraLinks: [{ label: "View site", href: "https://soniakania.com" }],
    translations: {
      ru: {
        description:
          "Дизайн и разработка портфолио и сайта для бронирования съемок Sonia Kania: визуальная система, галереи, страницы услуг и контактный сценарий для небольшого творческого бизнеса.",
        stack: [
          "Next.js",
          "TypeScript",
          "Адаптивный дизайн",
          "Оптимизация изображений",
          "SEO",
          "Cloudflare",
        ],
        extraLinks: [{ label: "Открыть сайт", href: "https://soniakania.com" }],
        imageAlt: "Фотопортфолио Sonia Kania",
      },
    },
  },
  {
    id: 8,
    title: "Elm & Stone Consulting",
    description:
      "Designing and building a website for Elm & Stone Consulting, a technical R&D consultancy supporting validation planning, R&D Tax Incentive evidence, protocol review, and technical documentation for science-driven businesses.",
    stack: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Cloudflare Pages",
      "Cloudflare Functions",
      "SEO",
    ],
    status: "In Development",
    statuses: ["In Development"],
    categories: ["client", "work"],
    href: "https://elmandstone.com.au/",
    imageSrc: "/elm-and-stone-og-image.png",
    imageAlt: "Elm & Stone Consulting website preview",
    extraLinks: [{ label: "View site", href: "https://elmandstone.com.au/" }],
    translations: {
      ru: {
        description:
          "Дизайн и разработка сайта для Elm & Stone Consulting, технической R&D-консалтинговой компании в области validation planning, R&D Tax Incentive evidence, protocol review и технической документации для science-driven бизнеса.",
        stack: [
          "React",
          "TypeScript",
          "Vite",
          "Tailwind CSS",
          "Cloudflare Pages",
          "Cloudflare Functions",
          "SEO",
        ],
        extraLinks: [
          { label: "Открыть сайт", href: "https://elmandstone.com.au/" },
        ],
        imageAlt: "Превью сайта Elm & Stone Consulting",
      },
    },
  },
  {
    id: 2,
    title: "Workflow86 (YC W22)",
    description:
      "Built product features for a workflow automation platform used by operations teams to replace manual business processes with reliable, auditable workflows.",
    stack: ["React", "Java (Spring Boot)", "AWS", "LangChain", "Microservices"],
    status: "Production",
    statuses: ["Completed", "Production"],
    category: "work",
    yc: {
      label: "YC W22",
      href: "https://www.ycombinator.com/companies/workflow86",
    },
    href: "https://www.workflow86.com",
    imageSrc: "/workflow86-icon.png",
    imageAlt: "Workflow86 logo",
    extraLinks: [
      { label: "Open app", href: "https://app.workflow86.com" },
      { label: "Learn more", href: "https://www.workflow86.com" },
    ],
    translations: {
      ru: {
        description:
          "Разрабатывала продуктовые функции для платформы автоматизации рабочих процессов, которая помогает операционным командам заменять ручные процессы надежными workflow.",
        stack: [
          "React",
          "Java (Spring Boot)",
          "AWS",
          "LangChain",
          "Микросервисы",
        ],
        extraLinks: [
          {
            label: "Открыть приложение",
            href: "https://app.workflow86.com",
          },
          { label: "Подробнее", href: "https://www.workflow86.com" },
        ],
        imageAlt: "Логотип Workflow86",
      },
    },
  },
  {
    id: 1,
    title: "Yes Help Network",
    description:
      "Built a youth-led platform focused on early intervention for Domestic & Family Violence, creating a safe digital home for programs, mentorship, resources, and community support.",
    stack: [
      "Next.js",
      "TypeScript",
      "MUI",
      "Tailwind CSS",
      "GitHub Actions",
      "GitHub Pages",
    ],
    status: "Production",
    statuses: ["Completed", "Production"],
    categories: ["work", "client"],
    isSubheading: true,
    href: "https://yeshelpnetwork.github.io/",
    imageSrc: "/yeshelp-brand-lockup.png",
    imageAlt: "Yes Help Network brand lockup",
    extraLinks: [
      {
        label: "View site",
        href: "https://yeshelpnetwork.github.io/",
      },
    ],
    translations: {
      ru: {
        description:
          "Разработала молодежную платформу раннего реагирования на домашнее и семейное насилие: безопасное цифровое пространство для программ, наставничества, ресурсов и поддержки сообщества.",
        stack: [
          "Next.js",
          "TypeScript",
          "MUI",
          "Tailwind CSS",
          "GitHub Actions",
          "GitHub Pages",
        ],
        extraLinks: [
          {
            label: "Открыть сайт",
            href: "https://yeshelpnetwork.github.io/",
          },
        ],
        imageAlt: "Бренд Yes Help Network",
      },
    },
  },
  {
    id: 3,
    title: "Sydney Trains",
    description:
      "Data visualisation software built as a university capstone: processed live GTFS feeds and presented insights across maps, charts, and dashboards. Recognised as runner-up for Best Project at the EIS Projects Trade Show.",
    stack: [
      "Node.js",
      "JavaScript",
      "MySQL",
      "HTML",
      "CSS",
      "GTFS",
      "Data Viz",
    ],
    status: "Completed",
    category: "education",
    href: "https://transportnsw.info/",
    imageSrcs: ["/group.JPG", "/runner-up-project.jpg"],
    imageAlt: "Sydney Trains data visualisation project",
    isSubheading: true,
    extraLinks: [
      {
        label: "Sydney Trains",
        href: "https://transportnsw.info/",
      },
      {
        label: "UOW",
        href: "https://www.uow.edu.au/",
      },
    ],
    translations: {
      ru: {
        description:
          "Софт для визуализации данных (капстон-проект): обрабатывал live GTFS-потоки и показывал инсайты на картах, графиках и дашбордах. Проект занял второе место на ярмарке EIS Projects.",
        extraLinks: [
          {
            label: "Sydney Trains",
            href: "https://transportnsw.info/",
          },
          {
            label: "UOW",
            href: "https://www.uow.edu.au/",
          },
        ],
        imageAlt: "Проект визуализации данных Sydney Trains",
      },
    },
  },
  {
    id: 4,
    title: "UOW",
    description:
      "Bachelor of Computer Science (Software Engineering) at the University of Wollongong, and Certificate IV in Business (BSB40215) at Navitas Professional.",
    stack: [
      "B.CompSci (Software Engineering)",
      "Cert IV in Business (BSB40215)",
    ],
    chipsLabel: "Credentials",
    status: "Completed",
    category: "education",
    isSubheading: true,
    href: "https://www.uow.edu.au/",
    imageSrc: "/grad.jpg",
    imageAlt: "Graduation photo",
    extraLinks: [
      { label: "UOW", href: "https://www.uow.edu.au/" },
      { label: "Navitas", href: "https://www.navitas.com/" },
    ],
    translations: {
      ru: {
        title: "UOW",
        description:
          "Бакалавр компьютерных наук (Software Engineering) в University of Wollongong и Certificate IV in Business (BSB40215) в Navitas Professional.",
        chipsLabel: "Образование",
        extraLinks: [
          { label: "UOW", href: "https://www.uow.edu.au/" },
          { label: "Navitas", href: "https://www.navitas.com/" },
        ],
        imageAlt: "Фото с выпуска",
      },
    },
  },
];

function getAppCategories(app: AppData): ("work" | "client" | "education")[] {
  if (app.categories && app.categories.length > 0) return app.categories;
  if (app.category) return [app.category];
  return ["work"];
}

function localizeApp(app: AppData, locale: Locale): AppData {
  const translation = app.translations?.[locale];
  if (!translation) return app;

  return {
    ...app,
    title: translation.title ?? app.title,
    description: translation.description ?? app.description,
    stack: translation.stack ?? app.stack,
    chipsLabel: translation.chipsLabel ?? app.chipsLabel,
    extraLinks: translation.extraLinks ?? app.extraLinks,
    imageAlt: translation.imageAlt ?? app.imageAlt,
  };
}

interface AppCardProps {
  app: AppData;
  locale: Locale;
  selectedTech: string | null;
  onSelectTech: (tech: string) => void;
}

const AppCard = ({ app, locale, selectedTech, onSelectTech }: AppCardProps) => {
  const copy = LOCALE_COPY[locale];
  const appCopy = copy.apps;
  const commonCopy = copy.common;
  const titleText = app.title.replace("(YC W22)", "").trim();
  const linkTarget = app.href || app.extraLinks?.[0]?.href;

  const titleContent = linkTarget ? (
    <a
      href={linkTarget}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex min-h-8 items-center hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-theme-primary/40 rounded-xs"
    >
      {titleText}
    </a>
  ) : (
    titleText
  );

  const statuses = Array.isArray(app.statuses)
    ? app.statuses
    : app.status
      ? [app.status]
      : [];

  const nonProductionStatuses = statuses.filter(s => s !== "Production");
  const productionStatuses = statuses.filter(s => s === "Production");
  const statusLabel = (status: string) => appCopy.statuses[status] || status;

  const imageContent = (() => {
    if (app.imageSrcs && app.imageSrcs.length > 0) {
      return (
        <SwitchableImages
          sources={app.imageSrcs}
          alt={app.imageAlt || `${app.title} image`}
          linkTarget={linkTarget}
        />
      );
    }

    if (!app.imageSrc) return null;

    const isLogo =
      app.imageSrc.includes("unsw") ||
      app.imageSrc.includes("workflow86") ||
      app.imageSrc.includes("yeshelp") ||
      app.imageSrc.includes("euc");

    const image = (
      <Image
        src={app.imageSrc}
        alt={app.imageAlt || `${app.title} preview`}
        width={400}
        height={250}
        className={`w-full h-full transition-transform duration-300 group-hover:scale-105 ${
          isLogo ? "object-contain" : "object-cover"
        }`}
      />
    );

    const inner = (
      <div
        className={`relative w-full h-44 rounded-lg overflow-hidden mb-4 flex items-center justify-center ${
          isLogo ? "bg-theme-background-alt/30 p-4" : ""
        }`}
      >
        {image}
      </div>
    );

    return linkTarget ? (
      <a
        href={linkTarget}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open ${app.title}`}
        className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-theme-primary/40 rounded-lg"
      >
        {inner}
      </a>
    ) : (
      inner
    );
  })();

  return (
    <Card className="group h-full flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-theme-primary/50">
      <div>
        {imageContent}

        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex-1 min-w-0">
            {app.isSubheading ? (
              <h4 className="text-lg font-semibold text-theme-primary group-hover:text-theme-accent transition-colors font-heading">
                {titleContent}
              </h4>
            ) : (
              <h3 className="text-xl font-semibold text-theme-primary group-hover:text-theme-accent transition-colors font-heading">
                {titleContent}
              </h3>
            )}
            {(nonProductionStatuses.length > 0 || app.yc) && (
              <div className="mt-1.5 flex flex-wrap items-center gap-1.5">
                {nonProductionStatuses.map(s => (
                  <StatusBadge key={s} status={s} label={statusLabel(s)} />
                ))}
                {app.yc && (
                  <a
                    href={app.yc.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-6 shrink-0 items-center justify-center rounded-full border border-theme-border bg-theme-background-alt px-2.5 py-0.5 text-xs font-medium font-heading text-theme-primary transition hover:border-theme-primary hover:text-theme-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-theme-primary/40"
                  >
                    {app.yc.label}
                  </a>
                )}
              </div>
            )}
          </div>
          {productionStatuses.length > 0 && (
            <div className="flex items-center gap-1.5 shrink-0">
              {productionStatuses.map(s => (
                <StatusBadge key={s} status={s} label={statusLabel(s)} />
              ))}
            </div>
          )}
        </div>

        <div className="mb-4">
          <p className="text-theme-secondary font-body description text-sm leading-relaxed">
            {app.description}
          </p>
        </div>
      </div>

      <div className="pt-3 mt-auto border-t border-theme-border/40">
        {/* Action links */}
        {app.extraLinks && app.extraLinks.length > 0 && (
          <div className="mb-3 flex flex-wrap items-center gap-2">
            {app.extraLinks.map((link, idx) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-md text-xs font-semibold transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-theme-primary/40 ${
                  idx === 0
                    ? "bg-theme-primary text-white hover:opacity-90 shadow-2xs"
                    : "border border-theme-border bg-white text-theme-primary hover:bg-theme-accent/15"
                }`}
              >
                <span>{link.label}</span>
                <ArrowUpRight
                  className="w-3.5 h-3.5 opacity-80"
                  aria-hidden="true"
                />
              </a>
            ))}
          </div>
        )}

        {/* Tech stack chips */}
        <div className="space-y-1.5">
          <h4 className="text-[11px] font-semibold uppercase tracking-wider text-theme-muted font-heading">
            {app.chipsLabel || commonCopy.techStack}
          </h4>
          <div className="flex flex-wrap gap-1.5">
            {app.stack.map(tech => {
              const isSelected =
                selectedTech?.toLowerCase() === tech.toLowerCase();
              return (
                <button
                  key={tech}
                  type="button"
                  onClick={() => onSelectTech(tech)}
                  title={`Filter by ${tech}`}
                  className="cursor-pointer transition-transform active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-theme-primary/50 rounded-full"
                >
                  <Tag
                    tone={isSelected ? "primary" : "accent"}
                    variant="solid"
                    className={`px-2.5 py-0.5 rounded-full text-xs shadow-2xs transition-all ${
                      isSelected
                        ? "ring-2 ring-theme-primary ring-offset-1 font-bold"
                        : "hover:opacity-85"
                    }`}
                  >
                    {tech}
                  </Tag>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </Card>
  );
};

interface AppsProps {
  id: string;
  locale: Locale;
}

const Apps = ({ id, locale }: AppsProps) => {
  const [selectedCategory, setSelectedCategory] = useState<
    "all" | "work" | "client" | "education"
  >("all");
  const [selectedTech, setSelectedTech] = useState<string | null>(null);

  const copy = LOCALE_COPY[locale];
  const appCopy = copy.apps;

  const localizedApps = useMemo(
    () => APPS_DATA.map(app => localizeApp(app, locale)),
    [locale]
  );

  const categoryCounts = useMemo(() => {
    return {
      all: localizedApps.length,
      work: localizedApps.filter(a => getAppCategories(a).includes("work"))
        .length,
      client: localizedApps.filter(a => getAppCategories(a).includes("client"))
        .length,
      education: localizedApps.filter(a =>
        getAppCategories(a).includes("education")
      ).length,
    };
  }, [localizedApps]);

  const filteredApps = useMemo(() => {
    return localizedApps.filter(app => {
      const appCats = getAppCategories(app);
      const matchesCategory =
        selectedCategory === "all" || appCats.includes(selectedCategory);
      const matchesTech =
        !selectedTech ||
        app.stack.some(t => t.toLowerCase() === selectedTech.toLowerCase());
      return matchesCategory && matchesTech;
    });
  }, [localizedApps, selectedCategory, selectedTech]);

  const categories = [
    {
      id: "all" as const,
      label: appCopy.categories.all,
      count: categoryCounts.all,
    },
    {
      id: "work" as const,
      label: appCopy.categories.work,
      count: categoryCounts.work,
    },
    {
      id: "client" as const,
      label: appCopy.categories.client,
      count: categoryCounts.client,
    },
    {
      id: "education" as const,
      label: appCopy.categories.education,
      count: categoryCounts.education,
    },
  ];

  const handleSelectTech = (tech: string) => {
    if (selectedTech?.toLowerCase() === tech.toLowerCase()) {
      setSelectedTech(null);
    } else {
      setSelectedTech(tech);
    }
  };

  return (
    <section id={id} className="section-padding">
      <div className="container-custom">
        <SectionIntro
          title={appCopy.section.title}
          subtitle={appCopy.section.subtitle}
        />

        {/* Filter controls */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-8">
          {/* Category Tabs */}
          <div className="inline-flex flex-wrap rounded-xl border border-theme-border bg-white/70 p-1 shadow-xs">
            {categories.map(cat => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-theme-primary cursor-pointer font-heading ${
                  selectedCategory === cat.id
                    ? "bg-theme-primary text-white shadow-xs"
                    : "text-theme-secondary hover:text-theme-primary hover:bg-theme-accent/10"
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    selectedCategory === cat.id
                      ? "bg-white/25 text-white"
                      : "bg-theme-border/60 text-theme-muted"
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            ))}
          </div>

          {/* Active Tech Tag Filter Badge */}
          {selectedTech && (
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-theme-accent/15 border border-theme-accent/30 text-xs font-medium text-theme-primary animate-in fade-in duration-200">
              <span>
                {appCopy.filterBy}: <strong>{selectedTech}</strong> (
                {filteredApps.length})
              </span>
              <button
                type="button"
                onClick={() => setSelectedTech(null)}
                className="inline-flex items-center justify-center p-0.5 rounded-full hover:bg-theme-accent/20 text-theme-accent hover:text-theme-primary cursor-pointer"
                aria-label={appCopy.clearFilter}
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
        </div>

        {/* Projects Grid */}
        {filteredApps.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {filteredApps.map(app => (
              <AppCard
                key={app.id}
                app={app}
                locale={locale}
                selectedTech={selectedTech}
                onSelectTech={handleSelectTech}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 px-4 rounded-xl border border-dashed border-theme-border bg-theme-background-alt/60">
            <p className="text-theme-secondary mb-4 font-body">
              {appCopy.noResults}
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory("all");
                setSelectedTech(null);
              }}
              className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-theme-primary text-white text-xs font-semibold hover:opacity-90 transition-opacity cursor-pointer"
            >
              {appCopy.resetFilters}
            </button>
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
  linkTarget?: string;
}

function SwitchableImages({ sources, alt, linkTarget }: SwitchableImagesProps) {
  const [active, setActive] = useState(0);
  const safeSources = sources.slice(0, 5);
  const mainImage = (
    <Image
      src={safeSources[active]}
      alt={alt}
      width={400}
      height={300}
      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
    />
  );

  return (
    <div className="relative w-full h-44 rounded-lg overflow-hidden mb-4 bg-theme-background-alt/30">
      {linkTarget ? (
        <a
          href={linkTarget}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open ${alt}`}
          className="block w-full h-full"
        >
          {mainImage}
        </a>
      ) : (
        mainImage
      )}
      <div className="absolute bottom-2.5 right-2.5 flex items-center gap-1.5 z-10 bg-black/50 backdrop-blur-xs px-2.5 py-1 rounded-full pointer-events-auto">
        {safeSources.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={e => {
              e.preventDefault();
              e.stopPropagation();
              setActive(index);
            }}
            aria-label={`Show ${alt} photo ${index + 1}`}
            aria-pressed={index === active}
            className={`h-2 rounded-full transition-all cursor-pointer ${
              index === active
                ? "w-4 bg-white"
                : "w-2 bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
