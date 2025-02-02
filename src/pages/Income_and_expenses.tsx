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
}

const Income_and_expenses: React.FC = () => {
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    const addTransaction = (newTransaction: Transaction) => {
        setTransactions(prev => [...prev, newTransaction]);
    };

    useEffect(() => {
        // Create and play the audio message when component mounts
        const message = "Income and Expenses WebPage";
        const utterance = new SpeechSynthesisUtterance(message);
        window.speechSynthesis.speak(utterance);
    }, []); // Empty dependency array means this runs once when component mounts

    return (
        <>
            <Banner />
            <div className="main-layout">
                <div className="main-content">
                    <div className="charts-container">
                        <DoughnutCharts />
                    </div>
                    <Button onAddTransaction={addTransaction} />
                    <Transactions transactions={transactions} />
                </div>
            </div>
            <Chatbot />
        </>
    );
};

export default Income_and_expenses;
