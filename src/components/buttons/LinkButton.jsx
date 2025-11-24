import React from 'react';
import { StyledLinkButtonFilled } from './LinkButton.styled';
import { StyledLinkButtonOutlined } from './LinkButton.styled';

export const PrimaryLinkButton = ({ children, link }) => {
  return (
    <StyledLinkButtonFilled 
      className="primary-btn"
      href={link}
      target="_blank"
    >
      {children}
    </StyledLinkButtonFilled>
  );
}

export const SecondaryLinkButton = ({ children, link }) => {
  return (
    <StyledLinkButtonOutlined 
      className="primary-btn"
      href={link}
      target="_blank"
    >
      {children}
    </StyledLinkButtonOutlined>
  );
}