import React, { useEffect, useState } from 'react';
import Banner from "../components/Banner";
import Chatbot from "../components/Chatbot";
import Button from "../components/but";
import { DoughnutCharts } from "../components/DoughnutCharts";
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
        // Keep the original category instead of overwriting it with description
        const formattedTransaction = {
            ...newTransaction
        };
        setTransactions(prev => [...prev, formattedTransaction]);
    };

    const deleteTransaction = (id: string) => {
        setTransactions(prev => prev.filter(transaction => transaction.id !== id));
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
                    <Transactions 
                        transactions={transactions} 
                        onDelete={deleteTransaction} 
                    />
                </div>
            </div>
            <Chatbot />
        </>
    );
};

export default Income_and_expenses;
