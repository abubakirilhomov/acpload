import React, { useEffect, useState } from "react";
import { FiBell, FiMessageSquare, FiCheckCircle, FiAlertCircle } from "react-icons/fi";
import { FaCheck } from "react-icons/fa";

const Statistics = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 300);
  }, []);

  const data = [
    { icon: <FiBell className="text-6xl mb-2" />, text: "New Notification", description: "You have a new notification alert." },
    { icon: <FiMessageSquare className="text-6xl mb-2" />, text: "New Message", description: "You received a new message." },
    { icon: <FiCheckCircle className="text-6xl mb-2" />, text: "Task Completed", description: "Your task has been successfully completed." },
    { icon: <FiAlertCircle className="text-6xl mb-2" />, text: "Warning Alert", description: "There is a warning you need to check." }
  ];

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1
        className={`text-6xl font-bold text-white text-center transition-opacity duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
        }`}
      >
        Comprehensive Loadboard Statistics
      </h1>
      <p className="text-white text-2xl text-center mt-2">
        Live Market Data and Data-Driven Decisions
      </p>
      <div className="grid grid-cols-2 gap-8 mt-10">
        {data.map((item, index) => (
          <div
            key={index}
            style={{ animationDelay: `${index * 0.3}s` }}
            className={`relative w-135 h-56 border-2 bg-gray-500 flex flex-col items-center justify-center font-bold text-white  shadow-lg transition-all duration-1000 ease-out transform ${
              isVisible ? "scale-100 opacity-100" : "scale-50 opacity-0"
            }`}
          >

            <div className="absolute top-6 left-6 w-16 h-16 flex items-center justify-center bg-blue-500 rounded-full">
              <FaCheck className="text-white text-lg" />
            </div>
            <h1 className="text-3xl">{item.text}</h1>
            <p className="text-чд text-gray-200 mt-2 text-center px-4">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Statistics;
