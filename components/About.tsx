"use client";

import { useState } from "react";
import Card from "./ui/Card";
import Tag from "./ui/Tag";
import ProfileImage from "./ui/ProfileImage";
import SectionIntro from "./ui/SectionIntro";
import { SKILLS_DATA, STRENGTHS_DATA } from "../constants/about";

const COLLAPSED_MAX_HEIGHT = "max-h-[400px]";
const EXPANDED_MAX_HEIGHT = "max-h-none";
const TRANSITION_CLASSES =
  "flex-1 overflow-hidden transition-all duration-500 ease-in-out";
const TAG_BUTTON_CLASSES =
  "px-3 py-1 rounded-full text-sm shadow-sm hover:opacity-80 transition-opacity";

interface ToggleButtonProps {
  isExpanded: boolean;
  onToggle: () => void;
}

const ToggleButton = ({ isExpanded, onToggle }: ToggleButtonProps) => {
  return (
    <div className="mt-6 flex justify-center">
      <button
        onClick={onToggle}
        className="cursor-pointer"
        aria-label={isExpanded ? "Collapse" : "Expand"}
      >
        <Tag tone="accent" variant="solid" className={TAG_BUTTON_CLASSES}>
          {isExpanded ? "Collapse" : "Expand"}
        </Tag>
      </button>
    </div>
  );
};

const SkillsSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const contentClassName = `${TRANSITION_CLASSES} ${
    isExpanded ? EXPANDED_MAX_HEIGHT : COLLAPSED_MAX_HEIGHT
  } opacity-100`;

  return (
    <Card className="h-full flex flex-col">
      <h3 className="text-2xl font-semibold text-theme-primary mb-6 font-heading">
        Skills & Technologies
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
              Professional Identity
            </h4>
            <p className="text-theme-secondary text-sm leading-relaxed font-body opacity-90">
              Professionally, I go by <strong>Bazhena Dementyeva</strong>. I
              also respond to <strong>Maria Dementyeva</strong> or
              <strong> Maria Demy</strong>, and online I&apos;m
              <strong> bashdemy</strong>.
            </p>
          </div>
        </div>
      </div>
      <ToggleButton
        isExpanded={isExpanded}
        onToggle={() => setIsExpanded(!isExpanded)}
      />
    </Card>
  );
};

interface AboutProps {
  id: string;
}

const AboutContent = () => {
  const [isAboutExpanded, setIsAboutExpanded] = useState(false);
  const contentClassName = `${TRANSITION_CLASSES} ${
    isAboutExpanded ? EXPANDED_MAX_HEIGHT : COLLAPSED_MAX_HEIGHT
  } opacity-100`;

  return (
    <Card className="h-full flex flex-col">
      <h3 className="text-2xl font-semibold text-theme-primary mb-6 font-heading">
        About
      </h3>
      <div className={contentClassName}>
        <div className="space-y-6">
          <p className="text-theme-secondary leading-relaxed font-body description">
            Engineer focused on automating routine tasks, building reliable
            software, and scaling systems that matter. I take a{" "}
            <strong>full-stack</strong>, generalist approach but am always ready
            to dive deep into problems when needed.
          </p>

          <p className="text-theme-secondary leading-relaxed font-body description">
            My experience includes <strong>Java</strong> (with{" "}
            <strong>Spring Boot</strong>) and <strong>JavaScript</strong> (with{" "}
            <strong>React</strong> and <strong>NextJS</strong>). I build
            resilient, user-focused applications, optimize{" "}
            <strong>cloud infrastructure</strong> (mostly <strong>AWS</strong>),
            and have a strong interest in practical <strong>AI</strong> and
            automation, including nocode and lowcode solutions. I&apos;m
            committed to making tech more inclusive, with a focus on supporting
            women in the industry.
          </p>

          <p className="text-theme-secondary leading-relaxed font-body description">
            I also believe building software should be fun. The process should
            feel collaborative and creative, and the result should bring people
            joy while staying reliable and thoughtful.
          </p>

          <h4 className="text-lg font-semibold text-theme-primary mb-4 font-heading">
            Key Strengths
          </h4>
          <ul className="space-y-3 text-theme-secondary font-body">
            {STRENGTHS_DATA.map((strength, index) => (
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
      />
    </Card>
  );
};

const About = ({ id }: AboutProps) => {
  return (
    <section id={id} className="section-padding">
      <div className="container-custom">
        <div className="mb-16">
          <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-8">
            <div className="flex-1 text-center lg:text-left">
              <SectionIntro
                title="Bazhena Dementyeva"
                subtitle='(think zh="g" as in "genre," for advanced users. Otherwise, "Maria" is perfectly acceptable.)'
                align="left"
                className="mb-6"
                subtitleClassName="text-sm opacity-80"
              />
              <div className="space-y-2">
                <p className="text-theme-accent font-semibold text-xl font-heading">
                  Software Engineer
                </p>
                <p className="text-sm text-theme-secondary font-body opacity-80">
                  Sydney, Australia • She/Her
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
              <AboutContent />
            </div>
            <div>
              <SkillsSection />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
