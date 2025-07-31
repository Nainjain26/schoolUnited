"use client";

import { motion } from "framer-motion";
import { FaCode, FaKey, FaRegLightbulb } from "react-icons/fa";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

// Animation variants

// Particle component for CSS-based animations
const Particles = () => {
  const particleCount = 30; // Increased for more visual impact
  const particles = Array.from({ length: particleCount }, (_, i) => ({
    id: i,
    size: Math.random() * 6 + 3,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    duration: Math.random() * 8 + 6,
    delay: Math.random() * 3,
  }));

  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-gradient-to-r from-purple-400 to-blue-400 opacity-40"
          style={{
            width: particle.size,
            height: particle.size,
            left: particle.left,
            top: particle.top,
            willChange: "transform, opacity",
            filter: "blur(1px)",
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.4, 0.8, 0.4],
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}
      {/* Enhanced Background Glow Effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-transparent to-blue-900/30"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Additional floating orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl"
        animate={{
          scale: [1.5, 1, 1.5],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
};

// Typewriter effect for heading
const useTypewriter = (text: string, speed = 60) => {
  const [displayed, setDisplayed] = useState("");
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i === text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);
  return displayed;
};

export default function ProgramsOverview() {
  // Typewriter heading
  const whatIfHeading = useTypewriter("WHAT IF…", 80);
  const [openProgram, setOpenProgram] = useState<null | "infinity" | "quantum">(
    null
  );

  // Detailed content for each program
  const infinityContent = (
    <motion.div
      key="infinity"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-3xl bg-gradient-to-br from-gray-900/95 via-purple-900/90 to-gray-900/95 rounded-3xl shadow-2xl p-8 border-2 border-purple-500/50 flex flex-col items-start relative z-20 backdrop-blur-xl"
    >
      <button
        onClick={() => setOpenProgram(null)}
        className="absolute top-4 right-4 text-purple-400 font-bold text-lg hover:text-purple-300 hover:underline transition-colors"
      >
        × Close
      </button>
      <h2 className="text-2xl sm:text-3xl font-bold text-purple-300 mb-2">
        "The Infinity Code"
      </h2>
      <h3 className="text-lg sm:text-xl font-semibold text-gray-200 mb-4">
        Decode Yourself. Design the Future.
      </h3>
      <p className="text-gray-300 mb-4">
        A radical 3-day experiential journey for adolescents (13–18 years)
      </p>
      <h4 className="font-bold text-purple-400 mb-2">
        What Makes It UNLIKE Anything Else?
      </h4>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-1">
        <li>
          Combines neuroscience, philosophy, AI-thinking, Vedic psychology &
          storytelling
        </li>
        <li>Multisensory experiences (sound, movement, light, tech, nature)</li>
        <li>
          Daily "Time Capsule" creation to track emotional and mental
          transformation
        </li>
        <li>Gamified, immersive, and deeply reflective</li>
        <li>No classrooms, no lectures — only missions, quests, and labs</li>
      </ul>
      <h4 className="font-bold text-purple-400 mb-2">
        DAY 1 – Decode: "Who Am I in the Now?"
      </h4>
      <p className="mb-2 text-gray-300">
        Discover your inner wiring. Build a deep connection with your mind,
        body, and emotions.
      </p>
      <h4 className="font-bold text-purple-400 mb-2">
        DAY 2 – Disrupt: "Who Can I Become?"
      </h4>
      <p className="mb-2 text-gray-300">
        Break mental patterns. Discover limitless possibility. Rebuild from
        courage and curiosity.
      </p>
      <h4 className="font-bold text-purple-400 mb-2">
        DAY 3 – Design: "What Legacy Will I Leave?"
      </h4>
      <p className="mb-2 text-gray-300">
        Design your future. Lead with empathy. Embody your highest possibility.
      </p>
      <h4 className="font-bold text-purple-400 mb-2 mt-4">
        Takeaways That WOW:
      </h4>
      <ul className="list-disc list-inside text-gray-300 mb-2 space-y-1">
        <li>Certificate of Completion</li>
        <li>
          Infinity Passport: A personalized, sealed journey book with
          AI-inferred insights
        </li>
        <li>
          Neuro Card: Shows brain-behavior pattern using responses from Brain
          Gym
        </li>
        <li>
          Legacy Video: A recorded 1-minute message from the future self to
          present self
        </li>
        <li>
          Infinity Pendant: A symbolic token of inner strength and limitlessness
        </li>
        <li>
          Family Circle: Final-day experience with parents to witness the
          transformation
        </li>
      </ul>
    </motion.div>
  );

  const quantumContent = (
    <motion.div
      key="quantum"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-3xl bg-gradient-to-br from-gray-900/95 via-blue-900/90 to-gray-900/95 rounded-3xl shadow-2xl p-8 border-2 border-blue-500/50 flex flex-col items-start relative z-20 backdrop-blur-xl"
    >
      <button
        onClick={() => setOpenProgram(null)}
        className="absolute top-4 right-4 text-blue-400 font-bold text-lg hover:text-blue-300 hover:underline transition-colors"
      >
        × Close
      </button>
      <h2 className="text-2xl sm:text-3xl font-bold text-blue-300 mb-2">
        The Quantum Key Program
      </h2>
      <h3 className="text-lg sm:text-xl font-semibold text-gray-200 mb-4">
        Unlock the Digital Future
      </h3>
      <p className="text-gray-300 mb-4">
        A futuristic 3-day technological journey for adolescents (13–18 years)
      </p>
      <h4 className="font-bold text-blue-400 mb-2">
        What Makes It UNLIKE Anything Else?
      </h4>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-1">
        <li>Tool-Centric, Not Theory-Heavy</li>
        <li>AI, AR & Future Tech—Made Simple</li>
        <li>Personal Tech Toolkit for Growth</li>
        <li>From Consumers to Creators</li>
        <li>Ethics + Awareness = Digital Wisdom</li>
        <li>Future-Readiness & Career-Awareness</li>
        <li>Portfolio-Driven, Not Just Certificates</li>
      </ul>
      <h4 className="font-bold text-blue-400 mb-2">
        Day 1: Decode – Awareness & Digital Foundations
      </h4>
      <ul className="list-disc list-inside text-gray-300 mb-2 space-y-1">
        <li>TechSense: The Digital Self</li>
        <li>SmartSearch: Learn the Art of Finding</li>
        <li>ToolKit: Power Tools for Students</li>
      </ul>
      <h4 className="font-bold text-blue-400 mb-2">
        Day 2: Discover – Creation, Expression & AI Integration
      </h4>
      <ul className="list-disc list-inside text-gray-300 mb-2 space-y-1">
        <li>CreateLab: Technology as Your Canvas</li>
        <li>AI Unlocked: Friend or Future?</li>
        <li>TechTalk: From Users to Builders</li>
      </ul>
      <h4 className="font-bold text-blue-400 mb-2">
        Day 3: Do – Presentation, Practice & Purpose
      </h4>
      <ul className="list-disc list-inside text-gray-300 mb-2 space-y-1">
        <li>DigiPresent: Show Your Tech Power</li>
        <li>Project Showcase: Quantum Challenge</li>
        <li>SoulSync: Purposeful Tech</li>
      </ul>
      <h4 className="font-bold text-blue-400 mb-2 mt-4">
        Takeaways That WOW:
      </h4>
      <ul className="list-disc list-inside text-gray-300 mb-2 space-y-1">
        <li>Certificate of Completion</li>
        <li>A Digital Portfolio</li>
        <li>Quantum Key Handbook</li>
        <li>Access to monthly tech-upgrade workshops/webinars</li>
      </ul>
    </motion.div>
  );

  return (
    <div className="relative container mx-auto overflow-hidden bg-gradient-to-b from-gray-950 via-black to-gray-950 min-h-screen">
      {/* Enhanced Animated Gradient Overlay */}
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        style={{
          background:
            "linear-gradient(120deg, rgba(147,51,234,0.15) 0%, rgba(59,130,246,0.12) 50%, rgba(147,51,234,0.15) 100%)",
        }}
      />
      {/* CSS Particle Background */}
      <Particles />

      {/* WHAT IF... SECTION */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-16 z-20 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="w-full max-w-3xl bg-gradient-to-br from-gray-900/90 via-purple-900/80 to-blue-900/80 rounded-3xl shadow-2xl p-8 text-white border-4 border-purple-500/40 backdrop-blur-lg relative overflow-hidden"
        >
          {/* Enhanced Animated Glow */}
          <motion.div
            className="absolute -inset-2 rounded-3xl pointer-events-none"
            animate={{
              opacity: [0.6, 0.9, 0.6],
              filter: ["blur(20px)", "blur(40px)", "blur(20px)"],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            style={{
              background:
                "linear-gradient(120deg, rgba(147,51,234,0.4) 0%, rgba(59,130,246,0.3) 50%, rgba(147,51,234,0.4) 100%)",
            }}
          />
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl sm:text-6xl font-extrabold mb-6 text-center tracking-wide relative z-10 flex items-center justify-center gap-2"
          >
            <FaRegLightbulb className="text-purple-400 animate-pulse" />
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              {whatIfHeading}
            </span>
          </motion.h2>
          <motion.ul
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { transition: { staggerChildren: 0.25 } },
              hidden: {},
            }}
            className="space-y-4 text-lg sm:text-xl font-medium relative z-10"
          >
            <motion.li
              variants={{
                hidden: { opacity: 0, x: -30 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
              }}
            >
              <span className="text-purple-400">•</span> What if our children
              discovered their strengths before the world told them their
              limits?
            </motion.li>
            <motion.li
              variants={{
                hidden: { opacity: 0, x: -30 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.7, delay: 0.2 },
                },
              }}
            >
              <span className="text-blue-400">•</span> What if education
              helped them build a life — not just chase a career and fight for
              survival?
            </motion.li>
            <motion.li
              variants={{
                hidden: { opacity: 0, x: -30 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.7, delay: 0.4 },
                },
              }}
            >
              <span className="text-purple-400">•</span> What if every teenager
              could turn confusion into clarity, pressure into purpose?
            </motion.li>
          </motion.ul>
        </motion.div>
      </section>

      {/* FLAGSHIP PROGRAMS SECTION */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-16 z-20 bg-gradient-to-b from-transparent via-gray-900/30 to-transparent">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-6xl font-extrabold text-white mb-4">
            Our Flagship Programs
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Transformative experiences designed to unlock your potential and
            shape your future
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="w-full max-w-6xl mx-auto flex flex-col items-center relative overflow-hidden"
        >
          <AnimatePresence mode="wait">
            {openProgram === null && (
              <motion.div
                key="cards"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full relative z-10"
              >
                {/* The Infinity Code */}
                <motion.div
                  whileHover={{
                    scale: 1.03,
                    y: -8,
                    boxShadow: "0 30px 60px -12px rgba(147, 51, 234, 0.4)",
                  }}
                  className="group relative bg-gradient-to-br from-gray-900 via-purple-900/50 to-gray-900 rounded-3xl p-8 shadow-2xl border border-purple-500/30 transition-all duration-500 cursor-pointer overflow-hidden backdrop-blur-sm"
                  onClick={() => setOpenProgram("infinity")}
                >
                  {/* Enhanced Background Pattern */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Enhanced Floating Elements */}
                  <div className="absolute top-4 right-4 w-20 h-20 bg-purple-500/20 rounded-full blur-xl group-hover:bg-purple-400/30 transition-all duration-500" />
                  <div className="absolute bottom-4 left-4 w-16 h-16 bg-blue-500/20 rounded-full blur-lg group-hover:bg-blue-400/30 transition-all duration-500" />

                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                        <FaCode className="text-white text-2xl" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-1">
                          The Infinity Code
                        </h3>
                        <p className="text-purple-300 font-medium">
                          Decode Yourself. Design the Future.
                        </p>
                      </div>
                    </div>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-2 text-gray-300">
                        <div className="w-2 h-2 bg-purple-400 rounded-full" />
                        <span className="text-sm">
                          3-day experiential journey
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-300">
                        <div className="w-2 h-2 bg-blue-400 rounded-full" />
                        <span className="text-sm">Ages 13-18 years</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-300">
                        <div className="w-2 h-2 bg-purple-400 rounded-full" />
                        <span className="text-sm">
                          Neuroscience & AI-thinking
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-purple-300 font-semibold text-sm">
                        Click to explore →
                      </span>
                      <div className="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center group-hover:bg-purple-400/30 transition-colors duration-300">
                        <svg
                          className="w-4 h-4 text-purple-300"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* The Quantum Key */}
                <motion.div
                  whileHover={{
                    scale: 1.03,
                    y: -8,
                    boxShadow: "0 30px 60px -12px rgba(59, 130, 246, 0.4)",
                  }}
                  className="group relative bg-gradient-to-br from-gray-900 via-blue-900/50 to-gray-900 rounded-3xl p-8 shadow-2xl border border-blue-500/30 transition-all duration-500 cursor-pointer overflow-hidden backdrop-blur-sm"
                  onClick={() => setOpenProgram("quantum")}
                >
                  {/* Enhanced Background Pattern */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Enhanced Floating Elements */}
                  <div className="absolute top-4 right-4 w-20 h-20 bg-blue-500/20 rounded-full blur-xl group-hover:bg-blue-400/30 transition-all duration-500" />
                  <div className="absolute bottom-4 left-4 w-16 h-16 bg-cyan-500/20 rounded-full blur-lg group-hover:bg-cyan-400/30 transition-all duration-500" />

                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                        <FaKey className="text-white text-2xl" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-1">
                          The Quantum Key
                        </h3>
                        <p className="text-blue-300 font-medium">
                          Unlock the Digital Future
                        </p>
                      </div>
                    </div>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-2 text-gray-300">
                        <div className="w-2 h-2 bg-blue-400 rounded-full" />
                        <span className="text-sm">3-day tech journey</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-300">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                        <span className="text-sm">Ages 13-18 years</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-300">
                        <div className="w-2 h-2 bg-blue-400 rounded-full" />
                        <span className="text-sm">AI, AR & Future Tech</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-blue-300 font-semibold text-sm">
                        Click to explore →
                      </span>
                      <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center group-hover:bg-blue-400/30 transition-colors duration-300">
                        <svg
                          className="w-4 h-4 text-blue-300"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
            {openProgram === "infinity" && infinityContent}
            {openProgram === "quantum" && quantumContent}
          </AnimatePresence>
        </motion.div>
      </section>
    </div>
  );
}

// Custom slow spin and wiggle animations for icons (add to global CSS if not present)
// .animate-spin-slow { animation: spin 6s linear infinite; }
// .animate-wiggle { animation: wiggle 1.2s infinite; }
// @keyframes wiggle { 0%, 100% { transform: rotate(-8deg); } 50% { transform: rotate(8deg); } }
