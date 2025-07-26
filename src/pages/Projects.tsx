import React from 'react';
import '../styles/Projects.css';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  link?: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "ServiceNow ITSM Enhancement",
      description: "Implemented custom workflows and integrations to streamline IT service management processes, resulting in a 40% reduction in resolution time.",
      technologies: ["ServiceNow", "JavaScript", "Integration Hub", "REST API"],
      image: "itsm.jpg"
    },
    {
      id: 2,
      title: "HR Service Portal",
      description: "Developed a modern HR service portal with custom widgets and automated workflows for employee onboarding and offboarding processes.",
      technologies: ["ServiceNow", "Service Portal", "HTML5", "CSS3", "AngularJS"],
      image: "hr-portal.jpg"
    },
    {
      id: 3,
      title: "Asset Management System",
      description: "Created a comprehensive asset management solution with real-time tracking, automated maintenance schedules, and reporting dashboards.",
      technologies: ["ServiceNow", "Performance Analytics", "Flow Designer", "JavaScript"],
      image: "asset-mgmt.jpg"
    },
    {
      id: 4,
      title: "Customer Service Portal",
      description: "Built a customer-facing service portal with knowledge base integration, case management, and live chat support.",
      technologies: ["ServiceNow", "Service Portal", "Virtual Agent", "Integration Hub"],
      image: "customer-portal.jpg"
    }
  ];

  return (
    <div className="projects-container">
      <h1>My Projects</h1>
      <p className="projects-intro">
        Here are some of the key projects I've worked on. Each project demonstrates
        my expertise in ServiceNow development and implementation.
      </p>
      
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-image">
              <div className="image-placeholder">
                {/* Replace with actual images later */}
                <span>{project.title[0]}</span>
              </div>
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="technologies">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
              {project.link && (
                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  View Project →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      <section className="contact-section">
        <h2>Interested in Working Together?</h2>
        <p>Let's discuss how I can help with your next ServiceNow project.</p>
        <a 
          href="https://dev281875.service-now.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="button primary"
        >
          Get in Touch
        </a>
      </section>
    </div>
  );
};

export default Projects; 