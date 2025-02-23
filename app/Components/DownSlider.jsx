"use client"
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// List of logos (you can replace these URLs with actual images)
const logos = [
  { name: "SkyNet", image: "https://firebasestorage.googleapis.com/v0/b/docs-reader-store.appspot.com/o/brands%2FOy0BJr7cGX1Dh2iLzejw?alt=media&token=47e98970-6e57-43e9-9153-536500f6eaf1" },
  { name: "Logitech", image: "https://firebasestorage.googleapis.com/v0/b/docs-reader-store.appspot.com/o/brands%2FhXha19F1o0cbAwqqNPef?alt=media&token=8bdf3f90-de65-478c-8b85-bec8505fb991" },
  { name: "Philips", image: "https://firebasestorage.googleapis.com/v0/b/docs-reader-store.appspot.com/o/brands%2FrEYU0YMIwMC7pCY4krQB?alt=media&token=ef4e2491-bc0d-4d0f-a9f3-74aed62009f1" },
  { name: "Apple", image: "https://firebasestorage.googleapis.com/v0/b/docs-reader-store.appspot.com/o/brands%2FsmasIPXXWP3cLiODPGlX?alt=media&token=f660b0b2-0475-4f73-9f69-47a7e89c75f6" },
  { name: "Samsung", image: "https://firebasestorage.googleapis.com/v0/b/docs-reader-store.appspot.com/o/brands%2Ftr2AEU6VosVIvl73BE9t?alt=media&token=0cd47351-9034-4335-9239-19f286603d8e" },
];

const SimpleSlider = () => {
  const settings = {
    dots: true, // Enable navigation dots
    infinite: true, // Infinite scrolling
    speed: 500, // Slide transition speed
    slidesToShow: 3, // Number of slides to show
    slidesToScroll: 1, // Number of slides to scroll
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // Autoplay interval
    responsive: [
      {
        breakpoint: 768, // For tablets
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480, // For mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div style={{ width: "80%", margin: "0 auto", padding: "40px 0" }}>
      <Slider {...settings}>
        {logos.map((logo, index) => (
          <div key={index} style={{ textAlign: "center" }}>
            <img
              src={logo.image}
              alt={logo.name}
              style={{ width: "150px", height: "auto", margin: "0 auto" }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SimpleSlider;
