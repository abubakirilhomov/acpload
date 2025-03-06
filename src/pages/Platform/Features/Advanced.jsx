    import React from 'react';

    const Advanced = () => {
      return (
        <div className="relative grid grid-cols-2 gap-0 p-6 md:grid-cols-2 sm:grid-cols-1">
          <div className="absolute top-4 left-0 right-0 flex items-center justify-center text-white text-4xl font-bold bg-opacity-50 p-4 rounded-lg">
            Advanced Freight Rate Calculator
          </div>
          {[{
            src: "https://credotrans.ru/wp-content/uploads/2020/11/container_owner_new.jpg",
            alt: "Image 1"
          }, {
            src: "https://www.contship.ru/manager/publikacii/universalnye-konteynery.jpg",
            alt: "Image 2"
          }, {
            src: "https://img.linemedia.com/img/s/container-40ft-container---1651140669405367732_big--22042813082733074700.jpg",
            alt: "Image 3"
          }, {
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMdzupgIS2JUTH29nXL-VhRtYUB_MtcQDylg&s",
            alt: "Image 4"
          }].map((item, index) => (
            <div key={index} className="relative w-full h-90">
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover brightness-50"
              />
            </div>
          ))}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-2xl font-bold bg-opacity-50 p-4 rounded-lg mt-16">
            <p className='text-center text-5xl text-white'>Advanced Freight Rate Calculator</p>
            <p className='text-white text-xl mt-6 text-center'>
              Accurate Cost Estimation:
              <br />• Optimized Pricing: Calculate competitive freight rates based on distance, fuel costs, load weight, and other key factors.
              <br />• Transparent Calculations: Ensure fairness and accuracy in your pricing, helping you negotiate better deals.
              <br /><br />
              User-Friendly Interface:
              <br />• Easy Input: Simply enter your load details and let our calculator do the rest.
              <br />• Real-Time Results: Receive instant rate estimates to help you plan your shipments more effectively.
            </p>
          </div>
        </div>
      );
    };

    export default Advanced;
