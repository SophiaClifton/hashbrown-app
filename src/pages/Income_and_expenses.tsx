import React from 'react';
import Banner from "../components/Banner";
import Sidebar from "../components/Sidebar";
import Chatbot from "../components/Chatbot";
import Button from "../components/sub";
import DoughnutCharts from "../components/DoughnutCharts"; // Import the DoughnutCharts component
import "./Income_and_expenses.css"
const Income_and_expenses: React.FC = () => {
    return (
        <>
            <Banner />
            <Button />
            <div className="main-layout">
                <Sidebar />
                <div className="main-content">
                    <DoughnutCharts />
                </div>
            </div>
            <Chatbot />
        </>
    );
};

export default Income_and_expenses;
