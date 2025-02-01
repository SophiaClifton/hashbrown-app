import React from 'react';
import Banner from "../components/Banner";  
import Sidebar from "../components/Sidebar"; 
import Chatbot from "../components/Chatbot";
import ExpandingDebtRectangleList from '../components/ExpandingDebtRectangleList';
import "./Debts.css"

const Debts: React.FC = () => {
  const items: string[] = ["Rectangle 1", "Rectangle 2", "Rectangle 3"];
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