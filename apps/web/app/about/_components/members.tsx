import Image from "next/image";
import React from "react";

type TeamMember = {
  name: string;
  position: string;
  image: string;
};
const teamMembers: TeamMember[] = [
  {
    name: "John Doe",
    position: "Founder & CEO",
    image: "/img/team/member-1.png",
  },
  {
    name: "Emily Johnson",
    position: "Chief Operating Officer",
    image: "/img/team/member-2.png",
  },
  {
    name: "Joe Smith",
    position: "Head of Sales",
    image: "/img/team/member-3.png",
  },
];

const Members = () => {
  return (
    <div className="w-full">
      <div className="text-center">
        <h2 className="text-black font-poppins text-4xl font-bold section-title">
          Faces of Achala
        </h2>
        <p className="font-inter text-black/80 text-sm mt-2">
          Expertise you can trust, members you&apos;ll remember
        </p>
      </div>
      <div className="w-full flex flex-wrap justify-center gap-6 mt-6 p-6">
        {teamMembers.map((member, idx) => (
          <MemberCard
            key={idx}
            name={member.name}
            position={member.position}
            image={member.image}
          />
        ))}
      </div>
    </div>
  );
};

const MemberCard = ({
  name,
  position,
  image,
}: {
  name: string;
  position: string;
  image: string;
}) => {
  return (
    <div className="rounded-lg shadow-sm hover:shadow-md max-w-xs">
      <div className="w-full h-auto overflow-hidden">
        <Image
          src={image}
          alt={`${name}'s profile picture`}
          width={200}
          height={100}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mt-2 font-poppins text-black">
          {name}
        </h3>
        <p className="text-sm text-gray-500 font-inter">{position}</p>
      </div>
    </div>
  );
};

export default Members;
