"use client";

import { motion } from "framer-motion";
import AboutOurStory from "../Components/VissionMission";
import CoreValuesSection from "../Components/CoreValue";


export default function AboutIntroBanner() {
  return (
    <div className="w-full bg-[#181c3a] text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden text-white bg-[#0a0a23]">
      {/* 👇 Animated Gradient Background */}
      <div className="absolute inset-0 z-0 animate-gradient bg-gradient-to-br from-[#0f0f2e] via-[#1f1f3a] to-[#15162b] bg-[length:400%_400%]" />

      {/* 👇 SVG Wave */}
      <div className="absolute bottom-0 left-0 w-full z-10 pointer-events-none">
        <svg
          viewBox="0 0 1440 320"
          className="w-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#7f5af0"
            fillOpacity="0.2"
            d="M0,224L60,192C120,160,240,96,360,90.7C480,85,600,139,720,165.3C840,192,960,192,1080,170.7C1200,149,1320,107,1380,85.3L1440,64V320H0Z"
          />
        </svg>
      </div>

      {/* 👇 Content */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center min-h-[90vh] px-6 py-20">
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          WHO WE ARE?
        </motion.h1>

        <motion.span
          className="w-24 h-1 mt-4 bg-gradient-to-r from-pink-500 to-yellow-400 rounded"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
        ></motion.span>

        <motion.p
          className="mt-6 max-w-3xl text-base md:text-xl font-medium text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Scholars United is the brainchild of seasoned educators reshaping the
          education ecosystem — focusing on students’ inner growth and
          four-dimensional development beyond academics.
        </motion.p>
      </div>
    </section>
      {/* Next Sections */}
      <AboutOurStory />
      <CoreValuesSection />
    </div>
  );
}
