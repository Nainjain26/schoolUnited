"use client";

import { motion } from "framer-motion";
import { FaPhoneAlt } from "react-icons/fa";

export default function CallActionBanner() {
  return (
    <section className=" relative overflow-hidden bg-gradient-to-br from-indigo-500 via-purple-500 to-indigo-500 text-white py-16 px-6 md:px-16 flex items-center justify-center">
      {/* Background SVG floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="absolute top-10 left-10 w-40 h-40 opacity-20 animate-pulse" fill="none" viewBox="0 0 200 200">
          <circle cx="100" cy="100" r="100" fill="white" />
        </svg>
        <svg className="absolute bottom-10 right-10 w-32 h-32 opacity-20 animate-ping" fill="none" viewBox="0 0 200 200">
          <circle cx="100" cy="100" r="100" fill="white" />
        </svg>
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10 text-center max-w-3xl"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
          Let’s Build Something Great Together
        </h2>
        <p className="text-lg md:text-xl font-light mb-8 max-w-xl mx-auto">
          Get in touch to explore the perfect mix of services tailored to your school.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-2 bg-white text-indigo-700 font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-indigo-100 transition duration-300"
        >
          <FaPhoneAlt /> Talk to Our Team
        </motion.button>
      </motion.div>
    </section>
  );
}
