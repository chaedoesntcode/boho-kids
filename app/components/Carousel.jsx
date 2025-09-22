"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Carousel = ({ id, title, subtitle, items }) => {
  const containerRef = useRef(null);

  const scrollByAmount = (amount) => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: amount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id={id} className="container px-2 py-10 md:py-8 md:p-10">
      <div className="relative">
        {/* Header */}
        <div className="mb-5">
          <h2 className="h2 font-primary">{title}</h2>
          <p className="text-xl">{subtitle}</p>
        </div>

        {/* Product row */}
        <div
          ref={containerRef}
          className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar"
        >
          {items.map((item, idx) => (
            <div
              key={`${id}-${idx}`}
              className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 snap-start"
            >
              <div className="w-full h-[300px] bg-gray-300 rounded-[12px] overflow-hidden relative">
                <Image
                  src={item.imgURL}
                  alt={item.brandName}
                  fill
                  className="absolute object-cover"
                />
              </div>
              <h3 className="h3 font-semibold mt-2">{item.brandName}</h3>
              <div className="flex items-center gap-2">
                <p className="text-xl font-semibold text-green-800">
                  {item.salePrice}
                </p>
                <p className="small text-black/80 line-through">
                  {item.originalPrice}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Arrows */}
        <div className="absolute inset-y-0 left-0 flex items-center px-2">
          <button
            onClick={() => scrollByAmount(-300)}
            className="p-3 bg-white/70 rounded-full hover:bg-white/90 transition-colors shadow-md"
          >
            <FaArrowLeft />
          </button>
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center px-2">
          <button
            onClick={() => scrollByAmount(300)}
            className="p-3 bg-white/70 rounded-full hover:bg-white/90 transition-colors shadow-md"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
