"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Carousel = ({ id, title, subtitle, items }) => {
  const [imageIndex, setImageIndex] = useState(0);

  // Function to show previous image
  const showNext = () => {
    setImageIndex(index => {
      if(index === items.length - 1) return 0
      return index + 1
    })
  };

  // Function to show next image
  const showPrev = () => {
    setImageIndex(index => {
      if(index === 0) return items.length - 1
      return index - 1
    })
  };

  // Store carousel images and loop through to get image order
  const displayed = [];
  for (let i = 0; i < items.length; i++) {
    displayed.push(items[(imageIndex + i) % items.length]);
  }

  return (
    // START: Carousel //
    <section id={id} className="container px-2 py-10 md:py-4 md:p-10">
      <div className="relative w-full flex flex-col align-center justify-center">
        <div className="mb-5">
          <h2 className="h2">{title}</h2>
          <p>{subtitle}</p>
        </div>

        <div className="ml-2 gap-2 product-container mb-4 overflow-hidden">
          {displayed.map((item, index) => {
            return (
              <div className="product-card hover:cursor-pointer"  key={`${id}-${index}`}>
                <div className="w-full h-[300px] bg-gray-300 rounded-[12px] overflow-hidden relative">
                  <Image
                    src={item.imgURL}
                    alt={item.brandName}
                    key={imageIndex}
                    index={items[imageIndex]}
                    fill
                    className="absolute slider-img"
                  />
                </div>
                <h3 className="h3 mt-2">{item.brandName}</h3>
                <div className="flex items-center gap-2">
                  <p className="text-xl font-semibold text-green-800">
                    {item.salePrice}
                  </p>
                  <p className="small text-black/80 line-through">
                    {item.originalPrice}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="absolute w-full px-3">
          <div className="flex justify-between">
            <button
              onClick={showPrev}
              className="p-3 bg-white/70 rounded-full hover:bg-white/90 transition-colors shadow-md"
            >
              <FaArrowLeft />
            </button>
            <button
              onClick={showNext}
              className="p-3 bg-white/70 rounded-full hover:bg-white/90 transition-colors shadow-md"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
    // END: Carousel //
  );
};

export default Carousel;
