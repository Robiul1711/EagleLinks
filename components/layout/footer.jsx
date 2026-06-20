import Link from "next/link";

const topLinks = [
  { label: "Blog", href: "#" },
  { label: "Contact Us", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Privacy Policy", href: "#" },
];

const serviceColumns = [
  {
    heading: "Instagram Services",
    links: [
      { label: "Buy Instagram Likes", href: "#" },
      { label: "Buy Instagram Comments", href: "#" },
      { label: "Buy Instagram Followers", href: "#" },
      { label: "Buy Instagram Views", href: "#" },
    ],
  },
  {
    heading: "TikTok Services",
    links: [
      { label: "Buy TikTok Likes", href: "#" },
      { label: "Buy TikTok Followers", href: "#" },
      { label: "Buy TikTok Views", href: "#" },
    ],
  },
  {
    heading: "YouTube Services",
    links: [
      { label: "Buy YouTube Views", href: "#" },
      { label: "Buy YouTube Subscribers", href: "#" },
      { label: "Buy YouTube Likes", href: "#" },
    ],
  },
];

const toolsLeft = [
  { label: "Instagram Video Downloader", href: "#" },
  { label: "Instagram Profile Picture Viewer", href: "#" },
  { label: "Instagram Story Downloader", href: "#" },
  { label: "Instagram Story Viewer", href: "#" },
  { label: "Instagram Followers Counter", href: "#" },
  { label: "Free Instagram Likes Trial", href: "#" },
  { label: "Free Instagram Followers Trial", href: "#" },
];

const toolsRight = [
  { label: "Instagram Story Viewer", href: "#" },
  { label: "Twitter Video Downloader", href: "#" },
  { label: "Twitter GIF Downloader", href: "#" },
  { label: "Free TikTok Views", href: "#" },
  { label: "Facebook Video Downloader", href: "#" },
  { label: "Facebook Reels Downloader", href: "#" },
];

const accountLinks = [
  { label: "Log In", href: "#" },
  { label: "Sign In", href: "#" },
];

export default function Footer() {
  return (
    <footer
      style={{ backgroundColor: "#0a0a0a", fontFamily: "'Open Sans', sans-serif" }}
    >
      {/* Top nav row */}
      <div className="border-b border-white/10">
        <div className="mx-auto section-padding-x py-6 flex flex-wrap gap-x-8 gap-y-3">
          {topLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-white text-[15px] font-semibold hover:text-gray-300 transition-colors duration-200"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Main grid */}
      <div className="mx-auto section-padding-x py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-x-6 gap-y-10">

          {/* Instagram / TikTok / YouTube Services */}
          {serviceColumns.map((col) => (
            <div key={col.heading}>
              <h3
                className="text-white font-bold text-[15px] mb-4 leading-snug"
                style={{ fontFamily: "'Rethink Sans', sans-serif" }}
              >
                {col.heading}
              </h3>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-gray-400 text-[13px] hover:text-white transition-colors duration-200 leading-snug"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Tools & Resources – spans 2 columns internally */}
          <div className="sm:col-span-2 lg:col-span-2">
            <h3
              className="text-white font-bold text-[15px] mb-4 leading-snug"
              style={{ fontFamily: "'Rethink Sans', sans-serif" }}
            >
              Tools &amp; Resources
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2.5">
              <ul className="space-y-2.5">
                {toolsLeft.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-gray-400 text-[13px] hover:text-white transition-colors duration-200 leading-snug whitespace-nowrap"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="space-y-2.5">
                {toolsRight.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-gray-400 text-[13px] hover:text-white transition-colors duration-200 leading-snug whitespace-nowrap"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* My Account */}
          <div>
            <h3
              className="text-white font-bold text-[15px] mb-4 leading-snug"
              style={{ fontFamily: "'Rethink Sans', sans-serif" }}
            >
              My Account
            </h3>
            <ul className="space-y-2.5">
              {accountLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 text-[13px] hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Language selector */}
        <div className="mt-10">
          <button className="flex items-center gap-2 text-gray-300 text-[14px] hover:text-white transition-colors duration-200 border border-white/20 rounded-md px-3 py-1.5 hover:border-white/40">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="2" y1="12" x2="22" y2="12" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
            <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}>EN</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p
            className="text-gray-400 text-[13px]"
            style={{ fontFamily: "'Open Sans', sans-serif" }}
          >
            Copyright © {new Date().getFullYear()} Eagle Likes, All Rights Reserved.
          </p>

          {/* Payment icons */}
          <div className="flex items-center gap-2">
            {/* Visa */}
            <div className="bg-white rounded px-2 py-1 flex items-center justify-center h-7 min-w-[44px]">
              <span
                className="text-[#1a1f71] font-black text-[11px] tracking-tight"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                VISA
              </span>
            </div>
            {/* Mastercard */}
            <div className="bg-white rounded px-2 py-1 flex items-center justify-center h-7 min-w-[44px]">
              <span className="flex items-center gap-0.5">
                <span className="w-4 h-4 rounded-full bg-[#EB001B] block opacity-90" />
                <span className="w-4 h-4 rounded-full bg-[#F79E1B] block opacity-90 -ml-2" />
              </span>
            </div>
            {/* Amex */}
            <div className="bg-[#007BC1] rounded px-2 py-1 flex items-center justify-center h-7 min-w-[44px]">
              <span
                className="text-white font-black text-[9px] tracking-tight"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                AMEX
              </span>
            </div>
            {/* Apple Pay */}
            <div className="bg-white rounded px-2 py-1 flex items-center justify-center h-7 min-w-[52px]">
              <span
                className="text-black font-semibold text-[10px] tracking-tight"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                𝗔 Pay
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
