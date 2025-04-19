'use client';

import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FaStar, FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import { useState } from 'react';

const testimonials = [
  {
    quote: "Scholars United helped our school implement a student-centric approach. The transformation has been incredible!",
    name: "Anita Verma",
    title: "Principal, Sunrise Public School",
    image: "/a5.jpg",
    rating: 5,
    date: "January 10, 2024"
  },
  {
    quote: "The hostel development support from Scholars United was both practical and thoughtful. Students feel more at home now.",
    name: "Rajeev Mehta",
    title: "Director, Green Valley Academy",
    image: "/a2.jpg",
    rating: 4,
    date: "February 5, 2024"
  },
  {
    quote: "Their documentation and process framework made our school inspections stress-free and well-organized.",
    name: "Pooja Nair",
    title: "Academic Coordinator, Harmony School",
    image: "/a3.jpg",
    rating: 5,
    date: "March 12, 2024"
  },
  {
    quote: "The personalized learning plans helped our students perform better in exams and boosted their confidence.",
    name: "Sandeep Khanna",
    title: "Vice Principal, Scholars Academy",
    image: "/a4.jpg",
    rating: 5,
    date: "March 20, 2024"
  },
  {
    quote: "Scholars United brought structure, clarity, and growth to our school's operations. Highly recommended.",
    name: "Reema Joshi",
    title: "Head of School, Blossom International",
    image: "/a5.jpg",
    rating: 5,
    date: "April 3, 2024"
  }
];


export default function TestimonialCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(s) {
      setCurrentSlide(s.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
    loop: true,
    mode: "free-snap",
    slides: { 
      perView: 1.1, 
      spacing: 25,
      origin: 'center'
    },
    breakpoints: {
      '(min-width: 768px)': {
        slides: { perView: 1.5, spacing: 30 }
      },
      '(min-width: 1024px)': {
        slides: { perView: 2, spacing: 40 }
      }
    }
  });

  return (
    <section className="py-16 px-6 sm:px-12 bg-gradient-to-br from-blue-50 via-white to-blue-100 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-200 rounded-full opacity-10"></div>
      <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-blue-300 rounded-full opacity-10"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-64 bg-blue-400 rounded-full blur-3xl opacity-5"></div>
      
      <div className="text-center mb-16 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-gray-800 mb-3"
        >
          What Our Clients Say
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg text-blue-600 max-w-2xl mx-auto"
        >
          Trusted by hundreds of customers across India
        </motion.p>
      </div>

      <div className="relative max-w-6xl mx-auto">
        {loaded && slider.current && (
          <>
            <button 
              onClick={() => slider.current?.prev()}
              aria-label="Previous testimonial"
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md hover:bg-blue-50 transition-colors text-blue-600 hover:text-blue-800"
            >
              <FaChevronLeft size={24} />
            </button>
            <button 
              onClick={() => slider.current?.next()}
              aria-label="Next testimonial"
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md hover:bg-blue-50 transition-colors text-blue-600 hover:text-blue-800"
            >
              <FaChevronRight size={24} />
            </button>
          </>
        )}
        
        <div ref={sliderRef} className="keen-slider pb-5 relative z-10">
          {testimonials.map((t, i) => (
            <div 
              key={i}
              className="keen-slider__slide"
            >
              <AnimatePresence>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="p-8 bg-white rounded-2xl shadow-lg flex flex-col items-center border border-blue-50 hover:shadow-xl transition-all duration-300 h-full"
                >
                  <div className="relative mb-6 group">
                    <div className="absolute inset-0 bg-blue-500 rounded-full blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                    <Image 
                      src={t.image} 
                      alt={t.name} 
                      width={90} 
                      height={90} 
                      className="rounded-full border-4 border-blue-100 shadow-md relative z-10 group-hover:border-blue-200 transition-all duration-300"
                    />
                    <div className="absolute -bottom-2 left-1/2 z-20 transform -translate-x-1/2 bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap shadow-sm">
                      Verified Client
                    </div>
                  </div>
                  
                  <div className="flex mb-3">
                    {[...Array(5)].map((_, starIdx) => (
                      <FaStar 
                        key={starIdx}
                        size={20}
                        className={starIdx < t.rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"}
                      />
                    ))}
                  </div>
                  
                  <FaQuoteRight className="text-blue-100 w-8 h-8 mb-2" />
                  
                  <p className="text-gray-700 text-center mb-6 text-lg leading-relaxed relative px-4">
                    {t.quote}
                  </p>
                  
                  <div className="text-center mt-auto">
                    <h4 className="font-bold text-gray-900 text-xl mb-1">{t.name}</h4>
                    <span className="text-blue-600 text-sm block mb-1">{t.title}</span>
                    <span className="text-gray-400 text-xs">{t.date}</span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation dots */}
      {loaded && slider.current && (
        <div className="flex justify-center mt-10 gap-2 relative z-10">
          {[...Array(testimonials.length)].map((_, idx) => (
            <button 
              key={idx}
              onClick={() => slider.current?.moveToIdx(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`w-3 h-3 rounded-full transition-all ${currentSlide === idx ? 'bg-blue-600 w-6' : 'bg-blue-200 hover:bg-blue-400'}`}
            />
          ))}
        </div>
      )}

      {/* Trust indicators */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="flex flex-wrap justify-center gap-6 mt-14 text-gray-600 text-sm"
      >
        <div className="flex items-center gap-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} size={16} className="fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <span>4.9/5 Average Rating</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-green-500"></div>
          <span>100% Satisfaction Guarantee</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-blue-500"></div>
          <span>500+ Happy Customers</span>
        </div>
      </motion.div>
    </section>
  );
}