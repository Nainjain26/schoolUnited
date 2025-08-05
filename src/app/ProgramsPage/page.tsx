"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {

  FaCheckCircle,
  FaQuoteLeft,
  FaPhoneAlt,
  FaEnvelope,
  FaUserAstronaut,
  FaBrain,
  FaLightbulb,
  FaUsers,
  FaLaptopCode,
  FaKey,
  FaCode,
  
} from "react-icons/fa";


const objectives = [
  {
    title: "Awaken Self-Awareness",
    desc: "Help children discover who they are, what they feel, and what drives them.",
    icon: <FaUserAstronaut className="text-yellow-400 text-3xl" />,
  },
  {
    title: "Build Inner Strength",
    desc: "Cultivate resilience, emotional intelligence, and courage to face life’s complexities.",
    icon: <FaBrain className="text-pink-400 text-3xl" />,
  },
  {
    title: "Foster Future-Readiness",
    desc: "Equip students with the thinking, tech fluency, and adaptability required for the real world.",
    icon: <FaLaptopCode className="text-cyan-400 text-3xl" />,
  },
  {
    title: "Ignite Curiosity & Creativity",
    desc: "Shift students from rote learning to curiosity-led, meaningful engagement.",
    icon: <FaLightbulb className="text-purple-400 text-3xl" />,
  },
  {
    title: "Promote Values & Empathy",
    desc: "Instill social consciousness, kindness, and the power of working together.",
    icon: <FaUsers className="text-green-400 text-3xl" />,
  },
  {
    title: "Empower Purposeful Growth",
    desc: "Guide students to set meaningful goals and shape their personal and academic journeys.",
    icon: <FaCheckCircle className="text-blue-400 text-3xl" />,
  },
];

const features = [
  "Psychology-Backed Design",
  "Personalized Experience",
  "Self-Exploration Tools",
  "Hands-On Learning",
  "Open Dialogue Spaces",
  "360° Ecosystem Involvement",
  "Growth Documentation",
  "Modular & Scalable",
];

const featureDescs = [
  "Rooted in neuroscience, educational psychology, and growth frameworks.",
  "Age-appropriate, need-based, and aligned with school/institution goals.",
  "Includes varieties of assessments, reflective journaling, and mindset trackers.",
  "Real-world challenges, simulations, role-play, and project-based activities.",
  "Safe environments where students can express, listen, and reflect deeply.",
  "Parent guidance, teacher collaborations, and post-program follow-ups.",
  "Worksheets, growth profiles, and take-home resources for sustained development.",
  "Flexible formats for schools of all sizes — from metros to tier-3 towns.",
];

const outcomes = [
  "Self-Awareness",
  "Emotional Maturity",
  "Academic Motivation",
  "Better Relationships",
  "Idea Ownership",
  "World Readiness",
];

const outcomeDescs = [
  "Students know their strengths, fears, triggers, and learning styles.",
  "They are more expressive, resilient, and calm under pressure.",
  "Increased focus, clarity of purpose, and reduced self-doubt.",
  "Healthier peer connections, greater empathy, and reduced conflict.",
  "Confidence to question, create, and lead without fear of failure.",
  "Tech comfort, social responsibility, and courage to pursue future paths.",
];

const transformations = [
  {
    title: "Self-Aware Explorers",
    desc: "They understand who they are, what they value, and how they learn best.",
  },
  {
    title: "Emotionally Resilient Individuals",
    desc: "Equipped with the strength to handle stress, setbacks, and inner doubts with maturity.",
  },
  {
    title: "Confident Decision-Makers",
    desc: "Able to make thoughtful academic, personal, and career-related choices aligned with their identity.",
  },
  {
    title: "Creative Thinkers & Innovators",
    desc: "They see possibilities, ask better questions, and build imaginative solutions.",
  },
  {
    title: "Empathetic Collaborators",
    desc: "They respect different perspectives and thrive in teams, valuing people over competition.",
  },
  {
    title: "Tech-Aware & Future-Ready Minds",
    desc: "Comfortable with emerging tools and real-world challenges, ready for the evolving world of tomorrow.",
  },
  {
    title: "Purpose-Driven Leaders",
    desc: "They don’t just follow paths—they create their own, with a deep sense of mission and meaning.",
  },
];



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

export default function ProgramsOverview() {
  // Typewriter heading

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
        The Infinity Code
      </h2>
      <h3 className="text-lg sm:text-xl font-semibold text-gray-200 mb-4">
        Decode. Develop. Design.
      </h3>
      <p className="text-gray-300 mb-4">
        A 3-Day Transformational Odyssey for the Young Mind (13-18 years)
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
        <li>Gamified, immersive, and deeply reflective</li>
        <li>No classrooms, no lectures — only missions, quests, and labs</li>
      </ul>
      <h4 className="font-bold text-purple-400 mb-2">
        DAY 1 – Decode: &quot;Who Am I Really?&quot;
      </h4>
      <p className="mb-2 text-gray-300">
        Discover your inner wiring. Build a deep connection with your mind,
        body, and emotions.
      </p>
      <h4 className="font-bold text-purple-400 mb-2">
        DAY 2 – Develop: &quot;Where Do I Stand, And How Do I Rise?&quot;
      </h4>
      <p className="mb-2 text-gray-300">
        Break mental patterns. Learn inevitable skills. Build from courage and
        curiosity.
      </p>
      <h4 className="font-bold text-purple-400 mb-2">
        DAY 3 – Design: &quot;What Will I Become, And Why Will It Matter?&quot;
      </h4>
      <p className="mb-2 text-gray-300">
        Design your future. Lead with empathy. Embody your highest possibility.
      </p>
      <h4 className="font-bold text-purple-400 mb-2 mt-4">
        Takeaways That WOW:
      </h4>
      <ul className="list-disc list-inside text-gray-300 mb-2 space-y-1">
        <li>Certificate of Completion</li>
        <li>Digital Badge</li>
        <li>Report with progress summary</li>
        <li>
          Infinity Passport: A personalized, sealed journey book with
          AI-inferred insights
        </li>
        <li>
          Infinity Bracelet: A symbolic token of inner strength and
          limitlessness
        </li>
        <li>Bonuses worth 30k</li>
        <li>
          A deeper understanding of self, learning, emotion, creativity, and
          values
        </li>
        <li>
          Increased confidence in public speaking, team collaboration, and
          decision-making
        </li>
        <li>Clarity about long-term goals and purpose</li>
        <li>A feeling of being seen, heard, and deeply valued</li>
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
      <h4 className="font-bold text-blue-400 mb-2 mt-4">Takeaways That WOW:</h4>
      <ul className="list-disc list-inside text-gray-300 mb-2 space-y-1">
        <li>Certificate of Completion</li>
        <li>A Digital Portfolio</li>
        <li>Quantum Key Handbook</li>
        <li>Access to monthly tech-upgrade workshops/webinars</li>
      </ul>
    </motion.div>
  );



  return (
    <div className="bg-gradient-to-b from-black via-gray-900 to-black text-white px-6 py-16 space-y-32">
      {/* Hero Section */}
      <section className="relative overflow-hidden mb-24">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/hero-pattern.svg')] bg-cover bg-center opacity-5"></div>
        <div className="relative max-w-6xl mx-auto text-center space-y-6 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <FaQuoteLeft className="text-yellow-400 text-4xl mx-auto mb-4" />
            <h1 className="text-4xl sm:text-6xl font-extrabold text-yellow-400 leading-tight">
              “True education starts when we stop asking kids to fit in — and
              start helping them stand out.”
            </h1>
          </motion.div>
          <p className="text-lg sm:text-xl text-gray-300 max-w-5xl mx-auto">
          At Scolars United, our flagship programs are more than just educational interventions — they are immersive, life-shaping journeys. Designed to nurture emotional intelligence, future-ready skills, creative thinking, and deep self-awareness, these programs empower students to understand who they are and what they can become. Each experience is rooted in science, driven by purpose, and crafted to spark a lasting transformation — helping children not just succeed in academics, but thrive in life.


          </p>
        </div>
      </section>
      {/* Objectives Section */}
      <section className="max-w-6xl mx-auto mb-24">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-yellow-400">
          Objectives
        </h2>
        <p className="text-lg text-center text-gray-300 mb-10 max-w-3xl mx-auto">
          At Scolars United, our programs are built to spark deep, lasting
          transformation in students — mentally, emotionally, socially, and
          intellectually.
        </p>
        <div className="grid md:grid-cols-2 gap-10">
          {objectives.map((obj, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex items-start gap-6 bg-gray-900 rounded-2xl shadow-lg border border-yellow-500/30 p-6"
            >
              <div>{obj.icon}</div>
              <div>
                <h3 className="text-2xl font-bold text-yellow-300 mb-2">
                  {obj.title}
                </h3>
                <p className="text-gray-300 text-base">{obj.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto mb-24">
        <h2 className="text-4xl font-bold text-center text-cyan-400 mb-12">
          Features
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-900 p-6 rounded-xl border border-cyan-500/40 shadow-md hover:shadow-cyan-500/20"
            >
              <h4 className="text-white font-semibold text-lg mb-2">
                {feature}
              </h4>
              <p className="text-gray-300 text-sm">{featureDescs[idx]}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Outcomes Section */}
      <section className="max-w-6xl mx-auto mb-24">
        <h2 className="text-4xl font-bold text-yellow-300 text-center mb-8">
          Outcomes
        </h2>
        <div className="grid md:grid-cols-2 gap-10">
          {outcomes.map((outcome, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-gray-900 rounded-2xl shadow-lg border border-yellow-400/30 p-6"
            >
              <h3 className="text-2xl font-bold text-yellow-300 mb-2">
                {outcome}
              </h3>
              <p className="text-gray-300 text-base">{outcomeDescs[idx]}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Who They Become Section */}
      <section className="max-w-6xl mx-auto mb-24">
        <h2 className="text-4xl font-bold text-purple-300 text-center mb-8">
          Who They Become
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {transformations.map((t, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-gray-800 via-gray-900 to-black p-6 rounded-xl border border-purple-500/30 shadow-xl"
            >
              <h4 className="text-white text-center font-semibold text-lg mb-2">
                {t.title}
              </h4>
              <p className="text-gray-300 text-center text-base">{t.desc}</p>
            </motion.div>
          ))}
        </div>
        <p className="text-center text-lg text-gray-400 mt-8 italic">
          “Not just prepared for exams — prepared for life.”
        </p>
      </section>

      {/* Flagship Programs Section */}
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

      {/* Call to Action Section */}
      <section className="relative max-w-5xl mx-auto text-center py-16 px-8 rounded-3xl border border-yellow-500/30 shadow-xl bg-gradient-to-br from-yellow-900 via-black to-purple-900">
        <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Want to bring this movement to your school?
        </h3>
        <p className="text-gray-300 mb-8">
          Please fill the form for detailed information <a
          href="https://forms.gle/BGyHJmg5XQNrffVA7"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#FFD700] underline hover:text-white"
        >
          here
        </a>. You may also call
          or WhatsApp us at{" "}
          <a href="tel:+918955529950" className="text-yellow-400 underline">
            +91 8955529950
          </a>{" "}
          or write to us at{" "}
          <a
            href="mailto:info@scolarsunited.com"
            className="text-yellow-400 underline"
          >
            info@scolarsunited.com
          </a>
          . Our team will schedule a consultation and send you a tailored
          proposal within 48 hours.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="tel:+918955529950"
            className="flex items-center gap-2 px-6 py-3 bg-yellow-400 text-black rounded-xl font-semibold hover:bg-yellow-300 transition"
          >
            <FaPhoneAlt /> +91 8955529950
          </a>
          <a
            href="mailto:info@scolarsunited.com"
            className="flex items-center gap-2 px-6 py-3 border border-yellow-400 text-yellow-300 rounded-xl font-medium hover:bg-yellow-400 hover:text-black transition"
          >
            <FaEnvelope /> info@scolarsunited.com
          </a>
        </div>
      </section>
    </div>
  );
}
