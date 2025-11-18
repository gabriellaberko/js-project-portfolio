import React from 'react';
import projectData from '../../data/projects.json';
import { Project } from './Project';

export const ProjectSection = () => {
  return (
    <section className="project-section">
      <h1>Projects</h1>
      <div className = "projects-container">
      {projectData.projects.map((project, index) => (
          <Project key = {index} project = {project}  />
      ))}
    </div>
  </section>
  );
}