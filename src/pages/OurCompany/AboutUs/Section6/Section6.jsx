import React from 'react';
import { AlignEndHorizontal, ShieldHalf, Truck, Users } from 'lucide-react';
import CountUp from 'react-countup';
import { useTranslation } from 'react-i18next';
import img1 from "../../../../assets/about9.jpg";

const Section6 = () => {
  const { t } = useTranslation();

  const stats = [
    {
      title: t("about-us.meet-our-team.daily-loads"),
      value: 10000,
      icon: <Truck className="w-12 h-12 text-white" />,
    },
    {
      title: t("about-us.meet-our-team.users"),
      value: 2000,
      icon: <Users className="w-12 h-12 text-white" />,
    },
    {
      title: t("about-us.meet-our-team.brokers"),
      value: 70,
      icon: <AlignEndHorizontal className="w-12 h-12 text-white" />,
    },
    {
      title: t("about-us.meet-our-team.our-team"),
      value: 20,
      icon: <ShieldHalf className="w-12 h-12 text-white" />,
    },
  ];

  return (
    <section className="bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                {t("about-us.meet-our-team.title")}
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                {t("about-us.meet-our-team.description")}
              </p>
              <button className="bg-info hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded transition-all duration-300 transform hover:scale-105 shadow-lg">
                {t("about-us.contact-us.get-in-touch")}
              </button>
            </div>
            
            {/* Statistics */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
              {stats.map((stat, index) => (
                <div key={index} className="bg-info bg-opacity-90 rounded-lg p-6 text-center">
                  <div className="flex justify-center mb-4">
                    {stat.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {stat.title}
                  </h3>
                  <p className="text-4xl font-bold text-white">
                    <CountUp end={stat.value} duration={3} separator="," />
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-2xl">
              <div className="relative h-96 lg:h-[500px] bg-gradient-to-br from-gray-300 to-gray-400">
                <img src={img1} alt="Acp Loads" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Section6;
