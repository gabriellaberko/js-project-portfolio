import React from 'react';
import { Tags } from './Tags';
import { Img } from '../images/Img';
import { PrimaryLinkButton } from '../buttons/LinkButton';
import { SecondaryLinkButton } from '../buttons/LinkButton';
import { GlobeIcon } from '../icons/GlobeIcon';
import { GithubIcon } from '../icons/GithubIcon';
import { Typography } from '../typography/CustomTypography';
import { StyledCardDiv } from './Card.styled';
import { StyledContentDiv } from './Card.styled';
import { StyledTextDiv } from './Card.styled';
import { StyledButtonDiv } from './Card.styled';
import { StyledTagContainer } from './Tags.styled';

export const Project = ({ project }) => {
      return (
        <StyledCardDiv>
          <Img src={project.image} alt="project" />
          <StyledContentDiv>
            <StyledTextDiv>
              <Typography as="h3">{project.title}</Typography>
              <Typography>{project.description}</Typography>
            </StyledTextDiv>
            <div>
              <Typography weight="bold">Tech:</Typography>
              <StyledTagContainer>
                {project.tags.map((tag, index) => (
                  <Tags key={index} children = {tag}/>
                ))}
              </StyledTagContainer>
            </div>
            </StyledContentDiv>
            <StyledButtonDiv>
              <PrimaryLinkButton link={project.netlify}>
                <GlobeIcon />
                Live Demo
              </PrimaryLinkButton>
              <SecondaryLinkButton link={project.github}>
                <GithubIcon />
                View Code
              </SecondaryLinkButton>
            </StyledButtonDiv>
        </StyledCardDiv>
    );

}