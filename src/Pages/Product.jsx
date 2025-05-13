import React from "react";
import { motion } from "framer-motion";
import { FaPencilRuler, FaDesktop, FaMobileAlt, FaChartLine, FaVideo, FaSearch } from "react-icons/fa"; // Import icons

// Sample product details (replace with actual details and images)
const products = [
  {
    title: "Nexcent Design Suite",
    description:
      "The Nexcent Design Suite is an all-in-one tool for creating stunning web and mobile designs. With intuitive tools and a wide variety of templates, it empowers designers to bring their visions to life faster than ever.",
    icon: <FaPencilRuler size={48} />, // Use icons instead of images
    link: "#",
  },
  {
    title: "Nexcent Web Builder",
    description:
      "The Nexcent Web Builder allows you to create fast, secure, and responsive websites with drag-and-drop functionality. No coding skills required – just design your website and publish it with ease.",
    icon: <FaDesktop size={48} />, // Use icons instead of images
    link: "#",
  },
  {
    title: "Nexcent Mobile App Builder",
    description:
      "Design, build, and deploy mobile apps with the Nexcent Mobile App Builder. Offering seamless integration with all major platforms (iOS, Android), it ensures your app runs smoothly and meets your users' expectations.",
    icon: <FaMobileAlt size={48} />, // Use icons instead of images
    link: "#",
  },
  {
    title: "Nexcent Analytics & Optimization",
    description:
      "Nexcent Analytics & Optimization helps you track user behavior and continuously optimize your website for higher conversion rates. With detailed insights and reports, you can make data-driven decisions to boost performance.",
    icon: <FaChartLine size={48} />, // Use icons instead of images
    link: "#",
  },
  {
    title: "Nexcent Video Studio",
    description:
      "Create professional-grade videos with the Nexcent Video Studio. From promotional videos to product demonstrations, our intuitive tools and templates ensure you produce high-quality content every time.",
    icon: <FaVideo size={48} />, // Use icons instead of images
    link: "#",
  },
  {
    title: "Nexcent SEO & Marketing Hub",
    description:
      "Nexcent SEO & Marketing Hub is a comprehensive tool to boost your online visibility. It integrates SEO, PPC, and content marketing strategies in one place, ensuring maximum ROI and long-term growth.",
    icon: <FaSearch size={48} />, // Use icons instead of images
    link: "#",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Product = () => (
  <section id="products" className="py-16 px-6 sm:px-10 lg:px-[144px] bg-white">
    <h2 className="text-3xl pt-[55px] sm:text-4xl font-semibold text-center mb-6">Our Products</h2>
    <p className="text-sm sm:text-md text-gray-600 text-center mb-10 max-w-3xl mx-auto">
      Discover our suite of products designed to help you create, optimize, and grow your business in the digital world.
    </p>

    {/* Product Grid */}
    <div className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map((product, index) => (
        <motion.div
          key={index}
          custom={index}
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="bg-white p-6 rounded-lg shadow-md text-center flex flex-col justify-between transition-all duration-300 hover:shadow-lg"
        >
          {/* Icon instead of image */}
          <div className="w-full text-green-600 h-48 sm:h-64 flex items-center justify-center mb-4">
            {product.icon}
          </div>
          <h3 className="text-lg sm:text-xl font-semibold mb-4">{product.title}</h3>
          <p className="text-sm sm:text-md text-gray-600 mb-4">{product.description}</p>
          <a
            href={product.link}
            className="text-green-600 font-semibold hover:underline"
          >
            Learn More
          </a>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Product;
