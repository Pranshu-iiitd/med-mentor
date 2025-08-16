import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/medcommunity.css";

const MedCommunity = () => {
  const communities = [
    { name: "Diabetes Care", members: "15K+" },
    { name: "Cardiac Health", members: "10K+" },
    { name: "Cancer Support", members: "8K+" },
    { name: "Mental Wellness", members: "20K+" },
    { name: "Asthma & Allergy", members: "7K+" },
  ];

  return (
    <>
      <Navbar />
      <section className="medcommunity">
        <h2 className="community-title">Med Community</h2>
        <p className="community-subtitle">
          Connect with people sharing similar health journeys, support each other, and grow stronger together.
        </p>

        {/* Search Bar */}
        <div className="search-box">
          <input type="text" placeholder="Search for a community..." />
          <button className="search-btn">Search</button>
        </div>

        {/* Community Cards */}
        <div className="community-grid">
          {communities.map((c, idx) => (
            <div key={idx} className="community-card">
              <h3>{c.name}</h3>
              <p>{c.members} Members</p>
              <button className="join-btn">Join</button>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default MedCommunity;
