import React from 'react';
import { motion } from 'framer-motion';
import { 
  Smartphone, 
  TrendingUp, 
  Cpu, 
  Compass, 
  Flame, 
  Headphones, 
  Medal, 
  Zap, 
  Sparkles,
  ArrowUpRight
} from 'lucide-react';
import { interestsList } from '../data/portfolioData';

export default function InterestsGrid() {
  const getIcon = (name) => {
    switch (name) {
      case 'Smartphone': return <Smartphone className="w-5 h-5 text-red-400" />;
      case 'TrendingUp': return <TrendingUp className="w-5 h-5 text-amber-400" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-blue-400" />;
      case 'Compass': return <Compass className="w-5 h-5 text-purple-400" />;
      case 'Flame': return <Flame className="w-5 h-5 text-orange-400" />;
      case 'Headphones': return <Headphones className="w-5 h-5 text-rose-400" />;
      case 'Medal': return <Medal className="w-5 h-5 text-yellow-400" />;
      case 'Zap': return <Zap className="w-5 h-5 text-emerald-400" />;
      default: return <Sparkles className="w-5 h-5 text-zinc-300" />;
    }
  };

  return (
    <section id="interests" className="py-24 relative z-10 border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#E31B35]" />
            <span className="text-xs font-mono tracking-widest uppercase text-zinc-300">
              The Curiosity Compass
            </span>
          </div>
          
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight uppercase">
            MY <span className="text-[#E31B35]">INTERESTS</span>
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg max-w-2xl mt-3 font-sans">
            A polymath mindset thrives on cross-pollinating disciplines: culinary chemistry, mathematical precision, musical acoustics, and commercial enterprise.
          </p>
        </div>

        {/* Editorial Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {interestsList.map((interest, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
              className="glass-card rounded-2xl p-6 relative overflow-hidden group flex flex-col justify-between"
            >
              {/* Subtle top ambient glow */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${interest.color} rounded-full blur-2xl opacity-40 group-hover:opacity-75 transition-opacity`} />
              
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="p-2.5 rounded-xl bg-white/[0.05] border border-white/10">
                    {getIcon(interest.icon)}
                  </span>
                  <span className="text-[10px] font-mono tracking-wider uppercase text-zinc-500 bg-white/[0.02] px-2 py-0.5 rounded">
                    0{idx + 1}
                  </span>
                </div>

                <span className="text-[11px] font-mono uppercase tracking-wider text-[#E31B35]">
                  {interest.category}
                </span>

                <h3 className="font-display font-bold text-lg text-white mt-1 mb-2 group-hover:text-white transition-colors">
                  {interest.title}
                </h3>

                <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                  {interest.description}
                </p>
              </div>

              {/* Bottom Subtle Micro Detail */}
              <div className="pt-4 border-t border-white/[0.06] mt-5 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                <span>Active Pursuit</span>
                <span className="text-[#E31B35] opacity-0 group-hover:opacity-100 transition-opacity">✦</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

