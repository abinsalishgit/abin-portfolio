import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Terminal, 
  Cpu, 
  TrendingUp, 
  ShieldAlert, 
  Sparkles, 
  MapPin, 
  GraduationCap, 
  Compass, 
  Target,
  BrainCircuit,
  Lightbulb
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function AboutMe() {
  const [activeTab, setActiveTab] = useState('story');

  return (
    <section id="about" className="py-24 relative z-10 border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#E31B35]" />
            <span className="text-xs font-mono tracking-widest uppercase text-zinc-300">
              Identity & Mindset
            </span>
          </div>
          
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight uppercase">
            {personalInfo.aboutHeading}
          </h2>
          <div className="w-20 h-1 bg-[#E31B35] mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: First-Person Narrative & Ambition Box */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            
            {/* Story Paragraphs */}
            <div className="glass-card rounded-2xl p-6 sm:p-8 space-y-5">
              <p className="text-lg sm:text-xl text-zinc-200 font-sans leading-relaxed">
                I am <span className="text-white font-bold">Abin Salish</span>, a Grade 9 student from{' '}
                <span className="text-zinc-100 font-semibold underline decoration-[#E31B35] underline-offset-4">
                  Kerala, India
                </span>. I have an insatiable hunger to understand how modern technology works from the silicon up to the browser.
              </p>
              
              <p className="text-base text-zinc-400 font-sans leading-relaxed">
                While many simply interact with apps, I love diving behind the curtain: writing code, 
                architecting websites, exploring the depths of <strong className="text-zinc-200">Kali Linux</strong> and cybersecurity, 
                and tinkering with hands-on inventions.
              </p>

              <p className="text-base text-zinc-400 font-sans leading-relaxed">
                I have a natural affinity for <strong className="text-zinc-200">mathematics and analytical logic</strong>. 
                I am naturally extroverted, relentlessly curious, and believe that the best way to master any skill is to 
                get your hands dirty and build working systems rather than just talking about theories.
              </p>
            </div>

            {/* The Entrepreneurial Ambition Card */}
            <div className="relative rounded-2xl p-6 sm:p-8 bg-gradient-to-br from-[#1c1417] via-[#121215] to-[#0d0d10] border border-[#E31B35]/30 shadow-xl overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#E31B35]/10 rounded-full blur-2xl group-hover:bg-[#E31B35]/20 transition-all duration-500" />
              
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#E31B35]/15 border border-[#E31B35]/40 flex items-center justify-center text-[#E31B35]">
                  <Target className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-white uppercase tracking-wider">
                    My Ambition
                  </h3>
                  <p className="text-xs font-mono text-zinc-400">The Long-Term North Star</p>
                </div>
              </div>

              <blockquote className="text-zinc-200 font-display text-base sm:text-lg italic leading-relaxed border-l-2 border-[#E31B35] pl-4 my-2">
                "{personalInfo.ambition}"
              </blockquote>

              <p className="text-xs text-zinc-400 mt-4 font-mono">
                → Building real solutions • Creating sustainable enterprise • Relentless financial mastery
              </p>
            </div>

          </div>

          {/* Right Column: Key Fact Matrix & Interactive Attributes */}
          <div className="lg:col-span-5 flex flex-col space-y-4">
            
            {/* Quick Profile Highlights */}
            <div className="grid grid-cols-2 gap-3.5">
              
              <div className="glass-card rounded-xl p-4 flex flex-col justify-between">
                <div className="flex items-center justify-between text-zinc-400 mb-2">
                  <GraduationCap className="w-5 h-5 text-[#E31B35]" />
                  <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500">Education</span>
                </div>
                <div>
                  <h4 className="text-lg font-display font-bold text-white">Grade 9</h4>
                  <p className="text-xs text-zinc-400">Active High School Student</p>
                </div>
              </div>

              <div className="glass-card rounded-xl p-4 flex flex-col justify-between">
                <div className="flex items-center justify-between text-zinc-400 mb-2">
                  <MapPin className="w-5 h-5 text-amber-500" />
                  <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500">Origin</span>
                </div>
                <div>
                  <h4 className="text-lg font-display font-bold text-white">Kerala, India</h4>
                  <p className="text-xs text-zinc-400">God’s Own Country</p>
                </div>
              </div>

              <div className="glass-card rounded-xl p-4 flex flex-col justify-between">
                <div className="flex items-center justify-between text-zinc-400 mb-2">
                  <BrainCircuit className="w-5 h-5 text-emerald-400" />
                  <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500">Aptitude</span>
                </div>
                <div>
                  <h4 className="text-lg font-display font-bold text-white">Mathematics</h4>
                  <p className="text-xs text-zinc-400">Logic & Quantitative Thinker</p>
                </div>
              </div>

              <div className="glass-card rounded-xl p-4 flex flex-col justify-between">
                <div className="flex items-center justify-between text-zinc-400 mb-2">
                  <TrendingUp className="w-5 h-5 text-rose-400" />
                  <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500">Trait</span>
                </div>
                <div>
                  <h4 className="text-lg font-display font-bold text-white">Extroverted</h4>
                  <p className="text-xs text-zinc-400">Curious & Team Builder</p>
                </div>
              </div>

            </div>

            {/* Core Pillars Overview Box */}
            <div className="glass-card rounded-2xl p-6 border-white/10">
              <h4 className="text-xs font-mono text-zinc-400 uppercase tracking-widest mb-4 flex items-center justify-between">
                <span>The Core Drives</span>
                <span className="text-[#E31B35]">● ● ●</span>
              </h4>

              <div className="space-y-3.5">
                <div className="flex items-start space-x-3 p-2.5 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] transition-colors">
                  <span className="w-2 h-2 rounded-full bg-[#E31B35] mt-1.5 flex-shrink-0" />
                  <div>
                    <h5 className="text-sm font-semibold text-white">Coding & Web Creation</h5>
                    <p className="text-xs text-zinc-400">Building intuitive, fast web interfaces with modern frontend technologies.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-2.5 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] transition-colors">
                  <span className="w-2 h-2 rounded-full bg-amber-500 mt-1.5 flex-shrink-0" />
                  <div>
                    <h5 className="text-sm font-semibold text-white">Cybersecurity & Kali Linux</h5>
                    <p className="text-xs text-zinc-400">Exploring terminal networking, ethical hacking concepts, and digital defenses.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-2.5 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] transition-colors">
                  <span className="w-2 h-2 rounded-full bg-blue-500 mt-1.5 flex-shrink-0" />
                  <div>
                    <h5 className="text-sm font-semibold text-white">Product Exploration & Inventions</h5>
                    <p className="text-xs text-zinc-400">Investigating consumer electronics, hardware teardowns, and functional inventions.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

