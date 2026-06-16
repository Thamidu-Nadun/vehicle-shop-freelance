import { Button } from "@repo/ui/button";
import Image from "next/image";
const Hero = () => {
  return (
    <div className="w-full h-[calc(100vh-3rem)] bg-orange-50 text-black grid grid-cols-1 md:grid-cols-2">
      <div
        className="flex flex-col items-start justify-center 
      gap-5 px-10 -translate-y-10"
      >
        <div className="max-w-xl w-full">
          <h2 className="text-5xl font-sans font-bold capitalize">
            Find your <span className="text-orange-500">perfect</span> drive
          </h2>
        </div>
        <div>
          <p className="text-md text-gray-700/70 max-w-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            minus ullam officia consequatur odio asperiores, culpa, temporibus
            natus sed libero alias id? Eos saepe odio, debitis itaque
            consequuntur quaerat possimus.
          </p>
        </div>
        <div className="flex items-center gap-x-4">
          <Button variant="primary" name="Browse Inventory" />
          <Button variant="secondary" name="Whatsapp Us" />
        </div>
      </div>
      <div className="col-span-1 w-full h-full flex items-center justify-center">
        <Image
          src="/img/cars/car-1-3d.png"
          alt="Car"
          width={200}
          height={200}
          className="h-full w-full object-contain transition-transform duration-700
           hover:scale-105 -translate-y-15"
        />
      </div>
    </div>
  );
};

export default Hero;
