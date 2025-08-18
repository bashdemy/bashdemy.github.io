import PropTypes from 'prop-types';
import { Home, Code, Menu, Instagram, Star } from 'lucide-react';
import ContactCard from './ui/ContactCard';
import SectionIntro from './ui/SectionIntro';

const Contact = ({ id }) => {
  return (
    <section id={id} className="section-padding bg-theme-background">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <SectionIntro
            title="Let's Connect"
            subtitle="I'm always interested in discussing technical challenges, AI integration, women in tech initiatives, and opportunities to build something amazing."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ContactCard
              icon={<Home className="w-6 h-6 text-theme-accent" />}
              title="LinkedIn"
              subtitle="for all things work"
              href="https://linkedin.com/in/bazhena-dementyeva-0b7b17159"
              label="linkedin.com/in/bazhena-dementyeva-0b7b17159"
              ariaLabel="Visit LinkedIn profile (opens in new tab)"
            />

            <ContactCard
              icon={<Code className="w-6 h-6 text-theme-accent" />}
              title="GitHub"
              subtitle="for all the vibe code"
              href="https://github.com/bashdemy"
              label="github.com/bashdemy"
              ariaLabel="Visit GitHub profile (opens in new tab)"
            />

            <ContactCard
              icon={<Menu className="w-6 h-6 text-theme-accent" />}
              title="Substack"
              subtitle="for walls of text i like to read"
              href="https://bashdemy.substack.com"
              label="bashdemy.substack.com"
              ariaLabel="Visit Substack (opens in new tab)"
            />

            <ContactCard
              icon={<Instagram className="w-6 h-6 text-theme-accent" />}
              title="Instagram"
              subtitle="for more pictures of my face, bread, and all things jits"
              href="https://instagram.com/bashdemy"
              label="@bashdemy"
              ariaLabel="Visit Instagram profile (opens in new tab)"
            />
          </div>

          <div className="mt-8">
            <ContactCard
              icon={<Star className="w-6 h-6 text-theme-accent" />}
              title="Her Tech Circle"
              subtitle="you can always find me at one of the Sydney events"
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

Contact.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Contact;
