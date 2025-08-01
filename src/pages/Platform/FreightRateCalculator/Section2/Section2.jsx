import React from "react";
import bgImg from "../../../../assets/freight-sec2.png";
const Section2 = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bgImg})`,
      }}
      className="bg-bottom-left relative"
    >
      <div className="absolute inset-0 bg-info/20 backdrop-blur-sm"></div>
      <div className="z-10 text-white relative md:px-8 py-2 max-w-[90%] mx-auto">
        <p className="text-5xl mt-10 mb-5">Key Features of Our Calculator</p>

        <ul className="">
          <li className="text-2xl list-disc font-bold">Real-Time Data:</li>
          <p className="mb-4">
            Uses current mapping and fuel pricing data for accurate distance and
            cost calculations.
          </p>
          <li className="text-2xl list-disc font-bold">Customizable Inputs:</li>
          <p className="mb-4">
            Tailor your estimates with adjustable base rates, fuel surcharges,
            and additional fees.
          </p>

          <li className="text-2xl list-disc font-bold">Cost Breakdown:</li>
          <p className="mb-4">
            See a detailed breakdown of how each factor contributes to your
            total rate.
          </p>

          <li className="text-2xl list-disc font-bold">
            User-Friendly Interface:
          </li>
          <p className="mb-4">
            Designed for quick input and fast calculations—get your rate in
            seconds.
          </p>

          <li className="text-2xl list-disc font-bold">Market Insights:</li>
          <p className="mb-4">
            Option to compare your calculated rate with market averages to stay
            competitive.
          </p>
        </ul>

        <p className="text-5xl mt-10">Why Use Our Freight Rate Calculator?</p>

        <ul className="mt-5">
          <li className="text-2xl list-disc font-bold">
            Optimize Your Earnings:
          </li>
          <p className="mb-4">
            By knowing your estimated freight rate upfront, you can negotiate
            confidently and reduce empty miles.
          </p>
          <li className="text-2xl list-disc font-bold">Efficient Planning:</li>
          <p className="mb-4">
            Plan your routes and budgets accurately, ensuring a smoother
            operation and reduced costs.
          </p>
          <li className="text-2xl list-disc font-bold">
            Competitive Advantage
          </li>
          <p className="mb-4">
            Stay informed of current market conditions and adjust your pricing
            strategy in real time.
          </p>
        </ul>
      </div>
    </div>
  );
};

export default Section2;
