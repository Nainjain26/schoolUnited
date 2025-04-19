"use client";
import { FaSchool, FaUserGraduate } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";

type ParticleSVGProps = {
  x: string;
  y: string;
  delay: number;
};

export default function ProgramsOverview() {
  const [selected, setSelected] = useState<number|null>(null);

  const services = [
    {
      title: "Skill Development",
      content:
        "Scholar Unites offers training programs that focus on holistic skill development from communication to tech literacy.",
      icon: <FaUserGraduate className="text-indigo-600" />,
    },
    {
      title: "Counseling & Guidance",
      content:
        "Personal and career counseling by experienced professionals to guide students and educators on the right path.",
      icon: <FaSchool className="text-indigo-600" />,
    },
    {
      title: "Community Engagement",
      content:
        "Workshops and community-based programs designed to foster student growth and institutional awareness.",
      icon: <FaUserGraduate className="text-indigo-600" />,
    },
    {
      title: "Digital Literacy",
      content:
        "Providing tools, courses, and coaching to help bridge the digital divide in education.",
      icon: <FaSchool className="text-indigo-600" />,
    },
  ];

  // SVG Particle Animation
  const ParticleSVG = ({ x, y, delay }: ParticleSVGProps) => (
    <motion.svg
      className="absolute w-12 h-12 text-amber-300 opacity-50"
      viewBox="0 0 50 50"
      fill="currentColor"
      style={{ top: y, left: x }}
      animate={{
        y: [0, -20, 0],
        opacity: [0.5, 1, 0.5],
        scale: [1, 1.2, 1],
      }}
      transition={{ duration: 4, repeat: Infinity, delay, ease: "easeInOut" }}
    >
      <circle cx="25" cy="25" r="10" />
    </motion.svg>
  );

  // Animated Heading Letters
  const headingText = "What We Offer".split("");
  const headingVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i:number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" },
    }),
  };

  return (
    <div className="container mx-auto">
      {/* What We Offer Section */}
      <section className="relative py-20 px-4 md:px-20 bg-gradient-to-br from-indigo-50 via-gray-50 to-amber-50 overflow-hidden">
        {/* Background Animations */}
        <motion.div
          className="absolute top-[-100px] left-[-100px] w-[500px] h-[500px] bg-indigo-500 opacity-60 rounded-full blur-3xl"
          animate={{ scale: [1, 1.4, 1], rotate: [0, 45, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[-150px] right-[-150px] w-[600px] h-[600px] bg-amber-400 opacity-20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.5, 1], rotate: [0, -45, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-transparent to-indigo-100 opacity-10"
          animate={{ opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Floating Particles */}
        <ParticleSVG x="10%" y="20%" delay={0} />
        <ParticleSVG x="80%" y="30%" delay={1} />
        <ParticleSVG x="50%" y="70%" delay={2} />
        <ParticleSVG x="90%" y="70%" delay={3} />

        <div className="relative z-10">
          <div className="text-center mb-24">
            <motion.div
              className="flex justify-center space-x-1"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {headingText.map((letter, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  variants={headingVariants}
                  className={`text-5xl md:text-6xl font-extrabold ${
                    letter === "O" ? "text-amber-500" : "text-gray-900"
                  } ${letter === " " ? "w-4" : ""}`}
                >
                  {letter}
                </motion.span>
              ))}
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              className="text-gray-700 max-w-3xl mx-auto text-lg md:text-xl mt-6 font-light"
            >
              Discover transformative services and opportunities designed to empower schools and students with Scholar Unites.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-16">
            {/* Left Side – Visual Design with Enhanced Hover */}
            <div className="relative grid grid-cols-3 gap-8 items-center justify-center">
              <motion.div
                className="col-span-1 relative group"
                whileHover={{
                  scale: 1.08,
                  rotate: 2,
                  transition: { duration: 0.4, ease: "easeOut" },
                }}
              >
                <motion.div
                  className="absolute inset-0 bg-indigo-300 opacity-0 rounded-br-3xl rounded-tl-3xl group-hover:opacity-20"
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
                <motion.div
                  className="absolute -inset-2 border-2 border-transparent group-hover:border-amber-300 rounded-br-3xl rounded-tl-3xl"
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
                <Image
                  src="/s2.jpg"
                  width={200}
                  height={200}
                  alt="Education Insight"
                  className="rounded-br-3xl rounded-tl-3xl shadow-xl group-hover:shadow-2xl transition-shadow duration-300 z-10"
                />
                <motion.video
                  className="rounded-3xl mt-8 shadow-xl group-hover:shadow-2xl transition-shadow duration-300 z-10"
                  width="100%"
                  autoPlay
                  loop
                  muted
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.4, ease: "easeOut" },
                  }}
                >
                  <source src="/video1.mp4" type="video/mp4" />
                </motion.video>
              </motion.div>
              <motion.div
                className="col-span-1 relative group"
                whileHover={{
                  scale: 1.08,
                  rotate: -2,
                  transition: { duration: 0.4, ease: "easeOut" },
                }}
              >
                <motion.div
                  className="absolute inset-0 bg-amber-300 opacity-0 rounded-full group-hover:opacity-20"
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
                <motion.div
                  className="absolute -inset-2 border-4 border-transparent group-hover:border-indigo-300 rounded-full"
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
                <Image
                  src="/s3.jpg"
                  width={250}
                  height={250}
                  alt="Learning Hub"
                  className="rounded-full border-4 border-amber-100 shadow-2xl group-hover:shadow-amber-400 transition-shadow duration-300 z-10"
                />
              </motion.div>
              <motion.div
                className="col-span-1 relative group"
                whileHover={{
                  scale: 1.08,
                  rotate: 2,
                  transition: { duration: 0.4, ease: "easeOut" },
                }}
              >
                <motion.div
                  className="absolute inset-0 bg-indigo-300 opacity-0 rounded-3xl group-hover:opacity-20"
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
                <motion.div
                  className="absolute -inset-2 border-2 border-transparent group-hover:border-amber-300 rounded-3xl"
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
                <motion.video
                  className="rounded-3xl shadow-xl group-hover:shadow-2xl transition-shadow duration-300 z-10"
                  width="100%"
                  autoPlay
                  loop
                  muted
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.4, ease: "easeOut" },
                  }}
                >
                  <source src="/video2.mp4" type="video/mp4" />
                </motion.video>
                <Image
                  src="/s1.jpg"
                  width={300}
                  height={300}
                  alt="Community Growth"
                  className="rounded-3xl mt-8 shadow-xl group-hover:shadow-2xl transition-shadow duration-300 z-10"
                />
              </motion.div>
            </div>

            {/* Right Side – Expandable Content with Enhanced Hover */}
            <div className="space-y-4">
              {services.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.25,
                    ease: "easeOut",
                  }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
                    background: "linear-gradient(to right, #ffffff, #f8faff)",
                  }}
                  className={`relative bg-white p-4 rounded-2xl shadow-xl border-2 border-gray-100 transition-all duration-400 cursor-pointer overflow-hidden ${
                    selected === index ? "bg-indigo-50 border-indigo-200" : ""
                  }`}
                  onClick={() => setSelected(selected === index ? null : index)}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-indigo-200 to-amber-100 opacity-0"
                    whileHover={{ opacity: 0.25 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  />
                  <div className="flex items-center space-x-5">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      className="text-3xl"
                    >
                      {item.icon}
                    </motion.div>
                    <h3 className="text-2xl font-semibold text-gray-900">
                      {item.title}
                    </h3>
                  </div>
                  <AnimatePresence>
                    {selected === index && (
                      <motion.p
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="text-gray-600 mt-5 text-base leading-relaxed"
                      >
                        {item.content}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}