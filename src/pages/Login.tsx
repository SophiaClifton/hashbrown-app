import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle authentication
    // For now, just navigate to home
    navigate('/');
  };

  return (
    <div className="login-container">
      <div className="login-waves">
        <div className="wave wave1"></div>
        <div className="wave wave2"></div>
        <div className="wave wave3"></div>
      </div>
      
      <div className="login-card">
        <div className="dolphin-head">
          <div className="dolphin-face">
            <div className={`dolphin-eye left ${isTyping ? 'closed' : ''}`}></div>
            <div className={`dolphin-eye right ${isTyping ? 'closed' : ''}`}></div>
            <div className="dolphin-smile"></div>
          </div>
        </div>

        <h1>Welcome to Finsurance</h1>
        <p className="subtitle">Your Financial Wellness Companion 🌊</p>

        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => setIsTyping(true)}
              onBlur={() => setIsTyping(false)}
              required
            />
          </div>
          
          <button type="submit" className="login-button">
            Dive In
            <span className="bubble-container">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="bubble"></span>
              ))}
            </span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;