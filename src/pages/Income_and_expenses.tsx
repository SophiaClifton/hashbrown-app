import React, { useEffect } from 'react';
import Banner from "../components/Banner";
import Chatbot from "../components/Chatbot";
import Button from "../components/but";
import DoughnutCharts from "../components/DoughnutCharts";
import "./Income_and_expenses.css"

const Income_and_expenses: React.FC = () => {
    useEffect(() => {
        // Create and play the audio message when component mounts
        const message = "Income and Expenses WebPage";
        const utterance = new SpeechSynthesisUtterance(message);
        window.speechSynthesis.speak(utterance);
    }, []); // Empty dependency array means this runs once when component mounts

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
