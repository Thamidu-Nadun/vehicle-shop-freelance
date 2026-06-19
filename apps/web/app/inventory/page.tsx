import React from "react";
import CarInventory from "./_components/carInventory";
import Filters from "./_components/filters";

const page = () => {
  return (
    <div>
      <div className="w-full grid grid-cols-1 md:grid-cols-8 gap-4 px-4">
        <div className="col-span-2 w-full h-full">
          <Filters />
        </div>
        <div className="col-span-6 400 w-full h-full shadow-md rounded-lg bg-white">
          <CarInventory />
          <div className="w-full flex items-center justify-center gap-4 mt-5 text-2xl font-poppins text-gray-500">
            <div className="px-3 py-0.5 bg-red-100 text-center rounded-xl cursor-pointer hover:bg-red-200 text-black transition-colors duration-300">
              &lt;
            </div>
            <div className="text-sm ">Page 1 of 10</div>
            <div className="px-3 py-0.5 bg-red-100 text-center rounded-xl cursor-pointer hover:bg-red-200 text-black transition-colors duration-300">
              &gt;
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
