import PropTypes from 'prop-types';
import { ElementType, ReactNode } from 'react';

interface CardProps {
  as?: ElementType;
  className?: string;
  children: ReactNode;
  [key: string]: unknown;
}

function Card({ as: Component = 'div', className = '', children, ...rest }: CardProps) {
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


