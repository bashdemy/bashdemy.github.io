import { useState } from "react";
import Image from "next/image";
import Card from "./ui/Card";
import StatusBadge from "./ui/StatusBadge";
import Tag from "./ui/Tag";
import SectionIntro from "./ui/SectionIntro";

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
  },
  {
    id: 6,
    title: "UNSW",
    description:
      "Currently pursuing Master of Information Technology (Artificial Intelligence) at UNSW. The Master of Information Technology is a 2-year program with a specialisation in Artificial Intelligence.",
    stack: ["M.IT (Artificial Intelligence)"],
    chipsLabel: "Credentials",
    status: "Currently in Progress",
    statuses: ["Currently in Progress"],
    isSubheading: true,
    imageSrc: "/unsw_0.png",
    imageAlt: "UNSW logo",
    linkImage: false,
    extraLinks: [{ label: "UNSW", href: "https://www.unsw.edu.au/" }],
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
    linkImage: false,
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
    imageSrc: "/grad.jpg",
    imageAlt: "Graduation photo",
    imageClassName: "w-full h-auto max-h-56 md:max-h-72 object-contain p-0",
    linkImage: false,
    extraLinks: [
      { label: "UOW", href: "https://www.uow.edu.au/" },
      { label: "Navitas", href: "https://www.navitas.com/" },
    ],
  },
];

interface AppCardProps {
  app: AppData;
}

const AppCard = ({ app }: AppCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const titleText = app.title.replace("(YC W22)", "").trim();
  const titleContent = app.href ? (
    <a
      href={app.href}
      target="_blank"
      rel="noopener noreferrer"
      className="hover:underline"
    >
      {titleText}
    </a>
  ) : (
    titleText
  );

  const nonProductionStatuses = Array.isArray(app.statuses)
    ? app.statuses.filter(s => s !== "Production")
    : app.status && app.status !== "Production"
      ? [app.status]
      : [];

  const productionStatuses = Array.isArray(app.statuses)
    ? app.statuses.filter(s => s === "Production")
    : app.status === "Production"
      ? [app.status]
      : [];

  const imageClassName = [
    "mb-4 rounded border border-theme-border bg-white object-contain p-3",
    app.imageClassName || "w-full",
  ].join(" ");

  const contentClassName = `overflow-hidden transition-all duration-500 ease-in-out ${
    isExpanded ? "max-h-[2000px]" : "max-h-0"
  }`;

  return (
    <Card className="group flex flex-col h-full">
      {app.imageSrcs && app.imageSrcs.length > 0 ? (
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
              className={imageClassName}
            />
          </a>
        ) : (
          <Image
            src={app.imageSrc}
            alt={app.imageAlt || `${app.title} logo`}
            width={300}
            height={200}
            className={imageClassName}
          />
        )
      ) : null}

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
                    {s}
                  </Tag>
                ) : (
                  <StatusBadge key={s} status={s} />
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
              <StatusBadge key={s} status={s} />
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
                  <span className="text-theme-muted text-sm">or</span>
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
              {app.chipsLabel || "Tech Stack"}
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
          aria-label={isExpanded ? "Collapse" : "Expand"}
        >
          <Tag tone="accent" variant="solid">
            {isExpanded ? "Collapse" : "Expand"}
          </Tag>
        </button>
      </div>
    </Card>
  );
};

interface AppsProps {
  id: string;
}

const Apps = ({ id }: AppsProps) => {
  const hasApps = Array.isArray(APPS_DATA) && APPS_DATA.length > 0;

  return (
    <section id={id} className="section-padding">
      <div className="container-custom">
        <SectionIntro
          title="Experience & Projects"
          subtitle="A collection of my work experience, technical projects, and contributions."
        />

        {hasApps ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
            {APPS_DATA.map(app => (
              <AppCard key={app.id} app={app} />
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
}

function SwitchableImages({ sources, alt }: SwitchableImagesProps) {
  const [active, setActive] = useState(0);
  const safeSources = sources.slice(0, 5);

  return (
    <div className="mb-4">
      <div className="w-full h-auto max-h-56 md:max-h-72 rounded border border-theme-border overflow-hidden bg-white p-0">
        <Image
          src={safeSources[active]}
          alt={alt}
          width={400}
          height={300}
          className="w-full h-auto object-contain"
        />
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
