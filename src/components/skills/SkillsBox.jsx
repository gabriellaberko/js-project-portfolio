import React from 'react';
import { SkillsTitle } from './SkillsTitle';
import { SkillsList } from './SkillsList';

export const SkillsBox = () => {
  return (
  <div className = "skills-box">
    <SkillsTitle text = {data.SkillsTitle}/>
    <SkillsList />
  </div>
  );
}