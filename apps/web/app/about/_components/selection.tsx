import Image from "next/image";
import React from "react";
import { BadgeCheck } from "lucide-react";
const Selection = () => {
  return (
    <div className="grid gap-6 p-6 lg:grid-cols-2">
      {/* Content Side */}
      <div className="flex flex-col gap-4">
        <div className="relative overflow-hidden rounded-3xl border border-orange-200 bg-linear-to-br from-orange-50 to-white p-8 shadow-lg">
          {/* Decorative Blur */}
          <div className="absolute -top-16 -right-16 h-48 w-48 rounded-full bg-orange-400/10 blur-3xl" />

          <div className="relative">
            <span className="inline-flex items-center rounded-full bg-orange-100 px-4 py-1 text-sm font-medium text-brand">
              Premium Selection Process
            </span>

            <h2 className="mt-4 text-4xl font-bold text-ink">
              The Art of Selection
            </h2>

            <p className="mt-4 max-w-xl leading-relaxed text-gray-600">
              We source stories, not just cars. Our specialists travel across
              the country to hand-pick vehicles that meet strict standards for
              history, maintenance, and condition.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3">
              {[
                "Verified Ownership",
                "Accident Free",
                "Service Records",
                "Pristine Interior",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <BadgeCheck size={18} className="text-brand shrink-0" />
                  <span className="text-sm font-medium text-brand">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Supporting Images */}
        <div className="grid grid-cols-2 gap-4">
          <Image
            src="/img/cars/car-engine.png"
            alt="Engine"
            width={500}
            height={300}
            className="h-48 w-full rounded-2xl object-cover shadow-lg transition-transform duration-500 hover:scale-[1.03]"
          />

          <Image
            src="/img/cars/car-1.png"
            alt="Interior"
            width={500}
            height={300}
            className="h-48 w-full rounded-2xl object-cover shadow-lg transition-transform duration-500 hover:scale-[1.03]"
          />
        </div>
        <div className="overflow-hidden rounded-3xl border border-orange-200 bg-linear-to-r from-brand to-brand-hover p-6 text-white shadow-lg">
          <div className="flex flex-wrap items-center justify-center text-center gap-6">
            <div>
              <p className="text-sm text-orange-100 font-inter">
                Trusted by drivers nationwide
              </p>
              <h3 className="mt-1 text-2xl font-semibold font-poppins">
                Over 500+ Carefully Selected Vehicles
              </h3>
            </div>

            <div className="flex gap-8">
              <div>
                <div className="text-3xl font-bold">100%</div>
                <div className="text-sm text-orange-100">
                  Ownership Verified
                </div>
              </div>

              <div>
                <div className="text-3xl font-bold">50+</div>
                <div className="text-sm text-orange-100">Point Inspection</div>
              </div>

              <div>
                <div className="text-3xl font-bold">4.9</div>
                <div className="text-sm text-orange-100">Customer Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <div className="group relative overflow-hidden rounded-3xl shadow-xl">
        <Image
          src="/img/cars/car-dashboard.png"
          alt="Dashboard"
          width={1200}
          height={800}
          className="h-full min-h-[500px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-linear-to-t from-black/40 via-black/10 to-transparent" />
      </div>
    </div>
  );
};

export default Selection;
