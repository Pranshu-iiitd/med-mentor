import React from "react";
import "../styles/Features.css";

const features = [
  { title: "First-Free Booking", desc: "1 free consultation/year per facility; prevents 15–20% misuse." },
  { title: "Live Map Coverage", desc: "31K+ PHCs, 1.1K+ blood banks, 9.8 lakh pharmacies." },
  { title: "Queue & Wait-Time View", desc: "Cuts idle time by 25–40%." },
  { title: "Admin Verification", desc: "2-step KYC reduces fake listings by >95%." },
  { title: "Community Groups", desc: "Boost chronic care adherence by 15%." },
  { title: "Insurance Hub", desc: "Claim process up to 50% faster." },
  { title: "AI Chatbot", desc: "Handles ~60% of first queries without human help." },
  { title: "MediVault", desc: "Secure cloud storage for consultations." }
];

const Features = () => {
  return (
    <section className="features">
      <h2 className="features-title">Our Features</h2>
      <div className="features-grid">
        {features.map((f, i) => (
          <div key={i} className="feature-card">
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
