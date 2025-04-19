"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaSchool } from "react-icons/fa";
import Image from "next/image";

export default function SchoolEmpowermentIntro() {
  return (
    <section className="w-full bg-gradient-to-br from-indigo-50 to-white py-20 px-4 md:px-10 overflow-hidden">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 max-w-7xl mx-auto">
        {/* Left Content */}
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-indigo-600 mb-4">
          School Empowerment <span className="text-gray-800">Program</span>
          </h2>
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
            At <span className="text-indigo-600 font-semibold">Scholars United</span>, we believe that a truly impactful education system begins with empowered institutions. The Schools Empowerment Program is a transformative journey crafted to redefine the very fabric of how schools operate, evolve, and inspire. This program is more than just a roadmap—it&apos;s a partnership. We start by delving deep into your institution&apos;s current landscape, conducting a meticulous present-state analysis that highlights strengths and uncovers opportunities. From there, we design actionable strategies that address not just today&apos;s challenges but anticipate tomorrow&apos;s possibilities. But empowerment isn&apos;t about plans; it&apos;s about progress. That&apos;s why we work alongside schools to implement these strategies seamlessly, embedding growth into the institution&apos;s DNA.
          </p>
        </motion.div>

        {/* Right Visual */}
        <motion.div
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative  w-full max-w-md">
            <Image
              src="/school.jpg" 
              alt="School Growth Visual"
              width={500}
              height={500}
              className="rounded-3xl shadow-xl border-x-4 border-indigo-600"
            />
            <FaSchool className="absolute bottom-4 right-4 bg-white py-1 px-2 rounded-e-4xl text-indigo-500 text-6xl animate-bounce" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
