"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaBrain, FaGraduationCap, FaHandsHelping, FaSmile, FaComments, FaLightbulb } from "react-icons/fa";

const sections = [
  {
    icon: <FaGraduationCap className="text-indigo-600 text-4xl mb-4 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12" />,
    title: "Academic Mentorship",
    content:
      "One-on-one academic guidance tailored to each student’s learning style, helping them grow at their own pace and perform their best."
  },
  {
    icon: <FaHandsHelping className="text-green-600 text-4xl mb-4 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12" />,
    title: "Skill Development",
    content:
      "Building life skills beyond books—communication, critical thinking, creativity—to prepare students for a dynamic world."
  },
  {
    icon: <FaSmile className="text-yellow-500 text-4xl mb-4 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12" />,
    title: "Mental Health & Mindset Building",
    content:
      "Addressing student anxiety, depression, burnout through supportive programs and positive mindset coaching."
  },
  {
    icon: <FaBrain className="text-purple-500 text-4xl mb-4 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12" />,
    title: "Career Counseling",
    content:
      "Empowering students with direction through personalized career guidance, aptitude assessment, and mentoring."
  },
  {
    icon: <FaComments className="text-pink-500 text-4xl mb-4 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12" />,
    title: "Interactive Sessions",
    content:
      "Live discussions, Q&A rounds, and brainstorming activities that engage students and build collaborative skills."
  },
  {
    icon: <FaLightbulb className="text-orange-400 text-4xl mb-4 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12" />,
    title: "Creative Thinking & Brainstorming",
    content:
      "Innovative problem-solving exercises and group brainstorming sessions that ignite curiosity and creativity."
  }
];

export default function PersonalizedLearning() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const headingVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      transition: { duration: 0.8, ease: "easeOut" } 
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, rotate: 5 },
    visible: (i:number) => ({
      opacity: 1,
      y: 0,
      rotate: 0,
      transition: { delay: i * 0.2, duration: 0.7, ease: "easeOut" }
    }),
    hover: { 
      scale: 1.05, 
      rotate: 1, 
      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.2)",
      transition: { duration: 0.3 }
    }
  };

  const sparkleVariants = {
    initial: { opacity: 0, scale: 0, x: 0, y: 0 },
    animate: {
      opacity: [0, 1, 0],
      scale: [0, 1.5, 0],
      x: [0, 20, 40],
      y: [0, -20, -40],
      transition: { duration: 0.8, repeat: Infinity, repeatDelay: 1 }
    }
  };

  return (
    <section className="w-full py-20 px-4 sm:px-8 md:px-12 lg:px-16 bg-gradient-to-b from-indigo-50 via-white to-purple-50 relative overflow-hidden">
      {/* Dynamic Wave Background */}
      <div className="absolute inset-0 -z-10">
        <svg
          className="w-full h-full opacity-10"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
          viewBox="0 0 1440 560"
        >
          <motion.path
            d="M0,160L48,176C96,192,192,224,288,224C384,224,480,192,576,160C672,128,768,96,864,112C960,128,1056,192,1152,208C1248,224,1344,192,1392,176L1440,160L1440,560L0,560Z"
            fill="#a78bfa"
            animate={{ y: [-20, 20] }}
            transition={{ repeat: Infinity, repeatType: "reverse", duration: 5 }}
          />
          <motion.path
            d="M0,320L48,304C96,288,192,256,288,256C384,256,480,288,576,320C672,352,768,384,864,368C960,352,1056,288,1152,272C1248,256,1344,288,1392,304L1440,320L1440,560L0,560Z"
            fill="#f472b6"
            animate={{ y: [20, -20] }}
            transition={{ repeat: Infinity, repeatType: "reverse", duration: 6 }}
          />
        </svg>
      </div>

      {/* Enhanced Heading Section */}
      <div className="text-center mb-20 relative z-10">
        <motion.h2
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl  lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 relative inline-block"
          style={{ textShadow: "0 0 10px rgba(99, 102, 241, 0.5)" }}
        >
          Personalized Learning Approach
          <motion.div
            className="absolute -bottom-3 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
            style={{ transformOrigin: "left" }}
          />
          {/* Glowing Effect */}
          <motion.div
            className="absolute inset-0 -z-10 bg-gradient-to-r from-indigo-500/30 to-purple-500/30 blur-2xl"
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ repeat: Infinity, duration: 2 }}
          />
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-gray-700 mt-6 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed"
        >
          In an era where academic pressure and competition have reached unprecedented levels, programs designed to nurture the holistic development of children are not just beneficial but essential. Scholar Unites believes that every child has the potential to shine not just in academics, but in life.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-purple-800 mt-2 max-w-3xl font-semibold mx-auto text-base sm:text-lg leading-relaxed"
        >
          With increasing pressure comes the alarming rise in mental health challenges—anxiety, depression, burnout. Scholar Unites steps in with programs that restore balance and uplift student potential.
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
            className="p-6 sm:p-8 rounded-3xl border border-gray-100 bg-white/90 backdrop-blur-md shadow-2xl hover:shadow-3xl transition-all duration-300 group relative overflow-hidden"
          >
            {/* Card Background Gradient */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-indigo-200/20 to-purple-200/20 opacity-0 group-hover:opacity-100"
              initial={{ opacity: 0 }}
              animate={{ opacity: activeIndex === idx ? 0.4 : 0 }}
              transition={{ duration: 0.3 }}
            />
            {/* Sparkle Effect */}
            {activeIndex === idx && (
              <>
                <motion.div
                  className="absolute top-4 right-4 w-2 h-2 bg-pink-500 rounded-full"
                  variants={sparkleVariants}
                  initial="initial"
                  animate="animate"
                />
                <motion.div
                  className="absolute top-8 right-8 w-2 h-2 bg-indigo-500 rounded-full"
                  variants={sparkleVariants}
                  initial="initial"
                  animate="animate"
                  transition={{ delay: 0.2 }}
                />
              </>
            )}
            <div className="flex flex-col items-start relative z-10">
              <motion.div
                animate={{ y: activeIndex === idx ? -10 : 0, rotate: activeIndex === idx ? 5 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {section.icon}
              </motion.div>
              <h3 className="text-xl font-bold text-indigo-800 mb-3 group-hover:text-indigo-900 transition-colors duration-300">
                {section.title}
              </h3>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                {section.content}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}