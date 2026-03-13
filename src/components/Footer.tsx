import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[var(--primary)] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Drive Change</h3>
            <p className="text-sm text-white/70 leading-relaxed">
              Helping leaders drive change from ideation through implementation.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-3">Services</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><Link href="/services/strategy" className="hover:text-white transition-colors">Strategy</Link></li>
              <li><Link href="/services/leadership" className="hover:text-white transition-colors">Leadership</Link></li>
              <li><Link href="/services/change" className="hover:text-white transition-colors">Change</Link></li>
              <li><Link href="/services/efficiency" className="hover:text-white transition-colors">Efficiency</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-3">Company</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link href="/profile" className="hover:text-white transition-colors">Profile</Link></li>
              <li><Link href="/case-studies" className="hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link href="/about/giving-back" className="hover:text-white transition-colors">Giving Back</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-3">Contact</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>Shama Patel, Managing Director</li>
              <li>
                <a href="mailto:shama.patel@drivechange.biz" className="hover:text-white transition-colors">
                  shama.patel@drivechange.biz
                </a>
              </li>
              <li>
                <a href="tel:+18479150870" className="hover:text-white transition-colors">
                  +1 (847) 915-0870
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm text-white/50">
          <p>&copy; {new Date().getFullYear()} Drive Change LLP. All rights reserved.</p>
          <p className="mt-1">Registered business entity in Illinois, USA</p>
        </div>
      </div>
    </footer>
  );
}
