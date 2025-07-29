"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaRegLightbulb,
  FaLightbulb,
  FaLaptopCode,
  FaUsers,
  FaComments,
  FaCertificate,
  FaArrowRight,
} from "react-icons/fa";

const sectionFade = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.15,
      duration: 0.8,
      ease: "easeOut",
    },
  }),
};

const outcomes = [
  {
    icon: <FaRegLightbulb className="text-yellow-300 text-2xl" />,
    label: "Self-confidence & Purpose",
    colorFrom: "from-yellow-400/80",
    colorTo: "to-yellow-600/40",
    delay: 0.1,
  },
  {
    icon: <FaLaptopCode className="text-blue-400 text-2xl" />,
    label: "Digital Competency & Awareness",
    colorFrom: "from-blue-400/80",
    colorTo: "to-blue-600/40",
    delay: 0.2,
  },
  {
    icon: <FaUsers className="text-green-400 text-2xl" />,
    label: "Career Direction & Aspiration",
    colorFrom: "from-green-400/80",
    colorTo: "to-green-600/40",
    delay: 0.3,
  },
  {
    icon: <FaComments className="text-pink-400 text-2xl" />,
    label: "Communication & Teamwork",
    colorFrom: "from-pink-400/80",
    colorTo: "to-pink-600/40",
    delay: 0.4,
  },
  {
    icon: <FaCertificate className="text-blue-300 text-2xl" />,
    label: "Ownership & Social Responsibility",
    colorFrom: "from-blue-300/80",
    colorTo: "to-blue-500/40",
    delay: 0.5,
  },
];

export default function ShikshaSetuPage() {
  return (
    <main className="bg-gray-950 text-gray-100 min-h-screen font-sans overflow-x-hidden">
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0e0f1a] via-[#14172b] to-[#0e0f1a] px-4 py-20 text-white">
        {/* Orbital Glow Particles */}
        <div className="absolute w-full h-full top-0 left-0 pointer-events-none z-0 overflow-hidden">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-[2px] h-[2px] rounded-full bg-white/30 animate-pulse"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDuration: `${3 + Math.random() * 3}s`,
              }}
            />
          ))}
        </div>

        {/* Animated Blurred Rings */}
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full border border-purple-500/30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-2xl opacity-40"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 50, ease: "linear" }}
        />
        <motion.div
          className="absolute w-[400px] h-[400px] bg-gradient-to-tr from-purple-500 via-pink-500 to-blue-500 opacity-30 blur-[100px] rounded-full"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "mirror" }}
        />

        {/* Glowing Orb Effect */}
        <motion.div
          className="absolute top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-radial from-purple-600/30 via-blue-600/20 to-transparent rounded-full blur-3xl opacity-40"
          animate={{ scale: [0.95, 1.05, 0.95] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        />

        {/* Content */}
        <motion.div
          className="relative z-10 text-center max-w-4xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
            className="flex justify-center mb-6"
          >
            <FaRegLightbulb className="text-yellow-300 text-6xl animate-spin-slow drop-shadow-2xl" />
          </motion.div>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight drop-shadow-lg">
            {`Connecting `}

            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-gradient-x">
              Aspirations
            </span>
            {` to `}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-yellow-400 to-purple-500 animate-gradient-x">
              Opportunities .
            </span>
          </h1>

          <motion.p
            className="text-lg md:text-2xl mt-6 text-gray-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
          >
            SHIKSHA-SETU
          </motion.p>
        </motion.div>

        {/* Bottom Wave Divider */}
        <svg
          className="absolute bottom-0 left-0 w-full"
          viewBox="0 0 1440 150"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#0e0f1a"
            d="M0,32L60,42.7C120,53,240,75,360,80C480,85,600,75,720,74.7C840,75,960,85,1080,101.3C1200,117,1320,139,1380,149.3L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </section>

      {/* PROGRAM OVERVIEW - Split Layout with Animated SVG Illustration */}
      <section className="relative overflow-hidden py-24 px-6 md:px-12 lg:px-20 bg-gradient-to-b from-gray-900 via-gray-950 to-black">
        {/* Floating Blob Background */}
        <div className="absolute -top-32 -left-20 w-[500px] h-[500px] bg-yellow-700 blur-3xl opacity-20 rounded-full z-0 animate-pulse"></div>
        <div className="absolute -bottom-24 right-0 w-[400px] h-[400px] bg-orange-500 blur-3xl opacity-20 rounded-full z-0 animate-ping"></div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-16">
          {/* Illustration */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-full md:w-1/2 flex items-center justify-center"
          >
            <img
              src="/photo.png"
              alt="Illustration"
              className="w-[320px] md:w-[400px] drop-shadow-[0_0_40px_rgba(96,165,250,0.4)] animate-float"
            />
          </motion.div>

          {/* Floating Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1 }}
            className="w-full md:w-1/2 text-left"
          >
            <div className="mb-6">
              <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight drop-shadow">
                Shiksha-Setu <br />
                <span className="text-yellow-400">A Bridge to Brilliance</span>
              </h2>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Shiksha-Setu isn&apos;t just a program — it&apos;s a{" "}
              <span className="text-yellow-400 font-medium">movement</span> to
              unlock the potential of students from underserved communities by
              providing essential skills, mentorship, and digital access.
            </p>
            <ul className="space-y-4 text-gray-200">
              {[
                {
                  title: "Bridges the Access Gap",
                  desc: "Reaches rural and low-income learners with modern, skill-based education.",
                },
                {
                  title: "Empowers for the Future",
                  desc: "From digital literacy to emotional intelligence — beyond just academics.",
                },
                {
                  title: "Mentorship That Matters",
                  desc: "Guidance from experienced mentors, not just tutors.",
                },
              ].map((item, idx) => (
                <motion.li
                  key={idx}
                  className="relative pl-6"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 * idx }}
                >
                  <span className="absolute left-0 top-1 text-yellow-400">
                    ✔
                  </span>
                  <span className="font-semibold text-yellow-300">
                    {item.title}:
                  </span>{" "}
                  {item.desc}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Wave Divider */}
        <svg
          className="absolute bottom-0 left-0 w-full h-32"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#0f172a"
            fillOpacity="1"
            d="M0,160L60,149.3C120,139,240,117,360,117.3C480,117,600,139,720,160C840,181,960,203,1080,197.3C1200,192,1320,160,1380,144L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          />
        </svg>
      </section>

      {/* OBJECTIVES - Horizontal Timeline/Stepper */}
      <section className="relative w-full max-w-5xl mx-auto py-20 px-4 flex flex-col items-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-3xl md:text-6xl font-extrabold text-white mb-10 text-center"
        >
          Objectives
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 w-full">
          {[
            {
              icon: <FaArrowRight className="text-blue-400 text-3xl" />,
              label: "Bridge the skill gap for underserved youth",
            },
            {
              icon: <FaLightbulb className="text-yellow-400 text-3xl" />,
              label: "Provide practical, real-world competencies for growth",
            },
            {
              icon: <FaComments className="text-pink-400 text-3xl" />,
              label: "Foster confidence, clarity, and communication skills",
            },
            {
              icon: <FaUsers className="text-green-400 text-3xl" />,
              label: "Create equal access to 21st-century learning",
            },
          ].map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.2, ease: "easeOut" }}
              className="flex flex-col items-center text-center bg-gray-900/80 rounded-2xl shadow-lg border border-blue-900 px-6 py-8 min-w-[220px] max-w-xs relative z-10"
            >
              <div className="mb-4">{step.icon}</div>
              <div className="font-semibold text-gray-100 text-lg mb-2">
                {step.label}
              </div>
              {i < 3 && (
                <div className="hidden md:block absolute right-[-40px] top-1/2 -translate-y-1/2 w-20 h-1 bg-gradient-to-r from-blue-400/40 to-transparent rounded-full" />
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* WHO WILL BE BENEFITED - Animated Card Grid */}
      <section className="relative w-full max-w-6xl mx-auto py-20 px-4">
        {/* Animated background dots */}
        <svg
          className="absolute inset-0 w-full h-full z-0 opacity-10 pointer-events-none"
          preserveAspectRatio="none"
        >
          {[...Array(30)].map((_, i) => (
            <circle
              key={i}
              cx={Math.random() * 100 + "%"}
              cy={Math.random() * 100 + "%"}
              r={Math.random() * 2 + 1}
              fill="#60a5fa"
            />
          ))}
        </svg>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-3xl md:text-6xl font-extrabold text-white mb-10 text-center relative z-10"
        >
          Who Will Be Benefited?
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 relative z-10">
          {[
            {
              icon: <FaUsers className="text-green-400 text-4xl mb-4" />,
              title: "Students from low-income households",
              desc: "Empowering those with limited resources to access quality upskilling.",
            },
            {
              icon: <FaComments className="text-pink-400 text-4xl mb-4" />,
              title: "Government or NGO-supported school systems",
              desc: "Supporting institutions that serve the underserved.",
            },
            {
              icon: <FaLightbulb className="text-yellow-400 text-4xl mb-4" />,
              title: "First-generation & marginalized learners",
              desc: "Opening doors for those breaking new ground in their families.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.2, ease: "easeOut" }}
              whileHover={{ scale: 1.04, boxShadow: "0 8px 32px #60a5fa33" }}
              className="bg-gray-900/80 rounded-2xl shadow-xl border border-blue-900 p-8 flex flex-col items-center text-center transition-all duration-300 cursor-pointer hover:bg-blue-900/30"
            >
              {item.icon}
              <div className="font-bold text-lg text-gray-100 mb-2">
                {item.title}
              </div>
              <div className="text-gray-300 text-base">{item.desc}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PROGRAM COMPONENTS - Animated Accordion */}
      <section className="relative w-full max-w-4xl mx-auto py-20 px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-3xl md:text-6xl font-extrabold text-white mb-10 text-center"
        >
          Program Components
        </motion.h2>
        <div className="space-y-6">
          {[
            {
              icon: <FaLightbulb className="text-yellow-400 text-3xl mr-3" />,
              title: "Life Navigation Lab",
              desc: "Workshops on emotional resilience, goal-setting, and personal growth.",
              quote:
                "Because knowing yourself is the first step to changing your future.",
              color: "from-yellow-400/20 to-yellow-600/10",
            },
            {
              icon: <FaLaptopCode className="text-blue-400 text-3xl mr-3" />,
              title: "Digital Literacy Capsule",
              desc: "Hands-on modules covering responsible internet use, basic coding, online research, and digital safety.",
              quote: "Technology as a bridge — not a barrier.",
              color: "from-blue-400/20 to-blue-600/10",
            },
            {
              icon: <FaUsers className="text-green-400 text-3xl mr-3" />,
              title: "Career Clarity Circles",
              desc: "Interactive sessions with local professionals, mentorship, and career storytelling.",
              quote: "If they can do it, so can you.",
              color: "from-green-400/20 to-green-600/10",
            },
            {
              icon: <FaComments className="text-pink-400 text-3xl mr-3" />,
              title: "Communication & Confidence Training",
              desc: "Speaking, listening, and presenting workshops in regional language and English.",
              quote: "Voice builds presence. Presence builds opportunity.",
              color: "from-pink-400/20 to-pink-600/10",
            },
            {
              icon: <FaUsers className="text-purple-400 text-3xl mr-3" />,
              title: "Community Project Challenge",
              desc: "A group-based social action mini-project to apply skills in the real world.",
              quote: "Learning through contribution and collaboration.",
              color: "from-purple-400/20 to-purple-600/10",
            },
          ].map((item, i) => (
            <AccordionPanel key={i} {...item} defaultOpen={i === 0} />
          ))}
        </div>
      </section>

      {/* DELIVERY FORMAT - Enhanced Compact Zig-Zag Animated Path */}
      <section className="relative w-full max-w-4xl mx-auto py-14 px-2 md:px-4">
        {/* Animated SVG Wave Background */}
        <svg
          className="absolute left-0 top-0 w-full h-full z-0 opacity-20 pointer-events-none"
          viewBox="0 0 1440 320"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M0,160L48,176C96,192,192,224,288,224C384,224,480,192,576,160C672,128,768,96,864,112C960,128,1056,192,1152,208C1248,224,1344,192,1392,176L1440,160L1440,320L0,320Z"
            fill="#60a5fa"
            initial={{ y: 0 }}
            animate={{ y: [0, 20, 0] }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 8,
            }}
            style={{ filter: "blur(12px)" }}
          />
        </svg>
        {/* Animated Glow Behind Path */}
        <motion.div
          className="hidden md:block absolute left-1/2 top-0 h-full w-32 bg-gradient-to-b from-blue-400/30 via-blue-900/20 to-blue-400/30 rounded-full blur-2xl z-0"
          style={{ transform: "translateX(-50%)" }}
          initial={{ opacity: 0.3 }}
          animate={{ opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-3xl md:text-6xl font-extrabold text-white mb-10 text-center relative z-10"
        >
          Delivery Format
        </motion.h2>
        <div className="relative">
          {/* Animated Draw Vertical Path Line */}
          <motion.div
            className="hidden md:block absolute left-1/2 top-0 h-full w-0.5 bg-gradient-to-b from-blue-400 via-blue-900 to-blue-400 rounded-full z-10"
            style={{ transform: "translateX(-50%)" }}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />
          <div className="flex flex-col gap-8">
            {[
              {
                icon: <FaArrowRight className="text-blue-400 text-xl" />,
                title: "3–5 Day Camp",
                desc: "Onsite at selected institutions or community centers.",
              },
              {
                icon: <FaUsers className="text-green-400 text-xl" />,
                title: "Local Partnerships",
                desc: "In partnership with NGOs, Schools, Gram Panchayats.",
              },
              {
                icon: <FaComments className="text-pink-400 text-xl" />,
                title: "Regional Languages",
                desc: "Delivered in regional languages as needed.",
              },
              {
                icon: <FaLightbulb className="text-yellow-400 text-xl" />,
                title: "Expert Facilitators",
                desc: "By Scolars  United professionals and volunteers.",
              },
              {
                icon: <FaCertificate className="text-blue-300 text-xl" />,
                title: "Follow-up & Alumni",
                desc: "Includes mentorship and alumni tracking.",
              },
            ].map((item, i, arr) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.12, ease: "easeOut" }}
                className={`relative flex flex-col md:flex-row items-center md:items-stretch gap-3 z-20 ${
                  i % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Node Card */}
                <div
                  className={`w-full md:w-[46%] flex ${
                    i % 2 === 0
                      ? "justify-start md:pl-4"
                      : "justify-end md:pr-4"
                  }`}
                >
                  <motion.div
                    whileHover={{
                      boxShadow: "0 0 24px #60a5fa77, 0 2px 16px #1e293b",
                    }}
                    className="bg-white/10 backdrop-blur-xl border border-blue-400/30 rounded-xl shadow-lg p-4 flex flex-col items-center md:items-start text-center md:text-left min-h-[90px] max-w-xs mx-auto transition-all duration-300 cursor-pointer"
                  >
                    <div className="mb-2">{item.icon}</div>
                    <div className="font-bold text-base text-gray-100 mb-1">
                      {item.title}
                    </div>
                    <div className="text-gray-300 text-sm">{item.desc}</div>
                  </motion.div>
                </div>
                {/* Connector Dot with Glow/Pulse */}
                <div className="hidden md:flex flex-col items-center w-0.5 relative z-30">
                  <motion.span
                    className="w-4 h-4 bg-gradient-to-br from-blue-400 to-blue-900 rounded-full border-2 border-gray-950 shadow-lg z-20"
                    animate={{
                      boxShadow: [
                        "0 0 0 0 #60a5fa77",
                        "0 0 0 8px #60a5fa22",
                        "0 0 0 0 #60a5fa77",
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  {i < arr.length - 1 && (
                    <span className="flex-1 w-0.5 bg-gradient-to-b from-blue-400 via-blue-900 to-blue-400" />
                  )}
                </div>
              </motion.div>
            ))}
          </div>
          {/* Mobile vertical line */}
          <div
            className="md:hidden absolute left-1/2 top-0 h-full w-0.5 bg-gradient-to-b from-blue-400 via-blue-900 to-blue-400 rounded-full z-0"
            style={{ transform: "translateX(-50%)" }}
          />
        </div>
      </section>

      {/* PROGRAM OUTCOMES - Aurora Flow Animated Chips */}
      <section
        className="relative w-full max-w-7xl mx-auto py-20 px-4 flex flex-col items-center justify-center overflow-visible"
        aria-labelledby="program-outcomes"
      >
        {/* Aurora SVG Background */}
        <svg
          className="absolute left-0 top-0 w-full h-full z-0 opacity-40 pointer-events-none"
          viewBox="0 0 1440 320"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M0,160L60,176C120,192,240,224,360,224C480,224,600,192,720,160C840,128,960,96,1080,112C1200,128,1320,192,1380,208L1440,224L1440,320L0,320Z"
            fill="url(#aurora1)"
            initial={{ y: 0 }}
            animate={{ y: [0, 30, 0] }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 12,
            }}
            style={{ filter: "blur(24px)" }}
          />
          <defs>
            <linearGradient
              id="aurora1"
              x1="0"
              y1="0"
              x2="1440"
              y2="320"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#818cf8" stopOpacity="0.7" />
              <stop offset="0.5" stopColor="#f472b6" stopOpacity="0.5" />
              <stop offset="1" stopColor="#fbbf24" stopOpacity="0.6" />
            </linearGradient>
          </defs>
        </svg>

        {/* Heading */}
        <motion.h2
          id="program-outcomes"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-3xl md:text-6xl font-extrabold text-white mb-16 text-center relative z-10"
        >
          Program Outcomes
        </motion.h2>

        {/* Outcome Cards Grid */}
        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
          {outcomes.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: item.delay,
                ease: "easeOut",
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 24px #93c5fd55, 0 2px 16px #1e293b",
              }}
              className={`bg-gradient-to-br ${item.colorFrom} ${item.colorTo} rounded-2xl px-6 py-5 flex items-start gap-4 shadow-2xl backdrop-blur-xl cursor-pointer border border-blue-200/30 glass-card`}
              style={{
                background: "rgba(30,41,59,0.6)",
                border: "1px solid #60a5fa55",
                willChange: "transform",
              }}
            >
              <div className="text-white">{item.icon}</div>
              <span className="text-blue-100 font-semibold text-lg leading-snug drop-shadow-md">
                {item.label}
              </span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Certification */}
      <section className="relative py-24 px-6 bg-blackoverflow-hidden">
        {/* Aurora animated background glow */}
        <svg
          className="absolute left-0 top-0 w-full h-full z-0 pointer-events-none opacity-30"
          viewBox="0 0 1440 320"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M0,160L60,176C120,192,240,224,360,224C480,224,600,192,720,160C840,128,960,96,1080,112C1200,128,1320,192,1380,208L1440,224L1440,320L0,320Z"
            fill="url(#grad)"
            initial={{ y: 0 }}
            animate={{ y: [0, 30, 0] }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 12,
            }}
            style={{ filter: "blur(80px)" }}
          />
          <defs>
            <linearGradient
              id="grad"
              x1="0"
              y1="0"
              x2="1440"
              y2="320"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#38bdf8" stopOpacity="0.5" />
              <stop offset="0.5" stopColor="#f472b6" stopOpacity="0.4" />
              <stop offset="1" stopColor="#facc15" stopOpacity="0.4" />
            </linearGradient>
          </defs>
        </svg>

        {/* Content container */}
        <div className="relative z-10 max-w-6xl mx-auto space-y-16">
          {/* Certification Section */}
          <motion.div
            className="bg-gray-800/50 backdrop-blur-xl border border-yellow-400/30 rounded-3xl p-10 shadow-[0_0_20px_#6e710dc5] hover:shadow-[0_0_30px_#595b15c5] transition-all hover:scale-[1.015]"
            variants={sectionFade}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
          >
            <div className="flex items-center gap-4 mb-5">
              <motion.div
                className="p-4 rounded-full bg-gradient-to-br from-yellow-500 via-yellow-400 to-yellow-300 shadow-lg"
                initial={{ rotate: 0 }}
                animate={{ rotate: [0, 360] }}
                transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
              >
                <FaCertificate className="text-white text-3xl" />
              </motion.div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-blue-100 tracking-tight">
                Certification & Alumni Access
              </h2>
            </div>
            <p className="text-blue-100/90 text-lg leading-relaxed">
              All participants receive an official certificate from{" "}
              <span className="font-semibold text-yellow-500">
                Scolars United
              </span>{" "}
              and become part of the{" "}
              <span className="italic text-yellow-700">
                Shiksha-Setu Alumni Network
              </span>{" "}
              — unlocking future opportunities, mentorship, and lifelong
              guidance.
            </p>
          </motion.div>

          {/* Why Shiksha-Setu Section */}
          <motion.div
            className="bg-gray-800/60 backdrop-blur-xl border  border-yellow-400/30 rounded-3xl p-12 shadow-[0_0_20px_#6e710dc5] hover:shadow-[0_0_30px_#595b15c5] transition-all"
            variants={sectionFade}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
          >
            <div className="flex items-center gap-4 mb-6">
              <motion.div
                className="p-4 rounded-full bg-gradient-to-br from-yellow-300 via-pink-400 to-yellow-500 shadow-2xl"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <FaRegLightbulb className="text-white text-3xl" />
              </motion.div>
              <h2 className="text-4xl font-black text-blue-100 tracking-tight leading-tight">
                Why Shiksha-Setu?
              </h2>
            </div>

            <p className="text-slate-100 text-lg leading-loose mb-6">
              <span className="text-yelow-400 font-bold">Shiksha-Setu</span>{" "}
              isn&apos;t a charity — it&apos;s a bridge. A bold movement
              delivering future-ready education, mentorship, and life-skills to
              students who need it most — completely barrier-free.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mt-6">
              {[
                {
                  title: "Bridges the Access Gap",
                  desc: "Reaches underserved schools, rural regions, and low-income families with modern education tools.",
                },
                {
                  title: "Focus on Employable Skills",
                  desc: "Equips students with emotional resilience, digital skills, and communication — not just book knowledge.",
                },
                {
                  title: "Mentorship That Matters",
                  desc: "Volunteers and educators guide beyond the classroom — toward life direction and growth.",
                },
                {
                  title: "Flexible & Scalable Delivery",
                  desc: "Runs seamlessly both online and offline, across schools and communities with zero compromise on quality.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.04 }}
                  transition={{ type: "spring", stiffness: 250 }}
                  className="p-5 rounded-xl bg-gradient-to-br from-slate-900/70 to-slate-800/60 border border-blue-300/20 shadow-xl hover:shadow-blue-400/30 transition-all"
                >
                  <h4 className="text-yellow-600 font-semibold text-lg mb-2">
                    {item.title}
                  </h4>
                  <p className="text-slate-200 leading-relaxed text-base">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            <p className="mt-10 text-yellow-300 font-semibold italic text-lg text-center">
              Shiksha-Setu is how we turn potential into possibility — one
              student at a time.
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

// AccordionPanel component
type AccordionPanelProps = {
  icon: React.ReactNode;
  title: string;
  desc: string;
  quote: string;
  color: string;
  defaultOpen?: boolean;
};

function AccordionPanel({
  icon,
  title,
  desc,
  quote,
  color,
  defaultOpen = false,
}: AccordionPanelProps) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <motion.div
      layout
      initial={{ borderRadius: 24 }}
      className={`overflow-hidden bg-gradient-to-br ${color} rounded-3xl border border-blue-900 shadow-xl`}
    >
      <button
        className="w-full flex items-center justify-between px-8 py-6 focus:outline-none cursor-pointer"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
      >
        <div className="flex items-center text-left">
          {icon}
          <span className="text-xl font-bold text-blue-200">{title}</span>
        </div>
        <motion.span
          animate={{ rotate: open ? 90 : 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="ml-4 text-yellow-400 text-2xl"
        >
          ▶
        </motion.span>
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="px-8 pb-6"
        style={{ display: open ? "block" : "none" }}
      >
        <div className="text-gray-100 text-base mb-2">{desc}</div>
        <blockquote className="italic text-blue-300 border-l-4 border-blue-400 pl-4 mt-2">
          {quote}
        </blockquote>
      </motion.div>
    </motion.div>
  );
}
