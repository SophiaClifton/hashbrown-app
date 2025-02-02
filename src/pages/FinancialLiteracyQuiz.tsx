import React, { useState } from 'react';
import Banner from "../components/Banner";
import Sidebar from "../components/Sidebar";
import Chatbot from "../components/Chatbot";
import "./FinancialLiteracyQuiz.css";

const FinancialLiteracyQuiz: React.FC = () => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [quizStarted, setQuizStarted] = useState(false);
  const [isDolphinsSwimming, setIsDolphinsSwimming] = useState(false);

  const handleAnswerClick = (answer: string) => {
    setSelectedAnswer(answer);
  };

  const handleStartClick = () => {
    setIsDolphinsSwimming(true);
    // Add random swim directions for each dolphin
    const dolphins = document.querySelectorAll('.dolphin');
    dolphins.forEach((dolphin) => {
      const swimX = Math.random() * 400 - 200; // Random X between -200 and 200
      const swimAngle = Math.random() * 60 - 30; // Random angle between -30 and 30 degrees
      (dolphin as HTMLElement).style.setProperty('--swim-x', `${swimX}px`);
      (dolphin as HTMLElement).style.setProperty('--swim-angle', `${swimAngle}deg`);
    });
    
    // Delay the quiz start until after animation
    setTimeout(() => {
      setQuizStarted(true);
    }, 1000);
  };

  const getFeedbackMessage = () => {
    if (!selectedAnswer) return null;

    if (selectedAnswer === 'B') {
      return (
        <div className="feedback-message correct">
          <h3>Correct Answer!</h3>
          <p>Since Emily is in a lower tax bracket now and expects her income to increase in the future, using a TFSA makes more sense. She won't get a big immediate tax break from an RRSP at her current income level, and withdrawals from a TFSA are tax-free later. She can keep her future RRSP contribution room for when she's in a higher tax bracket and will get a larger tax deduction.</p>
          <h4>Why the Other Options Are Less Ideal:</h4>
          <ul>
            <li>A. RRSP: Contributing to an RRSP in a low tax bracket provides a smaller tax deduction. She might benefit more from deferring those RRSP contributions until her income is higher, so the tax deduction is more valuable.</li>
            <li>C. High-Interest Savings Account (HISA): While safe and relatively liquid, the interest earned is taxable in a non-registered account, and rates may be lower than potential investment returns in a TFSA.</li>
            <li>D. Non-Registered Brokerage Account: Investment growth would be taxable every year (for dividends, interest) or upon sale (capital gains), which is less efficient than the tax-free growth of a TFSA.</li>
          </ul>
        </div>
      );
    } else {
      return (
        <div className="feedback-message incorrect">
          <h3>Incorrect Answer</h3>
          <p>The correct answer is B. Contribute to her TFSA.</p>
          <p>Since Emily is in a lower tax bracket now and expects her income to increase in the future, using a TFSA makes more sense. She won't get a big immediate tax break from an RRSP at her current income level, and withdrawals from a TFSA are tax-free later.</p>
        </div>
      );
    }
  };

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
              
              <div className="start-button-container">
                <button 
                  className="start-button"
                  onClick={handleStartClick}
                  disabled={isDolphinsSwimming}
                >
                  Let's Start!
                </button>
                <div className="dolphins-container">
                  <span className={`dolphin ${isDolphinsSwimming ? 'swimming' : ''}`}>🐬</span>
                  <span className={`dolphin ${isDolphinsSwimming ? 'swimming' : ''}`}>🐬</span>
                  <span className={`dolphin ${isDolphinsSwimming ? 'swimming' : ''}`}>🐬</span>
                  <span className={`dolphin ${isDolphinsSwimming ? 'swimming' : ''}`}>🐬</span>
                </div>
              </div>
            </div>
          </div>

          {quizStarted && (
            <div className="fin-message-container">
              <div className="fin-avatar-placeholder">
                {/* Placeholder for Fin's avatar */}
              </div>
              <div className="quiz-question-bubble">
                <p>Emily is 22 years old, just graduated, and started her first full-time job with a salary of $40,000. She has $3,000 to invest this year. Emily is in a relatively low tax bracket and expects her income to grow over time. Which account should she prioritize for this $3,000?</p>
                
                <div className="quiz-options">
                  <div 
                    className="quiz-option"
                    onClick={() => handleAnswerClick('A')}
                  >
                    A. Contribute to her RRSP (Registered Retirement Savings Plan)
                  </div>
                  <div 
                    className="quiz-option"
                    onClick={() => handleAnswerClick('B')}
                  >
                    B. Contribute to her TFSA (Tax-Free Savings Account)
                  </div>
                  <div 
                    className="quiz-option"
                    onClick={() => handleAnswerClick('C')}
                  >
                    C. Put the money in a High-Interest Savings Account (HISA)
                  </div>
                  <div 
                    className="quiz-option"
                    onClick={() => handleAnswerClick('D')}
                  >
                    D. Invest in a Non-Registered Brokerage Account
                  </div>
                </div>

                {selectedAnswer && getFeedbackMessage()}
              </div>
            </div>
          )}
        </div>
        <Chatbot />
      </div>
    </div>
  );
};

export default FinancialLiteracyQuiz; 