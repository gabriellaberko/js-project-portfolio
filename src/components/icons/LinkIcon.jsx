import React from 'react';

export const LinkIcon = ({ children, link, ariaLabel }) => {
  return (
    <a 
      aria-label={ariaLabel}
      href={link}
      target="_blank"
    >
      {children}
    </a>
  );
}