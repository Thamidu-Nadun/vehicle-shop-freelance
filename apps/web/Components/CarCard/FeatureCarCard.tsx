import { Heart } from "lucide-react";
import Image from "next/image";

const FeatureCarCard = ({
  id,
  name,
  image,
  price,
  tags,
}: {
  id: string;
  name: string;
  image: string;
  price: number;
  tags: string[];
}) => {
  return (
    <div
      className="w-76 max-w-sm h-96 aspect-9/16 flex flex-col shrink-0 rounded-3xl border border-gray-200 
    bg-white shadow-md hover:shadow-lg overflow-hidden group hover:-translate-y-1 transition-all duration-300"
    >
      <Image
        src={image}
        alt={name}
        width={400}
        height={200}
        className="h-48 w-full object-cover"
      />
      <div className="flex-1 flex flex-col justify-between pb-1">
        <div className="px-4 py-4">
          <div className="flex items-center justify-between">
            <h2
              className="font-poppins font-bold text-2xl group-hover:text-brand group-hover:underline hover:cursor-pointer transition-colors duration-300"
              aria-label={`car details for ${id}`}
            >
              {name}
            </h2>
          </div>
          <div className="flex gap-2 flex-wrap mt-0.5">
            {tags.map((tag, idx) => (
              <span
                key={idx}
                className="bg-brand/20 text-orange-900 px-1.5 py-0.5 rounded-sm text-sm font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="w-full flex items-center justify-between px-4 py-3 border-t border-gray-200">
          <p className="text-brand text-2xl font-semibold font-poppins">
            ${price}
          </p>
          {/* <button
            className="bg-brand text-white hover:bg-brand/90 
        px-4 py-2 rounded-lg cursor-pointer transition-colors duration-300 font-medium"
          >
            View Details
          </button> */}
          <button>
            <Heart
              size={24}
              className="text-red-500 hover:fill-red-500 transition-all duration-500"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeatureCarCard;
