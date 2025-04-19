"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import SchoolEmpowermentIntro from "../Components/SchoolIntro";
import KeyServicesSection from "../Components/KeyServices";
import CallToActionSection from "../Components/CallToAction";


export default function SchoolEmpowermentHero() {
  return (
    <div className="container mx-auto">
    <section className="relative w-full  h-[90vh] bg-indigo-100 overflow-hidden flex items-center justify-center px-6 md:px-16">
      {/* Background Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/bg2.jpg"
          alt="Empowering Schools"
          layout="fill"
          objectFit="cover"
          className="brightness-[0.5]"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto">
        {/* Left Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2 text-white"
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Empowering Schools <br className="hidden md:block" /> for a <span className="text-indigo-300">Brighter Future</span>
          </h1>
          <p className="text-lg md:text-xl mb-8">
            At Scholars United, we help build strong foundations for institutions through innovation,
            structured support, and holistic growth strategies.
          </p>
          <button className="bg-indigo-600 hover:bg-indigo-700 transition duration-300 text-white font-semibold py-3 px-6 rounded-full shadow-xl">
            Explore Our Support
          </button>
        </motion.div>

        {/* Right Image Content */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="  w-full md:w-1/2"
        >
          <Image
            src="/bg3.png"
            alt="School Empowerment"
            width={600}
            height={400}
            className=" object-cover"
          />
        </motion.div>
      </div>
    </section>

<SchoolEmpowermentIntro/>
<CallToActionSection/>
<KeyServicesSection/>

    </div>
  );
}
