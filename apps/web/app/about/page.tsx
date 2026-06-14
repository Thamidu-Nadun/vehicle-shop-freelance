import Hero from "@/Components/Common/Hero/Hero";

const aboutPage = () => {
  return (
    <div className="w-full h-full">
      <Hero>
        <h2 className="text-4xl text-white">
          20+ Years of Automotive Excellence.
        </h2>
        <p className="text-gray-100/90 mt-4 text-md">
          Building trust and delivering quality through two decades of dedicated
          service to our community.
        </p>
      </Hero>
    </div>
  );
};

export default aboutPage;
