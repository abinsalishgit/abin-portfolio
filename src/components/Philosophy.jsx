import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Quote, Compass } from 'lucide-react';
import { philosophies } from '../data/portfolioData';

export default function Philosophy() {
  return (
    <section id="philosophy" className="py-24 relative z-10 border-t border-white/[0.05] overflow-hidden">
      
      {/* Background Subtle Typography Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-[0.02] select-none text-center">
        <span className="font-display font-extrabold text-[12rem] md:text-[20rem] text-white tracking-tighter whitespace-nowrap">
          BUILD
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 mb-4">
            <Compass className="w-3.5 h-3.5 text-[#E31B35]" />
            <span className="text-xs font-mono tracking-widest uppercase text-zinc-300">
              Guiding Principles
            </span>
          </div>
          
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight uppercase">
            PERSONAL <span className="text-[#E31B35]">PHILOSOPHY</span>
          </h2>
          <div className="w-16 h-1 bg-[#E31B35] mt-4 rounded-full" />
        </div>

        {/* 4 Core Mottos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {philosophies.map((item, index) => {
            return (
              <motion.div
                key={index}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="relative rounded-3xl p-8 sm:p-10 bg-gradient-to-br from-[#131317] via-[#0d0d10] to-[#080808] border border-white/10 shadow-2xl overflow-hidden group flex flex-col justify-between"
              >
                {/* Glow on hover */}
                <div className="absolute top-0 right-0 w-44 h-44 bg-[#E31B35]/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-xs uppercase tracking-widest text-[#E31B35] font-semibold bg-[#E31B35]/10 px-3 py-1 rounded-full border border-[#E31B35]/20">
                      {item.tagline}
                    </span>
                    <span className="text-zinc-600 font-mono text-xs">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Bold Statement */}
                  <h3 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white uppercase tracking-tight leading-tight mb-4 group-hover:text-gradient-crimson transition-all">
                    "{item.quote}"
                  </h3>

                  <p className="text-sm sm:text-base text-zinc-400 font-sans leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-white/[0.06] mt-8 flex items-center justify-between text-xs font-mono text-zinc-500">
                  <span>Core Value</span>
                  <span className="text-[#E31B35]">✦ ✦ ✦</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

