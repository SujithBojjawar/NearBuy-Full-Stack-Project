import React, { useState, useEffect } from "react";
import NearbyStoresIntro from "./nearbystoresintro";  
import NearbyStoresSection from "./nearbystoressection"; 
import "./intro.css";

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

  return (
    <>
      {!introComplete && (
        <NearbyStoresIntro location={location} onComplete={() => setIntroComplete(true)} />
      )}
      {introComplete && <NearbyStoresSection />}
    </>
  );
}
