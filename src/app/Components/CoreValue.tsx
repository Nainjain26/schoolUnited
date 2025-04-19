"use client";
import { FaUsers, FaLightbulb, FaHandsHelping, FaHeart, FaUserCog, FaSeedling } from "react-icons/fa";
import { motion } from "framer-motion";
import React, { useState } from "react";

const coreValues = [
  {
    icon: <FaUsers className="text-3xl text-indigo-600" />,
    title: "Inclusivity",
    text: "We welcome and uplift every learner and educator, regardless of background."
  },
  {
    icon: <FaLightbulb className="text-3xl text-yellow-500" />,
    title: "Innovation",
    text: "We believe in continuously evolving educational practices through creativity and technology."
  },
  {
    icon: <FaUserCog className="text-3xl text-blue-500" />,
    title: "Personalization",
    text: "Each student is unique. We tailor experiences to meet individual needs."
  },
  {
    icon: <FaHandsHelping className="text-3xl text-green-600" />,
    title: "Collaboration",
    text: "Stronger together—we grow by working with schools, communities, and families."
  },
  {
    icon: <FaHeart className="text-3xl text-pink-500" />,
    title: "Empathy",
    text: "We listen with compassion and respond with understanding and care."
  },
  {
    icon: <FaSeedling className="text-3xl text-emerald-500" />,
    title: "Growth Mindset",
    text: "Learning never ends. We encourage curiosity, effort, and resilience."
  }
];

export default function CoreValuesSection() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="w-full py-20 bg-white overflow-hidden">
      <div className="text-center mb-12 px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
          Our Core <span className="text-indigo-600">Values</span>
        </h2>
        <p className="text-gray-600 text-base md:text-lg">
          At Scholars United, our values guide how we empower schools and inspire students.
        </p>
      </div>

      <div
        className="overflow-x-auto no-scrollbar"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className={`flex space-x-6 w-max px-4 ${!isHovered ? "animate-slide" : ""}`}
        >
          {[...coreValues, ...coreValues].map((value, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="min-w-[280px] max-w-sm bg-gray-50 rounded-full p-8 text-center shadow-md hover:shadow-xl transition duration-300"
            >
              <div className="mb-4 flex justify-center">{value.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{value.title}</h3>
              <p className="text-gray-600 text-sm">{value.text}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .animate-slide {
          animation: slideLeft 40s linear infinite;
        }
        @keyframes slideLeft {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        @media (max-width: 768px) {
          .min-w-[280px] {
            min-width: 220px;
          }
          .max-w-sm {
            max-width: 300px;
          }
        }
        @media (max-width: 480px) {
          .min-w-[280px] {
            min-width: 180px;
          }
        }
      `}</style>
    </section>
  );
}
