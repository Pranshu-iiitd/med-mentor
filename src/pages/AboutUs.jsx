import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/aboutus.css";

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <section className="aboutus">
        <h2 className="aboutus-title">About Us</h2>
        <p className="aboutus-subtitle">
          Your trusted companion in healthcare innovation
        </p>

        <div className="aboutus-container">
          <div className="aboutus-card">
            <h3>🌱 Our Mission</h3>
            <p>
              At <b>Med Mentor</b>, we aim to make healthcare accessible,
              reliable, and personalized for everyone. From booking
              consultations to accessing medical reports, our platform provides
              a seamless experience.
            </p>
          </div>

          <div className="aboutus-card">
            <h3>💡 What We Offer</h3>
            <ul>
              <li>✔️ Online Consultations with trusted doctors</li>
              <li>✔️ Med Map to find nearby healthcare facilities</li>
              <li>✔️ Communities for patients to connect & share</li>
              <li>✔️ MediBot – AI-powered healthcare assistant</li>
              <li>✔️ MediVault – Secure storage for reports</li>
            </ul>
          </div>

          <div className="aboutus-card">
            <h3>👩‍💻 Our Team</h3>
            <p>
              <b>Anupriya</b> – Lead UI/UX Developer and AI Specialist, currently pursuing a B.Tech degree. 
              She has been responsible for designing an intuitive interface and integrating advanced AI features 
              to enhance user experience.
            </p>
            <p>
              <b>Pranshu</b> – AI Analyst and B.Tech student, focusing on the development and analysis of 
              artificial intelligence models to support decision-making and improve healthcare solutions within the platform.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AboutUs;
