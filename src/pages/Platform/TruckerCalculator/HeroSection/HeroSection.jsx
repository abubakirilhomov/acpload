import { motion } from "framer-motion";
import bgImg from "/images/trucker-calc.png";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const HeroSection = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div
      className="relative min-h-[70vh] bg-cover bg-center"
      style={{
        backgroundImage: `url(${bgImg})`,
      }}
    >
      <div className="absolute inset-0 bg-info/10 backdrop-blur-sm"></div>

      <div className="container mx-auto relative z-10 py-12 px-4">
        <motion.div
          className="text-center max-w-3xl lg:mt-20 mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl text-white font-bold mb-6">
            {t("trucker-calculator.title")}
          </h1>
          <p className="text-lg md:text-xl text-white mb-8">
            {t("trucker-calculator.description")}
          </p>
          <motion.button
            className="btn btn-outline text-white border-2 btn-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/products/loadboard")}
          >
            {t("trucker-calculator.get-started.title")}
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
