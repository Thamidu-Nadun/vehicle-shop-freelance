type LinkSection = {
  sectionName: string;
  links: {
    name: string;
    url: string;
  }[];
};
const quickLinks: LinkSection[] = [
  {
    sectionName: "Contact Us",
    links: [
      { name: "123 Main Street, Anytown, USA", url: "#" },
      { name: "+94-777-4623-17", url: "#" },
      { name: "example@ex.com", url: "#" },
    ],
  },
  {
    sectionName: "Follow Us",
    links: [
      { name: "Facebook", url: "#" },
      { name: "Instagram", url: "#" },
    ],
  },
  {
    sectionName: "Legal",
    links: [
      { name: "Privacy Policy", url: "#" },
      { name: "Terms of Service", url: "#" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="w-full bg-brand mt-24 rounded-t-3xl shadow-lg px-6">
      <div className="w-full max-w-7xl mx-auto px-2 py-4 flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-6 flex-wrap">
        <div className="max-w-sm mt-4 pt-8 md:pt-0 md:mt-0 text-center md:text-left">
          <h2 className="text-2xl font-bold text-gray-200 font-poppins text-center lg:text-left">
            Achala Motors
          </h2>
          <p className="text-sm text-gray-200/80 mt-1 font-inter text-center lg:text-left">
            Providing high-quality vehicles and exceptional service for over 2
            decades.
          </p>
        </div>
        <div className="flex md:gap-12 flex-wrape justify-center pt-8">
          {quickLinks.map((section) => (
            <div
              key={section.sectionName}
              className="mb-6 text-center lg:text-left"
            >
              <h3 className="font-poppins font-bold text-white">
                {section.sectionName}
              </h3>
              <ul className="mt-2">
                {section.links.map((link) => (
                  <li key={link.name} className="text-sm text-gray-200">
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full text-white pt-4">
        <div className="w-full text-center px-10 lg:text-left text-sm border-t border-gray-200/50 text-gray-200 py-4">
          &copy; 2024 Achala Motors. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
