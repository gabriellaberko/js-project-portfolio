import React from 'react';

export const PrimaryButton = ({ children, link }) => {
  return (
    <a 
      className="primary-btn"
      href={link}
      target="_blank"
    >
      {children}
    </a>
  );
}