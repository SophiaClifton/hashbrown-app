import React from 'react';

interface Transaction {
    id: number;
    date: string;
    amount: number;
    category: string;
    payment_method?: string; // Optional
    merchant?: string; // Optional
    source?: string; // Optional
    provider?: string; // Optional
    currency?: string; // Optional
    recurring?: string | null; // Optional
}

interface TransactionHistoryProps {
    transactions: { [key: string]: Transaction[] };
}

const TransactionHistory: React.FC<TransactionHistoryProps> = ({ transactions }) => {
    return (
        <div>
            <h2>Transaction History</h2>
            {Object.entries(transactions).map(([month, monthTransactions]) => (
                <div key={month}>
                    <h3>{month}</h3>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <thead>
                        <tr>
                            <th>Date</th>
                            <th>Amount</th>
                            <th>Category</th>
                            <th>Payment Method</th>
                            <th>Merchant/Source</th>
                            <th>Recurring</th>
                        </tr>
                        </thead>
                        <tbody>
                        {monthTransactions.map((transaction) => (
                            <tr key={transaction.id}>
                                <td>{transaction.date}</td>
                                <td style={{ color: transaction.amount < 0 ? 'red' : 'green' }}>
                                    {transaction.amount < 0 ? '-' : '+'}${Math.abs(transaction.amount).toFixed(2)}
                                </td>
                                <td>{transaction.category}</td>
                                <td>{transaction.payment_method || 'N/A'}</td> {/* Show 'N/A' if payment_method is missing */}
                                <td>{transaction.merchant || transaction.source || transaction.provider || 'N/A'}</td> {/* Show 'N/A' if missing */}
                                <td>{transaction.recurring || 'One-time'}</td> {/* Default to 'One-time' if recurring is missing */}
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            ))}
        </div>
    );
};

export default TransactionHistory;
