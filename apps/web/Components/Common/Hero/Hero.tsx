import React from "react";

const Hero = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full h-[80vh] relative flex items-center justify-start px-4">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/img/car-bg-1.png')" }}
      />

      <div className="absolute inset-0 bg-linear-to-r from-[#261814]/90 via-[#261814]/60 to-transparent" />
      <div className="relative z-10 max-w-lg ml-4">{children}</div>
    </div>
  );
};

export default Hero;
