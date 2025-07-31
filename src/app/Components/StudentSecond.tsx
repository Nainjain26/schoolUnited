"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaStar,
  FaLightbulb,
  FaSmileBeam,
  FaPuzzlePiece,
  FaBalanceScale,
  FaRocket,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";

const benefits = [
  {
    icon: (
      <FaStar className="text-yellow-400 text-5xl mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-45" />
    ),
    title: "Confidence Building",
    text: "Our programs empower students to trust their abilities, express themselves boldly, and overcome self-doubt. Through personalized mentorship and interactive activities, we foster a growth mindset that encourages resilience and self-assurance in academic and personal challenges.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
  },
  {
    icon: (
      <FaLightbulb className="text-indigo-500 text-5xl mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-45" />
    ),
    title: "Academic Clarity",
    text: "We help students develop a deep understanding of complex concepts and set clear academic goals. Our tailored guidance breaks down barriers to learning, ensuring students grasp foundational knowledge and apply it effectively in their studies.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
  },
  {
    icon: (
      <FaSmileBeam className="text-pink-500 text-5xl mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-45" />
    ),
    title: "Emotional Intelligence",
    text: "Our programs teach empathy, self-awareness, and relationship-building skills. By fostering emotional resilience, students learn to navigate interpersonal dynamics, manage stress, and build meaningful connections in both academic and social settings.",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
  },
  {
    icon: (
      <FaPuzzlePiece className="text-blue-500 text-5xl mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-45" />
    ),
    title: "Curiosity & Creativity",
    text: "We encourage imaginative exploration and innovative thinking through hands-on projects and brainstorming sessions. Our approach sparks curiosity, nurtures creative problem-solving, and inspires students to think outside the box.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
  },
  {
    icon: (
      <FaBalanceScale className="text-green-600 text-5xl mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-45" />
    ),
    title: "Decision Making",
    text: "We equip students with critical thinking and responsible choice-making skills. Through guided exercises, students learn to analyze options, weigh consequences, and make informed decisions that align with their goals and values.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
  },
  {
    icon: (
      <FaRocket className="text-purple-500 text-5xl mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-45" />
    ),
    title: "Future Readiness",
    text: "Our programs prepare students for higher education and careers by building essential skills like adaptability, leadership, and collaboration. We provide career counseling and aptitude assessments to guide students toward a successful future.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
  },
];

export default function KeyBenefitsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoSliding, setIsAutoSliding] = useState(true);

  // Autoslide Logic
  useEffect(() => {
    if (!isAutoSliding) return;
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % benefits.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isAutoSliding]);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % benefits.length);
    setIsAutoSliding(false);
    setTimeout(() => setIsAutoSliding(true), 10000); // Resume autoslide after 10s
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + benefits.length) % benefits.length);
    setIsAutoSliding(false);
    setTimeout(() => setIsAutoSliding(true), 10000); // Resume autoslide after 10s
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.85,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.7, ease: "easeOut" },
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.85,
      transition: { duration: 0.7, ease: "easeOut" },
    }),
  };

  const headingVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const iconGlowVariants = {
    initial: { opacity: 0, scale: 1 },
    animate: {
      opacity: [0, 0.7, 0],
      scale: [1, 1.3, 1],
      transition: { duration: 1.5, repeat: Infinity },
    },
  };

  return (
    <section className="w-full py-20 px-4 sm:px-8 md:px-12 lg:px-16 bg-gradient-to-br from-gray-950 via-black to-gray-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
            rotate: [360, 180, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {Array.from({ length: 25 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Heading Section */}
      <div className="text-center mb-16 relative z-10">
        <motion.h2
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 relative inline-block"
          style={{ textShadow: "0 0 15px rgba(147, 51, 234, 0.4)" }}
        >
          Key Benefits
          <motion.div
            className="absolute -bottom-3 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
            style={{ transformOrigin: "left" }}
          />
          <motion.div
            className="absolute inset-0 -z-10 bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-2xl"
            animate={{ opacity: [0.2, 0.5, 0.2] }}
            transition={{ repeat: Infinity, duration: 2.5 }}
          />
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-gray-300 mt-6 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed"
        >
          Explore the transformative benefits of our empowerment programs,
          designed to unlock student&apos;s potential and prepare them for a
          bright future.
        </motion.p>
      </div>

      {/* Custom Carousel */}
      <div className="relative max-w-4xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="group relative bg-gray-900/90 backdrop-blur-md shadow-2xl rounded-3xl p-8 sm:p-10 text-center transition-all duration-300 h-[450px] sm:h-[500px] flex items-center justify-center"
              style={{
                backgroundImage: `url(${benefits[currentIndex].image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Overlay for Readability */}
              <motion.div
                className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition-all duration-500"
                initial={{ opacity: 0.6 }}
                whileHover={{ opacity: 0.7 }}
              />
              {/* Content */}
              <div className="flex flex-col items-center relative z-10">
                <motion.div
                  className="relative"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  {benefits[currentIndex].icon}
                  <motion.div
                    className="absolute inset-0 rounded-full bg-white opacity-0 blur-md"
                    variants={iconGlowVariants}
                    initial="initial"
                    animate="animate"
                  />
                </motion.div>
                <motion.h3
                  className="text-2xl font-bold text-white mb-4 group-hover:text-yellow-300 transition-colors duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  {benefits[currentIndex].title}
                </motion.h3>
                <motion.p
                  className="text-gray-200 text-base sm:text-lg max-w-md mx-auto leading-relaxed opacity-0 group-hover:opacity-100"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 0 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {benefits[currentIndex].text}
                </motion.p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Arrows */}
        <motion.button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 sm:-translate-x-12 p-4 bg-purple-600 text-white rounded-full shadow-xl hover:bg-purple-700 focus:outline-none transition-colors duration-300"
          whileHover={{ scale: 1.15, rotate: -10 }}
          whileTap={{ scale: 0.95 }}
          initial={{ x: -10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <FaArrowLeft className="text-2xl" />
        </motion.button>
        <motion.button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 sm:translate-x-12 p-4 bg-purple-600 text-white rounded-full shadow-xl hover:bg-purple-700 focus:outline-none transition-colors duration-300"
          whileHover={{ scale: 1.15, rotate: 10 }}
          whileTap={{ scale: 0.95 }}
          initial={{ x: 10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <FaArrowRight className="text-2xl" />
        </motion.button>

        {/* Indicators */}
        <div className="flex justify-center mt-6 space-x-3">
          {benefits.map((_, idx) => (
            <motion.div
              key={idx}
              className={`w-3 h-3 rounded-full cursor-pointer ${
                currentIndex === idx ? "bg-purple-600" : "bg-gray-600"
              }`}
              whileHover={{ scale: 1.4 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => {
                setDirection(idx > currentIndex ? 1 : -1);
                setCurrentIndex(idx);
                setIsAutoSliding(false);
                setTimeout(() => setIsAutoSliding(true), 10000);
              }}
              role="button"
              tabIndex={0}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
