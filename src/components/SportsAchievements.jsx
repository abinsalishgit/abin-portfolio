import React from 'react';
import { motion } from 'framer-motion';
import { 
  Trophy, 
  Award, 
  Activity, 
  Shield, 
  Sparkles, 
  Zap, 
  CircleDot,
  CheckCircle2
} from 'lucide-react';
import { sportsData } from '../data/portfolioData';

export default function SportsAchievements() {
  const cricket = sportsData.sports[0];
  const basketball = sportsData.sports[1];

  return (
    <section id="sports" className="py-24 relative z-10 border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 mb-4">
            <Trophy className="w-3.5 h-3.5 text-zinc-300" />
            <span className="text-xs font-mono tracking-widest uppercase text-zinc-300">
              Athletic Resilience
            </span>
          </div>
          
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight uppercase">
            SPORTS & <span className="text-zinc-300">ACHIEVEMENTS</span>
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg max-w-2xl mt-3 font-sans">
            Athletics instill the discipline, strategic composure under pressure, and relentless stamina required for high-stakes leadership.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: The CISCE Games Silver Medalist Feature Card */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="silver-card rounded-3xl p-7 sm:p-9 relative overflow-hidden group h-full flex flex-col justify-between">
              
              {/* Metallic Silver Ambient Shimmer */}
              <div className="absolute -top-24 -right-24 w-72 h-72 bg-gradient-to-br from-white/20 via-slate-300/10 to-transparent rounded-full blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-700" />
              
              <div>
                {/* Badge Top Bar */}
                <div className="flex items-center justify-between mb-6">
                  <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-slate-200/10 border border-slate-300/30 text-white shadow-lg">
                    <Award className="w-4 h-4 text-slate-200 animate-pulse" />
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-100">
                      CISCE GAMES SILVER MEDALIST
                    </span>
                  </div>

                  <span className="text-[11px] font-mono text-slate-300 bg-white/5 px-3 py-1 rounded-full border border-white/10">
                    Inter-School Championship
                  </span>
                </div>

                {/* Main Medal Presentation */}
                <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-6">
                  
                  {/* Visual Silver Medal Emblem */}
                  <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-tr from-slate-400 via-slate-100 to-slate-300 p-0.5 shadow-2xl shadow-slate-300/20 flex-shrink-0 flex items-center justify-center">
                    <div className="w-full h-full rounded-[14px] bg-gradient-to-br from-[#1c222b] to-[#0c0e12] flex flex-col items-center justify-center border border-white/20">
                      <Trophy className="w-8 h-8 text-slate-200 drop-shadow-[0_0_10px_rgba(255,255,255,0.7)]" />
                      <span className="text-[9px] font-mono font-bold tracking-widest text-slate-300 uppercase mt-1">
                        SILVER
                      </span>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white tracking-tight">
                      School Cricket Team
                    </h3>
                    <p className="text-sm font-mono text-slate-300 mt-1 flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                      <span>CISCE Games Competitive Runner-Up</span>
                    </p>
                  </div>

                </div>

                <p className="text-sm sm:text-base text-slate-200/90 font-sans leading-relaxed mb-6">
                  {cricket.description}
                </p>
              </div>

              {/* Cricket Key Attributes */}
              <div className="grid grid-cols-3 gap-3 pt-6 border-t border-white/10 mt-auto">
                <div className="p-3 rounded-xl bg-black/30 border border-white/5">
                  <span className="text-[10px] font-mono text-slate-400 uppercase">Tournament</span>
                  <p className="text-xs sm:text-sm font-semibold text-white mt-0.5">CISCE Games</p>
                </div>
                <div className="p-3 rounded-xl bg-black/30 border border-white/5">
                  <span className="text-[10px] font-mono text-slate-400 uppercase">Award</span>
                  <p className="text-xs sm:text-sm font-semibold text-slate-200 mt-0.5">Silver Medal</p>
                </div>
                <div className="p-3 rounded-xl bg-black/30 border border-white/5">
                  <span className="text-[10px] font-mono text-slate-400 uppercase">Role</span>
                  <p className="text-xs sm:text-sm font-semibold text-white mt-0.5">Team Player</p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Basketball & Athletic Philosophy */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            
            {/* Basketball Feature Card */}
            <div className="glass-card rounded-3xl p-7 relative overflow-hidden group">
              <div className="flex items-center justify-between mb-4">
                <span className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
                  <Activity className="w-6 h-6" />
                </span>
                <span className="text-[10px] font-mono tracking-widest uppercase text-amber-400 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
                  Active Sport
                </span>
              </div>

              <h3 className="font-display font-bold text-2xl text-white mb-2">
                {basketball.name}
              </h3>
              <p className="text-xs font-mono text-amber-400 mb-4">
                {basketball.role} • High-Pace Court Agility
              </p>

              <p className="text-sm text-zinc-300 leading-relaxed font-sans mb-6">
                {basketball.description}
              </p>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-white/[0.08]">
                {["Fast Breaks", "Defensive Intensity", "Team Communication", "High Stamina"].map((tag, i) => (
                  <span 
                    key={i}
                    className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white/[0.04] text-zinc-300 border border-white/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Mindset Takeaway */}
            <div className="glass-card rounded-2xl p-6 border-white/10 flex items-start space-x-3.5">
              <Zap className="w-5 h-5 text-[#E31B35] mt-1 flex-shrink-0" />
              <div>
                <h4 className="text-sm font-semibold text-white">The Athletic Transfer to Tech</h4>
                <p className="text-xs text-zinc-400 mt-1 font-sans leading-relaxed">
                  Athletics prove that natural talent is useless without stamina and repetitive drills. The discipline forged during cricket matches directly informs hours of coding and project debugging.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

