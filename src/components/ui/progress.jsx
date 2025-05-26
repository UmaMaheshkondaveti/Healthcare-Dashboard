
import React from 'react';

const Progress = React.forwardRef(({ className, value, indicatorStyle, ...props }, ref) => (
  <div
    ref={ref}
    className={`progress-bar-container ${className || ''}`}
    {...props}
  >
    <div
      className="progress-bar-indicator"
      style={{ transform: `translateX(-${100 - (value || 0)}%)`, ...indicatorStyle }}
    />
  </div>
));
Progress.displayName = 'Progress';

export { Progress };
  