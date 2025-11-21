import React from 'react';
import skillsData from '../../data/skills.json';
import { SkillsBox } from '../skills/SkillsBox';
import { Typography } from '../typography/typography';


export const SkillsSection = () => {
  return (
    <section className="skills-section">
       <Typography className="section-title" variant="h2">Skills</Typography>
      <div className = "skills-container">
        {skillsData.skills.map((skillObj, index) => (
          <SkillsBox key = {index} skillObj = {skillObj}  />
        ))}
      </div>
    </section>
  );
}