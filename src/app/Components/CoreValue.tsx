"use client";
import {
  FaUsers,
  FaLightbulb,
  FaHandsHelping,
  FaHeart,
  FaSeedling,
} from "react-icons/fa";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";

const values = [
  {
    icon: <FaUsers className="text-3xl text-indigo-600" />,
    title: "Clarity",
    desc: "We foster clarity of thought, emotion, and purpose — for learners, educators, and institutions alike.",
  },
  {
    icon: <FaHandsHelping className="text-3xl text-green-600" />,
    title: "Empathy & Co-Creation",
    desc: "We believe growth is a shared process. Our work is built through collaboration with stakeholders, not in isolation from them.",
  },
  {
    icon: <FaLightbulb className="text-3xl text-yellow-500" />,
    title: "Purpose-Driven Design",
    desc: "Every program is designed not just to inform, but to transform — aligning individual growth with institutional vision.",
  },
  {
    icon: <FaHeart className="text-3xl text-pink-500" />,
    title: "Integrity in Learning",
    desc: "We work with depth, authenticity, and a deep respect for scientific research, cultural relevance, and lived experience.",
  },
  {
    icon: <FaSeedling className="text-3xl text-emerald-500" />,
    title: "Agility & Innovation",
    desc: "We constantly refine, adapt, and innovate — because education must stay ahead of the curve, not behind it.",
  },
];

export default function CoreValuesSection() {
  const [index, setIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(1);
  const [isHovered, setIsHovered] = useState(false);

  // Responsive: update slidesToShow on resize
  useEffect(() => {
    function updateSlides() {
      if (window.innerWidth >= 1024) {
        setSlidesToShow(3);
      } else if (window.innerWidth >= 640) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(1);
      }
    }
    updateSlides();
    window.addEventListener("resize", updateSlides);
    return () => window.removeEventListener("resize", updateSlides);
  }, []);

  // Auto-advance logic, pause on hover
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % values.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isHovered]);

  // Get the slides to show
  const getSlides = () => {
    const slides = [];
    for (let i = 0; i < slidesToShow; i++) {
      slides.push(values[(index + i) % values.length]);
    }
    return slides;
  };

  return (
    <section className="w-full py-20 bg-[#181c3a] text-gray-100 overflow-hidden">
      <div className="max-w-2xl mx-auto text-center mb-12 px-4">
        <h2 className="text-3xl md:text-6xl font-extrabold mb-4 text-white">
          OUR VALUES
        </h2>
        <p className="text-gray-300 text-base md:text-lg">
          These principles guide everything we build, deliver, and stand for:
        </p>
      </div>
      <div className="flex justify-center items-center">
        <div className="relative w-full max-w-4xl min-h-[260px]">
          <div className="flex gap-6 justify-center items-stretch">
            {getSlides().map((value, i) => (
              <motion.div
                key={value.title + i + index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5 }}
                className="flex-1 min-w-0"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <div className="flex flex-col items-center bg-[#23284d] rounded-2xl shadow-lg p-8 border-l-4 border-yellow-400 w-full max-w-xs mx-auto h-full">
                  <div className="mb-3">{value.icon}</div>
                  <h3 className="text-xl font-semibold text-yellow-300 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-200 text-base text-center">
                    {value.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <div className="max-w-5xl mx-auto mt-24 px-6 relative">
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay: 0.3 }}
    className="relative bg-black/70 border border-gray-700 backdrop-blur-md rounded-3xl p-10 shadow-[0_20px_60px_rgba(0,0,0,0.7)] overflow-hidden"
  >
    {/* Glowing Gradient Ring */}
    <div className="absolute inset-0 rounded-3xl z-0 pointer-events-none animate-pulseGlow bg-gradient-to-br from-yellow-400/30 via-fuchsia-500/20 to-purple-600/30 blur-2xl" />

    <div className="relative z-10 text-center text-white space-y-6">
      <h4 className="text-4xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 drop-shadow-md">
        Join the Movement
      </h4>
      <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
        <span className="text-white font-semibold">Scholars United</span> is more than a service — it&apos;s a revolution in learning.
        We&apos;re crafting futures with relevance, resilience, and real-world impact.
      </p>
      <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
        Parents seeking clarity. Teachers eager to grow. Institutions hungry for transformation.
        <br />
        <span className="text-yellow-400 font-bold">
          Let&apos;s build education that empowers — together.
        </span>
      </p>
    </div>
  </motion.div>
</div>

    </section>
  );
}
