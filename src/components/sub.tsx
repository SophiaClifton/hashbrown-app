// App.tsx
import React, { useState } from 'react';
import './sub.css';

interface Transaction {
    name: string;
    category: string;
    type: string;
    recurrence: string;
    amount: number;
}

const Button: React.FC = () => {
    const [formVisible, setFormVisible] = useState<boolean>(false);
    const [transaction, setTransaction] = useState<Transaction>({
        name: '',
        category: 'personal',
        type: 'income',
        recurrence: 'daily',
        amount: 0,
    });

    const toggleForm = () => {
        setFormVisible(!formVisible);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setTransaction({
            ...transaction,
            [name]: value,
        });
    };

    const handleAddTransaction = async () => {
        if (
            transaction.name &&
            transaction.category &&
            transaction.type &&
            transaction.recurrence &&
            transaction.amount > 0
        ) {
            console.log("json format: ", JSON.stringify(transaction));
            const response = await fetch('/save-budget', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(transaction),
            });

            const result = await response.json();
            if (result.message === 'Transaction added successfully!') {
                alert('Transaction added successfully!');
                setTransaction({
                    name: '',
                    category: 'personal',
                    type: 'income',
                    recurrence: 'daily',
                    amount: 0,
                });
                toggleForm();
            } else {
                alert('Failed to add transaction');
            }
        } else {
            alert('Please fill in all fields correctly');
        }
    };

    return (
        <div className="Button">
            <button className="plus-btn" onClick={toggleForm}>+</button>
            {formVisible && (
                <div className="form-container">
                    <form id="transactionForm">
                        <label>Name:</label>
                        <input
                            type="text"
                            name="name"
                            value={transaction.name}
                            onChange={handleInputChange}
                        />
                        <label>Category:</label>
                        <select
                            name="category"
                            value={transaction.category}
                            onChange={handleInputChange}
                        >
                            <option value="personal">Personal</option>
                            <option value="living">Living</option>
                            <option value="miscellaneous">Miscellaneous</option>
                            <option value="investments">Investments</option>
                        </select>
                        <label>Type:</label>
                        <select
                            name="type"
                            value={transaction.type}
                            onChange={handleInputChange}
                        >
                            <option value="income">Income</option>
                            <option value="expense">Expense</option>
                        </select>
                        <label>Recurrence:</label>
                        <select
                            name="recurrence"
                            value={transaction.recurrence}
                            onChange={handleInputChange}
                        >
                            <option value="daily">Daily</option>
                            <option value="weekly">Weekly</option>
                            <option value="bi-weekly">Bi-Weekly</option>
                            <option value="monthly">Monthly</option>
                        </select>
                        <label>Amount:</label>
                        <input
                            type="number"
                            name="amount"
                            value={transaction.amount}
                            onChange={handleInputChange}
                        />
                        <button type="button" className="add-btn" onClick={handleAddTransaction}>
                            Add
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default Button;
