import React from 'react';
import { Typography } from '../typography/typography';
import { StyledIntroSection } from './Section.styled';
import { IconsContainer } from '../icons/IconsContainer';
import { AnimatedSection } from '../animations/AnimatedSection';
import { Img } from '../images/Img';

export const IntroSection = () => {
  return (
    <AnimatedSection direction="up"> 
      <StyledIntroSection>
        <div>
          <Typography size="m" weight="medium">I am Gabriella Berkowicz</Typography>
          <Typography as="h1">Frontend Developer</Typography>
          <Typography as="h2"size="m">With a Background in Web Analytics</Typography>
          <Typography>I'm a frontend developer passionate about building user-focused and data-informed web experiences with JavaScript. My goal is to continue to grow as a developer while bringing curiosity, creativity, and an analytical mindset to every project I take on.
          My background as a Technical Web Analyst has given me a strong foundation in understanding user behavior, collaborating across product teams, and making data-driven decisions in product development. I consider myself an adaptable, fast learner who enjoys problem solving, collaboration, and values continuous learning.
          </Typography>
          <IconsContainer />
        </div>
        <Img src="/profile.png" alt="profile picture" height="400px"/>
      </StyledIntroSection>
    </AnimatedSection>
  );
}
