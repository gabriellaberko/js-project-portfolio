import React from 'react';
import { Typography } from '../typography/typography';

export const Tags = ({ className, children }) => {
  return (
    <div className={className}>
      <Typography weight="medium">{children}</Typography>
    </div>
  );
}