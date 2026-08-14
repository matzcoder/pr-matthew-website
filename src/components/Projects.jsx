import React, { useState } from 'react';
import { Bug, Bot, Search, Siren, Github, ExternalLink } from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

const projectIconMap = {
  Bug: Bug,
  Bot: Bot,
  Search: Search,
  Siren: Siren
};

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects">
      <h2 className="section-title"><span>Featured</span> Projects</h2>
      <span className="title-line"></span>
      <p className="section-subtitle">Real-world problems. Intelligent solutions.</p>

      <div className="projects-grid">
        {projectsData.map((project) => {
          const IconComp = projectIconMap[project.icon] || Bug;

          return (
            <div 
              key={project.id} 
              className="project-card"
              onClick={() => setSelectedProject(project)}
            >
              <div className="project-thumb">
                <div className="proj-icon">
                  <IconComp size={48} />
                </div>
              </div>

              <div className="project-body">
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="project-tag">{tag}</span>
                  ))}
                </div>

                <div className="project-links" onClick={(e) => e.stopPropagation()}>
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-outline btn-sm"
                  >
                    <Github size={14} /> GitHub
                  </a>
                  <button 
                    className="btn btn-primary btn-sm"
                    onClick={() => setSelectedProject(project)}
                  >
                    <ExternalLink size={14} /> Details
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </section>
  );
}
