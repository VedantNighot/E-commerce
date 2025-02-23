"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Heart, ScanLine, ShoppingCart } from "lucide-react";
import { Button } from "@heroui/react";

export default function FeaturedProductSlider() {
  // Array of media files (videos and images) with titles and descriptions
  const mediaFiles = [
    { 
      type: "video", 
      src: "https://www.apple.com/105/media/us/iphone/family/2024/cf19f185-dd7e-4350-97ff-e44860713b54/anim/welcome/xlarge_2x.mp4",
      title: "iPhone 16pro",
      description: "Experience the future of mobile technology with the iPhone 16pro."
    },
    { 
      type: "image", 
      src: "https://dlcdnwebimgs.asus.com/files/media/956032e5-b79c-447e-8238-e869f8d965a7/v1/images/large/1x/kv.webp",
      title: "Apple Watch Series 10",
      description: "Stay connected with the new Apple Watch Series 10."
    },
    { 
      type: "video", 
      src: "https://www.apple.com/105/media/us/iphone/family/2024/cf19f185-dd7e-4350-97ff-e44860713b54/anim/welcome/xlarge_2x.mp4",
      title: "ROG Laptop",
      description: "Redefining the smartphone experience with advanced features."
    },
    { 
      type: "image", 
      src: "https://www.apple.com/v/mac-mini/x/images/overview/welcome/hero_endframe__d9kro8y76v42_large.jpg",
      title: "AirPods 4",
      description: "Unmatched sound quality with the new AirPods 4."
    },
    { 
      type: "video", 
      src: "https://www.apple.com/105/media/ww/watch/2024/f0b51c31-e8a5-44d7-b23d-51bd2858454a/anim/hero/xlarge_2x.mp4",
      title: "Apple Watch Series 10",
      description: "Stylish, sleek, and powerful. The new Apple Watch Series 10."
    },
  ];

  const NextArrow = ({ onClick }) => (
    <div
      className="absolute top-1/2 right-5 transform -translate-y-1/2 z-10 flex items-center justify-center bg-transparent border border-white rounded-full w-10 h-10 cursor-pointer hover:bg-white hover:text-gray-900 transition-all"
      onClick={onClick}
    >
      <FaChevronRight size={20} color="white" />
    </div>
  );

  const PrevArrow = ({ onClick }) => (
    <div
      className="absolute top-1/2 left-5 transform -translate-y-1/2 z-10 flex items-center justify-center bg-transparent border border-white rounded-full w-10 h-10 cursor-pointer hover:bg-white hover:text-gray-900 transition-all"
      onClick={onClick}
    >
      <FaChevronLeft size={20} color="white" />
    </div>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    customPaging: (i) => (
      <div
        style={{
          width: "12px",
          height: "12px",
          borderRadius: "50%",
        }}
      ></div>
    ),
  };

  return (
    <div className="w-full overflow-hidden relative">
      <Slider {...settings}>
        {mediaFiles.map((media, index) => (
          <div
            key={index}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950 to-transparent"></div>
            {media.type === "video" ? (
              <video
                className="w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] object-cover rounded-2xl shadow-lg border-2 border-gray-300"
                autoPlay
                muted
                loop
                src={media.src}
              ></video>
            ) : (
              <img
                className="w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] object-cover rounded-2xl shadow-lg border-2 border-gray-300"
                src={media.src}
                alt="Slider Content"
              />
            )}

              <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-6">

                <Button className="bg-transparent border border-blue-500 text-blue-500 font-semibold hover:bg-green-500 hover:text-white transition-all" > 
                  <ShoppingCart size={20} /> Add to Cart
                </Button>
                <Button className="bg-transparent border border-green-500 text-green-500 font-semibold hover:bg-green-500 hover:text-white transition-all">
                  <ScanLine size={20} /> Buy Now
                </Button>
                <Button isIconOnly className="bg-transparent border rounded-full border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white transition-all">
                  <Heart size={20} />
                </Button>
              </div>
            {/* Overlay for title and description */}
              <div className="absolute bottom-16 sm:bottom-20 md:bottom-24 left-1/2 transform -translate-x-1/2 text-center text-white px-6">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold shadow-lg">{media.title}</h2>
              <p className="mt-2 sm:mt-3 text-lg sm:text-xl md:text-2xl font-light">{media.description}</p>

              {/* Buttons */}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
