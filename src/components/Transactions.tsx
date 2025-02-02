import React from "react";
import "./Transactions.css";

const Transactions: React.FC = () => {
  return (
    <div className="transactions-container">
      <div className="income">
        <h2>Income</h2>
        {/* Add income transactions here */}
      </div>
      <div className="expenses">
        <h2>Expenses</h2>
        {/* Add expense transactions here */}
      </div>
    </div>
  );
};

export default Transactions;
