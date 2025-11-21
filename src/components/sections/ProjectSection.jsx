import React from 'react';
import projectData from '../../data/projects.json';
import { Project } from '../projects/Project';
import { SecondaryButton } from '../buttons/SecondaryButton';
import { ArrowIcon } from '../icons/ArrowIcon';
import { Typography } from '../typography/typography';

export const ProjectSection = () => {
  return (
    <section className="project-section">
      <Typography className="section-title" variant="h2">Projects</Typography>
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