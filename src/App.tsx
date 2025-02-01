import React from 'react';
import logo from './logo.svg';
import './App.css';
import Banner from "./components/Banner";
import Sidebar from "./components/Sidebar";
import Chatbot from "./components/Chatbot";

const App: React.FC = () => {
  return (
    <div>
      <Banner/>
      <Sidebar/>
      <Chatbot/>
    </div>
  );
};

export default App;
