import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import bgImg from "../../../../assets/leadership-hero.webp";

const LeaderboardHero = () => {
  const navigate = useNavigate();
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
          <div className="bg-info py-5 px-2">
            <p>Leadership</p>

            <h1 className="text-6xl ">Meet the Team Behind ACP Loads</h1>
            <p className="max-w-[80%] mx-auto mt-5">
              At ACP Loads, leadership means more than managing a platform—it
              means inspiring innovation, championing trust, and driving the
              freight industry forward. Our leadership team brings together
              decades of experience in logistics, technology, and customer
              service. We believe that by combining industry knowledge with a
              passion for digital transformation, we can solve the biggest
              challenges in US trucking.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LeaderboardHero;
