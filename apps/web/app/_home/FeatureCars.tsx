"use client";
import FeatureCarCard from "@/Components/CarCard/FeatureCarCard";
import { Car } from "@/types/model";
import { useRef } from "react";

const featuredCars: Car[] = [
  {
    id: "1",
    name: "2020 Toyota Camry",
    image: "/img/cars/car-1.png",
    price: 24000,
    tags: ["Sedan", "Automatic"],
  },
  {
    id: "2",
    name: "2019 Honda CR-V",
    image: "/img/cars/car-2.png",
    price: 28000,
    tags: ["SUV", "Automatic"],
  },
  {
    id: "3",
    name: "2021 Ford Mustang",
    image: "/img/cars/car-3.png",
    price: 35000,
    tags: ["Coupe", "Manual"],
  },
  {
    id: "4",
    name: "2018 Tesla Model 3",
    image: "/img/cars/car-1.png",
    price: 45000,
    tags: ["Electric", "Automatic"],
  },
  {
    id: "5",
    name: "2018 Tesla Model 3",
    image: "/img/cars/car-2.png",
    price: 45000,
    tags: ["Electric", "Automatic"],
  },
];
const sliderSettings = {
  moveSpeed: 400, // Speed of the slide transition in milliseconds
  autoSlideInterval: 3000, // Interval for automatic sliding in milliseconds
  behavior: "smooth" as ScrollBehavior, // Scroll behavior for the slide transition
};

const FeatureCars = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollRight = (side: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left:
          side === "right"
            ? sliderSettings.moveSpeed
            : -sliderSettings.moveSpeed,
        behavior: sliderSettings.behavior,
      });
    }
  };
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     const el = scrollRef.current;
  //     if (!el) return;

  //     const isAtEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 2;
  //     if (isAtEnd) {
  //       el.scrollTo({ left: 0, behavior: sliderSettings.behavior });
  //     } else {
  //       el.scrollBy({
  //         left: sliderSettings.moveSpeed,
  //         behavior: sliderSettings.behavior,
  //       });
  //     }
  //   }, sliderSettings.autoSlideInterval);

  //   return () => clearInterval(interval);
  // }, []);
  return (
    <div className="w-full max-w-7xl mx-auto px-1 py-12">
      <div className="flex items-center justify-between">
        <h2 className="text-4xl font-poppins font-semibold">
          Featured Vehicles
        </h2>
        <div className="flex gap-2">
          <button
            onClick={() => scrollRight("left")}
            className="px-3.5 py-1 border border-black 
          text-black hover:text-white hover:bg-black rounded-full text-xl font-bold font-poppins
          transition-colors duration-300"
          >
            &lt;
          </button>
          <button
            onClick={() => scrollRight("right")}
            className="px-3.5 py-1 border border-black 
          text-black hover:text-white hover:bg-black rounded-full text-xl font-bold font-poppins
          transition-colors duration-300"
          >
            &gt;
          </button>
        </div>
      </div>
      <div
        ref={scrollRef}
        className="mt-8 flex gap-6 items-center overflow-x-auto scrollbar-hide py-4 px-2"
      >
        {featuredCars.map((car) => (
          <FeatureCarCard key={car.id} {...car} />
        ))}
      </div>
    </div>
  );
};

export default FeatureCars;
