import React from 'react';
import Banner from "../components/Banner";  
import Sidebar from "../components/Sidebar"; 
import Chatbot from "../components/Chatbot";
import ExpandingDebtRectangleList from '../components/ExpandingDebtRectangleList';
import "./Debts.css"
import SimpleAreaGraph from '../components/SimpleAreaGraph';
import DebtChart from '../components/DebtChart';

const Debts: React.FC = () => {
  const items = [
    { label: "Mortgage", content: <DebtChart/> },
    { label: "Car Loan", content: <SimpleAreaGraph/> }
    ];
  return (
    <div className="debts-container">
      <Banner />
      <div className="content">
        <Sidebar />
        <ExpandingDebtRectangleList items={items} />
        <Chatbot />
      </div>
    </div>
  );
};

export default Debts;