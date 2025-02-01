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
            <li className="sub"><Link to="/income_and_expenses">Income_and_expenses</Link></li>
            
            <li className="sub"><Link to="/transactions">Transactions</Link></li> {/* Closing Link tag added */}
            <li className="sub"><Link to="/debts">Debts</Link> </li>
            <li className="sub"><a href="#debts">Debts</a></li>
            <li className="sub"><a href="#cash-flow">Forecasted Cash Flow</a></li>
          </ul>
        </li>
        <li><a href="#investments">Personalized Recommendations</a>
        <ul>
            <li className="sub"><a href="#income-expenses">Savings and Investments</a></li>
            <li className="sub"><a href="#spending-optimizations">Spending Optimizations</a></li>
          </ul>
        </li>
        <li><a href="#insurances">Understanding Financial Products</a>
        <ul>
            <li className="sub"><a href="#product-comparison">Product Comparison</a></li>
            <li className="sub"><a href="#investment-products">Investment Products</a></li>
            <li className="sub"><a href="#financial-products">Financial-Products</a></li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
