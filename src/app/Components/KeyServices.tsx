"use client";
import { FaBrain, FaBed, FaFileAlt, FaTools } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const services = [
  {
    icon: <FaBrain className="text-4xl text-indigo-600 group-hover:text-indigo-800 transition duration-300" />,
    title: "Inner Growth",
    description:
      "The true strength of any school lies in its people. With our Inner Growth module, we focus on nurturing the heart of your institution—the staff. We provide tailored upskilling programs for academic, non-academic, and management staff, equipping them with the skills and knowledge to lead your school with confidence.  This growth also extends to the school’s culture, as we instill a holistic approach to education, strengthening the sense of purpose, quality, and community within your institution. ",
    image: "/ig.jpg"
  },
  {
    icon: <FaBed className="text-4xl text-purple-600 group-hover:text-purple-800 transition duration-300" />,
    title: "Hostel Development",
    description:
      "For boarding schools, the hostel experience is as crucial as the academic one. Our Hostel Development strategy goes beyond basic infrastructure improvements. We offer a detailed analysis of the current state of your hostel facilities, followed by a robust plan designed to enhance students’ mental, physical, and academic well-being.The strategy includes resource allocation, continuous monitoring, and necessary adjustments to ensure the hostel environment supports holistic growth. Regular reviews guarantee that your hostel remains safe.",
    image: "/Hostel.jpg"
  },
  {
    icon: <FaFileAlt className="text-4xl text-blue-600 group-hover:text-blue-800 transition duration-300" />,
    title: "Documentation Framework",
    description:
      "Stay ahead with a Documentation Framework that streamlines every aspect of your school’s administrative needs. From admissions to academic records, examinations, and health and safety protocols, we help you develop a comprehensive system that ensures smooth operations and CBSE compliance. All documentation—whether academic, administrative, or financial—is systematically organized in both physical and digital formats.",
    image: "/doc.jpg"
  },
  {
    icon: <FaTools className="text-4xl text-green-600 group-hover:text-green-800 transition duration-300" />,
    title: "Additional Implementation Support",
    description:
      "The journey doesn’t stop once the plan is in place. Our Additional Implementation Support ensures your school continues to thrive even after the initial implementation phase. Over six months, we remain committed to supporting your school, providing feedback, troubleshooting challenges, and fine-tuning strategies as needed. We also ensure that the right training is provided to staff, and all progress is meticulously reported and documented.",
    image: "/hii.jpg"
  }
];

export default function KeyServicesSection() {
  return (
    <section className="w-full  py-24 px-4 md:px-10 overflow-hidden">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
        >
          Our <span className="text-indigo-600">Key Services</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto"
        >
          Empowering schools with holistic support systems tailored to every need.
        </motion.p>
      </div>

      <div className="flex flex-col lg:flex-row flex-wrap gap-10 justify-center items-stretch">
        {services.map((service, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.04 }}
            className="w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500 group relative"
          >
            <div className="w-full h-48 relative">
              <Image
                src={service.image}
                alt={service.title}
                layout="fill"
                objectFit="cover"
                className="rounded-t-3xl"
              />
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="p-6 bg-white z-10"
            >
              <div className="mb-4 flex items-center gap-4">
                {service.icon}
                <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
              </div>
              <p className="text-gray-600 text-sm md:text-base">
                {service.description}
              </p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
