import React from 'react';
// import { ProjectTags } from './ProjectTags';
import { ProjectTitle } from './ProjectTitle';
import { ProjectDescription } from './ProjectDescription';
// import { ProjectLinks } from './ProjectLinks';


export const Project = ({ project }) => {
  console.log(project);
      return (
        <div className = "project-div">
          <ProjectTitle title = {project.title} />
          <ProjectDescription description = {project.description} />
        </div>
    );

}