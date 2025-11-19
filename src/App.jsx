import React from 'react';
import { ProjectSection } from './components/sections/ProjectSection';
import { SkillsSection } from './components/sections/SkillsSection';
import { ContactSection } from './components/sections/ContactSection';
import { ProfileImg } from './components/images/ProfileImg';
import { TechSection } from './components/sections/TechSection';


export const App = () => {
  return (
    <>
      <p>Hi there, I'm</p>
      <ProfileImg />
      <h1>Gabriella Berkowicz</h1>
      <p>Frontend Developer with a Background in Web Analytics</p>
      <p>I'm a frontend developer passionate about building user-focused and data-informed web experiences with JavaScript. My goal is to continue to grow as a developer while bringing curiosity, creativity, and an analytical mindset to every project I take on.
      My background as a Technical Web Analyst has given me a strong foundation in understanding user behavior, collaborating across product teams, and making data-driven decisions in product development. I consider myself an adaptable, fast learner who enjoys problem solving, collaboration, and values continuous learning.
      </p>
      <SkillsSection />
      <ProjectSection />
      <TechSection />
      <ContactSection />

    </>
  )
}
