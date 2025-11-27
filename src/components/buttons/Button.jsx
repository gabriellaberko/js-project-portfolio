import React from 'react';
import { StyledButtonOutlined } from './Button.styled';

export const SecondaryButton = ({ onClick, children} ) => {
  return (
    <StyledButtonOutlined className="secondary-btn" onClick={onClick}>
      {children}
    </StyledButtonOutlined>
  );
}