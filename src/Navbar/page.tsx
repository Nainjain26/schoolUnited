"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { FiMenu, FiX, FiStar } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

// Animation variants
const linkVariants = {
  hover: {
    y: -2,
    color: "#dc2626", 
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

const underlineVariants = {
  hidden: { width: 0 },
  hover: {
    width: "100%",
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

const buttonVariants = {
  hover: {
    scale: 1.05,
    boxShadow: "0 5px 15px rgba(79, 70, 229, 0.4)", 
    transition: { duration: 0.3 },
  },
  tap: { scale: 0.95 },
};

const mobileMenuVariants = {
  hidden: {
    opacity: 0,
    x: "100%",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    x: "100%",
    transition: { duration: 0.3, ease: "easeIn" },
  },
};

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Handle scroll for shadow animation
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/About" },
    { name: "School Empowerment", href: "/School" },
    { name: "Student Empowerment", href: "/Students" },
    {
      name: "Services",href: "/Services"},
    { name: "Contact", href: "/Contact" },
  ];

  return (
    <motion.header
      className={`sticky top-0 z-50 bg-white bg-opacity-95 backdrop-blur-md transition-shadow duration-300 ${
        isScrolled ? "shadow-lg" : "shadow-sm"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 sm:space-x-3">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Image
              src="/scholarlogo.png" 
              alt="Scholar Unites Logo"
              width={36}
              height={36}
              className="rounded-full sm:w-10 sm:h-10"
            />
          </motion.div>
          <span className="text-lg sm:text-xl lg:text-2xl font-bold text-indigo-700">
            Scholar <br/>United
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-4 lg:space-x-6 items-center">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group">
              <motion.div whileHover="hover" variants={linkVariants}>
                <Link
                  href={link.href}
                  className={`text-sm lg:text-base font-medium transition-colors ${
                    pathname === link.href
                      ? "text-red-600"
                      : "text-gray-700 group-hover:text-red-600"
                  }`}
                >
                  {link.name}
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 bg-red-600"
                    variants={underlineVariants}
                    initial="hidden"
                    whileHover="hover"
                  />
                </Link>
              </motion.div>
              
            </div>
          ))}
        </nav>

        {/* CTA Button */}
        <motion.div
          className="hidden md:block"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          <Link
            href="/Contact"
            className="bg-gradient-to-r from-indigo-600 to-red-600 text-white px-4 sm:px-5 lg:px-6 py-2 rounded-full font-medium shadow-sm flex items-center gap-2"
          >
            <motion.div whileHover={{ scale: 1.2, rotate: 360 }} transition={{ duration: 0.3 }}>
              <FiStar />
            </motion.div>
            Join Now
          </Link>
        </motion.div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </motion.div>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="md:hidden bg-white bg-opacity-95 backdrop-blur-md px-6 pb-6 shadow-lg"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {navLinks.map((link) => (
              <div key={link.name} className="py-1">
                <motion.div whileHover={{ x: 10 }} transition={{ duration: 0.2 }}>
                  <Link
                    href={link.href}
                    className={`block py-2 text-base font-medium ${
                      pathname === link.href ? "text-red-600" : "text-gray-700 hover:text-red-600"
                    }`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
                
              </div>
            ))}
            <motion.div
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="mt-4"
            >
              <Link
                href="/Contact"
                className=" bg-gradient-to-r from-indigo-600 to-red-600 text-white text-center px-4 py-2 rounded-full font-medium flex items-center justify-center gap-2"
                onClick={() => setMenuOpen(false)}
              >
                <motion.div whileHover={{ scale: 1.2, rotate: 360 }} transition={{ duration: 0.3 }}>
                  <FiStar />
                </motion.div>
                Join Now
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}