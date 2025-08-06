import React from "react";
import calcImg from "../../../../assets/freight-calc.jpeg";
import { Link } from "react-router-dom";

const Section1 = () => {
  return (
    <div className="flex items-center flex-col mt-10">
      <div>
        <img src={calcImg} alt="Freight Calculator" />
      </div>

      <div className="flex flex-col mt-10 mb-10 max-w-[90%] mx-auto">
        <p className="text-2xl md:text-start mb-5 text-center">Get Started Now!</p>

        <p className="md:max-w-[70%] text-lg text-center md:text-start">
          Ready to take control of your freight pricing? Enter your details
          above and see your estimated rate instantly. Not a member yet?
          <Link className="text-info underline" to={"/register"}>
            {` `} SIGN UP FOR FREE {` `}
          </Link>
           to save your calculations and access additional features on our platform.
        </p>
      </div>
    </div>
  );
};

export default Section1;
