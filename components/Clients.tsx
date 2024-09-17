import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";
import { companies, testimonials } from "@/data";

const Clients = () => {
  return (
    <div className="py-20" id="testimonials">
      <h1 className="heading">
        Job & Lab Experience at
        <span className="text-purple">Intelligo Inc.& NCCU & UMich</span>
      </h1>
      <div className="flex flex-wrap items-center max-lg:mt-10">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
      <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10 mt-20">
        {companies.map(({ id, img, name, nameImg }) => (
          <div key={id} className="flex md:max-w-60 max-w-32 gap-2">
            {/* Conditionally render the img only if 'img' is provided */}
            {img && (
              <img
                src={img}
                alt={name || "Company Image"}
                className="md:w-10 w-5"
              />
            )}
            {/* Conditionally render the nameImg, and default the alt attribute if 'name' is not provided */}
            {nameImg && (
              <img
                src={nameImg}
                alt={name || "Company Name Image"}
                className="md:w-24 w-20"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clients;
