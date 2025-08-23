import React from "react";
import { IoPersonAddSharp } from "react-icons/io5";
import { motion } from "framer-motion";
import Button from "../../../components/Button/Button";
import img from "/images/about-us.png";
import Decor from "../../../components/Decor/Decor";
import Section1 from "./Section1/Section1"
import Section2 from "./Section2/Section2";
import Section3 from "./Section3/Section3";
import Section4 from "./Section4/Section4";
import Section5 from "./Section5/Section5";
import Section6 from "./Section6/Section6";
import Section8 from "./Section8/Section8";
import Section7 from "./Section7/Section7";

const AboutUs = () => {
  return (
    <main>
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Section5/>
      <Section6/>
      <Section7/>
      <Section8/>
    </main>
  );
};

export default AboutUs;
