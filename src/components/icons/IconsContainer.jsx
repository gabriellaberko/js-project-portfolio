import React from 'react';
import { GithubIcon } from './GithubIcon';
import { LinkedinIcon } from './LinkedinIcon'; 
import { LinkIcon } from '../icons/LinkIcon';
import styled from 'styled-components';

export const IconsContainer = () => {
  return (
    <StyledWrapper>
      <LinkIcon link="https://www.linkedin.com/in/gabriella-berkowicz/">
        <LinkedinIcon />
      </LinkIcon>
      <LinkIcon link="https://github.com/gabriellaberko">
        <GithubIcon />
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

