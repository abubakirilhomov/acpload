import React from 'react';
import img1 from "../../../../assets/about4.jpg";
import img2 from "../../../../assets/about5.jpg";
import img3 from "../../../../assets/about6.jpg";
import img4 from "../../../../assets/about7.jpg";
import img5 from "../../../../assets/about8.jpg";
import { useTranslation } from "react-i18next";

const Section4 = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-center md:text-4xl text-2xl font-bold text-white mb-8">
            {t("about-us.technology-driven-logistics")}
          </h2>
          <p className="text-center italic max-w-4xl mx-auto my-16 text-lg md:text-xl text-gray-300 leading-relaxed">
            {t("about-us.technology-driven-logistics-description")}
          </p>
        </div>

        {/* Images Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {/* Large Left Image */}
          <div className="md:row-span-2">
            <div className="rounded-lg overflow-hidden shadow-2xl h-full min-h-[400px]">
              <img 
                src={img1} 
                alt="Professional business team collaborating" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Top Right */}
          <div className="md:col-span-1">
            <div className="rounded-lg overflow-hidden shadow-2xl h-full min-h-[190px]">
              <img 
                src={img2} 
                alt="Woman using tablet for business analytics" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Top Far Right */}
          <div className="md:col-span-1">
            <div className="rounded-lg overflow-hidden shadow-2xl h-full min-h-[190px]">
              <img 
                src={img3} 
                alt="Modern office workspace with documents" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Bottom Middle */}
          <div className="md:col-span-1">
            <div className="rounded-lg overflow-hidden shadow-2xl h-full min-h-[190px]">
              <img 
                src={img4} 
                alt="Business accessories and workspace" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Bottom Right */}
          <div className="md:col-span-1">
            <div className="rounded-lg overflow-hidden shadow-2xl h-full min-h-[190px]">
              <img 
                src={img5} 
                alt="Mobile technology and connectivity" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Section4;
