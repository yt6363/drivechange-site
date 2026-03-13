import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[var(--navy-dark)] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-7 h-7 bg-[var(--gold)] rounded-sm flex items-center justify-center">
                <span className="text-[var(--navy)] font-bold text-xs">DC</span>
              </div>
              <span className="font-semibold tracking-wide">Drive Change</span>
            </div>
            <p className="text-sm text-white/50 leading-relaxed">
              AI Transformation Strategy, Governance, and Organizational Change
              for the Intelligent Enterprise.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-[var(--gold)] uppercase tracking-wider mb-4">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm text-white/60">
              <li><Link href="/ai-transformation" className="hover:text-[var(--gold)] transition-colors">AI Transformation</Link></li>
              <li><Link href="/ai-governance" className="hover:text-[var(--gold)] transition-colors">AI Governance</Link></li>
              <li><Link href="/organizational-change" className="hover:text-[var(--gold)] transition-colors">Organizational Change</Link></li>
              <li><Link href="/insights" className="hover:text-[var(--gold)] transition-colors">Insights</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-[var(--gold)] uppercase tracking-wider mb-4">
              Connect
            </h4>
            <ul className="space-y-2.5 text-sm text-white/60">
              <li><Link href="/about" className="hover:text-[var(--gold)] transition-colors">About</Link></li>
              <li><Link href="/contact" className="hover:text-[var(--gold)] transition-colors">Contact</Link></li>
              <li>
                <a
                  href="https://www.linkedin.com/in/shamadriveschange/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--gold)] transition-colors"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-[var(--gold)] uppercase tracking-wider mb-4">
              Contact
            </h4>
            <ul className="space-y-2.5 text-sm text-white/60">
              <li>Shama Patel</li>
              <li>
                <a href="mailto:shama.patel@drivechange.biz" className="hover:text-[var(--gold)] transition-colors">
                  shama.patel@drivechange.biz
                </a>
              </li>
              <li>
                <a href="tel:+18479150870" className="hover:text-[var(--gold)] transition-colors">
                  +1 (847) 915-0870
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-xs text-white/30">
          <p>&copy; {new Date().getFullYear()} Drive Change LLP. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
