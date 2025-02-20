import React from 'react';
import Button from '../../Button/Button';
import Decor from '../../Decor/Decor';

const WhoBenefits = () => {
  return (
    <section className=" text-white py-16">
      <Decor/>
      <div className="max-w-[90%] w-full mx-auto text-center space-y-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Who Benefits from Signing Up?</h2>
        <p className="text-lg mb-12">Join for Free!</p>

        <div className="flex flex-col lg:flex-row w-full gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="p-8 flex flex-1 flex-col items-center text-center bg-white/10 rounded-2xl border border-white/20 cursor-pointer select-none shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] text-white hover:scale-105 transition-transform duration-300 min-h-60"
            >
              <h3 className="text-2xl font-semibold mb-4">{benefit.title}</h3>
              <p className="text-base opacity-90 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        <Button text={'Get Access'} />

      </div>
    </section>
  );
};

const benefits = [
  {
    title: "Carriers & Dispatchers",
    description: "Gain instant access to thousands of load opportunities. Whether you manage a fleet or operate as an individual, our platform helps you quickly match available trucks with suitable loads, saving time and boosting profitability.",
  },
  {
    title: "Freight Brokers & Shippers",
    description: "Post your loads effortlessly and reach a broad network of reliable carriers. Our streamlined sign-up process ensures you can list your shipments quickly, so you spend less time on administration and more time on moving freight.",
  },
  {
    title: "Owner-Operators",
    description: "Enjoy direct access to high-quality freight tailored to your truck’s specifications. With our easy sign-up, you can connect with shippers and brokers looking for dependable owner-operators, ensuring you maximize your earnings and reduce downtime.",
  },
];

export default WhoBenefits;
