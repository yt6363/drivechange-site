"use client";

import Link from "next/link";
import { useState } from "react";

const navigation = [
  { name: "AI Transformation", href: "/ai-transformation" },
  { name: "AI Governance", href: "/ai-governance" },
  { name: "Organizational Change", href: "/organizational-change" },
  { name: "Insights", href: "/insights" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-[var(--navy)] text-white sticky top-0 z-50 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-8 h-8 bg-[var(--gold)] rounded-sm flex items-center justify-center">
              <span className="text-[var(--navy)] font-bold text-sm">DC</span>
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-base font-semibold tracking-wide">
                Drive Change
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-0.5">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-3 py-2 text-[13px] font-medium text-white/80 hover:text-[var(--gold)] transition-colors tracking-wide uppercase"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <button
            className="lg:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-[var(--navy-light)] border-t border-white/10">
          <div className="px-4 py-3 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-3 py-2.5 text-sm font-medium text-white/80 hover:text-[var(--gold)] transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
