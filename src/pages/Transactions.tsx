import React from 'react';
import Banner from "../components/Banner";
import Sidebar from "../components/Sidebar";
import Chatbot from "../components/Chatbot";
import TransactionHistory from "../components/TransactionHistory";
import userData from "../dummy_assets/user1.json"; // Import user data

const Transactions: React.FC = () => {
    return (
        <>
            <Banner />
            <Sidebar />
            <Chatbot />
            <TransactionHistory transactions={userData.transactions} /> {/* Pass only transactions */}
        </>
    );
};

export default Transactions;
