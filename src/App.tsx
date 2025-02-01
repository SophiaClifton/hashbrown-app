import React from 'react';
import logo from './logo.svg';
import './App.css';
import Banner from "./components/Banner";
import Sidebar from "./components/Sidebar";

const App: React.FC = () => {
  return (
    <div>
      <Banner/>
      <Sidebar/>
    </div>
  );
};

export default App;
