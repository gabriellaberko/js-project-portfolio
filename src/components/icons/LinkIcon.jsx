import React from 'react';

export const LinkIcon = ({ children, link, ariaLabel }) => {
  return (
    <a 
      href={link}
      target="_blank"
      aria-label={ariaLabel}
    >
      {children}
    </a>
  );
}