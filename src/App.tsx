import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Transactions from './pages/Transactions';
import Income_and_expenses from './pages/Income_and_expenses';
import Home from './pages/Home';
import Debts from './pages/Debts';

const App: React.FC = () => {
  return (
    <Router>
  <div>
    {/* Common elements */}
    

    <Routes>
      {/* Home route */}
      <Route index element={<Home />} />

      {/* Transactions page route */}
      <Route path="/transactions" element={<Transactions />} />

      {/* Income and expenses page route */}
      <Route path="/income_and_expenses" element={<Income_and_expenses />} />

      <Route path="/debts" element={<Debts />} />

    </Routes>
  </div>
</Router>

  );
};

export default App;
