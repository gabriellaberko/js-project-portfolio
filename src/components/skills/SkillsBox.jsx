import React from 'react';
import { SkillsTitle } from './SkillsTitle';
import { SkillsList } from './SkillsList';

export const SkillsBox = ({ skillObj } ) => {
  return (
  <div className = "skills-box">
    <SkillsTitle title = {skillObj.title}/>
    <div className="skill-list">
          {skillObj.skills.map((skill, index) => (
            <SkillsList key={index} skill = {skill}/>
          ))}
    </div>
  </div>
  );
}