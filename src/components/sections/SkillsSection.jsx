import React from 'react';
import styled from 'styled-components';
import skillsData from '../../data/skills.json';
import { SkillsBox } from '../skills/SkillsBox';
import { Typography } from '../typography/typography';
import { StyledSection } from './Section.styled';


export const SkillsSection = () => {
  return (
    <StyledSection>
       <Typography as="h2" size="large" weight="bold">Skills</Typography>
      <StyledWrapper>
        {skillsData.skills.map((skillObj, index) => (
          <SkillsBox key = {index} skillObj = {skillObj}  />
        ))}
      </StyledWrapper>
    </StyledSection>
  );
}



export const StyledWrapper= styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 18px;


  @media (min-width: 768px) {
    flex-direction: row;

  }
`;