import { Fragment } from "react";
const testimonials = [
  "LOLC Finance",
  "LB Finance",
  "People's Leasing & Finance",
  "Commercial Credit",
  "HNB Finance",
  "Singer Finance",
  "Softlogic Finance",
  "Vallibel Finance",
  "Mercantile Investments",
  "Siyapatha Finance",
];

const Partners = () => {
  const items = [...testimonials, ...testimonials];

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

      <section className="overflow-hidden py-12">
        <div className="scroll flex w-max">
          {testimonials.map((item, i) => (
            <Card key={`a-${i}`} name={item} />
          ))}

          {testimonials.map((item, i) => (
            <Card key={`b-${i}`} name={item} />
          ))}
        </div>
      </section>
    </Fragment>
  );
};

const Card = ({ name }: { name: string }) => {
  return (
    <div className="px-6 py-4 border-t-2 border-b-2 bg-white text-2xl hover:bg-orange-100/80 text-black font-semibold rounded flex items-center justify-center">
      {name}
    </div>
  );
};

export default Partners;
