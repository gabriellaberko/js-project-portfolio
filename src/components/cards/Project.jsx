import React from 'react';
import { Tags } from './Tags';
import { StyledTagContainer } from './Tags.styled';
import { Img } from '../images/Img';
import { LinkButton } from '../buttons/Button';
import { GlobeIcon } from '../icons/Globe';
import { GithubIcon } from '../icons/Github';
import { Typography } from '../typography/CustomTypography';
import { StyledProjectCardDiv, StyledProjectContentWrapper, StyledContentDiv, StyledTextDiv, StyledButtonDiv } from './Card.styled'
import { AnimatedSection } from '../animations/AnimatedSection';
import { theme } from '../../style/Theme.styled';


export const Project = ({ project, index }) => {

  const isBigScreen = window.matchMedia(theme.media.desktop).matches;

  const direction = index % 2 === 0 ? "right" : "left";  // even → right, odd → left

  const projectComponent = (
    <StyledProjectCardDiv reverse={index % 2 === 1}>
          <Img src={project.image} alt="project" height="350px" />
          <StyledProjectContentWrapper>
            <StyledContentDiv>
              <StyledTagContainer>
                {project.tags.map((tag, index) => (
                    <Tags key={index} children = {tag}/>
                ))}
              </StyledTagContainer>
              <StyledTextDiv>
                <Typography as="h3">{project.title}</Typography>
                <Typography>{project.description}</Typography>
              </StyledTextDiv>
              </StyledContentDiv>
              <StyledButtonDiv>
                <LinkButton link={project.netlify}>
                  <GlobeIcon />
                  Live Demo
                </LinkButton>
                <LinkButton variant="secondaryBtn" link={project.github}>
                  <GithubIcon />
                  View Code
                </LinkButton>
              </StyledButtonDiv>
            </StyledProjectContentWrapper>
        </StyledProjectCardDiv>
  );
  
  return (
    <>
    {isBigScreen 
      ? (<AnimatedSection direction={direction}>{projectComponent}</AnimatedSection>) 
      : ({projectComponent})
    }
    </>
  );
}