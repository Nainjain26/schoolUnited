import Head from 'next/head';
import { FaBook, FaChartLine, FaUsers, FaChalkboardTeacher } from 'react-icons/fa';

export default function WhyChooseUs() {
  return (
    <div className='container mx-auto'>
      <Head>
        <title>Why Choose Scholar United? | Empowering Future Leaders</title>
        <meta name="description" content="Discover why Scholar United is the premier choice for personalized education and academic success." />
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
          {/* Personalized Learning Paths */}
          <div className="relative bg-gray-900 p-6 rounded-lg border border-[#FFD700]/30 overflow-hidden group hover:bg-[#6B7280] transition-all duration-500 hover:shadow-xl hover:scale-105">
            {/* Subtle Pulse Background */}
            <div className="absolute inset-0 bg-[#FFD700]/10 animate-pulseSlow rounded-lg group-hover:bg-[#6B7280]/20" />
            <div className="relative flex justify-center mb-4">
              <FaBook className="w-12 h-12 text-[#FFD700] animate-float group-hover:text-white" />
            </div>
            <h3 className="text-xl font-semibold text-center mb-3 font-montserrat text-white group-hover:text-[#FFD700] transition-colors duration-300">
              Personalized Learning Paths
            </h3>
            <p className="text-center text-gray-400 text-sm leading-relaxed group-hover:text-gray-200">
              Customized educational plans designed to unlock your unique potential and foster academic excellence.
            </p>
          </div>

          {/* Real Impact on School Growth */}
          <div className="relative bg-gray-900 p-6 rounded-lg border border-[#FFD700]/30 overflow-hidden group hover:bg-[#6B7280] transition-all duration-500 hover:shadow-xl hover:scale-105">
            <div className="absolute inset-0 bg-[#FFD700]/10 animate-pulseSlow rounded-lg group-hover:bg-[#6B7280]/20" />
            <div className="relative flex justify-center mb-4">
              <FaChartLine className="w-12 h-12 text-[#FFD700] animate-float group-hover:text-white" />
            </div>
            <h3 className="text-xl font-semibold text-center mb-3 font-montserrat text-white group-hover:text-[#FFD700] transition-colors duration-300">
              Real Impact on School Growth
            </h3>
            <p className="text-center text-gray-400 text-sm leading-relaxed group-hover:text-gray-200">
              Achieve measurable success with strategies that drive your academic and personal growth.
            </p>
          </div>

          {/* 1000+ Students Empowered */}
          <div className="relative bg-gray-900 p-6 rounded-lg border border-[#FFD700]/30 overflow-hidden group hover:bg-[#6B7280] transition-all duration-500 hover:shadow-xl hover:scale-105">
            <div className="absolute inset-0 bg-[#FFD700]/10 animate-pulseSlow rounded-lg group-hover:bg-[#6B7280]/20" />
            <div className="relative flex justify-center mb-4">
              <FaUsers className="w-12 h-12 text-[#FFD700] animate-float group-hover:text-white" />
            </div>
            <h3 className="text-xl font-semibold text-center mb-3 font-montserrat text-white group-hover:text-[#FFD700] transition-colors duration-300">
              1000+ Students Empowered
            </h3>
            <p className="text-center text-gray-400 text-sm leading-relaxed group-hover:text-gray-200">
              Join a vibrant community of successful graduates thriving in their academic journeys.
            </p>
          </div>

          {/* Experienced Mentors & Trainers */}
          <div className="relative bg-gray-900 p-6 rounded-lg border border-[#FFD700]/30 overflow-hidden group hover:bg-[#6B7280] transition-all duration-500 hover:shadow-xl hover:scale-105">
            <div className="absolute inset-0 bg-[#FFD700]/10 animate-pulseSlow rounded-lg group-hover:bg-[#6B7280]/20" />
            <div className="relative flex justify-center mb-4">
              <FaChalkboardTeacher className="w-12 h-12 text-[#FFD700] animate-float group-hover:text-white" />
            </div>
            <h3 className="text-xl font-semibold text-center mb-3 font-montserrat text-white group-hover:text-[#FFD700] transition-colors duration-300">
              Experienced Mentors & Trainers
            </h3>
            <p className="text-center text-gray-400 text-sm leading-relaxed group-hover:text-gray-200">
              Learn from industry-leading experts dedicated to your success with proven expertise.
            </p>
          </div>
        </div>

        {/* Call to Action Button */}
        <div className="mt-16">
          <a
            href="/contact"
            className="relative bg-[#FFD700] text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#D4A017] transition-all duration-300 shadow-md hover:shadow-xl transform hover:-translate-y-1 overflow-hidden group"
          >
            <span className="relative z-10">Discover More</span>
            <div className="absolute inset-0 bg-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
        </div>
      </section>
    </div>
  );
}