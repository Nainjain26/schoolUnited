"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import WhatStudentEmpowermentMeans from "../Components/StudentIntro";
import PersonalizedLearning from "../Components/SchoolSection";
import SolutionLearning from "../Components/StudentSecond";
import CallToActionSection from "../Components/CallToAction";

export default function StudentHeroBanner() {
  return (
    <div className="container mx-auto">
      <section className="relative w-full min-h-[70vh] bg-gradient-to-tl from-indigo-400 via-indigo-500 to-indigo-400 overflow-hidden flex items-center justify-center px-6 md:px-12 lg:px-20">
        {/* Floating SVG Particles */}
        <div className="absolute inset-0 overflow-hidden z-0">
          <motion.div
            className="absolute top-0 left-0 w-48 h-48 bg-purple-300 opacity-30 rounded-full blur-3xl animate-float-slow"
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 10, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-10 right-10 w-32 h-32 bg-yellow-200 opacity-20 rounded-full blur-2xl animate-float-fast"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
        </div>

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center w-full max-w-7xl">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white max-w-xl space-y-6"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Empowering Every <span className="text-yellow-300">Student</span>{" "}
              to Shine
            </h1>
            <p className="text-lg text-white/90">
              Scolars United helps learners reach their full potential through
              personalized support and growth-focused strategies.
            </p>
            <Link href="/student-approach">
              <button className="mt-4 bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold py-3 px-8 rounded-full shadow-xl transition duration-300">
                Explore Our Approach
              </button>
            </Link>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <Image
              src="/school1.png"
              alt="Happy Students"
              width={500}
              height={500}
              className=" object-cover w-full max-w-sm md:max-w-md lg:max-w-lg"
            />
          </motion.div>
        </div>

        <style jsx>{`
          @keyframes floatSlow {
            0% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(20px);
            }
            100% {
              transform: translateY(0);
            }
          }

          @keyframes floatFast {
            0% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-15px);
            }
            100% {
              transform: translateY(0);
            }
          }

          .animate-float-slow {
            animation: floatSlow 10s ease-in-out infinite;
          }

          .animate-float-fast {
            animation: floatFast 8s ease-in-out infinite;
          }
        `}</style>
      </section>
      <WhatStudentEmpowermentMeans />
      <PersonalizedLearning />
      <CallToActionSection />
      <SolutionLearning />
    </div>
  );
}
