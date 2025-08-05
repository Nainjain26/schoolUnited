

"use client"
import { motion } from 'framer-motion';

import { FaCheckCircle, FaQuoteLeft, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const objectives = [
  { title: 'Awaken Self-Awareness', desc: 'Help children discover who they are, what they feel, and what drives them.' },
  { title: 'Build Inner Strength', desc: 'Cultivate resilience, emotional intelligence, and courage to face life’s complexities.' },
  { title: 'Foster Future-Readiness', desc: 'Equip students with the thinking, tech fluency, and adaptability required for the real world.' },
  { title: 'Ignite Curiosity & Creativity', desc: 'Shift students from rote learning to curiosity-led, meaningful engagement.' },
  { title: 'Promote Values & Empathy', desc: 'Instill social consciousness, kindness, and the power of working together.' },
  { title: 'Empower Purposeful Growth', desc: 'Guide students to set meaningful goals and shape their personal and academic journeys.' },
];

const features = [
  "Psychology-Backed Design",
  "Personalized Experience",
  "Self-Exploration Tools",
  "Hands-On Learning",
  "Open Dialogue Spaces",
  "360° Ecosystem Involvement",
  "Growth Documentation",
  "Modular & Scalable"
];

const outcomes = [
  "Self-Awareness",
  "Emotional Maturity",
  "Academic Motivation",
  "Better Relationships",
  "Idea Ownership",
  "World Readiness"
];

const transformations = [
  "Self-Aware Explorers",
  "Emotionally Resilient Individuals",
  "Confident Decision-Makers",
  "Creative Thinkers & Innovators",
  "Empathetic Collaborators",
  "Tech-Aware & Future-Ready Minds",
  "Purpose-Driven Leaders"
];

export default function ProgramsPage() {
  return (
    <div className="bg-gradient-to-b from-black via-gray-900 to-black text-white px-6 py-16 space-y-32">

      {/* Hero Section */}
      <section className="relative overflow-hidden ">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/hero-pattern.svg')] bg-cover bg-center opacity-5"></div>
        <div className="relative max-w-6xl mx-auto text-center space-y-6 ">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <FaQuoteLeft className="text-yellow-400 text-4xl mx-auto mb-4" />
            <h1 className="text-4xl sm:text-6xl font-extrabold text-yellow-400 leading-tight">
              “True education starts when we stop asking kids to fit in — and start helping them stand out.”
            </h1>
          </motion.div>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            Our flagship programs go beyond learning — they transform lives through self-awareness, emotional strength, and future-readiness.
          </p>
        </div>
      </section>

      {/* Objectives Zig-Zag Layout */}
      <section className="max-w-6xl mx-auto">
        <h2 className="md:text-6xl text-3xl font-extrabold text-center mb-12   text-white">Program Objectives</h2>
        <div className="space-y-16">
          {objectives.map((obj, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className={`flex flex-col md:flex-row ${idx % 2 === 0 ? '' : 'md:flex-row-reverse'} items-center gap-10`}
            >
              <div className="md:w-1/2 p-6 bg-gray-900 rounded-2xl shadow-lg border border-pink-500/30">
                <h3 className="text-2xl font-bold text-yellow-300 mb-2">{obj.title}</h3>
                <p className="text-gray-300 text-base">{obj.desc}</p>
              </div>
              <div className="md:w-1/2 h-52 bg-gradient-to-br from-yellow-500 via-pink-500 to-purple-600 rounded-xl"></div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features: Card Grid */}
      <section className="max-w-7xl mx-auto">
        <h2 className="md:text-6xl text-3xl font-extrabold text-center text-white mb-12 ">Program Features</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-900 p-6 rounded-xl border border-cyan-500/40 shadow-md hover:shadow-cyan-500/20"
            >
              <FaCheckCircle className="text-green-400 text-xl mb-2" />
              <p className="text-white font-semibold text-sm">{feature}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Outcomes: Horizontal Scroll */}
      <section className="max-w-6xl mx-auto">
        <h2 className="md:text-6xl text-3xl font-extrabold text-center text-white mb-8">Program Outcomes</h2>
        <div className="overflow-x-auto whitespace-nowrap py-4 scrollbar-thin scrollbar-thumb-yellow-400">
          {outcomes.map((outcome, idx) => (
            <motion.span
              key={idx}
              whileHover={{ scale: 1.1 }}
              className="inline-block px-6 py-3 mx-2 bg-gray-800 border border-yellow-400 rounded-full text-yellow-100 text-sm font-medium shadow"
            >
              {outcome}
            </motion.span>
          ))}
        </div>
      </section>

      {/* Transformation: 3D Card Effect */}
      <section className="max-w-6xl mx-auto">
        <h2 className="md:text-6xl text-3xl font-extrabold text-center text-white mb-8">Who They Become</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 perspective">
          {transformations.map((label, idx) => (
            <motion.div
              key={idx}
              whileHover={{ rotateY: 5, scale: 1.05 }}
              className="bg-gradient-to-br from-gray-800 via-gray-900 to-black p-6 rounded-xl border border-purple-500/30 shadow-xl"
            >
              <p className="text-white text-center font-semibold text-lg">{label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="relative max-w-5xl mx-auto text-center py-16 px-8 rounded-3xl border border-yellow-500/30 shadow-xl bg-gradient-to-br from-yellow-900 via-black to-purple-900">
        <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">Bring This Movement To Your School</h3>
        <p className="text-gray-300 mb-8">Fill out the form or reach out directly — we’ll send a custom proposal within 48 hours.</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="tel:+918955529950" className="flex items-center gap-2 px-6 py-3 bg-yellow-400 text-black rounded-xl font-semibold hover:bg-yellow-300 transition">
            <FaPhoneAlt /> +91 8955529950
          </a>
          <a href="mailto:info@scolarsunited.com" className="flex items-center gap-2 px-6 py-3 border border-yellow-400 text-yellow-300 rounded-xl font-medium hover:bg-yellow-400 hover:text-black transition">
            <FaEnvelope /> info@scolarsunited.com
          </a>
        </div>
      </section>
    </div>
  );
}
