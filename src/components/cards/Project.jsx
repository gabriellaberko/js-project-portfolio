import React from 'react';
import { Tags } from './Tags';
import { Img } from '../images/Img';
import { LinkButton } from '../buttons/Button';
import { GlobeIcon } from '../icons/Globe';
import { GithubIcon } from '../icons/Github';
import { Typography } from '../style/typography/CustomTypography';
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
              <LinkButton link={project.netlify}>
                <GlobeIcon />
                Live Demo
              </LinkButton>
              <LinkButton variant="secondaryBtn" link={project.github}>
                <GithubIcon />
                View Code
              </LinkButton>
            </StyledButtonDiv>
        </StyledCardDiv>
    );

}