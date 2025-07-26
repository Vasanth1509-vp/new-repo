import React, { useEffect, useRef } from 'react';
import '../styles/About.css';

const About: React.FC = () => {
  const dreamProgress = 75; // Example progress percentage
  const progressBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (progressBarRef.current) {
      progressBarRef.current.style.setProperty('--progress-width', `${dreamProgress}%`);
    }
  }, [dreamProgress]);

  const contactInfo = {
    mobile: "+1234567890",
    email: "your.email@example.com",
    social: [
      {
        name: "LinkedIn",
        url: "https://linkedin.com/in/your-profile",
        icon: "🔗"
      },
      {
        name: "GitHub",
        url: "https://github.com/your-username",
        icon: "💻"
      },
      {
        name: "Instagram",
        url: "https://instagram.com/your-handle",
        icon: "📸"
      }
    ]
  };

  return (
    <div className="about-container">
      <section className="bio-section">
        <h1>About Me</h1>
        <div className="bio-content">
          <div className="bio-text">
            <p>
              Hello! I'm VP, a passionate ServiceNow Developer with a mission to transform
              business processes and create exceptional digital experiences. With extensive
              experience in ServiceNow implementation and development, I help organizations
              streamline their workflows and achieve digital transformation goals.
            </p>
            <p>
              My journey in the ServiceNow ecosystem has been driven by a commitment to
              excellence and a deep understanding of business process automation. I specialize
              in custom application development, workflow automation, and platform integration.
            </p>
            <p>
              When I'm not coding, I'm constantly learning about new ServiceNow features
              and best practices to stay at the forefront of platform capabilities.
            </p>
          </div>
        </div>
      </section>

      <section className="skills-section">
        <h2>Core Skills</h2>
        <div className="skills-grid">
          <div className="skill-card">
            <h3>ServiceNow Development</h3>
            <ul>
              <li>Custom Application Development</li>
              <li>Business Rules & Client Scripts</li>
              <li>UI Policies & UI Actions</li>
              <li>Service Portal Development</li>
            </ul>
          </div>
          <div className="skill-card">
            <h3>Integration</h3>
            <ul>
              <li>REST & SOAP Web Services</li>
              <li>Integration Hub</li>
              <li>Third-party API Integration</li>
              <li>MID Server Configuration</li>
            </ul>
          </div>
          <div className="skill-card">
            <h3>Process Automation</h3>
            <ul>
              <li>Workflow Design</li>
              <li>Process Builder</li>
              <li>Flow Designer</li>
              <li>Service Catalog</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="dream-progress-section">
        <h2>Journey to My Dream</h2>
        <p>Progress towards becoming a ServiceNow Technical Architect</p>
        <div className="progress-container">
          <div 
            ref={progressBarRef}
            className="progress-bar"
            role="progressbar"
            aria-valuenow={dreamProgress}
            aria-valuemin={0}
            aria-valuemax={100}
            data-progress={dreamProgress}
          >
            <span className="progress-text">{dreamProgress}%</span>
          </div>
        </div>
      </section>

      <section className="contact-section">
        <h2>Let's Connect</h2>
        <div className="contact-info">
          <div className="contact-item">
            <span className="contact-icon">📱</span>
            <a href={`tel:${contactInfo.mobile}`} className="contact-link">
              {contactInfo.mobile}
            </a>
          </div>
          <div className="contact-item">
            <span className="contact-icon">📧</span>
            <a href={`mailto:${contactInfo.email}`} className="contact-link">
              {contactInfo.email}
            </a>
          </div>
        </div>

        <div className="social-links">
          {contactInfo.social.map((platform) => (
            <a
              key={platform.name}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label={platform.name}
            >
              <span className="social-icon">{platform.icon}</span>
              <span className="social-name">{platform.name}</span>
            </a>
          ))}
        </div>

        <a 
          href="https://dev281875.service-now.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="connect-button dark"
        >
          Let's Connect
        </a>
      </section>
    </div>
  );
};

export default About; 