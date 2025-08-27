import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './homepage.css';
import { FaShoppingCart, FaHeadset, FaUserCircle, FaMapMarkerAlt } from "react-icons/fa";
import BrandSlider from "./brands.js";
import OffersSection from "./offers.js";
import NearbyStoresSection from "./nearbystores.js";
import TestimonialsSection from "./testimonial.js";
import ExploreMoreModal from "./exploremore.js";

const categories = [
  { name: "Phones", icon: "📱" },
  { name: "Electronics", icon: "💻" },
  { name: "Books", icon: "📚" },
  { name: "Clothing & Shoes", icon: "👟" },
  { name: "Vehicles", icon: "🚗" },
  { name: "Home Appliances", icon: "🏠" },
  { name: "Home Decors", icon: "🛋️" },
];

function HomePage() {
  const [location, setLocation] = useState("Detecting...");
  const [showExploreModal, setShowExploreModal] = useState(false);
  const navigate = useNavigate();

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

  const handleOffersCardClick = () => {
    const offersSection = document.querySelector(".offers-section");
    if (offersSection) {
      offersSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleExploreMoreClick = () => setShowExploreModal(true);
  const handleCloseModal = () => setShowExploreModal(false);

  const handleExploreChoice = (choice) => {
    setShowExploreModal(false);
    if (choice === "stores") {
      navigate("/nearby-stores");  
    } else if (choice === "products") {
      navigate("/products");       
    }
  };

  return (
    <div className="homepage-bg">
      <header className="homepage-header">
        <div className="brand">
          <img src="/products/brandlogo.png" alt="NearBuy Logo" className="brand-logo" />
        </div>
        <form
          className="search-form"
          onSubmit={(e) => e.preventDefault()}
        >
          <input type="text" placeholder="Search for products, stores..." />
          <button type="submit">Search</button>
        </form>
        <div className="header-icons-with-location">
          <div className="header-icons">
            <div className="icon-btn" title="Cart">
              <FaShoppingCart />
            </div>
            <div className="icon-btn" title="Support">
              <FaHeadset />
            </div>
            <div className="icon-btn" title="Profile">
              <FaUserCircle />
            </div>
          </div>
          <div className="user-location" title="Your Location">
            <FaMapMarkerAlt className="location-icon" />
            <span className="location-text">{location}</span>
          </div>
        </div>
      </header>

      <div className="categories-label">Popular Categories</div>
      <div className="categories-list">
        {categories.map((cat) => (
          <div
            key={cat.name}
            className="category-card"
            tabIndex={0}
            aria-label={cat.name}
          >
            <span className="cat-icon">{cat.icon}</span>
            <span>{cat.name}</span>
          </div>
        ))}
      </div>

      <section
        className="background-image-section"
        aria-label="Scenic retail lifestyle image"
      >
        <img
          src="/img1.jpg"
          alt="Scenic retail lifestyle"
          className="background-image"
        />
        <div className="image-overlay-text">
          <h2>Experience shopping like never before</h2>
          <p>Discover stores nearby and get the best offers.</p>
        </div>
      </section>

      <div className="action-buttons-container">
        <button
          className="hot-offers-btn"
          onClick={handleOffersCardClick}
          aria-label="View Hot Offers"
        >
          🔥 Hot Offers
        </button>

        <button
          className="explore-more-btn"
          onClick={handleExploreMoreClick}
          aria-label="Explore More Items"
        >
          🧐 Explore More
        </button>
      </div>

      <BrandSlider />
      <OffersSection />
      <NearbyStoresSection />
      <TestimonialsSection />

      <ExploreMoreModal
        open={showExploreModal}
        onClose={handleCloseModal}
        onExplore={handleExploreChoice}
      />
    </div>
  );
}

export default HomePage;
