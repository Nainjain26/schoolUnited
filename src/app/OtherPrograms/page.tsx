"use client";

import { motion } from "framer-motion";

export default function OtherProgramsComingSoon() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-black text-white overflow-hidden">
      {/* Background Gold Particles */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <GoldParticle x="20%" y="30%" size={150} />
        <GoldParticle x="70%" y="50%" size={120} />
        <GoldParticle x="50%" y="80%" size={100} />
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-transparent to-yellow-400/5" />
      </div>

      {/* Coming Soon Content */}
      <motion.div
        className="relative z-10 text-center px-4"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-400 text-transparent bg-clip-text animate-pulse">
          Other Programs Coming Soon
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-xl mx-auto">
          We're working on something exciting! Stay tuned for powerful new
          programs that empower students, schools, and communities.
        </p>
      </motion.div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-20px) scale(1.1); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

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
      style={{ left: x, top: y, width: size, height: size }}
      viewBox="0 0 100 100"
      fill="none"
    >
      <defs>
        <radialGradient id="gold-gradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFD700" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#FFD700" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="50" cy="50" r="50" fill="url(#gold-gradient)" />
    </svg>
  );
}
