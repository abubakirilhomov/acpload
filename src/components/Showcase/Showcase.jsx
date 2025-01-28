import React from "react";
import bgImage from "/images/showcase-img.png";

const HeroSection = () => {
  return (
    <section
      style={{ backgroundImage: `url(${bgImage})`, backgroundSize: "cover", backgroundPosition: "center" }}
      className="py-20 px-8 h-screen"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
        {/* Matn qismi */}
        <div className="md:w-1/2 mb-10 md:mb-0 text-center md:text-left">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            ACP Loads – Logistika hamkorlaringizni toping
          </h1>
          <p className="text-lg mb-6">
            Brokerlar, yuk tashuvchilar, dispecherlar va mahsulot egalari uchun yagona platforma. Yuk qidirish, boshqaruv va xizmat sifatini kuzatish endi oson.
          </p>
          <div className="space-x-4">
            <button className="btn btn-soft btn-secondary font-semibold shadow-lg">
              Registratsiyadan o'tish
            </button>
            <button className="bg-blue-600 px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-blue-500">
              Platformani ko'rish
            </button>
          </div>
        </div>
        {/* Rasm qismi */}
        <div className="md:w-1/2">
          <img
            src="/images/hero-truck.png"
            alt="ACP Loads yuk tashish"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
