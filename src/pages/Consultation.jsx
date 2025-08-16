import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/consultation.css";

const Consultation = () => {
  return (
    <>
      <Navbar />
      <section className="consultation">
        <div className="consult-card">
          <h2>Book Your Free Consultation</h2>
          <p>Get your first consultation free per year at any facility</p>
          <form>
            <input type="text" placeholder="Enter your full name" />
            <input type="email" placeholder="Enter your email" />
            <input type="text" placeholder="Enter your phone number" />
            <select>
              <option>Select your state</option>
              <option>Delhi</option>
              <option>Mumbai</option>
              <option>Bangalore</option>
            </select>
            <button className="consult-btn" type="submit">
              Book Consultation
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Consultation;
