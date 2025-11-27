import React from 'react';
import projectData from '../../data/projects.json';
import { Project } from '../cards/Project';
import { Typography } from '../typography/CustomTypography';
import { StyledCardContainer } from '../cards/CardContainer.styled';
import { StyledSection } from './Section.styled';
import { AnimatedSection } from '../animations/AnimatedSection';



export const ProjectSection = () => {
  return (
    <AnimatedSection direction="up">
      <StyledSection>
        <Typography as="h2">Featured Projects</Typography>
        <StyledCardContainer>
          {projectData.projects.map((project, index) => (
              <Project key = {index} project = {project}  />
          ))}
        </StyledCardContainer>
      </StyledSection>
    </AnimatedSection>
  );
}
