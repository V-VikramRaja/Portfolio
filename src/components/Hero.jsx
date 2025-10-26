import React from 'react';
import './Hero.css';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-greeting">Hello, I'm</h1>
          <h2 className="hero-name">Vikram Raja</h2>
          <h3 className="hero-title">
            <span className="highlight">Full-Stack AI Engineer</span> & Founding Engineer
          </h3>
          <p className="hero-description">
            Specializing in building intelligent systems with Python, AI/ML, and cloud technologies. 
            Passionate about creating scalable solutions that leverage geospatial analytics, 
            real-time data processing, and advanced machine learning.
          </p>
          <div className="hero-cta">
            <button className="btn-primary" onClick={() => scrollToSection('contact')}>
              <span>Let's Connect</span>
              <span>→</span>
            </button>
            <button className="btn-secondary" onClick={() => scrollToSection('projects')}>
              <span>View Projects</span>
            </button>
          </div>
          <div className="hero-stats">
            <div className="stat-box">
              <h4 className="stat-number">2+</h4>
              <p className="stat-label">Years Experience</p>
            </div>
            <div className="stat-box">
              <h4 className="stat-number">4+</h4>
              <p className="stat-label">Contributions</p>
            </div>
            <div className="stat-box">
              <h4 className="stat-number">10+</h4>
              <p className="stat-label">Projects</p>
            </div>
          </div>
        </div>
        <div className="hero-image">
          <div className="image-placeholder">
            <div className="floating-card card-1">
              <span className="icon">🤖</span>
              <span>AI/ML</span>
            </div>
            <div className="floating-card card-2">
              <span className="icon">💻</span>
              <span>Full Stack</span>
                          </div>
            {/* <div className="floating-card card-3">
              <span className="icon">⚡</span>
              <span>FastAPI</span>
            </div> */}
            <div className="floating-card card-4">
              <span className="icon">☁️</span>
                <span>Cloud</span>
            </div>
            <div className="floating-card card-5">
              <span className="icon">🧩</span>
              <span>System Design</span>
            </div>
            <div className="floating-card card-6">
              <span className="icon">🧠</span>
              <span>LLM</span>
            </div>
            <div className="profile-circle">
              <img src="/profile.jpeg" alt="Vikram Raja" className="profile-image-hero" />
            </div>
          </div>
        </div>
      </div>
      <div className="scroll-indicator" onClick={() => scrollToSection('about')}>
        <span>Scroll Down</span>
        <div className="scroll-arrow">↓</div>
      </div>
    </section>
  );
};

export default Hero;
