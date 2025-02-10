import React from "react";
import { motion } from "framer-motion";
import { FaShippingFast, FaWarehouse, FaGlobeAmericas, FaCheckCircle, FaUserCircle } from "react-icons/fa";
import Decor from "../../components/Decor/Decor";

const services = [
  {
    title: "Экспресс-доставка",
    description: "Молниеносная доставка грузов по всей стране и за ее пределы.",
    icon: <FaShippingFast className="text-4xl text-info" />,
  },
  {
    title: "Складское хранение",
    description: "Надежное хранение ваших товаров в наших современных складах.",
    icon: <FaWarehouse className="text-4xl text-info" />,
  },
  {
    title: "Международные перевозки",
    description: "Осуществляем логистику в более чем 100 стран мира.",
    icon: <FaGlobeAmericas className="text-4xl text-info" />,
  },
];

const benefits = [
  "Надежные перевозки без задержек",
  "Гарантия безопасности грузов",
  "Поддержка 24/7",
  "Выбор маршрутов на ваш вкус",
];

const reviews = [
  {
    name: "Алексей Иванов",
    text: "Отличная логистическая компания! Доставили груз быстро и без проблем.",
  },
  {
    name: "Марина Кузнецова",
    text: "Складское хранение на высшем уровне, очень довольна сервисом!",
  },
];

const Services = () => {
  return (
    <div className="relative container mx-auto max-w-[80%] py-20">
      <Decor />
      <h1 className="text-4xl font-bold text-center mb-12">Наши Услуги</h1>
      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-6 shadow-xl text-center hover:scale-105 transition-transform duration-300"
          >
            <div className="mb-4">{service.icon}</div>
            <h2 className="text-2xl font-semibold mb-2">{service.title}</h2>
            <p className="text-gray-200">{service.description}</p>
          </motion.div>
        ))}
      </div>
      
      {/* Steps */}
      <div className="py-10">
        <ul className="steps w-full">
          <li className="step step-primary">Оформление заказа</li>
          <li className="step step-primary">Отправка груза</li>
          <li className="step step-primary">Доставка получателю</li>
        </ul>
      </div>
      
      {/* Why Choose Us */}
      <div className="py-16 text-center">
        <h2 className="text-3xl font-bold mb-8">Почему выбирают нас?</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="flex items-center gap-4 p-4 border border-white/20 rounded-lg bg-white/10 backdrop-blur-md"
            >
              <FaCheckCircle className="text-green-400 text-2xl" />
              <p className="text-gray-200">{benefit}</p>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Reviews */}
      <div className="py-16 text-center">
        <h2 className="text-3xl font-bold mb-8">Отзывы клиентов</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="p-6 bg-white/10 border border-white/20 rounded-xl backdrop-blur-md shadow-lg"
            >
              <FaUserCircle className="text-4xl text-gray-400 mb-4" />
              <p className="text-gray-200 italic">“{review.text}”</p>
              <h4 className="text-lg font-semibold mt-2">— {review.name}</h4>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Call To Action */}
      <div className="text-center py-16">
        <h2 className="text-3xl font-bold mb-4">Готовы к сотрудничеству?</h2>
        <p className="text-gray-200 mb-6">Свяжитесь с нами и начните работать уже сегодня!</p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="px-6 py-3 bg-primary text-white rounded-lg shadow-lg hover:bg-primary/80 transition"
        >
          Оставить заявку
        </motion.button>
      </div>
    </div>
  );
};

export default Services;
