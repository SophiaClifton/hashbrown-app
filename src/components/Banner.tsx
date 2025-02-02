import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css';

const Banner: React.FC = () => {
  return (
    <div className="banner">
      <div className="banner-content">
        <Link to="/" className="banner-logo">
          <span className="logo-dolphin">🐬</span>
          <span className="logo-text">FinDolphin</span>
        </Link>
        
        <nav className="banner-nav">
          <div 
            className="nav-item dropdown"
          >
            <span className="nav-link">
              Managing Finances
              <span className="dropdown-arrow">▾</span>
            </span>
          </div>
          
          <Link to="/financial-literacy-quiz" className="nav-item">
            <span className="nav-icon">🎯</span>
            Financial Quiz
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Banner;
