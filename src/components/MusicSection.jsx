import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Music, 
  Sparkles, 
  Layers, 
  Activity, 
  Volume2, 
  Radio, 
  Disc,
  PlayCircle
} from 'lucide-react';
import { instruments } from '../data/portfolioData';

export default function MusicSection() {
  const [activeInstrument, setActiveInstrument] = useState(instruments[0].id);

  return (
    <section id="music" className="py-24 relative z-10 border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 mb-4">
            <Music className="w-3.5 h-3.5 text-[#E31B35]" />
            <span className="text-xs font-mono tracking-widest uppercase text-zinc-300">
              Acoustic & Electronic Expression
            </span>
          </div>
          
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight uppercase">
            BEYOND THE <span className="text-[#E31B35]">SCREEN</span>
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg max-w-2xl mt-3 font-sans">
            Creativity isn't confined to code and terminals. Music is where mathematical patterns, finger dexterity, and raw emotional resonance meet.
          </p>
        </div>

        {/* Visualizer & Instrument Interactive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Instruments Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {instruments.map((item) => {
              const isSelected = activeInstrument === item.id;
              return (
                <div
                  key={item.id}
                  onClick={() => setActiveInstrument(item.id)}
                  className={`cursor-pointer rounded-2xl p-6 transition-all duration-300 relative overflow-hidden group ${
                    isSelected
                      ? 'bg-gradient-to-br from-[#18151c] to-[#0f0e13] border-2 border-[#E31B35] shadow-xl shadow-[#E31B35]/20 -translate-y-1'
                      : 'glass-card hover:border-white/20 hover:-translate-y-0.5'
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="p-3 rounded-xl bg-white/[0.05] border border-white/10 text-white group-hover:text-[#E31B35] transition-colors">
                      {item.id === 'guitar' && <Music className="w-6 h-6 text-[#E31B35]" />}
                      {item.id === 'violin' && <Sparkles className="w-6 h-6 text-amber-400" />}
                      {item.id === 'keyboard' && <Layers className="w-6 h-6 text-blue-400" />}
                      {item.id === 'clapbox' && <Activity className="w-6 h-6 text-rose-400" />}
                    </span>

                    <span className="text-[10px] font-mono tracking-widest uppercase text-zinc-400 bg-white/5 px-2.5 py-1 rounded-full">
                      {item.type}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-xl text-white mb-1">
                    {item.name}
                  </h3>
                  
                  <p className="text-xs font-mono text-[#E31B35] mb-3">
                    Sonic Vibe: {item.vibe}
                  </p>

                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans">
                    {item.description}
                  </p>

                  {/* Frequency bars preview */}
                  <div className="flex items-end space-x-1 mt-5 h-4 opacity-40 group-hover:opacity-100 transition-opacity">
                    <span className="w-1 bg-[#E31B35] rounded-full h-2 animate-pulse" />
                    <span className="w-1 bg-[#E31B35] rounded-full h-4 animate-pulse delay-75" />
                    <span className="w-1 bg-[#E31B35] rounded-full h-3 animate-pulse delay-150" />
                    <span className="w-1 bg-[#E31B35] rounded-full h-1 animate-pulse delay-200" />
                    <span className="w-1 bg-[#E31B35] rounded-full h-3 animate-pulse delay-300" />
                    <span className="w-1 bg-[#E31B35] rounded-full h-4 animate-pulse delay-100" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Harmonic Frequency Display & Philosophy */}
          <div className="lg:col-span-4 flex flex-col space-y-6">
            
            <div className="rounded-2xl p-6 sm:p-7 bg-[#0d0d12] border border-white/10 shadow-2xl relative overflow-hidden">
              <div className="flex items-center space-x-2 text-xs font-mono text-zinc-400 uppercase tracking-wider mb-4">
                <Volume2 className="w-4 h-4 text-[#E31B35]" />
                <span>Audio Architecture</span>
              </div>

              <h4 className="font-display font-bold text-xl text-white mb-2">
                Why Music Matters to an Engineer
              </h4>

              <p className="text-sm text-zinc-300 font-sans leading-relaxed mb-6">
                Instruments teach tactile patience. Playing guitar, violin, keyboard, and percussion trains polyrhythmic discipline, ear training, and split-second neuromuscular coordination.
              </p>

              {/* Dynamic Animated Soundwave Graphic */}
              <div className="p-4 rounded-xl bg-black/50 border border-white/5 flex flex-col justify-center items-center">
                <div className="flex items-center justify-center space-x-1.5 h-16 w-full">
                  {[40, 75, 20, 90, 60, 30, 85, 45, 100, 65, 35, 80, 50, 95, 25, 70].map((h, i) => (
                    <motion.div
                      key={i}
                      animate={{
                        height: [`${h * 0.3}%`, `${h}%`, `${h * 0.4}%`],
                      }}
                      transition={{
                        duration: 1.2,
                        repeat: Infinity,
                        repeatType: 'reverse',
                        delay: i * 0.07,
                        ease: 'easeInOut'
                      }}
                      className={`w-1 rounded-full ${
                        i % 3 === 0 ? 'bg-[#E31B35]' : i % 2 === 0 ? 'bg-amber-400' : 'bg-zinc-600'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mt-3">
                  Live Resonance Simulation
                </span>
              </div>

            </div>

            {/* Quote Card */}
            <div className="glass-card rounded-2xl p-6 border-white/10">
              <p className="text-xs sm:text-sm font-sans text-zinc-300 italic">
                "Code is rhythm in logic. Music is rhythm in frequency. Master both, and you build with complete harmony."
              </p>
              <p className="text-[11px] font-mono text-[#E31B35] mt-2 uppercase tracking-wider">
                — Abin Salish
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

