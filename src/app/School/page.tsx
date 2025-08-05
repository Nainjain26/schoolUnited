// ScholarsUnitedPage.tsx
"use client";

import { motion } from "framer-motion";
import {
  FaCogs,
  FaBrain,
  FaChalkboardTeacher,
  FaRobot,
  FaCheckCircle,
} from "react-icons/fa";

const ScholarsUnitedPage = () => {
  return (
    <div className="bg-[#0F172A] text-white font-sans scroll-smooth">
      {/* Hero Section */}
      <section className="relative md:h-[80vh]  py-20 px-3 flex items-center justify-center overflow-hidden bg-[#0F172A]">
        {/* Animated Blobs */}
        <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-purple-500/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-20 -right-20 w-[300px] h-[300px] bg-yellow-500/20 rounded-full blur-2xl animate-ping" />

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-yellow-400 via-purple-400 to-pink-400 text-transparent bg-clip-text leading-tight"
          >
            Transforming Education <br className="hidden md:block" />
            with Purpose & Impact
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8"
          >
            We partner with schools to elevate purpose, performance, and potential
            through strategy, empathy, and innovation.
          </motion.p>
        
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="py-24 px-6 bg-gradient-to-b from-black via-[#0f172a] to-black"
      >
        <div className="max-w-6xl mx-auto space-y-20">
          {/* Service Block 1 */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-yellow-400 mb-4">
                Academic & Institutional Development
              </h2>
              <ul className="text-gray-300 list-disc pl-6 space-y-2">
                <li>Institutional Capacity Building Program (ICBP)</li>
                <li>Educator Competency Enhancement Program (ECEP)</li>
                <li>Academic Leadership Advancement Program (ALAP)</li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="rounded-xl bg-white/10 backdrop-blur-md p-8 shadow-xl hover:scale-[1.02] transition-all"
            >
              <FaChalkboardTeacher className="text-yellow-400 text-6xl mb-4" />
              <p className="text-gray-200">
                Building leadership and competency to enhance school performance.
              </p>
            </motion.div>
          </div>

          {/* Service Block 2 */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="rounded-xl bg-white/10 backdrop-blur-md p-8 shadow-xl order-2 md:order-1 hover:scale-[1.02] transition-all"
            >
              <FaBrain className="text-purple-400 text-6xl mb-4" />
              <p className="text-gray-200">
                Life-skills, emotional intelligence, ethics and values — we support
                full-child development.
              </p>
            </motion.div>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="order-1 md:order-2"
            >
              <h2 className="text-3xl font-bold text-purple-400 mb-4">
              Holistic development infrastructure for schools
              </h2>
              <p className="text-gray-300">
              We help schools design and implement frameworks that support students’ emotional, social, and ethical growth alongside academics. This includes setting up well-being cells, value education models, life-skill learning labs, and systems for student voice and reflection — ensuring holistic, student-centered development.


              </p>
            </motion.div>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                icon: <FaCogs className="text-pink-400 text-5xl mb-4" />,
                title: "Marketing and branding support",
                desc: "We assist institutions in building strong, credible brand identities through strategic storytelling, digital marketing, outreach campaigns, and admission strategies. Whether launching a new school or repositioning an existing one, we help schools connect meaningfully with parents and the community."},
                {
                  icon: <FaRobot className="text-cyan-400 text-5xl mb-4" />,
                  title: "Tech Integration & Labs",
                  desc: (
                    <ul className="list-disc list-inside space-y-1">
                      <li>Smart Class Setup Guidance</li>
                      <li>LMS & ERP Selection/Implementation</li>
                      <li>Data Management Systems</li>
                      <li>STEM and Robotics Lab Setup</li>
                      <li>Security & Data Protection Support</li>
                    </ul>
                  ),
                }
                
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03 }}
                className="rounded-xl bg-white/10 backdrop-blur-md p-8 shadow-lg transition-all"
              >
                {item.icon}
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {item.title}
                </h3>
                <p className="text-gray-300">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section
  id="why"
  className="py-20 px-4 bg-gradient-to-t from-black via-[#0f172a] to-black"
>
  <div className="max-w-7xl mx-auto text-center">
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-3xl md:text-6xl font-extrabold text-white mb-12"
    >
      Why  Us
    </motion.h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
      {[
        {
          title: "Holistic, Not Just Academic",
          icon: <FaBrain className="text-purple-400 text-xl inline-block mr-2" />,
          desc: "We focus on a 360˚ approach — academic strategy, emotional well-being, leadership, infrastructure, and culture.",
        },
        {
          title: "Tailored to Your School’s Needs",
          icon: <FaCogs className="text-yellow-400 text-xl inline-block mr-2" />,
          desc: "Every intervention is tailored to your school’s vision, context, and unique challenges.",
        },
        {
          title: "NEP-Aligned, Future-Ready",
          icon: <FaRobot className="text-cyan-400 text-xl inline-block mr-2" />,
          desc: "Built on NEP 2020 with global best practices to prepare for tomorrow’s education landscape.",
        },
        {
          title: "End-to-End Support",
          icon: <FaCheckCircle className="text-green-400 text-xl inline-block mr-2" />,
          desc: "From classroom tech to branding and leadership — we bring everything together seamlessly.",
        },
        {
          title: "Led by Experts",
          icon: <FaChalkboardTeacher className="text-pink-400 text-xl inline-block mr-2" />,
          desc: "Decades of educational experience — from strategy to on-ground execution.",
        },
        {
          title: "Measurable Growth Focus",
          icon: <FaCheckCircle className="text-yellow-300 text-xl inline-block mr-2" />,
          desc: "We co-create real results with you, built around measurable impact metrics.",
        },
        {
          title: "Partners in Your Legacy",
          icon: <FaCogs className="text-purple-300 text-xl inline-block mr-2" />,
          desc: "We help you evolve into a benchmark institution that inspires others.",
        },
      ].map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          whileHover={{ scale: 1.03 }}
          className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl p-5 text-sm text-gray-300 leading-relaxed transition-all duration-300 backdrop-blur-sm"
        >
          <div className="font-semibold text-yellow-300 mb-1">
            {item.icon}
            {item.title}
          </div>
          <p>{item.desc}</p>
        </motion.div>
      ))}
    </div>
  </div>
</section>


    </div>
  );
};

export default ScholarsUnitedPage;
