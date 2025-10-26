import React from 'react';
import './Contact.css';

const Contact = () => {
  const contactMethods = [
    {
      icon: '📧',
      title: 'Email',
      value: 'vvraja2301@gmail.com',
      link: 'mailto:vvraja2301@gmail.com',
      description: 'Send me an email anytime'
    },
    {
      icon: '📱',
      title: 'Phone',
      value: '+91 8825615460',
      link: 'tel:+918825615460',
      description: 'Call me during business hours'
    },
    {
      icon: '💼',
      title: 'LinkedIn',
      value: 'vikram-raja23',
      link: 'https://www.linkedin.com/in/vikram-raja23/',
      description: 'Connect with me professionally'
    },
    {
      icon: '📄',
      title: 'Resume',
      value: 'View My Resume',
      link: '/Resume.pdf',
      description: 'Download my CV'
    }
  ];

  return (
    <section className="contact section" id="contact">
      <h2 className="section-title">Get In Touch</h2>
      <p className="contact-subtitle">
        I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
      </p>

      <div className="contact-content-centered">
        <div className="contact-intro">
          <h3 className="contact-intro-title">Let's Build Something Amazing Together</h3>
          <p className="contact-intro-text">
            Whether you're looking for a full-stack AI engineer, need help with a challenging technical problem, 
            or want to collaborate on an innovative project, I'd love to hear from you.
          </p>
        </div>

        <div className="contact-methods-grid">
          {contactMethods.map((method, index) => (
            <a 
              key={index} 
              href={method.link} 
              target={method.link.startsWith('http') ? '_blank' : '_self'}
              rel={method.link.startsWith('http') ? 'noopener noreferrer' : ''}
              className="contact-method-card card"
            >
              <span className="contact-method-icon">{method.icon}</span>
              <div className="contact-method-info">
                <h4 className="contact-method-title">{method.title}</h4>
                <p className="contact-method-value">{method.value}</p>
                <p className="contact-method-description">{method.description}</p>
              </div>
            </a>
          ))}
        </div>

        <div className="availability-card card">
          <div className="availability-header">
            <span className="availability-icon">🟢</span>
            <h4 className="availability-title">Available for Work</h4>
          </div>
          <p className="availability-text">
            I'm currently open to full-time opportunities, consulting projects, and freelance work. 
            Especially interested in roles involving AI/ML, distributed systems, and full-stack development.
          </p>
        </div>
      </div>

      <footer className="footer">
        <div className="footer-content">
          <p className="footer-text">
            © 2025 Vikram Raja. Built with React & Custom CSS.
          </p>
          <div className="footer-links">
            <a href="https://www.linkedin.com/in/vikram-raja23/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <span>•</span>
            <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
            <span>•</span>
            <a href="mailto:vvraja2301@gmail.com">Email</a>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Contact;