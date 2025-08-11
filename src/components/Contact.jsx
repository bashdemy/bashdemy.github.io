import PropTypes from 'prop-types';
import { Home, Code, Menu, Instagram, Star } from 'lucide-react';
import Card from './ui/Card';

const Contact = ({ id }) => {
  return (
    <section id={id} className="section-padding bg-theme-background">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-theme-primary mb-4 font-heading">
              Let's Connect
            </h2>
            <p className="text-lg text-theme-secondary max-w-2xl mx-auto font-body description">
              I'm always interested in discussing interesting technical
              challenges, AI integration, women in tech initiatives, and
              opportunities to build something amazing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group h-full">
              <Card className="flex items-start space-x-4 p-6 rounded-xl border border-theme-border/50 hover:border-theme-accent/30 hover:bg-theme-accent/5 transition-all duration-300 h-full">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-theme-accent/10 rounded-lg flex items-center justify-center group-hover:bg-theme-accent/20 transition-colors">
                    <Home className="w-6 h-6 text-theme-accent" />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold text-theme-primary mb-1 font-heading">
                    LinkedIn
                  </h3>
                  <p className="text-sm text-theme-muted mb-2 font-body">
                    for all things work
                  </p>
                  <a
                    href="https://linkedin.com/in/bazhena-dementyeva-0b7b17159"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-theme-accent hover:text-theme-accent-hover font-medium transition-colors font-mono text-sm"
                    aria-label="Visit LinkedIn profile (opens in new tab)"
                  >
                    linkedin.com/in/bazhena-dementyeva-0b7b17159
                  </a>
                </div>
              </Card>
            </div>

            <div className="group h-full">
              <Card className="flex items-start space-x-4 p-6 rounded-xl border border-theme-border/50 hover:border-theme-accent/30 hover:bg-theme-accent/5 transition-all duration-300 h-full">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-theme-accent/10 rounded-lg flex items-center justify-center group-hover:bg-theme-accent/20 transition-colors">
                    <Code className="w-6 h-6 text-theme-accent" />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold text-theme-primary mb-1 font-heading">
                    GitHub
                  </h3>
                  <p className="text-sm text-theme-muted mb-2 font-body">
                    for all the vibe code
                  </p>
                  <a
                    href="https://github.com/maria-demy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-theme-accent hover:text-theme-accent-hover font-medium transition-colors font-mono text-sm"
                    aria-label="Visit GitHub profile (opens in new tab)"
                  >
                    github.com/maria-demy
                  </a>
                </div>
              </Card>
            </div>

            <div className="group h-full">
              <Card className="flex items-start space-x-4 p-6 rounded-xl border border-theme-border/50 hover:border-theme-accent/30 hover:bg-theme-accent/5 transition-all duration-300 h-full">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-theme-accent/10 rounded-lg flex items-center justify-center group-hover:bg-theme-accent/20 transition-colors">
                    <Menu className="w-6 h-6 text-theme-accent" />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold text-theme-primary mb-1 font-heading">
                    Substack
                  </h3>
                  <p className="text-sm text-theme-muted mb-2 font-body">
                    for walls of text i like to read
                  </p>
                  <a
                    href="https://bashdemy.substack.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-theme-accent hover:text-theme-accent-hover font-medium transition-colors font-mono text-sm"
                    aria-label="Visit Substack (opens in new tab)"
                  >
                    bashdemy.substack.com
                  </a>
                </div>
              </Card>
            </div>

            <div className="group h-full">
              <Card className="flex items-start space-x-4 p-6 rounded-xl border border-theme-border/50 hover:border-theme-accent/30 hover:bg-theme-accent/5 transition-all duration-300 h-full">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-theme-accent/10 rounded-lg flex items-center justify-center group-hover:bg-theme-accent/20 transition-colors">
                    <Instagram className="w-6 h-6 text-theme-accent" />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold text-theme-primary mb-1 font-heading">
                    Instagram
                  </h3>
                  <p className="text-sm text-theme-muted mb-2 font-body">
                    for more pictures of my face and all things jits
                  </p>
                  <a
                    href="https://instagram.com/bashdemy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-theme-accent hover:text-theme-accent-hover font-medium transition-colors font-mono text-sm"
                    aria-label="Visit Instagram profile (opens in new tab)"
                  >
                    @bashdemy
                  </a>
                </div>
              </Card>
            </div>
          </div>

          <div className="mt-8">
            <div className="group">
              <Card className="flex items-start space-x-4 p-6 rounded-xl border border-theme-border/50 hover:border-theme-accent/30 hover:bg-theme-accent/5 transition-all duration-300">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-theme-accent/10 rounded-lg flex items-center justify-center group-hover:bg-theme-accent/20 transition-colors">
                    <Star className="w-6 h-6 text-theme-accent" />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold text-theme-primary mb-1 font-heading">
                    Her Tech Circle
                  </h3>
                  <p className="text-sm text-theme-muted mb-2 font-body">
                    you can always find me at one of the Sydney events
                  </p>
                  <a
                    href="https://www.hertechcircle.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-theme-accent hover:text-theme-accent-hover font-medium transition-colors font-mono text-sm"
                    aria-label="Visit Her Tech Circle (opens in new tab)"
                  >
                    hertechcircle.org
                  </a>
                </div>
              </Card>
            </div>
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
