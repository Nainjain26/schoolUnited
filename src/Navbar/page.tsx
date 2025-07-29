"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { FiMenu, FiX } from "react-icons/fi";
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
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Handle scroll for shadow animation
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Who We Are", href: "/About" },

    // DROPDOWN: Student Empowerment
    {
      name: "Student Empowerment",
      dropdown: [
        { name: "Flagship Programs", href: "/Students/Flagship" },
        { name: "Other Programs", href: "/Students/Other" },
      ],
    },
    { name: " For School", href: "/School" },
    { name: "Initiatives", href: "/ShikshaSetu" },
    { name: "Contact", href: "/Contact" },
  ];

  return (
    <motion.header
      className={`sticky top-0 z-50 bg-black bg-opacity-95 backdrop-blur-md transition-shadow duration-300 ${
        isScrolled ? "shadow-lg" : "shadow-sm"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center justify-center space-x-2 sm:space-x-3"
        >
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <div className="relative w-24 h-24 xs:w-28 xs:h-28 sm:w-36 sm:h-20 md:w-48 md:h-24 transition-all duration-300 mr-2">
              <Image
                src="/jpg1.png"
                alt="Scolars Unites Logo"
                fill
                className="object-contain rounded-full drop-shadow-lg"
                priority
                sizes="(max-width: 480px) 6rem, (max-width: 640px) 7rem, (max-width: 768px) 9rem, 12rem"
              />
            </div>
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-4 lg:space-x-6 items-center">
          {navLinks.map((link) =>
            link.dropdown ? (
              <div key={link.name} className="relative" ref={dropdownRef}>
                <div
                  className="flex items-center cursor-pointer select-none"
                  onClick={() =>
                    setOpenDropdown(
                      openDropdown === link.name ? null : link.name
                    )
                  }
                >
                  <span
                    className={
                      `text-sm lg:text-base font-medium transition-colors text-gray-400` +
                      (pathname.startsWith("/Students") ? " text-gray-100" : "")
                    }
                  >
                    {link.name}
                  </span>
                  {/* Chevron indicator */}
                  <svg
                    className={`w-4 h-4 ml-1 transition-transform duration-200 ${
                      openDropdown === link.name ? "rotate-180" : "rotate-0"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
                {/* Dropdown menu */}
                {openDropdown === link.name && (
                  <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50">
                    {link.dropdown.map(
                      (item: { name: string; href: string }) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-gray-600 text-sm"
                          onClick={() => setOpenDropdown(null)}
                        >
                          {item.name}
                        </Link>
                      )
                    )}
                  </div>
                )}
              </div>
            ) : (
              <div key={link.name} className="relative group">
                <motion.div whileHover="hover" variants={linkVariants}>
                  <Link
                    href={link.href}
                    className={`text-sm lg:text-base font-bold transition-colors ${
                      pathname === link.href
                        ? "text-gray-100"
                        : "text-gray-500 group-hover:text-gray-100"
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
            )
          )}
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-gray-500"
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
            {navLinks.map((link) =>
              link.dropdown ? (
                <MobileDropdown
                  key={link.name}
                  link={link}
                  pathname={pathname}
                />
              ) : (
                <div key={link.name} className="py-1">
                  <motion.div
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link
                      href={link.href}
                      className={`block py-2 text-base font-medium ${
                        pathname === link.href
                          ? "text-red-600"
                          : "text-gray-700 hover:text-red-600"
                      }`}
                      onClick={() => setMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                </div>
              )
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

interface DropdownLink {
  name: string;
  dropdown: { name: string; href: string }[];
}

interface MobileDropdownProps {
  link: DropdownLink;
  pathname: string;
}

function MobileDropdown({ link, pathname }: MobileDropdownProps) {
  const [open, setOpen] = useState(false);
  return (
    <div className="py-1">
      <div
        className={`flex items-center justify-between py-2 text-base font-medium cursor-pointer ${
          pathname.startsWith("/Students")
            ? "text-red-600"
            : "text-gray-700 hover:text-red-600"
        }`}
        onClick={() => setOpen((prev) => !prev)}
      >
        <span>{link.name}</span>
        <svg
          className={`w-4 h-4 ml-2 transition-transform ${
            open ? "rotate-180" : "rotate-0"
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
      {open && (
        <div className="pl-4">
          {link.dropdown.map((item: { name: string; href: string }) => (
            <Link
              key={item.name}
              href={item.href}
              className="block py-2 text-gray-700 hover:text-red-600"
              onClick={() => setOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
