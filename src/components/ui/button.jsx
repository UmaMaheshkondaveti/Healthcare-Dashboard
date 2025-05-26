
import React from 'react';

const Button = React.forwardRef(({ className, variant, size, children, ...props }, ref) => {
  let baseClassName = 'button';
  if (variant === 'ghost') baseClassName += ' button-ghost';
  else baseClassName += ' button-primary'; // default to primary

  if (size === 'icon') baseClassName += ' button-icon';

  return (
    <button
      className={`${baseClassName} ${className || ''}`}
      ref={ref}
      {...props}
    >
      {children}
    </button>
  );
});
Button.displayName = 'Button';

export { Button };
  