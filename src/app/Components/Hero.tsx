"use client";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import { FaLightbulb, FaChalkboardTeacher, FaLaptopCode, FaStar } from "react-icons/fa";
import { motion } from "framer-motion";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { ReactNode } from "react";

type CardProps = {
  icon: ReactNode;           
  title: string;
  desc: string;
  gradient?: string;         
};

const slides = [
  { image: "/s1.jpg", alt: "Empowering Education" },
  { image: "/s2.jpg", alt: "Innovative Learning" },
  { image: "/s3.jpg", alt: "Scholar Unites Community" },
];

// Animation variants
const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.1 }
  }
};

const letterVariants = {
  hidden: { opacity: 0, y: 10 },
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
    boxShadow: "0 15px 30px rgba(0, 0, 0, 0.2)",
    transition: { duration: 0.3 }
  }
};

const buttonVariants = {
  hover: { scale: 1.05, boxShadow: "0 5px 15px rgba(220, 38, 38, 0.4)" },
  tap: { scale: 0.95 }
};

export default function HeroSection() {
  // Split heading text for animation
  const headingText = "We Prepare Students with The Transformative Experience";
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
      <section className="relative">
        {/* Carousel */}
        <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] w-full">
          <Carousel
            autoPlay
            infiniteLoop
            showThumbs={false}
            showStatus={false}
            interval={5000}
            showArrows={true}
            className="h-full"
            renderArrowPrev={(onClickHandler, hasPrev) =>
              hasPrev && (
                <button
                  onClick={onClickHandler}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full z-20 hover:bg-opacity-75 transition"
                >
                  <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
              )
            }
            renderArrowNext={(onClickHandler, hasNext) =>
              hasNext && (
                <button
                  onClick={onClickHandler}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full z-20 hover:bg-opacity-75 transition"
                >
                  <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              )
            }
          >
            {slides.map((slide, index) => (
              <div key={index} className="relative h-[400px] sm:h-[500px] lg:h-[600px]">
                <Image
                  src={slide.image}
                  alt={slide.alt}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/50 to-transparent z-0"></div>
              </div>
            ))}
          </Carousel>

          {/* Overlay Content */}
          <motion.div
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="absolute inset-0 flex items-center justify-center sm:justify-start px-4 sm:px-6 lg:px-16 z-10"
          >
            <div className="bg-white bg-opacity-95 p-4 sm:p-6 lg:p-10 rounded-xl shadow-2xl max-w-md sm:max-w-lg lg:max-w-xl">
              <motion.p
                variants={textVariants}
                className="text-xs sm:text-sm font-semibold text-red-600 mb-2 uppercase tracking-wide flex items-center gap-2"
              >
                <motion.div whileHover={{ scale: 1.2, rotate: 360 }} transition={{ duration: 0.3 }}>
                  <FaStar className="text-red-600" />
                </motion.div>
                Welcome to Scholars United
              </motion.p>
              <motion.h1
                variants={textVariants}
                className="text-xl sm:text-2xl lg:text-4xl font-bold text-gray-800 mb-4 leading-tight"
              >
                {headingWords}
              </motion.h1>
              <motion.button
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="bg-red-600 text-white font-medium px-4 sm:px-6 py-2 rounded-full flex items-center gap-2"
              >
                <motion.div whileHover={{ scale: 1.2, rotate: 360 }} transition={{ duration: 0.3 }}>
                  <FaStar />
                </motion.div>
                Learn More
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Info Cards */}
        <div className="relative z-10 max-w-7xl mx-auto -mt-16 sm:-mt-20 lg:-mt-28 px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <Card
            icon={<FaLightbulb className="text-red-600 text-2xl sm:text-3xl mb-3 mx-auto" />}
            title="Personalized Learning"
            desc="Tailored courses designed to match individual student needs and learning styles."
            gradient="from-red-100 to-indigo-100"
          />
          <Card
            icon={<FaChalkboardTeacher className="text-red-600 text-2xl sm:text-3xl mb-3 mx-auto" />}
            title="Expert Mentorship"
            desc="Guidance from top educators dedicated to empowering schools and students."
            gradient="from-indigo-100 to-yellow-100"
          />
          <Card
            icon={<FaLaptopCode className="text-red-600 text-2xl sm:text-3xl mb-3 mx-auto" />}
            title="Innovative Platforms"
            desc="Access cutting-edge online tools for seamless learning anytime, anywhere."
            gradient="from-yellow-100 to-red-100"
          />
        </div>
    </section>
    </div>
  );
}

function Card({ icon, title, desc, gradient }: CardProps){
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true }}
      className={`relative bg-white p-4 sm:p-6 rounded-xl shadow-md overflow-hidden text-center bg-gradient-to-br ${gradient}`}
    >
      {/* Gradient Glow on Hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0"
        whileHover={{ opacity: 0.5, x: ["-100%", "100%"] }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      />
      <motion.div
        whileHover={{ scale: 1.2, rotate: 360 }}
        transition={{ duration: 0.3 }}
        className="relative z-10"
      >
        {icon}
      </motion.div>
      <h3 className="font-semibold text-base sm:text-lg mb-2 relative z-10">{title}</h3>
      <p className="text-xs sm:text-sm text-gray-600 relative z-10">{desc}</p>
    </motion.div>
  );
}