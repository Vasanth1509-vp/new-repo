import React, { useState } from 'react';
import '../styles/Implementations.css';

interface Implementation {
  id: number;
  title: string;
  company: string;
  duration: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

const Implementations: React.FC = () => {
  const [activeId, setActiveId] = useState<number | null>(null);

  const implementations: Implementation[] = [
    {
      id: 1,
      title: "ITSM Process Transformation",
      company: "Global Tech Solutions",
      duration: "6 months",
      description: "Led the implementation of ServiceNow ITSM modules to modernize IT service delivery and support processes.",
      achievements: [
        "Reduced incident resolution time by 45%",
        "Implemented automated assignment rules and SLA tracking",
        "Developed custom dashboards for real-time monitoring",
        "Trained 100+ end users on the new system"
      ],
      technologies: ["ITSM", "Performance Analytics", "Service Portal", "Flow Designer"]
    },
    {
      id: 2,
      title: "HR Service Delivery Implementation",
      company: "Healthcare Services Inc.",
      duration: "4 months",
      description: "Implemented ServiceNow HR Service Delivery to streamline employee services and HR operations.",
      achievements: [
        "Automated 15+ HR processes",
        "Reduced onboarding time by 60%",
        "Created employee self-service portal",
        "Integrated with existing HR systems"
      ],
      technologies: ["HRSD", "Integration Hub", "Service Portal", "Workflow Editor"]
    },
    {
      id: 3,
      title: "CSM & Knowledge Management",
      company: "Retail Solutions Corp",
      duration: "5 months",
      description: "Deployed ServiceNow Customer Service Management with integrated knowledge base and case management.",
      achievements: [
        "Improved customer satisfaction by 35%",
        "Implemented AI-powered knowledge suggestions",
        "Developed customer self-service portal",
        "Integrated with legacy CRM system"
      ],
      technologies: ["CSM", "Knowledge Management", "Virtual Agent", "Integration Hub"]
    },
    {
      id: 4,
      title: "ITOM & Discovery Implementation",
      company: "Financial Services Group",
      duration: "8 months",
      description: "Implemented comprehensive IT Operations Management solution with automated discovery and service mapping.",
      achievements: [
        "Automated infrastructure discovery process",
        "Reduced manual asset updates by 80%",
        "Implemented service mapping for critical services",
        "Created custom CMDB health dashboards"
      ],
      technologies: ["ITOM", "Discovery", "Service Mapping", "Flow Designer"]
    }
  ];

  const toggleAccordion = (id: number) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <div className="implementations-container">
      <h1>ServiceNow Implementations</h1>
      <p className="implementations-intro">
        Here are some of my key ServiceNow implementation projects. Each project showcases
        my ability to deliver successful digital transformations using ServiceNow.
      </p>

      <div className="implementations-list">
        {implementations.map((impl) => (
          <div 
            key={impl.id} 
            className={`implementation-item ${activeId === impl.id ? 'active' : ''}`}
          >
            <button
              className="implementation-header"
              onClick={() => toggleAccordion(impl.id)}
              aria-expanded={activeId === impl.id}
            >
              <div className="header-content">
                <h3>{impl.title}</h3>
                <div className="company-info">
                  <span>{impl.company}</span>
                  <span className="duration">{impl.duration}</span>
                </div>
              </div>
              <span className="toggle-icon">
                {activeId === impl.id ? '−' : '+'}
              </span>
            </button>

            <div className="implementation-content">
              <p className="description">{impl.description}</p>
              
              <div className="achievements">
                <h4>Key Achievements</h4>
                <ul>
                  {impl.achievements.map((achievement, index) => (
                    <li key={index}>{achievement}</li>
                  ))}
                </ul>
              </div>

              <div className="technologies">
                <h4>Technologies Used</h4>
                <div className="tech-tags">
                  {impl.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <section className="contact-section">
        <h2>Ready to Transform Your ServiceNow Implementation?</h2>
        <p>Let's discuss how I can help optimize your ServiceNow instance.</p>
        <a 
          href="https://dev281875.service-now.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="button primary"
        >
          Start a Conversation
        </a>
      </section>
    </div>
  );
};

export default Implementations; 