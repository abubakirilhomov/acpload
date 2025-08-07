import { Quote, User } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Section3 = () => {
  const { t } = useTranslation();

  const testimonials = [
    {
      quote: t("testimonials-and-reviews.real-stories.card-1.text"),
      category: t("testimonials-and-reviews.real-stories.card-1.sub-text"),
      author: {
        name: t("testimonials-and-reviews.real-stories.card-1.signature").split(", ")[0],
        role:
          t("testimonials-and-reviews.real-stories.card-1.signature").split(", ")[1] || "Owner-Operator",
        location: "",
      },
    },
    {
      quote: t("testimonials-and-reviews.real-stories.card-2.text"),
      category: t("testimonials-and-reviews.real-stories.card-2.sub-text"),
      author: {
        name: t("testimonials-and-reviews.real-stories.card-2.signature").split(", ")[0],
        role: t("testimonials-and-reviews.real-stories.card-2.signature").split(", ")[1],
        location:
          t("testimonials-and-reviews.real-stories.card-2.signature").split(", ")[2] || "Illinois",
      },
    },
    {
      quote: t("testimonials-and-reviews.real-stories.card-3.text"),
      category: t("testimonials-and-reviews.real-stories.card-3.sub-text"),
      author: {
        name: t("testimonials-and-reviews.real-stories.card-3.signature").split(", ")[0],
        role: t("testimonials-and-reviews.real-stories.card-3.signature").split(", ")[1],
        location:
          t("testimonials-and-reviews.real-stories.card-3.signature").split(", ")[2] || "California",
      },
    },
    {
      quote: t("testimonials-and-reviews.real-stories.card-4.text"),
      category: t("testimonials-and-reviews.real-stories.card-4.sub-text"),
      author: {
        name: t("testimonials-and-reviews.real-stories.card-4.signature").split(", ")[0],
        role: t("testimonials-and-reviews.real-stories.card-4.signature").split(", ")[1],
        location:
          t("testimonials-and-reviews.real-stories.card-4.signature").split(", ")[2] || "Georgia",
      },
    },
    {
      quote: t("testimonials-and-reviews.real-stories.card-5.text"),
      category: t("testimonials-and-reviews.real-stories.card-5.sub-text"),
      author: {
        name: t("testimonials-and-reviews.real-stories.card-5.signature").split(", ")[0],
        role: t("testimonials-and-reviews.real-stories.card-5.signature").split(", ")[1],
        location: t("testimonials-and-reviews.real-stories.card-5.signature").split(", ")[2] || "Ohio",
      },
    },
    {
      quote: t("testimonials-and-reviews.real-stories.card-6.text"),
      category: t("testimonials-and-reviews.real-stories.card-6.sub-text"),
      author: {
        name: t("testimonials-and-reviews.real-stories.card-6.signature").split(", ")[0],
        role: t("testimonials-and-reviews.real-stories.card-6.signature").split(", ")[1],
        location:
          t("testimonials-and-reviews.real-stories.card-6.signature").split(", ")[2] || "New York",
      },
    },
  ];

  return (
    <section className="bg-slate-700 py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-blue-300 mb-4">
            {t("testimonials-and-reviews.real-stories.title")}
          </h2>
          <p className="text-white text-lg md:text-xl">
            {t("testimonials-and-reviews.real-stories.sub-title")}
          </p>
        </motion.div>

        {/* Testimonial Cards */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-slate-600 rounded-2xl p-8 flex flex-col justify-between h-full hover:shadow-xl hover:scale-[1.02] transition-all duration-300 ease-in-out"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              {/* Quote Icon */}
              <div className="mb-6">
                <Quote className="w-12 h-12 text-slate-400 fill-current" />
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-white text-lg leading-relaxed mb-8">
                {testimonial.quote}
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <User className="w-6 h-6 text-white" />
                </div>
                <div className="text-white">
                  <div className="font-semibold text-lg">
                    {testimonial.author.name}
                  </div>
                  <div className="text-gray-300 text-sm">
                    {testimonial.author.role}
                    {testimonial.author.location &&
                      `, ${testimonial.author.location}`}
                  </div>
                  <div className="text-blue-300 text-xs mt-1">
                    {testimonial.category}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Section3;
