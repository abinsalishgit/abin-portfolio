import React from 'react';
import { ArrowUp, Heart, Sparkles } from 'lucide-react';
import { GithubIcon, InstagramIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-white/[0.08] bg-[#060608] py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-white/[0.06]">
          
          {/* Brand Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center space-x-3 mb-2">
              <div className="w-8 h-8 rounded-lg bg-[#E31B35]/20 border border-[#E31B35]/50 flex items-center justify-center">
                <span className="font-display font-extrabold text-xs text-white">AS</span>
              </div>
              <span className="font-display font-extrabold text-xl tracking-wider text-white">
                ABIN <span className="text-[#E31B35]">SALISH</span>
              </span>
            </div>
            <p className="text-sm font-sans text-zinc-400">
              "Built with curiosity. Driven by ambition."
            </p>
            <p className="text-xs font-mono text-zinc-500 mt-1">
              Grade 9 Student • Kerala, India • Future Entrepreneur
            </p>
          </div>

          {/* Social Links & Back To Top */}
          <div className="flex items-center space-x-4">
            
            <a
              href={personalInfo.contact.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white border border-white/5 transition-colors"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-5 h-5" />
            </a>

            <a
              href={personalInfo.contact.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-rose-400 border border-white/5 transition-colors"
              aria-label="Instagram Profile"
            >
              <InstagramIcon className="w-5 h-5" />
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              className="p-3 rounded-xl bg-[#E31B35]/10 hover:bg-[#E31B35] text-[#E31B35] hover:text-white border border-[#E31B35]/30 transition-all duration-300"
              aria-label="Scroll back to top"
              title="Back to Top"
            >
              <ArrowUp className="w-5 h-5" />
            </button>

          </div>

        </div>

        {/* Bottom Copyright & Rights */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-zinc-500 gap-4">
          <p>
            © {currentYear} Abin Salish. All rights reserved.
          </p>

          <div className="flex items-center space-x-2">
            <span>Crafted with React, Tailwind & Passion</span>
            <span className="text-[#E31B35]">●</span>
            <span>Kerala, IN</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
