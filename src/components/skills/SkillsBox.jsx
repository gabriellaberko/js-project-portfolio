import React from 'react';
import { SkillsList } from './SkillsList';
import { Typography } from '../style/typography/CustomTypography';
import { StyledSkillsBoxDiv } from './Skills.styled';
import { StyledLineDivider } from './Skills.styled';


export const SkillsBox = ({ skillObj } ) => {
  return (
  <>
  <StyledSkillsBoxDiv>
    <Typography as="h3" weight="bold">{skillObj.title}</Typography>
    <div>
      {skillObj.skills.map((skill, index) => (
        <SkillsList key={index} skill = {skill}/>
      ))}
    </div>
  </StyledSkillsBoxDiv>
  <StyledLineDivider></StyledLineDivider>
  </>
  );
}