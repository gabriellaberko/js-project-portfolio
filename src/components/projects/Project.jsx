import React from 'react';
import { ProjectTags } from './ProjectTags';
import { ProjectTitle } from './ProjectTitle';
import { ProjectDescription } from './ProjectDescription';
// import { ProjectLinks } from './ProjectLinks';


export const Project = ({ project }) => {
  console.log(project.tags);
      return (
        <div className = "project-div">
          <div className="tags">
          {project.tags.map((tag, index) => (
            <ProjectTags key={index} tag = {tag}/>
          ))}
          </div>
          <ProjectTitle title = {project.title} />
          <ProjectDescription description = {project.description} />
        </div>
    );

}