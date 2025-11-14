import React from 'react';
import { ProjectTags } from './ProjectTags';
import { ProjectHeadline } from './ProjectHeadline';
import { ProjectDescription } from './ProjectDescription';
import { ProjectLinks } from './ProjectLinks';

export const Project = () => {
  return (
    <div className = "project-container">
      <ProjectTags />
      <ProjectHeadline />
      <ProjectDescription />
      <ProjectLinks />
    </div>
  );
}