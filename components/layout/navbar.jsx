"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, User, Menu, X } from "lucide-react";
import Image from "next/image";
import { BiSolidUser } from "react-icons/bi";
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

  return (
    <header
      className="sticky top-0 z-50 w-full py-4 md:py-5 border-b border-Primary/20 font-open-sans"
    >

      <div className="mx-auto flex section-padding-x items-center justify-between">

        {/* Logo */}
        <Link href="/" className="">
          <Image src="/images/logo.png" alt="Eagle Likes Logo" width={200} height={200} priority />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-6 mx-4">
          {navItems.map((item) => (
            <NavDropdown
              key={item.label}
              item={item}
              isOpen={openDropdown === item.label}
              onToggle={setOpenDropdown}
            />
          ))}
        </nav>

        {/* Login Button */}
        <div className="hidden xl:flex items-center flex-shrink-0">
          <Link
            href="#"
            className="flex items-center gap-2 px-5 py-[7px] rounded-md border border-Primary text-white text-[13px] font-semibold tracking-wide hover:bg-Primary hover:border-Primary transition-all duration-200"
          >
            <BiSolidUser/>
            Login
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="xl:hidden text-white p-2 rounded-md hover:bg-white/10 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="xl:hidden border-t border-white/10 max-h-[80vh] overflow-y-auto bg-[#0d1b2e]">
          <div className="px-4 py-3 space-y-0.5">
            {navItems.map((item) => (
              <div key={item.label}>
                <button
                  onClick={() =>
                    setMobileExpanded(mobileExpanded === item.label ? null : item.label)
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
                        onClick={() => setMobileOpen(false)}
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
            <div className="pt-3 pb-2 border-t border-white/10 mt-2">
              <Link
                href="#"
                className="flex items-center gap-2 px-4 py-2.5 rounded-md border border-white/25 text-white text-[13px] font-semibold hover:bg-white/10 transition-colors w-fit"
              >
                <User size={14} />
                Login
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
