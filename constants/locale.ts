export type Locale = "en" | "ru";

export const LOCALE_OPTIONS: Array<{ value: Locale; label: string }> = [
  { value: "en", label: "EN" },
  { value: "ru", label: "RU" },
];

type SectionCopy = {
  title: string;
  subtitle?: string;
};

export const LOCALE_COPY = {
  en: {
    nav: {
      about: "About",
      apps: "Experience",
      personalProjects: "Personal Projects",
      contact: "Contact",
    },
    common: {
      expand: "Expand",
      collapse: "Collapse",
      techStack: "Tech Stack",
      or: "or",
      highlights: "Highlights",
      flavorTags: "Flavor Tags",
      liveAt: "Live at",
    },
    about: {
      title: "Bazhena Dementyeva",
      subtitle: 'Pronounced with "zh" as in "genre";\nMaria also works.',
      role: "Senior Software Engineer",
      location: "Sydney, Australia • She/Her",
      professionalIdentity:
        "Professionally, I go by Bazhena Dementyeva. I also respond to Maria Dementyeva or Maria Demy, and online I'm bashdemy.",
      cardTitle: "About",
      skillsTitle: "Skills & Technologies",
      professionalIdentityLabel: "Professional Identity",
      strengthsTitle: "Key Strengths",
      strengths: undefined,
      intro: [
        "Software engineer with full-stack experience across product teams, startup environments, and production systems. I like work that combines clear user problems with thoughtful engineering.",
        "My recent work spans TypeScript, Node.js, GraphQL, React Native, Go, PostgreSQL, and microservices. I also bring experience in React, Next.js, Java Spring Boot, AWS, CI/CD, and workflow automation.",
        "I care about reliable delivery, readable systems, and the kind of team culture where people can do good work without needing to perform confidence all day.",
      ],
    },
    apps: {
      section: {
        title: "Experience & Projects",
        subtitle:
          "Selected roles, client work, education, and technical projects.",
      },
      statuses: {
        Production: "Production",
        Completed: "Completed",
        "In Development": "In Development",
        Planning: "Planning",
        "Current Role": "Current Role",
        "Currently in Progress": "Currently in Progress",
      },
    },
    personalProjects: {
      section: { title: "Personal Projects", subtitle: "Just for fun." },
      projectCopy: {
        bookshelf: {
          highlightsLabel: "Highlights",
          flavorTagsLabel: "Flavor Tags",
        },
      },
    },
    contact: {
      section: {
        title: "Contact",
        subtitle:
          "Open to engineering roles, technical collaborations, and women-in-tech community work.",
      },
      cards: {
        linkedin: {
          title: "LinkedIn",
          subtitle: "work and professional updates",
        },
        github: {
          title: "GitHub",
          subtitle: "code, experiments, and projects",
        },
        substack: {
          title: "Substack",
          subtitle: "essays and notes",
        },
        instagram: {
          title: "Instagram",
          subtitle: "photos, bread, and Brazilian jiu-jitsu",
        },
        herTechCircle: {
          title: "Her Tech Circle",
          subtitle: "you can always find me at one of the Sydney events",
        },
      },
    },
    footer: {
      builtBy: "Built by bashdemy ♡",
      role: "Senior Software Engineer • Sydney, Australia",
    },
    blog: {
      readMore: "Read more →",
      readExternal: "Read on Substack →",
      dateLocale: "en-US",
    },
    humanTouch: {
      title: "Outside Work",
      body: [
        "Outside engineering, I train Brazilian jiu-jitsu, bake bread, and help organise women-led community events.",
        "I also live with Sushi, a cat with strong opinions about desk space.",
      ],
      images: [
        { src: "/bread.jpg", alt: "Freshly baked bread" },
        { src: "/jits.jpg", alt: "Brazilian jiu-jitsu training" },
        { src: "/cat-picture.jpg", alt: "Cat picture" },
      ],
      prev: "Previous image",
      next: "Next image",
    },
  },
  ru: {
    nav: {
      about: "Обо мне",
      apps: "Опыт",
      personalProjects: "Проекты",
      contact: "Контакты",
    },
    common: {
      expand: "Развернуть",
      collapse: "Свернуть",
      techStack: "Технологии",
      or: "или",
      highlights: "Главное",
      flavorTags: "Теги",
      liveAt: "Доступно на",
    },
    about: {
      title: "Бажена Дементьева",
      subtitle: 'Звук "ж" как в "жанр".\nМожно просто Мария.',
      role: "Старший инженер-программист",
      location: "Сидней, Австралия • she/her",
      professionalIdentity:
        "По работе я Бажена Дементьева. Отзываюсь на Марию Дементьеву и Maria Demy, а онлайн я — bashdemy.",
      cardTitle: "Обо мне",
      skillsTitle: "Навыки и технологии",
      professionalIdentityLabel: "Профессиональное имя",
      strengthsTitle: "Сильные стороны",
      strengths: [
        "Думаю системно и руками довожу архитектуру до простых решений.",
        "Люблю автоматизировать рутину и упрощать процессы для команд.",
        "Умею общаться с пользователями и переводить боль в задачи.",
        "Веду инициативы по инклюзивности и поддержке женщин в ИТ.",
      ],
      intro: [
        "Инженер-программист с full-stack опытом в продуктовых командах, стартапах и продакшн-системах. Мне интересны задачи, где понятная пользовательская проблема встречается с аккуратной инженерией.",
        "Последний опыт включает TypeScript, Node.js, GraphQL, React Native, Go, PostgreSQL и микросервисы. Также работаю с React, Next.js, Java Spring Boot, AWS, CI/CD и автоматизацией процессов.",
        "Ценю надежную поставку, читаемые системы и командную культуру, где людям не нужно постоянно изображать уверенность, чтобы хорошо работать.",
      ],
    },
    apps: {
      section: {
        title: "Опыт и проекты",
        subtitle: "Роли, клиентские проекты, образование и технические работы.",
      },
      statuses: {
        Production: "Продакшн",
        Completed: "Завершено",
        "In Development": "В разработке",
        Planning: "Планирование",
        "Current Role": "Текущая роль",
        "Currently in Progress": "В процессе",
      },
    },
    personalProjects: {
      section: {
        title: "Личные проекты",
        subtitle: "Для души.",
      },
      projectCopy: {
        bookshelf: {
          highlightsLabel: "Главное",
          flavorTagsLabel: "Теги",
        },
      },
    },
    contact: {
      section: {
        title: "Связаться",
        subtitle:
          "Открыта к инженерным ролям, техническим коллаборациям и инициативам для женщин в ИТ.",
      },
      cards: {
        linkedin: { title: "LinkedIn", subtitle: "по работе" },
        github: { title: "GitHub", subtitle: "код и проекты" },
        substack: { title: "Substack", subtitle: "эссе и заметки" },
        instagram: {
          title: "Instagram",
          subtitle: "фото, хлеб и бразильское джиу-джитсу",
        },
        herTechCircle: {
          title: "Her Tech Circle",
          subtitle: "я на ивентах в Сиднее",
        },
      },
    },
    footer: {
      builtBy: "Сделано bashdemy ♡",
      role: "Старший инженер-программист • Сидней, Австралия",
    },
    blog: {
      readMore: "Читать далее →",
      readExternal: "Читать в Substack →",
      dateLocale: "ru-RU",
    },
    humanTouch: {
      title: "Вне работы",
      body: [
        "Вне разработки я занимаюсь бразильским джиу-джитсу, пеку хлеб и помогаю организовывать женские комьюнити.",
        "Еще со мной живет кошка Суши, у которой сильное мнение о том, кому принадлежит рабочий стол.",
      ],
      images: [
        { src: "/bread.jpg", alt: "Свежий домашний хлеб" },
        { src: "/jits.jpg", alt: "Тренировка по бразильскому джиу-джитсу" },
        { src: "/cat-picture.jpg", alt: "Кошка Суши" },
      ],
      prev: "Предыдущее фото",
      next: "Следующее фото",
    },
  },
};

export type LocaleKey = keyof typeof LOCALE_COPY;
