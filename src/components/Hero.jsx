import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Code2, Sparkles, Terminal, ChevronRight, Compass } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  const scrollTo = (selector) => {
    const el = document.querySelector(selector);
    if (el) {
      const navOffset = 80;
      const elPosition = el.getBoundingClientRect().top;
      const offsetPosition = elPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Ambient Radial Highlights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-[#E31B35]/15 via-transparent to-amber-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Bold Typography & Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-center text-left"
          >
            {/* Status Pill */}
            <div className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-white/10 w-fit mb-6 shadow-inner">
              <span className="w-2 h-2 rounded-full bg-[#E31B35] animate-ping" />
              <span className="w-2 h-2 rounded-full bg-[#E31B35] -ml-4" />
              <span className="text-xs font-mono uppercase tracking-widest text-zinc-300">
                Grade 9 • Future Entrepreneur
              </span>
            </div>

            {/* Main Name Heading */}
            <h1 className="font-display font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-white uppercase leading-[0.95] mb-4">
              ABIN <br />
              <span className="text-gradient-crimson drop-shadow-[0_10px_35px_rgba(227,27,53,0.35)]">
                SALISH
              </span>
            </h1>

            {/* Supporting Headline */}
            <h2 className="text-xl sm:text-2xl md:text-3xl font-display font-medium text-zinc-200 mb-6 tracking-wide leading-snug">
              "Exploring Technology. Building Ideas.{' '}
              <span className="text-[#E31B35] font-semibold">Creating the Future.</span>"
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg text-zinc-400 font-sans max-w-xl leading-relaxed mb-8">
              Developer, technology enthusiast, creative editor, musician and aspiring entrepreneur. 
              Always curious. Always building.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <button
                type="button"
                onClick={() => scrollTo('#about')}
                className="group relative inline-flex items-center space-x-2.5 px-7 py-3.5 rounded-xl bg-[#E31B35] hover:bg-[#ff2543] text-white font-medium text-sm tracking-wider uppercase transition-all duration-300 shadow-xl shadow-[#E31B35]/25 hover:shadow-[#E31B35]/50 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>EXPLORE MY WORLD</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                type="button"
                onClick={() => scrollTo('#projects')}
                className="inline-flex items-center space-x-2.5 px-7 py-3.5 rounded-xl bg-zinc-900/90 hover:bg-zinc-800 text-zinc-200 hover:text-white font-medium text-sm tracking-wider uppercase border border-white/10 hover:border-white/25 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>VIEW MY PROJECTS</span>
                <Code2 className="w-4 h-4 text-[#E31B35]" />
              </button>
            </div>

            {/* Quick Micro Badges */}
            <div className="grid grid-cols-3 gap-3 pt-6 border-t border-white/[0.08] max-w-lg">
              <div>
                <p className="text-xs font-mono text-zinc-500 uppercase">Focus</p>
                <p className="text-sm font-semibold text-zinc-200">Web & Cyber</p>
              </div>
              <div>
                <p className="text-xs font-mono text-zinc-500 uppercase">Aesthetic</p>
                <p className="text-sm font-semibold text-zinc-200">DaVinci Resolve</p>
              </div>
              <div>
                <p className="text-xs font-mono text-zinc-500 uppercase">Sound</p>
                <p className="text-sm font-semibold text-zinc-200">Multi-Instrument</p>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Uploaded Workspace Photograph with Cinematic Treatment */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="lg:col-span-5 relative flex items-center justify-center"
          >
            {/* Tech Corner Bracket Frame Wrapper */}
            <div className="relative w-full max-w-[460px] group">
              
              {/* Outer Crimson Atmospheric Glow */}
              <div className="absolute -inset-2 bg-gradient-to-r from-[#E31B35]/40 via-amber-500/20 to-transparent rounded-3xl blur-2xl opacity-60 group-hover:opacity-90 transition-opacity duration-700" />
              
              {/* Cybernetic Container */}
              <div className="relative rounded-2xl overflow-hidden bg-[#121215] border border-white/15 shadow-2xl p-2.5">
                
                {/* Tech Bracket Accents */}
                <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-[#E31B35] z-20 pointer-events-none" />
                <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-[#E31B35] z-20 pointer-events-none" />
                <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-[#E31B35] z-20 pointer-events-none" />
                <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-[#E31B35] z-20 pointer-events-none" />

                {/* Workspace Photograph */}
                <div className="relative aspect-[4/5] w-full rounded-xl overflow-hidden bg-zinc-950">
                  <img
                    src={personalInfo.heroImage}
                    alt="Abin Salish creative workstation with editing software, camera, and books"
                    className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="eager"
                  />
                  
                  {/* Cinematic Dark Gradient Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-black/30 pointer-events-none" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#080808]/40 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Subtle Scanlines effect overlay */}
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(18,18,18,0)_50%,rgba(0,0,0,0.4)_50%)] bg-[length:100%_4px] pointer-events-none opacity-30" />

                  {/* Floating Creative Tag on Image */}
                  <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-[#0c0c0e]/80 backdrop-blur-md border border-white/10 shadow-lg">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#E31B35] animate-pulse" />
                        <span className="font-mono text-xs font-semibold text-white tracking-wider uppercase">
                          Creative Workstation
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-zinc-400 bg-white/5 px-2 py-0.5 rounded">
                        Kerala, IN
                      </span>
                    </div>
                    <p className="text-xs text-zinc-300 mt-1 font-sans">
                      DaVinci Resolve • Code IDE • Hardware Lab
                    </p>
                  </div>

                </div>
              </div>

              {/* Decorative Subtle Floating Pill (Top-Right) */}
              <div className="absolute -top-4 -right-4 hidden sm:flex items-center space-x-2 bg-zinc-900/90 border border-zinc-700/80 px-3.5 py-1.5 rounded-full shadow-2xl backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span className="text-[11px] font-mono text-zinc-200">Curious Mind. Creative Soul.</span>
              </div>

            </div>
          </motion.div>

        </div>

        {/* Scroll Indicator */}
        <div className="mt-16 flex flex-col items-center justify-center">
          <button
            type="button"
            onClick={() => scrollTo('#about')}
            className="group flex flex-col items-center space-y-2 text-zinc-500 hover:text-white transition-colors focus:outline-none"
            aria-label="Scroll to content"
          >
            <span className="text-[10px] font-mono tracking-widest uppercase">Scroll Down</span>
            <div className="w-5 h-9 rounded-full border border-white/20 flex items-start justify-center p-1 group-hover:border-[#E31B35] transition-colors">
              <motion.div 
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                className="w-1.5 h-1.5 rounded-full bg-[#E31B35]"
              />
            </div>
          </button>
        </div>

      </div>
    </section>
  );
}

