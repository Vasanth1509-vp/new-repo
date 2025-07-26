import React from 'react';
import '../styles/LoadingScreen.css';

const LoadingScreen: React.FC = () => {
  return (
    <div className="loading-screen">
      <div className="loading-content">
        <div className="glowing-circle">
          <span className="initials">VP</span>
        </div>
        <h2 className="welcome-text">Welcome to Vp's Portfolio</h2>
      </div>
    </div>
  );
};

export default LoadingScreen; 