import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Section8 = () => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({ name: '', email: '', message: '' });
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const contactVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.2, ease: "easeOut" },
    }),
  };

  const formVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.2 + 0.6, ease: "easeOut" },
    }),
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 1.2, ease: "easeOut" } },
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-900 via-slate-800 to-gray-900">
      <div className="absolute inset-0 opacity-20">
        <motion.div
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800"><rect fill="%23374151" width="1200" height="800"/><g opacity="0.3"><rect x="800" y="300" width="300" height="150" fill="%23ef4444" rx="20"/><rect x="850" y="200" width="200" height="300" fill="%23ffffff" rx="10"/><circle cx="950" cy="500" r="30" fill="%23000000"/><circle cx="900" cy="500" r="30" fill="%23000000"/></g></svg>')`
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1.5 } }}
        ></motion.div>
      </div>

      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        <motion.div
          className="bg-gray-800 bg-opacity-90 backdrop-blur-sm rounded-lg shadow-2xl p-8 max-w-6xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Side */}
            <div className="space-y-8">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={titleVariants}
              >
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  {t("about-us.contact-us.title")}
                </h2>
                <p className="text-xl text-gray-300">
                  {t("about-us.contact-us.description")}
                </p>
              </motion.div>

              <hr className="border-gray-600" />

              <div className="space-y-8">
                {[
                  { icon: <MapPin className="w-6 h-6 text-white" />, title: t("about-us.contact-us.office-address"), content: "38511 S Hampton Dr<br />Frankford, DE 19945 USA" },
                  { icon: <Phone className="w-6 h-6 text-white" />, title: t("about-us.contact-us.phone-number"), content: "+1 408-676-5535" },
                  { icon: <Mail className="w-6 h-6 text-white" />, title: t("about-us.contact-us.email-address"), content: "info@acploads.com" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-4"
                    custom={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={contactVariants}
                  >
                    <motion.div
                      className="w-12 h-12 bg-brand rounded-full flex items-center justify-center"
                      whileHover={{ scale: 1.2, rotate: 10, transition: { duration: 0.3 } }}
                    >
                      {item?.icon}
                    </motion.div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">
                        {item?.title}
                      </h4>
                      <p className="text-gray-300" dangerouslySetInnerHTML={{ __html: item?.content }} />
                    </div>
                  </motion.div>
                ))}
                <hr className="border-gray-600" />
              </div>
            </div>

            {/* Right Side */}
            <div className="space-y-6">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={titleVariants}
              >
                <h3 className="text-2xl font-bold text-white mb-4">
                  {t("about-us.contact-us.get-in-touch")}
                </h3>
                <p className="text-gray-300 mb-8">
                  {t("about-us.contact-us.get-in-touch-description")}
                </p>
              </motion.div>

              <div className="space-y-6">
                {[
                  { label: t("btn-input-texts.full-name"), name: "name", type: "text", placeholder: "Enter your Name" },
                  { label: t("btn-input-texts.email"), name: "email", type: "email", placeholder: "Enter a valid email address" },
                  { label: t("btn-input-texts.how-can-we-help"), name: "message", type: "textarea", placeholder: "Tell us how we can help you..." },
                ].map((field, index) => (
                  <motion.div
                    key={index}
                    custom={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={formVariants}
                  >
                    <label className="block text-white font-medium mb-2">{field.label}</label>
                    {field.type === "textarea" ? (
                      <textarea
                        name={field.name}
                        value={formData[field.name]}
                        onChange={handleInputChange}
                        rows="5"
                        placeholder={field.placeholder}
                        className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand text-gray-900 resize-vertical"
                      />
                    ) : (
                      <input
                        type={field.type}
                        name={field.name}
                        value={formData[field.name]}
                        onChange={handleInputChange}
                        placeholder={field.placeholder}
                        className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand text-gray-900"
                      />
                    )}
                  </motion.div>
                ))}

                <motion.button
                  onClick={handleSubmit}
                  className="w-full bg-brand hover:bg-[#0986da] text-white font-semibold py-3 px-6 rounded-lg shadow-lg"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={buttonVariants}
                  whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                  whileTap={{ scale: 0.95 }}
                >
                    {t("btn-input-texts.submit")}
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Section8;