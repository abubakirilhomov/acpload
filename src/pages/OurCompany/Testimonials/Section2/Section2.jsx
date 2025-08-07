import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import img from "../../../../assets/testimodnials.jpg";

const Section2 = () => {
  const { t } = useTranslation();

  const trustPoints = [
    {
      title: t("testimonials-and-reviews.why-trust.1.title"),
      description: t("testimonials-and-reviews.why-trust.1.description"),
    },
    {
      title: t("testimonials-and-reviews.why-trust.2.title"),
      description: t("testimonials-and-reviews.why-trust.2.description"),
    },
    {
      title: t("testimonials-and-reviews.why-trust.3.title"),
      description: t("testimonials-and-reviews.why-trust.3.description"),
    },
    {
      title: t("testimonials-and-reviews.why-trust.4.title"),
      description: t("testimonials-and-reviews.why-trust.4.description"),
    },
  ];

  return (
    <section className="bg-slate-700 my-20 px-4 md:px-8">
      <div className="md:flex md:p-10 py-10 md:py-0 justify-between items-center">
        {/* Left Column - Text Content */}
        <motion.div
          className="space-y-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.2 }}
        >
          {/* Heading */}
          <motion.p
            className="text-3xl text-center md:text-5xl font-bold text-blue-300 leading-tight"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {t("testimonials-and-reviews.why-trust.title")}
          </motion.p>

          {/* Trust Points */}
          <div className="space-y-6">
            {trustPoints.map((point, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex-shrink-0 mt-1">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div className="text-white">
                  <span className="font-semibold text-lg">{point.title}</span>
                  <span className="text-gray-200 ml-1">
                    {point.description}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Column - Image */}
        <motion.div
          className="relative mt-10 md:mt-0 md:ml-10"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="relative overflow-hidden rounded-lg max-w-md">
            <img
              src={img}
              alt="Professional team collaborating at a desk in a modern office environment"
              className="object-cover w-full h-full rounded-lg"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Section2;
