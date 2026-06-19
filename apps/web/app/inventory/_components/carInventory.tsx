import FeatureCarCard from "@/Components/CarCard/FeatureCarCard";
import { Car } from "@/types/model";
import React from "react";

const cars: Car[] = [
  {
    id: "1",
    name: "Toyota",
    image: "/img/cars/car-1.png",
    price: 20000,
    tags: ["SUV", "Automatic"],
  },
  {
    id: "2",
    name: "Honda",
    image: "/img/cars/car-2.png",
    price: 18000,
    tags: ["Sedan", "Manual"],
  },
  {
    id: "3",
    name: "Ford",
    image: "/img/cars/car-3.png",
    price: 25000,
    tags: ["Truck", "Automatic"],
  },
  {
    id: "4",
    name: "Chevrolet",
    image: "/img/cars/car-1.png",
    price: 22000,
    tags: ["SUV", "Manual"],
  },
  {
    id: "5",
    name: "Nissan",
    image: "/img/cars/car-2.png",
    price: 21000,
    tags: ["Sedan", "Automatic"],
  },
  {
    id: "6",
    name: "BMW",
    image: "/img/cars/car-3.png",
    price: 35000,
    tags: ["Coupe", "Automatic"],
  },
  {
    id: "7",
    name: "Mercedes",
    image: "/img/cars/car-1.png",
    price: 40000,
    tags: ["SUV", "Automatic"],
  },
  {
    id: "8",
    name: "Audi",
    image: "/img/cars/car-2.png",
    price: 45000,
    tags: ["Sedan", "Automatic"],
  },
  {
    id: "9",
    name: "Volkswagen",
    image: "/img/cars/car-3.png",
    price: 23000,
    tags: ["Hatchback", "Manual"],
  },
  {
    id: "10",
    name: "Hyundai",
    image: "/img/cars/car-1.png",
    price: 19000,
    tags: ["SUV", "Automatic"],
  },
  {
    id: "11",
    name: "Kia",
    image: "/img/cars/car-2.png",
    price: 20000,
    tags: ["Sedan", "Manual"],
  },
  {
    id: "12",
    name: "Subaru",
    image: "/img/cars/car-3.png",
    price: 24000,
    tags: ["SUV", "Automatic"],
  },
  // { id: '13', name: 'Mazda', image: '/img/cars/car-1.png', price: 22000, tags: ['Sedan', 'Manual'] },
];

const CarInventory = () => {
  return (
    <div className="w-full h-full grid grid-cols-1 md:grid-cols-3 gap-4 px-4 a">
      {cars.map((car) => (
        <div key={car.id} className="">
          <FeatureCarCard car={car} />
        </div>
      ))}
    </div>
  );
};

export default CarInventory;
