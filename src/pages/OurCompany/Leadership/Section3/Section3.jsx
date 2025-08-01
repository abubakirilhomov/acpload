import React from "react";
import img from "../../../../assets/loadboardsec3.jpg";

const Section3 = () => {
  const values = [
    {
      title: "People-First Approach",
      desc: "Our leaders know that technology is only as strong as the people who use it. That’s why we invest in building genuine relationships with our community of carriers, brokers, shippers, and dispatchers. We listen, respond, and evolve—so our platform reflects real-world needs.",
    },
    {
      title: "Continuous Learning",
      desc: "The freight industry is changing faster than ever. Our leadership team is committed to ongoing education and staying at the forefront of logistics trends, regulatory shifts, and digital transformation. We embrace change, encourage creativity, and foster a culture of curiosity and growth.",
    },
    {
      title: "Transparent Communication",
      desc: "Trust is earned through honesty and openness. Our leaders are dedicated to clear, timely communication with users and partners. We value feedback and see every comment, question, or concern as an opportunity to improve.",
    },
    {
      title: "Ethical and Responsible Innovation",
      desc: "We hold ourselves to high ethical standards. Whether it’s data security, fair business practices, or unbiased decision-making, our leadership sets the tone for a trustworthy and reliable platform.",
    },
  ];

  return (
    <div className="relative bg-[#0B1E2D] py-16">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid md:mt-20 grid-cols-1 md:grid-cols-2 gap-6">
          {values.map((item, index) => (
            <div
              key={index}
              className="bg-info text-white p-6 rounded-md shadow-md"
            >
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-sm italic leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute top-0 right-0 h-full w-1/2 hidden md:block z-0">
        <img
          src={img}
          alt="Man"
          className="h-full w-full object-cover object-left"
        />
      </div>
    </div>
  );
};

export default Section3;
