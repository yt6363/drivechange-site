import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[var(--bg-blue)] text-[var(--text-on-blue)]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="py-16 sm:py-20 grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Brand */}
          <div className="md:col-span-4">
            <span className="text-[15px] font-semibold tracking-[0.18em] uppercase text-white">
              Drive Change
            </span>
            <p className="text-sm text-white/35 leading-relaxed mt-5 max-w-xs">
              AI Transformation Strategy, Governance, and Organizational Change
              for the Intelligent Enterprise.
            </p>
          </div>

          {/* Services */}
          <div className="md:col-span-3">
            <p className="text-xs font-medium text-[var(--accent)] tracking-[0.15em] uppercase mb-5">
              Services
            </p>
            <ul className="space-y-3.5 text-sm text-white/45">
              <li>
                <Link
                  href="/ai-transformation"
                  className="hover:text-[var(--accent)] transition-colors"
                >
                  AI Transformation
                </Link>
              </li>
              <li>
                <Link
                  href="/ai-governance"
                  className="hover:text-[var(--accent)] transition-colors"
                >
                  AI Governance
                </Link>
              </li>
              <li>
                <Link
                  href="/organizational-change"
                  className="hover:text-[var(--accent)] transition-colors"
                >
                  Organizational Change
                </Link>
              </li>
              <li>
                <Link
                  href="/insights"
                  className="hover:text-[var(--accent)] transition-colors"
                >
                  Insights
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="md:col-span-2">
            <p className="text-xs font-medium text-[var(--accent)] tracking-[0.15em] uppercase mb-5">
              Company
            </p>
            <ul className="space-y-3.5 text-sm text-white/45">
              <li>
                <Link
                  href="/about"
                  className="hover:text-[var(--accent)] transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-[var(--accent)] transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/shamadriveschange/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--accent)] transition-colors"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <p className="text-xs font-medium text-[var(--accent)] tracking-[0.15em] uppercase mb-5">
              Get in Touch
            </p>
            <ul className="space-y-3.5 text-sm text-white/45">
              <li className="text-white/60">Shama Patel</li>
              <li>
                <a
                  href="mailto:shama.patel@drivechange.biz"
                  className="hover:text-[var(--accent)] transition-colors"
                >
                  shama.patel@drivechange.biz
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/20">
            &copy; {new Date().getFullYear()} Drive Change LLP. All rights
            reserved.
          </p>
          <p className="text-xs text-white/20">
            AI Advisory &middot; Strategy &middot; Governance
          </p>
        </div>
      </div>
    </footer>
  );
}
