"use client";

import Card from "@/components/ui/Card";
import Tag from "@/components/ui/Tag";
import ProfileImage from "@/components/ui/ProfileImage";
import SectionIntro from "@/components/ui/SectionIntro";
import { SKILLS_DATA, STRENGTHS_DATA } from "@/constants/about";
import { LOCALE_COPY, Locale } from "@/constants/locale";

const SkillsSection = ({
  locale,
  professionalIdentity,
}: {
  locale: Locale;
  professionalIdentity: string;
}) => {
  const copy = LOCALE_COPY[locale];

  return (
    <Card className="h-full flex flex-col justify-between">
      <div>
        <h3 className="text-2xl font-semibold text-theme-primary mb-6 font-heading">
          {copy.about.skillsTitle}
        </h3>
        <div className="space-y-6">
          {Object.entries(SKILLS_DATA).map(([category, skillList]) => (
            <div key={category}>
              <h4 className="text-lg font-medium text-theme-accent mb-3 font-heading">
                {category}
              </h4>
              <div className="flex flex-wrap gap-2">
                {skillList.map(skill => (
                  <Tag
                    key={skill}
                    tone="accent"
                    variant="solid"
                    className="px-3 py-1 rounded-full text-sm shadow-xs"
                  >
                    {skill}
                  </Tag>
                ))}
              </div>
            </div>
          ))}

          <div className="pt-4 border-t border-theme-border">
            <h4 className="text-lg font-semibold text-theme-primary mb-3 font-heading">
              {copy.about.professionalIdentityLabel}
            </h4>
            <p className="text-theme-secondary text-sm leading-relaxed font-body opacity-90">
              {professionalIdentity}
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
};

interface AboutProps {
  id: string;
  locale: Locale;
}

const AboutContent = ({ locale }: { locale: Locale }) => {
  const copy = LOCALE_COPY[locale];
  const paragraphs = copy.about.intro;
  const strengths = copy.about.strengths || STRENGTHS_DATA;

  return (
    <Card className="h-full flex flex-col justify-between">
      <div>
        <h3 className="text-2xl font-semibold text-theme-primary mb-6 font-heading">
          {copy.about.cardTitle}
        </h3>
        <div className="space-y-6">
          {paragraphs.map(paragraph => (
            <p
              key={paragraph}
              className="text-theme-secondary leading-relaxed font-body description"
            >
              {paragraph}
            </p>
          ))}

          <h4 className="text-lg font-semibold text-theme-primary mb-3 font-heading">
            {copy.about.strengthsTitle}
          </h4>
          <ul className="space-y-3 text-theme-secondary font-body">
            {strengths.map((strength, index) => (
              <li key={index} className="flex items-start">
                <span
                  className="text-theme-accent mr-3 mt-1 shrink-0"
                  aria-hidden="true"
                >
                  •
                </span>
                <span>{strength}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Card>
  );
};

const About = ({ id, locale }: AboutProps) => {
  const copy = LOCALE_COPY[locale];
  return (
    <section id={id} className="section-padding">
      <div className="container-custom">
        <div className="mb-12 sm:mb-16">
          <div className="grid gap-8 items-center lg:grid-cols-2 lg:gap-12">
            <div className="flex h-full items-center justify-center text-center">
              <div className="w-full">
                <SectionIntro
                  title={copy.about.title}
                  subtitle={copy.about.subtitle}
                  headingLevel={1}
                  align="center"
                  className="mb-6"
                  subtitleClassName="text-sm opacity-80"
                />
                <div className="space-y-2">
                  <p className="text-theme-accent font-semibold text-xl font-heading">
                    {copy.about.role}
                  </p>
                  <p className="text-sm text-theme-secondary font-body opacity-80">
                    {copy.about.location}
                  </p>
                </div>
                <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                  <a
                    href="#contact"
                    className="inline-flex min-h-11 items-center justify-center rounded-md bg-theme-primary px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-theme-primary/50"
                  >
                    {copy.about.ctaContact}
                  </a>
                  <a
                    href="#apps"
                    className="inline-flex min-h-11 items-center justify-center rounded-md border border-theme-primary px-5 py-3 text-sm font-semibold text-theme-primary transition hover:bg-theme-accent/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-theme-primary/50"
                  >
                    {copy.about.ctaExperience}
                  </a>
                </div>
              </div>
            </div>
            <div className="flex h-full items-center justify-center">
              <ProfileImage />
            </div>
          </div>
        </div>

        <div className="space-y-10 sm:space-y-12">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            <div>
              <AboutContent locale={locale} />
            </div>
            <div>
              <SkillsSection
                locale={locale}
                professionalIdentity={copy.about.professionalIdentity}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
