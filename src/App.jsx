import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './style/Theme.styled';
import { GlobalStyle } from './style/GlobalStyle';
import { IntroSection } from './components/sections/IntroSection';
import { ProjectSection } from './components/sections/ProjectSection';
import { SkillsSection } from './components/sections/SkillsSection';
import { ContactSection } from './components/sections/ContactSection';
import { TechSection } from './components/sections/TechSection';
import { ArticleSection } from './components/sections/ArticleSection';


export const App = () => {
  return (
    <>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
        <IntroSection />
        <main>
          <SkillsSection />
          <ProjectSection />
          <TechSection />
          <ArticleSection />
        </main>
        <ContactSection />
    </ThemeProvider>
    </>
  )
}
