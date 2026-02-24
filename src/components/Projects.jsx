import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "AI Document Q&A Engine with Evaluation Framework",
      client: "Personal Project",
      period: "2025",
      description: "Built a production-grade RAG-based document Q&A system supporting multi-format ingestion (PDF, DOCX, HTML) with semantic chunking, hybrid retrieval (dense + BM25), and context-aware answer generation using OpenAI GPT-4. Layered an automated evaluation pipeline using RAGAS to continuously measure faithfulness, answer relevancy, and context recall.",
      highlights: [
        "Multi-format document ingestion (PDF, DOCX, HTML)",
        "Hybrid retrieval with dense + BM25 for improved recall",
        "RAGAS evaluation pipeline reducing hallucinations iteratively",
        "Streaming responses with per-query latency observability",
        "Token-usage tracking and monitoring dashboard"
      ],
      technologies: ["Python", "FastAPI", "LangChain", "RAG", "RAGAS", "OpenAI GPT-4", "Vector DB"],
      github: "https://github.com/V-VikramRaja",
      icon: "🤖"
    },
    {
      id: 2,
      title: "AI-Powered LinkedIn & Blog Post Generator",
      client: "Personal Project",
      period: "2025",
      description: "Built a multi-stage LLM orchestration pipeline that generates LinkedIn posts and long-form blog articles from minimal prompts or reference documents using RAG-grounded generation with semantic chunking and vector retrieval. Designed prompt optimization workflows with tone adaptation and audience targeting; integrated coherence evaluation loops reducing factual inconsistencies across generated outputs.",
      highlights: [
        "Multi-stage LLM orchestration for long-form content generation",
        "RAG-grounded generation from reference documents",
        "Prompt optimization with tone adaptation and audience targeting",
        "Coherence evaluation loops to reduce factual inconsistencies",
        "Semantic chunking with vector retrieval pipeline"
      ],
      technologies: ["Python", "FastAPI", "LLMs", "RAG", "Vector DB", "Prompt Engineering", "LangChain"],
      github: "https://github.com/V-VikramRaja",
      icon: "✍️"
    }
  ];

  return (
    <section className="projects section" id="projects">
      <h2 className="section-title">Featured Projects</h2>
      <p className="projects-subtitle">
        Selected projects demonstrating how I integrate LLMs, RAG, and AI systems into production-ready applications
      </p>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={project.id} className="project-card card" style={{ animationDelay: `${index * 0.2}s` }}>
            <div className="project-icon-wrapper">
              <span className="project-icon">{project.icon}</span>
            </div>
            <div className="project-header">
              <div className="project-meta">
                <span className="project-client">{project.client}</span>
                <span className="project-period">{project.period}</span>
              </div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
            </div>

            <div className="project-highlights">
              <h4 className="highlights-title">Key Achievements</h4>
              <ul className="highlights-list">
                {project.highlights.map((highlight, idx) => (
                  <li key={idx} className="highlight-item-project">
                    <span className="highlight-bullet">✓</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="project-footer">
              <div className="project-technologies">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="tech-tag">{tech}</span>
                ))}
              </div>
              {project.github && (
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="github-link"
                >
                  <span>View on GitHub</span>
                  <span>→</span>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="more-projects">
        <div className="more-projects-card card">
          <h3 className="more-title">More Projects</h3>
          <p className="more-description">
            I've built other projects spanning event-driven backends, real-time tracking systems, and AI-powered automation tools. Check out my LinkedIn for more!
          </p>
          <a 
            href="https://www.linkedin.com/in/vikram-raja23/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-primary"
          >
            <span>Visit My Linked In Portfolio</span>
            <span>🚀</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
