"use client";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";

import { motion } from "framer-motion";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { ReactNode } from "react";

import Link from "next/link";
import { FaQuestion, FaStar } from "react-icons/fa";

type CardProps = {
  icon: ReactNode;
  desc: string;
  gradient?: string;
};

const slides = [
  { image: "/s1.jpg", alt: "Empowering Education" },
  { image: "/s2.jpg", alt: "Innovative Learning" },
  { image: "/s3.jpg", alt: "Scolars Unites Community" },
];

// Animation variants
const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.1 },
  },
};

const letterVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

const buttonVariants = {
  hover: { scale: 1.05, boxShadow: "0 5px 15px rgba(220, 38, 38, 0.4)" },
  tap: { scale: 0.95 },
};

export default function HeroSection() {
  // Split heading text for animation
  const headingText = "Shaping the NextGen!";
  const headingWords = headingText.split(" ").map((word, i) => (
    <span key={i} className="inline-block mr-1 sm:mr-2">
      {word.split("").map((char, j) => (
        <motion.span key={j} variants={letterVariants} className="inline-block">
          {char}
        </motion.span>
      ))}
    </span>
  ));

  // Floating orbs/particles for background
  const Orbs = () => (
    <>
      <motion.div
        className="absolute top-10 left-10 w-40 h-40 bg-pink-400/20 rounded-full blur-3xl z-0"
        animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 right-20 w-56 h-56 bg-indigo-400/20 rounded-full blur-3xl z-0"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 w-32 h-32 bg-yellow-300/20 rounded-full blur-2xl z-0"
        animate={{ scale: [1, 1.4, 1], opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
    </>
  );

  // Sparkle overlay for carousel
  const Sparkles = () => (
    <div className="absolute inset-0 pointer-events-none z-20">
      {[...Array(12)].map((_, i) => (
        <motion.span
          key={i}
          className="absolute w-2 h-2 bg-white/60 rounded-full blur-sm"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0.5, 1, 0.5],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );

  return (
    <div className="relative w-full overflow-x-hidden min-h-[700px] bg-gradient-to-br from-gray-950 via-indigo-950 to-yellow-900">
      {/* Animated Orbs */}
      <Orbs />
      <section className="relative w-full">
        {/* Carousel */}
        <div className="relative w-full h-[260px] xs:h-[320px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
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
                  className="absolute left-2 xs:left-3 sm:left-4 top-1/2 transform -translate-y-1/2 bg-opacity-40 p-2 rounded-full z-30 hover:bg-indigo-500/60 hover:scale-110 hover:shadow-lg transition"
                >
                  <svg
                    className="w-5 h-5 xs:w-6 xs:h-6 text-white drop-shadow-lg"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
              )
            }
            renderArrowNext={(onClickHandler, hasNext) =>
              hasNext && (
                <button
                  onClick={onClickHandler}
                  className="absolute right-2 xs:right-3 sm:right-4 top-1/2 transform -translate-y-1/2 bg-opacity-30 p-2 rounded-full z-30 hover:bg-yellow-400/60 hover:scale-110 hover:shadow-lg transition"
                >
                  <svg
                    className="w-5 h-5 xs:w-6 xs:h-6 text-white drop-shadow-lg"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              )
            }
          >
            {slides.map((slide, index) => (
              <div
                key={index}
                className="relative w-full h-[260px] xs:h-[320px] sm:h-[400px] md:h-[500px] lg:h-[600px]"
              >
                <Image
                  src={slide.image}
                  alt={slide.alt}
                  fill
                  className="object-cover scale-100 transition-transform duration-1000 group-hover:scale-105"
                  priority
                />
                {/* Full glassmorphism overlay */}
                <div
                  className="absolute inset-0 backdrop-blur-[3px] bg-white/10 z-10 pointer-events-none"
                  style={{ boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.18)" }}
                />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/50 to-transparent z-0"></div>
                {/* Sparkles overlay */}
                <Sparkles />
              </div>
            ))}
          </Carousel>

          {/* Overlay Content */}
          <motion.div
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="absolute inset-0 flex flex-col items-center text-center justify-center px-2 xs:px-4  z-40"
          >
            <div className="flex flex-col w-full max-w-5xl mx-auto items-center text-center sm:text-left">
              <motion.h1
                variants={textVariants}
                className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-extrabold mb-2 sm:mb-3 leading-tight drop-shadow-lg bg-gradient-to-r from-pink-400 via-indigo-400 to-yellow-400 bg-clip-text text-transparent animate-gradient-move relative"
                style={{
                  backgroundSize: "200% 200%",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  textShadow: "0 2px 16px rgba(255,255,255,0.12)",
                }}
              >
                <span className="inline-block align-middle mr-2 animate-bounce-slow text-yellow-300 text-3xl lg:text-5xl">
                  🌟
                </span>
                {headingWords}
              </motion.h1>
              {/* Subtitle */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="text-xs xs:text-sm sm:text-base md:text-lg font-semibold mb-2 sm:mb-4 tracking-wide bg-gradient-to-r from-pink-400 via-indigo-400 to-yellow-400 bg-clip-text text-transparent animate-gradient-move"
                style={{
                  backgroundSize: "200% 200%",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  textShadow: "0 1px 8px rgba(255,255,255,0.10)",
                }}
              >
                Built by Experts. Backed by Schools. Trusted by Parents. Loved
                by Students.
              </motion.div>
              {/* Explore More Button */}
              <Link href="/School">
                <motion.button
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  className="mt-2 sm:mt-4 px-6 sm:px-8 py-2 sm:py-3 rounded-full bg-gradient-to-r from-pink-400 via-indigo-400 to-yellow-400 border border-white/40 text-base sm:text-lg font-semibold text-white shadow-lg backdrop-blur-md transition-all duration-200 hover:shadow-2xl hover:scale-105 focus:outline-none relative overflow-hidden animate-glow"
                  style={{ boxShadow: "0 4px 24px 0 rgba(31, 38, 135, 0.18)" }}
                >
                  <span className="relative z-10">Explore More</span>
                  <span className="absolute inset-0 rounded-full bg-white/10 blur-lg opacity-60 animate-pulse pointer-events-none" />
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Info Cards */}
        <div className="relative z-10 w-full max-w-7xl mx-auto -mt-10 xs:-mt-14 sm:-mt-16 md:-mt-20 lg:-mt-28 px-2 xs:px-4 sm:px-6 grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 overflow-x-hidden">
          <Card
            icon={
              <FaQuestion className="text-blue-200 text-xl xs:text-2xl sm:text-3xl mb-3 mx-auto animate-spin-slow" />
            }
            desc="Are we preparing students for a world that no longer exists?"
            gradient="from-red-100 to-indigo-100"
          />
          <Card
            icon={
              <FaStar className="text-yellow-300 text-xl xs:text-2xl sm:text-3xl mb-3 mx-auto animate-pulse" />
            }
            desc="Does every child truly understand who they are — and what they’re capable of?"
            gradient="from-indigo-100 to-yellow-100"
          />
          <Card
            icon={
              <FaQuestion className="text-blue-200 text-xl xs:text-2xl sm:text-3xl mb-3 mx-auto animate-spin-slow" />
            }
            desc="Do we treat all children like they are the same?"
            gradient="from-yellow-100 to-red-100"
          />
        </div>
      </section>
      <style jsx>{`
        .animate-gradient-move {
          animation: gradient-move 4s ease-in-out infinite alternate;
        }
        @keyframes gradient-move {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 100% 50%;
          }
        }
        .animate-glow {
          box-shadow: 0 0 24px 4px #f472b6, 0 0 48px 8px #818cf8,
            0 0 24px 4px #fde68a;
        }
        .animate-bounce-slow {
          animation: bounce-slow 2.5s infinite alternate;
        }
        @keyframes bounce-slow {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-12px);
          }
        }
        .animate-spin-slow {
          animation: spin 6s linear infinite;
        }
        .shadow-inner-neu {
          box-shadow: inset 8px 8px 24px #e0e0e0, inset -8px -8px 24px #ffffff33;
        }
        .animate-aurora1 {
          animation: aurora1 6s ease-in-out infinite alternate;
        }
        @keyframes aurora1 {
          0% {
            transform: translateY(0) scale(1);
          }
          100% {
            transform: translateY(-20px) scale(1.1);
          }
        }
        .animate-aurora2 {
          animation: aurora2 7s ease-in-out infinite alternate;
        }
        @keyframes aurora2 {
          0% {
            transform: translateY(0) scale(1);
          }
          100% {
            transform: translateY(20px) scale(1.15);
          }
        }
        .animate-aurora3 {
          animation: aurora3 8s ease-in-out infinite alternate;
        }
        @keyframes aurora3 {
          0% {
            transform: translate(-10px, -10px) scale(1);
          }
          100% {
            transform: translate(10px, 10px) scale(1.2);
          }
        }
        .animate-float {
          animation: float 2.5s ease-in-out infinite alternate;
        }
        @keyframes float {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-10px);
          }
        }
        .animate-shimmer {
          animation: shimmer 2.2s linear infinite;
        }
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(200%);
          }
        }
      `}</style>
    </div>
  );
}

function Card({ icon, desc }: CardProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      whileHover={{
        rotateY: 8,
        scale: 1.04,
        boxShadow: "0 8px 32px 0 #818cf8, 0 0 24px 4px #fde68a",
      }}
      viewport={{ once: true }}
      className="relative group rounded-2xl border-2 border-blue-600 overflow-hidden shadow-2xl w-full bg-gradient-to-br from-white/40 via-indigo-100/30 to-yellow-100/40 backdrop-blur-xl"
      style={{
        perspective: 1000,
        boxShadow: "0 12px 40px 0 rgba(31,38,135,0.18)",
      }}
    >
      {/* Aurora/Glow Animated Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute left-1/4 top-0 w-32 h-32 bg-pink-400 opacity-30 rounded-full blur-2xl animate-aurora1" />
        <div className="absolute right-1/4 bottom-0 w-36 h-36 bg-indigo-400 opacity-30 rounded-full blur-2xl animate-aurora2" />
        <div className="absolute left-1/2 top-1/2 w-24 h-24 bg-yellow-300 opacity-20 rounded-full blur-2xl animate-aurora3" />
      </div>
      {/* Glassmorphism + Neumorphism Panel */}
      <div className="relative flex flex-col items-center h-full w-full rounded-2xl backdrop-blur-[12px] bg-white/30 border border-white/40 px-5 py-6 sm:px-6 sm:py-7 z-10 overflow-hidden shadow-inner-neu">
        {/* Animated shimmer on hover */}
        <span className="absolute left-0 top-0 w-full h-full rounded-2xl pointer-events-none overflow-hidden">
          <span className="block w-1/3 h-full bg-gradient-to-r from-white/10 via-white/60 to-white/10 opacity-0 group-hover:opacity-70 blur-lg animate-shimmer" />
        </span>
        {/* Floating glowing icon */}
        <div className="mb-4 flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-pink-500 via-indigo-500 to-yellow-400 shadow-2xl border-4 border-white/40 group-hover:scale-110 group-hover:shadow-pink-200/60 transition-transform duration-300 relative z-20">
          <span className="text-white text-2xl drop-shadow-xl animate-float">
            {icon}
          </span>
          {/* Icon glow */}
          <span className="absolute inset-0 rounded-full bg-pink-400/40 blur-2xl opacity-40 z-[-1]" />
        </div>
        <p className="text-lg text-gray-800 font-bold text-center opacity-90 z-20">
          {desc}
        </p>
      </div>
    </motion.div>
  );
}
