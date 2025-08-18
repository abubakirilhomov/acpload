import React from 'react';
import { Shield, Users, TrendingUp } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Section7 = () => {
  const { t } = useTranslation();

  const commitments = [
    {
      icon: <Users className="w-6 h-6 text-blue-400" />,
      title: t("about-us.our-commitment.1"),
    },
    {
      icon: <Shield className="w-6 h-6 text-blue-400" />,
      title: t("about-us.our-commitment.2"),
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-blue-400" />,
      title: t("about-us.our-commitment.3"),
    },
  ];

  const partners = [
    { name: "Magellan Transport Logistics", color: "text-red-500" },
    { name: "LANDSTAR", color: "text-blue-600" },
    { name: "FedEx", color: "text-purple-600" },
    { name: "UNITED STATES POSTAL SERVICE", color: "text-blue-500" },
    { name: "OSRM", color: "text-blue-400" },
  ];

  return (
    <section className="bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          
          {/* Left Content - Commitments */}
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-400 mb-8">
              {t("about-us.our-commitment.title")}
            </h2>
            
            {/* Commitment Points */}
            <div className="space-y-6">
              {commitments.map((commitment, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    {commitment.icon}
                  </div>
                  <div>
                    <span className="text-white font-semibold text-lg">
                      {commitment.title}
                    </span>
                    <span className="text-gray-300 text-lg ml-2">
                      {commitment.description}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-2xl">
              <div className="relative h-80 lg:h-96 bg-gradient-to-br from-gray-200 to-gray-300">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-gray-600">
                    <div className="relative">
                      <div className="w-32 h-32 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-16 h-16 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                        </svg>
                      </div>
                      <div className="absolute -bottom-4 -right-4 w-20 h-16 bg-white rounded shadow-lg flex items-center justify-center">
                        <div className="space-y-1">
                          <div className="w-12 h-1 bg-blue-300 rounded"></div>
                          <div className="w-10 h-1 bg-blue-300 rounded"></div>
                          <div className="w-8 h-1 bg-blue-300 rounded"></div>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm mt-8">{t("about-us.our-commitment.illustration-caption")}</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Partner Logos Section */}
        <div className="border-t border-gray-700 pt-12">
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
            {partners.map((partner, index) => (
              <div key={index} className="text-center">
                <div className={`font-bold text-lg lg:text-xl ${partner.color} hover:scale-110 transition-transform duration-300`}>
                  {partner.name === "Magellan Transport Logistics" && (
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-red-500 rounded flex items-center justify-center text-white text-xs font-bold">
                        M
                      </div>
                      <span>MAGELLAN</span>
                    </div>
                  )}
                  {partner.name === "LANDSTAR" && (
                    <div className="bg-blue-600 text-white px-4 py-2 rounded font-bold">
                      LANDSTAR ★
                    </div>
                  )}
                  {partner.name === "FedEx" && (
                    <div className="text-purple-600 font-bold text-2xl">
                      FedEx
                    </div>
                  )}
                  {partner.name === "UNITED STATES POSTAL SERVICE" && (
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center text-white text-xs">
                        US
                      </div>
                      <div className="text-blue-500 text-sm">
                        <div>UNITED STATES</div>
                        <div>POSTAL SERVICE</div>
                      </div>
                    </div>
                  )}
                  {partner.name === "OSRM" && (
                    <div className="text-blue-400 font-bold text-xl">
                      OSRM
                      <div className="text-xs text-gray-400">OPEN SOURCE ROUTING MACHINE</div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section7;
