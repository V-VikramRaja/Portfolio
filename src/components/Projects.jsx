import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Understanding Disease Heterogeneity",
      client: "Personal Project",
      period: "Jan 2025 - May 2025",
      description: "Conducted EDA and multivariate analysis on 50K+ synthetic ALS patient records; applied PCA/autoencoders to cut features 120→22 (82% reduction, 93% variance retained) and clustered patients (silhouette >0.71) into 3 subtypes, deploying results in Plotly dashboards for clinician validation and designing subtype-targeted trials.",
      highlights: [
        "82% feature reduction with 93% variance retained",
        "Clustered 50K+ patients into 3 subtypes",
        "Silhouette score > 0.71",
        "Built interactive Plotly dashboards"
      ],
      technologies: ["Python", "Scikit-learn", "PCA", "Autoencoders", "Plotly", "Data Analysis"],
      github: "https://github.com/Kaushik0802/-Understanding-Disease-Heterogeneity-IGE-Hackathon-2025",
      icon: "🧬"
    },
    {
      id: 2,
      title: "Image Diffusion for Synthetic Data Generation",
      client: "Personal Project",
      period: "May 2025 - Oct 2025",
      description: "Built a DDPM pipeline with baseline and attention-enhanced U-Net (linear attention, ResNet blocks, group norm, SiLU), on 10K+ Oxford Flowers; used beta scheduling + sinusoidal embeddings to cut reconstruction error 21% and latent size 78% vs. GANs. Deployed via Streamlit GPU app for batch sampling (60 images in 4 mins); achieved FID 12.4 (–37%) and IS 4.8.",
      highlights: [
        "21% reduction in reconstruction error",
        "78% smaller latent size vs GANs",
        "FID score: 12.4 (-37% improvement)",
        "Inception Score: 4.8",
        "60 images generated in 4 minutes"
      ],
      technologies: ["Python", "PyTorch", "Diffusion Models", "U-Net", "Streamlit", "Computer Vision"],
      github: "https://github.com/Kaushik0802/Custom-Diffusion-Model-for-Image-Generation",
      icon: "🎨"
    }
  ];

  return (
    <section className="projects section" id="projects">
      <h2 className="section-title">Featured Projects</h2>
      <p className="projects-subtitle">
        Selected projects demonstrating expertise in AI/ML, data engineering, and full-stack development
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
            I've worked on numerous other projects involving real-time data pipelines, geospatial analytics, 
            container tracking systems, and AI-driven automation. Check out my GitHub for more!
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
