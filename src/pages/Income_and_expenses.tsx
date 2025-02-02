import React from 'react';
import Banner from "../components/Banner";
import Chatbot from "../components/Chatbot";
import Button from "../components/but";
import DoughnutCharts from "../components/DoughnutCharts";
import Transactions from "../components/Transactions";
import "./Income_and_expenses.css"

const Income_and_expenses: React.FC = () => {
    return (
        <>
            <Banner />
            <div className="main-layout">
                <div className="main-content">
                    <DoughnutCharts />
                    <Button />
                    <Transactions />
                </div>
            </div>
            <Chatbot />
        </>
    );
};

export default Income_and_expenses;
