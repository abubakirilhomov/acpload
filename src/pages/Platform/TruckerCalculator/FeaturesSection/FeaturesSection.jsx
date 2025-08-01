import { motion } from "framer-motion";
import { MapPin, DollarSign, Truck } from "lucide-react";

const FeaturesSection = ({ containerVariants, itemVariants }) => {
  const features = [
    {
      title: "Route Planning",
      description: "Plan your routes efficiently to maximize earnings and minimize deadhead miles.",
      icon: MapPin,
    },
    {
      title: "Financial Planning",
      description: "Make informed decisions about which loads to accept based on potential earnings.",
      icon: DollarSign,
    },
    {
      title: "Load Matching",
      description: "Find the best loads that match your preferences and financial goals.",
      icon: Truck,
    },
  ];

  return (
    <div className="container mx-auto py-12 px-4 bg-base-100">
      <motion.div
        className="grid md:grid-cols-3 gap-6"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="card bg-base-100/60 backdrop-blur-sm p-6 rounded-xl hover:shadow-lg transition-shadow"
            variants={itemVariants}
            whileHover={{ y: -5, scale: 1.02 }}
          >
            <div className="flex justify-center mb-4">
              <feature.icon className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-bold text-lg text-center mb-2">{feature.title}</h3>
            <p className="text-base-content/70 text-sm text-center">{feature.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default FeaturesSection;