import React from "react";
import { MdOutlineLocalShipping } from "react-icons/md";
import { BiLeaf, BiChat, BiCheckCircle } from "react-icons/bi";

const Benefits = () => {
  return (
    // START: Benefits //
    <section className="py-10 bg-lightGray">
      <div className="grid grid-cols-2 px-5 md:grid-cols-4 md:gap-2">
        <div className="benefits-grid-item">
          <BiLeaf className="text-4xl mb-3" />
          <p>Sustainable Materials</p>
        </div>
        <div className="benefits-grid-item">
          <BiChat className="text-4xl mb-3" />
          <p>Online Support</p>
        </div>
        <div className="benefits-grid-item">
          <MdOutlineLocalShipping className="text-4xl mb-3" />
          <p>Free Shipping & Returns</p>
        </div>
        <div className="benefits-grid-item">
          <BiCheckCircle className="text-4xl mb-3" />
          <p>Quality Guaranteed</p>
        </div>
      </div>
    </section>
    // END: Benefits //
  );
};

export default Benefits;
