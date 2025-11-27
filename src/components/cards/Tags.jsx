import React from 'react';
import { StyledTag } from './Tags.styled';

export const Tags = ({ children }) => {
  return (
    <StyledTag>
      <p>{children}</p>
    </StyledTag>
  );
}