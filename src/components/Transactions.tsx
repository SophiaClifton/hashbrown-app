import React from "react";
import "./Transactions.css";

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
}

const Transactions: React.FC<TransactionsProps> = ({ transactions }) => {
  const incomeTransactions = transactions.filter(t => t.type === 'income');
  const expenseTransactions = transactions.filter(t => t.type === 'expense');

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
          {incomeTransactions.map(transaction => (
            <div key={transaction.id} className="transaction-item">
              <div className="transaction-details">
                <span className="transaction-name">{transaction.category}</span>
                <span className="transaction-type">({transaction.type})</span>
              </div>
              <span className="transaction-amount">
                {formatAmount(transaction.amount)}
              </span>
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
          {expenseTransactions.map(transaction => (
            <div key={transaction.id} className="transaction-item">
              <div className="transaction-details">
                <span className="transaction-name">{transaction.category}</span>
                <span className="transaction-type">({transaction.type})</span>
              </div>
              <span className="transaction-amount">
                {formatAmount(transaction.amount)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Transactions;
