import React from 'react';
import { Tags } from '../cards/Tags';
import { SkillsList } from './SkillsList';

export const SkillsBox = ({ skillObj } ) => {
  return (
  <div>
    <Tags className="skills-tag">{skillObj.title}</Tags>
    <div className="skill-list">
          {skillObj.skills.map((skill, index) => (
            <SkillsList key={index} skill = {skill}/>
          ))}
    </div>
  </div>
  );
}