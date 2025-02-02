import React from 'react';
import Banner from "../components/Banner";
import Chatbot from "../components/Chatbot";
import Button from "../components/sub";
import DoughnutCharts from "../components/DoughnutCharts";
import "./Income_and_expenses.css"
import { useKeyboardNavigation } from '../hooks/useKeyboardNavigation';

const Income_and_expenses: React.FC = () => {
    useKeyboardNavigation();
    
    return (
        <>
            <Banner />
            <Button />
            <div className="main-layout">
                <div className="main-content">
                    <DoughnutCharts />
                </div>
            </div>
            <Chatbot />
        </>
    );
};

export default Income_and_expenses;
