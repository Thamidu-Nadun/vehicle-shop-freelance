import Image from "next/image";
import { Fragment } from "react";

type Testimonial = {
  name: string;
  image: string;
};

const testimonials: Testimonial[] = [
  { name: "LOLC Finance", image: "/img/partners/lolc.png" },
  { name: "LB Finance", image: "/img/partners/lb.png" },
  { name: "Commercial Credit", image: "/img/partners/ccl.png" },
  { name: "HNB Finance", image: "/img/partners/hnb.png" },
  { name: "Singer Finance", image: "/img/partners/singer.png" },
  { name: "Softlogic Finance", image: "/img/partners/softlogic.png" },
  { name: "Vallibel Finance", image: "/img/partners/vallibel.png" },
  { name: "Siyapatha Finance", image: "/img/partners/siyapatha.png" },
];

const Partners = () => {
  return (
    <Fragment>
      <style>
        {`
          @keyframes marquee {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-50%);
            }
          }

          .scroll {
            display: flex;
            width: max-content;
            animation: marquee 14s linear infinite;
          }
          .scroll-reverse {
            animation-direction: reverse;
          }

          .scroll:hover {
            animation-play-state: paused;
          }
        `}
      </style>

      <section className="overflow-x-hidden py-12">
        <div className="scroll flex w-max">
          {testimonials.map((item, i) => (
            <Card key={`a-${i}`} name={item.name} image={item.image} />
          ))}

          {testimonials.map((item, i) => (
            <Card key={`b-${i}`} name={item.name} image={item.image} />
          ))}
        </div>
      </section>
    </Fragment>
  );
};

const Card = ({ name, image }: { name: string; image: string }) => {
  return (
    <div className="px-6 py-4 border-t-2 border-b-2 group bg-white text-2xl hover:bg-orange-100/80 text-black font-semibold rounded flex items-center justify-center">
      <Image
        src={image}
        alt={name}
        width={60}
        height={20}
        className="object-contain mr-4 w-20 h-10 grayscale-100 transition-all duration-300 group-hover:grayscale-0"
      />
      {name}
    </div>
  );
};

export default Partners;
