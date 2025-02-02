import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSession } from '../components/SessionProvider';
import './Login.css';

const API_URL = process.env.REACT_APP_API_URL || ""; // Load from .env

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { setUser } = useSession();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await fetch(`${API_URL}verify_user?email=${encodeURIComponent(email)}`);
      const data = await response.json();

      if (response.ok && data.isValid) {
        // Ensure all required user data is present
        const userData = {
          username: data.username || email.split('@')[0], // Fallback to email username if name not provided
          id: data.id || Date.now(), // Fallback to timestamp if no ID
          email: data.email || email
        };

        // Set user data
        setUser(userData);
        
        // Also store in sessionStorage as backup
        sessionStorage.setItem('user', JSON.stringify(userData));

        // Navigate to home page
        navigate('/');
      } else {
        setError('Invalid email. Please try again.');
      }
    } catch (err) {
      setError('Failed to connect to the server. Please try again later.');
      console.error('Login error:', err);
    } finally {
      setLoading(false);
    }
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
              disabled={loading}
            />
            {error && <p className="error-message">{error}</p>}
          </div>
          
          <button type="submit" className="login-button" disabled={loading}>
            {loading ? 'Swimming...' : 'Dive In'}
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