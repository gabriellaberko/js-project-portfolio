import React from 'react';
import { StyledTypography } from './Typography.styled.js';


export const Typography = ({ element="p", size="small", weight="regular", children }) => {
  return (
    <StyledTypography as={element} size={size} weight={weight}>
      {children}
    </StyledTypography>
  );
}
