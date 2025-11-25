import React from 'react';
import styled from 'styled-components';
import skillsData from '../../data/skills.json';
import { SkillsBox } from '../skills/SkillsBox';
import { Typography } from '../typography/typography';
import { StyledSection } from './Section.styled';
import { StyledSkillsContainer } from '../skills/SkillsContainer.styled';


export const SkillsSection = () => {
  return (
    <StyledSection>
       <Typography as="h2">Skills</Typography>
      <StyledSkillsContainer>
        {skillsData.skills.map((skillObj, index) => (
          <SkillsBox key = {index} skillObj = {skillObj}  />
        ))}
      </StyledSkillsContainer>
    </StyledSection>
  );
}
