import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/profile.css";

const Profile = () => {
  return (
    <>
      <Navbar />
      <section className="profile">
        <div className="profile-card">
          <img
            src="https://via.placeholder.com/150"
            alt="Admin Avatar"
            className="profile-avatar"
          />
          <h2 className="profile-name">Admin: Med Mentor</h2>
          <p className="profile-role">System Administrator</p>

          <div className="profile-details">
            <p><strong>Email:</strong> admin@medmentor.com</p>
            <p><strong>Contact:</strong> +91-9876543210</p>
            <p><strong>Location:</strong> New Delhi, India</p>
            <p><strong>Access:</strong> Full Control (Consultations, Reports, Communities, MediVault)</p>
          </div>

          <div className="profile-actions">
            <button className="profile-btn-action">Edit Profile</button>
            <button className="profile-btn-action logout">Logout</button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Profile;
