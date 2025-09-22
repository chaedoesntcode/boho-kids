import React from "react";
import Image from "next/image";
import Media1 from "../../public/images/media/Media-1.jpg";

const Featured = () => {
  return (
    // START: Featured //
    <section id="about" className="py-10 px-2 md:px-10 w-full bg-brown">
      <div className="mx-auto h-full w-full md:w-2/3 gap-y-5 gap-x-2 lg:gap-x-5 flex justify-center items-center flex-col lg:flex-row">
        <div className="lg:w-1/3 flex flex-col items-center  justify-center text-center text-white ">
          <h2 className="h2 mb-5">About Us</h2>
          <p className="font-light mb-5">
            Established in 2006, we are a passionate team dedicated to providing
            high-quality furniture for your home.
          </p>
          <a href="/#contact" className="btn-white">
            Get in Touch
          </a>
        </div>
        <div className="lg:w-2/3">
          <Image
            src={Media1}
            placeholder="blur"
            width="100%"
            height={400}
            alt="Woman and child playing outdors"
            className="rounded-xl media-img bg-gray-300 mb-[0px!important]"
          />
        </div>
      </div>
    </section>
    // END: Featured //
  );
};

export default Featured;
