import PropTypes from 'prop-types';

function SectionIntro({
  title,
  subtitle,
  align = 'center',
  className = '',
  subtitleClassName = '',
}) {
  const alignment =
    align === 'center'
      ? 'text-center'
      : align === 'left'
        ? 'text-left'
        : 'text-right';
  const subtitleClasses = [
    'text-theme-secondary',
    'max-w-3xl',
    'mx-auto',
    'font-body',
    'description',
    subtitleClassName || 'text-lg',
  ]
    .filter(Boolean)
    .join(' ');
  return (
    <div className={`${alignment} mb-12 ${className}`}>
      <h2 className="text-4xl font-bold text-theme-primary mb-4 font-heading">
        {title}
      </h2>
      {subtitle ? <p className={subtitleClasses}>{subtitle}</p> : null}
    </div>
  );
}

SectionIntro.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  align: PropTypes.oneOf(['left', 'center', 'right']),
  className: PropTypes.string,
  subtitleClassName: PropTypes.string,
};

export default SectionIntro;
