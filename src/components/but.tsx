import React, { useState } from 'react';
import axios from 'axios';

interface Transaction {
  id: string;
  type: 'income' | 'expense';
  amount: number;
  category: string;
  date: string;
  description: string;
}

interface ButtonProps {
  onAddTransaction: (transaction: Transaction) => void;
}

const RequestButton: React.FC<ButtonProps> = ({ onAddTransaction }) => {
    const [response, setResponse] = useState<string | null>(null);
    const [inputValue, setInputValue] = useState<string>('');
    const [type, setType] = useState<string>('expense');
    const [category, setCategory] = useState<string>('personal');
    const [amount, setAmount] = useState<number | string>('');
    const [formVisible, setFormVisible] = useState<boolean>(false);

    // Move styles inside component to access formVisible state
    const containerStyle: React.CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        padding: '20px 0',
        backgroundColor: 'white',
        borderRadius: '12px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
        marginBottom: '20px',
    };

    const buttonStyle: React.CSSProperties = {
        fontSize: '24px',
        padding: '8px 16px',
        backgroundColor: '#4CAF50',
        color: 'white',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
        marginBottom: formVisible ? '15px' : '0',
        transition: 'all 0.2s ease',
    };

    const formStyle: React.CSSProperties = {
        display: 'flex',
        gap: '10px',
        width: '100%',
        maxWidth: '800px',
        padding: '15px',
        backgroundColor: '#f8f9fa',
        borderRadius: '8px',
    };

    const inputStyle: React.CSSProperties = {
        padding: '8px 12px',
        border: '1px solid #e2e8f0',
        borderRadius: '6px',
        flex: 1,
    };

    const handleButtonClick = async () => {
        const newTransaction: Transaction = {
            id: Date.now().toString(),
            type: type as 'income' | 'expense',
            amount: Number(amount),
            category: category,
            date: new Date().toISOString(),
            description: inputValue,
        };

        try {
            await sending(inputValue, type, category, amount);
            onAddTransaction(newTransaction);
            resetForm();
            setFormVisible(false);
        } catch (error) {
            console.error('Error making request:', error);
        }
    };

    const sending = async (value: string, type: string, category: string, amount: number | string) => {
        try {
            const res = await axios.post('http://localhost:5000/api/data', { 
                name: value, 
                type: type, 
                category: category, 
                amount: amount 
            });
            setResponse(JSON.stringify(res.data));
        } catch (error) {
            console.error('Error making request:', error);
        }
    };

    const resetForm = () => {
        setInputValue('');
        setType('expense');
        setCategory('personal');
        setAmount('');
    };

    return (
        <div style={containerStyle}>
            <button onClick={() => setFormVisible(!formVisible)} style={buttonStyle}>
                {formVisible ? '−' : '+'}
            </button>

            {formVisible && (
                <div style={formStyle}>
                    <input
                        style={inputStyle}
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder="Description"
                    />
                    <select
                        style={inputStyle}
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                    >
                        <option value="expense">Expense</option>
                        <option value="income">Income</option>
                    </select>
                    <select
                        style={inputStyle}
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        <option value="personal">Personal</option>
                        <option value="investment">Investment</option>
                        <option value="living">Living</option>
                        <option value="miscellaneous">Miscellaneous</option>
                    </select>
                    <input
                        style={inputStyle}
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder="Amount"
                    />
                    <button 
                        onClick={handleButtonClick}
                        style={{
                            ...buttonStyle,
                            marginBottom: 0,
                            fontSize: '16px',
                            padding: '8px 16px',
                        }}
                    >
                        Add
                    </button>
                </div>
            )}
        </div>
    );
};

export default RequestButton;
