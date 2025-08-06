import React from 'react';

const Integrated = () => {
  return (
    <div 
      className="relative flex items-center justify-center bg-cover bg-center min-h-screen w-full overflow-x-hidden" 
      style={{ backgroundImage: "url('https://www.trucknews.com/wp-content/uploads/2020/08/truck-freight.jpg')" }}
    >
      <div className="relative w-full h-screen flex items-center justify-center text-white text-2xl font-bold bg-black bg-opacity-50 p-6">
        <img
          src="https://credotrans.ru/wp-content/uploads/2020/11/container_owner_new.jpg"
          alt="Freight Image"
          className="absolute inset-0 w-full h-full object-cover brightness-50"
        />
        <div className="relative text-center z-10 max-w-screen-xl">
          <p className="text-5xl text-white">Integrated Ratings & Reviews System</p>
          <p className="text-white text-xl mt-6">
            Build Trust & Credibility:
            <br />• Transparent Feedback: Carriers, brokers, shippers, and dispatchers can rate and review each other based on criteria such as communication, service quality, and punctuality.
            <br />• Reputation Management: Positive ratings help build a trustworthy profile, attracting more business opportunities.
            <br /><br />
            Community-Driven Improvement:
            <br />• Continuous Feedback: Use reviews to improve your service and foster long-term partnerships within our community.
            <br />• User Accountability: Our system promotes accountability, ensuring every participant upholds high standards.
          </p>

          <p className="text-3xl text-white">Secure and User-Friendly Interface</p>
          <p className="text-white text-xl mt-6">
            Intuitive Design:
            <br />• Easy Navigation: Our platform is designed with a clean, modern interface that makes load management simple.
            <br />• Centralized Dashboard: Access all your posts, searches, and communications in one convenient hub.
            <br /><br />
            Data Security:
            <br />• Robust Protection: We prioritize the security of your information with state-of-the-art data protection measures.
            <br />• Reliable Access: Enjoy a secure experience while managing your freight and load operations seamlessly.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Integrated;
