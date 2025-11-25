import React from 'react';
import { IconsContainer } from '../icons/IconsContainer';
import { Typography } from '../typography/typography';
import { Img } from '../images/Img';
import { StyledContactSection } from './Section.styled';
import { StyledContent } from './Section.styled';

export const ContactSection = () => {
  return (
    <StyledContactSection>
        <Img src="/profile-circle.png" alt="profile picture" height="400px"/>
        <StyledContent>
          <Typography as="h2">Let's Talk!</Typography>
          <Typography as="h3">Gabriella Berkowicz</Typography>
          <Typography as="h3">+46(0) 736 37 46 46</Typography>
          <Typography as="h3">gabriellaberko@live.se</Typography>
          <IconsContainer />
        </StyledContent>
    </StyledContactSection>
  );
}