import React from 'react';
import { FaPencilRuler, FaCode, FaBullhorn, FaMobileAlt, FaChartLine, FaVideo } from 'react-icons/fa';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Brand Strategy & Design',
    icon: <FaPencilRuler className="text-5xl text-green-600 mb-4" />,
    description:
      'We create memorable brand identities that resonate with your audience and elevate your business image.',
  },
  {
    title: 'Website Development',
    icon: <FaCode className="text-5xl text-green-600 mb-4" />,
    description:
      'Our team builds fast, secure, and responsive websites using the latest web technologies.',
  },
  {
    title: 'Digital Marketing',
    icon: <FaBullhorn className="text-5xl text-green-600 mb-4" />,
    description:
      'From SEO to paid ads, we help you attract and convert high-quality leads through smart digital strategies.',
  },
  {
    title: 'Mobile App Design',
    icon: <FaMobileAlt className="text-5xl text-green-600 mb-4" />,
    description:
      'We design mobile apps that offer great UX, performance, and reliability across all devices.',
  },
  {
    title: 'Analytics & Optimization',
    icon: <FaChartLine className="text-5xl text-green-600 mb-4" />,
    description:
      'Data-driven strategies to track user behavior and continuously improve conversion and engagement rates.',
  },
  {
    title: 'Content & Video Production',
    icon: <FaVideo className="text-5xl text-green-600 mb-4" />,
    description:
      'Professional content creation services including promotional videos, animations, and creative storytelling.',
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const Services = () => {
  return (
    <section id="services" className="bg-gray-50 py-16 px-6 sm:px-10 lg:px-[144px] min-h-screen">
      <div className="text-center mb-16">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl pt-[55px] sm:text-4xl font-bold mb-4"
        >
          Our Services
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-md"
        >
          We are a full-service creative agency helping brands grow through design, technology, and marketing.
        </motion.p>
      </div>

      {/* Services Grid */}
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="bg-white p-6 sm:p-8 rounded-2xl shadow-md hover:shadow-lg transition duration-300"
          >
            <div className="flex flex-col items-center text-center">
              {service.icon}
              <h3 className="text-lg sm:text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm sm:text-md">{service.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
