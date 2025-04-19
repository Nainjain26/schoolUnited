"use client";

import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import CoreServices from "../Components/CoreServices";
import SchoolMarketingFAQ from "../Components/SchoolFAQ";
import CallActionBanner from "../Components/CallAction";


export default function ServicesHeroBanner() {
  return (
    <div className="container  mx-auto">
    <section className="relative w-full h-[80vh] overflow-hidden flex items-center justify-center bg-gradient-to-br from-indigo-100 via-white to-purple-100">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/bg14.jpg"
          alt="Services Background"
          layout="fill"
          objectFit="cover"
          className="opacity-30"
        />
        <svg
          className="absolute top-0 left-0 w-full h-full animate-pulse"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <circle cx="10" cy="10" r="1.2" fill="#7c3aed" />
          <circle cx="80" cy="20" r="1.5" fill="#f472b6" />
          <circle cx="50" cy="80" r="1.5" fill="#60a5fa" />
        </svg>
      </div>

      {/* Content Area */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Empowering Institutions
            <br />
            <span className="text-indigo-600">Through Impactful Services</span>
          </h1>
          <p className="mt-4 text-gray-800 font-semibold max-w-xl">
            From growth strategies to technology & branding—our services drive transformation.
          </p>
          <button className="mt-6 inline-flex items-center bg-indigo-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-indigo-700 transition-all duration-300">
            Discover Our Services
            <FaArrowRight className="ml-3" />
          </button>
        </motion.div>

        {/* Right Visual Element */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative w-full flex justify-center"
        >
          <div className="w-full max-w-md">
            <Image
              src="/services4.png" 
              alt="Service Illustration"
              width={700}
              height={700}
              className=" w-[650px] h-[500px] animate-float"
            />
          </div>
        </motion.div>
      </div>
    </section>
    <CoreServices/>
    <CallActionBanner/>
    <SchoolMarketingFAQ/>
    </div>
  );
}
