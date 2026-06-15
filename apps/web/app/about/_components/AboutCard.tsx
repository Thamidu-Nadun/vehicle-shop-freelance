import React from "react";

const AboutCard = ({
  name = "Intergrity First",
  description = "No hidden fees, no misleading claims—just honest advice and fair pricing.",
}: {
  name?: string;
  description?: string;
}) => {
  return (
    <div className="flex flex-col gap-4 h-full text-black relative shadow-md rounded-2xl bg-orange-100/20 border border-orange-300/50 p-4">
      <div className="absolute bottom-0 left-0 w-full p-6">
        <h2 className="text-lg font-bold font-poppins capitalize">{name}</h2>
        <p className="text-sm text-orange-950/90 mt-2 font-inter">
          {description}
        </p>
      </div>
    </div>
  );
};

export default AboutCard;
