import React from 'react';
import styled from 'styled-components';
import { Typography } from '../typography/typography';
import { ProfileImg } from '../images/ProfileImg';

export const IntroSection = () => {
  return (
    <StyledSection>
      <StyledWrapper>
        <Typography size="medium" weight="medium">I am Gabriella Berkowicz</Typography>
        <Typography as="h1" size="xlarge" weight="bold">Frontend Developer</Typography>
        <Typography as="h2" size="medium" weight="bold">With a Background in Web Analytics</Typography>
        <Typography>I'm a frontend developer passionate about building user-focused and data-informed web experiences with JavaScript. My goal is to continue to grow as a developer while bringing curiosity, creativity, and an analytical mindset to every project I take on.
        My background as a Technical Web Analyst has given me a strong foundation in understanding user behavior, collaborating across product teams, and making data-driven decisions in product development. I consider myself an adaptable, fast learner who enjoys problem solving, collaboration, and values continuous learning.
        </Typography>
      </StyledWrapper>
      <ProfileImg />
    </StyledSection>
  );
}


export const StyledSection = styled.section `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  gap: 32px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const StyledWrapper = styled.div `
  width: 60%;
`;