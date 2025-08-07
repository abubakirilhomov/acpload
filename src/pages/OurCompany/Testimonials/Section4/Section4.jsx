import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Section4 = () => {
  const { t } = useTranslation();

  const reviewSteps = [
    {
      title: t("testimonials-and-reviews.how-our-review.card-1.title"),
      description: t("testimonials-and-reviews.how-our-review.card-1.description"),
    },
    {
      title: t("testimonials-and-reviews.how-our-review.card-2.title"),
      description: t("testimonials-and-reviews.how-our-review.card-2.description"),
    },
    {
      title: t("testimonials-and-reviews.how-our-review.card-3.title"),
      description: t("testimonials-and-reviews.how-our-review.card-3.description"),
    },
    {
      title: t("testimonials-and-reviews.how-our-review.card-4.title"),
      description: t("testimonials-and-reviews.how-our-review.card-4.description"),
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="bg-slate-700 py-16 px-4 my-10 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-blue-300 capitalize">
            {t("testimonials-and-reviews.how-our-review.title")}
          </h2>
        </motion.div>

        {/* Feature Cards Grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {reviewSteps.map((step, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-slate-600 rounded-2xl p-8 text-center"
            >
              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 border-2 border-white rounded-full flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-white text-xl font-semibold mb-4">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Section4;
