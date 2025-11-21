import React from 'react';
import { IntroSection } from './components/sections/IntroSection';
import { ProjectSection } from './components/sections/ProjectSection';
import { SkillsSection } from './components/sections/SkillsSection';
import { ContactSection } from './components/sections/ContactSection';
import { TechSection } from './components/sections/TechSection';


export const App = () => {
  return (
    <>
      <IntroSection />
      <SkillsSection />
      <ProjectSection />
      <TechSection />
      <ContactSection />

    </>
  )
}
