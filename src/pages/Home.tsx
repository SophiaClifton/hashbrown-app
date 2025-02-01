import React from "react";
import Banner from "../components/Banner";  // Adjusted path
import Sidebar from "../components/Sidebar"; // Adjusted path
import Chatbot from "../components/Chatbot"; // Adjusted path

const Home: React.FC = () => {
  return (
    <>
      <Banner />
      <Sidebar />
      <Chatbot />
    </>
  );
};

export default Home;
