import PropTypes from 'prop-types';
import Card from './Card';

function ContactCard({ icon, title, subtitle, href, label, ariaLabel }) {
  return (
    <div className="group h-full">
      <Card
        as="a"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ariaLabel}
        className="flex items-start space-x-4 p-6 rounded-xl border border-theme-border/50 hover:border-theme-accent/30 hover:bg-theme-accent/5 transition-all duration-300 h-full"
      >
        <div className="flex-shrink-0">
          <div className="w-12 h-12 bg-theme-accent/10 rounded-lg flex items-center justify-center group-hover:bg-theme-accent/20 transition-colors">
            {icon}
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold text-theme-primary mb-1 font-heading">
            {title}
          </h3>
          <p className="text-sm text-theme-muted mb-2 font-body">{subtitle}</p>
          <span className="text-theme-accent group-hover:text-theme-accent-hover font-medium transition-colors font-mono text-sm">
            {label}
          </span>
        </div>
      </Card>
    </div>
  );
}

ContactCard.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  ariaLabel: PropTypes.string.isRequired,
};

export default ContactCard;
