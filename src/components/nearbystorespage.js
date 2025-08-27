import React, { useState, useEffect } from "react";
import { FaShoppingCart, FaHeadset, FaUserCircle } from "react-icons/fa";
import NearbyStoresIntro from "./nearbystoresintro";
import NearbyStoresSection from "./nearbystoressection";
import "./nearbystorespages.css";

export default function NearbyStoresPage() {
  const [location, setLocation] = useState("Detecting...");
  const [introComplete, setIntroComplete] = useState(false);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation(`Lat: ${latitude.toFixed(2)}, Lng: ${longitude.toFixed(2)}`);
        },
        () => setLocation("Location permission denied")
      );
    } else {
      setLocation("Geolocation not supported");
    }
  }, []);

  const handleFilterClick = () => {
    alert("Filter clicked! Implement your filters here.");
  };

  return (
    <div className="nearby-page-container">
      <header className="nearby-topbar">
        <div className="left-section">
          <img src="/products/brandlogo.png" alt="NearBuy Logo" className="nearby-logo" />
          <button className="filter-btn" onClick={handleFilterClick}>Filter Stores</button>
        </div>

        <div className="right-section">
          <div className="icon-btn" title="Cart"><FaShoppingCart /></div>
          <div className="icon-btn" title="Support"><FaHeadset /></div>
          <div className="icon-btn" title="Account"><FaUserCircle /></div>
        </div>
      </header>

      {!introComplete && (
        <NearbyStoresIntro location={location} onComplete={() => setIntroComplete(true)} />
      )}

      {introComplete && <NearbyStoresSection />}
    </div>
  );
}
