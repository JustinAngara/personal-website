import './Card.css';

const Card = ({ 
  children, 
  variant = 'default',
  className = '',
  onClick,
  ...props 
}) => {
  return (
    <div
      className={`card card-${variant} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card; 