"use client";
import { FaSchool, FaUserGraduate, FaChalkboardTeacher, FaBookOpen } from "react-icons/fa";
import { motion } from "framer-motion";
import React from "react";

export default function WhoWeHelpSection() {
  return (
    <section className="w-full bg-gradient-to-br from-indigo-50 to-white py-24 px-4 md:px-10 overflow-hidden">
      <div className="text-center mb-20">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
        >
          Who We <span className="text-indigo-600">Help</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto"
        >
          Scholars United supports both educational institutions and students by delivering cutting-edge tools and personalized strategies to foster success.
        </motion.p>
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-stretch gap-12">
        {/* For Schools */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          whileHover={{ scale: 1.05 }}
          className="relative bg-white p-10 rounded-3xl shadow-2xl w-full max-w-xl transition-transform duration-300 hover:bg-indigo-100 hover:shadow-indigo-200 group"
        >
          <div className="absolute -top-10 -left-10">
            <FaSchool className="text-6xl text-indigo-300 opacity-20 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110" />
          </div>
          <h3 className="text-2xl font-bold mb-4 text-indigo-700 flex items-center gap-2">
            <FaChalkboardTeacher className="transition-transform duration-300 group-hover:text-indigo-600 group-hover:scale-110" /> For Schools
          </h3>
          <ul className="list-disc list-inside space-y-3 text-gray-600">
            <li>Comprehensive school development planning</li>
            <li>Custom curriculum & syllabus frameworks</li>
            <li>Teacher training for 21st-century skills</li>
            <li>Digital infrastructure and e-learning integration</li>
            <li>Institutional branding and operational strategy</li>
            <li>Inclusive pedagogy training and administration support</li>
          </ul>
        </motion.div>

        {/* For Students */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          whileHover={{ scale: 1.05 }}
          className="relative bg-white p-10 rounded-3xl shadow-2xl w-full max-w-xl transition-transform duration-300 hover:bg-indigo-100 hover:shadow-indigo-200 group"
        >
          <div className="absolute -top-10 -right-10">
            <FaUserGraduate className="text-6xl text-indigo-300 opacity-20 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110" />
          </div>
          <h3 className="text-2xl font-bold mb-4 text-indigo-700 flex items-center gap-2">
            <FaBookOpen className="transition-transform duration-300 group-hover:text-indigo-600 group-hover:scale-110" /> For Students
          </h3>
          <ul className="list-disc list-inside space-y-3 text-gray-600">
            <li>Tailored academic assistance and mentoring</li>
            <li>Analytical reasoning and aptitude testing</li>
            <li>Mind-mapping and self-learning workshops</li>
            <li>Career guidance and psychological profiling</li>
            <li>Interactive mock tests and gamified assessments</li>
            <li>Confidence building, public speaking, and soft skill training</li>
          </ul>
        </motion.div>
      </div>

      {/* Decorative connector */}
      <div className="relative w-full flex justify-center mt-20">
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1 }}
          className="h-1 w-4/5 bg-gradient-to-r from-indigo-400 to-indigo-600 rounded-full origin-left"
        ></motion.div>
      </div>
    </section>
  );
}
