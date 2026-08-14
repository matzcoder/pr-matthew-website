import React from 'react';
import { Star, GitFork, ExternalLink, Github as GithubIcon } from 'lucide-react';
import { githubStatsData, githubReposData, personalInfo } from '../data/portfolioData';

export default function GitHub() {
  return (
    <section id="github">
      <h2 className="section-title"><span>GitHub</span> Activity</h2>
      <span className="title-line"></span>
      <p className="section-subtitle">Open source contributions and repositories</p>

      <div className="github-stats">
        {githubStatsData.map((stat, idx) => (
          <div key={idx} className="gh-stat">
            <div className="gh-num">{stat.num}</div>
            <p>{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="github-grid">
        {githubReposData.map((repo) => (
          <div key={repo.name} className="gh-card">
            <h4>
              <a href={repo.url} target="_blank" rel="noopener noreferrer">
                <GithubIcon size={16} /> {repo.name}
              </a>
            </h4>
            <p>{repo.description}</p>
            <div className="gh-meta">
              <span>
                <span className="gh-lang-dot" style={{ background: repo.langColor }}></span>
                {repo.lang}
              </span>
              <span><Star size={12} style={{ display: 'inline', marginRight: 2 }} /> {repo.stars}</span>
              <span><GitFork size={12} style={{ display: 'inline', marginRight: 2 }} /> {repo.forks}</span>
            </div>
          </div>
        ))}
      </div>

      <div style={{ textAlign: 'center', marginTop: '36px' }}>
        <a 
          href={personalInfo.socials.github} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn btn-outline"
        >
          View All on GitHub <ExternalLink size={16} />
        </a>
      </div>
    </section>
  );
}
