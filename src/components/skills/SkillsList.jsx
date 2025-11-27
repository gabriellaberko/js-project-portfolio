import React from 'react';
import { StyledSkillsList } from './Skills.styled';

export const SkillsList = ({ skill }) => {
  return (
      <StyledSkillsList>
        <li>{skill}</li>
      </StyledSkillsList>
  );
}