import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';

const Integrated = () => {
  return (
    <div
      className="relative flex items-center mt-14 justify-center bg-cover bg-center min-h-screen w-full overflow-x-hidden"
      style={{
        backgroundImage:
          "url('https://www.trucknews.com/wp-content/uploads/2020/08/truck-freight.jpg')",
      }}
    >
      <div className="relative w-full h-screen flex items-center justify-center bg-black bg-opacity-50 p-6">
        <img
          src="https://cdn-trans.info/uploads/2020/01/69ec24034194850bde77becb8e4.jpg"
          alt="Freight Image"
          className="absolute inset-0 w-full h-full object-cover brightness-50"
        />
        <div className="relative text-center z-10 max-w-screen-xl">
          <p className="text-5xl text-white mb-8">
            Integration with Leading Mapping Services
          </p>
          <div className="space-y-4 flex flex-col items-center">
            {/* First Box */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-md flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 w-full max-w-3xl h-auto md:h-80">
              <div className="text-white">
                <FaMapMarkerAlt size={32} />
              </div>
              <div className="text-left">
                <h1 className="text-2xl font-bold text-white">
                  Efficient Route Planning:
                </h1>
                <p className="mt-2 text-white">
                  • OSRM & Google Maps: Benefit from advanced mapping technology that provides accurate routing and navigation, ensuring timely and efficient deliveries.
                </p>
                <p className="mt-2 text-white">
                  • Visual Route Optimization: Plan the most effective routes and reduce fuel consumption with real-time mapping integration.
                </p>
              </div>
            </div>
            {/* Second Box */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-md flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 w-full max-w-3xl h-auto md:h-80">
              <div className="text-white">
                <FaMapMarkerAlt size={32} />
              </div>
              <div className="text-left">
                <h1 className="text-2xl font-bold text-white">
                  Enhanced Tracking:
                </h1>
                <p className="mt-2 text-white">
                  • Live Updates: Monitor shipment progress and receive updates on traffic, road conditions, and estimated arrival times.
                </p>
                <p className="mt-2 text-white">
                  • Seamless Coordination: Our integrated maps make it easier to coordinate logistics and improve overall operational efficiency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Integrated;
