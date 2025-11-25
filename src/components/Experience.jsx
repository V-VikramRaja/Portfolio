import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: "Full-stack AI Engineer (Python)",
      company: "Intemo Technologies Pvt",
      location: "Chennai, TN",
      period: "Apr 2025 - Present",
      type: "Full-time",
      description: [
        "Automating complex manual data entry processes in ERP systems through AI-driven document processing, enhancing operational accuracy and efficiency for logistics & freight forwarding clients.",
        "Developed an end-to-end automation pipeline using OCR, LLMs (ChatGPT & Gemini), and FastAPI that extracts, classifies, and structures emailed documents into JSON, auto-filling ERP fields via Selenium/Playwright with PostgreSQL integration—fully eliminating human input.",
        "Deployed on AWS using Docker containers, CI/CD, and asynchronous queues to handle multi-tenant loads efficiently and maintain 99.9% uptime."
      ],
      skills: ["Python", "FastAPI", "LLMs", "OCR", "AWS", "Docker", "PostgreSQL", "Selenium", "CI/CD"]
    },
    {
      id: 2,
      role: "ML and Model Engineer",
      company: "Intemo Technologies Pvt",
      location: "Chennai, TN",
      period: "Jul 2024 - Apr 2025",
      type: "Full-time",
      description: [
        "Developed an SVR-based model for predicting flight departure and arrival times (ETD/ETA) using actual data (ATD/ATA), improving scheduling and reducing delays in aviation operations.",
        "Performed full ML lifecycle — data ingestion, preprocessing, hyperparameter tuning, and deployment on AWS EC2/S3 — with model evaluation using MAE and R² metrics."
      ],
      skills: ["Python", "Scikit-learn", "AWS EC2", "AWS S3", "Machine Learning", "SVR", "Data Engineering"]
    },
    {
      id: 3,
      role: "Full Stack Developer II",
      company: "Intemo Technologies Pvt",
      location: "Chennai, TN",
      period: "Aug 2023 - Jul 2024",
      type: "Full-time",
      description: [
        "Developed a live container tracking system delivering real-time logistics milestones; built REST APIs using Java Spring Boot, PostgreSQL, Kafka Debezium, and ZooKeeper for event streaming and synchronization.",
        "Gradually took ownership of core modules and deployments on AWS EC2, containerized with Docker, and independently built 80% of the React.js frontend for real-time tracking dashboards."
      ],
      skills: ["Java", "Spring Boot", "PostgreSQL", "Kafka", "Debezium", "React.js", "Docker", "AWS EC2"]
    }
  ];

  return (
    <section className="experience section" id="experience">
      <h2 className="section-title">Work Experience</h2>
      <div className="experience-timeline">
        {experiences.map((exp, index) => (
          <div key={exp.id} className="timeline-item" style={{ animationDelay: `${index * 0.2}s` }}>
            <div className="timeline-marker">
              <div className="marker-dot"></div>
              {index < experiences.length - 1 && <div className="marker-line"></div>}
            </div>
            <div className="experience-card card">
              <div className="exp-header">
                <div className="exp-title-section">
                  <h3 className="exp-role">{exp.role}</h3>
                  <div className="exp-company-info">
                    <span className="exp-company">{exp.company}</span>
                    <span className="exp-separator">•</span>
                    <span className="exp-location">{exp.location}</span>
                  </div>
                </div>
                <div className="exp-meta">
                  <span className="exp-period">{exp.period}</span>
                  <span className="exp-type">{exp.type}</span>
                </div>
              </div>
              <div className="exp-description">
                {exp.description.map((desc, idx) => (
                  <div key={idx} className="exp-bullet">
                    <span className="bullet-icon">▸</span>
                    <p>{desc}</p>
                  </div>
                ))}
              </div>
              <div className="exp-skills">
                {exp.skills.map((skill, idx) => (
                  <span key={idx} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
