import React, { useState, useEffect, useRef } from 'react';
import { Send } from 'lucide-react';
import { personalInfo, aboutTags, statsData } from '../data/portfolioData';

export default function About() {
  const [imgSrc, setImgSrc] = useState(personalInfo.profileImage);
  const [counts, setCounts] = useState(statsData.map(() => 0));
  const sectionRef = useRef(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animatedRef.current) {
            animatedRef.current = true;
            
            statsData.forEach((stat, index) => {
              let start = 0;
              const end = stat.num;
              const duration = 1200; // ms
              const stepTime = 30;
              const steps = Math.ceil(duration / stepTime);
              const increment = end / steps;

              const timer = setInterval(() => {
                start += increment;
                if (start >= end) {
                  start = end;
                  clearInterval(timer);
                }
                setCounts((prev) => {
                  const copy = [...prev];
                  copy[index] = Math.floor(start);
                  return copy;
                });
              }, stepTime);
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef}>
      <h2 className="section-title"><span>About</span> Me</h2>
      <span className="title-line"></span>
      <p className="section-subtitle">Who I am and what drives me</p>

      <div className="about-grid">
        <div className="about-img-wrap">
          <img 
            src={imgSrc} 
            alt={personalInfo.name}
            onError={() => setImgSrc(personalInfo.fallbackImage)}
          />
        </div>

        <div className="about-text">
          <h3>{personalInfo.aboutTitle}</h3>
          {personalInfo.aboutParagraphs.map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}

          <div className="about-tags">
            {aboutTags.map((tag) => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>

          <a href="#contact" className="btn btn-primary">
            <Send size={16} /> Let's Connect
          </a>
        </div>
      </div>

      <div className="stats-grid">
        {statsData.map((stat, idx) => (
          <div key={stat.id} className="stat-card">
            <div className="num">{counts[idx]}+</div>
            <p>{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
