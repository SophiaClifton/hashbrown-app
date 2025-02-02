import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar: React.FC = () => {
  // State to manage the visibility of the "Managing Finances" subsections
  const [isManagingFinancesOpen, setManagingFinancesOpen] = useState(false);

  const toggleManagingFinances = () => {
    setManagingFinancesOpen(!isManagingFinancesOpen);
  };

  return (
    <div className="sidebar">
      <ul>
        <li>
          <a href="#managing-finances">Managing Finances</a>
          <ul>
            <li className="sub"><Link to="/Income_and_expenses">Income and Expenses</Link></li>
          </ul>
        </li>
        <li className="sub">
          <Link to="/financial-literacy-quiz">Financial Literacy Quiz</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
