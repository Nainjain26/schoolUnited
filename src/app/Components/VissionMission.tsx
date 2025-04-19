"use client";
import { FaSeedling, FaChalkboardTeacher, FaGlobe, FaBullseye } from "react-icons/fa";
import { motion } from "framer-motion";
import React from "react";

export default function AboutOurStory() {
  const storyPoints = [
    {
      icon: <FaSeedling className="text-green-600 text-3xl" />,
      title: "Origin",
      text: "Scholars United was founded to eliminate inequality in education and uplift communities through school empowerment.",
      bg: "bg-purple-100"
    },
    {
      icon: <FaChalkboardTeacher className="text-indigo-600 text-3xl" />,
      title: "Purpose",
      text: "We aim to mentor students, support educators, and nurture schools with the tools and guidance they need.",
      bg: "bg-indigo-100"
    },
    {
      icon: <FaGlobe className="text-blue-600 text-3xl" />,
      title: "Mission",
      text: "To empower schools and personalize student education using creative, accessible learning solutions.",
      bg: "bg-indigo-100"
    },
    {
      icon: <FaBullseye className="text-yellow-600 text-3xl" />,
      title: "Vision",
      text: "A future where quality education is a reality for every student regardless of background or geography.",
      bg: "bg-purple-200"
    }
  ];

  // Animation variants for cards
  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: (i:number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, delay: i * 0.2, ease: "easeOut" }
    })
  };

  // SVG animation variants
  const svgVariants = {
    animate: {
      scale: [1, 1.02, 1],
      transition: { duration: 20, repeat: Infinity, ease: "easeInOut" }
    }
  };

  // Particle animation variants
  const particleVariants = {
    animate: (i:number) => ({
      y: [0, -20, 0],
      opacity: [0.3, 0.6, 0.3],
      transition: {
        duration: 3 + i * 0.5,
        repeat: Infinity,
        ease: "easeInOut",
        delay: i * 0.2
      }
    })
  };

  return (
    <section className="relative py-28 px-4 md:px-20 overflow-hidden">
      {/* SVG Background Animation */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full opacity-15 z-0"
        variants={svgVariants}
        animate="animate"
      >
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 900"
          preserveAspectRatio="xMidYMid slice"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#4f46e5', stopOpacity: 0.8 }} />
              <stop offset="100%" style={{ stopColor: '#06b6d4', stopOpacity: 0.8 }} />
            </linearGradient>
          </defs>
          <g>
            {/* Gradient Wave */}
            <motion.path
              d="M0 700 Q360 650 720 700 T1440 700 L1440 900 L0 900 Z"
              fill="url(#gradient)"
              animate={{ d: [
                "M0 700 Q360 650 720 700 T1440 700 L1440 900 L0 900 Z",
                "M0 700 Q360 750 720 700 T1440 700 L1440 900 L0 900 Z"
              ] }}
              transition={{ duration: 8, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
            />
            {/* Floating Hexagons */}
            <motion.path
              d="M200 200 L230 180 L260 200 L260 240 L230 260 L200 240 Z"
              fill="none"
              stroke="#10b981"
              strokeWidth="1"
              animate={{ y: [-20, 20], rotate: [0, 60] }}
              transition={{ duration: 6, repeat: Infinity, repeatType: "reverse" }}
            />
            <motion.path
              d="M1000 400 L1030 380 L1060 400 L1060 440 L1030 460 L1000 440 Z"
              fill="none"
              stroke="#f59e0b"
              strokeWidth="2"
              animate={{ y: [20, -20], rotate: [60, 0] }}
              transition={{ duration: 7, repeat: Infinity, repeatType: "reverse" }}
            />
            {/* Glowing Particles */}
            {[...Array(5)].map((_, i) => (
              <motion.circle
                key={i}
                cx={200 + i * 500}
                cy={300 + Math.sin(i) * 100}
                r="6"
                fill="#8b5cf6"
                custom={i}
                variants={particleVariants}
                animate="animate"
              />
            ))}
          </g>
        </svg>
      </motion.div>

      <div className="relative z-10 grid md:grid-cols-2 gap-16 items-start mt-[-100px]">
        {/* Left Content */}
        <motion.div
          className="pt-20"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-snug mb-6">
            About <span className="text-indigo-600">Scholars United</span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg mb-5">
            We began with a mission to transform education for both institutions and learners. Today, we partner with schools to unlock growth and guide students with customized support.
          </p>
          <p className="text-gray-600 text-base md:text-lg mb-4">
            We believe in nurturing the future with passion, persistence, and purpose—making education accessible and empowering every child to shine.
          </p>
          <p className="italic text-green-700 font-semibold mt-8 border-l-4 border-green-400 pl-4">
            &ldquo;We believe every student and school deserves a chance to thrive.&rdquo;
          </p>
        </motion.div>

        {/* Right Story Cards in 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-gradient-to-br from-white via-sky-100 to-sky-200 overflow-hidden px-6 py-14 rounded-e-full">
          {storyPoints.map((point, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
              className={`flex gap-4 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 ${point.bg} border border-gray-100`}
            >
              <div className="flex-shrink-0">
                {point.icon}
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-1">{point.title}</h4>
                <p className="text-gray-600 text-sm md:text-base">{point.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}