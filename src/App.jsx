import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Consultation from "./pages/Consultation";
import MedMap from "./pages/MedMap";
import MedCommunity from "./pages/MedCommunity";
import MediBot from "./pages/MediBot";
import MediVault from "./pages/MediVault";
import FAQ from "./pages/FAQ";
import AboutUs from "./pages/AboutUs";
import Profile from "./pages/Profile";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<><Navbar /><Home /><Footer /></>} />
        <Route path="/consultation" element={<Consultation />} />
        <Route path="/med-map" element={<MedMap />} />
        <Route path="/med-community" element={<MedCommunity />} />
        <Route path="/medibot" element={<MediBot />} />
        <Route path="/medivault" element={<MediVault />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/profile" element={<Profile />} />


      </Routes>
    </Router>
  );
}

export default App;
