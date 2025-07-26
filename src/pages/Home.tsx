import React from 'react';
import { Link } from 'react-router-dom';
import profileImage from './profile.jpeg';
import '../styles/Home.css';

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <section className="hero-section">
        <div className="hero-content">
          <div className="profile-image">
            <img src={profileImage} alt="VP - ServiceNow Developer" />
          </div>
          <h1 className="hero-title">
            <span className="greeting">Hello, I'm</span>
            <span className="name">VP</span>
            <span className="title">ServiceNow Developer</span>
          </h1>
          <p className="hero-description">
            Transforming business processes and creating exceptional digital experiences
            through innovative ServiceNow solutions.
          </p>
          <div className="cta-buttons">
            <Link to="/about" className="button primary">Learn More</Link>
            <Link to="/projects" className="button dark">View Projects</Link>
          </div>
        </div>
      </section>

      <section className="highlights-section">
        <div className="highlight-card">
          <h3>Projects</h3>
          <p>Explore my portfolio of successful ServiceNow implementations and custom applications.</p>
          <Link to="/projects" className="highlight-link">View Projects →</Link>
        </div>
        <div className="highlight-card">
          <h3>Implementations</h3>
          <p>Discover how I've helped organizations transform their workflows with ServiceNow.</p>
          <Link to="/implementations" className="highlight-link">View Implementations →</Link>
        </div>
        <div className="highlight-card">
          <h3>Blog</h3>
          <p>Read about my insights and experiences in ServiceNow development and implementation.</p>
          <Link to="/blogs" className="highlight-link">Read Blog →</Link>
        </div>
      </section>

      <section className="connect-section">
        <h2>Let's Connect</h2>
        <p>Ready to discuss your next ServiceNow project?</p>
        <a 
          href="https://dev281875.service-now.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="button dark"
        >
          Get in Touch
        </a>
      </section>
    </div>
  );
};

export default Home; 