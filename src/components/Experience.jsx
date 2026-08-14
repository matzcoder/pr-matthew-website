import React from 'react';
import { experienceData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience">
      <h2 className="section-title"><span>Work</span> Experience</h2>
      <span className="title-line"></span>
      <p className="section-subtitle">Professional journey and industry exposure</p>

      <div className="timeline">
        {experienceData.map((item, index) => (
          <div key={index} className="tl-item">
            <div className="tl-dot"></div>
            <div className="tl-card">
              <h3>{item.title}</h3>
              <div className="tl-org">{item.org}</div>
              <div className="tl-date">{item.date}</div>
              <ul>
                {item.bullets.map((bullet, bIdx) => (
                  <li key={bIdx}>{bullet}</li>
                ))}
              </ul>
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
