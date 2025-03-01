import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Decor = () => {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMouseX(event.clientX / window.innerWidth - 0.5);
      setMouseY(event.clientY / window.innerHeight - 0.5);
    };

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", checkMobile);
    checkMobile();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  return (
    <>
      <motion.div
        animate={{
          x: mouseX * (isMobile ? 50 : 100),
          y: mouseY * (isMobile ? 50 : 100),
        }}
        transition={{ type: "spring", stiffness: 50, damping: 10 }}
        className={`-z-10 absolute top-1/2 left-3/4 ${
          isMobile ? "w-20 h-20 blur-xl" : "w-40 h-40 blur-3xl"
        } rounded-full bg-info/10`}
      ></motion.div>

      <motion.div
        animate={{
          x: -mouseX * (isMobile ? 50 : 100),
          y: -mouseY * (isMobile ? 50 : 100),
        }}
        transition={{ type: "spring", stiffness: 50, damping: 10 }}
        className={`-z-10 absolute top-1/4 right-3/4 ${
          isMobile ? "w-20 h-20 blur-xl" : "w-40 h-40 blur-3xl"
        } rounded-full bg-info/20`}
      ></motion.div>
    </>
  );
};

export default Decor;
