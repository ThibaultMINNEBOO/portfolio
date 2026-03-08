import { useEffect, useState } from "react";
import data from "../../config/data";

/** Sticky navbar with blur backdrop, responsive mobile menu */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500
        ${scrolled ? "bg-neutral-950/80 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/20" : "bg-transparent"}`}
    >
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="font-heading font-extrabold text-lg text-white tracking-tight hover:text-violet-400 transition-colors duration-300"
        >
          {data.name.split(" ")[0]}
          <span className="text-violet-400">.</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {data.navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-code text-sm text-neutral-400 hover:text-white transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
          <a
            href={`mailto:${data.email}`}
            className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white transition-all duration-300 hover:bg-violet-500 glow-violet"
          >
            Contact
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-neutral-300 hover:text-white transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-neutral-950/95 backdrop-blur-xl border-b border-white/5
          ${mobileMenuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="px-6 py-4 flex flex-col gap-4">
          {data.navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-code text-sm text-neutral-400 hover:text-white transition-colors duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href={`mailto:${data.email}`}
            className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white text-center transition-all duration-300 hover:bg-violet-500"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
