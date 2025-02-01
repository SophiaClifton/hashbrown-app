import React, { useState } from 'react';

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

interface TransactionItemProps {
    transaction: Transaction;
}

const TransactionItem: React.FC<TransactionItemProps> = ({ transaction }) => {
    const [isExpanded, setIsExpanded] = useState(false); // State for expanding/collapsing

    const toggleExpanded = () => {
        setIsExpanded((prev) => !prev); // Toggle the state
    };

    return (
        <div
            style={{
                backgroundColor: transaction.amount < 0 ? '#ffddd0' : '#ddffd0',
                padding: '15px',
                margin: '10px 0',
                borderRadius: '10px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                color: transaction.amount < 0 ? 'red' : 'green',
                fontFamily: 'Arial, sans-serif',
                cursor: 'pointer',
                transition: 'all 1s ease-in-out', // Smooth transition for the whole card
                width: 1000,
            }}
            onClick={toggleExpanded} // Toggle expansion on click
        >
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                <div style={{ fontSize: '16px', fontWeight: 'bold' }}>{transaction.date}</div>
                <div style={{ fontSize: '16px' }}>
                    {transaction.amount < 0 ? '-' : '+'}${Math.abs(transaction.amount).toFixed(2)}
                </div>
            </div>

            {/* Show basic info by default */}
            <div style={{ marginBottom: '10px', fontSize: '14px' }}>
                {transaction.category}
            </div>

            {/* Expandable content container */}
            <div
                style={{
                    overflow: 'hidden', // Hide the content initially
                    maxHeight: isExpanded ? '500px' : '0', // Change maxHeight to animate the expansion
                    transition: 'max-height 0.3s ease-in-out', // Animate the max-height
                }}
            >
                {/* Show more details if expanded */}
                <div style={{ marginTop: '10px' }}>
                    <div style={{ fontSize: '14px' }}>
                        <strong>Payment Method:</strong> {transaction.payment_method || 'N/A'}
                    </div>
                    <div style={{ fontSize: '14px' }}>
                        <strong>Merchant/Source:</strong> {transaction.merchant || transaction.source || transaction.provider || 'N/A'}
                    </div>
                    <div style={{ fontSize: '14px' }}>
                        <strong>Recurring:</strong> {transaction.recurring || 'One-time'}
                    </div>
                    <div style={{ fontSize: '14px' }}>
                        <strong>Currency:</strong> {transaction.currency || 'N/A'}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TransactionItem;
