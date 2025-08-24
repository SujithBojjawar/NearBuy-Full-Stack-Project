import React from "react";
import Slider from "react-slick";
import "./brands.css";

const brands = [
  { name: "iPhone", logo: "/brand-logos/apple.png" },
  { name: "OnePlus", logo: "/brand-logos/oneplus.png" },
  { name: "Samsung", logo: "/brand-logos/samsung.png" },
  { name: "LG", logo: "/brand-logos/lg.png" },
  { name: "Philips", logo: "/brand-logos/philips.png" },
  { name: "HP", logo: "/brand-logos/hp.png" },
  { name: "Lenovo", logo: "/brand-logos/lenovo.png" },
  { name: "BMW", logo: "/brand-logos/bmw.png" },
  { name: "Honda", logo: "/brand-logos/honda.png" },
  { name: "Nike", logo: "/brand-logos/nike.png" },
  { name: "Puma", logo: "/brand-logos/puma.png" },
  { name: "One8", logo: "/brand-logos/one8.png" },
];

const BrandSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 900,
    autoplaySpeed: 2200,
    cssEase: "ease-in-out",
    arrows: false,
    pauseOnHover: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 600, settings: { slidesToShow: 3 } },
      { breakpoint: 400, settings: { slidesToShow: 2 } },
    ],
  };

  return (
    <section className="brands-section" aria-label="Featured Brands">
      <h2 className="brands-title">Featured Brands</h2>
      <Slider {...settings}>
        {brands.map((brand) => (
          <div className="brand-logo-slide" key={brand.name}>
            <img
              src={brand.logo}
              alt={brand.name}
              className="brand-logo-img"
              title={brand.name}
            />
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default BrandSlider;
