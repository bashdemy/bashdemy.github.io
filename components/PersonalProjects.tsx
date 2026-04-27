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
  eyebrow: string;
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
        eyebrow?: string;
      }
    >
  >;
}

const PERSONAL_PROJECTS: Project[] = [
  {
    id: "bookshelf",
    title: "Bookshelf",
    description:
      "A reading log for books, essays, and long-form research. It combines metadata, short notes, and lightweight publishing so my reading list is easier to revisit and share.",
    link: "https://bookshelf.bashdemy.com",
    linkLabel: "Visit Bookshelf",
    domain: "bookshelf.bashdemy.com",
    highlights: [
      "Pulls in covers, authors, and summaries to keep entries consistent.",
      "Designed around quick capture first, with public sharing as a later layer.",
      "Turns short notes into a useful personal knowledge base.",
      "Gives me a small product surface to test search, metadata, and publishing ideas.",
    ],
    tags: ["Reading log", "Metadata", "Micro-reviews", "Live project"],
    eyebrow: "Reading system",
    translations: {
      ru: {
        description:
          "Читательский журнал для книг, эссе и длинных материалов. Объединяет метаданные, короткие заметки и простую публикацию, чтобы список чтения было легче пересматривать и делиться им.",
        highlights: [
          "Добавляет обложки, авторов и описания в едином формате.",
          "Спроектирован для быстрого сохранения, с публичным шарингом как следующим слоем.",
          "Превращает короткие заметки в личную базу знаний.",
          "Дает небольшую продуктовую поверхность для экспериментов с поиском, метаданными и публикацией.",
        ],
        tags: ["Читательский лог", "Метаданные", "Мини-рецензии", "Live"],
        linkLabel: "Открыть Bookshelf",
        eyebrow: "Система чтения",
      },
    },
  },
  {
    id: "writing-thoughts",
    title: "Writing & Thoughts",
    description:
      "Essays and notes on engineering, learning, community, and the ideas I keep returning to.",
    link: "https://bashdemy.substack.com",
    linkLabel: "Visit the Substack",
    domain: "bashdemy.substack.com",
    highlights: [
      "Long-form reflections on building, leading, and learning in public.",
      "Running notes from talks, interviews, and conversations that need a home.",
      "A public archive for drafts that are useful enough to share.",
    ],
    tags: ["Substack", "Essays", "In-progress ideas"],
    eyebrow: "Writing practice",
    translations: {
      ru: {
        description:
          "Эссе и заметки о разработке, обучении, сообществах и идеях, к которым я возвращаюсь.",
        highlights: [
          "Лонгриды о разработке, лидерстве и обучении в открытую.",
          "Рабочие записи с выступлений, интервью и разговоров.",
          "Публичный архив черновиков, которыми уже можно делиться.",
        ],
        tags: ["Substack", "Эссе", "Идеи в работе"],
        linkLabel: "Перейти в Substack",
        eyebrow: "Практика письма",
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
    eyebrow: translation.eyebrow ?? project.eyebrow,
  };
}

const PersonalProjects = ({ id, locale }: PersonalProjectsProps) => {
  const copy = LOCALE_COPY[locale];
  const projects = PERSONAL_PROJECTS.map(project =>
    localizeProject(project, locale)
  );

  return (
    <section id={id} className="section-padding bg-theme-background-alt">
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
                    {project.eyebrow}
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
                    className="inline-flex items-center justify-center gap-2 rounded-md bg-theme-primary px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
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
