import React from 'react';
import { StyledTypography } from './Typography.styled.js';


export const Typography = ({ as="p", size, weight, children }) => {
  return (
    <StyledTypography as={as} size={size} weight={weight}>
      {children}
    </StyledTypography>
  );
}
