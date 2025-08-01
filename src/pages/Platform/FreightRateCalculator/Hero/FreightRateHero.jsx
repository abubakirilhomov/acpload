import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import bgImg from "../../../../assets/freaight-hero.jpeg";

const FreightRateHero = () => {
  const navigate = useNavigate();
  return (
    <div
      className="relative text-white min-h-[70vh] bg-cover bg-center"
      style={{
        backgroundImage: `url(${bgImg})`,
      }}
    >
      <div className="absolute inset-0 bg-info/20 backdrop-blur-md"></div>

      <div className="container mx-auto relative z-10 py-12 px-4">
        <motion.div
          className="text-center max-w-3xl lg:mt-20 mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl text-white font-bold mb-6">
            Estimate Your Freight Rates Instantly
          </h1>
          <p className="text-lg md:text-xl text-white mb-8">
            Unlock accurate freight cost estimates in seconds with our advanced
            Freight Rate Calculator. Designed for carriers, brokers, and
            owner-operators, our tool factors in key variables like distance,
            load weight, and fuel costs to help you plan more efficiently and
            negotiate better rates. Get started now and see how competitive your
            pricing can be!
          </p>
          <motion.button
            className="btn btn-outline text-white border-2 btn-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/login")}
          >
            Post Loads Now
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default FreightRateHero;
