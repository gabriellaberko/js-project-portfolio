import React from 'react';
import { IconsContainer } from '../icons/IconsContainer';
import { Typography } from '../style/typography/CustomTypography';
import { Img } from '../images/Img';
import { StyledContactSection, StyledContent } from './Section.styled';


export const ContactSection = () => {
  return (
      <StyledContactSection>
          <Img src="/profile-filled.png" alt="profile picture" height="300px"/>
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