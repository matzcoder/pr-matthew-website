import React, { useState } from 'react';
import { Linkedin, Github, Mail, Send, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ fname: '', lname: '', email: '', subject: '', message: '' });

      setTimeout(() => {
        setSubmitted(false);
      }, 4000);
    }, 1200);
  };

  return (
    <section id="contact">
      <h2 className="section-title"><span>Get In</span> Touch</h2>
      <span className="title-line"></span>
      <p className="section-subtitle">Open to internships, collaborations, and opportunities</p>

      <div className="contact-grid">
        <div className="contact-info">
          <h3>Let's Build Something Together</h3>
          <p>
            Whether you're looking for a SOC analyst intern, a software engineering collaborator, or just want to talk about AI and cybersecurity — I'm always happy to connect.
          </p>

          <div className="contact-links">
            <a 
              href={personalInfo.socials.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="contact-link"
            >
              <div className="icon"><Linkedin size={22} /></div>
              <div className="info-text">
                <small>LinkedIn</small>
                <span>{personalInfo.socials.linkedinUser}</span>
              </div>
            </a>

            <a 
              href={personalInfo.socials.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="contact-link"
            >
              <div className="icon"><Github size={22} /></div>
              <div className="info-text">
                <small>GitHub</small>
                <span>{personalInfo.socials.githubUser}</span>
              </div>
            </a>

            <a 
              href={personalInfo.socials.email} 
              className="contact-link"
            >
              <div className="icon"><Mail size={22} /></div>
              <div className="info-text">
                <small>Email</small>
                <span>{personalInfo.socials.emailAddress}</span>
              </div>
            </a>
          </div>
        </div>

        <div className="contact-form-wrap">
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="fname">First Name</label>
                <input 
                  type="text" 
                  id="fname" 
                  placeholder="John" 
                  required 
                  value={formData.fname}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="lname">Last Name</label>
                <input 
                  type="text" 
                  id="lname" 
                  placeholder="Doe" 
                  required 
                  value={formData.lname}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input 
                type="email" 
                id="email" 
                placeholder="john@example.com" 
                required 
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input 
                type="text" 
                id="subject" 
                placeholder="Internship Opportunity" 
                required 
                value={formData.subject}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea 
                id="message" 
                placeholder="Tell me about the opportunity or collaboration..." 
                required
                value={formData.message}
                onChange={handleChange}
              />
            </div>

            <button 
              type="submit" 
              className="btn btn-primary" 
              style={{ width: '100%', justifyContent: 'center' }}
              disabled={isSubmitting}
            >
              {submitted ? (
                <>
                  <CheckCircle2 size={18} /> Message Sent!
                </>
              ) : isSubmitting ? (
                'Sending...'
              ) : (
                <>
                  <Send size={18} /> Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
