import React from "react";
import HeroSection from "./Components/Hero";
import AboutSection from "./Components/About";
import ProgramsOverview from "./Components/ProgramsOverview";
import WhyChooseUs from "./Components/WhyChooseUs";
import WhatWeOffer from "./Components/WhatWeoffer";
import TestimonialCarousel from "./Components/Testimonials";
import FAQAccordion from "./Components/FAQAccordion";


export default function Home() {
  return (
    <>
    <HeroSection/>
    <AboutSection/>
    <ProgramsOverview/>
    <WhyChooseUs/>
    <WhatWeOffer/>
   
    <TestimonialCarousel/>
    <FAQAccordion/>
   
    </>
  );
}
