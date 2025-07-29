"use client";

import {
  FaInstagram,
  FaPhoneAlt,
  FaWhatsapp,
  FaLinkedin,
} from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Footer() {
  // Animation variants for staggered entrance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const quickLinks = [
    { name: "Contact", path: "/Contact" },
    { name: "Our Services", path: "/Services" },
    { name: "Terms And Condition", path: "/Terms&Condition" },
    { name: "Privacy Policy", path: "/PrivacyPolicy" },
  ];

  const navigationItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/About" },
    { name: "School Empowerment", path: "/School" },
    { name: "Student Empowerment", path: "/Students" },
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <footer className="relative mt-24 text-white bg-gray-900">
      {/* Gradient Top Section */}
      <div className="max-w-7xl mx-auto absolute top-[-120px] left-1/2 transform -translate-x-1/2 z-10 w-full px-4 sm:px-6 md:px-12 lg:px-16">
        <motion.div
          className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-bl-[40px] rounded-tr-[40px] p-6 sm:p-10 shadow-2xl backdrop-blur-md border border-yellow-300/60 ring-1 ring-yellow-300/30"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Text Section */}
            <div className="text-center md:text-left">
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-pink-300">
                Stay in the Loop
              </h2>
              <p className="text-gray-100 max-w-md mx-auto md:mx-0 text-sm sm:text-base">
                Join Scolars United to get exclusive updates on programs,
                events, and educational insights.
              </p>
            </div>

            {/* Input with Button inside */}
            <form className="w-full sm:w-auto">
              <div className="relative w-full sm:w-80 md:w-96">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-5 py-3 pr-32 rounded-full text-black bg-white/90 focus:outline-none focus:ring-2 focus:ring-yellow-400 shadow-lg transition-all duration-300 placeholder:text-sm"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="absolute right-1 top-1 bottom-1 bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-5  rounded-full shadow-md"
                >
                  Subscribe
                </motion.button>
              </div>
              <p className="text-xs text-gray-200 mt-2 text-center md:text-left">
                Don&apos;t worry, we won&apos;t spam :)
              </p>
            </form>
          </div>
        </motion.div>
      </div>

      {/* Main Footer Section */}

      <div className="bg-[url('/image.jpg')] bg-cover bg-center bg-no-repeat relative before:absolute before:inset-0 before:bg-gradient-to-b before:from-black/80 before:to-black/90 before:z-0 pt-32 pb-16">
        <motion.div
          className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Logo and Description */}
          <motion.div
            variants={itemVariants}
            className="text-center sm:text-left"
          >
            <div className="text-3xl  font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-pink-400">
                Scolars
              </span>
              <span className="text-white">United</span>
            </div>
            <p className="text-gray-300 text-sm sm:text-base max-w-xs mx-auto sm:mx-0">
              Empowering the next generation with innovative education and
              mentorship.
            </p>
            <div className="flex justify-center sm:justify-start gap-4 mt-6">
              {[
                { icon: FaWhatsapp, href: "#" },
                { icon: FaLinkedin, href: "#" },
                { icon: FaInstagram, href: "#" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  whileHover={{ scale: 1.3, rotate: 10 }}
                  href={social.href}
                  className="text-gray-300 hover:text-yellow-400 transition-colors duration-300"
                >
                  <social.icon className="text-xl" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl sm:text-2xl font-bold mb-4 text-yellow-400">
              Explore
            </h3>
            <ul className="space-y-3 text-sm sm:text-base">
              {navigationItems.map(({ name, path }) => (
                <motion.li
                  key={name}
                  whileHover={{ x: 8, color: "#facc15" }}
                  transition={{ duration: 0.3 }}
                >
                  <Link
                    href={path}
                    className="text-gray-300 hover:text-yellow-400 transition-colors duration-300"
                  >
                    {name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl sm:text-2xl font-bold mb-4 text-yellow-400">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm sm:text-base">
              {quickLinks.map(({ name, path }) => (
                <motion.li
                  key={name}
                  whileHover={{ x: 8, color: "#facc15" }}
                  transition={{ duration: 0.3 }}
                >
                  <Link
                    href={path}
                    className="text-gray-300 hover:text-yellow-400 transition-colors duration-300"
                  >
                    {name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            variants={itemVariants}
            className="text-center sm:text-left"
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-4 text-yellow-400">
              Contact Us
            </h3>
            <p className="text-gray-300 mb-2 text-sm sm:text-base">
              Monday to Saturday, 10 am to 7 pm
            </p>

            <motion.a
              whileHover={{
                scale: 1.1,
                boxShadow: "0 0 15px rgba(255, 255, 0, 0.3)",
              }}
              href="tel:+91 8955529950"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-yellow-400 hover:bg-yellow-300 text-black font-semibold shadow-lg"
            >
              <FaPhoneAlt /> +91 8955529950
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-black/70 text-center text-gray-400 text-sm py-4 px-4">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          © {new Date().getFullYear()} Scolars United - All Rights Reserved
        </motion.p>
      </div>
    </footer>
  );
}
