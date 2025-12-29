"use client";

import { useMemo, useState } from "react";
import Card from "./ui/Card";
import Tag from "./ui/Tag";
import ProfileImage from "./ui/ProfileImage";
import SectionIntro from "./ui/SectionIntro";
import { SKILLS_DATA, STRENGTHS_DATA } from "../constants/about";
import { LOCALE_COPY, Locale } from "../constants/locale";

const COLLAPSED_MAX_HEIGHT = "max-h-[400px]";
const EXPANDED_MAX_HEIGHT = "max-h-none";
const TRANSITION_CLASSES =
  "flex-1 overflow-hidden transition-all duration-500 ease-in-out";
const TAG_BUTTON_CLASSES =
  "px-3 py-1 rounded-full text-sm shadow-sm hover:opacity-80 transition-opacity";

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
    <div className="mt-6 flex justify-center">
      <button
        onClick={onToggle}
        className="cursor-pointer"
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
  const strengths = useMemo(
    () => copy.about.strengths || STRENGTHS_DATA,
    [copy.about.strengths]
  );
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
        <div className="mb-16">
          <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-8">
            <div className="flex-1 text-center lg:text-left">
              <SectionIntro
                title={copy.about.title}
                subtitle={copy.about.subtitle}
                align="left"
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
            </div>
            <div className="flex-shrink-0">
              <ProfileImage />
            </div>
          </div>
        </div>

        <div className="space-y-12">
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
