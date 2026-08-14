import React from 'react';
import { ShieldCheck, Coffee, Terminal, Lock, Cloud, Target } from 'lucide-react';
import { certificationsData } from '../data/portfolioData';

const certIconMap = {
  ShieldCheck: ShieldCheck,
  Coffee: Coffee,
  Terminal: Terminal,
  Lock: Lock,
  Cloud: Cloud,
  Target: Target
};

export default function Certifications() {
  return (
    <section id="certifications">
      <h2 className="section-title"><span>Certifications</span> &amp; Credentials</h2>
      <span className="title-line"></span>
      <p className="section-subtitle">Verified knowledge and continuous learning</p>

      <div className="cert-grid">
        {certificationsData.map((cert, index) => {
          const IconComp = certIconMap[cert.icon] || ShieldCheck;
          return (
            <div key={index} className="cert-card">
              <div className="cert-logo">
                <IconComp size={24} />
              </div>
              <h4>{cert.title}</h4>
              <div className="cert-org">{cert.org}</div>
              <div className="cert-date">{cert.date}</div>
              <span className="cert-badge">{cert.badge}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
