import React from 'react';

export const ProjectLinks = ({links}) => {
  return (
  <div>
    <button><a>{links.netlify}</a></button>
    <button><a>{links.github}</a></button>
  </div>
  );
}