import React, { useEffect, useState } from "react";
import { FiBell, FiMessageSquare, FiCheckCircle, FiAlertCircle } from "react-icons/fi";

const Notifications = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 300);
  }, []);

  const data = [
    { icon: <FiBell className="text-6xl mb-4" />, text: "New Notification" },
    { icon: <FiMessageSquare className="text-6xl mb-4" />, text: "New Message" },
    { icon: <FiCheckCircle className="text-6xl mb-4" />, text: "Task Completed" },
    { icon: <FiAlertCircle className="text-6xl mb-4" />, text: "Warning Alert" }
  ];

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className={`text-6xl font-bold text-white text-center mb-12 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        Smart Matching & Instant Notifications
      </h1>
      <div className="grid grid-cols-2 gap-8">
        {data.map((item, index) => (
          <div
            key={index}
            style={{ animationDelay: `${index * 0.5}s` }}
            className={`w-120 h-64 border-2 border-white bg-transparent flex flex-col items-center justify-center font-bold text-white rounded-4xl transition-transform duration-1000 ease-out transform ${isVisible ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`}
          >
            {item.icon}
            <h1 className=" text-2xl">{item.text}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notifications;
