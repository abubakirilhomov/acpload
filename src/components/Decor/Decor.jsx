import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Decor = () => {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMouseX(event.clientX / window.innerWidth - 0.5);
      setMouseY(event.clientY / window.innerHeight - 0.5);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <motion.div
        animate={{
          x: mouseX * 100,
          y: mouseY * 100,
        }}
        transition={{ type: "spring", stiffness: 50, damping: 10 }}
        className="-z-10 absolute top-1/2 left-3/4 w-40 h-40 rounded-full bg-accent/30 blur-3xl"
      ></motion.div>

      <motion.div
        animate={{
          x: -mouseX * 100,
          y: -mouseY * 100,
        }}
        transition={{ type: "spring", stiffness: 50, damping: 10 }}
        className="-z-10 absolute top-1/4 right-3/4 w-40 h-40 rounded-full bg-info/30 blur-3xl"
      ></motion.div>
    </>
  );
};

export default Decor;
