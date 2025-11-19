import React from 'react';
import { ProjectTags } from './ProjectTags';
import { ProjectTitle } from './ProjectTitle';
import { ProjectDescription } from './ProjectDescription';
import { PrimaryButton } from '../buttons/PrimaryButton';
import { GlobeIcon } from '../svgIcons/GlobeIcon';
import { GitHubIcon } from '../svgIcons/GitHubIcon';


export const Project = ({ project }) => {
      return (
        <div className = "project-div">
          <div className="tags">
          {project.tags.map((tag, index) => (
            <ProjectTags key={index} tag = {tag}/>
          ))}
          </div>
          <ProjectTitle title = {project.title} />
          <ProjectDescription description = {project.description} />
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