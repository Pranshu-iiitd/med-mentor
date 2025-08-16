import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/medivault.css";

const MediVault = () => {
  return (
    <>
      <Navbar />
      <section className="medivault">
        <h2 className="medivault-title">MediVault</h2>
        <p className="medivault-subtitle">
          Secure cloud storage for your consultations and medical reports
        </p>

        {/* Past Consultations */}
        <div className="vault-section">
          <h3>Past Consultations</h3>
          <ul className="consultation-list">
            <li>
              <strong>Dr. Sharma (Cardiologist)</strong> – 12 Feb 2025 <br />
              <span className="notes">Follow-up after ECG, prescribed medication.</span>
            </li>
            <li>
              <strong>Dr. Iyer (Dermatologist)</strong> – 02 Jan 2025 <br />
              <span className="notes">Skin allergy treatment consultation.</span>
            </li>
            <li>
              <strong>Dr. Kapoor (Orthopedic)</strong> – 15 Dec 2024 <br />
              <span className="notes">X-ray checkup for knee pain.</span>
            </li>
          </ul>
        </div>

        {/* Medical Reports */}
        <div className="vault-section">
          <h3>Medical Reports</h3>
          <div className="reports-grid">
            <div className="report-card">
              <h4>MRI Reports</h4>
              <p>View and download past MRI scans securely.</p>
              <button className="vault-btn">Access</button>
            </div>
            <div className="report-card">
              <h4>Ultrasound Reports</h4>
              <p>Stored ultrasound scans and diagnostic notes.</p>
              <button className="vault-btn">Access</button>
            </div>
            <div className="report-card">
              <h4>Blood Reports</h4>
              <p>Check past blood tests & lab results.</p>
              <button className="vault-btn">Access</button>
            </div>
            <div className="report-card">
              <h4>Other Documents</h4>
              <p>Prescriptions, discharge summaries, and more.</p>
              <button className="vault-btn">Access</button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default MediVault;
