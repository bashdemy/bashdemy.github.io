import PropTypes from 'prop-types';

function Card({ as: Component = 'div', className = '', children, ...rest }) {
  const classes = ['card', className].filter(Boolean).join(' ');
  return (
    <Component className={classes} {...rest}>
      {children}
    </Component>
  );
}

Card.propTypes = {
  as: PropTypes.elementType,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Card;


