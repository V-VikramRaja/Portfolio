import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: "Full Stack AI Engineer (Python)",
      company: "Intemo Technologies Pvt Ltd",
      location: "Chennai, TN",
      period: "Sep 2024 - Present",
      type: "Full-time",
      description: [
        "Reduced manual ERP data entry by 70% by owning an end-to-end AI document intelligence platform that extracts, validates, and transforms unstructured logistics documents into structured ERP-ready outputs using OpenAI and Gemini models.",
        "Cut LLM hallucination rate significantly by layering business-rule validation and guardrails on top of model outputs; implemented RAGAS-based evaluation and response consistency checks to maintain production-grade accuracy.",
        "Achieved sub-2s inference latency for document processing by building async queue-based FastAPI pipelines with background workers, retry orchestration, and multi-tenant isolation handling concurrent ingestion at scale.",
        "Improved pipeline observability by integrating structured logging, LLM trace monitoring, and per-request metrics to detect extraction drift and prompt degradation in production.",
        "Reduced deployment friction by containerizing all AI services on AWS with Docker and CI/CD, enabling zero-downtime releases and reproducible inference environments."
      ],
      skills: ["Python", "FastAPI", "OpenAI", "Gemini", "LangChain", "RAG", "RAGAS", "Docker", "AWS", "PostgreSQL", "CI/CD"]
    },
    {
      id: 2,
      role: "AI Systems Engineer",
      company: "Intemo Technologies Pvt Ltd",
      location: "Chennai, TN",
      period: "Jul 2024 - Sep 2024",
      type: "Full-time",
      description: [
        "Improved logistics ETA/ETD scheduling accuracy by 25% by productionizing ML prediction services built on engineered shipment features, deployed as low-latency REST APIs on AWS EC2/S3.",
        "Accelerated model-to-production cycle by building reusable data-to-inference pipelines covering ingestion, preprocessing, feature engineering, and model serving — reducing new model deployment time by over 40%."
      ],
      skills: ["Python", "Scikit-learn", "FastAPI", "AWS EC2", "AWS S3", "ML Pipelines", "REST APIs"]
    },
    {
      id: 3,
      role: "Full Stack Developer",
      company: "Intemo Technologies Pvt Ltd",
      location: "Chennai, TN",
      period: "Aug 2023 - Jul 2024",
      type: "Full-time",
      description: [
        "Delivered real-time shipment milestone tracking to enterprise clients by building an event-driven microservices platform processing high-frequency status updates with PostgreSQL, Kafka, and Debezium CDC pipelines.",
        "Owned end-to-end development of React.js tracking dashboards and REST APIs consumed by enterprise clients, supporting live data visualization across thousands of daily shipment events."
      ],
      skills: ["React.js", "TypeScript", "Python", "PostgreSQL", "Kafka", "Debezium", "Docker", "AWS EC2", "REST APIs"]
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
