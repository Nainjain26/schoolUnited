"use client";
import Image from "next/image";
import { FaGraduationCap, FaGlobe, FaStar,FaPhone} from "react-icons/fa";
import { motion } from "framer-motion";

export default function AboutSection() {
  // Animation variants for images
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: "easeOut",
        staggerChildren: 0.2 
      }
    }
  };

  // Animation for feature cards
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" }
    },
    hover: { 
      y: -10,
      boxShadow: "0 15px 30px rgba(251, 191, 36, 0.3)",
      backgroundColor: "rgba(255, 255, 255, 0.95)",
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  // Animation for text content
  const textVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { 
        duration: 0.8, 
        staggerChildren: 0.2 
      }
    }
  };

  return (
    <div className="relative container mx-auto overflow-hidden">
      {/* Animated SVG Wave Background */}
      <svg
        className="absolute inset-0 w-full h-full z-0"
        preserveAspectRatio="none"
        viewBox="0 0 1440 320"
      >
        <motion.path
          fill="url(#gradient)"
          fillOpacity="0.3"
          d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,138.7C672,128,768,160,864,181.3C960,203,1056,213,1152,197.3C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          animate={{
            d: [
              "M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,138.7C672,128,768,160,864,181.3C960,203,1056,213,1152,197.3C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
              "M0,128L48,144C96,160,192,192,288,181.3C384,171,480,128,576,117.3C672,107,768,128,864,149.3C960,171,1056,192,1152,181.3C1248,171,1344,128,1392,106.7L1440,85L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ]
          }}
          transition={{ repeat: Infinity, repeatType: "reverse", duration: 10 }}
        />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: "#fefcbf", stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: "#f6ad55", stopOpacity: 1 }} />
          </linearGradient>
        </defs>
      </svg>

      <section className="relative py-16 px-4 sm:px-6 md:px-16 bg-transparent z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Left: Custom Image Layout */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative flex flex-col items-center md:items-start"
          >
            <div className="flex flex-col md:flex-row gap-4 sm:gap-6">
              {/* Left Portrait Image */}
              <motion.div
                variants={imageVariants}
                className="relative w-48 sm:w-56 md:w-64 h-48 sm:h-56 md:h-64 rounded-xl overflow-hidden shadow-xl"
              >
                <Image
                  src="/about2.png"
                  alt="Portrait Student"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </motion.div>

              <div className="flex flex-col gap-4 sm:gap-6">
                {/* Top Right Circle Image */}
                <motion.div
                  variants={imageVariants}
                  className="relative w-40 sm:w-48 md:w-52 h-40 sm:h-48 md:h-52 rounded-full overflow-hidden shadow-xl"
                >
                  <Image
                    src="/about4.jpg"
                    alt="Circle Students"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </motion.div>

                {/* Bottom Right Blob / Rounded Image */}
                <motion.div
                  variants={imageVariants}
                  className="relative w-36 sm:w-44 md:w-48 h-32 sm:h-40 md:h-44 rounded-3xl overflow-hidden shadow-xl"
                >
                  <Image
                    src="/about3.jpg"
                    alt="Creative Shape"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </motion.div>
              </div>
            </div>

            {/* Animated Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute bottom-10 sm:bottom-12 left-6 sm:left-8 bg-yellow-500 text-white text-xs font-semibold px-3 py-1.5 rounded-lg shadow-lg z-10 flex items-center gap-2"
            >
              <motion.div
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.3 }}
              >
                <FaStar className="text-white" />
              </motion.div>
              20 Years of Quality Service
            </motion.div>
          </motion.div>

          {/* Right: Text Content */}
          <motion.div
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4 sm:space-y-6"
          >
            <motion.p
              variants={textVariants}
              className="text-yellow-500 font-semibold text-xs sm:text-sm uppercase tracking-wide"
            >
              About Us
            </motion.p>
            <motion.h2
              variants={textVariants}
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight"
            >
              Our Education System <span className="text-yellow-500">Inspires</span> You More.
            </motion.h2>
            <motion.p
              variants={textVariants}
              className="text-gray-600 text-sm sm:text-base leading-relaxed"
            >
              Scholars United is committed to empowering students and schools through personalized learning methods, community support, and innovative educational services.
            </motion.p>

             {/* Feature Cards with Classy Hover Effects */}
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <motion.div
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true }}
                className="relative flex gap-3 sm:gap-4 items-start p-4 border rounded-lg bg-white bg-opacity-80 backdrop-blur-sm overflow-hidden"
              >
                {/* Sparkle Effect on Hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-300 to-transparent opacity-0"
                  whileHover={{ opacity: 0.5, x: ["-100%", "100%"] }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                />
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaGraduationCap className="text-yellow-500 text-xl sm:text-2xl mt-1" />
                </motion.div>
                <div>
                  <h4 className="font-semibold text-base sm:text-lg">Education Services</h4>
                  <p className="text-xs sm:text-sm text-gray-600">
                    We provide tailor-made educational tools and growth plans.
                  </p>
                </div>
              </motion.div>
              <motion.div
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true }}
                className="relative flex gap-3 sm:gap-4 items-start p-4 border rounded-lg bg-white bg-opacity-80 backdrop-blur-sm overflow-hidden"
              >
                {/* Sparkle Effect on Hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-200 to-transparent opacity-0"
                  whileHover={{ opacity: 0.5, x: ["-100%", "100%"] }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                />
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaGlobe className="text-yellow-500 text-xl sm:text-2xl mt-1" />
                </motion.div>
                <div>
                  <h4 className="font-semibold text-base sm:text-lg">International Hub</h4>
                  <p className="text-xs sm:text-sm text-gray-600">
                    Bringing learning communities together globally.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Highlight Box */}
            <motion.div
              variants={textVariants}
              className="p-4 bg-gray-100 rounded-lg border-l-4 border-yellow-500 text-gray-700 text-xs sm:text-sm shadow-sm"
            >
              “It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.”
            </motion.div>

            {/* Button & Call */}
           {/* Button & Call */}
           <motion.div
              variants={textVariants}
              className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mt-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-yellow-500 text-white px-4 sm:px-5 py-2 rounded-lg font-semibold hover:bg-yellow-600 transition shadow-md text-sm sm:text-base flex items-center gap-2"
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaStar />
                </motion.div>
                Discover More
              </motion.button>
              <div className="text-xs sm:text-sm text-gray-700 flex items-center gap-2">
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaPhone className="text-green-600" />
                </motion.div>
                <div>
                  <p className="font-medium">Call Now</p>
                  <a
                    href="tel:+911234567890"
                    className="text-green-600 font-bold hover:underline"
                  >
                    +91 123 654 7890
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}