"use client";

import { motion } from "framer-motion";
import { FaCode, FaKey, FaRegFileAlt, FaRegLightbulb } from "react-icons/fa";
import { useEffect, useState } from "react";

// Animation variants

// Particle component for CSS-based animations
const Particles = () => {
  const particleCount = 20; // Reduced for formance
  const particles = Array.from({ length: particleCount }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    duration: Math.random() * 5 + 5,
    delay: Math.random() * 2,
  }));

  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-yellow-400 opacity-30"
          style={{
            width: particle.size,
            height: particle.size,
            left: particle.left,
            top: particle.top,
            willChange: "transform, opacity",
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}
      {/* Background Glow Effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-indigo-200/20 via-transparent to-yellow-200/20"
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
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

  return (
    <div className="relative container mx-auto overflow-hidden">
      {/* Animated Gradient Overlay */}
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        style={{
          background:
            "linear-gradient(120deg, rgba(99,102,241,0.12) 0%, rgba(253,224,71,0.10) 100%)",
        }}
      />
      {/* CSS Particle Background */}
      <Particles />

      {/* WHAT IF... & FLAGSHIP PROGRAMS SECTION */}
      <section className="relative py-12 px-4 sm:px-6 lg:px-16 z-20 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="w-full max-w-3xl bg-gradient-to-br from-indigo-900/90 to-yellow-700/80 rounded-3xl shadow-2xl p-8 mb-10 text-white border-4 border-yellow-400/40 backdrop-blur-lg relative overflow-hidden"
        >
          {/* Animated Glow */}
          <motion.div
            className="absolute -inset-2 rounded-3xl pointer-events-none"
            animate={{
              opacity: [0.5, 0.8, 0.5],
              filter: ["blur(16px)", "blur(32px)", "blur(16px)"],
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            style={{
              background:
                "linear-gradient(120deg, rgba(253,224,71,0.25) 0%, rgba(99,102,241,0.18) 100%)",
            }}
          />
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-2xl sm:text-3xl font-extrabold mb-6 text-center tracking-wide relative z-10 flex items-center justify-center gap-2"
          >
            <FaRegLightbulb className="text-yellow-300 animate-pulse" />
            <span>{whatIfHeading}</span>
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
              <span className="text-yellow-300">•</span> What if our children
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
              <span className="text-yellow-300">•</span> What if education
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
              <span className="text-yellow-300">•</span> What if every teenager
              could turn confusion into clarity, pressure into purpose?
            </motion.li>
          </motion.ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="w-full max-w-4xl bg-white/90 rounded-3xl shadow-xl p-8 border-2 border-indigo-400/30 flex flex-col items-center relative overflow-hidden"
        >
          {/* Animated Border Glow */}
          <motion.div
            className="absolute -inset-2 rounded-3xl pointer-events-none"
            animate={{
              opacity: [0.3, 0.6, 0.3],
              filter: ["blur(12px)", "blur(24px)", "blur(12px)"],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            style={{
              background:
                "linear-gradient(120deg, rgba(99,102,241,0.18) 0%, rgba(253,224,71,0.18) 100%)",
            }}
          />
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-xl sm:text-2xl font-bold text-indigo-800 mb-8 text-center tracking-wide relative z-10 flex items-center gap-2"
          >
            <FaRegFileAlt className="text-indigo-400 animate-bounce" />
            FLAGSHIP PROGRAMS BY SCHOLARS UNITED
          </motion.h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full relative z-10">
            {/* The Infinity Code */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              whileHover={{
                scale: 1.04,
                boxShadow: "0 8px 32px 0 rgba(99,102,241,0.18)",
              }}
              className="bg-indigo-50 rounded-2xl p-6 flex flex-col items-start shadow-md border border-indigo-200 transition-all duration-300 group cursor-pointer relative overflow-hidden"
            >
              <FaCode className="text-indigo-500 text-3xl mb-2 animate-spin-slow group-hover:scale-110 transition-transform duration-300" />
              <span className="text-lg font-semibold text-indigo-700 mb-2">
                The Infinity Code
              </span>
              <span className="text-gray-700 text-base mb-2">
                Decode Yourself. Design the Future.
              </span>
            </motion.div>
            {/* The Quantum Key */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              whileHover={{
                scale: 1.04,
                boxShadow: "0 8px 32px 0 rgba(253,224,71,0.18)",
              }}
              className="bg-yellow-50 rounded-2xl p-6 flex flex-col items-start shadow-md border border-yellow-200 transition-all duration-300 group cursor-pointer relative overflow-hidden"
            >
              <FaKey className="text-yellow-500 text-3xl mb-2 animate-wiggle group-hover:scale-110 transition-transform duration-300" />
              <span className="text-lg font-semibold text-yellow-700 mb-2">
                The Quantum Key
              </span>
              <span className="text-gray-700 text-base mb-2">
                Unlock the Digital Future
              </span>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

// Custom slow spin and wiggle animations for icons (add to global CSS if not present)
// .animate-spin-slow { animation: spin 6s linear infinite; }
// .animate-wiggle { animation: wiggle 1.2s infinite; }
// @keyframes wiggle { 0%, 100% { transform: rotate(-8deg); } 50% { transform: rotate(8deg); } }
