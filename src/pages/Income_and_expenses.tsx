import React from 'react';
import Banner from "../components/Banner";  
import Sidebar from "../components/Sidebar"; 
import Chatbot from "../components/Chatbot";

const Income_and_expenses: React.FC = () => {
  return (
    <>
      <Banner />
      <Sidebar />
      <Chatbot />
    </>
  );
};

export default Income_and_expenses;