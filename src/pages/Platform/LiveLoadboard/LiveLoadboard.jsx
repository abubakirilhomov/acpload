import React from 'react';
import bgImg from '/images/liveboard.png';

const LiveLoadboard = () => {
  return (
    <div
      className="w-full h-screen bg-cover bg-center bg-no-repeat shadow-2xl"
      style={{
        backgroundImage: `url(${bgImg})`,
        boxShadow: '20px 25px 50px -12px rgba(0, 0, 0, 0.25)', // Corrected shadow syntax
      }}
    >
      <div className="flex items-center justify-center h-full text-white bg-opacity-50">
        <h1 className="text-3xl font-bold">Live Loadboard Dashboard</h1>
      </div>
    </div>
  );
};

export default LiveLoadboard;
