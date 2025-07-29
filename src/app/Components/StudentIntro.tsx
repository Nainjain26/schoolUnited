"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

export default function WhatStudentEmpowermentMeans() {
  return (
    <section className="relative w-full py-20 px-6 md:px-12 lg:px-20 bg-white overflow-hidden">
      {/* Floating Animated SVG Particles */}
      <svg
        className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none"
        preserveAspectRatio="none"
      >
        <circle cx="5%" cy="10%" r="6" fill="#c4b5fd">
          <animate
            attributeName="cy"
            values="10%;90%;10%"
            dur="10s"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx="90%" cy="20%" r="4" fill="#facc15">
          <animate
            attributeName="cy"
            values="20%;80%;20%"
            dur="12s"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx="50%" cy="5%" r="5" fill="#a78bfa">
          <animate
            attributeName="cy"
            values="5%;85%;5%"
            dur="15s"
            repeatCount="indefinite"
          />
        </circle>
      </svg>

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Side: Infographic/Illustration */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full md:w-1/2 flex justify-center"
        >
          <Image
            src="/student.png"
            alt="Student Journey Visual"
            width={500}
            height={500}
            className=" hover:scale-105 transition-transform duration-300"
          />
        </motion.div>

        {/* Right Side: Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="w-full md:w-1/2"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            What <span className="text-indigo-600">Student Empowerment</span>{" "}
            Means
          </h2>
          <p className="text-gray-700 text-lg mb-4 leading-relaxed">
            Student empowerment is about equipping learners with the mindset,
            skills, and confidence they need to shape their future.
          </p>
          <p className="text-gray-600 mb-3">
            <strong>Why it matters:</strong> Empowered students are more
            engaged, motivated, and resilient — they take ownership of their
            learning.
          </p>
          <p className="text-gray-600 mb-3">
            <strong>How Scolars Unites is different:</strong> We offer deeply
            personalized approaches, mentorship, mental ability enhancement, and
            continuous encouragement.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6"
          >
            <button className="bg-indigo-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-indigo-500 transition duration-300">
              Discover Our Approach
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
