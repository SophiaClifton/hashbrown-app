import React from 'react';
import Banner from "../components/Banner";  
import Sidebar from "../components/Sidebar"; 
import Chatbot from "../components/Chatbot";

const Transactions: React.FC = () => {
  return (
    <>
      <Banner />
      <Sidebar />
      <Chatbot />
    </>
  );
};

export default Transactions;
