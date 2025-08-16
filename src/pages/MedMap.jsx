import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "../styles/medmap.css";
import "leaflet/dist/leaflet.css";   // ✅ import Leaflet CSS
import "../utils/fixLeafletIcon";   // ✅ fix marker icons

const MedMap = () => {
  return (
    <>
      <Navbar />
      <section className="medmap">
        <h2 className="medmap-title">Live Healthcare Map</h2>
        <p className="medmap-subtitle">
          Explore 31K+ PHCs, 1.1K+ blood banks, and 9.8 lakh pharmacies across India
        </p>

        <div className="map-box">
          <MapContainer
            center={[28.6139, 77.2090]}  // New Delhi
            zoom={5}
            scrollWheelZoom={true}
            style={{ height: "100%", width: "100%" }}  // ✅ make sure map fills container
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="&copy; OpenStreetMap contributors"
            />
            <Marker position={[28.6139, 77.2090]}>
              <Popup>New Delhi - Example Healthcare Facility</Popup>
            </Marker>
          </MapContainer>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default MedMap;
