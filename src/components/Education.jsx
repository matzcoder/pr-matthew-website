import React from 'react';
import { educationData } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education">
      <h2 className="section-title"><span>Education</span></h2>
      <span className="title-line"></span>
      <p className="section-subtitle">Academic foundation and milestones</p>

      <div className="timeline">
        {educationData.map((item, index) => (
          <div key={index} className="tl-item">
            <div className="tl-dot"></div>
            <div className="tl-card">
              <h3>{item.degree}</h3>
              <div className="tl-org">{item.institution}</div>
              <div className="tl-date">{item.date}</div>
              <p>{item.description}</p>
              <div className="tl-tags">
                {item.tags.map((tag) => (
                  <span key={tag} className="tl-tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
