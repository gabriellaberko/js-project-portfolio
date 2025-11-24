import React from 'react';
import { StyledButtonOutlined } from './Button.styled';

export const SecondaryButton = ({ children} ) => {
  return (
    <StyledButtonOutlined className="secondary-btn">{children}</StyledButtonOutlined>
  );
}