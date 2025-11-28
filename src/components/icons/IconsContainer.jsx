import React from 'react';
import { GithubIcon } from './Github';
import { LinkedinIcon } from './Linkedin'; 
import { LinkIcon } from '../icons/LinkIcon';
import styled from 'styled-components';

export const IconsContainer = () => {
  return (
    <StyledWrapper>
      <LinkIcon ariaLabel="LinkedIn" link="https://www.linkedin.com/in/gabriella-berkowicz/">
        <LinkedinIcon />
      </LinkIcon>
      <LinkIcon ariaLabel="GitHub" link="https://github.com/gabriellaberko">
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

