"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const navigation = [
  { name: "Transformation", href: "/ai-transformation" },
  { name: "Governance", href: "/ai-governance" },
  { name: "Change", href: "/organizational-change" },
  { name: "Insights", href: "/insights" },
  { name: "About", href: "/about" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[var(--bg)]/90 backdrop-blur-xl shadow-[0_1px_0_var(--border)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="group">
            <span className="text-[15px] font-semibold tracking-[0.18em] uppercase text-[var(--text)] group-hover:text-[var(--accent)] transition-colors duration-300">
              Drive Change
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="link-animated text-[13px] font-medium text-[var(--text-muted)] hover:text-[var(--text)] transition-colors tracking-wide"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="btn-primary bg-[var(--accent)] text-white px-5 py-2 rounded-full text-[13px] font-medium tracking-wide hover:bg-[var(--accent-hover)] transition-colors"
            >
              Get in Touch
            </Link>
          </nav>

          {/* Mobile burger */}
          <button
            className="lg:hidden p-2 -mr-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span
                className={`h-[1.5px] bg-[var(--text)] transition-all duration-300 origin-center ${
                  mobileOpen ? "rotate-45 translate-y-[4.5px]" : ""
                }`}
              />
              <span
                className={`h-[1.5px] bg-[var(--text)] transition-all duration-300 ${
                  mobileOpen ? "opacity-0 scale-x-0" : ""
                }`}
              />
              <span
                className={`h-[1.5px] bg-[var(--text)] transition-all duration-300 origin-center ${
                  mobileOpen ? "-rotate-45 -translate-y-[4.5px]" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          mobileOpen ? "max-h-[400px]" : "max-h-0"
        }`}
      >
        <div className="bg-[var(--bg)] border-t border-[var(--border)] px-6 py-8 space-y-5">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block text-sm font-medium text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className="block w-full text-center bg-[var(--accent)] text-white py-3 rounded-full text-sm font-medium hover:bg-[var(--accent-hover)] transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </header>
  );
}
