import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';

const Integrated = () => {
  return (
    <div
      className="relative flex items-center justify-center bg-cover bg-center w-full min-h-screen px-4 "
      style={{
        backgroundImage:
          "url('https://cdn-trans.info/uploads/2020/01/69ec24034194850bde77becb8e4.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      <div className="relative z-10 w-full max-w-screen-xl text-center text-white">
        <p className="text-3xl sm:text-4xl md:text-5xl font-bold mb-10">
          Integration with Leading Mapping Services
        </p>

        <div className="space-y-6 flex flex-col items-center">
          {/* First Box */}
          <div className="bg-gray-800 bg-opacity-80 p-6 rounded-xl shadow-md flex flex-col md:flex-row items-start md:items-center w-full max-w-3xl space-y-4 md:space-y-0 md:space-x-6">
            <div className="text-white">
              <FaMapMarkerAlt size={32} />
            </div>
            <div className="text-left">
              <h2 className="text-xl sm:text-2xl font-bold">Efficient Route Planning:</h2>
              <p className="mt-2 text-sm sm:text-base">
                • OSRM & Google Maps: Benefit from advanced mapping technology that provides accurate routing and navigation, ensuring timely and efficient deliveries.
              </p>
              <p className="mt-2 text-sm sm:text-base">
                • Visual Route Optimization: Plan the most effective routes and reduce fuel consumption with real-time mapping integration.
              </p>
            </div>
          </div>

          {/* Second Box */}
          <div className="bg-gray-800 bg-opacity-80 p-6 rounded-xl shadow-md flex flex-col md:flex-row items-start md:items-center w-full max-w-3xl space-y-4 md:space-y-0 md:space-x-6">
            <div className="text-white">
              <FaMapMarkerAlt size={32} />
            </div>
            <div className="text-left">
              <h2 className="text-xl sm:text-2xl font-bold">Enhanced Tracking:</h2>
              <p className="mt-2 text-sm sm:text-base">
                • Live Updates: Monitor shipment progress and receive updates on traffic, road conditions, and estimated arrival times.
              </p>
              <p className="mt-2 text-sm sm:text-base">
                • Seamless Coordination: Our integrated maps make it easier to coordinate logistics and improve overall operational efficiency.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Integrated;
