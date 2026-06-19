import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full h-full">
      <div
        className="w-full h-auto flex flex-col 
      items-center justify-start md:items-start mt-4 py-8 px-8 max-w-2xl gap-2"
      >
        <h1 className="font-poppins text-4xl font-semibold">
          Our Trusted Inventory
        </h1>
        <p className="font-inter text-gray-800/80 text-sm">
          Discover a premium collection of vehicles meticulously inspected for
          quality, performance, and reliability. Your next journey starts here.
        </p>
      </div>
      {children}
    </div>
  );
};

export default Layout;
