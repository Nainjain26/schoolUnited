"use client";

import { motion } from "framer-motion";

import React from "react";
import Image from "next/image";
import WhatStudentEmpowermentMeans from "../Components/StudentIntro";
import PersonalizedLearning from "../Components/SchoolSection";
import SolutionLearning from "../Components/StudentSecond";
import CallToActionSection from "../Components/CallToAction";

export default function StudentHeroBanner() {
  return (
    <div className="container mx-auto">
      {/* Hero Section with Dark Theme */}
      <section className="relative w-full min-h-[100vh] bg-gradient-to-br from-gray-950 via-black to-gray-900 overflow-hidden flex items-center justify-center px-6 md:px-12 lg:px-20 ">
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/bg.jpg"
            alt="Students Background"
            fill
            className="object-cover opacity-40"
            priority
          />
          {/* Dark Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-gray-900/70 to-black/80" />
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden z-0">
          <motion.div
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.4, 0.2],
              rotate: [0, 180, 360],
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-blue-500/20 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.3, 0.6, 0.3],
              rotate: [360, 180, 0],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 w-32 h-32 bg-yellow-500/15 rounded-full blur-2xl"
            animate={{
              y: [0, -30, 0],
              x: [0, 20, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: Math.random() * 4 + 3,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Centered Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="space-y-6"
          >
            {/* Main Heading */}
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
                Empowering Every
              </span>
              <br />
              <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
                Student
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                to Shine
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Scolars United helps learners reach their full potential through
              personalized support and growth-focused strategies that transform
              education into an empowering journey.
            </motion.p>

            
            

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="pt-6"
            >
              <p className="text-gray-400 text-sm">
                Built by Experts • Backed by Schools • Trusted by Parents •
                Loved by Students
              </p>
            </motion.div>
          </motion.div>
        </div>

       
       
      </section>

      {/* Rest of the Components */}
      <WhatStudentEmpowermentMeans />
      <PersonalizedLearning />
      <CallToActionSection />
      <SolutionLearning />
    </div>
  );
}
