import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.logoSection}>
          <img
            src="logo.png" // Replace with your logo URL
            alt="Logo"
            style={styles.logo}
          />
          <p style={styles.text}>© 2025 All Rights Reserved <br />vedant Nighot</p>
        </div>
        <div style={styles.contactSection}>
          <h3 style={styles.heading}>Contact Us</h3>
          <p style={styles.contactInfo}>
            📞 <a href="callto:9975968543" style={styles.link}>+91 9975968543</a>
          </p>
          <p style={styles.contactInfo}>
            📧 <a href="mailto:vedantnighotzzz1@gmail.com" style={styles.link}>vedantnighotzzz1@gmail.com</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    background: "#e0ecfc", // Blue gradient from bottom (light) to top (dark)
    color: "black",
    padding: "40px 20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    fontSize: "14px",
    boxShadow: "0px -2px 10px rgba(0, 0, 0, 0.1)",
  },
  container: {
    width: "100%",
    maxWidth: "1200px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    textAlign: "center", // Centering content for better readability
  },
  logoSection: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "20px",
  },
  logo: {
    width: "150px",
    marginBottom: "15px",
  },
  text: {
    fontSize: "12px",
    marginTop: "5px",
  },
  contactSection: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingLeft: "20px",
    paddingRight: "20px",
  },
  heading: {
    fontSize: "18px",
    marginBottom: "15px",
    fontWeight: "600",
  },
  contactInfo: {
    margin: "10px 0",
    fontSize: "16px",
  },
  link: {
    color: "black", // White link color to stand out against the blue
    textDecoration: "none",
    fontWeight: "500",
    transition: "color 0.3s ease", // Smooth transition for hover effect
  },
  linkHover: {
    color: "#81D4FA", // Light blue on hover
  },
  "@media (max-width: 768px)": {
    container: {
      flexDirection: "column",
      alignItems: "center",
    },
    logoSection: {
      marginBottom: "20px",
    },
    contactSection: {
      padding: "10px",
    },
  },
};

export default Footer;
