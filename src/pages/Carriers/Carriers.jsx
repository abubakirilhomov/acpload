import React from "react";
import { motion } from "framer-motion";
import { FaTruck, FaRoute, FaHandshake, FaCheckCircle } from "react-icons/fa";
import { MdAttachMoney } from "react-icons/md";
import Decor from "../../components/Decor/Decor";

const solutions = [
  {
    title: "Надежные перевозки",
    description: "Гарантируем быструю и безопасную доставку ваших грузов.",
    icon: <FaTruck className="text-4xl text-primary" />,
  },
  {
    title: "Оптимизация маршрутов",
    description: "Помогаем находить наиболее выгодные маршруты и экономить.",
    icon: <FaRoute className="text-4xl text-primary" />,
  },
  {
    title: "Гибкие партнерские условия",
    description: "Предлагаем прозрачные условия сотрудничества для перевозчиков.",
    icon: <FaHandshake className="text-4xl text-primary" />,
  },
];

const benefits = [
  "Прямые заказы без посредников",
  "Быстрая оплата и поддержка 24/7",
  "Удобные инструменты для отслеживания",
  "Персонализированные условия работы",
];

const SolutionsForCarriers = () => {
  return (
    <div className="relative container mx-auto max-w-[80%] py-20">
      <Decor />
      <h1 className="text-4xl font-bold text-center mb-12">Решения для перевозчиков</h1>
      
      {/* Solutions Section */}
      <div className="space-y-4">
        {solutions.map((solution, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="collapse collapse-arrow bg-base-200 rounded-lg p-4"
          >
            <input type="radio" name="solution-accordion" />
            <div className="collapse-title flex items-center gap-4 text-lg font-semibold">
              {solution.icon} {solution.title}
            </div>
            <div className="collapse-content">
              <p className="text-gray-300">{solution.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Steps Section */}
      <div className="py-10 flex justify-center">
        <ul className="timeline timeline-snap-icon max-w-md timeline-vertical">
          <li>
            <div className="timeline-middle bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center">1</div>
            <div className="timeline-start">Регистрация</div>
          </li>
          <li>
            <div className="timeline-middle bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center">2</div>
            <div className="timeline-start">Выбор маршрута</div>
          </li>
          <li>
            <div className="timeline-middle bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center">3</div>
            <div className="timeline-start">Выполнение заказа</div>
          </li>
          <li>
            <div className="timeline-middle bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center">4</div>
            <div className="timeline-start">Оплата</div>
          </li>
        </ul>
      </div>
      
      {/* Why Choose Us */}
      <div className="py-16 text-center">
        <h2 className="text-3xl font-bold mb-8">Почему работать с нами?</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="alert alert-info shadow-lg flex items-center gap-4"
            >
              <FaCheckCircle className="text-success text-2xl" />
              <span>{benefit}</span>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Call To Action */}
      <div className="text-center py-16">
        <h2 className="text-3xl font-bold mb-4">Готовы к сотрудничеству?</h2>
        <p className="text-gray-200 mb-6">Свяжитесь с нами и начните зарабатывать уже сегодня!</p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="btn btn-primary btn-lg flex items-center gap-2"
        >
          <MdAttachMoney className="text-2xl" /> Присоединиться
        </motion.button>
      </div>
    </div>
  );
};

export default SolutionsForCarriers;
