import PropTypes from 'prop-types';
import Card from './ui/Card';
import StatusBadge from './ui/StatusBadge';
import Tag from './ui/Tag';
import SectionIntro from './ui/SectionIntro';

const APPS_DATA = [];

const AppCard = ({ app }) => (
  <Card className="group">
    <div className="flex items-center justify-between mb-4">
      <h3 className="text-xl font-semibold text-theme-primary group-hover:text-theme-accent transition-colors font-heading">
        {app.title}
      </h3>
      <StatusBadge status={app.status} />
    </div>

    <p className="text-theme-secondary mb-4 line-clamp-3 font-body description">
      {app.description}
    </p>

    <div className="space-y-2">
      <h4 className="text-sm font-medium text-theme-primary font-heading">
        Tech Stack
      </h4>
      <div className="flex flex-wrap gap-2">
        {app.stack.map(tech => (
          <Tag key={tech} variant="soft">
            {tech}
          </Tag>
        ))}
      </div>
    </div>
  </Card>
);

AppCard.propTypes = {
  app: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    stack: PropTypes.arrayOf(PropTypes.string).isRequired,
    status: PropTypes.string.isRequired,
  }).isRequired,
};

const Apps = ({ id }) => {
  return (
    <section id={id} className="section-padding bg-theme-background-alt">
      <div className="container-custom">
        <SectionIntro
          title="Experience & Projects"
          subtitle="A collection of my work experience, technical projects, and contributions to building scalable systems."
        />

        <div className="text-center">
          <Card className="inline-block max-w-2xl">
            <p className="text-theme-secondary mb-4 font-body">
              Experience content coming soon...
            </p>
            <p className="text-sm text-theme-muted font-body">
              I'm working on showcasing my projects and experience in software
              engineering, AI integration, and cloud infrastructure.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

Apps.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Apps;
