import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section-title">About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <p className="about-intro">
            I'm a <strong>Full-Stack AI Engineer</strong> and <strong>Founding Engineer</strong> with over 2 years of experience 
            building intelligent, scalable systems that solve real-world problems. My expertise spans the full spectrum of 
            modern software development — from designing geospatial ETL pipelines to deploying production-ready machine learning models.
          </p>
          <p className="about-description">
            At <strong>KAMUIT</strong>, I architected detour-aware ride-matching systems using Python, FastAPI, and PostgreSQL with PostGIS, 
            processing 50K+ trips while optimizing driver pools by 65% and cutting detours by 22%. My work involves building 
            fault-tolerant streaming infrastructure with Redis, distributed locks, and payment integrations via Stripe Connect.
          </p>
          <p className="about-description">
            At <strong>Intemo Technologies</strong>, I've pioneered AI-driven document automation pipelines using OCR, LLMs (ChatGPT & Gemini), 
            and FastAPI to eliminate manual ERP data entry. I've also developed ML models for aviation time prediction using SVR, 
            and built real-time container tracking systems with Java Spring Boot, Kafka, and React.js.
          </p>
          <div className="about-highlights">
            <div className="highlight-item">
              <span className="highlight-icon">🎯</span>
              <div>
                <h4>Specialization</h4>
                <p>Full-stack development with AI/ML, cloud-native architectures, and real-time data processing</p>
              </div>
            </div>
            <div className="highlight-item">
              <span className="highlight-icon">🚀</span>
              <div>
                <h4>Mission</h4>
                <p>Building intelligent systems that automate complex workflows and deliver measurable impact</p>
              </div>
            </div>
            <div className="highlight-item">
              <span className="highlight-icon">💡</span>
              <div>
                <h4>Philosophy</h4>
                <p>Combining cutting-edge AI with production-grade engineering to create scalable, reliable solutions</p>
              </div>
            </div>
          </div>
        </div>

        <div className="about-sidebar">
          <div className="education-card card">
            <h3 className="card-title">
              <span className="title-icon">🎓</span>
              Education
            </h3>
            <div className="education-item">
              <h4 className="edu-degree">Bachelor of Engineering</h4>
              <p className="edu-field">Computer Science and Engineering</p>
              <p className="edu-school">VELS Institute of Science & Technology</p>
              <p className="edu-location">Chennai, Tamil Nadu</p>
              <p className="edu-date">June 2019 - May 2023</p>
            </div>
          </div>

          <div className="expertise-card card">
            <h3 className="card-title">
              <span className="title-icon">⚡</span>
              Core Expertise
            </h3>
            <div className="expertise-tags">
              <span className="tag">Python</span>
              <span className="tag">AI/ML</span>
              <span className="tag">FastAPI</span>
              <span className="tag">PostgreSQL</span>
              <span className="tag">AWS</span>
              <span className="tag">Docker</span>
              <span className="tag">React.js</span>
              <span className="tag">PyTorch</span>
              <span className="tag">LangChain</span>
              <span className="tag">Kafka</span>
              <span className="tag">Redis</span>
              <span className="tag">Kubernetes</span>
            </div>
          </div>

          <div className="contact-info-card card">
            <h3 className="card-title">
              <span className="title-icon">📬</span>
              Contact Info
            </h3>
            <div className="contact-details">
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <div>
                  <p className="contact-label">Email</p>
                  <a href="mailto:vvraja2301@gmail.com" className="contact-value">vvraja2301@gmail.com</a>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📱</span>
                <div>
                  <p className="contact-label">Phone</p>
                  <p className="contact-value">+91 8825615460</p>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <div>
                  <p className="contact-label">Location</p>
                  <p className="contact-value">Chennai, Tamil Nadu, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
