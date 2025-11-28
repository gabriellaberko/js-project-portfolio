import React from 'react';

export const LinkIcon = ({ children, link, ariaLabel }) => {
  return (
    <a 
      ariaLabel={ariaLabel}
      href={link}
      target="_blank"
    >
      {children}
    </a>
  );
}