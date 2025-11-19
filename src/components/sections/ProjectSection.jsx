import React from 'react';
import projectData from '../../data/projects.json';
import { Project } from '../projects/Project';
import { SectionTitle } from '../typography/SectionTitle';
import { SecondaryButton } from '../buttons/SecondaryButton';
import { ArrowIcon } from '../svgIcons/ArrowIcon';

export const ProjectSection = () => {
  return (
    <section className="project-section">
      <SectionTitle>Projects</SectionTitle>
      <div className = "projects-container">
        {projectData.projects.map((project, index) => (
            <Project key = {index} project = {project}  />
        ))}
      </div>
      <SecondaryButton>
            <ArrowIcon />
            See more projects
      </SecondaryButton>
  </section>
  );
}