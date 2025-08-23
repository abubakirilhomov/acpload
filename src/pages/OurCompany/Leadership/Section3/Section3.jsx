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
    <div className="relative  py-16">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <img
              src={img}
              alt="Man"
              className="w-full bg-amber-300 h-auto rounded-md shadow-lg object-cover"
            />
          </div>
          
          <div className="md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-semibold mb-8 text-white">
              {t("leadership.our-leadership.title")}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((item, index) => (
                <div
                  key={index}
                  className=" bg-opacity-20 bg-[#3f96d1] p-6 rounded-md shadow-md text-white"
                >
                  <h3 className="text-lg font-semibold mb-2">{t(item.title)}</h3>
                  <p className="text-sm italic leading-relaxed">{t(item.desc)}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;