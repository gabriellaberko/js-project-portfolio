import React from 'react';
import { Tags } from './Tags';
import { PrimaryButton } from '../buttonsAndLinks/PrimaryButton';
import { GlobeIcon } from '../svg/GlobeIcon';
import { GitHubIcon } from '../svg/GitHubIcon';
import { Typography } from '../typography/typography';


export const Project = ({ project }) => {
      return (
        <div className = "project-div">
          <div className="tags">
          {project.tags.map((tag, index) => (
            <Tags className="project-tag" key={index} children = {tag}/>
          ))}
          </div>
          <Typography className="card-title" variant="h3">{project.title}</Typography>
          <Typography>{project.description}</Typography>
          <PrimaryButton link={project.netlify}>
            <GlobeIcon />
            Live Demo
          </PrimaryButton>
          <PrimaryButton link={project.github}>
            <GitHubIcon />
            View Code
          </PrimaryButton>
        </div>
    );

}

