import { ArrowUpRight } from "lucide-react";
import Card from "./ui/Card";
import SectionIntro from "./ui/SectionIntro";
import Tag from "./ui/Tag";
import { LOCALE_COPY, Locale } from "../constants/locale";

interface PersonalProjectsProps {
  id: string;
  locale: Locale;
}

interface Project {
  id: string;
  title: string;
  description: string;
  link: string;
  linkLabel: string;
  domain: string;
  highlights: string[];
  tags: string[];
  vibe: string;
  translations?: Partial<
    Record<
      Locale,
      {
        title?: string;
        description?: string;
        linkLabel?: string;
        domain?: string;
        highlights?: string[];
        tags?: string[];
        vibe?: string;
      }
    >
  >;
}

const PERSONAL_PROJECTS: Project[] = [
  {
    id: "bookshelf",
    title: "Bookshelf",
    description:
      "A living reading log that tracks the essays, books, and long-form rabbit holes I am currently exploring. It pairs metadata pulled from ISBN and RSS sources with my own micro-notes so friends can skim my queue and see what shaped my thinking recently while I prototype AI-native reading workflows.",
    link: "https://bookshelf.bashdemy.com",
    linkLabel: "Visit Bookshelf",
    domain: "bookshelf.bashdemy.com",
    highlights: [
      "Auto-curates covers, authors, and summaries so every entry feels like a tiny trading card.",
      "Vision: eventually you can sign up and log what you are reading.",
      "AI pairing takes a few keywords, guesses the item, and fills the details as a sketch of designing with AI in mind.",
      "Lets me publish bite-sized reviews that double as personal knowledge base entries.",
    ],
    tags: ["Reading log", "Metadata sync", "Micro-reviews", "Live project"],
    vibe: "Built because my notes app deserved an upgrade.",
    translations: {
      ru: {
        description:
          "Живой читательский журнал с эссе, книгами и длинными статьями. Тянет метаданные из ISBN и RSS, добавляет мои мини-заметки, чтобы друзья видели, что влияет на меня, пока я строю AI-флоу для чтения.",
        highlights: [
          "Автоматически добавляет обложки, авторов и аннотации — каждое издание как карточка.",
          "Идея: дать пользователям регистрироваться и вести свой список.",
          "AI добирает детали по ключевым словам — упражнение в проектировании с AI.",
          "Позволяет публиковать короткие заметки, которые становятся частью базы знаний.",
        ],
        tags: ["Читательский лог", "Синк метаданных", "Мини-рецензии", "Live"],
        linkLabel: "Открыть Bookshelf",
        vibe: "Сделала, потому что заметкам нужен апгрейд.",
      },
    },
  },
  {
    id: "writing-thoughts",
    title: "Writing & Thoughts",
    description:
      "Here are my attempts to write things. Essays, experiments, and sometimes I just dump thoughts about what I am reading so I can think in public more often.",
    link: "https://bashdemy.substack.com",
    linkLabel: "Visit the Substack",
    domain: "bashdemy.substack.com",
    highlights: [
      "Long-form reflections on building, leading, and learning in public.",
      "Running notes from talks, interviews, and conversations that need a home.",
      "A forcing function to ship drafts instead of letting them rot in Notes.",
    ],
    tags: ["Substack", "Essays", "In-progress ideas"],
    vibe: "Because thoughts only count if they leave the doc.",
    translations: {
      ru: {
        description:
          "Мои тексты и попытки писать. Эссе, эксперименты и публичные черновики о прочитанном.",
        highlights: [
          "Лонгриды о разработке, лидерстве и обучении в открытую.",
          "Рабочие записи с выступлений, интервью и разговоров.",
          "Пинок себе, чтобы публиковать, а не хранить в черновиках.",
        ],
        tags: ["Substack", "Эссе", "Идеи в работе"],
        linkLabel: "Перейти в Substack",
        vibe: "Мысли имеют вес, когда покидают заметки.",
      },
    },
  },
];

function localizeProject(project: Project, locale: Locale): Project {
  const translation = project.translations?.[locale];
  if (!translation) return project;
  return {
    ...project,
    title: translation.title ?? project.title,
    description: translation.description ?? project.description,
    linkLabel: translation.linkLabel ?? project.linkLabel,
    domain: translation.domain ?? project.domain,
    highlights: translation.highlights ?? project.highlights,
    tags: translation.tags ?? project.tags,
    vibe: translation.vibe ?? project.vibe,
  };
}

const PersonalProjects = ({ id, locale }: PersonalProjectsProps) => {
  const copy = LOCALE_COPY[locale];
  const projects = PERSONAL_PROJECTS.map(project =>
    localizeProject(project, locale)
  );

  return (
    <section id={id} className="section-padding bg-theme-surface/30">
      <div className="container-custom">
        <SectionIntro
          title={copy.personalProjects.section.title}
          subtitle={copy.personalProjects.section.subtitle}
          subtitleClassName="text-base md:text-lg"
        />

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map(project => (
            <Card
              key={project.id}
              className="h-full p-8 shadow-lg shadow-theme-border/40 border border-theme-border/80 bg-theme-background/80 backdrop-blur"
            >
              <div className="flex flex-col gap-6 h-full">
                <div>
                  <p className="text-sm uppercase tracking-wide text-theme-muted font-heading">
                    {project.vibe}
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold text-theme-primary font-heading">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-theme-secondary font-body description">
                    {project.description}
                  </p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-theme-primary font-heading uppercase tracking-wide mb-3">
                    {copy.common.highlights}
                  </p>
                  <ul className="space-y-3 text-theme-secondary font-body">
                    {project.highlights.map(highlight => (
                      <li key={highlight} className="flex gap-2">
                        <span className="text-theme-accent">✦</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="text-sm font-semibold text-theme-primary font-heading uppercase tracking-wide mb-3">
                    {copy.common.flavorTags}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <Tag
                        key={tag}
                        tone="accent"
                        variant="soft"
                        className="px-4 py-1 rounded-full text-sm"
                      >
                        {tag}
                      </Tag>
                    ))}
                  </div>
                </div>

                <div className="mt-auto flex flex-col gap-3 border-t border-theme-border/60 pt-4">
                  <span className="text-xs uppercase tracking-widest text-theme-muted font-heading">
                    {copy.common.liveAt}
                  </span>
                  <span className="text-lg font-semibold text-theme-primary font-heading">
                    {project.domain}
                  </span>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-theme-accent px-5 py-3 text-sm font-semibold text-white transition hover:bg-theme-accent-hover"
                    aria-label={project.linkLabel}
                  >
                    {project.linkLabel}
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PersonalProjects;
