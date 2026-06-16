import FeatureCars from "./_home/FeatureCars";
import Hero from "./_home/Hero";
import Partners from "./_home/Partners";

export default function Home() {
  return (
    <div className="min-h-screen bg-orange-50">
      <Hero />
      <Partners />
      <FeatureCars />
    </div>
  );
}
