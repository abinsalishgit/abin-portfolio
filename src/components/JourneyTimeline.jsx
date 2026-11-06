import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  GitBranch, 
  Terminal, 
  Sparkles, 
  Award, 
  CheckCircle2, 
  Circle,
  TrendingUp,
  Cpu
} from 'lucide-react';
import { journeyMilestones } from '../data/portfolioData';

export default function JourneyTimeline() {
  const [activeMilestone, setActiveMilestone] = useState(journeyMilestones.length - 1);

  return (
    <section id="journey" className="py-24 relative z-10 border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 mb-4">
            <GitBranch className="w-3.5 h-3.5 text-[#E31B35]" />
            <span className="text-xs font-mono tracking-widest uppercase text-zinc-300">
              The Evolution
            </span>
          </div>
          
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight uppercase">
            ALWAYS IN <span className="text-[#E31B35]">PROGRESS</span>
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg max-w-2xl mt-3 font-sans">
            Every breakthrough is preceded by hundreds of hours of tinkering. A continuous trajectory of learning, building, and evolving.
          </p>
        </div>

        {/* Timeline Path */}
        <div className="relative border-l-2 border-white/10 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          
          {journeyMilestones.map((milestone, index) => {
            const isSelected = activeMilestone === index;
            const isLatest = index === journeyMilestones.length - 1;

            return (
              <div 
                key={index} 
                className="relative group cursor-pointer"
                onClick={() => setActiveMilestone(index)}
              >
                {/* Node on the Timeline line */}
                <div 
                  className={`absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full border-2 transition-all duration-300 flex items-center justify-center ${
                    isSelected 
                      ? 'bg-[#E31B35] border-white scale-125 shadow-lg shadow-[#E31B35]/50' 
                      : 'bg-[#080808] border-zinc-600 group-hover:border-[#E31B35]'
                  }`}
                >
                  <div className={`w-2 h-2 rounded-full ${isSelected ? 'bg-white' : 'bg-zinc-400'}`} />
                </div>

                {/* Milestone Content Card */}
                <div 
                  className={`rounded-2xl p-6 sm:p-7 transition-all duration-300 ${
                    isSelected
                      ? 'bg-gradient-to-r from-[#17151c] to-[#0f0e13] border border-[#E31B35]/40 shadow-xl'
                      : 'glass-card hover:border-white/20'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div className="flex items-center space-x-3">
                      <span className="font-mono text-xs uppercase tracking-widest text-[#E31B35] font-semibold bg-[#E31B35]/10 px-2.5 py-1 rounded">
                        {milestone.phase}
                      </span>
                      <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
                        {milestone.title}
                      </h3>
                    </div>

                    <span className="text-xs font-mono text-zinc-400 bg-white/5 px-3 py-1 rounded-full border border-white/5 w-fit">
                      {milestone.focus}
                    </span>
                  </div>

                  <p className="text-sm sm:text-base text-zinc-300 font-sans leading-relaxed max-w-3xl">
                    {milestone.description}
                  </p>

                  {isLatest && (
                    <div className="mt-4 pt-3 border-t border-white/[0.08] flex items-center space-x-2 text-xs font-mono text-emerald-400">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                      <span>Current Active Phase: Grade 9 • Innovation & Enterprise</span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}

