import { Home, Code, Menu, Instagram, Star } from "lucide-react";
import ContactCard from "./ui/ContactCard";
import SectionIntro from "./ui/SectionIntro";
import { LOCALE_COPY, Locale } from "../constants/locale";

interface ContactProps {
  id: string;
  locale: Locale;
}

const Contact = ({ id, locale }: ContactProps) => {
  const copy = LOCALE_COPY[locale].contact;
  const cards = copy.cards;

  return (
    <section id={id} className="section-padding bg-theme-background">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <SectionIntro
            title={copy.section.title}
            subtitle={copy.section.subtitle}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ContactCard
              icon={<Home className="w-6 h-6 text-theme-accent" />}
              title={cards.linkedin.title}
              subtitle={cards.linkedin.subtitle}
              href="https://linkedin.com/in/bazhena-dementyeva-0b7b17159"
              label="linkedin.com/in/bazhena-dementyeva-0b7b17159"
              ariaLabel="Visit LinkedIn profile (opens in new tab)"
            />

            <ContactCard
              icon={<Code className="w-6 h-6 text-theme-accent" />}
              title={cards.github.title}
              subtitle={cards.github.subtitle}
              href="https://github.com/bashdemy"
              label="github.com/bashdemy"
              ariaLabel="Visit GitHub profile (opens in new tab)"
            />

            <ContactCard
              icon={<Menu className="w-6 h-6 text-theme-accent" />}
              title={cards.substack.title}
              subtitle={cards.substack.subtitle}
              href="https://bashdemy.substack.com"
              label="bashdemy.substack.com"
              ariaLabel="Visit Substack (opens in new tab)"
            />

            <ContactCard
              icon={<Instagram className="w-6 h-6 text-theme-accent" />}
              title={cards.instagram.title}
              subtitle={cards.instagram.subtitle}
              href="https://instagram.com/bashdemy"
              label="@bashdemy"
              ariaLabel="Visit Instagram profile (opens in new tab)"
            />
          </div>

          <div className="mt-8">
            <ContactCard
              icon={<Star className="w-6 h-6 text-theme-accent" />}
              title={cards.herTechCircle.title}
              subtitle={cards.herTechCircle.subtitle}
              href="https://www.hertechcircle.org/"
              label="hertechcircle.org"
              ariaLabel="Visit Her Tech Circle (opens in new tab)"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
