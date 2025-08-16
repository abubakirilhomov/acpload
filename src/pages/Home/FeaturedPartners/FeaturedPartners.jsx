import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import img1 from "/images/osrm_logo.svg";
import img2 from "/images/google2.png";
import img3 from "/images/github3.png";
import img4 from "/images/digital-ocean4.png";

const FeaturedPartners = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("featured-partners-section");
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const partners = [
    {
      image: img1,
      title: t("main.futured-partners.osrm"),
      link: "/partners/osrm",
    },
    {
      image: img2,
      title: t("main.futured-partners.google"),
      link: "/partners/google",
    },
    {
      image: img3,
      title: t("main.futured-partners.github"),
      link: "/partners/github",
    },
    {
      image: img4,
      title: t("main.futured-partners.digitalocean"),
      link: "/partners/digital-ocean",
    },
  ];

  return (
    <section
      id="featured-partners-section"
      className="container max-w-[85%] mx-auto p-5 space-y-10"
    >
      <motion.h2
        className="sm:text-4xl text-3xl font-bold text-center drop-shadow-lg"
        initial={{ opacity: 0, y: -30, scale: 0.9 }}
        animate={isVisible ? { opacity: 1, y: 0, scale: 1 } : {}}
        transition={{ duration: 1 }}
      >
        {t("main.futured-partners.title")}
      </motion.h2>

      <motion.p
        className="text-center text-lg text-white/80"
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : {}}
        transition={{ delay: 0.3, duration: 1 }}
      >
        {t("main.futured-partners.description")}
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {partners.map((partner, index) => (
          <motion.div
            key={index}
            className="relative overflow-hidden card shadow-xl border cursor-pointer border-white/20 
            backdrop-blur-lg p-5 rounded-2xl 
            transition-transform transform hover:scale-105 hover:shadow-2xl"
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={isVisible ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <figure className="p-6 flex justify-center">
              <img
                src={partner.image}
                alt={partner.title}
                className="max-w-[80%] object-contain transition-transform duration-500 hover:scale-110"
              />
            </figure>
            <div className="card-body text-center flex flex-col flex-grow">
              <p className="text-xl font-semibold">{partner.title}</p>
              <div className="mt-auto">
                <Link
                  to={partner.link}
                  className="btn btn-primary w-full transition-all duration-300 hover:scale-105"
                >
                  {t("btn-input-texts.learn-more", "Learn More")}
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedPartners;
