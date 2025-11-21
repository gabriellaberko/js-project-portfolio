import React from 'react';

export const Typography = ({ variant="p", className="regular-text", children }) => {
  let ComponentEl = variant;
  return (
    <ComponentEl className={className}>
      {children}
    </ComponentEl>
  );
}
