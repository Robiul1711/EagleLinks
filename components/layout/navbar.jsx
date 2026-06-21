"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import { ChevronDown, User, Menu, X, Star } from "lucide-react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { FaUser } from "react-icons/fa";

const navItems = [
  {
    label: "TIKTOK",
    children: [
      { label: "Buy TikTok Likes", href: "#" },
      { label: "Buy TikTok Followers", href: "#" },
      { label: "Buy TikTok Views", href: "#" },
      { label: "Buy TikTok Comments", href: "#" },
    ],
  },
  {
    label: "INSTAGRAM",
    children: [
      { label: "Buy Instagram Likes", href: "#" },
      { label: "Buy Instagram Followers", href: "#" },
      { label: "Buy Instagram Views", href: "#" },
      { label: "Buy Instagram Comments", href: "#" },
    ],
  },
  {
    label: "YOUTUBE",
    children: [
      { label: "Buy YouTube Views", href: "#" },
      { label: "Buy YouTube Subscribers", href: "#" },
      { label: "Buy YouTube Likes", href: "#" },
      { label: "Buy YouTube Comments", href: "#" },
    ],
  },
  {
    label: "FACEBOOK",
    children: [
      { label: "Buy Facebook Likes", href: "#" },
      { label: "Buy Facebook Followers", href: "#" },
      { label: "Buy Facebook Views", href: "#" },
    ],
  },
  {
    label: "TWITTER (X)",
    children: [
      { label: "Buy Twitter Followers", href: "#" },
      { label: "Buy Twitter Likes", href: "#" },
      { label: "Buy Twitter Retweets", href: "#" },
    ],
  },
  {
    label: "BLOG",
    children: [
      { label: "Social Media Tips", href: "#" },
      { label: "Growth Strategies", href: "#" },
      { label: "Platform Updates", href: "#" },
    ],
  },
  {
    label: "CONTACT US",
    children: [
      { label: "Support Center", href: "#" },
      { label: "Live Chat", href: "#" },
      { label: "Email Us", href: "#" },
    ],
  },
];

function NavDropdown({ item, isOpen, onToggle }) {
  const ref = useRef(null);

  useEffect(() => {
    function handleOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        onToggle(null);
      }
    }
    if (isOpen) document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, [isOpen, onToggle]);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => onToggle(isOpen ? null : item.label)}
        className="flex items-center gap-1 text-[12.5px] font-semibold tracking-widest text-gray-300 hover:text-white transition-colors duration-200 py-1 whitespace-nowrap"
        aria-expanded={isOpen}
      >
        {item.label}
        <ChevronDown
          size={12}
          className={`mt-0.5 transition-transform duration-200 opacity-70 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-3 min-w-[190px] rounded-lg overflow-hidden shadow-2xl z-50 border border-white/10 bg-[#0d1b2e]">
          <div className="py-1.5">
            {item.children.map((child) => (
              <Link
                key={child.label}
                href={child.href}
                className="block px-4 py-2.5 text-[13px] text-gray-300 hover:text-white hover:bg-white/8 transition-colors duration-150"
                style={{ fontFamily: "'Open Sans', sans-serif" }}
              >
                {child.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === "Escape") setMobileOpen(false);
    }
    if (mobileOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileOpen]);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  return (
    <>
      <header
      className={`fixed top-0 left-0 z-50 w-full py-3.5 md:py-5 border-b font-open-sans transition-all duration-300 ${
        scrolled
          ? "bg-[#050505]/60 backdrop-blur-xl border-white/10 shadow-lg shadow-black/10"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="mx-auto flex section-padding-x items-center justify-between">
        
        {/* Shrunk Small Logo Area */}
        <Link href="/" className="relative block w-[125px] sm:w-[140px] md:w-[170px] xl:w-[200px] transition-all duration-200">
          <Image
            src="/images/logo.png"
            alt="Eagle Likes Logo"
            width={200}
            height={50}
            className="w-full h-auto object-contain"
            priority
          />
        </Link>

        {/* --- Mobile Rating Stars Badge (Hidden on md and above) --- */}
        <div className="flex items-center gap-2 md:hidden bg-white/5 border border-white/10 rounded-lg px-2.5 py-1.5 shadow-sm">
          <span className="text-white text-sm font-bold tracking-tight leading-none">
            5.0
          </span>
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="bg-[#00B7FF] rounded-sm p-0.5 flex items-center justify-center">
                <Star size={10} className="fill-white text-white" />
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Navigation Track */}
        <nav className="hidden lg:flex items-center gap-6 mx-4">
          {navItems.map((item) => (
            <NavDropdown
              key={item.label}
              item={item}
              isOpen={openDropdown === item.label}
              onToggle={setOpenDropdown}
            />
          ))}
        </nav>

        {/* Actions Interface */}
        <div className="hidden lg:flex items-center flex-shrink-0">
          <Link
            href="#"
            className="flex items-center gap-2 px-5 py-[7px] rounded-md border border-Primary/40 text-white text-[13px] font-semibold tracking-wide hover:bg-Primary/30 transition-all duration-200"
          >
            <FaUser size={12} />
            Login
          </Link>
        </div>

        {/* Mobile Hamburger Drawer Trigger */}
        <button
          className="lg:hidden text-white p-2 rounded-md hover:bg-white/10 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

    </header>

    {/* Slide Out Animation Container - Placed outside <header> to avoid backdrop-filter containing block issues */}
    <AnimatePresence>
      {mobileOpen && (
        <>
          {/* Backdrop Layer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm"
            onClick={closeMobile}
            aria-hidden="true"
          />

          {/* Left Side Navigation Drawer Drawer */}
          <motion.aside
            initial={{ x: "-100%" }}
            animate={{ x: "0%" }}
            exit={{ x: "-100%" }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 32,
              mass: 0.9,
            }}
            className="fixed top-0 left-0 z-[70] h-full w-[300px] max-w-[85vw] bg-[#0d1b2e] border-r border-white/10 overflow-y-auto shadow-2xl"
          >
            <div className="pt-20 pb-6 px-4">
              <button
                onClick={closeMobile}
                className="absolute top-5 right-4 p-2 text-gray-400 hover:text-white rounded-md hover:bg-white/10 transition-colors"
                aria-label="Close menu"
              >
                <X size={20} />
              </button>

              <div className="space-y-0.5">
                {navItems.map((item) => (
                  <div key={item.label}>
                    <button
                      onClick={() =>
                        setMobileExpanded(
                          mobileExpanded === item.label ? null : item.label,
                        )
                      }
                      className="w-full flex items-center justify-between py-2.5 px-3 text-[12.5px] font-semibold tracking-widest text-gray-300 hover:text-white rounded-md hover:bg-white/5 transition-colors"
                    >
                      {item.label}
                      <ChevronDown
                        size={12}
                        className={`transition-transform duration-200 opacity-70 ${
                          mobileExpanded === item.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {mobileExpanded === item.label && (
                      <div className="ml-4 mb-1 space-y-0.5">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            onClick={closeMobile}
                            className="block px-3 py-2 text-[13px] text-gray-400 hover:text-white rounded-md hover:bg-white/5 transition-colors"
                            style={{ fontFamily: "'Open Sans', sans-serif" }}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="pt-4 pb-2 border-t border-white/10 mt-4">
                <Link
                  href="#"
                  onClick={closeMobile}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-md border border-white/25 text-white text-[13px] font-semibold hover:bg-white/10 transition-colors w-fit"
                >
                  <User size={14} />
                  Login
                </Link>
              </div>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  </>
  );
}