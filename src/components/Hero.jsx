import React, { useState, useEffect } from 'react';
import { Linkedin, Github, Mail, ArrowRight, FolderKanban } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  const [typedText, setTypedText] = useState('');
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [imgSrc, setImgSrc] = useState(personalInfo.profileImage);

  useEffect(() => {
    const currentPhrase = personalInfo.typingPhrases[phraseIdx];
    let timer;

    if (!isDeleting) {
      if (typedText.length < currentPhrase.length) {
        timer = setTimeout(() => {
          setTypedText(currentPhrase.slice(0, typedText.length + 1));
        }, 90);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 1800);
      }
    } else {
      if (typedText.length > 0) {
        timer = setTimeout(() => {
          setTypedText(currentPhrase.slice(0, typedText.length - 1));
        }, 50);
      } else {
        setIsDeleting(false);
        setPhraseIdx((prev) => (prev + 1) % personalInfo.typingPhrases.length);
      }
    }

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, phraseIdx]);

  return (
    <section id="home">
      <div className="hero-text">
        <div className="hero-tag">{personalInfo.tagline}</div>
        <h1>Hi, I'm <span>{personalInfo.name}</span></h1>
        
        <div className="typing-wrapper">
          <span>{typedText}</span>
          <span style={{ color: 'var(--accent-cyan)' }}>|</span>
        </div>
        
        <p>{personalInfo.heroSubtitle}</p>
        
        <div className="hero-btns">
          <a href="#projects" className="btn btn-primary">
            <FolderKanban size={18} /> View Projects
          </a>
          <a href="#contact" className="btn btn-outline">
            <Mail size={18} /> Get In Touch
          </a>
        </div>
        
        <div className="hero-socials">
          <a 
            href={personalInfo.socials.linkedin} 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="LinkedIn Profile" 
            title="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a 
            href={personalInfo.socials.github} 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="GitHub Profile" 
            title="GitHub"
          >
            <Github size={20} />
          </a>
          <a 
            href={personalInfo.socials.email} 
            aria-label="Send Email" 
            title="Email"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>

      <div className="hero-img-wrap">
        <div className="img-card">
          <img 
            src={imgSrc} 
            alt={personalInfo.name} 
            onError={() => setImgSrc(personalInfo.fallbackImage)}
          />
        </div>
        <div className="hero-badge">
          <div className="dot"></div>
          <span>Open to Opportunities</span>
        </div>
      </div>
    </section>
  );
}
