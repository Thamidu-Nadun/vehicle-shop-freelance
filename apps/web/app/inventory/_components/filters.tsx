"use client";

import { Search } from "lucide-react";
import React, { useState } from "react";
import { Range } from "react-range";

type SearchFormData = {
  searchName: string;
  priceRange?: [number, number];
  transmissionType?: "automatic" | "manual";
};

const Filters = () => {
  const [formData, setFormData] = useState<SearchFormData>({
    searchName: "",
    priceRange: [10000, 50000],
    transmissionType: "automatic",
  });

  const clearAll = () => {
    setFormData({
      searchName: "",
      priceRange: [10000, 50000],
      transmissionType: "automatic",
    });
  };
  return (
    <div className="w-full h-fit flex flex-col items-start justify-start gap-6 px-4 py-4 shadow-md rounded-lg bg-white">
      {/* filter header section */}
      <div className="w-full flex items-center justify-between">
        <h2 className="font-poppins text-2xl font-semibold">Filters</h2>
        <p
          onClick={clearAll}
          className="text-sm text-brand cursor-pointer hover:text-brand-hover hover:underline transition-all duration-300"
        >
          Clear All
        </p>
      </div>
      {/* search section */}
      <div className="w-full h-10 flex items-center justify-start gap-2 px-3 py-1.5 rounded-lg border border-orange-950/40">
        <Search size={20} className="text-orange-950" />
        <input
          type="search"
          name="search by car model"
          className="w-full h-full outline-none text-sm text-orange-950"
          placeholder="Search by car model"
        />
      </div>
      {/* Price Range */}
      <div className="w-full mt-4">
        <h3 className="font-poppins text-lg font-medium">Price Range</h3>
        <div className="w-full">
          <div className="w-full flex items-center justify-end">
            <div className="flex items-center gap-2 text-lg font-poppins text-orange-500">
              <span>${formData.priceRange?.[0]}</span>
              <span>-</span>
              <span>${formData.priceRange?.[1]}</span>
            </div>
          </div>
          <div className="w-full mt-4">
            <Range
              values={formData.priceRange as [number, number]}
              step={1000}
              min={10000}
              max={50000}
              onChange={(values) => {
                setFormData((prev) => ({
                  ...prev,
                  priceRange: values as [number, number],
                }));
              }}
              renderTrack={({ props, children }) => (
                <div
                  {...props}
                  className="w-full h-1 bg-gray-300 rounded-lg relative"
                >
                  {children}
                </div>
              )}
              renderThumb={({ props }) => (
                <div
                  {...props}
                  className="w-4 h-4 bg-orange-500 rounded-full cursor-pointer"
                />
              )}
            />
          </div>
        </div>
      </div>
      {/* Tansmisson Type */}
      <div className="w-full mt-4">
        <h3 className="font-poppins text-lg font-medium">Transmission Type</h3>
        <div className="w-full flex items-center gap-4 mt-2">
          <button
            onClick={() =>
              setFormData((prev) => ({
                ...prev,
                transmissionType: "automatic",
              }))
            }
            className={`w-30 px-2 py-2 text-center border ${formData.transmissionType === "automatic" ? "bg-brand text-white" : "text-brand border-brand"} hover:bg-brand-hover hover:text-white rounded-lg transition-all duration-300`}
          >
            Auto
          </button>
          <button
            onClick={() =>
              setFormData((prev) => ({ ...prev, transmissionType: "manual" }))
            }
            className={`w-30 px-2 py-2 text-center border ${formData.transmissionType === "manual" ? "bg-brand text-white" : "text-brand border-brand"} hover:bg-brand-hover hover:text-white rounded-lg transition-all duration-300`}
          >
            manual
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filters;
