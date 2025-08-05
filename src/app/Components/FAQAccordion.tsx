"use client";
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

// Gold floating particle SVG
function GoldParticle({
  x,
  y,
  size = 120,
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
          id="gold-gradient"
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
      <circle cx="50" cy="50" r="50" fill="url(#gold-gradient)" />
    </svg>
  );
}

const parentFAQs = [
  {
    q: "What does Scolars United offer for my child’s growth?",
    a: `We offer transformative, non-academic and academic-supportive programs that help children build self-awareness, emotional resilience, decision-making skills, and future-ready capabilities through experiential journeys, skill labs, psychological profiling, and much more.`,
  },
  {
    q: "Will this help with my child’s studies or career clarity?",
    a: `Yes. Our student profiling tools, personalized reports and personal development modules help your child understand how they learn, what drives them, and what environments help them thrive — laying the foundation for informed academic and career choices.`,
  },
  {
    q: "My child is emotionally sensitive or introverted — are these programs suitable?",
    a: `Absolutely! Our facilitators are trained to create safe, inclusive, non-judgmental spaces. Every child is respected for who they are and is supported at their own pace of participation and reflection.`,
  },
  {
    q: "How can I track my child’s progress or outcomes?",
    a: `Our programs include personalized reflections, growth worksheets, psychometric insights and individual reports. You’ll often notice changes in your child’s mindset, self-confidence, and emotional maturity soon after the sessions. Also, the reflections and insights provided by us will help you to understand the transformation of your child better.`,
  },
  {
    q: "Can parents be involved in the process?",
    a: `In some cases, yes. While most programs are student-centered, select modules include parent communication, closing reflections, or follow-up guidance to help you support your child’s development at home.`,
  },
];

const schoolFAQs = [
  {
    q: "What kind of support does Scolars United offer to schools?",
    a: `We provide four major solutions:\n· Holistic development of the students\n· Development of academic support system\n· Marketing and branding support\n· Tech integration support`,
  },
  {
    q: "How do these programs add value to our institution?",
    a: `Scolars United adds value to schools by offering four core solutions that drive meaningful transformation—for both students and the institution.\n\n1. Create holistic development frameworks to nurture emotional intelligence and creativity and foster character growth of the students.\n2. Help the institutions develop strong academic support systems through strategic leadership and faculty advancement.\n3. Enhance school visibility through focused marketing and branding.\n4. Help institutions build future-readiness via guided tech integration, including, but not limited to, smart classrooms, LMS, STEM labs, and data systems.`,
  },
  {
    q: "Are these programs backed by scientific research?",
    a: `Yes. Every module is designed using principles from neuroscience, psychology, education research, and global best practices — contextualized for school learners and school ecosystems.`,
  },
  {
    q: "Can we customize the programs for our students and staff?",
    a: `Absolutely! All offerings can be tailored based on your students’ age group, school size, curriculum, institutional goals, and logistical preferences.`,
  },
  {
    q: "Do your programs interrupt academics or school schedules?",
    a: `Not at all. We ensure minimal academic disruption. Programs can be conducted at a time which is mutually agreed upon after discussions. Moreover, these programs will help in your academic system as children will be more focused on what they do after attending these programs!`,
  },
  {
    q: "What support do you provide before and after the program?",
    a: `We offer end-to-end support to ensure lasting impact — from pre-program needs assessments, staff orientation, and logistical alignment, to seamless on-ground facilitation and real-time coordination during the sessions. Post-program, we provide detailed impact reports, debriefs, strategic follow-ups, and extended mentorship with digital resources to help embed the learning into your school’s culture.`,
  },
  {
    q: "How can we book a program or get a proposal?",
    a: (
      <>
        Please fill the form for detailed information{" "}
        <a
          href="https://forms.gle/BGyHJmg5XQNrffVA7"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#FFD700] underline hover:text-white"
        >
          here
        </a>
        . You may also call or WhatsApp us at{" "}
        <a
          href="https://wa.me/918955529950"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#FFD700] underline hover:text-white"
        >
          +91 8955529950
        </a>{" "}
        or write to us at{" "}
        <a
          href="mailto:info@scolarsunited.com"
          className="text-[#FFD700] underline hover:text-white"
        >
          info@scolarsunited.com
        </a>
        . Our team will schedule a consultation and send you a tailored proposal
        within 48 hours.
      </>
    ),
  },

  {
    q: "What is your pricing structure?",
    a: `Pricing varies depending on program type, number of participants, and level of customization. For a detailed quote, please contact our team via phone or email.`,
  },
];

function AccordionList({
  faqs,
}: {
  faqs: { q: string; a: string | React.ReactNode }[];
}) {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  return (
    <div className="space-y-2 relative z-10">
      {faqs.map((item, idx) => (
        <div
          key={idx}
          className={`rounded-lg border border-[#FFD700]/60 bg-gray-900 transition-all duration-300 shadow-md ${
            openIdx === idx ? "ring-2 ring-[#FFD700]" : ""
          }`}
        >
          <button
            className="w-full flex justify-between items-center px-4 py-3 text-left focus:outline-none hover:bg-[#FFD700]/10 transition-colors rounded-lg"
            onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
            aria-expanded={openIdx === idx}
            aria-controls={`faq-content-${idx}`}
          >
            <span className="font-semibold text-base md:text-lg text-white flex-1 pr-2">
              {item.q}
            </span>
            <FaChevronDown
              className={`ml-2 text-[#FFD700] transition-transform duration-300 ${
                openIdx === idx ? "rotate-180" : "rotate-0"
              }`}
              aria-hidden="true"
            />
          </button>
          <div
            id={`faq-content-${idx}`}
            className={`px-4 pb-2 text-gray-300 text-sm md:text-base transition-all duration-300 ${
              openIdx === idx
                ? "max-h-[400px] opacity-100 py-2"
                : "max-h-0 opacity-0 py-0"
            }`}
            style={{
              overflow: "hidden",
              whiteSpace: "pre-line",
            }}
          >
            {item.a}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function FAQAccordion() {
  const [tab, setTab] = useState<"parents" | "schools">("parents");
  return (
    <div className="relative container mx-auto py-12 px-2 md:px-8 bg-black min-h-screen overflow-hidden">
      {/* Animated gold background elements */}
      <div className="pointer-events-none absolute inset-0 z-0">
        {/* Large blurred gold circles */}
        <GoldParticle x="10%" y="10%" size={180} />
        <GoldParticle x="70%" y="20%" size={120} />
        <GoldParticle x="20%" y="70%" size={100} />
        <GoldParticle x="80%" y="80%" size={160} />
        {/* Subtle gold gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#FFD700]/10 via-transparent to-[#FFD700]/5" />
      </div>
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-20px) scale(1.08); }
        }
        .animate-float { animation: float 7s ease-in-out infinite; }
      `}</style>
      <h1 className="text-3xl md:text-6xl font-extrabold text-center mb-8 text-white tracking-tight relative z-10">
        FAQ
      </h1>
      <div className="flex justify-center mb-8 relative z-10">
        <button
          className={`px-6 py-2 rounded-t-lg font-semibold text-base md:text-lg transition-all duration-200 border-b-4 ${
            tab === "parents"
              ? "border-[#FFD700] text-[#FFD700] bg-gray-900 shadow"
              : "border-transparent text-gray-300 hover:text-[#FFD700] hover:bg-gray-800"
          }`}
          onClick={() => setTab("parents")}
        >
          For Parents
        </button>
        <button
          className={`px-6 py-2 rounded-t-lg font-semibold text-base md:text-lg transition-all duration-200 border-b-4 ml-2 ${
            tab === "schools"
              ? "border-[#FFD700] text-[#FFD700] bg-gray-900 shadow"
              : "border-transparent text-gray-300 hover:text-[#FFD700] hover:bg-gray-800"
          }`}
          onClick={() => setTab("schools")}
        >
          For Schools
        </button>
      </div>
      <div className="max-w-2xl mx-auto relative z-10">
        {tab === "parents" ? (
          <AccordionList faqs={parentFAQs} />
        ) : (
          <AccordionList faqs={schoolFAQs} />
        )}
      </div>
    </div>
  );
}
