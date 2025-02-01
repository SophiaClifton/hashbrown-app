import React from "react";
import "./Sidebar.css";

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      <ul>
        <li><a href="#market-charts">Market Charts</a></li>
        <li><a href="#investments">Investments</a></li>
        <li><a href="#insurances">Insurances</a></li>
        <li><a href="#budget-planner">Budget Planner</a></li>
        <li><a href="#tax-calculator">Tax Calculator</a></li>
        <li><a href="#retirement-planning">Retirement Planning</a></li>
        <li><a href="#crypto-tracker">Crypto Tracker</a></li>
      </ul>
    </div>
  );
};

export default Sidebar;
