import React from 'react';
import projectData from '../../data/projects.json';
import { Project } from '../cards/Project';
import { Typography } from '../typography/typography';
import { StyledCardContainer } from '../cards/CardContainer.styled';

export const ProjectSection = () => {
  return (
    <section className="project-section">
      <Typography as="h2" size="large" weight="bold">Projects</Typography>
      <StyledCardContainer>
        {projectData.projects.map((project, index) => (
            <Project key = {index} project = {project}  />
        ))}
      </StyledCardContainer>
  </section>
  );
}