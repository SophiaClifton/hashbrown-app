import React, { useState } from 'react';
import axios from 'axios';

interface Transaction {
  id: string;
  type: 'income' | 'expense';
  amount: number;
  category: string;
  date: string;
}

interface ButtonProps {
  onAddTransaction: (transaction: Transaction) => void;
}

const RequestButton: React.FC<ButtonProps> = ({ onAddTransaction }) => {
    const [response, setResponse] = useState<string | null>(null);
    const [inputValue, setInputValue] = useState<string>(''); // State for user input
    const [type, setType] = useState<string>('expense'); // State for dropdown selection of type
    const [category, setCategory] = useState<string>('personal'); // State for dropdown selection of category
    const [amount, setAmount] = useState<number | string>(''); // State for amount input, can be number or empty string
    const [formVisible, setFormVisible] = useState<boolean>(false); // State for toggling form visibility

    const handleButtonClick = async () => {
        // Create a new transaction object
        const newTransaction: Transaction = {
            id: Date.now().toString(), // Simple way to generate unique IDs
            type: type as 'income' | 'expense',
            amount: Number(amount),
            category: category,
            date: new Date().toISOString(),
        };

        try {
            await sending(inputValue, type, category, amount);
            onAddTransaction(newTransaction); // Call the callback with the new transaction
            resetForm(); // Clear form fields
            setFormVisible(false); // Close the form after submission
        } catch (error) {
            console.error('Error making request:', error);
        }
    };

    const sending = async (value: string, type: string, category: string, amount: number | string) => {
        try {
            const res = await axios.post('http://localhost:5000/api/data', { name: value, type: type, category: category, amount: amount });
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
            {/* Plus button to toggle the form visibility */}
            <button onClick={() => setFormVisible(!formVisible)} style={buttonStyle}>
                {formVisible ? 'Close' : '+'}
            </button>

            {/* Conditionally render the form fields when formVisible is true */}
            {formVisible && (
                <div style={formStyle}>
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)} // Update inputValue as the user types
                        placeholder="Enter description"
                    />
                    <select
                        value={type}
                        onChange={(e) => setType(e.target.value)} // Update type as the user selects an option
                    >
                        <option value="expense">Expense</option>
                        <option value="income">Income</option>
                    </select>
                    <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)} // Update category as the user selects an option
                    >
                        <option value="personal">Personal</option>
                        <option value="investment">Investment</option>
                        <option value="living">Living</option>
                        <option value="miscellaneous">Miscellaneous</option>
                    </select>
                    <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)} // Update amount as the user inputs a number
                        placeholder="Enter amount"
                    />
                    <button onClick={handleButtonClick}>Add</button>
                </div>
            )}
        </div>
    );
};

// Styles for the button, form, and container
const buttonStyle: React.CSSProperties = {
    fontSize: '30px',
    padding: '10px 20px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '50px',
    cursor: 'pointer',
    marginBottom: '10px', // Add some space below the button
};

const formStyle: React.CSSProperties = {
    marginTop: '10px',
    padding: '10px',
    backgroundColor: '#f1f1f1',
    borderRadius: '5px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
};

const containerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column', // Stack elements vertically
    alignItems: 'center', // Center horizontally
    justifyContent: 'flex-start', // Align to the top of the container
    height: '100vh', // Full viewport height
    paddingTop: '10px', // Add padding at the top for spacing
};

export default RequestButton;
