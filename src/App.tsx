import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Income_and_expenses from './pages/Income_and_expenses';
import Home from './pages/Home';
import FinancialLiteracyQuiz from './pages/FinancialLiteracyQuiz';
import DarkModeToggle from './components/DarkModeToggle';
import { useKeyboardNavigation } from './hooks/useKeyboardNavigation';

// Create a wrapper component that uses the hooks
const AppContent: React.FC = () => {
  useKeyboardNavigation(); // Move the navigation logic to the custom hook

  return (
    <div>
      <DarkModeToggle />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/income_and_expenses" element={<Income_and_expenses />} />
        <Route path="/financial-literacy-quiz" element={<FinancialLiteracyQuiz />} />
      </Routes>
    </div>
  );
};

// Main App component that provides the Router context
const App: React.FC = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
