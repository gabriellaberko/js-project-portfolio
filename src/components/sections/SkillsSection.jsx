import React from 'react';
import skillsData from '../../data/skills.json';
import { SkillsBox } from '../skills/SkillsBox';
import { SectionTitle } from '../typography/SectionTitle';


export const SkillsSection = () => {
  return (
    <section className="skills-section">
      <SectionTitle>Skills</SectionTitle>
      <div className = "skills-container">
        {skillsData.skills.map((skillObj, index) => (
            <SkillsBox key = {index} skillObj = {skillObj}  />
        ))}
      </div>
    </section>
  );
}