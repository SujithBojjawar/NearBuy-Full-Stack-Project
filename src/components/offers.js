import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./offers.css";

const products = [
  {
    id: 1,
    name: "Sony Wireless Headphones",
    image: "/products/headphone.jpeg",
    price: 6999,
    discountPrice: 3599,
    offer: "50% OFF",
  },
  {
    id: 2,
    name: "Oneplus Smart Watch",
    image: "/products/oneplussmartwatch.jpg",
    price: 24000,
    discountPrice: 15000,
    offer: "40% OFF",
  },
  {
    id: 3,
    name: "Nike Sneakers",
    image: "/products/Nike shoes.jpg",
    price: 3599,
    discountPrice: 2299,
    offer: "28% OFF",
  },
  {
    id: 4,
    name: "Iphone 16 pro max",
    image: "/products/iphone.jpeg",
    price: 130000,
    discountPrice: 110000,
    offer: "15% OFF",
  },
  {
    id: 5,
    name: "SkyBags Backpack",
    image: "/products/bag.jpeg",
    price: 5000,
    discountPrice: 2500,
    offer: "50% OFF",
  },
  {
    id: 6,
    name: " PHILIPS Coffee Maker",
    image: "/products/coffeemaker.jpeg",
    price: 12000,
    discountPrice: 8999,
    offer: "24% OFF",
  },
  {
    id: 7,
    name: "BOAT Bluetooth Speaker",
    image: "/products/boat speakers.jpeg",
    price: 3500,
    discountPrice: 2200,
    offer: "18% OFF",
  },
  {
    id: 8,
    name: " TITAN Sunglasses",
    image: "/products/sunglasses.jpeg",
    price: 5000,
    discountPrice: 2500,
    offer: "50% OFF",
  },
  {
    id: 9,
    name: "HP VICTUS Gaming Laptop",
    image: "/products/hp gaming laptop.jpeg",
    price: 99999,
    discountPrice: 80000,
    offer: "33% OFF",
  },
  {
    id: 10,
    name: "Sofa",
    image: "/products/sofa.jpeg",
    price: 24999,
    discountPrice: 19999,
    offer: "25% OFF",
  },
  {
    id: 11,
    name: "GYM Equipment",
    image: "/products/gym eqipment.jpeg",
    price: 30000,
    discountPrice: 25000,
    offer: "22% OFF",
  },
  {
    id: 12,
    name: " Canon Digital Camera",
    image: "/products/camera.jpeg",
    price: 75000,
    discountPrice: 62500,
    offer: "17% OFF",
  },
  {
    id: 13,
    name: "Lg tv",
    image: "/products/lg tv.jpeg",
    price: 60000,
    discountPrice: 55000,
    offer: "9% OFF",
  },
  {
    id: 14,
    name: "Lg Refregerator",
    image: "/products/fridge.jpeg",
    price: 45000,
    discountPrice: 30000,
    offer: "22% OFF",
  },
  {
    id: 15,
    name: " Oneplus Noise Cancelling Earbuds",
    image: "/products/earbuds.jpeg",
    price: 5000,
    discountPrice: 3500,
    offer: "20% OFF",
  },
  {
    id: 16,
    name: "LG Ac",
    image: "/products/a.jpeg",
    price: 35000,
    discountPrice: 28000,
    offer: "23% OFF",
  },
];

export default function OffersSection() {
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
      {
        breakpoint: 900,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="offers-section" aria-label="Special Offers">
      <h2 className="section-title">Hot Deals & Offers Reserve Now At NearBy Stores</h2>
      <Slider {...settings}>
        {products.map(({ id, name, image, price, discountPrice, offer }) => (
          <div key={id} className="offer-card">
            <img src={image} alt={name} className="offer-image" />
            <div className="offer-info">
              <h3>{name}</h3>
              <div className="prices">
                <span className="discount-price">₹{discountPrice}</span>
                <span className="original-price">₹{price}</span>
              </div>
              <div className="offer-badge">{offer}</div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}
