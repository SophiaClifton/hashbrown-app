import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";  
import Chatbot from "../components/Chatbot";
import { useNavigate, useLocation } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const speakWelcome = () => {
    const message = "Welcome to Finsurance HomePage, press B to navigate the webpages";
    const utterance = new SpeechSynthesisUtterance(message);
    window.speechSynthesis.speak(utterance);
  };

  const [pageIndex, setPageIndex] = useState(0);

  useEffect(() => {
    // Only speak welcome message on homepage
    if (location.pathname === '/') {
      speakWelcome();
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === 'b') {
        e.preventDefault();

        // Navigate based on current path
        switch (location.pathname) {
          case '/':
            navigate('/income_and_expenses');
            setPageIndex(1);
            break;
          case '/income_and_expenses':
            navigate('/financial-literacy-quiz');
            setPageIndex(2);
            break;
          case '/financial-literacy-quiz':
            navigate('/');
            setPageIndex(0);
            break;
          default:
            // Handle any other paths
            navigate('/');
            setPageIndex(0);
            break;
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [navigate, location.pathname]);

  return (
    <>
      <Banner />
      <Chatbot />
    </>
  );
};

export default Home;
