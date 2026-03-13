"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const navigation = [
  { name: "Home", href: "/" },
  {
    name: "About",
    href: "/about",
    children: [
      { name: "Overview", href: "/about" },
      { name: "Why Drive Change?", href: "/about/why" },
      { name: "Core Values", href: "/about/core-values" },
      { name: "Giving Back", href: "/about/giving-back" },
    ],
  },
  {
    name: "Services",
    href: "/services/strategy",
    children: [
      { name: "Strategy", href: "/services/strategy" },
      { name: "Leadership", href: "/services/leadership" },
      { name: "Change", href: "/services/change" },
      { name: "Efficiency", href: "/services/efficiency" },
    ],
  },
  {
    name: "Workshops",
    href: "/workshops/communication",
    children: [
      { name: "Communication", href: "/workshops/communication" },
      { name: "Management", href: "/workshops/management" },
    ],
  },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Blog", href: "/blog" },
  { name: "Profile", href: "/profile" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="bg-[var(--primary)] text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/drive-change-logo.png"
              alt="Drive Change"
              width={40}
              height={40}
              className="brightness-0 invert"
            />
            <span className="text-xl font-bold tracking-tight">
              Drive Change
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() =>
                  item.children && setOpenDropdown(item.name)
                }
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="px-3 py-2 text-sm font-medium hover:text-[var(--accent)] transition-colors"
                >
                  {item.name}
                  {item.children && (
                    <span className="ml-1 text-xs">&#9662;</span>
                  )}
                </Link>
                {item.children && openDropdown === item.name && (
                  <div className="absolute top-full left-0 bg-white text-[var(--foreground)] rounded-md shadow-lg py-2 min-w-48 border border-[var(--border)]">
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        href={child.href}
                        className="block px-4 py-2 text-sm hover:bg-[var(--muted-bg)] transition-colors"
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[var(--primary-light)] border-t border-white/10">
          <div className="px-4 py-3 space-y-1">
            {navigation.map((item) => (
              <div key={item.name}>
                <Link
                  href={item.href}
                  className="block px-3 py-2 text-sm font-medium hover:text-[var(--accent)]"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.name}
                </Link>
                {item.children && (
                  <div className="pl-6">
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        href={child.href}
                        className="block px-3 py-1.5 text-xs text-white/70 hover:text-white"
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
