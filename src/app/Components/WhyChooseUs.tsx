"use client";
import Head from "next/head";
import {
  FaBook,
  FaChartLine,
  FaUsers,
  FaChalkboardTeacher,
} from "react-icons/fa";
import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

type CountUpProps = {
  end: number;
  duration?: number;
  inView: boolean;
  suffix?: string;
};

function CountUp({ end, duration = 1.5, inView, suffix = "" }: CountUpProps) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const increment = end / (duration * 60);
    let frame: number;
    function animate() {
      start += increment;
      if (start < end) {
        setCount(Math.floor(start));
        frame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    }
    animate();
    return () => cancelAnimationFrame(frame);
  }, [end, duration, inView]);
  return (
    <span>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function WhyChooseUs() {
  const stats = [
    { number: 40, label: "Cities", suffix: "+" },
    { number: 100, label: "Institutions", suffix: "+" },
    { number: 40000, label: "Students", suffix: "+" },
  ];

  // Features data array
  const features = [
    {
      icon: <FaBook />,
      title: "Whole-Child Approach",
      description:
        "We go beyond academics to nurture every student's mind, emotions, and identity.",
    },
    {
      icon: <FaChartLine />,
      title: "Science Meets Soul",
      description:
        "Our programs blend neuroscience, psychology, and purpose-driven learning to create real transformation",
    },
    {
      icon: <FaUsers />,
      title: "Partnership, Not Preaching",
      description:
        "We collaborate with schools, teachers, and parents — empowering the entire ecosystem, not just students.",
    },
    {
      icon: <FaChalkboardTeacher />,
      title: "Future-Ready, Not Factory-Made",
      description:
        "We equip learners with self-awareness, resilience, and 21st-century skills that exams can't measure.",
    },
  ];

  const statRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [inViewArr, setInViewArr] = useState(stats.map(() => false));

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    statRefs.current.forEach((ref, i) => {
      if (!ref) return;
      const observer = new window.IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setInViewArr((prev) => {
              const updated = [...prev];
              updated[i] = true;
              return updated;
            });
            observer.disconnect();
          }
        },
        { threshold: 0.5 }
      );
      observer.observe(ref);
      observers.push(observer);
    });
    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <div className="container mx-auto">
      <Head>
        <title>Why Choose Scholar United? | Empowering Future Leaders</title>
        <meta
          name="description"
          content="Discover why Scholar United is the premier choice for personalized education and academic success."
        />
      </Head>
      <section className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 py-16">
        {/* Header Section */}
        <div className="text-center mb-16 animate-fadeIn max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-montserrat text-white">
            Why Choose Scholars United?
          </h1>
          <p className="text-lg sm:text-xl font-open-sans text-gray-300 mt-4 leading-relaxed">
            Empowering Future Leaders with Timeless Excellence
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl w-full">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative bg-gray-900 p-6 rounded-lg border border-[#FFD700]/30 overflow-hidden group hover:bg-[#6B7280] transition-all duration-500 hover:shadow-xl hover:scale-105"
            >
              {/* Subtle Pulse Background */}
              <div className="absolute inset-0 bg-[#FFD700]/10 animate-pulseSlow rounded-lg group-hover:bg-[#6B7280]/20" />
              <div className="relative flex justify-center mb-4">
                <div className="w-16 h-16 flex items-center justify-center text-[#FFD700] animate-float group-hover:text-white">
                  {React.cloneElement(feature.icon, {
                    className: "w-16 h-16 text-4xl",
                  })}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-3 font-montserrat text-white group-hover:text-[#FFD700] transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-center text-gray-400 text-sm leading-relaxed group-hover:text-gray-200">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Enhanced Statistics Section */}
        <div className="mt-12 mb-12 w-full">
          <div className="relative max-w-5xl mx-auto px-4">
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#FFD700]/5 via-transparent to-[#FFD700]/5 rounded-3xl blur-xl"></div>

            <div className="relative grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 py-12 px-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  ref={(el) => {
                    statRefs.current[index] = el;
                  }}
                  className="relative group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.2,
                  }}
                >
                  {/* Decorative Background Circle */}
                  <div className="absolute inset-0 bg-[#FFD700]/10 rounded-full blur-2xl group-hover:bg-[#FFD700]/20 transition-all duration-500"></div>

                  {/* Content */}
                  <div className="relative">
                    <motion.div
                      className="text-5xl xs:text-6xl sm:text-7xl font-bold text-[#FFD700] mb-4"
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.8,
                        delay: index * 0.2,
                      }}
                    >
                      <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1,
                          delay: index * 0.2 + 0.5,
                        }}
                      >
                        <CountUp
                          end={stat.number}
                          duration={1.5}
                          inView={inViewArr[index]}
                          suffix={stat.suffix}
                        />
                      </motion.span>
                    </motion.div>

                    <h3 className="text-xl xs:text-2xl font-semibold text-white mb-3 tracking-wider">
                      {stat.label}
                    </h3>

                    {/* Animated Underline */}
                    <div className="relative h-1 w-16 mx-auto">
                      <div className="absolute inset-0 bg-[#FFD700] rounded-full"></div>
                      <div className="absolute inset-0 bg-white/50 rounded-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
