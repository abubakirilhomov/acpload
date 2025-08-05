import React from "react";
import bgImg from "../../../../assets/testimonials3.jpg";

const Section5 = () => {
  return (
    <div style={{ backgroundImage: `url(${bgImg})` }} className="">
      <p className="text-4xl font-semibold text-info text-center py-10">Share Your Story</p>
      <p className="text-center mb-5 text-white">
        Have you had a great (or not-so-great) experience with ACP Loads? Your
        feedback helps shape a safer, more effective trucking marketplace.
      </p>

        <div className="flex pb-10 flex-col justify-center md:flex-row md:gap-5 max-w-[80%] mx-auto">
            <button className="bg-info duration-300 text-white px-20 py-3 rounded-full hover:bg-white hover:text-black">
                Leave a testimonial
            </button>

            <button className="bg-white duration-300 mt-5 md:mt-0 text-black px-20 py-3 rounded-full hover:bg-info hover:text-white">
                View All Reviews
            </button>
        </div>
    </div>
  );
};

export default Section5;
