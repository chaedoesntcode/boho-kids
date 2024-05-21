import React from "react";
import Image from "next/image";

const Carousel = ({ id, title, subtitle, items }) => {
  return (
    // START: Carousel //
    <section id={id} className="container p-5 md:p-10">
      <div className="mb-5">
        <h2 className="h2">{title}</h2>
        <p>{subtitle}</p>
      </div>
      <div className="product-container relative">
        {items.map((item, index) => {
          return (
            <div className="product-card" key={index}>
              <div className="w-full h-[300px] bg-white rounded-[12px] overflow-hidden relative">
                <Image src={item.imgURL} 
                alt={item.brandName}
                fill 
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                objectFit='cover' 
                objectPosition='center' 
                className='absolute'/>
              </div>
              <h3 className="h3 mt-2">{item.brandName}</h3>
              <div className="flex items-center gap-2">
                <p className="text-xl font-medium text-green-800">{item.salePrice}</p>
                <p className="small text-black/80 line-through">{item.originalPrice}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
    // END: Carousel //
  );
};

export default Carousel;
