import React, { useEffect } from 'react';
import { X, Github, CheckCircle } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div 
      className="modal-overlay" 
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog" 
      aria-modal="true"
    >
      <div className="modal">
        <button 
          className="modal-close" 
          onClick={onClose} 
          aria-label="Close modal"
        >
          <X size={22} />
        </button>

        <h2>{project.title}</h2>
        <p>{project.description}</p>

        <div className="modal-tags">
          {project.tags.map((tag) => (
            <span key={tag} className="project-tag">{tag}</span>
          ))}
        </div>

        <h4 style={{ marginBottom: '12px', color: 'var(--text-light)' }}>Key Features</h4>
        <ul className="modal-features">
          {project.features.map((feat, idx) => (
            <li key={idx}>
              <span>{feat}</span>
            </li>
          ))}
        </ul>

        <div style={{ display: 'flex', gap: '12px', marginTop: '24px' }}>
          <a 
            href={project.github} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-outline btn-sm"
          >
            <Github size={16} /> GitHub Repository
          </a>
        </div>
      </div>
    </div>
  );
}
