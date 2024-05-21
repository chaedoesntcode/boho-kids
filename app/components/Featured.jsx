import React from "react";

const Featured = () => {
  return (
    // START: Featured // 
    <section
      id="about"
      className="py-5 px-10 w-full h-[300px] bg-brown "
    >
      <div className="mx-auto h-full w-full md:w-1/2 lg:w-2/3 gap-x-2 lg:gap-x-5 flex justify-center items-center flex-col lg:flex-row">
        <div className=" w-full flex flex-col items-center lg:items-baseline justify-center text-center lg:text-left text-white ">
          <h2 className="h2">About Us</h2>
          <p className="mb-4 font-light">
            Established in 2006, we are a passionate team dedicated to providing
            high-quality furniture for your home.
          </p>
        </div>
        <div className="flex gap-2 flex-col w-full">
          <button className="btn-white__filled">Learn More</button>
          <button className="btn-white">Contact Us</button>
        </div>
      </div>
    </section>
    // END: Featured // 
  );
};

export default Featured;
