import React from 'react';
import { SkillsList } from './SkillsList';
import { Typography } from '../typography/typography';
import { SkillsBoxDiv } from './SkillsBox.styled';
import { LineDivider } from './SkillsBox.styled';

export const SkillsBox = ({ skillObj } ) => {
  return (
  <>
  <SkillsBoxDiv>
    <Typography size="medium" weight="medium">{skillObj.title}</Typography>
    <div className="skill-list">
      {skillObj.skills.map((skill, index) => (
        <SkillsList key={index} skill = {skill}/>
      ))}
    </div>
  </SkillsBoxDiv>
  <LineDivider></LineDivider>
  </>
  );
}