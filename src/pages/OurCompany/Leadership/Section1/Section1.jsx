import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import bgImg from "../../../../assets/leadership-hero.webp";
import { useTranslation } from "react-i18next";

const LeaderboardHero = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <div
      className="relative min-h-[70vh] bg-cover bg-center"
      style={{
        backgroundImage: `url(${bgImg})`,
      }}
    >
      <div className="absolute inset-0 bg-info/20 backdrop-blur-xs"></div>

      <div className="container mx-auto relative z-10 py-12 px-4">
        <motion.div
          className="text-center max-w-3xl lg:mt-20 mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-[#3f96d1] rounded-md py-5 px-2">
            <p>{t("leadership.leadership")}</p>

            <h1 className="text-6xl">{t("leadership.title")}</h1>
            <p className="max-w-[80%] mx-auto mt-5">
              {t("leadership.description")}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LeaderboardHero;
