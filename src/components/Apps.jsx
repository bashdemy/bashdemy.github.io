import PropTypes from 'prop-types';
import Card from './ui/Card';
import Tag from './ui/Tag';

const APPS_DATA = [];

const StatusBadge = ({ status }) => {
  const getStatusStyles = status => {
    switch (status) {
      case 'Production':
        return 'bg-green-500/20 text-green-600';
      case 'Completed':
        return 'bg-blue-500/20 text-blue-600';
      case 'In Development':
        return 'bg-theme-accent/20 text-theme-accent';
      case 'Planning':
        return 'bg-theme-secondary/20 text-theme-secondary';
      default:
        return 'bg-theme-muted/20 text-theme-muted';
    }
  };

  return (
    <span
      className={`px-2 py-1 rounded-full text-xs font-medium font-heading ${getStatusStyles(status)}`}
    >
      {status}
    </span>
  );
};

StatusBadge.propTypes = {
  status: PropTypes.string.isRequired,
};

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
          <Tag key={tech}>{tech}</Tag>
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
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-theme-primary mb-4 font-heading">
            Experience & Projects
          </h2>
          <p className="text-lg text-theme-secondary max-w-3xl mx-auto font-body description">
            A collection of my work experience, technical projects, and
            contributions to building scalable systems.
          </p>
        </div>

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
