"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const tabs = [
  { key: "story", label: "Our Story" },
  { key: "vision", label: "Vision" },
  { key: "mission", label: "Mission" },
];

// Particle background component
const ParticleBg = () => {
  const particles = Array.from({ length: 40 }, (_, i) => ({
    id: i,
    size: Math.random() * 48 + 24, // bigger
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    color: [
      "rgba(253,224,71,0.22)", // yellow, more visible
      "rgba(99,102,241,0.18)", // indigo
      "rgba(34,197,94,0.18)", // green
      "rgba(236,72,153,0.18)", // pink
      "rgba(255,255,255,0.15)", // white
    ][Math.floor(Math.random() * 5)],
    duration: Math.random() * 8 + 8,
    delay: Math.random() * 4,
  }));
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full blur-2xl"
          style={{
            width: p.size,
            height: p.size,
            left: p.left,
            top: p.top,
            background: p.color,
            opacity: 0.9, // instead of 0.7
            willChange: "transform, opacity",
            filter: "blur(8px)",
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.7, 1, 0.7],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default function VissionMission() {
  const [activeTab, setActiveTab] = useState("story");

  return (
    <section className="relative py-16 px-2 sm:px-4 md:px-12 bg-black min-h-[600px] overflow-hidden">
      {/* Animated Particle Background */}
      <ParticleBg />
      <div className="max-w-3xl mx-auto relative z-10">
        {/* Tabs */}
        <div className="flex justify-center mb-8 gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-4 py-2 rounded-t-lg font-semibold transition-all duration-200 text-sm sm:text-base
                ${
                  activeTab === tab.key
                    ? "bg-gradient-to-r from-yellow-500 to-purple-500 text-white shadow-lg"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-yellow-400"
                }
              `}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="relative min-h-[350px]">
          <AnimatePresence mode="wait">
            {activeTab === "story" && (
              <motion.div
                key="story"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5 }}
                className="bg-[#23284d] rounded-3xl shadow-xl p-8 border-l-8 border-indigo-400 text-gray-100"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-yellow-400 mb-4">
                  OUR STORY
                </h2>
                <p className="text-gray-200 text-base md:text-lg leading-relaxed">
                  At Scolars United, we believe that every child carries the
                  spark of greatness within. Beyond textbooks and exam halls
                  lies a deeper world—one shaped by curiosity, emotional
                  strength, and the courage to grow into one’s true self.
                  <br />
                  <br />
                  Founded by a team of seasoned educators with over 20+ years of
                  experience, we’ve witnessed both the strengths and
                  shortcomings of the current education system. What unites us
                  is a mission to redesign schooling—not just to improve
                  academic outcomes, but to place the mental well-being and
                  holistic growth of children at the heart of it.
                  <br />
                  <br />
                  We are not just teaching students; we are helping them unlock
                  their uniqueness, build resilience, and redefine what success
                  truly means. For us, every child is a potential topper—not by
                  conforming, but by becoming the best version of themselves.
                  <br />
                  <br />
                  This isn’t just another initiative. It’s a quiet revolution.
                  And we’re here to lead it.
                </p>
              </motion.div>
            )}
            {activeTab === "vision" && (
              <motion.div
                key="vision"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5 }}
                className="bg-[#23284d] rounded-3xl shadow-xl p-8 border-l-8 border-yellow-400 text-gray-100"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-yellow-400 mb-4">
                  VISION
                </h2>
                <p className="text-gray-200 text-base md:text-lg leading-relaxed mb-4">
                  At Scolars United, we imagine an education system where
                  children walk into school not with the fear of failure, but
                  with the joy of discovery. A system where success is not
                  defined by conformity, but by each child’s unique journey
                  toward self-awareness, growth, and fulfillment. We believe
                  that education should nourish the mind and the soul—preparing
                  children to thrive not only academically, but emotionally and
                  socially, in a complex and ever-changing world.
                </p>
                <ul className="list-disc list-inside text-gray-200 space-y-2 pl-2">
                  <li>
                    <span className="font-semibold text-indigo-300">
                      Redefining Achievement:
                    </span>{" "}
                    Academic success should reflect more than grades—it should
                    also measure resilience, personal growth, and emotional
                    well-being.
                  </li>
                  <li>
                    <span className="font-semibold text-indigo-300">
                      Discovery Over Labels:
                    </span>{" "}
                    Children are not “achievers” or “non-achievers.” Every child
                    walks their own path, and we honor that individuality.
                  </li>
                  <li>
                    <span className="font-semibold text-indigo-300">
                      Schools as Gardens of Potential:
                    </span>{" "}
                    Institutions should be nurturing spaces where young minds
                    are given the right conditions to bloom into their fullest
                    selves.
                  </li>
                  <li>
                    <span className="font-semibold text-indigo-300">
                      Education as a Journey Within:
                    </span>{" "}
                    True education begins with self-awareness. We help students
                    explore who they are—not just what they know.
                  </li>
                  <li>
                    <span className="font-semibold text-indigo-300">
                      Creativity and Curiosity at the Core:
                    </span>{" "}
                    We champion schools that value questions over answers and
                    creativity over rote learning.
                  </li>
                  <li>
                    <span className="font-semibold text-indigo-300">
                      Mental Health Matters:
                    </span>{" "}
                    Students should be emotionally equipped to face life. We
                    foster awareness, emotional intelligence, and psychological
                    safety.
                  </li>
                  <li>
                    <span className="font-semibold text-indigo-300">
                      Every Child, Every Chance:
                    </span>{" "}
                    We believe every single child deserves the opportunity to
                    thrive—not by fitting in, but by standing out for who they
                    truly are.
                  </li>
                </ul>
              </motion.div>
            )}
            {activeTab === "mission" && (
              <motion.div
                key="mission"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5 }}
                className="bg-[#23284d] rounded-3xl shadow-xl p-8 border-l-8 border-green-400 text-gray-100"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-green-400 mb-4">
                  MISSION
                </h2>
                <p className="text-gray-200 text-base md:text-lg leading-relaxed mb-4">
                  At Scolars United, we exist to turn the tide. In an era where
                  traditional education often falls short of nurturing the whole
                  child, we are committed to rewriting the narrative. Our
                  mission is to build a new paradigm—where academic excellence
                  goes hand-in-hand with emotional resilience, mental
                  well-being, and self-awareness. We believe education must be a
                  transformative journey, not just a transactional one.
                </p>
                <ul className="list-disc list-inside text-gray-200 space-y-2 pl-2">
                  <li>
                    <span className="font-semibold text-green-300">
                      Whole-Child Redesign of Education:
                    </span>{" "}
                    We support institutions in moving beyond marks and
                    syllabi—towards environments where the full potential of
                    each child is nurtured.
                  </li>
                  <li>
                    <span className="font-semibold text-green-300">
                      Academic Excellence + Emotional Intelligence:
                    </span>{" "}
                    We blend rigorous academics with emotional literacy to
                    develop not just high-achievers, but strong, balanced
                    individuals.
                  </li>
                  <li>
                    <span className="font-semibold text-green-300">
                      Empowering Students to Think, Feel & Grow:
                    </span>{" "}
                    Learning isn’t just cognitive—it’s emotional and personal.
                    We help students engage deeply with themselves and their
                    world.
                  </li>
                  <li>
                    <span className="font-semibold text-green-300">
                      Every Child Has a Blueprint for Greatness:
                    </span>{" "}
                    We believe greatness already exists within each child. Our
                    role is to help uncover and activate it.
                  </li>
                  <li>
                    <span className="font-semibold text-green-300">
                      Transforming Schools into Sanctuaries of Growth:
                    </span>{" "}
                    We work with schools to evolve from being mere institutions
                    of instruction into safe, inspiring spaces for holistic
                    development.
                  </li>
                  <li>
                    <span className="font-semibold text-green-300">
                      Life-Readiness, Not Just Exam-Readiness:
                    </span>{" "}
                    Our child-centered programs equip students with the tools to
                    navigate life—emotionally, mentally, and academically.
                  </li>
                  <li>
                    <span className="font-semibold text-green-300">
                      Change Isn’t Optional—It’s Essential:
                    </span>{" "}
                    This mission isn’t a dream for the future. It’s the
                    educational shift the present demands—and we are here to
                    lead it.
                  </li>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
