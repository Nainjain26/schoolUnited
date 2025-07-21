"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { motion, AnimatePresence } from "framer-motion";
import { FaQuoteRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useState } from "react";

// Gold floating particle SVG
function GoldParticle({
  x,
  y,
  size = 100,
}: {
  x: string;
  y: string;
  size?: number;
}) {
  return (
    <svg
      className="absolute opacity-20 animate-float"
      style={{ left: x, top: y, width: size, height: size, zIndex: 0 }}
      viewBox="0 0 100 100"
      fill="none"
    >
      <defs>
        <radialGradient
          id="gold-gradient-t"
          cx="50%"
          cy="50%"
          r="50%"
          fx="50%"
          fy="50%"
        >
          <stop offset="0%" stopColor="#FFD700" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#FFD700" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="50" cy="50" r="50" fill="url(#gold-gradient-t)" />
    </svg>
  );
}

const testimonials = [
  {
    quote:
      "Scolars United doesn’t just support schools — it helps us evolve. Their programs redefined how we approach student growth beyond the classroom.",
    name: "R. Mehra",
    title: "Principal",
  },
  {
    quote:
      "The Infinity Code was a turning point for our students. We witnessed emotional growth, self-reflection, and confidence like never before.",
    name: "Dr. Anjali Kumar",
    title: "Head of School",
  },
  {
    quote:
      "Scolars United brings a rare blend of innovation, empathy, and scientific insight. Their programs are not just relevant — they are essential for the next generation of learners.",
    name: "Mrs. Neelam Joshi",
    title: "Principal",
  },
  {
    quote:
      "Our association with Scolars United has transformed the way we define student success. It’s no longer just about marks — it’s about mindset, emotional maturity, and self-leadership.",
    name: "Mr. R. N. Pillai",
    title: "Principal",
  },
  {
    quote:
      "For the first time, my son came home from a program and said, ‘I finally know who I am.’ That’s the kind of impact Scolars United creates.",
    name: "Meera Nair",
    title: "Parent, Class 10 student",
  },
  {
    quote:
      "Their parent sessions helped me truly see my child — not just as a student, but as a person with emotions, dreams, and a unique pace of growth.",
    name: "Ashish Ghosh",
    title: "Parent, Class 8 student",
  },
  {
    quote:
      "Through Scolars United’s teacher training, I reconnected with why I became an educator in the first place. It’s no longer just teaching — it’s mentoring.",
    name: "Anupama Sen",
    title: "English Teacher",
  },
  {
    quote:
      "Their Guide program made me realize how important emotional literacy is in the classroom. It changed how I interact with every student.",
    name: "Rakesh Verma",
    title: "Senior Science Faculty",
  },
  {
    quote:
      "The Infinity Code felt like a mirror I’d never looked into. It helped me find answers I didn’t know I was searching for.",
    name: "Aanya M.",
    title: "Class 11",
  },
  {
    quote:
      "After the Quantum Key program, I understand how to use tech smartly, not just blindly. It made me feel in control, not overwhelmed.",
    name: "Kartik S.",
    title: "Class 9",
  },
  {
    quote:
      "This wasn’t like school at all — it was better. I could be myself, talk about real things, and actually learn how my brain works.",
    name: "Tanya K.",
    title: "Class 10",
  },
  {
    quote:
      "They didn’t tell us what to think. They showed us how to think, feel, and grow. I wish every school had this.",
    name: "Ishaan D.",
    title: "Class 12",
  },
];

export default function TestimonialCarousel() {
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged() {
      // setCurrentSlide(s.track.details.rel); // Removed unused variable
    },
    created() {
      setLoaded(true);
    },
    loop: true,
    mode: "free-snap",
    slides: {
      perView: 1,
      spacing: 16,
      origin: "center",
    },
    breakpoints: {
      "(min-width: 480px)": {
        slides: { perView: 1.1, spacing: 20 },
      },
      "(min-width: 640px)": {
        slides: { perView: 1.2, spacing: 24 },
      },
      "(min-width: 768px)": {
        slides: { perView: 1.3, spacing: 32 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 1.5, spacing: 48 },
      },
    },
  });

  return (
    <section className="py-10 sm:py-14 md:py-16 px-2 sm:px-4 md:px-8 bg-black relative overflow-hidden">
      {/* Gold background elements */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <GoldParticle x="10%" y="10%" size={80} />
        <GoldParticle x="70%" y="20%" size={60} />
        <GoldParticle x="20%" y="80%" size={70} />
        <GoldParticle x="85%" y="85%" size={100} />
        <div className="absolute -top-32 -left-32 w-72 h-72 sm:w-96 sm:h-96 bg-[#FFD700] rounded-full blur-3xl opacity-30 pointer-events-none"></div>
        <div className="absolute -bottom-32 -right-32 w-[18rem] h-[18rem] sm:w-[32rem] sm:h-[32rem] bg-[#FFD700] rounded-full blur-3xl opacity-15 pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl sm:max-w-4xl h-32 sm:h-64 bg-[#FFD700] rounded-full blur-3xl opacity-5 pointer-events-none"></div>
      </div>
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-20px) scale(1.08); }
        }
        .animate-float { animation: float 7s ease-in-out infinite; }
      `}</style>
      <div className="text-center mb-10 sm:mb-14 md:mb-16 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-3 tracking-tight"
        >
          Testimonials
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-base sm:text-lg md:text-xl text-[#FFD700] max-w-2xl mx-auto"
        >
          Trusted by hundreds of institutions and parents across India
        </motion.p>
      </div>
      <div className="relative max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto">
        {loaded && slider.current && (
          <>
            <button
              onClick={() => slider.current?.prev()}
              aria-label="Previous testimonial"
              className="absolute left-1 sm:left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-10 z-20 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-[#FFD700] shadow-md hover:bg-[#FFD700]/80 transition-colors text-black text-lg sm:text-xl"
              style={{ touchAction: "manipulation" }}
            >
              <FaChevronLeft size={22} />
            </button>
            <button
              onClick={() => slider.current?.next()}
              aria-label="Next testimonial"
              className="absolute right-1 sm:right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-10 z-20 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-[#FFD700] shadow-md hover:bg-[#FFD700]/80 transition-colors text-black text-lg sm:text-xl"
              style={{ touchAction: "manipulation" }}
            >
              <FaChevronRight size={22} />
            </button>
          </>
        )}
        <div ref={sliderRef} className="keen-slider pb-5 relative z-10">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="keen-slider__slide flex items-center justify-center"
            >
              <AnimatePresence>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="p-4 sm:p-6 md:p-8 bg-gray-900 rounded-2xl shadow-lg flex flex-col items-center border border-[#FFD700]/20 hover:shadow-2xl hover:shadow-[#FFD700]/20 transition-all duration-300 h-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl w-full mx-auto"
                >
                  <FaQuoteRight className="text-[#FFD700] w-8 h-8 sm:w-10 sm:h-10 mb-4" />
                  <p className="text-white text-center mb-6 text-base sm:text-lg md:text-xl leading-relaxed relative px-1 sm:px-2 font-medium">
                    {t.quote}
                  </p>
                  <div className="text-center mt-auto">
                    <h4 className="font-bold text-[#FFD700] text-lg sm:text-xl mb-1">
                      {t.name}
                    </h4>
                    <span className="text-gray-300 text-sm sm:text-base block mb-1">
                      {t.title}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
