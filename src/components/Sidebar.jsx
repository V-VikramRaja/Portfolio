import React, { useState } from 'react';
import './Sidebar.css';

const Sidebar = ({ activeSection, scrollToSection }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const skills = {
    "Languages & Frameworks": [
      { name: "Python", level: 95 },
      { name: "JavaScript", level: 85 },
      { name: "SQL", level: 90 },
      { name: "Java", level: 80 },
      { name: "React.js", level: 85 },
    ],
    "AI/ML": [
      { name: "PyTorch", level: 90 },
      { name: "TensorFlow", level: 85 },
      { name: "Scikit-learn", level: 90 },
      { name: "Transformers", level: 85 },
      { name: "LangChain", level: 80 },
    ],
    "Cloud & DevOps": [
      { name: "AWS", level: 85 },
      { name: "Docker", level: 90 },
      { name: "Kubernetes", level: 75 },
      { name: "CI/CD", level: 85 },
    ],
    "Databases": [
      { name: "PostgreSQL", level: 90 },
      { name: "MongoDB", level: 80 },
      { name: "Redis", level: 75 },
    ]
  };

  const navItems = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'about', label: 'About', icon: '👤' },
    { id: 'experience', label: 'Experience', icon: '💼' },
    { id: 'projects', label: 'Projects', icon: '🚀' },
    { id: 'resume', label: 'Resume', icon: '📄' },
    { id: 'contact', label: 'Contact', icon: '📧' },
  ];

  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId);
    setMobileOpen(false); // Close menu on mobile after clicking
  };

  return (
    <>
      {/* Hamburger Menu Button */}
      <button 
        className="hamburger" 
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <aside className={`sidebar ${mobileOpen ? 'mobile-open' : ''}`}>
        <div className="sidebar-content">
          {/* Profile Section */}
          <div className="profile-section">
            <div className="profile-image">
              <img src="/side-profile.jpeg" alt="Vikram Raja" className="profile-photo" />
            </div>
            <h2 className="profile-name">Vikram Raja</h2>
            <p className="profile-title">Full-Stack AI Engineer</p>
            
            <div className="profile-stats">
              <div className="stat-item">
                <span className="stat-label">Experience</span>
                <span className="stat-value">2+ Years</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Location</span>
                <span className="stat-value">Chennai, IN</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="social-links">
              <a href="https://www.linkedin.com/in/vikram-raja23/" target="_blank" rel="noopener noreferrer" className="social-icon">
                <span>in</span>
              </a>
              <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer" className="social-icon">
                <span>📄</span>
              </a>
              <a href="mailto:vvraja2301@gmail.com" className="social-icon">
                <span>✉️</span>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <nav className="sidebar-nav">
            {navItems.map(item => (
              <button
                key={item.id}
                className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
                onClick={() => handleNavClick(item.id)}
              >
                <span className="nav-label">{item.label}</span>
              </button>
            ))}
          </nav>

          {/* Skills Section */}
          <div className="skills-section">
            <h3 className="skills-title">Technical Skills</h3>
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category} className="skill-category">
                <h4 className="category-title">{category}</h4>
                {skillList.map(skill => (
                  <div key={skill.name} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Download CV Button */}
          <div className="sidebar-footer">
            <a href="/Resume.pdf" download="Vikram_Raja_Resume.pdf" className="download-cv-btn">
              <span>📄</span>
              <span>Download CV</span>
            </a>
          </div>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {mobileOpen && (
        <div 
          className="sidebar-overlay" 
          onClick={() => setMobileOpen(false)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 1400,
            display: 'none'
          }}
        />
      )}
    </>
  );
};

export default Sidebar;