import React from "react";
import img from "../../../../assets/loadboardsec3.jpg";
import { useTranslation } from "react-i18next";

const Section3 = () => {
  const { t } = useTranslation();
  const values = [
    {
      title: "leadership.our-leadership.card-1.title",
      desc: "leadership.our-leadership.card-1.description",
    },
    {
      title: "leadership.our-leadership.card-2.title",
      desc: "leadership.our-leadership.card-2.description",
    },
    {
      title: "leadership.our-leadership.card-3.title",
      desc: "leadership.our-leadership.card-3.description",
    },
    {
      title: "leadership.our-leadership.card-4.title",
      desc: "leadership.our-leadership.card-4.description",
    },
  ];

  return (
    <div className="relative bg-[#0B1E2D] py-16">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <h2 className="text-5xl font-semibold mb-8">{t("leadership.our-leadership.title")}</h2>
        <div className="grid md:mt-20 grid-cols-1 md:grid-cols-2 gap-6">
          {values.map((item, index) => (
            <div
              key={index}
              className="bg-info text-white opacity-80 p-6 rounded-md shadow-md"
            >
              <h3 className="text-lg font-semibold mb-2">{t(item?.title)}</h3>
              <p className="text-sm italic leading-relaxed">{t(item?.desc)}</p>
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
