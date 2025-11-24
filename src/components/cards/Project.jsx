import React from 'react';
import { Tags } from './Tags';
import { Img } from '../images/Img';
import { PrimaryLinkButton } from '../buttons/LinkButton';
import { SecondaryLinkButton } from '../buttons/LinkButton';
import { GlobeIcon } from '../icons/GlobeIcon';
import { GitHubIcon } from '../icons/GitHubIcon';
import { Typography } from '../typography/typography';
import { StyledProjectDiv } from './Project.styled';
import { StyledButtonDiv } from './Project.styled';

export const Project = ({ project }) => {
      return (
        <StyledProjectDiv>
          <Img src={project.image} alt="project" />
          <div className = "project-content">
            <div className="tags">
            {project.tags.map((tag, index) => (
              <Tags className="project-tag" key={index} children = {tag}/>
            ))}
            </div>
            <Typography as="h3" size="medium" weight="regular">{project.title}</Typography>
            <Typography>{project.description}</Typography>
            <StyledButtonDiv>
              <PrimaryLinkButton link={project.netlify}>
                <GlobeIcon />
                Live Demo
              </PrimaryLinkButton>
              <SecondaryLinkButton link={project.github}>
                <GitHubIcon />
                View Code
              </SecondaryLinkButton>
            </StyledButtonDiv>
          </div>
        </StyledProjectDiv>
    );

}