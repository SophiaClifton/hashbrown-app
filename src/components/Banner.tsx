import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Banner.css';

const Banner: React.FC = () => {
  const [isManagingFinancesOpen, setManagingFinancesOpen] = useState(false);

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
            onMouseEnter={() => setManagingFinancesOpen(true)}
            onMouseLeave={() => setManagingFinancesOpen(false)}
          >
            <span className="nav-link">
              Managing Finances
              <span className="dropdown-arrow">▾</span>
            </span>
            {isManagingFinancesOpen && (
              <div className="dropdown-menu">
                <Link to="/Income_and_expenses" className="dropdown-item">
                  <span className="dropdown-icon">📊</span>
                  Income and Expenses
                </Link>
                {/* Add more dropdown items here */}
              </div>
            )}
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
