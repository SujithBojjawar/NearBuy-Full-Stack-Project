import React from "react";
import "./testimonial.css";

const testimonials = [
  {
    id: 1,
    name: "Anita Sharma",
    role: "Satisfied Customer",
    message: "Fantastic platform! Found exactly what I needed nearby, with great offers.",
    avatar: "/products/generated-image.png",
  },
  {
    id: 2,
    name: "Ravi Kumar",
    role: "Regular Shopper",
    message: "Easy to use and discover new stores. Support is very responsive.",
    avatar: "/products/generated-image (2).png",
  },
  {
    id: 3,
    name: "Sneha Patel",
    role: "Happy User",
    message: "I love how intuitive the website is. The deals save me a lot!",
    avatar: "/products/generated-image (1).png",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="testimonials-section" aria-label="Customer Testimonials and Contact">
      <h2 className="section-title">What Our Users Say</h2>
      <div className="testimonials-container">
        {testimonials.map(({ id, name, role, message, avatar }) => (
          <article className="testimonial-card" key={id}>
            <img src={avatar} alt={`${name} avatar`} className="testimonial-avatar" />
            <p className="testimonial-message">"{message}"</p>
            <p className="testimonial-name">{name}</p>
            <p className="testimonial-role">{role}</p>
          </article>
        ))}
      </div>
      <div className="contact-support">
        <h3>Need Help? Contact Our Support</h3>
        <p>Email us anytime at <a href="mailto:support@nearbuy.com">support@nearbuy.com</a></p>
        <button
          className="contact-button"
          onClick={() => window.location.href = "mailto:support@nearbuy.com"}
          aria-label="Contact Support via Email"
        >
          Contact Support
        </button>
      </div>
    </section>
  );
};

export default TestimonialsSection;
