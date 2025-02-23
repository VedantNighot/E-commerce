import React from "react";

const testimonials = [
  {
    name: "Penny Albritoon",
    rating: 4,
    feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    image: "https://emilly-store1.myshopify.com/cdn/shop/files/bakery-testi-1.jpg?v=1721992196&width=512",
  },
  {
    name: "Oscar Nommanee",
    rating: 5,
    feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    image: "https://emilly-store1.myshopify.com/cdn/shop/files/bakery-testi-5.jpg?v=1721992196&width=512",
  },
  {
    name: "Emma Watsom",
    rating: 4,
    feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    image: "https://emilly-store1.myshopify.com/cdn/shop/files/bakery-testi-6.jpg?v=1721992197&width=512",
  },
];

const TestimonialCard = ({ name, rating, feedback, image }) => (
  <div style={styles.card}>
    <div style={styles.imageWrapper}>
      <img src={image} alt={name} style={styles.image} />
    </div>
    <h3 style={styles.name}>{name}</h3>
    <div style={styles.rating}>
      {"★".repeat(rating)}
      {"☆".repeat(5 - rating)}
    </div>
    <p style={styles.feedback}>{feedback}</p>
  </div>
);

const Testimonials = () => (
  <div style={styles.container}>
    <h2 style={styles.title}>Our Customers Love Us</h2>
    <div style={styles.grid}>
      {testimonials.map((testimonial, index) => (
        <TestimonialCard key={index} {...testimonial} />
      ))}
    </div>
  </div>
);

const styles = {
  container: {
    textAlign: "center",
    padding: "40px 20px",
    // background: "linear-gradient(135deg, #f9f9f9, #e3f2fd)",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center", // Center all content vertically
  },
  title: {
    fontSize: "2rem",
    marginBottom: "20px",
    color: "#333",
    fontWeight: "bold",
  },
  grid: {
    display: "flex",
    justifyContent: "center",
    alignItems: "stretch", // Stretch cards to the same height
    gap: "20px",
    flexWrap: "wrap", // Allows wrapping on smaller screens
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: "15px",
    padding: "20px",
    width: "280px",
    textAlign: "center",
    boxShadow: "0 6px 12px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between", // Space out content
    height: "360px", // Reduced height for a balanced design
  },
  imageWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "15px",
  },
  image: {
    borderRadius: "50%",
    width: "100px",
    height: "100px",
    objectFit: "cover",
    border: "3px solid #ddd",
  },
  name: {
    fontSize: "1.2rem",
    fontWeight: "bold",
    marginBottom: "10px",
    color: "#444",
  },
  rating: {
    color: "#fbc02d",
    fontSize: "1.2rem",
    margin: "10px 0",
  },
  feedback: {
    fontSize: "0.9rem",
    fontWeight: "500",
    color: "#555",
    lineHeight: "1.5",
  },
  "@media (max-width: 768px)": {
    grid: {
      flexDirection: "column", // Stack cards vertically on smaller screens
    },
    card: {
      width: "90%", // Full width on smaller screens
    },
  },
};

export default Testimonials;
