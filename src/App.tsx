import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Transactions from './pages/Transactions';
import Home from './pages/Home';

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
    </Routes>
  </div>
</Router>

  );
};

export default App;
