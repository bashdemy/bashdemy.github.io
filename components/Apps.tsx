import { useState } from "react";
import Image from "next/image";
import Card from "./ui/Card";
import StatusBadge from "./ui/StatusBadge";
import Tag from "./ui/Tag";
import SectionIntro from "./ui/SectionIntro";
import { LOCALE_COPY, Locale } from "../constants/locale";

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
      "Eucalyptus builds full-stack digital clinics like Juniper, Pilot, Kin, and Software so patients can get world-class care without waiting rooms.",
    stack: ["TypeScript", "Node.js", "PostgreSQL", "Go", "Mobile Development"],
    status: "Production",
    statuses: ["Current Role", "Production"],
    href: "https://www.eucalyptus.vc/",
    imageSrc: "/euc.jpg",
    imageAlt: "Eucalyptus logo",
    extraLinks: [
      { label: "Meet Eucalyptus", href: "https://www.eucalyptus.vc/" },
    ],
    translations: {
      ru: {
        description:
          "Eucalyptus строит полнофункциональные цифровые клиники — Juniper, Pilot, Kin и Software — чтобы пациенты получали качественную помощь без ожидания.",
        stack: [
          "TypeScript",
          "Node.js",
          "PostgreSQL",
          "Go",
          "Мобильная разработка",
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
      "Currently pursuing Master of Information Technology (Artificial Intelligence) at UNSW. The Master of Information Technology program with a specialisation in Artificial Intelligence.",
    stack: ["M.IT (Artificial Intelligence)"],
    chipsLabel: "Credentials",
    status: "Currently in Progress",
    statuses: ["Currently in Progress"],
    isSubheading: true,
    href: "https://www.unsw.edu.au/",
    imageSrc: "/unsw_0.png",
    imageAlt: "UNSW logo",
    extraLinks: [{ label: "UNSW", href: "https://www.unsw.edu.au/" }],
    translations: {
      ru: {
        description:
          "Учусь на программе Master of Information Technology (Artificial Intelligence) в UNSW — двухлетняя магистратура со специализацией в области ИИ.",
        stack: ["Магистр ИТ (Искусственный интеллект)"],
        extraLinks: [{ label: "UNSW", href: "https://www.unsw.edu.au/" }],
        imageAlt: "Логотип UNSW",
      },
    },
  },
  {
    id: 2,
    title: "Workflow86 (YC W22)",
    description:
      "Workflow86 helps teams automate and streamline complex business operations with AI-powered workflow automation, turning manual processes into reliable, scalable workflows.",
    stack: [
      "React",
      "Java (Spring Boot)",
      "AWS",
      "OpenAI",
      "LangChain",
      "Microservices",
    ],
    status: "Production",
    statuses: ["Completed", "Production"],
    yc: {
      label: "YC W22",
      href: "https://www.ycombinator.com/companies/workflow86",
    },
    href: "https://www.workflow86.com",
    imageSrc: "/workflow86-icon.png",
    imageAlt: "Workflow86 logo",
    imageClassName: "w-24 h-24 mx-auto",
    extraLinks: [
      { label: "Learn more", href: "https://www.workflow86.com" },
      { label: "Sign up 😉", href: "https://app.workflow86.com" },
    ],
    extraLinksStyle: "or",
    translations: {
      ru: {
        description:
          "Workflow86 помогает командам автоматизировать и масштабировать сложные бизнес-процессы с помощью AI — превращая ручные операции в надежные рабочие процессы.",
        stack: [
          "React",
          "Java (Spring Boot)",
          "AWS",
          "OpenAI",
          "LangChain",
          "Микросервисы",
        ],
        extraLinks: [
          { label: "Подробнее", href: "https://www.workflow86.com" },
          {
            label: "Зарегистрироваться 😉",
            href: "https://app.workflow86.com",
          },
        ],
        imageAlt: "Логотип Workflow86",
      },
    },
  },
  {
    id: 1,
    title: "Yes Help Network",
    description:
      "A youth-led platform focused on early intervention for Domestic & Family Violence (DFV). Yes Help Network creates safe spaces and programs that equip young people with mentorship, skills, and community, so they can speak up, heal, and lead.",
    stack: [
      "Next.js (App Router)",
      "TypeScript",
      "MUI",
      "Tailwind CSS",
      "GitHub Actions",
      "GitHub Pages",
    ],
    status: "Production",
    statuses: ["Production", "Completed"],
    isSubheading: true,
    href: "https://yeshelpnetwork.github.io/",
    imageSrc: "/yeshelp-brand-lockup.png",
    imageAlt: "Yes Help Network brand lockup",
    translations: {
      ru: {
        description:
          "Молодежная платформа раннего реагирования на домашнее и семейное насилие. Yes Help Network создаёт безопасные пространства и программы наставничества, развития навыков и поддержки сообщества.",
        stack: [
          "Next.js (App Router)",
          "TypeScript",
          "MUI",
          "Tailwind CSS",
          "GitHub Actions",
          "GitHub Pages",
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
    title: "Education",
    description:
      "Bachelor of Computer Science (Software Engineering) at the University of Wollongong, and Certificate IV in Business (BSB40215) at Navitas Professional.",
    stack: [
      "B.CompSci (Software Engineering)",
      "Cert IV in Business (BSB40215)",
    ],
    chipsLabel: "Credentials",
    status: "Completed",
    isSubheading: true,
    href: "https://www.uow.edu.au/",
    imageSrc: "/grad.jpg",
    imageAlt: "Graduation photo",
    imageClassName: "w-full h-auto max-h-56 md:max-h-72 object-contain p-0",
    extraLinks: [
      { label: "UOW", href: "https://www.uow.edu.au/" },
      { label: "Navitas", href: "https://www.navitas.com/" },
    ],
    translations: {
      ru: {
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
}

const AppCard = ({ app, locale }: AppCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
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
      className="hover:underline"
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

  const imageClassName = [
    "mb-4 rounded border border-theme-border bg-white object-contain p-3",
    app.imageClassName || "w-full",
  ].join(" ");

  const contentClassName = `overflow-hidden transition-all duration-500 ease-in-out ${
    isExpanded ? "max-h-[2000px]" : "max-h-0"
  }`;

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

    const image = (
      <Image
        src={app.imageSrc}
        alt={app.imageAlt || `${app.title} logo`}
        width={300}
        height={200}
        className={imageClassName}
      />
    );

    return linkTarget ? (
      <a
        href={linkTarget}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open ${app.title}`}
      >
        {image}
      </a>
    ) : (
      image
    );
  })();

  return (
    <Card className="group flex flex-col self-start">
      {imageContent}

      <div className="flex items-center justify-between mb-4">
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
            <div className="mt-1 flex flex-wrap items-center gap-2">
              {nonProductionStatuses.map(s =>
                s === "Currently in Progress" ? (
                  <Tag
                    key={s}
                    tone="accent"
                    variant="solid"
                    className="px-3 py-1 rounded-full text-sm shadow-sm"
                  >
                    {statusLabel(s)}
                  </Tag>
                ) : (
                  <StatusBadge key={s} status={s} label={statusLabel(s)} />
                )
              )}
              {app.yc && (
                <a
                  href={app.yc.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2 py-1 rounded text-xs bg-[#f0652f] text-white hover:opacity-90"
                >
                  {app.yc.label}
                </a>
              )}
            </div>
          )}
        </div>
        {productionStatuses.length > 0 && (
          <div className="flex items-center gap-2">
            {productionStatuses.map(s => (
              <StatusBadge key={s} status={s} label={statusLabel(s)} />
            ))}
          </div>
        )}
      </div>

      <div className="mb-4">
        <p
          className={`text-theme-secondary font-body description ${
            isExpanded ? "" : "line-clamp-3"
          }`}
        >
          {app.description}
        </p>
      </div>

      <div className={contentClassName}>
        <div className="pt-0">
          {app.extraLinks && app.extraLinks.length > 0 && (
            <div className="mb-4 flex flex-wrap items-center gap-2">
              {app.extraLinksStyle === "or" && app.extraLinks.length >= 2 ? (
                <>
                  <a
                    href={app.extraLinks[0].href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-theme-accent hover:text-theme-accent-hover text-sm underline"
                  >
                    {app.extraLinks[0].label}
                  </a>
                  <span className="text-theme-muted text-sm">
                    {commonCopy.or}
                  </span>
                  <a
                    href={app.extraLinks[1].href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-theme-accent hover:text-theme-accent-hover text-sm underline"
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
                    className="text-theme-accent hover:text-theme-accent-hover text-sm underline"
                  >
                    {link.label}
                  </a>
                ))
              )}
            </div>
          )}

          <div className="space-y-2 mb-4">
            <h4 className="text-sm font-medium text-theme-primary font-heading">
              {app.chipsLabel || commonCopy.techStack}
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
        </div>
      </div>

      <div className="mt-auto flex justify-center">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="cursor-pointer"
          aria-label={isExpanded ? commonCopy.collapse : commonCopy.expand}
        >
          <Tag tone="accent" variant="solid">
            {isExpanded ? commonCopy.collapse : commonCopy.expand}
          </Tag>
        </button>
      </div>
    </Card>
  );
};

interface AppsProps {
  id: string;
  locale: Locale;
}

const Apps = ({ id, locale }: AppsProps) => {
  const copy = LOCALE_COPY[locale];
  const appCopy = copy.apps;
  const hasApps = Array.isArray(APPS_DATA) && APPS_DATA.length > 0;
  const localizedApps = APPS_DATA.map(app => localizeApp(app, locale));

  return (
    <section id={id} className="section-padding">
      <div className="container-custom">
        <SectionIntro
          title={appCopy.section.title}
          subtitle={appCopy.section.subtitle}
        />

        {hasApps ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
            {localizedApps.map(app => (
              <AppCard key={app.id} app={app} locale={locale} />
            ))}
          </div>
        ) : (
          <div className="text-center">
            <Card className="inline-block max-w-2xl">
              <p className="text-theme-secondary mb-4 font-body">
                Experience content coming soon...
              </p>
              <p className="text-sm text-theme-muted font-body">
                I&apos;m working on showcasing my projects and experience in
                software engineering, AI integration, and cloud infrastructure.
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
      className="w-full h-auto object-contain"
    />
  );

  return (
    <div className="mb-4">
      <div className="w-full h-auto max-h-56 md:max-h-72 rounded border border-theme-border overflow-hidden bg-white p-0">
        {linkTarget ? (
          <a
            href={linkTarget}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${alt}`}
            className="block"
          >
            {mainImage}
          </a>
        ) : (
          mainImage
        )}
      </div>
      <div className="mt-2 flex gap-2">
        {safeSources.map((src, index) => (
          <button
            key={src}
            type="button"
            onClick={() => setActive(index)}
            className={[
              "h-10 w-14 md:w-16 rounded border transition-colors",
              index === active
                ? "border-theme-accent ring-1 ring-theme-accent"
                : "border-theme-border hover:border-theme-accent/60",
            ].join(" ")}
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
