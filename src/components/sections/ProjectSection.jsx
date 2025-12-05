import React from 'react';
import projectData from '../../data/projects.json';
import { Project } from '../cards/Project';
import { Typography } from '../typography/CustomTypography';
import { StyledProjectCardContainer } from '../cards/CardContainer.styled';
import { StyledSection } from './Section.styled';
import { AnimatedProjectSection } from '../animations/AnimatedProjectSection';
import styled from 'styled-components';


export const ProjectSection = () => {

  return (
    <AnimatedProjectSection>
      <StyledSection>
        <StyledWrapper>
        <Typography as="h2">Featured Projects</Typography>
        </StyledWrapper>
        <StyledProjectCardContainer>
          {projectData.projects.map((project, index) => (
            <Project key={index} project={project} index={index} />
          ))}
      </StyledProjectCardContainer>
      </StyledSection>
    </AnimatedProjectSection>
  );
}

const StyledWrapper = styled.div`
  text-align: center;
`;