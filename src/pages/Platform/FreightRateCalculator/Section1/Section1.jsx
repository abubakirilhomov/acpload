import React from "react";
import calcImg from "../../../../assets/freight-calc.jpeg";
import { Link } from "react-router-dom";

const Section1 = () => {
  return (
    <div className="flex items-center flex-col mt-10">
      <div>
        <img src={calcImg} alt="Freight Calculator" />
      </div>

      <div className="flex flex-col mt-10 mb-10">
        <p className="text-2xl text-start mb-5">Get Started Now!</p>

        <p className="max-w-[70%] text-lg">
          Ready to take control of your freight pricing? Enter your details
          above and see your estimated rate instantly. Not a member yet?
          <Link className="text-info underline" to={"/register"}>
            SIGN UP FOR FREE
          </Link>
          to save your calculations and access additional features on our platform.
        </p>
      </div>
    </div>
  );
};

export default Section1;
