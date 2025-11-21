import React from 'react';
import { Typography } from '../typography/typography';
import { ProfileImg } from '../images/ProfileImg';


export const IntroSection = () => {
  return (
    <section className="intro-section">
      <Typography>Hi there, I'm</Typography>
      <ProfileImg />
      <Typography className="main-title" variant="h1">Gabriella Berkowicz</Typography>
      <Typography className="sub-title" variant="h2">Frontend Developer with a Background in Web Analytics</Typography>
      <Typography>I'm a frontend developer passionate about building user-focused and data-informed web experiences with JavaScript. My goal is to continue to grow as a developer while bringing curiosity, creativity, and an analytical mindset to every project I take on.
      My background as a Technical Web Analyst has given me a strong foundation in understanding user behavior, collaborating across product teams, and making data-driven decisions in product development. I consider myself an adaptable, fast learner who enjoys problem solving, collaboration, and values continuous learning.
      </Typography>
    </section>
  );
}