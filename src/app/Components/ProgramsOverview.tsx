"use client";

import Image from "next/image";
import { FaSchool, FaUserGraduate, FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

// Animation variants
const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.1 }
  }
};

const letterVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  },
  hover: {
    y: -10,
    boxShadow: "0 15px 30px rgba(99, 102, 241, 0.3)",
    transition: { duration: 0.3 }
  }
};

const buttonVariants = {
  hover: { scale: 1.05, boxShadow: "0 5px 15px rgba(99, 102, 241, 0.4)" },
  tap: { scale: 0.95 }
};

// Particle component for CSS-based animations
const Particles = () => {
  const particleCount = 20; // Reduced for performance
  const particles = Array.from({ length: particleCount }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    duration: Math.random() * 5 + 5,
    delay: Math.random() * 2
  }));

  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-yellow-400 opacity-30"
          style={{
            width: particle.size,
            height: particle.size,
            left: particle.left,
            top: particle.top,
            willChange: "transform, opacity"
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut"
          }}
        />
      ))}
      {/* Background Glow Effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-indigo-200/20 via-transparent to-yellow-200/20"
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
};

export default function ProgramsOverview() {
  // Split heading text for animation
  const headingText = "Empowerment Programs by Scholars United";
  const headingWords = headingText.split(" ").map((word, i) => (
    <span key={i} className="inline-block mr-2">
      {word.split("").map((char, j) => (
        <motion.span key={j} variants={letterVariants} className="inline-block">
          {char}
        </motion.span>
      ))}
    </span>
  ));

  return (
    <div className="relative container mx-auto overflow-hidden">
      {/* CSS Particle Background */}
      <Particles />

      <section className="relative py-12 sm:py-16 px-4 sm:px-6 lg:px-16 z-10">
        {/* Heading Centered */}
        <motion.div
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            {headingWords}
          </h2>
          <motion.p
            variants={textVariants}
            className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto"
          >
            At Scholars United, we are dedicated to uplifting educational institutions and students through well-crafted and impactful programs.
          </motion.p>
        </motion.div>

        {/* School Empowerment Section */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          whileHover="hover"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10 mb-12 sm:mb-20 relative bg-white bg-opacity-80 backdrop-blur-lg rounded-3xl p-6 sm:p-8 shadow-xl"
        >
          {/* Glow Effect on Hover */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-indigo-200 via-transparent to-indigo-200 opacity-0"
            whileHover={{ opacity: 0.3 }}
            transition={{ duration: 0.5 }}
          />
          {/* Left: Image Placeholder */}
          <div className="relative rounded-3xl overflow-hidden shadow-lg">
            <Image
              src="/s1.jpg"
              alt="School Empowerment Background"
              fill
              className="object-cover absolute top-0 left-0 w-full h-full z-0"
            />
            <div className="relative z-10 w-full h-[250px] sm:h-[300px] lg:h-[400px] flex items-center justify-center bg-indigo-600 bg-opacity-20">
              <motion.div
                animate={{ rotateY: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="text-white text-2xl font-bold"
              >
                <FaSchool className="text-6xl sm:text-8xl" />
              </motion.div>
            </div>
          </div>

          {/* Right: Text Content */}
          <div className="flex flex-col justify-center">
            <motion.h3
              variants={textVariants}
              className="text-xl sm:text-2xl font-semibold text-indigo-700 mb-4 flex items-center gap-2"
            >
              <motion.div
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.3 }}
              >
                <FaSchool className="text-indigo-600" />
              </motion.div>
              School Empowerment
            </motion.h3>
            <motion.p variants={textVariants} className="text-gray-700 text-sm sm:text-base mb-4">
              We support the growth of new and developing schools by providing them with the tools and strategies they need to thrive. Our services include:
            </motion.p>
            <motion.ul variants={textVariants} className="list-disc list-inside text-gray-700 text-sm sm:text-base mb-4">
              <motion.li variants={textVariants}>Curriculum Development</motion.li>
              <motion.li variants={textVariants}>Infrastructure Support</motion.li>
              <motion.li variants={textVariants}>Teacher Training</motion.li>
            </motion.ul>
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="mt-2 bg-indigo-600 text-white px-5 py-2 rounded-full flex items-center gap-2 w-fit"
            >
              <FaStar />
              Know More
            </motion.button>
          </div>
        </motion.div>

        {/* Student Empowerment Section */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          whileHover="hover"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10 relative bg-white bg-opacity-80 backdrop-blur-lg rounded-3xl p-6 sm:p-8 shadow-xl"
        >
          {/* Glow Effect on Hover */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-yellow-200 via-transparent to-yellow-200 opacity-0"
            whileHover={{ opacity: 0.3 }}
            transition={{ duration: 0.5 }}
          />
          {/* Left: Text Content */}
          <div className="flex flex-col justify-center order-2 lg:order-1">
            <motion.h3
              variants={textVariants}
              className="text-xl sm:text-2xl font-semibold text-yellow-700 mb-4 flex items-center gap-2"
            >
              <motion.div
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.3 }}
              >
                <FaUserGraduate className="text-yellow-600" />
              </motion.div>
              Student Empowerment
            </motion.h3>
            <motion.p variants={textVariants} className="text-gray-700 text-sm sm:text-base mb-4">
              We believe every student learns differently. Scholars United helps students excel with tools tailored to their unique learning styles:
            </motion.p>
            <motion.ul variants={textVariants} className="list-disc list-inside text-gray-700 text-sm sm:text-base mb-4">
              <motion.li variants={textVariants}>Mock Tests and Live Classes</motion.li>
              <motion.li variants={textVariants}>Mind-Mapping Sessions</motion.li>
              <motion.li variants={textVariants}>Ability & Aptitude Assessments</motion.li>
            </motion.ul>
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="mt-2 bg-yellow-500 text-white px-5 py-2 rounded-full flex items-center gap-2 w-fit"
            >
              <FaStar />
              Know More
            </motion.button>
          </div>

          {/* Right: Image Placeholder */}
          <div className="relative rounded-3xl overflow-hidden shadow-lg order-1 lg:order-2">
            <Image
              src="/image.jpg"
              alt="Student Empowerment Background"
              fill
              className="object-cover absolute top-0 left-0 w-full h-full z-0"
            />
            <div className="relative z-10 w-full h-[250px] sm:h-[300px] lg:h-[400px] flex items-center justify-center bg-yellow-600 bg-opacity-20">
              <motion.div
                animate={{ rotateY: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="text-white text-2xl font-bold"
              >
                <FaUserGraduate className="text-6xl sm:text-8xl" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}