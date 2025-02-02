import React from "react";
import "./Transactions.css";
import { COLORS } from "./DoughnutCharts"; // Import the colors

interface Transaction {
  id: string;
  type: 'income' | 'expense';
  amount: number;
  category: string;
  date: string;
  description: string;
}

interface TransactionsProps {
  transactions: Transaction[];
  onDelete: (id: string) => void;
}

const Transactions: React.FC<TransactionsProps> = ({ transactions, onDelete }) => {
  const incomeTransactions = transactions.filter(t => t.type === 'income');
  const expenseTransactions = transactions.filter(t => t.type === 'expense');

  // Create a map of categories to colors
  const categoryColorMap: { [key: string]: string } = {};
  let colorIndex = 0;
  
  // First pass to assign colors consistently
  transactions.forEach(transaction => {
    if (!categoryColorMap[transaction.category]) {
      categoryColorMap[transaction.category] = COLORS[colorIndex % COLORS.length];
      colorIndex++;
    }
  });

  const formatAmount = (amount: number) => {
    return new Intl.NumberFormat('en-CA', {
      style: 'currency',
      currency: 'CAD'
    }).format(amount);
  };

  return (
    <div className="transactions-container">
      <div className="income">
        <div className="transaction-header">
          <h2>Income</h2>
          <span>💰</span>
        </div>
        <div className="transaction-list">
          {incomeTransactions.map((transaction) => (
            <div 
              key={transaction.id} 
              className="transaction-item"
              style={{ borderLeft: `4px solid ${categoryColorMap[transaction.category]}` }}
            >
              <div className="transaction-details">
                <span className="transaction-name">{transaction.description}</span>
              </div>
              <div className="transaction-right">
                <span className="transaction-amount">
                  {formatAmount(transaction.amount)}
                </span>
                <button 
                  className="delete-button"
                  onClick={() => onDelete(transaction.id)}
                  aria-label="Delete transaction"
                >
                  ×
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="expenses">
        <div className="transaction-header">
          <h2>Expenses</h2>
          <span>💸</span>
        </div>
        <div className="transaction-list">
          {expenseTransactions.map((transaction) => (
            <div 
              key={transaction.id} 
              className="transaction-item"
              style={{ borderLeft: `4px solid ${categoryColorMap[transaction.category]}` }}
            >
              <div className="transaction-details">
                <span className="transaction-name">{transaction.description}</span>
              </div>
              <div className="transaction-right">
                <span className="transaction-amount">
                  {formatAmount(transaction.amount)}
                </span>
                <button 
                  className="delete-button"
                  onClick={() => onDelete(transaction.id)}
                  aria-label="Delete transaction"
                >
                  ×
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Transactions;
