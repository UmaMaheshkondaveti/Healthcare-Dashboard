
import React from 'react';

const Avatar = ({ className, children }) => (
  <div className={`avatar ${className || ''}`}>{children}</div>
);

const AvatarImage = ({ className, src, alt }) => (
  <img src={src} alt={alt} className={`avatar-image ${className || ''}`} />
);

const AvatarFallback = ({ className, children }) => (
  <span className={`avatar-fallback ${className || ''}`}>{children}</span>
);

export { Avatar, AvatarImage, AvatarFallback };
  