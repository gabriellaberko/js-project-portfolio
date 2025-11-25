import React from 'react';
import { GitHubIcon } from '../icons/GitHubIcon';
import { LinkedInIcon } from '../icons/LinkedinIcon'; 
import { LinkIcon } from '../icons/LinkIcon';
import styled from 'styled-components';

export const IconsContainer = () => {
  return (
    <StyledWrapper>
      <LinkIcon link="https://www.linkedin.com/in/gabriella-berkowicz/">
        <LinkedInIcon />
      </LinkIcon>
      <LinkIcon link="https://github.com/gabriellaberko">
        <GitHubIcon />
      </LinkIcon>
    </StyledWrapper>
  );
}


export const StyledWrapper = styled.div `
  display: flex;
  gap: 24px;
  margin-top: 32px;
  align-items: center;
`;

