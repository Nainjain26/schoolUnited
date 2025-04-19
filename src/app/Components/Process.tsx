"use client";
import React from "react";
import { motion } from "framer-motion";

export default function ProcessSteps() {
  const steps = [
    {
      number: "01",
      title: "School Onboarding",
      description: "We assess school needs for a strong base.",
      percent: "0%",
      color: "from-cyan-200 via-cyan-300 to-cyan-500",
      shape: "hexagon"
    },
    {
      number: "02",
      title: "Student Engagement",
      description: "Personalized learning empowers potential.",
      percent: "50%",
      color: "from-indigo-200 via-indigo-300 to-indigo-500",
      shape: "octagon"
    },
    {
      number: "03",
      title: "Program Implementation",
      description: "Tailored programs support outcomes.",
      percent: "75%",
      color: "from-blue-200 via-blue-300 to-blue-500",
      shape: "diamond"
    },
    {
      number: "04",
      title: "Sustainable Impact",
      description: "Evaluation ensures lasting change.",
      percent: "100%",
      color: "from-gray-500 via-gray-600 to-gray-700",
      shape: "hexagon"
    }
  ];

  // Animation variants
  const headingVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  const stepVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: (i:number) => ({
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { duration: 0.8, delay: i * 0.2, ease: "easeOut" }
    })
  };

  const cardHover = {
    scale: 1.1,
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
    rotate: 5,
    transition: { duration: 0.4, ease: "easeInOut" }
  };

  const contentHover = {
    scale: 1.02,
    backgroundColor: "#e5e7eb",
    transition: { duration: 0.3, ease: "easeInOut" }
  };

  const shapeStyles = {
    hexagon: "clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
    octagon: "clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
    diamond: "clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)"
  };

  return (
    <section className="py-14 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={headingVariants}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-600 tracking-wide">
            {Array.from("Our Process").map((letter, index) => (
              <motion.span key={index} variants={letterVariants} className="inline-block">
                {letter}
              </motion.span>
            ))}
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-4 text-gray-600 font-semibold text-base md:text-lg max-w-2xl mx-auto"
          >
            Discover how Scholar Unites transforms education through a structured, impactful approach.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1  md:grid-cols-2 gap-4 lg:gap-2">
          {/* Left Side: Step Cards */}
          <div className="grid grid-cols-2 bg-cover bg-center bg-black gap-0"
          style={{
            backgroundImage: "url('/download.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "relative"
          }}
          >
            {steps.map((step, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={stepVariants}
                initial="hidden"
                whileInView="visible"
                whileHover={cardHover}
                viewport={{ once: true }}
                className="w-28 h-28 flex items-center justify-center"
                style={{ ...(shapeStyles[step.shape as keyof typeof shapeStyles] && { clipPath: shapeStyles[step.shape as keyof typeof shapeStyles] }) }}
              >
                <div
                  className={`w-full h-full bg-gradient-to-br ${step.color} p-2 flex flex-col justify-between rounded-lg overflow-hidden shadow-md transform perspective-500 relative after:content-[''] after:absolute after:inset-0 after:bg-white after:opacity-10 after:blur-sm`}
                >
                  <div className="flex justify-between items-start z-10">
                    <motion.span
                      className="text-lg md:text-xl font-bold text-white drop-shadow-md"
                      animate={{ rotate: [0, 5, 0], scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                      STEP {step.number}
                    </motion.span>
                    <motion.span
                      className="text-xs md:text-sm font-semibold t bg-white bg-opacity-20 px-1 py-0.5 rounded-full"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                      {step.percent}
                    </motion.span>
                  </div>
                  <motion.div
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-white bg-opacity-30"
                    animate={{ width: ["0%", "100%", "0%"] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Side: Text Content */}
          <div className="space-y-4">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={stepVariants}
                initial="hidden"
                whileInView="visible"
                whileHover={contentHover}
                viewport={{ once: true }}
                className="flex items-center p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
              >
                <motion.div
                  className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mr-4"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                >
                  {index === 0 && <div className="w-2 h-2 bg-gray-400 rounded-full"></div>}
                  {index === 1 && <div className="w-3 h-3 bg-gray-500 rounded-full"></div>}
                  {index === 2 && <div className="w-4 h-4 bg-gray-600 rounded-full"></div>}
                  {index === 3 && <div className="w-5 h-5 bg-gray-700 rounded-full flex items-center justify-center"><span className="text-white text-xs">✓</span></div>}
                </motion.div>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 uppercase mb-1">
                    <motion.span
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.2 }}
                    >
                      {step.title}
                    </motion.span>
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base leading-tight">
                    <motion.span
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.2 }}
                    >
                      {step.description}
                    </motion.span>
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Background SVG Animation */}
      <div className="absolute inset-0 -z-10 opacity-20">
        <svg className="w-full h-full" viewBox="0 0 1440 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#e0f2fe', stopOpacity: 0.5 }} />
              <stop offset="100%" style={{ stopColor: '#dbeafe', stopOpacity: 0.5 }} />
            </linearGradient>
            <linearGradient id="particleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#4f46e5', stopOpacity: 0.6 }} />
              <stop offset="100%" style={{ stopColor: '#10b981', stopOpacity: 0.6 }} />
            </linearGradient>
          </defs>
          <g>
            {/* Dynamic Wave */}
            <motion.path
              d="M0 500 Q360 450 720 500 T1440 500 L1440 600 L0 600 Z"
              fill="url(#bgGradient)"
              animate={{ d: ["M0 500 Q360 450 720 500 T1440 500", "M0 500 Q360 550 720 500 T1440 500"] }}
              transition={{ duration: 8, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
            />
            {/* Floating Particles */}
            {[...Array(6)].map((_, i) => (
              <motion.circle
                key={i}
                cx={200 + i * 240}
                cy={300 + Math.sin(i) * 100}
                r="8"
                fill="url(#particleGradient)"
                animate={{ y: [0, -30, 0], opacity: [0.4, 0.7, 0.4] }}
                transition={{ duration: 4 + i * 0.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
              />
            ))}
            {/* Subtle Hexagon Accent */}
            <motion.path
              d="M600 200 L630 180 L660 200 L660 240 L630 260 L600 240 Z"
              fill="none"
              stroke="url(#particleGradient)"
              strokeWidth="2"
              animate={{ y: [-10, 10], rotate: [0, 30, 0] }}
              transition={{ duration: 6, repeat: Infinity, repeatType: "reverse" }}
            />
          </g>
        </svg>
      </div>
    </section>
  );
}