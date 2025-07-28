"use client";


import Image from "next/image";

import AboutOurStory from "../Components/VissionMission";
import CoreValuesSection from "../Components/CoreValue";

export default function AboutIntroBanner() {
  

  

  
  return (
    <div className="container mx-auto">
      <div className="relative w-full min-h-[350px] md:min-h-[420px] flex flex-col items-center justify-center text-center overflow-hidden bg-[#181c3a]">
        {/* Background image or gradient overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/photo2.jpg" // Replace with your actual background image path
            alt="AI Background"
            fill
            className="object-cover object-center "
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#424a83]/80 to-[#181c3a]/95" />
        </div>
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full w-full px-4 py-12">
          
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-2">
            WHO WE ARE?
            <span className="block w-16 h-1 mx-auto mt-2 bg-gradient-to-r from-yellow-400 to-purple-500 rounded"></span>
          </h1>
          <p className="text-white text-base md:text-lg max-w-3xl mx-auto mt-4 font-medium">
          Scolars United is on a mission to democratize education and ensure that
            every learner, regardless of background or location, has access to
            the knowledge and skills they need to succeed in this fast changing
            and modern world.
          </p>
        </div>
      </div>

      <AboutOurStory />
      <CoreValuesSection />
      
      
    </div>
  );
}
