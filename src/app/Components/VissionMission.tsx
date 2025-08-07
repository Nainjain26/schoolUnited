"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const tabs = [
  { key: "story", label: "Our Story" },
  { key: "vision", label: "Vision" },
  { key: "mission", label: "Mission" },
];

const ParticleBg = () => {
  const particles = Array.from({ length: 40 }, (_, i) => ({
    id: i,
    size: Math.random() * 48 + 24,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    color: [
      "rgba(253,224,71,0.22)", // Gold
      "rgba(147,51,234,0.18)", // Purple
      "rgba(59,130,246,0.18)", // Blue
      "rgba(236,72,153,0.18)", // Pink
      "rgba(255,255,255,0.15)", // White
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
            opacity: 0.9,
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
  const [active, setActive] = useState("story");
  return (
    <section className="relative py-16 bg-black overflow-hidden">
      <ParticleBg />
      <div className="relative max-w-6xl mx-auto z-10 px-4">
        <div className="flex justify-center gap-2 flex-wrap mb-8">
          {tabs.map((t) => (
            <button
              key={t.key}
              onClick={() => setActive(t.key)}
              className={`px-4 py-2 rounded-t-lg text-sm sm:text-base font-semibold transition-all ${
                active === t.key
                  ? "bg-gradient-to-r from-yellow-500 to-purple-500 text-white shadow-lg"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-yellow-400"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {active === "story" && (
            <motion.div
              key="story"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
              className="bg-[#121215] rounded-3xl shadow-xl p-8  text-white"
            >
              <h2 className="text-3xl font-extrabold text-white mb-4">
                OUR STORY
              </h2>
              <p className="leading-relaxed text-gray-200 md:text-lg">
                At Scolars United, we believe that every child carries the spark
                of greatness within. Beyond textbooks and exam halls lies a
                deeper world—one shaped by curiosity, emotional strength, and
                the courage to grow into one&apos;s true self.
                <br />
                <br />
                Founded by a team of seasoned educators with over 20+ years of
                experience, we&apos;ve witnessed both the strengths and
                shortcomings of the current education system. What unites us is
                a mission to redesign schooling—not just to improve academic
                outcomes, but to place the mental well-being and holistic growth
                of children at the heart of it.
                <br />
                <br />
                We are not just teaching students; we are helping them unlock
                their uniqueness, build resilience, and redefine what success
                truly means. For us, every child is a potential topper—not by
                conforming, but by becoming the best version of themselves.
                <br />
                <br />
                This isn&apos;t just another initiative. It&apos;s a quiet
                revolution. And we&apos;re here to lead it.
              </p>
            </motion.div>
          )}

          {active === "vision" && (
            <SectionWithImage
              key="vision"
              title="OUR VISION"
            
              centerImgSrc="/1.png"
              itemsLeft={[
                {
                  icon: "🎯",
                  title: "Redefining Achievement",
                  desc: "Academic success should reflect more than grades—it should also measure resilience, personal growth, and emotional well-being.",
                },
                {
                  icon: "🏷️",
                  title: "Discovery Over Labels",
                  desc: 'Children are not "achievers" or "non-achievers." Every child walks their own path, and we honor that individuality.',
                },
                {
                  icon: "🌱",
                  title: "Schools as Gardens of Potential",
                  desc: "Institutions should be nurturing spaces where young minds are given the right conditions to bloom into their fullest selves.",
                },
              ]}
              itemsRight={[
                {
                  icon: "🧭",
                  title: "Education as a Journey Within",
                  desc: "True education begins with self-awareness. We help students explore who they are—not just what they know.",
                },
                {
                  icon: "💡",
                  title: "Creativity and Curiosity at the Core",
                  desc: "We champion schools that value questions over answers and creativity over rote learning.",
                },
                {
                  icon: "❤️",
                  title: "Mental Health Matters",
                  desc: "Students should be emotionally equipped to face life. We foster awareness, emotional intelligence, and psychological safety.",
                },
              ]}
              introText="At Scolars United, we imagine an education system where children walk into school not with the fear of failure, but with the joy of discovery. A system where success is not defined by conformity, but by each child's unique journey toward self-awareness, growth, and fulfillment. We believe that education should nourish the mind and the soul—preparing children to thrive not only academically, but emotionally and socially, in a complex and ever-changing world."
              conclusionText="Every Child, Every Chance - We believe every single child deserves the opportunity to thrive—not by fitting in, but by standing out for who they truly are."
            />
          )}

          {active === "mission" && (
            <SectionWithImage
              key="mission"
              title="OUR MISSION"
            
              centerImgSrc="/m.png"
              itemsLeft={[
                {
                  icon: "🎯",
                  title: "Whole-Child Redesign of Education",
                  desc: "We support institutions in moving beyond marks and syllabi—towards environments where the full potential of each child is nurtured.",
                },
                {
                  icon: "🧠",
                  title: "Academic Excellence + Emotional Intelligence",
                  desc: "We blend rigorous academics with emotional literacy to develop not just high-achievers, but strong, balanced individuals.",
                },
                {
                  icon: "🌱",
                  title: "Empowering Students to Think, Feel & Grow",
                  desc: "Learning isn't just cognitive—it's emotional and personal. We help students engage deeply with themselves and their world.",
                },
              ]}
              itemsRight={[
                {
                  icon: "🔍",
                  title: "Every Child Has a Blueprint for Greatness",
                  desc: "We believe greatness already exists within each child. Our role is to help uncover and activate it.",
                },
                {
                  icon: "🛠️",
                  title: "Transforming Schools into Sanctuaries of Growth",
                  desc: "We work with schools to evolve from being mere institutions of instruction into safe, inspiring spaces for holistic development.",
                },
                {
                  icon: "📈",
                  title: "Life-Readiness, Not Just Exam-Readiness",
                  desc: "Our child-centered programs equip students with the tools to navigate life—emotionally, mentally, and academically.",
                },
              ]}
              introText="At Scolars United, we exist to turn the tide. In an era where traditional education often falls short of nurturing the whole child, we are committed to rewriting the narrative. Our mission is to build a new paradigm—where academic excellence goes hand-in-hand with emotional resilience, mental well-being, and self-awareness. We believe education must be a transformative journey, not just a transactional one."
              conclusionText="Change Isn't Optional—It's Essential - This mission isn't a dream for the future. It's the educational shift the present demands—and we are here to lead it."
            />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

interface SectionWithImageProps {
  title: string;
 
  centerImgSrc: string;
  itemsLeft: Array<{ icon: string; title: string; desc: string }>;
  itemsRight: Array<{ icon: string; title: string; desc: string }>;
  introText: string;
  conclusionText: string;
}

function SectionWithImage({
  title,

  centerImgSrc,
  itemsLeft,
  itemsRight,
  introText,
  conclusionText,
}: SectionWithImageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5 }}
      className={`bg-[#0f0f20] rounded-3xl shadow-xl p-8  text-white`}
    >
      <h2
        className={`text-3xl font-extrabold text-center  mb-6`}
      >
        {title}
      </h2>

      {/* Introductory Text */}
      <p className="text-gray-300 text-center mb-8 leading-relaxed">
        {introText}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        <div className="space-y-6">
          {itemsLeft.map((it, i) => (
            <Card key={i} {...it} />
          ))}
        </div>
        <div className="flex items-center justify-center">
          <img
            src={centerImgSrc}
            alt={title}
            className="w-full max-w-[280px]"
          />
        </div>
        <div className="space-y-6">
          {itemsRight.map((it, i) => (
            <Card key={i} {...it} />
          ))}
        </div>
      </div>

      {/* Conclusion Text */}
      <div className="text-center mt-8 pt-6 border-t border-gray-700">
        <p className="text-gray-300 font-semibold">{conclusionText}</p>
      </div>
    </motion.div>
  );
}

interface CardProps {
  icon: string;
  title: string;
  desc: string;
}

function Card({ icon, title, desc }: CardProps) {
  return (
    <div className="flex gap-4  items-start">
      <div className="text-2xl">{icon}</div>
      <div>
        <h3 className="font-bold text-rgba(253,224,71,0.22) text-lg">{title}</h3>
        <p className="text-gray-300 text-sm">{desc}</p>
      </div>
    </div>
  );
}
