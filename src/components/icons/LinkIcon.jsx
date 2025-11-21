import React from 'react';

export const LinkIcon = ({ children, link }) => {
  return (
    <a 
      className="icon"
      href={link}
      target="_blank"
    >
      {children}
    </a>
  );
}