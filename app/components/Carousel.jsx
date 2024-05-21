"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Carousel = ({ id, title, subtitle, items }) => {
  const [imageIndex, setImageIndex] = useState(0);

  const showPrev = () => {
    setImageIndex(index => {
      if(index === items.length - 1) return 0
      return index + 1
    })
  };

  const showNext = () => {
    setImageIndex(index => {
      if(index === 0) return items.length - 1
      return index - 1
    })
  };

  const displayed = [];
  for (let i = 0; i < items.length; i++) {
    displayed.push(items[(imageIndex + i) % items.length]);
  }

  return (
    // START: Carousel //
    <section id={id} className="container p-5 md:p-10">
      <div className="relative w-full flex flex-col align-center justify-center">
        <div className="mb-5">
          <h2 className="h2">{title}</h2>
          <p>{subtitle}</p>
        </div>

        <div className="product-container mb-4 overflow-hidden">
          {displayed.map((item, index) => {
            return (
              <div className="product-card"  key={`${id}-${index}`}>
                <div className="w-full h-[300px] bg-white rounded-[12px] overflow-hidden relative">
                  <Image
                    src={item.imgURL}
                    alt={item.brandName}
                    key={imageIndex}
                    index={items[imageIndex]}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="absolute slider-img"
                  />
                </div>
                <h3 className="h3 mt-2">{item.brandName}</h3>
                <div className="flex items-center gap-2">
                  <p className="text-xl font-medium text-green-800">
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
        <div className="absolute w-full px-2">
          <div className="flex justify-between">
            <button
              onClick={showPrev}
              className="p-3 bg-white/70 rounded-full hover:bg-white/90 transition-colors"
            >
              <FaArrowLeft />
            </button>
            <button
              onClick={showNext}
              className="p-3 bg-white/70 rounded-full hover:bg-white/90 transition-colors"
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
