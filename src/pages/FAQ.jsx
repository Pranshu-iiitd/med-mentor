import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/faq.css";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is Med Mentor?",
      answer:
        "Med Mentor is your one-stop healthcare companion that provides consultations, health mapping, medical communities, AI support through MediBot, and a secure MediVault for your reports."
    },
    {
      question: "How can I book a consultation?",
      answer:
        "Go to the Consultation page, fill in your details, and choose your preferred doctor and specialty. You’ll get confirmation instantly."
    },
    {
      question: "What is Med Map?",
      answer:
        "Med Map helps you find nearby healthcare facilities, pharmacies, PHCs, and blood banks across India in real-time."
    },
    {
      question: "Is my data safe in MediVault?",
      answer:
        "Yes! MediVault uses encrypted storage to ensure your consultations and medical reports are secure and accessible only by you."
    },
    {
      question: "Is MediBot a replacement for doctors?",
      answer:
        "No. MediBot is an AI assistant to answer basic queries and guide you, but it does not replace professional medical advice."
    },
  ];

  return (
    <>
      <Navbar />
      <section className="faq">
        <h2 className="faq-title">Frequently Asked Questions</h2>
        <p className="faq-subtitle">Find answers to the most common queries</p>

        <div className="faq-container">
          {faqs.map((item, index) => (
            <div
              className={`faq-item ${activeIndex === index ? "active" : ""}`}
              key={index}
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="faq-question">{item.question}</h3>
              {activeIndex === index && (
                <p className="faq-answer">{item.answer}</p>
              )}
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default FAQ;
