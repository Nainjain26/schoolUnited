"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaBullhorn,
  FaCode,
  FaUsers,
  FaChartLine,
  FaPoll,
  FaRegSmile,
  FaFileAlt,
  FaAd,
  FaSearch
} from "react-icons/fa";

const faqItems = [
  {
    title: "Brand Positioning & Identity Deployment",
    icon: <FaBullhorn className="text-indigo-600 text-3xl transition-transform duration-300 group-hover:scale-110" />,
    content: "Establish a strong and distinctive brand for your school. We work with you to create a unique, authentic brand identity that highlights your school’s values, culture, and educational approach. From logo design to tagline creation and brand messaging, we help your school stand out in a crowded market."
  },
  {
    title: "Website Development & SEO",
    icon: <FaCode className="text-yellow-500 text-3xl transition-transform duration-300 group-hover:scale-110" />,
    content: "A well-structured, visually appealing website is the cornerstone of any modern marketing strategy. Our team builds user-friendly, responsive websites optimized for search engines (SEO). Your school will appear at the top of search results, ensuring that potential parents and students can easily find you when searching for educational options. Additionally, we optimize your website for a seamless experience across devices, from desktops to mobile phones."
  },
  {
    title: "Social Media Strategy and Content Creation",
    icon: <FaUsers className="text-blue-500 text-3xl transition-transform duration-300 group-hover:scale-110" />,
    content: "Harness the power of social media to reach a wider audience. We create engaging content across platforms such as Facebook, Instagram, and LinkedIn, tailored to reflect your school’s ethos and attract the attention of prospective students and their families. From informative posts and event promotion to behind-the-scenes content, we craft stories that resonate with your community."
  },
  {
    title: "Paid Advertising Campaign",
    icon: <FaAd className="text-pink-500 text-3xl transition-transform duration-300 group-hover:scale-110" />,
    content: "To maximize your reach and enrollment potential, we run targeted advertising campaigns across platforms such as Google Ads, Facebook Ads, and Instagram Ads. By precisely targeting demographics, interests, and behaviors, we ensure that your advertisements reach the right people at the right time, driving conversions and enrollment."
  },
  {
    title: "School Event Promotion & Public Outreach",
    icon: <FaPoll className="text-green-600 text-3xl transition-transform duration-300 group-hover:scale-110" />,
    content: "We help you plan and promote open days, orientation sessions, cultural events, and other school activities. Our strategic public relations approach ensures that your school’s achievements, success stories, and community involvement are covered in local media, building trust and a positive image in the eyes of parents."
  },
  {
    title: "Student & Parent Testimonials",
    icon: <FaRegSmile className="text-purple-600 text-3xl transition-transform duration-300 group-hover:scale-110" />,
    content: "Real stories resonate with people. We help gather and promote testimonials from current students and parents, which highlight the strengths of your institution. These authentic voices add credibility to your school’s marketing efforts and help establish emotional connections with prospective families."
  },
  {
    title: "Lead Generation & Enrollment Strategies",
    icon: <FaSearch className="text-teal-500 text-3xl transition-transform duration-300 group-hover:scale-110" />,
    content: "Our marketing services include strategies designed to generate and nurture leads, from inquiry to enrollment. We create effective call-to-actions, optimized landing pages, and email marketing campaigns to engage prospective parents and guide them through the decision-making process."
  },
  {
    title: "Performance Analytics and Reporting",
    icon: <FaChartLine className="text-red-400 text-3xl transition-transform duration-300 group-hover:scale-110" />,
    content: "We believe in data-driven decisions. Our marketing efforts are continuously monitored and analyzed to gauge their success. With detailed performance reports, we provide actionable insights to refine and improve ongoing campaigns, ensuring your school continues to attract and engage the right audience."
  },
  {
    title: "Reputation Management",
    icon: <FaFileAlt className="text-gray-700 text-3xl transition-transform duration-300 group-hover:scale-110" />,
    content: "In today’s digital age, online reviews and community feedback play a significant role in shaping a school’s image. We help manage your school’s online reputation by monitoring reviews, responding to feedback, and addressing concerns promptly, ensuring that your school’s reputation remains strong and positive."
  }
];

export default function SchoolMarketingFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = useCallback((index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  }, [openIndex]);

  const headingVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const faqVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i:number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.4, ease: "easeOut" }
    })
  };

  const iconGlowVariants = {
    initial: { opacity: 0 },
    animate: { opacity: [0, 0.4, 0], transition: { duration: 1.5, repeat: Infinity } }
  };

  return (
    <section className="w-full px-4  sm:px-8 md:px-12 lg:px-16 py-20 bg-gradient-to-b from-indigo-50 via-white to-purple-50 relative overflow-hidden">
      {/* SVG Animated Background */}
      <div className="absolute inset-0 -z-10">
        <svg
          className="w-full h-full opacity-10"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
          viewBox="0 0 1440 560"
        >
          <motion.path
            d="M0,160L48,176C96,192,192,224,288,224C384,224,480,192,576,160C672,128,768,96,864,112C960,128,1056,192,1152,208C1248,224,1344,192,1392,176L1440,160L1440,560L0,560Z"
            fill="#a78bfa"
            animate={{ y: [-10, 10] }}
            transition={{ repeat: Infinity, repeatType: "reverse", duration: 6 }}
            style={{ willChange: "transform" }}
          />
        </svg>
      </div>

      {/* Heading Section */}
      <div className="text-center mb-16 relative z-10">
        <motion.h2
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 relative inline-block"
          style={{ textShadow: "0 0 10px rgba(99, 102, 241, 0.3)" }}
        >
          Smart Marketing Solutions
          <motion.div
            className="absolute -bottom-3 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            style={{ transformOrigin: "left" }}
          />
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          viewport={{ once: true }}
          className="text-gray-700 mt-6 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed"
        >
          Unlock your school&apos;s potential with strategic, impactful marketing services tailored to modern education.
        </motion.p>
      </div>

      {/* FAQ Items */}
      <div className="max-w-4xl mx-auto space-y-4">
        {faqItems.map((item, idx) => (
          <motion.div
            key={idx}
            custom={idx}
            variants={faqVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="rounded-3xl bg-white/95 backdrop-blur-sm shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 group"
            style={{ willChange: "transform, opacity" }}
          >
            <button
              className="w-full text-left px-6 py-5 flex items-center justify-between hover:bg-indigo-50/30 transition-colors duration-200"
              onClick={() => toggleFAQ(idx)}
            >
              <div className="flex items-center gap-4">
                <motion.div
                  className="relative"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  {item.icon}
                  <motion.div
                    className="absolute inset-0 bg-current opacity-0 blur-md rounded-full"
                    variants={iconGlowVariants}
                    initial="initial"
                    animate="animate"
                  />
                </motion.div>
                <h3 className="text-lg sm:text-xl font-semibold text-indigo-800 group-hover:text-indigo-600 transition-colors duration-200">
                  {item.title}
                </h3>
              </div>
              <motion.span
                className="text-2xl font-light text-indigo-400"
                animate={{ rotate: openIndex === idx ? 45 : 0 }}
                transition={{ duration: 0.2 }}
              >
                {openIndex === idx ? "−" : "+"}
              </motion.span>
            </button>
            <AnimatePresence>
              {openIndex === idx && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="px-6 pb-6 pt-2 text-gray-600 text-sm sm:text-base leading-relaxed"
                  style={{ overflow: "hidden" }}
                >
                  {item.content}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
}