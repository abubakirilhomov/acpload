import { Quote, User } from "lucide-react";
import { motion } from "framer-motion";

const Section3 = () => {
  const testimonials = [
    {
      quote:
        "ACP Loads makes it so easy to find hot loads and get paid quickly. Their rating system helps us choose who we want to work with.",
      category: "Carrier Testimonials",
      author: {
        name: "Michael R.",
        role: "Owner-Operator",
        location: "",
      },
    },
    {
      quote:
        "The user interface is top-notch and the support team actually listens to feedback.",
      category: "Carrier Testimonials",
      author: {
        name: "Brittany C.",
        role: "Fleet Carrier",
        location: "Illinois",
      },
    },
    {
      quote:
        "Posting loads is fast and seamless, and the dispatcher network brings quality carriers directly to our shipments.",
      category: "Broker Testimonials",
      author: {
        name: "Jason S.",
        role: "Freight Broker",
        location: "California",
      },
    },
    {
      quote:
        "ACP Loads has helped our brokerage expand our reach and maintain great relationships with both shippers and carriers.",
      category: "Broker Testimonials",
      author: {
        name: "Anna L.",
        role: "Logistics Coordinator",
        location: "Georgia",
      },
    },
    {
      quote:
        "We reduced empty miles and improved on-time deliveries by using ACP Loads for all our freight posting needs.",
      category: "Shipper Testimonials",
      author: {
        name: "Scott T.",
        role: "Shipper",
        location: "Ohio",
      },
    },
    {
      quote:
        "As a dispatcher, ACP Loads gives me every tool I need to move freight fast—no MC required. Highly recommended!",
      category: "Carrier Dispatcher Testimonials",
      author: {
        name: "Dave P.",
        role: "Carrier Dispatcher",
        location: "New York",
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
            Real Stories, Real Impact
          </h2>
          <p className="text-white text-lg md:text-xl">
            Carrier, Broker, Shipper, Owner-Operator and Dispatcher Testimonials
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
                "{testimonial.quote}"
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
                    {testimonial.author.location && `, ${testimonial.author.location}`}
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
