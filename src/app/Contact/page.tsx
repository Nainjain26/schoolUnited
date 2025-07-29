"use client";
import { motion, useAnimation } from "framer-motion";
import { useState, useEffect } from "react";
import {
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaRocket,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaComments,
} from "react-icons/fa";

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
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 20 },
  },
};

const hoverScale = {
  hover: { scale: 1.05, transition: { duration: 0.3, ease: "easeOut" } },
};

const glowHover = {
  hover: {
    scale: 1.1,
    boxShadow: "0 0 15px rgba(250, 204, 21, 0.6)", // gold glow
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

// Particle component for background
const Particles = () => {
  const particleCount = 50; // Increased particle count
  const particles = Array.from({ length: particleCount }, (_, i) => ({
    id: i,
    size: Math.random() * 6 + 1, // Varied sizes
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    duration: Math.random() * 8 + 3, // Varied durations
    delay: Math.random() * 3,
    color: ["#6366f1", "#8b5cf6", "#f59e0b", "#10b981"][
      Math.floor(Math.random() * 4)
    ], // Multiple colors
  }));

  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full opacity-30"
          style={{
            width: particle.size,
            height: particle.size,
            left: particle.left,
            top: particle.top,
            backgroundColor: particle.color,
            boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Floating geometric shapes */}
      {Array.from({ length: 8 }, (_, i) => (
        <motion.div
          key={`shape-${i}`}
          className="absolute opacity-10"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: Math.random() * 100 + 50,
            height: Math.random() * 100 + 50,
          }}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <div
            className="w-full h-full border-2 border-indigo-400/30 rounded-full"
            style={{
              background: `radial-gradient(circle, ${
                ["#6366f1", "#8b5cf6", "#f59e0b"][i % 3]
              }20 0%, transparent 70%)`,
            }}
          />
        </motion.div>
      ))}
    </div>
  );
};

// Animated grid background
const AnimatedGrid = () => {
  return (
    <div className="absolute inset-0 z-0 opacity-20">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
          linear-gradient(rgba(99, 102, 241, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(99, 102, 241, 0.1) 1px, transparent 1px)
        `,
          backgroundSize: "50px 50px",
        }}
      />
      <motion.div
        className="absolute inset-0"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          backgroundImage: `
            linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "30px 30px",
        }}
      />
    </div>
  );
};

export default function ContactUs() {
  const [formData, setFormData] = useState<{
    name: string;
    email: string;
    phone: string;
    message: string;
  }>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    phone?: string;
    message?: string;
  }>({});

  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  const validateForm = () => {
    const newErrors: {
      name?: string;
      email?: string;
      phone?: string;
      message?: string;
    } = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (
      !/^[\+]?[1-9][\d]{0,15}$/.test(formData.phone.replace(/\s/g, ""))
    ) {
      newErrors.phone = "Phone number is invalid";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      alert("Form submitted successfully!");
      setFormData({ name: "", email: "", phone: "", message: "" });
      setIsSubmitting(false);
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
    <div className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-indigo-900 overflow-hidden">
      {/* Enhanced Animated Background */}
      <Particles />
      <AnimatedGrid />

      {/* Multiple gradient overlays for depth */}
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        style={{
          background:
            "radial-gradient(circle at 20% 80%, rgba(99,102,241,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(139,92,246,0.15) 0%, transparent 50%), radial-gradient(circle at 40% 40%, rgba(245,158,11,0.1) 0%, transparent 50%)",
        }}
      />

      {/* Animated light rays */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {Array.from({ length: 5 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-full bg-gradient-to-b from-transparent via-indigo-400/20 to-transparent"
            style={{
              left: `${20 + i * 15}%`,
              transform: `rotate(${i * 15}deg)`,
            }}
            animate={{
              opacity: [0, 0.5, 0],
              scaleY: [0, 1, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.8,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Wave Banner with Image */}
      <motion.div
        className="w-full bg-gradient-to-r from-indigo-900 to-purple-900 text-white py-24 relative overflow-hidden"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        style={{
          backgroundImage: "url(/bg12.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Animated wave effect */}
        <motion.div
          className="absolute inset-0"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            backgroundImage:
              'url(\'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none"><path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" fill="%23ffffff"/></svg>\')',
            backgroundSize: "1200px 100px",
          }}
        />

        <svg
          className="w-full h-24 text-gray-900 absolute bottom-0"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
        >
          <path
            d="M0,100 C300,50 600,150 900,50 C1200,100 1440,0 1440,0 V100 H0 Z"
            fill="currentColor"
          />
        </svg>
        <div className="relative text-center z-10">
          <motion.h1
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Get In Touch
          </motion.h1>
          <motion.p
            className="text-xl text-gray-200 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Ready to transform your future? Let&apos;s start the conversation.
          </motion.p>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 z-10">
        {/* Form and Newsletter Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Form */}
          <motion.div
            className="lg:col-span-2 bg-white/10 backdrop-blur-lg p-8 rounded-3xl shadow-2xl border border-white/20 relative overflow-hidden"
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover="hover"
          >
            {/* Form background glow */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-600/10 rounded-3xl"
              animate={{
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl shadow-lg">
                  <FaComments className="text-white text-2xl" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">
                    Send us a Message
                  </h2>
                  <p className="text-gray-300">
                    We&apos;d love to hear from you
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <FaUser className="text-gray-400 group-focus-within:text-indigo-400 transition-colors duration-300" />
                    </div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm group-hover:bg-white/15"
                    />
                    {errors.name && (
                      <p className="text-red-400 text-sm mt-2">{errors.name}</p>
                    )}
                  </div>

                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <FaEnvelope className="text-gray-400 group-focus-within:text-indigo-400 transition-colors duration-300" />
                    </div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm group-hover:bg-white/15"
                    />
                    {errors.email && (
                      <p className="text-red-400 text-sm mt-2">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <FaPhone className="text-gray-400 group-focus-within:text-indigo-400 transition-colors duration-300" />
                  </div>
                  <input
                    type="tel"
                    placeholder="Your Phone Number"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm group-hover:bg-white/15"
                  />
                  {errors.phone && (
                    <p className="text-red-400 text-sm mt-2">{errors.phone}</p>
                  )}
                </div>

                <div className="relative group">
                  <textarea
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    rows={5}
                    className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm resize-none group-hover:bg-white/15"
                  />
                  {errors.message && (
                    <p className="text-red-400 text-sm mt-2">
                      {errors.message}
                    </p>
                  )}
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold flex items-center justify-center gap-3 hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
                  variants={hoverScale}
                  whileHover="hover"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaRocket className="text-lg group-hover:animate-bounce" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Newsletter Signup */}
          <motion.div
            className="bg-white/10 backdrop-blur-lg p-8 rounded-3xl shadow-2xl border border-white/20 relative overflow-hidden"
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover="hover"
          >
            {/* Newsletter background glow */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-orange-600/10 rounded-3xl"
              animate={{
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-2xl shadow-lg">
                  <FaEnvelope className="text-white text-2xl" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white">Contact</h2>
                  <p className="text-gray-300 text-sm">Stay updated</p>
                </div>
              </div>

              <p className="text-gray-300 text-sm mb-6">
                Get the latest updates on our programs, events, and educational
                insights delivered to your inbox.
              </p>

              <div className="space-y-4">
                <div className="relative group">
                  <input
                    type="email"
                    placeholder="Your Email Address"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm group-hover:bg-white/15"
                  />
                </div>
                <motion.button
                  onClick={handleNewsletterSubmit}
                  className="w-full bg-gradient-to-r from-yellow-500 to-orange-600 text-white px-6 py-3 rounded-2xl font-semibold flex items-center justify-center gap-2 hover:from-yellow-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden group"
                  variants={hoverScale}
                  whileHover="hover"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                  <FaRocket className="text-sm group-hover:animate-bounce" />
                  Subscribe
                </motion.button>
              </div>

              {/* Social Media */}
              <div className="mt-8 pt-6 border-t border-white/20">
                <h3 className="text-white font-semibold mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  {[
                    { icon: FaInstagram, href: "#", label: "Instagram" },
                    { icon: FaTwitter, href: "#", label: "Twitter" },
                    { icon: FaLinkedin, href: "#", label: "LinkedIn" },
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      className="p-3 bg-white/10 rounded-2xl text-white hover:bg-white/20 transition-all duration-300 relative overflow-hidden group"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-600/20"
                        initial={{ scale: 0 }}
                        whileHover={{ scale: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                      <social.icon className="text-xl relative z-10 group-hover:animate-pulse" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA Banner */}
        <motion.div
          className="w-full bg-gradient-to-r from-indigo-600/20 to-purple-600/20 p-8 rounded-3xl border border-white/20 backdrop-blur-lg mb-16 relative overflow-hidden"
          variants={bounceIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* CTA background animation */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-600/10 rounded-3xl"
            animate={{
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <div className="relative z-10 text-center text-white">
            <motion.h2
              className="text-3xl sm:text-4xl font-bold mb-4"
              variants={slideInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Ready to Transform Your Future?
            </motion.h2>
            <motion.p
              className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Join thousands of students who have already discovered their
              potential with Scolars United.
            </motion.p>
            <motion.a
              href=""
              className="inline-block bg-gradient-to-r from-yellow-500 to-orange-600 text-white font-bold px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
              variants={glowHover}
              whileHover="hover"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />
              <span className="relative z-10">Start Your Journey Today</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
