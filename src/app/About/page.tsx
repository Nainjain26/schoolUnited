"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import AboutOurStory from "../Components/VissionMission";
import CoreValuesSection from "../Components/CoreValue";
import WhoWeHelpSection from "../Components/WhoWeHelp";
import ProcessSteps from "../Components/Process";

export default function AboutIntroBanner() {
  const stats = [
    { label: "Schools Empowered", target: 350 },
    { label: "Students Benefited", target: 12000 },
    { label: "Professional Trainers", target: 50 },
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const interval = setInterval(() => {
      setCounts((prevCounts) =>
        prevCounts.map((count, index) => {
          const increment = Math.ceil(stats[index].target / 50);
          if (count + increment >= stats[index].target) return stats[index].target;
          return count + increment;
        })
      );
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container mx-auto">
    <section className="py-10 bg-gradient-to-r from-blue-300 via-purple-300 to-indigo-300 px-4 md:px-16">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Left Side - Textual Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            About <span className="text-indigo-800">Scholars United</span>
          </h1>
          <p className="mt-4 text-lg font-semibold text-gray-600">
            Empowering Schools & Students with a Vision for Tomorrow. 
            From holistic development to tailored educational solutions, we&apos;re on a mission to build better futures.
          </p>
          <div className="mt-6 flex gap-4">
            <button className="bg-indigo-600 text-white px-6 py-3 font-semibold hover:text-gray-900 rounded-xl hover:bg-gradient-to-tl from-indigo-500 via-blue-300 to-indigo-500 transition">
              Join Our Mission
            </button>
            <button className="flex items-center gap-2 text-indigo-600 font-semibold hover:underline">
              <span>Discover More</span>
            </button>
          </div>
        </motion.div>

        {/* Right Side - Visual Stats + Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="relative z-10">
            <Image
              src="/photo.png" 
              width={500}
              height={500}
              alt="Children learning"
              className=""
            />
          </div>

          <div className="absolute hidden sm:block  top-[-20] right-0 bg-indigo-50 p-4 pt-32 rounded-xl shadow-lg space-y-4 translate-x-1 -translate-y-8 z-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-2xl md:text-3xl font-bold text-indigo-700">
                  {counts[index]}+
                </p>
                <p className="text-sm py-3 text-gray-600 whitespace-nowrap">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
    
    <AboutOurStory/>
<CoreValuesSection/>
<WhoWeHelpSection/>
<ProcessSteps/>
    </div>
  );
}
