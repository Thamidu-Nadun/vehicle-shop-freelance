"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const words = [
  "Perfect",
  "Premium",
  "Optimal",
  "Supreme",
  "Trusted",
  "Quality",
  "Refined",
  "Elegant",
  "Amazing",
];
const timeInterval = 3000; // 3 seconds

const HeroTitle = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, timeInterval);

    return () => clearInterval(interval);
  }, [currentIndex]);
  return (
    <h2 className="text-5xl font-sans font-bold capitalize">
      Find your{" "}
      <AnimatePresence mode="wait">
        <motion.span
          key={currentIndex}
          initial={{ y: 20, opacity: 0, rotateY: -40 }}
          animate={{ y: 0, opacity: 1, rotateY: 0 }}
          exit={{ y: -20, opacity: 0, rotateY: 40 }}
          transition={{ duration: 0.3 }}
          className="text-orange-500 inline-block w-[7ch] text-center"
        >
          {words[currentIndex]}
        </motion.span>
      </AnimatePresence>{" "}
      drive
    </h2>
  );
};

export default HeroTitle;
