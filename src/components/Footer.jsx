// src/components/Footer.jsx
import React from "react";
import "../styles/Footer.css";   // make sure this path is correct

const Footer = () => {
  return (
    <footer className="footer">
      <p>Made by : <b>Anupriya</b> and <b>Pranshu</b></p>
      <p>
        For support mail :{" "}
        <a href="mailto:medmentor@gmail.com">medmentor@gmail.com</a>
      </p>
    </footer>
  );
};

export default Footer;
