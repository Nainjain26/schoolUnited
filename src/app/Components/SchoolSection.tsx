"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaBrain,
 
  FaHandsHelping,
  FaSmile,
  FaComments,
  FaLightbulb,
} from "react-icons/fa";

const sections = [
 
  {
    icon: (
      <FaHandsHelping className="text-green-600 text-4xl mb-4 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12" />
    ),
    title: "Skill Development",
    content:
      "Building life skills beyond books—communication, critical thinking, creativity—to prepare students for a dynamic world.",
  },
  {
    icon: (
      <FaSmile className="text-yellow-500 text-4xl mb-4 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12" />
    ),
    title: "Mental Health & Mindset Building",
    content:
      "Addressing student anxiety, depression, burnout through supportive programs and positive mindset coaching.",
  },
  {
    icon: (
      <FaBrain className="text-purple-500 text-4xl mb-4 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12" />
    ),
    title: "Career Counseling",
    content:
      "Empowering students with direction through personalized career guidance, aptitude assessment, and mentoring.",
  },
  {
    icon: (
      <FaComments className="text-pink-500 text-4xl mb-4 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12" />
    ),
    title: "Interactive Sessions",
    content:
      "Live discussions, Q&A rounds, and brainstorming activities that engage students and build collaborative skills.",
  },
  {
    icon: (
      <FaLightbulb className="text-orange-400 text-4xl mb-4 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12" />
    ),
    title: "Creative Thinking & Brainstorming",
    content:
      "Innovative problem-solving exercises and group brainstorming sessions that ignite curiosity and creativity.",
  },
];

export default function PersonalizedLearning() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const headingVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, rotate: 5 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      rotate: 0,
      transition: { delay: i * 0.2, duration: 0.7, ease: "easeOut" },
    }),
    hover: {
      scale: 1.05,
      rotate: 1,
      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.2)",
      transition: { duration: 0.3 },
    },
  };

  const sparkleVariants = {
    initial: { opacity: 0, scale: 0, x: 0, y: 0 },
    animate: {
      opacity: [0, 1, 0],
      scale: [0, 1.5, 0],
      x: [0, 20, 40],
      y: [0, -20, -40],
      transition: { duration: 0.8, repeat: Infinity, repeatDelay: 1 },
    },
  };

  return (
    <section className="w-full py-20 px-4 sm:px-8 md:px-12 lg:px-16 bg-gradient-to-br from-gray-950 via-black to-gray-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
            rotate: [360, 180, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Enhanced Heading Section */}
      <div className="text-center mb-20 relative z-10">
        <motion.h2
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl  lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 relative inline-block"
          style={{ textShadow: "0 0 10px rgba(147, 51, 234, 0.5)" }}
        >
          Personalized Learning Approach
          <motion.div
            className="absolute -bottom-3 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
            style={{ transformOrigin: "left" }}
          />
          {/* Glowing Effect */}
          <motion.div
            className="absolute inset-0 -z-10 bg-gradient-to-r from-purple-500/30 to-blue-500/30 blur-2xl"
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ repeat: Infinity, duration: 2 }}
          />
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-gray-300 mt-6 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed"
        >
          In an era where academic pressure and competition have reached
          unprecedented levels, programs designed to nurture the holistic
          development of children are not just beneficial but essential. Scolars
          Unites believes that every child has the potential to shine not just
          in academics, but in life.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-purple-300 mt-2 max-w-3xl font-semibold mx-auto text-base sm:text-lg leading-relaxed"
        >
          With increasing pressure comes the alarming rise in mental health
          challenges—anxiety, depression, burnout. Scolars Unites steps in with
          programs that restore balance and uplift student potential.
        </motion.p>
      </div>

      {/* Card Grid with Sparkle Effects */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 max-w-7xl mx-auto relative z-10">
        {sections.map((section, idx) => (
          <motion.div
            key={idx}
            custom={idx}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true }}
            onMouseEnter={() => setActiveIndex(idx)}
            onMouseLeave={() => setActiveIndex(null)}
            className="p-6 sm:p-8 rounded-3xl border border-gray-700 bg-gray-900/50 backdrop-blur-md shadow-2xl hover:shadow-3xl transition-all duration-300 group relative overflow-hidden"
          >
            {/* Card Background Gradient */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100"
              initial={{ opacity: 0 }}
              animate={{ opacity: activeIndex === idx ? 0.4 : 0 }}
              transition={{ duration: 0.3 }}
            />
            {/* Sparkle Effect */}
            {activeIndex === idx && (
              <>
                <motion.div
                  className="absolute top-4 right-4 w-2 h-2 bg-purple-500 rounded-full"
                  variants={sparkleVariants}
                  initial="initial"
                  animate="animate"
                />
                <motion.div
                  className="absolute top-8 right-8 w-2 h-2 bg-blue-500 rounded-full"
                  variants={sparkleVariants}
                  initial="initial"
                  animate="animate"
                  transition={{ delay: 0.2 }}
                />
              </>
            )}
            <div className="flex flex-col items-start relative z-10">
              <motion.div
                animate={{
                  y: activeIndex === idx ? -10 : 0,
                  rotate: activeIndex === idx ? 5 : 0,
                }}
                transition={{ duration: 0.3 }}
              >
                {section.icon}
              </motion.div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300">
                {section.title}
              </h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                {section.content}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
