"use client";

import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";

export default function ShopPage() {
  const categories = [
    { id: 1, name: "Camera", imageURL: "/images/collection2.png" },
    { id: 2, name: "Laptop", imageURL: "/images/collection3.png" },
    { id: 3, name: "Mobile", imageURL: "/images/mobile.png" },
    { id: 4, name: "Clothes", imageURL: "/images/cloths.png" },
    { id: 5, name: "Mouse", imageURL: "/images/mouse.webp" },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 4, slidesToScroll: 1 },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 3, slidesToScroll: 1 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
    ],
  };

  return (
    <div className="container mx-auto p-5 flex justify-center items-center flex-col">
      {/* Categories Section */}
      <div className="mb-10 text-center w-full">
        <h1 className="text-2xl font-semibold mb-5">Shop By Category</h1>
        <Slider {...sliderSettings} className="w-full">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/categories/${category.id}`}
              className="flex flex-col items-center justify-center w-full px-2"
            >
              <div className="rounded-full p-3 border-2 border-gray-200 overflow-hidden w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 flex items-center justify-center mx-auto">
                <Image
                  src={category.imageURL}
                  alt={category.name}
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
              <p className="mt-2 text-sm font-medium">{category.name}</p>
            </Link>
          ))}
        </Slider>
      </div>
    </div>
  );
}
