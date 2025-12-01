import React from 'react';
import { StyledButton, StyledLinkButton } from './Button.styled';


export const LinkButton = ({ variant="primaryBtn", link, children, ...props }) => {
  return (
    <StyledLinkButton 
      variant={variant}
      href={link}
      target="_blank"
      {...props}
    >
      {children}
    </StyledLinkButton>
  );
}

export const Button = ({ variant="secondaryBtn", children, ...props} ) => {
  return (
    <StyledButton 
      variant="secondaryBtn" 
      {...props}
    >
      {children}
    </StyledButton>
  );
}