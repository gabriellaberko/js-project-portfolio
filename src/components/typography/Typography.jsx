import React from 'react';

export const Typography = ({ variant, className, children }) => {
  let ComponentEl = variant;
  return (
    <ComponentEl className={className}>
      {children}
    </ComponentEl>
  );
}

//set default values
Typography.defaultProps = {
  variant: "p",
  className: "regular-text",
};
