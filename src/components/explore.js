import React from "react";
import "./explore.css";

const ExploreMoreCard = ({ onClick }) => {
  return (
    <div
      className="explore-more-card"
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyPress={(e) => { if (e.key === "Enter") onClick(); }}
      aria-label="Explore more food and dining options"
    >
      <div className="explore-card-icon">🍽️</div>
      <div className="explore-card-text">Explore More</div>
    </div>
  );
};

export default ExploreMoreCard;
