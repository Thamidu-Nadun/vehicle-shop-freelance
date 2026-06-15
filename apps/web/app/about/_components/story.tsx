import AboutCard from "./AboutCard";

const Story = () => {
  return (
    <div className="w-full h-full grid md:grid-cols-6 gap-8 p-6">
      <div
        className="p-4 h-100 flex flex-col justify-center col-span-4 rounded-2xl shadow-md
       bg-brand/12 border border-brand/20"
      >
        <div className="px-6 max-w-200">
          <div className="text-sm text-brand-pressed">OUR HERITAGE</div>
          <h2 className="text-3xl text-black font-poppins font-bold mt-2">
            From a Small Shop to a Community Staple
          </h2>
          <div className="mt-4 text-orange-950/90 text-sm font-inter">
            <p>
              Achala Motors began as a modest two-bay workshop in 2004, driven
              by a simple philosophy: treat every customer like family. Founded
              by the Achala brothers, the business focused on technical
              precision and transparent communication.
            </p>
            <p className="mt-4">
              Today, while our showroom has grown, that same spirit remains. We
              aren&apos;t just selling cars; we are continuing a legacy of
              reliability that has powered thousands of journeys across the
              region.
            </p>
          </div>
        </div>
      </div>
      <div className="col-span-2 flex flex-col gap-4 justify-between">
        <AboutCard
          name="Integrity First"
          description="No hidden fees, no misleading claims—just honest advice and fair pricing."
        />
        <AboutCard
          name="Quality guarenteed"
          description="Every vehicle undergoes a rigorous 150-point
inspection before sale."
        />
      </div>
    </div>
  );
};

export default Story;
