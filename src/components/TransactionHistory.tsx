import React from 'react';
import TransactionItem from './TransactionItem';
import "./TransactionHistory.css"
interface Transaction {
    id: number;
    date: string;
    amount: number;
    category: string;
    payment_method?: string;
    merchant?: string;
    source?: string;
    provider?: string;
    currency?: string;
    recurring?: string | null;
}

interface TransactionHistoryProps {
    transactions: { [key: string]: Transaction[] };
}

const TransactionHistory: React.FC<TransactionHistoryProps> = ({ transactions }) => {
    return (
        <div className="transaction-history">
            <h2>Transaction History</h2>
            {Object.entries(transactions).map(([month, monthTransactions]) => (
                <div key={month} className="month-section">
                    <h3>{month}</h3>
                    <table className="transaction-table">

                        <tbody>
                        {monthTransactions.reverse().map((transaction) => (
                            <TransactionItem key={transaction.id} transaction={transaction} />
                        ))}
                        </tbody>
                    </table>
                </div>
            ))}
        </div>
    );
};

export default TransactionHistory;
