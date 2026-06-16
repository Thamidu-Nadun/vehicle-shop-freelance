import React from "react";

const JoinUs = () => {
  return (
    <div className="w-full px-6">
      <div className="relative overflow-hidden rounded-2xl bg-linear-to-r from-[#f0561e] to-primary p-8 md:p-10">
        {/* Background Accent */}
        <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -left-10 bottom-0 h-32 w-32 rounded-full bg-white/5 blur-2xl" />

        <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-lg">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Join Our Family
            </h2>

            <p className="mt-3 text-base leading-relaxed text-orange-50/90">
              Discover quality vehicles and exceptional service from a
              dealership that genuinely cares about your journey, before and
              after the sale.
            </p>
          </div>

          <button className="group rounded-2xl bg-white px-7 py-4 font-semibold text-[#f0561e] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-orange-50 hover:shadow-2xl">
            <span className="flex items-center gap-2">
              Find My Car
              <svg
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
