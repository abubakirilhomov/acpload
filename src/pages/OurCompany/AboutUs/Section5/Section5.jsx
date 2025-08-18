import React from 'react';
import { Lightbulb, Network, Gauge, Tag } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Section5 = () => {
  const { t } = useTranslation();

  const features = [
    {
      title: t("about-us.why-choose.card-1.title"),
      description: t("about-us.why-choose.card-1.description"),
      icon: <Lightbulb className="w-16 h-16 text-white" strokeWidth={1.5} />,
      highlighted: true
    },
    {
      title: t("about-us.why-choose.card-2.title"),
      description: t("about-us.why-choose.card-2.description"),
      icon: <Network className="w-16 h-16 text-white" strokeWidth={1.5} />,
      highlighted: false
    },
    {
      title: t("about-us.why-choose.card-3.title"),
      description: t("about-us.why-choose.card-3.description"),
      icon: <Gauge className="w-16 h-16 text-white" strokeWidth={1.5} />,
      highlighted: false
    },
    {
      title: t("about-us.why-choose.card-4.title"),
      description: t("about-us.why-choose.card-4.description"),
      icon: <Tag className="w-16 h-16 text-white" strokeWidth={1.5} />,
      highlighted: true
    }
  ];

  return (
    <section className="bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-400 mb-8">
            {t("about-us.why-choose.title")}
          </h2>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="group">
              <div className={`
                ${feature.highlighted 
                  ? 'bg-gradient-to-br from-blue-500 to-blue-600' 
                  : 'bg-transparent border-2 border-gray-600'
                } 
                rounded-lg p-8 h-full flex flex-col items-start text-left shadow-2xl 
                transform transition-all duration-300 hover:scale-105 
                ${feature.highlighted ? 'hover:from-blue-600 hover:to-blue-700' : 'hover:border-blue-400 hover:bg-gray-800/30'}
              `}>
                
                <div className={`
                  mb-6 transform transition-transform duration-300 group-hover:scale-110
                  ${feature.highlighted ? '' : 'opacity-80'}
                `}>
                  {feature.icon}
                </div>
                
                <h3 className={`
                  text-2xl font-bold mb-4
                  ${feature.highlighted ? 'text-white' : 'text-blue-400'}
                `}>
                  {feature.title}
                </h3>
                
                <p className={`
                  leading-relaxed text-lg
                  ${feature.highlighted ? 'text-white text-opacity-95' : 'text-gray-300'}
                `}>
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-16">
          <button className="bg-info hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
            {t("about-us.contact-us.get-in-touch")}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Section5;
