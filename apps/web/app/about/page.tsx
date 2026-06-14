import Hero from "@/Components/Common/Hero/Hero";
import { Button } from "@repo/ui/button";
import Story from "./_components/story";

const aboutPage = () => {
  return (
    <div className="w-full h-full bg-[#f9f9f9]">
      <Hero>
        <div className="max-w-2xl">
          <h2 className="text-5xl text-white font-bold">
            20+ Years of Automotive Excellence.
          </h2>
          <p className="text-gray-100/90 mt-4 text-md max-w-md">
            Building trust and delivering quality through two decades of
            dedicated service to our community.
          </p>
          <div className="mt-6 flex gap-4">
            <Button variant="primary" name="Explore Our Services" />
            {/* <button className="border text-orange-800 rounded-md hover:bg-orange-500 hover:text-white px-4 py-2 transition-colors duration-300">
            Get in Touch
          </button> */}
          </div>
        </div>
      </Hero>
      <Story />
    </div>
  );
};

export default aboutPage;
