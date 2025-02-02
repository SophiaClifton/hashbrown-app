import React from 'react';
import Banner from "../components/Banner";
import Sidebar from "../components/Sidebar";
import Chatbot from "../components/Chatbot";
import "./FinancialLiteracyQuiz.css";

const FinancialLiteracyQuiz: React.FC = () => {
  return (
    <div>
      <Banner />
      <div className="quiz-container">
        <Sidebar />
        <div className="quiz-content">
          <div className="fin-message-container">
            <div className="fin-avatar-placeholder">
              {/* Placeholder for Fin's avatar */}
            </div>
            <div className="fin-message-bubble">
              <div className="water-drops">
                <div className="water-drop"></div>
                <div className="water-drop"></div>
                <div className="water-drop"></div>
                <div className="water-drop"></div>
                <div className="water-drop"></div>
                <div className="water-drop"></div>
                <div className="water-drop"></div>
                <div className="water-drop"></div>
                <div className="water-drop"></div>
                <div className="water-drop"></div>
              </div>
              <p>Heya! Fin the FinTech bot is here to help! 🐬</p>
              <p>Ready to make some waves 🌊 with your financial know-how? You've come to the right place! I've got six splashtastic 🛟, real-life scenarios all about deciding whether to invest in an RRSP or TFSA, or how to handle high-interest credit card debt. Each question gives you multiple answers, but only one is the real catch of the day 🎣.</p>
              <p>Here's how it works, my fin-tastic friends:</p>
              <ul>
                <li>Read the Scenario: Picture yourself in the story—maybe you're saving for your first home or balancing whether to invest or pay off debt.</li>
                <li>Pick an Answer: You'll have a few options. Don't worry if you get stuck, it happens to the best dolphins!</li>
                <li>Check the Explanation: I'll let you know which choice makes the biggest splash and why the others might send you off-course.</li>
              </ul>
              <p>So, let's dive right in and test those financial flippers 🥽! I promise not to blow any bubbles here 🫧—just honest, helpful guidance to keep you swimming strong on your journey to financial well-being.</p>
              <p>Splash away, and happy learning!</p>
            </div>
          </div>
          {/* Quiz content will go here */}
        </div>
        <Chatbot />
      </div>
    </div>
  );
};

export default FinancialLiteracyQuiz; 