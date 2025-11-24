import React from 'react';
import { StyledTypography } from './Typography.styled.js';


export const Typography = ({ as="p", size="small", weight="regular", children }) => {
  return (
    <StyledTypography as={as} size={size} weight={weight}>
      {children}
    </StyledTypography>
  );
}
