import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/medibot.css";

const MediBot = () => {
  return (
    <>
      <Navbar />
      <section className="medibot">
        <h2 className="medibot-title">MediBot - Your AI Health Assistant</h2>
        <p className="medibot-subtitle">
          Get instant answers to your health queries, available 24/7.
        </p>

        <div className="medibot-box">
          <iframe
            src="https://www.chatbase.co/chatbot-iframe/QsfYw0DPFWymCEmVZR5A1"
            width="100%"
            style={{ height: "100%", minHeight: "600px" }}
            frameBorder="0"
            title="MediBot Chat"
          ></iframe>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default MediBot;
