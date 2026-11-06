import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Terminal, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Tech', href: '#tech' },
    { name: 'Creative', href: '#creative' },
    { name: 'Music', href: '#music' },
    { name: 'Sports', href: '#sports' },
    { name: 'Projects', href: '#projects' },
    { name: 'Journey', href: '#journey' },
    { name: 'Contact', href: '#contact' }
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#080808]/85 backdrop-blur-md border-b border-white/[0.08] shadow-2xl shadow-black/80 py-3.5' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <a 
            href="#" 
            onClick={(e) => handleLinkClick(e, '#root')}
            className="group flex items-center space-x-3 text-white focus:outline-none"
          >
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#1c1c22] to-[#0c0c0e] border border-white/10 flex items-center justify-center group-hover:border-[#E31B35]/60 transition-colors">
              <span className="font-display font-extrabold text-sm tracking-wider text-white group-hover:text-[#E31B35] transition-colors">
                AS
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-lg tracking-wider group-hover:text-white transition-colors">
                ABIN <span className="text-[#E31B35]">SALISH</span>
              </span>
              <span className="text-[10px] font-mono text-zinc-400 tracking-widest uppercase">
                Future Entrepreneur
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-1 bg-white/[0.03] border border-white/[0.06] rounded-full px-4 py-1.5 backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-xs font-medium text-zinc-300 hover:text-white px-3 py-1.5 rounded-full hover:bg-white/[0.06] hover:text-[#E31B35] transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action: Status Pill & Contact CTA */}
          <div className="hidden sm:flex items-center space-x-3">
            <div className="hidden xl:flex items-center space-x-2 px-3 py-1 rounded-full bg-zinc-900/80 border border-zinc-800 text-[11px] font-mono text-zinc-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Grade 9 • Kerala, India</span>
            </div>

            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-full bg-[#E31B35] hover:bg-[#ff2a47] text-white text-xs font-semibold tracking-wide transition-all duration-300 shadow-lg shadow-[#E31B35]/20 hover:shadow-[#E31B35]/40 hover:scale-[1.02]"
            >
              <span>Let's Build</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden space-x-2">
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="px-3 py-1.5 rounded-full bg-[#E31B35] text-white text-xs font-semibold"
            >
              Contact
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-zinc-900/80 border border-white/10 text-zinc-300 hover:text-white focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#E31B35]" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bg-[#0c0c0e]/95 backdrop-blur-2xl border-b border-white/10 px-6 py-6 shadow-2xl transition-all">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-base font-medium text-zinc-200 hover:text-[#E31B35] py-2 border-b border-zinc-800/60 transition-colors flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="text-zinc-600 font-mono text-xs">→</span>
              </a>
            ))}
            <div className="pt-4 flex flex-col space-y-3">
              <div className="flex items-center space-x-2 text-xs font-mono text-zinc-400">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Grade 9 Student • Thrissur, Kerala</span>
              </div>
              <a
                href={personalInfo.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-2.5 rounded-lg bg-emerald-600/90 hover:bg-emerald-600 text-white text-xs font-semibold tracking-wide"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

