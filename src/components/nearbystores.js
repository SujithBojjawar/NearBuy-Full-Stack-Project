import React from "react";
import Slider from "react-slick";
import "./nearbystores.css";

function renderStars(rating) {
  const fullStars = Math.floor(rating);
  const halfStar = rating - fullStars >= 0.5;
  const stars = [];

  for (let i = 0; i < fullStars; i++) {
    stars.push(<span key={"full" + i} className="star">&#9733;</span>);
  }
  if (halfStar) {
    stars.push(<span key="half" className="star">&#9734;</span>);
  }
  while (stars.length < 5) {
    stars.push(<span key={"empty" + stars.length} className="star empty">&#9734;</span>);
  }
  return stars;
}

const nearbyStores = [
  {
    id: 1,
    category: "Electronics & Gadgets",
    name: "Croma – Hyderabad KPHB (Vasavi Signature, 5th Phase)",
    distance: "2 km",
    description: "Large electronics outlet (TVs, laptops, mobiles, appliances).",
    rating: 3.6,
    reviews: 100,
    image: "/store-images/croma1.jpg",
  },
  {
    id: 2,
    category: "Electronics & Gadgets",
    name: "Reliance Digital – Vijay Sai Towers, Kukatpally",
    distance: "3 km",
    description: "Electronics & home appliances.",
    rating: 4.3,
    reviews: 4300,
    image: "/store-images/reliance.jpg",
  },
  {
    id: 3,
    category: "Electronics & Gadgets",
    name: "Croma – Shanti Nagar, Kukatpally",
    distance: "3–4 km",
    description: "Retail + repair center for electronics & gadgets.",
    rating: 4.1,
    reviews: 3900,
    image: "/store-images/croma2.jpg",
  },
  {
    id: 4,
    category: "Electronics & Gadgets",
    name: "Bajaj Electronics – Kukatpally Phase I",
    distance: "3–4 km",
    description: "Electronics, home entertainment, gadgets.",
    rating: 3.1,
    reviews: 10,
    image: "/store-images/bajaj.jpg",
  },
  {
    id: 5,
    category: "Footwear & Sports",
    name: "Puma Store – Nexus Mall, KPHB Phase 6",
    distance: "1–2 km",
    description: "Official Puma outlet (sports shoes, casual footwear).",
    rating: 4.3,
    reviews: 750,
    image: "/store-images/puma.jpg",
  },
  {
    id: 6,
    category: "Footwear & Sports",
    name: "Nike Store – Forum Sujana Mall, KPHB Phase 6",
    distance: "1–2 km",
    description: "Official Nike store (running shoes, sneakers, performance wear).",
    rating: 4.7,
    reviews: 20,
    image: "/store-images/nike.jpg",
  },
  {
    id: 7,
    category: "Books & Lifestyle",
    name: "Crossword Bookstore – Forum Sujana Mall",
    distance: "2 km",
    description: "One of India’s biggest bookstore chains (fiction, non-fiction, stationery).",
    rating: 4.4,
    reviews: 500,
    image: "/store-images/crossword.jpg",
  },
  {
    id: 8,
    category: "Books & Lifestyle",
    name: "Sapna Book House – Kukatpally",
    distance: "4–5 km",
    description: "Huge bookstore (academic, novels, competitive exams, kids).",
    rating: 4.3,
    reviews: 700,
    image: "/store-images/sapna.jpg",
  },
  {
    id: 9,
    category: "Malls",
    name: "Sarath City Capital Mall – Kondapur",
    distance: "6–7 km",
    description: "Hyderabad’s biggest mall; Reliance Digital, Croma, Footwear, Sapna Book House outlets.",
    rating: 4.5,
    reviews: 20000,
    image: "/store-images/sarathcity.jpg",
  },
  {
    id: 10,
    category: "Malls",
    name: "Inorbit Mall – Madhapur/Cyberabad",
    distance: "8–9 km",
    description: "Premium mall housing electronics, footwear, bookstores, lifestyle.",
    rating: 4.6,
    reviews: 50000,
    image: "/store-images/inorbit.jpg",
  },
];

const NearbyStoresSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    cssEase: "ease-in-out",
    responsive: [
      { breakpoint: 960, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="nearby-stores-section" aria-label="Nearby Popular Stores">
      <h2 className="section-title">Nearby Popular Stores</h2>
      <Slider {...settings}>
        {nearbyStores.map(
          ({ id, name, category, distance, description, rating, reviews, image }) => (
            <article key={id} className="store-card" tabIndex={0}>
              <img src={image} alt={name} className="store-image" loading="lazy" />
              <div className="store-info">
                <div className="store-category">{category}</div>
                <h3 className="store-name">{name}</h3>
                <div className="store-distance">Distance: {distance}</div>
                <p className="store-description">{description}</p>
                <div className="store-rating">
                  {renderStars(rating)} <span className="reviews">({reviews}+ reviews)</span>
                </div>
              </div>
            </article>
          )
        )}
      </Slider>
    </section>
  );
};

export default NearbyStoresSection;
