import Image from "next/image";
import React from "react";

const Story = () => {
  return (
    <div className="w-full h-full grid md:grid-cols-2 gap-8">
      <div className="p-4 flex flex-col justify-center">
        <div className="max-w-2xl px-6">
          <div className="text-md text-orange-800">OUR HERITAGE</div>
          <h2 className="text-4xl text-black font-semibold">
            From a Small Shop to a Community Staple
          </h2>
          <div className="mt-4 text-orange-950/90 text-md">
            <p>
              Achala Motors began as a modest two-bay workshop in 2004, driven
              by a simple philosophy: treat every customer like family. Founded
              by the Achala brothers, the business focused on technical
              precision and transparent communication—values that were often
              missing in the industry at the time.
            </p>
            <p className="mt-4">
              Today, while our showroom has grown and our inventory features the
              finest selections, that same spirit remains. We aren&apos;t just
              selling cars; we are continuing a legacy of reliability that has
              powered thousands of journeys across the region.
            </p>
          </div>
        </div>
      </div>
      <div className="p-8">
        <Image
          src="/img/about-us.png"
          alt="Our Story"
          width={200}
          height={100}
          className="rounded-lg object-cover w-full h-full"
        />
      </div>
    </div>
  );
};

export default Story;
