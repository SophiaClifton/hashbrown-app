import React, { useState } from 'react';
import Banner from "../components/Banner";
import Sidebar from "../components/Sidebar";
import Chatbot from "../components/Chatbot";
import "./FinancialLiteracyQuiz.css";

const FinancialLiteracyQuiz: React.FC = () => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [quizStarted, setQuizStarted] = useState(false);
  const [isDolphinsSwimming, setIsDolphinsSwimming] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(1);

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

  const handleNextQuestion = () => {
    if (selectedAnswer === 'B' && currentQuestion === 1) {
      setCurrentQuestion(2);
      setSelectedAnswer(null);
    }
  };

  const getFeedbackMessage = () => {
    if (!selectedAnswer) return null;

    if (currentQuestion === 1) {
      if (selectedAnswer === 'B') {
        return (
          <div className="feedback-message correct">
            <div className="happy-dolphin-container">
              🐬
            </div>
            <h3>Correct Answer!</h3>
            <p>Since Emily is in a lower tax bracket now and expects her income to increase in the future, using a TFSA makes more sense. She won't get a big immediate tax break from an RRSP at her current income level, and withdrawals from a TFSA are tax-free later.</p>
            <h4>Why the Other Options Are Less Ideal:</h4>
            <ul>
              <li>A. RRSP: Contributing to an RRSP in a low tax bracket provides a smaller tax deduction. She might benefit more from deferring those RRSP contributions until her income is higher, so the tax deduction is more valuable.</li>
              <li>C. High-Interest Savings Account (HISA): While safe and relatively liquid, the interest earned is taxable in a non-registered account, and rates may be lower than potential investment returns in a TFSA.</li>
              <li>D. Non-Registered Brokerage Account: Investment growth would be taxable every year (for dividends, interest) or upon sale (capital gains), which is less efficient than the tax-free growth of a TFSA.</li>
            </ul>
            <button 
              className="start-button" 
              onClick={handleNextQuestion}
              style={{ marginTop: '20px' }}
            >
              Next Question
            </button>
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
    } else if (currentQuestion === 2) {
      if (selectedAnswer === 'A') {
        return (
          <div className="feedback-message correct">
            <div className="happy-dolphin-container">
              🐬
            </div>
            <h3>Correct Answer!</h3>
            <p>A TFSA is flexible; any gains you earn are tax-free, and withdrawals will not trigger taxation or affect future contribution room if you re-contribute in subsequent years. For a 3-year time horizon, a conservative investment or a high-interest TFSA can help James protect his savings while still earning some growth.</p>
            <h4>Why the Other Options Are Less Ideal:</h4>
            <ul>
              <li>B. RRSP + Home Buyers' Plan: While the HBP allows withdrawing up to $35,000 for a first home without immediate tax consequences, James must repay it over 15 years. If he doesn't, the withdrawn amount is added to his taxable income. Also, an RRSP is typically for longer-term retirement saving; it might be less flexible if timelines or plans change.</li>
              <li>C. Chequing Account: This offers no meaningful interest, so inflation erodes the value of the money over time.</li>
              <li>D. High-Risk Stocks: For a short 3-year goal, high volatility could mean James might face significant losses if the market dips at the wrong time.</li>
            </ul>
          </div>
        );
      } else {
        return (
          <div className="feedback-message incorrect">
            <h3>Incorrect Answer</h3>
            <p>The correct answer is A. Contribute to a TFSA and invest conservatively.</p>
            <p>A TFSA is flexible; any gains you earn are tax-free, and withdrawals will not trigger taxation or affect future contribution room if you re-contribute in subsequent years. For a 3-year time horizon, a conservative investment or a high-interest TFSA can help James protect his savings while still earning some growth.</p>
          </div>
        );
      }
    }
  };

  const getCurrentQuestion = () => {
    if (currentQuestion === 1) {
      return (
        <p>Emily is 22 years old and just started her first job making $35,000 per year. She expects her income to increase significantly over the next few years as she gains experience. She has $200 per month to save and is trying to decide between different savings options. Which would be most beneficial for her current situation?</p>
      );
    } else if (currentQuestion === 2) {
      return (
        <p>James is 30 years old and wants to buy his first home in the next 3 years. He has $10,000 saved and plans to add more monthly. He is considering using an RRSP, a TFSA, or leaving the money in a chequing account. Which is the most suitable option for short-term home savings in Canada?</p>
      );
    }
  };

  const getOptions = () => {
    if (currentQuestion === 1) {
      return [
        { value: 'A', label: 'Contribute to her RRSP' },
        { value: 'B', label: 'Contribute to her TFSA' },
        { value: 'C', label: 'Put the money in a high-interest savings account' },
        { value: 'D', label: 'Open a non-registered brokerage account' }
      ];
    } else if (currentQuestion === 2) {
      return [
        { value: 'A', label: 'Contribute to a TFSA and invest conservatively' },
        { value: 'B', label: 'Contribute to an RRSP and plan to withdraw under the Home Buyers\' Plan (HBP)' },
        { value: 'C', label: 'Keep the money in a Chequing Account' },
        { value: 'D', label: 'Invest aggressively in High-Risk Stocks' }
      ];
    }
    return [];
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
                {getCurrentQuestion()}
                <div className="quiz-options">
                  {getOptions().map((option) => (
                    <button
                      key={option.value}
                      className="quiz-option"
                      onClick={() => handleAnswerClick(option.value)}
                      style={{
                        backgroundColor: selectedAnswer === option.value ? '#e3f2fd' : undefined,
                        borderColor: selectedAnswer === option.value ? '#2196f3' : undefined,
                      }}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
                {getFeedbackMessage()}
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