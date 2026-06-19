"use client";
import Link from "next/link";
import { useState } from "react";

const links: {
  name: string;
  url: string;
}[] = [
  { name: "Home", url: "/" },
  { name: "About", url: "/about" },
  { name: "Inventory", url: "/inventory" },
  { name: "Blog", url: "#" },
];
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full sticky top-0 z-50">
      <div className="w-full h-12 flex items-center justify-between px-4 bg-orange-50 text-black shadow-md">
        <h1 className="text-2xl cursor-pointer text-orange-500">Navbar</h1>
        {/* Desktop */}
        <div className="hidden md:block">
          <ul className="flex space-x-4">
            {links.map((link) => (
              <li
                key={link.name}
                className="hover:text-orange-500 cursor-pointer"
              >
                <Link href={link.url}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <button className="hidden md:block px-4 py-1.5 rounded-lg capitalize bg-orange-500 text-white">
            find my car
          </button>
          <button
            className="md:hidden ml-2 px-4 py-1.5 rounded-lg bg-gray-300 text-black"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "Close" : "Menu"}
          </button>
        </div>
      </div>
      {/* Mobile */}
      <div
        className={`${isOpen ? "flex" : "hidden"} md:hidden bg-gray-100 flex-col items-center space-y-4 py-4 shadow-md transition-all duration-300 ease-in-out`}
      >
        <div className="mt-4 w-full">
          <ul className="flex flex-col items-center w-full space-x-4 text-black">
            <li className="text-orange-500 cursor-pointer">Home</li>
            <li className="hover:text-orange-500 cursor-pointer">About</li>
            <li className="hover:text-orange-500 cursor-pointer">Contact</li>
            <li className="hover:text-orange-500 cursor-pointer">Blog</li>
          </ul>
        </div>
        <button className="mt-4 px-4 py-1.5 rounded-lg capitalize bg-orange-500 text-white">
          find my car
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
