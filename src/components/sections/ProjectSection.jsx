import React from 'react';
import projectData from '../../data/projects.json';
import { Project } from '../cards/Project';
import { Typography } from '../typography/typography';
import { StyledCardContainer } from '../cards/CardContainer.styled';
import styled from 'styled-components';

export const ProjectSection = () => {
  return (
    <StyledSection>
      <Typography as="h2" size="large" weight="bold">Featured Projects</Typography>
      <StyledCardContainer>
        {projectData.projects.map((project, index) => (
            <Project key = {index} project = {project}  />
        ))}
      </StyledCardContainer>
  </StyledSection>
  );
}



export const StyledSection = styled.section `
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
`;