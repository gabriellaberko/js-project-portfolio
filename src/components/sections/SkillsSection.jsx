import React from 'react';
import skillsData from '../../data/skills.json';
import { SkillsBox } from '../skills/SkillsBox';
import { Typography } from '../typography/Typography';
import { StyledSection } from './Section.styled';
import { StyledSkillsContainer } from '../skills/SkillsContainer.styled';
import { AnimatedSection } from '../animations/AnimatedSection';



export const SkillsSection = () => {
  return (
    <AnimatedSection direction="left">
      <StyledSection>
        <Typography as="h2">Skills</Typography>
        <StyledSkillsContainer>
          {skillsData.skills.map((skillObj, index) => (
            <SkillsBox key = {index} skillObj = {skillObj}  />
          ))}
        </StyledSkillsContainer>
      </StyledSection>
    </AnimatedSection>
  );
}
