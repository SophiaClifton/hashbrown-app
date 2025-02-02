import React from 'react';
import Banner from "../components/Banner";
import Sidebar from "../components/Sidebar";
import Chatbot from "../components/Chatbot";
import TransactionHistory from "../components/TransactionHistory";
import userData from "../dummy_assets/user1.json"; // Import user data

const Transactions: React.FC = () => {
    return (
        <div>
            <Banner />
            <div className="transactions-container">
                
                <Sidebar />
                <div className="content">
                    <TransactionHistory transactions={userData.transactions} /> {/* Pass only transactions */}
                    <Chatbot />
                </div>
            </div>
        </div>
    );
};

export default Transactions;
