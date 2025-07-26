import React from 'react';
import '../styles/Certifications.css';

interface Certification {
  id: number;
  title: string;
  issueDate: string;
  validUntil: string;
  badgeUrl: string;
  description: string;
  skills: string[];
}

const Certifications: React.FC = () => {
  const certifications: Certification[] = [
    {
      id: 1,
      title: "ServiceNow Certified System Administrator",
      issueDate: "January 2023",
      validUntil: "January 2025",
      badgeUrl: "csa-badge.png",
      description: "Demonstrates expertise in ServiceNow platform administration, user management, and basic customization.",
      skills: [
        "User Administration",
        "Security Management",
        "Service Catalog",
        "UI Customization"
      ]
    },
    {
      id: 2,
      title: "ServiceNow Certified Application Developer",
      issueDate: "March 2023",
      validUntil: "March 2025",
      badgeUrl: "cad-badge.png",
      description: "Validates ability to create custom applications and develop solutions on the ServiceNow platform.",
      skills: [
        "Application Development",
        "Scripting",
        "Workflow Design",
        "Integration"
      ]
    },
    {
      id: 3,
      title: "ServiceNow ITSM Implementation Specialist",
      issueDate: "May 2023",
      validUntil: "May 2025",
      badgeUrl: "itsm-badge.png",
      description: "Specializes in implementing and configuring ServiceNow ITSM applications and processes.",
      skills: [
        "ITIL Processes",
        "Process Design",
        "ITSM Configuration",
        "Best Practices"
      ]
    },
    {
      id: 4,
      title: "ServiceNow Performance Analytics Implementation",
      issueDate: "July 2023",
      validUntil: "July 2025",
      badgeUrl: "pa-badge.png",
      description: "Expert in implementing and configuring Performance Analytics for data-driven decisions.",
      skills: [
        "KPI Design",
        "Dashboard Creation",
        "Data Analysis",
        "Reporting"
      ]
    }
  ];

  return (
    <div className="certifications-container">
      <h1>ServiceNow Certifications</h1>
      <p className="certifications-intro">
        My ServiceNow certifications demonstrate my expertise and commitment to
        maintaining the highest standards of platform knowledge and implementation capabilities.
      </p>

      <div className="certifications-grid">
        {certifications.map((cert) => (
          <div key={cert.id} className="certification-card">
            <div className="certification-badge">
              <div className="badge-placeholder">
                {/* Replace with actual badge images later */}
                <span>{cert.title.split(' ').map(word => word[0]).join('')}</span>
              </div>
            </div>
            
            <div className="certification-content">
              <h3>{cert.title}</h3>
              
              <div className="certification-dates">
                <span>Issued: {cert.issueDate}</span>
                <span>Valid until: {cert.validUntil}</span>
              </div>

              <p className="certification-description">
                {cert.description}
              </p>

              <div className="certification-skills">
                <h4>Key Skills</h4>
                <div className="skill-tags">
                  {cert.skills.map((skill, index) => (
                    <span key={index} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <section className="verification-section">
        <h2>Verify My Certifications</h2>
        <p>
          All certifications can be verified through the official ServiceNow Certification Verification Portal.
          Contact me for verification details.
        </p>
        <a 
          href="https://dev281875.service-now.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="button primary"
        >
          Contact for Verification
        </a>
      </section>
    </div>
  );
};

export default Certifications; 