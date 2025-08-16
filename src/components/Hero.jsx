import React from "react";
import "../styles/Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-left">
        <h2 className="hero-title">Wellness for a Brighter Tomorrow</h2>
        <p className="hero-subtitle">
          Assess, Consult, and Connect with the Best Healthcare Providers.
        </p>
        <Link to="/medibot">
          <button className="hero-btn">Chat with our MediBot</button>
        </Link>
        {/* Stats */}
        <div className="hero-stats">
          <div>
            <h3>24/7</h3>
            <p>Available</p>
          </div>
          <div>
            <h3>1000+</h3>
            <p>Doctors</p>
          </div>
          <div>
            <h3>50k+</h3>
            <p>Patients</p>
          </div>
        </div>
      </div>

      {/* Consultation Box */}
      <div className="consult-box">
        <h3>Book Your First Free Session</h3>
        <p>Diagnosed by India’s Best Doctors</p>
        <input type="text" placeholder="Enter your full name" />
        <input type="text" placeholder="Enter mobile number" />
        <input type="email" placeholder="Enter your email" />
        <select>
          <option>Select your state</option>
          <option>Delhi</option>
          <option>Mumbai</option>
          <option>Bangalore</option>
        </select>
        <button className="consult-btn">Book Free Consultation</button>
      </div>
    </section>
  );
};

export default Hero;
