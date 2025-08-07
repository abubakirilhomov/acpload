import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import img from "../../../../assets/user-icon.jpg";

const Section4 = () => {
  const { t } = useTranslation();

  const leaders = [
    {
      id: 1,
      name: t("leadership.leadership-profiles.1.title"),
      title: t("leadership.leadership-profiles.1.profession"),
      description: t("leadership.leadership-profiles.1.description"),
      image: img,
    },
    {
      id: 2,
      name: t("leadership.leadership-profiles.2.title"),
      title: t("leadership.leadership-profiles.2.profession"),
      description: t("leadership.leadership-profiles.2.description"),
      image: img,
    },
    {
      id: 3,
      name: t("leadership.leadership-profiles.3.title"),
      title: t("leadership.leadership-profiles.3.profession"),
      description: t("leadership.leadership-profiles.3.description"),
      image: img,
    },
    {
      id: 4,
      name: t("leadership.leadership-profiles.4.title"),
      title: t("leadership.leadership-profiles.4.profession"),
      description: t("leadership.leadership-profiles.4.description"),
      image: img,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const hoverVariants = {
    hover: {
      y: -10,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="py-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h2 className="text-5xl font-bold mb-4">
          {t("leadership.leadership-profiles.title")}
        </h2>
        <div className="w-24 h-1 bg-info mx-auto"></div>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {leaders.map((leader) => (
          <motion.div
            key={leader.id}
            variants={cardVariants}
            whileHover="hover"
            className="card bg-info text-white shadow-xl hover:shadow-2xl cursor-pointer"
          >
            <motion.div
              variants={hoverVariants}
              className="card-body items-center text-center p-8"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
                className="avatar mb-6"
              >
                <div className="w-32 h-32 rounded-full ring-4 ring-blue-300 ring-offset-4 ring-offset-transparent">
                  <img
                    src={leader.image || "/placeholder.svg"}
                    alt={leader.name}
                    className="rounded-full object-cover w-full h-full"
                  />
                </div>
              </motion.div>

              <motion.h3
                className="card-title text-2xl font-bold mb-2 text-center justify-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                {leader.name}
              </motion.h3>

              <motion.p
                className="text-blue-200 font-semibold mb-4 text-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                {leader.title}
              </motion.p>

              <motion.p
                className="text-blue-100 leading-relaxed text-center"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                {leader.description}
              </motion.p>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Section4;
