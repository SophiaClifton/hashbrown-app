import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Income_and_expenses from './pages/Income_and_expenses';
import Home from './pages/Home';
import FinancialLiteracyQuiz from './pages/FinancialLiteracyQuiz';
import DarkModeToggle from './components/DarkModeToggle';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <DarkModeToggle />
        {/* Common elements */}
        

        <Routes>
          {/* Home route */}
          <Route index element={<Home />} />

          {/* Transactions page route */}

          {/* Income and expenses page route */}
          <Route path="/income_and_expenses" element={<Income_and_expenses />} />

          <Route path="/financial-literacy-quiz" element={<FinancialLiteracyQuiz />} />

        </Routes>
      </div>
    </Router>
  );
};

export default App;
