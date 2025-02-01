import React from 'react';
import Banner from "../components/Banner";
import Sidebar from "../components/Sidebar";
import Chatbot from "../components/Chatbot";
import DoughnutCharts from "../components/DoughnutCharts"; // Import the DoughnutCharts component

const Income_and_expenses: React.FC = () => {
    return (
        <>
            <Banner />
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