import React from 'react';

export const Tags = ({ className, children }) => {
  return (
    <div className={className}>
      <p>{children}</p>
    </div>
  );
}