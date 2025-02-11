import React from "react";
import { IoPersonAddSharp } from "react-icons/io5";
import { motion } from "framer-motion";
import Button from "../../components/Button/Button";
import img from "/images/about-us.png";
import Decor from "../../components/Decor/Decor";
import About from "../../components/About/About";

const AboutUs = () => {
  return (
    <div className="container pb-20 pt-10 lg:pt-0 max-w-[85%] mx-auto flex flex-col justify-center items-center min-h-screen">
      <Decor/>
      <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-4xl lg:py-10 font-bold text-center text-white"
        >
          About Us
        </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="p-5 rounded-xl shadow-lg"
      >

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="my-10 text-lg text-gray-300 text-center"
        >
          ACP Loads предлагает быструю и легкую платформу Loadboard для
          грузоотправителей, брокеров, перевозчиков и владельцев-операторов в
          логистической отрасли США. Наша миссия — помочь им сделать их работу
          легкой и быстрой с помощью продуманной платформы.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="p-5 bg-white/20 backdrop-blur-md rounded-lg mx-auto lg:max-w-[50%] shadow-md"
        >
          <img src={img} alt="acploads" className="rounded-md" />
        </motion.div>
        <About/>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="my-10 text-lg text-gray-300 text-center"
        >
          Давайте зарегистрируемся сегодня, чтобы узнать, насколько на самом
          деле прост наш процесс!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex justify-center"
        >
          <Button text={"Регистрация бесплатна"} icon={<IoPersonAddSharp />} />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutUs;
