import React from 'react';
import projectData from '../../data/projects.json';
import { Project } from '../cards/Project';
import { Typography } from '../typography/CustomTypography';
import { StyledCardContainer } from '../cards/CardContainer.styled';
import { StyledSection } from './Section.styled';
import { AnimatedSection } from '../animations/AnimatedSection';
import styled from 'styled-components';


export const ProjectSection = () => {
  return (
    <AnimatedSection direction="up">
      <StyledSection>
        <StyledWrapper>
        <Typography as="h2">Featured Projects</Typography>
        </StyledWrapper>
        <StyledCardContainer>
          {projectData.projects.map((project, index) => (
              <Project key = {index} project = {project}  />
          ))}
        </StyledCardContainer>
      </StyledSection>
    </AnimatedSection>
  );
}

const StyledWrapper = styled.div`
  text-align: center;
`;