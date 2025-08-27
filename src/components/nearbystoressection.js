import React from "react";
import { motion } from "framer-motion";
import "./nearbystoressection.css";

const stores = [
  { name: "Corner Electronics", address: "12 MG Road", image: "/store1.png", tags: ["Electronics"], rating: 4.7, distance: "1.2 km" },
  { name: "Book Nest", address: "45 Palace Street", image: "/store2.png", tags: ["Books"], rating: 4.6, distance: "900 m" },
  { name: "Sneaker World", address: "8 Market Lane", image: "/store3.png", tags: ["Shoes"], rating: 4.8, distance: "1.8 km" },
  { name: "Kitchen Craft", address: "32 City Square", image: "/store4.png", tags: ["Home"], rating: 4.4, distance: "2.5 km" },
  { name: "Gadget Hub", address: "58 Tech Park", image: "/store5.png", tags: ["Electronics"], rating: 4.3, distance: "700 m" },
  { name: "Fashion Point", address: "77 Style Blvd", image: "/store6.png", tags: ["Clothing"], rating: 4.2, distance: "850 m" },
  { name: "The Book Vault", address: "19 Reading St", image: "/store7.png", tags: ["Books"], rating: 4.5, distance: "1.3 km" },
  { name: "Sports Central", address: "5 Athletic Ave", image: "/store8.png", tags: ["Sports Gear"], rating: 4.1, distance: "2 km" },
  { name: "Toy Galaxy", address: "43 Kids Plaza", image: "/store9.png", tags: ["Toys"], rating: 4.7, distance: "1.9 km" },
  { name: "Pet's Paradise", address: "27 Animal Rd", image: "/store10.png", tags: ["Pets"], rating: 4.6, distance: "1 km" },
  { name: "Tech Alley", address: "101 Circuit St", image: "/store11.png", tags: ["Electronics"], rating: 4.3, distance: "1.1 km" },
  { name: "Beauty Spot", address: "88 Glam Lane", image: "/store12.png", tags: ["Cosmetics"], rating: 4.4, distance: "950 m" },
  { name: "Furniture Flair", address: "21 Comfort Dr", image: "/store13.png", tags: ["Home"], rating: 4.2, distance: "2.2 km" },
  { name: "Auto Care", address: "66 Motorway", image: "/store14.png", tags: ["Vehicles"], rating: 4.1, distance: "1.6 km" },
  { name: "Green Thumb", address: "11 Garden Rd", image: "/store15.png", tags: ["Gardening"], rating: 4.0, distance: "1.4 km" },
  { name: "Music House", address: "3 Tune St", image: "/store16.png", tags: ["Music"], rating: 4.8, distance: "1.7 km" },
  { name: "Kids Cove", address: "55 Play Blvd", image: "/store17.png", tags: ["Kids"], rating: 4.5, distance: "1.2 km" },
  { name: "Gourmet Delights", address: "72 Foodie Ln", image: "/store18.png", tags: ["Food"], rating: 4.3, distance: "900 m" },
  { name: "Office Essentials", address: "36 Work Ave", image: "/store19.png", tags: ["Office"], rating: 4.2, distance: "1.8 km" },
  { name: "Travel Stop", address: "90 Journey Ct", image: "/store20.png", tags: ["Travel"], rating: 4.4, distance: "2.1 km" },
];

export default function NearbyStoresSection() {
  return (
    <section className="stores-grid-section">
      <h2 className="oscar-title"> Discover Nearby Stores </h2>
      <div className="stores-grid">
        {stores.map((store, idx) => (
          <motion.div
            className="store-card"
            key={idx}
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 + idx * 0.05, type: "spring", stiffness: 280 }}
            whileHover={{
              scale: 1.04,
              boxShadow: "0 10px 35px #2b3dff33",
              borderColor: "#3673fd",
              zIndex: 2,
            }}
            whileTap={{ scale: 0.98 }}
          >
            <img src={store.image} alt={store.name} className="store-img" />
            <div className="store-details">
              <h3>{store.name}</h3>
              <span className="store-rating">⭐ {store.rating}</span>
              <p>{store.address}</p>
              <p className="store-distance">Distance: {store.distance}</p>
              <div className="store-tags">
                {store.tags.map(tag => (
                  <span key={tag} className="store-tag">{tag}</span>
                ))}
              </div>
              <button className="store-btn">🛒 Explore Store</button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
