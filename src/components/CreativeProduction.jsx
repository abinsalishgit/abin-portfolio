import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Film, 
  Sliders, 
  Palette, 
  Eye, 
  Clapperboard, 
  Play, 
  Sparkles,
  Layers,
  Activity
} from 'lucide-react';
import { creativeProduction } from '../data/portfolioData';

export default function CreativeProduction() {
  const [selectedDiscipline, setSelectedDiscipline] = useState(0);

  return (
    <section id="creative" className="py-24 relative z-10 border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 mb-4">
            <Film className="w-3.5 h-3.5 text-[#E31B35]" />
            <span className="text-xs font-mono tracking-widest uppercase text-zinc-300">
              Visual Direction
            </span>
          </div>
          
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight uppercase">
            {creativeProduction.title}
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg max-w-2xl mt-3 font-sans">
            {creativeProduction.subtitle}
          </p>
        </div>

        {/* Cinematic Film-Strip Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {creativeProduction.disciplines.map((item, index) => {
            const isSelected = selectedDiscipline === index;
            return (
              <div
                key={index}
                onClick={() => setSelectedDiscipline(index)}
                className={`cursor-pointer rounded-2xl p-6 sm:p-7 transition-all duration-300 relative overflow-hidden group ${
                  isSelected 
                    ? 'bg-gradient-to-b from-[#181820] to-[#101014] border-2 border-[#E31B35] shadow-2xl shadow-[#E31B35]/20 -translate-y-1' 
                    : 'glass-card hover:border-white/20 hover:-translate-y-0.5'
                }`}
              >
                {/* Top Film Reel Perforation Accents */}
                <div className="flex justify-between items-center mb-6 opacity-30 group-hover:opacity-60 transition-opacity">
                  <div className="flex space-x-1.5">
                    <span className="w-2.5 h-1.5 bg-zinc-400 rounded-sm" />
                    <span className="w-2.5 h-1.5 bg-zinc-400 rounded-sm" />
                    <span className="w-2.5 h-1.5 bg-zinc-400 rounded-sm" />
                  </div>
                  <span className="font-mono text-[10px] text-zinc-400 tracking-widest uppercase">
                    TAKE 0{index + 1}
                  </span>
                </div>

                {/* Icon & Title */}
                <div className="flex items-center space-x-3.5 mb-4">
                  <div className={`p-3 rounded-xl ${
                    isSelected ? 'bg-[#E31B35] text-white' : 'bg-white/5 text-zinc-300 group-hover:text-white'
                  }`}>
                    {index === 0 && <Sliders className="w-6 h-6" />}
                    {index === 1 && <Palette className="w-6 h-6" />}
                    {index === 2 && <Clapperboard className="w-6 h-6" />}
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xl text-white">
                      {item.title}
                    </h3>
                    <p className="text-xs font-mono text-[#E31B35]">
                      {item.software}
                    </p>
                  </div>
                </div>

                <p className="text-sm text-zinc-300 leading-relaxed mb-6 font-sans">
                  {item.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/[0.08]">
                  {item.tags.map((tag, tIdx) => (
                    <span 
                      key={tIdx}
                      className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white/[0.04] text-zinc-300 border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Active Indicator Glow */}
                {isSelected && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#E31B35] to-transparent" />
                )}
              </div>
            );
          })}
        </div>

        {/* DaVinci Resolve Workflow Showcase Simulation */}
        <div className="rounded-2xl bg-[#0e0e13] border border-white/10 p-6 sm:p-8 shadow-2xl relative overflow-hidden">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 mb-6 border-b border-white/[0.08] gap-4">
            <div>
              <div className="flex items-center space-x-2 text-xs font-mono text-zinc-400 uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-[#E31B35]" />
                <span>Post-Production Suite: DaVinci Resolve Studio Workflow</span>
              </div>
              <h4 className="text-lg sm:text-xl font-display font-bold text-white mt-1">
                Visualizing Color Curves & Narrative Beats
              </h4>
            </div>

            <div className="flex items-center space-x-2 bg-zinc-900/90 border border-zinc-800 px-3.5 py-1.5 rounded-xl font-mono text-xs text-zinc-300">
              <span className="text-amber-400">● 24 FPS</span>
              <span className="text-zinc-600">|</span>
              <span>DCI-P3 Color Gamut</span>
            </div>
          </div>

          {/* Node Graph Mockup / Creative Pipeline */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-6">
            
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[#E31B35]/40 transition-colors">
              <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Node 01</p>
              <h5 className="text-sm font-semibold text-white mt-1">Primary Balance</h5>
              <p className="text-xs text-zinc-400 mt-1">Exposure normalization, white balance offset & contrast baseline.</p>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[#E31B35]/40 transition-colors">
              <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Node 02</p>
              <h5 className="text-sm font-semibold text-white mt-1">Skin Tone Isolation</h5>
              <p className="text-xs text-zinc-400 mt-1">HSL qualification to ensure healthy, natural facial tones in all lighting.</p>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[#E31B35]/40 transition-colors">
              <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Node 03</p>
              <h5 className="text-sm font-semibold text-white mt-1">Cinematic Split Tone</h5>
              <p className="text-xs text-zinc-400 mt-1">Warm highlight rolloff with deep charcoal and rich shadow density.</p>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[#E31B35]/40 transition-colors">
              <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Node 04</p>
              <h5 className="text-sm font-semibold text-white mt-1">Film Emulation & Grain</h5>
              <p className="text-xs text-zinc-400 mt-1">Organic 35mm grain structure and soft halation for tactile cinematic depth.</p>
            </div>

          </div>

          <p className="text-xs text-zinc-400 font-mono italic">
            * "Great video editing is invisible: the viewer shouldn't notice the cut, only feel the pulse of the story."
          </p>

        </div>

      </div>
    </section>
  );
}

