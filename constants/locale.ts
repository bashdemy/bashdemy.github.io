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
      subtitle:
        '(think zh="g" as in "genre," for advanced users. Otherwise, "Maria" is perfectly acceptable.)',
      role: "Software Engineer",
      location: "Sydney, Australia • She/Her",
      professionalIdentity:
        "Professionally, I go by Bazhena Dementyeva. I also respond to Maria Dementyeva or Maria Demy, and online I'm bashdemy.",
      cardTitle: "About",
      skillsTitle: "Skills & Technologies",
      professionalIdentityLabel: "Professional Identity",
      strengthsTitle: "Key Strengths",
      strengths: undefined,
      intro: [
        "Engineer focused on automating routine tasks, building reliable software, and scaling systems that matter. I take a full-stack, generalist approach but am always ready to dive deep into problems when needed.",
        "My experience includes Java (with Spring Boot) and JavaScript (with React and NextJS). I build resilient, user-focused applications, optimize cloud infrastructure (mostly AWS), and have a strong interest in practical AI and automation, including nocode and lowcode solutions. I'm committed to making tech more inclusive, with a focus on supporting women in the industry.",
        "I also believe building software should be fun. The process should feel collaborative and creative, and the result should bring people joy while staying reliable and thoughtful.",
      ],
    },
    apps: {
      section: {
        title: "Experience & Projects",
        subtitle:
          "A collection of my work experience, technical projects, and contributions.",
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
        title: "Let's Connect",
        subtitle:
          "I'm always interested in discussing technical challenges, AI integration, women in tech initiatives, and opportunities to build something amazing.",
      },
      cards: {
        linkedin: { title: "LinkedIn", subtitle: "for all things work" },
        github: { title: "GitHub", subtitle: "for all the vibe code" },
        substack: {
          title: "Substack",
          subtitle: "for walls of text i like to read",
        },
        instagram: {
          title: "Instagram",
          subtitle: "for more pictures of my face, bread, and all things jits",
        },
        herTechCircle: {
          title: "Her Tech Circle",
          subtitle: "you can always find me at one of the Sydney events",
        },
      },
    },
    footer: {
      builtBy: "Built by bashdemy ❤️",
      role: "Software Engineer • Sydney, Australia",
    },
    blog: {
      readMore: "Read more →",
      readExternal: "Read on Substack →",
      dateLocale: "en-US",
    },
    humanTouch: {
      title: "The Human Touch",
      body: [
        "When I'm not writing code, you'll find me on the mats doing jits🥋, baking bread🍞, or organizing women-led communities. Shoot me a text about any of those and we’ll go on for hours.",
        "And I have a cat named Sushi 🐱, the unofficial supervisor of all the code I write.",
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
      subtitle: 'Для продвинутых: звук "ж" как в "жанр". Можно просто "Мария".',
      role: "Инженер-программист",
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
        "Инженер, который автоматизирует рутину, строит надежные системы и умеет масштабировать то, что важно. Подход — фуллстек-генералист, но при необходимости ухожу вглубь деталей.",
        "Опыт: Java (Spring Boot) и JavaScript (React, NextJS). Строю устойчивые продукты, оптимизирую облачную инфраструктуру (чаще AWS) и применяю практический AI, включая nocode/lowcode решения. Поддерживаю инклюзивность в индустрии и инициативы для женщин в тех.",
        "Считаю, что разработка должна быть интересной: совместной, творческой и при этом надежной и продуманной.",
      ],
    },
    apps: {
      section: {
        title: "Опыт и проекты",
        subtitle: "Подборка моего опыта, технических проектов и вкладов.",
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
          "Открыта к обсуждению технических задач, интеграции AI, инициатив для женщин в ИТ и совместных проектов.",
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
      builtBy: "Сделано bashdemy ❤️",
      role: "Инженер-программист • Сидней, Австралия",
    },
    blog: {
      readMore: "Читать далее →",
      readExternal: "Читать в Substack →",
      dateLocale: "ru-RU",
    },
    humanTouch: {
      title: "Живая сторона",
      body: [
        "Когда я не пишу код, я на ковре по бразильскому джиу-джитсу🥋, пеку хлеб🍞 или помогаю сообществам, которые ведут женщины. Напишите мне об этом — будем болтать часами.",
        "А еще у меня есть кот Суши 🐱 — главный ревьюер всего, что я пишу.",
      ],
      images: [
        { src: "/bread.jpg", alt: "Свежий домашний хлеб" },
        { src: "/jits.jpg", alt: "Тренировка по бразильскому джиу-джитсу" },
        { src: "/cat-picture.jpg", alt: "Кот Суши" },
      ],
      prev: "Предыдущее фото",
      next: "Следующее фото",
    },
  },
};

export type LocaleKey = keyof typeof LOCALE_COPY;
