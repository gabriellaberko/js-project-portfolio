import React from 'react';

export const SecondaryButton = ({ buttonText} ) => {
  return (
    <button className="secondary-btn"><a>{buttonText}</a></button>
  );
}