import React, { useState } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'GitHub', href: '#github' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar({ isLightMode, onToggleTheme }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLinkClick = () => {
    setMobileOpen(false);
  };

  return (
    <nav id="navbar">
      <a href="#home" className="nav-logo">P.R.Matthew</a>
      
      <ul className={`nav-links ${mobileOpen ? 'open' : ''}`}>
        {navItems.map((item) => (
          <li key={item.label}>
            <a href={item.href} onClick={handleLinkClick}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
        <button 
          className="theme-toggle" 
          onClick={onToggleTheme} 
          aria-label="Toggle light or dark theme"
        >
          {isLightMode ? <Sun size={16} /> : <Moon size={16} />}
          <span>{isLightMode ? 'Light' : 'Dark'}</span>
        </button>

        <div 
          className="nav-toggle" 
          onClick={() => setMobileOpen(!mobileOpen)} 
          aria-label="Toggle navigation menu"
        >
          {mobileOpen ? <X size={24} /> : (
            <>
              <span></span>
              <span></span>
              <span></span>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
