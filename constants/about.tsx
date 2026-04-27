import type { ReactElement } from "react";

export const SKILLS_DATA: Record<string, string[]> = {
  Frontend: [
    "React",
    "Next.js",
    "React Native",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
  ],
  Backend: [
    "Java Spring Boot",
    "Node.js",
    "Go",
    "Python",
    "GraphQL",
    "REST APIs",
    "Microservices",
  ],
  "Cloud & Delivery": ["AWS", "GCP", "Docker", "GitHub Actions", "CI/CD"],
  Data: ["PostgreSQL", "MySQL", "MongoDB", "Data Modelling"],
  "Product Engineering": [
    "Mobile Development",
    "Workflow Automation",
    "Platform Development",
    "Performance Tuning",
  ],
  Other: ["Linux", "Bash", "Troubleshooting", "Technical Communication"],
};

export const STRENGTHS_DATA: ReactElement[] = [
  <>Full-stack product engineering across web, backend, and mobile surfaces</>,
  <>
    Backend delivery with <strong>Spring Boot</strong>, <strong>GraphQL</strong>
    , <strong>REST APIs</strong>, and service-oriented architecture
  </>,
  <>
    Reliable frontend work in <strong>React</strong>, <strong>Next.js</strong>,
    and <strong>React Native</strong>
  </>,
  <>
    Comfortable taking ambiguous product problems from discovery to shipped
    implementation
  </>,
  <>
    Startup experience: adaptable, pragmatic, and calm with changing priorities
  </>,
  <>
    Delivery discipline across <strong>CI/CD</strong>, cloud infrastructure, and
    production support
  </>,
  <>
    Data-aware engineering, from database design to practical reporting and
    dashboards
  </>,
  <>
    Clear technical communication with engineers, product teams, and community
    stakeholders
  </>,
  <>
    Active in women-in-tech communities and thoughtful about inclusive team
    culture
  </>,
];
