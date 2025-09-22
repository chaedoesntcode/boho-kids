import React from "react";
import CountdownTimer from "./CountdownTimer";

const Hero = () => {
  return (
    // START: Hero //
    <section
      id="#home"
      className="w-full flex items-center justify-center md:justify-start hero-container"
    >
      <div className="overlay"></div>
      <div className="hero-content px-4 md:px-10 lg:px-20 py-20 md:max-w-[65%] lg:max-w-[50%] flex flex-col gap-y-3">
        <h1 className="h1">
          <span className="md:text-[52px] font-extrabold">2026</span>
          <br />
          <span className="h1">Summer Sale!</span>
        </h1>
        <p>
          Transform your child's room with our high-quality and stylish
          furniture and decor. Don't miss out on this exclusive sale!
        </p>

        <CountdownTimer />
      </div>
    </section>
    // END: Hero //
  );
};

export default Hero;
