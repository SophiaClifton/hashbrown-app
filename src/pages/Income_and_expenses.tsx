import React, { useEffect, useState } from 'react';
import Banner from "../components/Banner";
import Chatbot from "../components/Chatbot";
import Button from "../components/but";
import DoughnutCharts from "../components/DoughnutCharts";
import Transactions from "../components/Transactions";
import "./Income_and_expenses.css"

interface Transaction {
  id: string;
  type: 'income' | 'expense';
  amount: number;
  category: string;
  date: string;
  description: string;
}

const Income_and_expenses: React.FC = () => {
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    const addTransaction = (newTransaction: Transaction) => {
        // Format to show "Description - Category"
        const formattedTransaction = {
            ...newTransaction,
            // Use the description from input and category from selection
            category: `${newTransaction.description} - ${newTransaction.category}`
        };
        setTransactions(prev => [...prev, formattedTransaction]);
    };

    useEffect(() => {
        // Create and play the audio message when component mounts
        const message = "Income and Expenses WebPage";
        const utterance = new SpeechSynthesisUtterance(message);
        window.speechSynthesis.speak(utterance);
    }, []);

    return (
        <>
            <Banner />
            <div className="main-layout">
                <div className="main-content">
                    <Button onAddTransaction={addTransaction} />
                    <div className="charts-container">
                        <DoughnutCharts transactions={transactions} />
                    </div>
                    <Transactions transactions={transactions} />
                </div>
            </div>
            <Chatbot />
        </>
    );
};

export default Income_and_expenses;
