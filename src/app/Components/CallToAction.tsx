"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

export default function CallToActionSection() {
  return (
    <section className="relative w-full py-16 px-6 md:px-12 lg:px-16 overflow-hidden bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-400">
      {/* Animated Blobs */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
        className="absolute top-[-60px] left-[-60px] w-96 h-96 bg-indigo-400 rounded-full blur-3xl"
      ></motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", delay: 1 }}
        className="absolute bottom-[-60px] right-[-60px] w-96 h-96 bg-pink-400 rounded-full blur-3xl"
      ></motion.div>

      {/* SVG Particle Background */}
      <svg className="absolute inset-0 w-full h-full z-0 opacity-30" preserveAspectRatio="none">
        <defs>
          <radialGradient id="particleGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </radialGradient>
        </defs>
        {[...Array(60)].map((_, i) => (
          <circle
            key={i}
            cx={Math.random() * 100 + "%"}
            cy={Math.random() * 100 + "%"}
            r={Math.random() * 3 + 1}
            fill="url(#particleGradient)"
          >
            <animate
              attributeName="cy"
              values="0%;100%"
              dur={`${5 + Math.random() * 5}s`}
              repeatCount="indefinite"
            />
          </circle>
        ))}
      </svg>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative z-10 text-center max-w-4xl mx-auto"
      >
        <motion.h2
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "backOut" }}
          className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight tracking-tight drop-shadow-2xl"
        >
          Ready to <span className="text-yellow-300">Elevate</span> Your School?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-white/90 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Let’s partner to transform your institution’s future through impactful support, modern innovation, and a growth-first vision.
        </motion.p>

        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 15 }}
        >
          <Link href="/contact">
            <button className="bg-yellow-400 text-gray-900 font-semibold py-3 px-10 rounded-full shadow-xl hover:bg-yellow-300 hover:shadow-2xl transition duration-300 text-lg">
              Talk to Us
            </button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
