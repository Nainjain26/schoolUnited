"use client";


import { motion } from "framer-motion";
import { FaBook, FaLightbulb, FaUserShield, FaGlobe, FaBullhorn, FaHandshake } from "react-icons/fa";

const services = [
  {
    icon: <FaBook className="text-5xl text-indigo-600 group-hover:scale-125 transition-transform duration-300" />,
    title: "Empowerment Programs",
    description: "Personalized programs that nurture academic and emotional growth."
  },
  {
    icon: <FaLightbulb className="text-5xl text-yellow-500 group-hover:scale-125 transition-transform duration-300" />,
    title: "Curriculum Innovation",
    description: "Modern teaching methods and dynamic curriculum support."
  },
  {
    icon: <FaUserShield className="text-5xl text-green-500 group-hover:scale-125 transition-transform duration-300" />,
    title: "Holistic Development",
    description: "Building confidence, resilience, and leadership in students."
  },
  {
    icon: <FaGlobe className="text-5xl text-blue-500 group-hover:scale-125 transition-transform duration-300" />,
    title: "Global Readiness",
    description: "Equipping learners with skills to thrive globally."
  },
  {
    icon: <FaBullhorn className="text-5xl text-pink-500 group-hover:scale-125 transition-transform duration-300" />,
    title: "School Marketing",
    description: "Strategic branding, social media, and digital presence support."
  },
  {
    icon: <FaHandshake className="text-5xl text-purple-600 group-hover:scale-125 transition-transform duration-300" />,
    title: "Partnership Support",
    description: "Helping institutions grow through strategic collaborations."
  }
];

export default function CoreServices() {
  return (
    <section className="relative  w-full px-6 py-20 md:px-20 bg-gradient-to-br from-white via-indigo-50 to-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <svg className="w-full h-full" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
          <circle cx="200" cy="150" r="40" fill="#c7d2fe" opacity="0.3">
            <animate attributeName="cy" values="150;170;150" dur="6s" repeatCount="indefinite" />
          </circle>
          <circle cx="600" cy="400" r="30" fill="#ddd6fe" opacity="0.3">
            <animate attributeName="cy" values="400;380;400" dur="5s" repeatCount="indefinite" />
          </circle>
        </svg>
      </div>

      <div className="relative z-10 text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl font-extrabold text-gray-800"
        >
          Our Core Services
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg"
        >
          Discover the essential solutions we offer to empower institutions and learners alike.
        </motion.p>
      </div>

      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.15, duration: 0.5 }}
            className="group bg-white rounded-3xl shadow-xl p-8 hover:bg-indigo-100 transition-all duration-300 hover:shadow-2xl border border-gray-200 hover:border-indigo-400"
          >
            <div className="flex flex-col items-center text-center">
              {service.icon}
              <h3 className="mt-5 text-2xl font-semibold text-indigo-800">
                {service.title}
              </h3>
              <p className="mt-3 text-sm text-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {service.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
