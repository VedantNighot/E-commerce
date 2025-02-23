"use client";

import { Button } from "@heroui/react";
import Link from "next/link";
import Image from "next/image"; // Use Image for local images
import Slider from "react-slick";

export default function Collections() {
  const collections = [
    {
      id: 1,
      title: "Summer Collection",
      subTitle: "Brighten your wardrobe with our summer styles.",
      imageURL: "/images/collection1.png", // Local image
    },
    {
      id: 2,
      title: "Camera's",
      subTitle: "Stay warm and stylish this winter.",
      imageURL: "/images/collection2.png", // Local image
    },
    {
      id: 3,
      title: "Autumn Trends",
      subTitle: "Embrace the colors of fall with our latest trends.",
      imageURL: "/images/collection3.png", // Local image
    },
  ];

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  if (collections.length === 0) {
    return <></>;
  }

  return (
    <div className="overflow-hidden md:p-10 p-5">
      <Slider {...settings}>
        {collections.map((collection) => (
          <div key={collection.id} className="px-2">
            <div className="flex gap-4 bg-gradient-to-tr from-blue-100 to-blue-300 p-5 rounded-xl h-full items-center">
              <div className="flex flex-col gap-3 flex-1">
                <h1 className="md:text-xl text-lg font-semibold">
                  {collection.title}
                </h1>
                <p className="text-gray-700 text-sm md:text-base max-w-md line-clamp-2">
                  {collection.subTitle}
                </p>
                <Link href={`/collections/${collection.id}`}>
                  <Button className="bg-blue-500 text-white text-xs md:text-sm px-4 py-2 rounded-lg">
                    SHOP NOW
                  </Button>
                </Link>
              </div>
              <div className="flex-shrink-0">
                <Image
                  src={collection.imageURL}
                  alt={collection.title}
                  width={150} // Adjusted for rounded scaling
                  height={150}
                  className="rounded-full object-cover shadow-lg"
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
