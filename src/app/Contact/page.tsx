"use client";
import { motion, useAnimation } from "framer-motion";
import { useState, useEffect } from "react";
import { FaMapMarkerAlt, FaInstagram, FaTwitter, FaLinkedin, FaRocket } from "react-icons/fa";



// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const slideInLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const slideInRight = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const bounceIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } },
};


const hoverScale = {
  hover: { scale: 1.05, transition: { duration: 0.3, ease: "easeOut" } },
};

const hoverGlow = {
  hover: {
    scale: 1.03,
    ring: "2px",
    ringColor: "teal-500",
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

const hoverMap = {
  hover: {
    scale: 1.02,
    boxShadow: "0 6px 18px rgba(0, 0, 0, 0.15)",
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

const glowHover = {
  hover: {
    scale: 1.1,
    boxShadow: "0 0 15px rgba(250, 204, 21, 0.6)", // gold glow
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

const socialHover = {
  hover: {
    rotate: 360,
    color: "#f59e0b", // yellow-600
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

export default function ContactUs() {
  const [formData, setFormData] = useState<{ name: string; email: string; message: string }>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const controls = useAnimation();

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  const validateForm = () => {
    const newErrors: { name?: string; email?: string; message?: string } = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Form submitted successfully!");
      setFormData({ name: "", email: "", message: "" });
    }
  };
  
  const handleNewsletterSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      alert("Subscribed to newsletter successfully!");
      setNewsletterEmail("");
    }
  };
  

  return (
    <div className="container mx-auto bg-cream-100 relative overflow-hidden">
      {/* Animated Background SVG */}
      <div className="absolute inset-0 opacity-70 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 1440 800">
          <g>
            {Array.from({ length: 20 }).map((_, i) => (
              <circle
                key={i}
                cx={Math.random() * 1440}
                cy={Math.random() * 800}
                r={Math.random() * 5 + 2}
                fill="#93c5fd" // light blue
                className="animate-float"
              />
            ))}
          </g>
          <style>
            {`
              @keyframes float {
                0% { transform: translateY(0); }
                50% { transform: translateY(-20px); }
                100% { transform: translateY(0); }
              }
              .animate-float {
                animation: float 20s ease-in-out infinite;
              }
            `}
          </style>
        </svg>
      </div>

      {/* Wave Banner with Image */}
      <motion.div
        className="w-full bg-red-300 text-white py-36 relative overflow-hidden"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        style={{ backgroundImage: "url(/bg12.jpg)", backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="absolute inset-0 bg-black opacity-30"></div> {/* Overlay for readability */}
        <svg
          className="w-full h-24 text-teal-500 absolute bottom-0"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
        >
          <path
            d="M0,100 C300,50 600,150 900,50 C1200,100 1440,0 1440,0 V100 H0 Z"
            fill="currentColor"
          />
        </svg>
        <div className="relative text-center z-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">Contact Us</h1>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Form and Newsletter Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
          {/* Contact Form */}
          <motion.div
            className="lg:col-span-2 bg-teal-50 p-6 rounded-lg shadow-md"
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover="hover"
          >
            <h2 className="text-xl font-semibold text-teal-700 mb-4">Get in Touch</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full p-2 bg-teal-100 rounded-md border border-teal-300 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full p-2 bg-teal-100 rounded-md border border-teal-300 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>
              <div>
                <textarea
                  placeholder="Message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full p-2 bg-teal-100 rounded-md border border-teal-300 focus:outline-none focus:ring-2 focus:ring-red-500 h-24"
                />
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>
              <motion.button
                type="submit"
                className="bg-teal-700 text-white px-4 py-2 rounded-full w-full flex items-center justify-center gap-2"
                variants={hoverScale}
                whileHover="hover"
              >
                <FaRocket />
                Submit
              </motion.button>
            </form>
          </motion.div>

          {/* Newsletter Signup */}
          <motion.div
            className="bg-teal-50 p-6 rounded-lg shadow-md"
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover="hover"
          >
            <h2 className="text-xl font-semibold text-teal-700 mb-4">Our Newsletters</h2>
            <p className="text-sm text-gray-600 mb-4">
              Stay updated with our latest news and offers!
            </p>
            <input
              type="email"
              placeholder="Your Email"
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              className="w-full p-2 mb-4 bg-teal-100 rounded-md border border-teal-300 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <motion.button
              onClick={handleNewsletterSubmit}
              className="bg-teal-700 text-white px-4 py-2 rounded-full w-full flex items-center justify-center gap-2"
              variants={hoverScale}
              whileHover="hover"
            >
              <FaRocket />
              Submit
            </motion.button>
          </motion.div>

          {/* Social Media Icons (Desktop Only) */}
          <motion.div
            className="hidden lg:block bg-teal-50 p-6 rounded-lg shadow-md"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover="hover"
          >
            <h2 className="text-xl font-semibold text-teal-700 mb-4">Follow Us</h2>
            <div className="flex justify-around text-2xl">
              <motion.a
                href="#"
                className="text-teal-700"
                // variants={pulse}
                animate="animate"
                whileHover="hover"
                variants={socialHover}
              >
                <FaInstagram />
              </motion.a>
              <motion.a
                href="#"
                className="text-teal-700"
                // variants={pulse}
                animate="animate"
                whileHover="hover"
                variants={socialHover}
              >
                <FaTwitter />
              </motion.a>
              <motion.a
                href="#"
                className="text-teal-700"
                // variants={pulse}
                animate="animate"
                whileHover="hover"
                variants={socialHover}
              >
                <FaLinkedin />
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* CTA Banner */}
        <motion.div
          className="w-full bg-gradient-to-r from-purple-900 to-yellow-600 p-6 sm:p-8 lg:p-10 rounded-xl mb-10"
          variants={bounceIn}
          initial="hidden"
          animate="visible"
        >
          <div className="text-center text-white">
            <motion.h2
              className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4"
              variants={slideInLeft}
              initial="hidden"
              animate="visible"
            >
              Join Our Community Today!
            </motion.h2>
            <motion.p
              className="text-sm sm:text-base mb-6"
              variants={fadeIn}
              initial="hidden"
              animate="visible"
            >
              Empower your learning journey with Scholar Unites.
            </motion.p>
            <motion.a
              href="/contact"
              className="inline-block bg-white text-purple-900 font-medium px-6 py-3 rounded-full shadow-md"
              variants={glowHover}
              whileHover="hover"
            >
              Get Started
            </motion.a>
          </div>
        </motion.div>

        {/* Location Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10"
          variants={bounceIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            className="bg-teal-50 p-4 rounded-lg border-2 border-teal-100 shadow-md flex items-center space-x-3"
            variants={hoverGlow}
            whileHover="hover"
          >
            <FaMapMarkerAlt className="text-teal-700 text-xl" />
            <div>
              <h3 className="font-semibold text-teal-700">Location</h3>
              <p className="text-sm text-gray-600">Alipurduar , West Bengal, India</p>
            </div>
          </motion.div>
          <motion.div
            className="bg-teal-50 p-4 rounded-lg border-2 border-teal-100 shadow-md flex items-center space-x-3"
            variants={hoverGlow}
            whileHover="hover"
          >
            <FaMapMarkerAlt className="text-teal-700 text-xl" />
            <div>
              <h3 className="font-semibold text-teal-700">Available Days</h3>
              <p className="text-sm text-gray-600">Monday - Saturday</p>
            </div>
          </motion.div>
          <motion.div
            className="bg-teal-50 p-4 rounded-lg border-2 border-teal-100 shadow-md flex items-center space-x-3"
            variants={hoverGlow}
            whileHover="hover"
          >
            <FaMapMarkerAlt className="text-teal-700 text-xl" />
            <div>
              <h3 className="font-semibold text-teal-700">Available Time</h3>
              <p className="text-sm text-gray-600">8:00AM To 5:00PM </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Map Link (Iframe) */}
        <motion.div
          className="relative w-full h-64 sm:h-80 lg:h-96 rounded-lg overflow-hidden"
          // variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          whileHover="hover"
          variants={hoverMap}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.900774526954!2d-0.11954868423199037!3d51.50811297975582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604d6a00ba729%3A0x104f535c84e180!2sLondon%20Eye!5e0!3m2!1sen!2suk!4v1698778901234!5m2!1sen!2suk"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>
      </div>
    </div>
  );
}