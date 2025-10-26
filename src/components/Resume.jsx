import React from 'react';
import './Resume.css';

const Resume = () => {
  return (
    <section className="resume-section section" id="resume">
      <div className="resume-container">
        <div className="resume-header">
          <h2 className="section-title">My Resume</h2>
          <div className="resume-actions">
            <a 
              href="/Resume.pdf" 
              download="Vikram_Raja_Resume.pdf"
              className="btn-primary"
            >
              <span>📥</span>
              <span>Download Resume</span>
            </a>
            <a 
              href="/Resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <span>🔗</span>
              <span>Open in New Tab</span>
            </a>
          </div>
        </div>
        
        <div className="resume-viewer">
          <iframe
            src="/Resume.pdf"
            title="Vikram Raja Resume"
            className="resume-iframe"
          />
        </div>
      </div>
    </section>
  );
};

export default Resume;