"use client";

import { useState } from "react";
import Card from "./ui/Card";
import Tag from "./ui/Tag";
import ProfileImage from "./ui/ProfileImage";
import SectionIntro from "./ui/SectionIntro";
import { SKILLS_DATA, STRENGTHS_DATA } from "../constants/about";
import { LOCALE_COPY, Locale } from "../constants/locale";

const COLLAPSED_MAX_HEIGHT = "max-h-none md:max-h-[400px]";
const EXPANDED_MAX_HEIGHT = "max-h-none";
const TRANSITION_CLASSES =
  "flex-1 overflow-hidden transition-all duration-500 ease-in-out";
const TAG_BUTTON_CLASSES =
  "min-h-11 px-4 py-2 rounded-full text-xs shadow-sm hover:opacity-80 transition-opacity";

interface ToggleButtonProps {
  isExpanded: boolean;
  onToggle: () => void;
  labelExpand: string;
  labelCollapse: string;
}

const ToggleButton = ({
  isExpanded,
  onToggle,
  labelExpand,
  labelCollapse,
}: ToggleButtonProps) => {
  return (
    <div className="mt-6 hidden justify-center md:flex">
      <button
        onClick={onToggle}
        className="min-h-11 cursor-pointer"
        aria-label={isExpanded ? labelCollapse : labelExpand}
      >
        <Tag tone="accent" variant="solid" className={TAG_BUTTON_CLASSES}>
          {isExpanded ? labelCollapse : labelExpand}
        </Tag>
      </button>
    </div>
  );
};

const SkillsSection = ({
  locale,
  professionalIdentity,
}: {
  locale: Locale;
  professionalIdentity: string;
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const copy = LOCALE_COPY[locale];
  const contentClassName = `${TRANSITION_CLASSES} ${
    isExpanded ? EXPANDED_MAX_HEIGHT : COLLAPSED_MAX_HEIGHT
  } opacity-100`;

  return (
    <Card className="h-full flex flex-col">
      <h3 className="text-2xl font-semibold text-theme-primary mb-6 font-heading">
        {copy.about.skillsTitle}
      </h3>
      <div className={contentClassName}>
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
                    className="px-3 py-1 rounded-full text-sm shadow-sm"
                  >
                    {skill}
                  </Tag>
                ))}
              </div>
            </div>
          ))}

          <div className="pt-4 border-t border-theme-border">
            <h4 className="text-lg font-semibold text-theme-primary mb-4 font-heading">
              {copy.about.professionalIdentityLabel}
            </h4>
            <p className="text-theme-secondary text-sm leading-relaxed font-body opacity-90">
              {professionalIdentity}
            </p>
          </div>
        </div>
      </div>
      <ToggleButton
        isExpanded={isExpanded}
        onToggle={() => setIsExpanded(!isExpanded)}
        labelExpand={copy.common.expand}
        labelCollapse={copy.common.collapse}
      />
    </Card>
  );
};

interface AboutProps {
  id: string;
  locale: Locale;
}

const AboutContent = ({ locale }: { locale: Locale }) => {
  const [isAboutExpanded, setIsAboutExpanded] = useState(false);
  const copy = LOCALE_COPY[locale];
  const paragraphs = copy.about.intro;
  const strengths = copy.about.strengths || STRENGTHS_DATA;
  const contentClassName = `${TRANSITION_CLASSES} ${
    isAboutExpanded ? EXPANDED_MAX_HEIGHT : COLLAPSED_MAX_HEIGHT
  } opacity-100`;

  return (
    <Card className="h-full flex flex-col">
      <h3 className="text-2xl font-semibold text-theme-primary mb-6 font-heading">
        {copy.about.cardTitle}
      </h3>
      <div className={contentClassName}>
        <div className="space-y-6">
          {paragraphs.map(paragraph => (
            <p
              key={paragraph}
              className="text-theme-secondary leading-relaxed font-body description"
            >
              {paragraph}
            </p>
          ))}

          <h4 className="text-lg font-semibold text-theme-primary mb-4 font-heading">
            {copy.about.strengthsTitle}
          </h4>
          <ul className="space-y-3 text-theme-secondary font-body">
            {strengths.map((strength, index) => (
              <li key={index} className="flex items-start">
                <span
                  className="text-theme-accent mr-3 mt-1"
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
      <ToggleButton
        isExpanded={isAboutExpanded}
        onToggle={() => setIsAboutExpanded(!isAboutExpanded)}
        labelExpand={copy.common.expand}
        labelCollapse={copy.common.collapse}
      />
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
                    className="inline-flex min-h-11 items-center justify-center rounded-md bg-theme-primary px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
                  >
                    {copy.about.ctaContact}
                  </a>
                  <a
                    href="#apps"
                    className="inline-flex min-h-11 items-center justify-center rounded-md border border-theme-primary px-5 py-3 text-sm font-semibold text-theme-primary transition hover:bg-theme-accent/10"
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
          <div className="grid lg:grid-cols-2 gap-12 items-stretch">
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
