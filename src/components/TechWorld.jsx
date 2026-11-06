import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code2, 
  Terminal, 
  Cpu, 
  ShieldCheck, 
  Layers, 
  ExternalLink, 
  CheckCircle2, 
  ChevronRight,
  Sparkles,
  Command
} from 'lucide-react';
import { techPillars } from '../data/portfolioData';

export default function TechWorld() {
  const [activePillar, setActivePillar] = useState('programming');

  const terminalTabs = {
    programming: {
      command: "npm run build:future --experience=web3-and-frontend",
      output: [
        "[+] Initializing React 19 + Vite modern frontend pipeline...",
        "[+] Compiling responsive UI components & interactive states...",
        "[+] Optimizing DOM rendering with Tailwind CSS utility architecture...",
        "[✓] Successfully deployed interactive web experience."
      ],
      tag: "FRONTEND DEV"
    },
    cybersecurity: {
      command: "kali@abin-sec-lab:~$ sudo nmap -sS -T4 -v 192.168.1.0/24",
      output: [
        "[*] Starting Nmap Network Scan on local virtual sandbox...",
        "[*] Host discovery active: studying ports, protocols & services...",
        "[*] Analyzing packet responses & learning digital security hygiene...",
        "[✓] Scan logged: Defensive awareness verified. Safe lab environment."
      ],
      tag: "KALI LINUX LAB"
    },
    exploration: {
      command: "abin@lab:~$ inspect-hardware --device=consumer-flagship",
      output: [
        "[i] Reading silicon architecture: CPU, GPU, memory bus bandwidth...",
        "[i] Dissecting mechanical assembly, thermals, and battery management...",
        "[i] Prototyping physical electronics & rapid invention circuits...",
        "[✓] Architecture deconstructed: Insights ready for future innovation."
      ],
      tag: "HARDWARE TEARDOWN"
    }
  };

  const currentTab = terminalTabs[activePillar];

  return (
    <section id="tech" className="py-24 relative z-10 border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 mb-4">
            <Terminal className="w-3.5 h-3.5 text-[#E31B35]" />
            <span className="text-xs font-mono tracking-widest uppercase text-zinc-300">
              Technical Domains
            </span>
          </div>
          
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight uppercase">
            MY TECH <span className="text-[#E31B35]">WORLD</span>
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg max-w-2xl mt-3 font-sans">
            Honest curiosity, active experimentation, and hands-on builds. No fabricated certificates—just relentless passion to understand how things work.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex flex-wrap gap-3 mb-10">
          {techPillars.map((pillar) => {
            const isActive = activePillar === pillar.id;
            return (
              <button
                key={pillar.id}
                onClick={() => setActivePillar(pillar.id)}
                className={`relative px-5 py-3 rounded-xl font-display font-semibold text-xs sm:text-sm tracking-wide transition-all duration-300 flex items-center space-x-2.5 ${
                  isActive 
                    ? 'bg-[#E31B35] text-white shadow-lg shadow-[#E31B35]/25 border border-[#E31B35]' 
                    : 'bg-zinc-900/80 hover:bg-zinc-800 text-zinc-300 border border-white/10'
                }`}
              >
                {pillar.id === 'programming' && <Code2 className="w-4 h-4" />}
                {pillar.id === 'cybersecurity' && <Terminal className="w-4 h-4" />}
                {pillar.id === 'exploration' && <Cpu className="w-4 h-4" />}
                <span>{pillar.title}</span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Detail Card & Terminal Sandbox */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Pillar Deep Dive */}
          <div className="lg:col-span-7">
            {techPillars.map((pillar) => {
              if (pillar.id !== activePillar) return null;
              return (
                <motion.div
                  key={pillar.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                  className="glass-card rounded-2xl p-6 sm:p-8 space-y-6"
                >
                  <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
                    <div>
                      <h3 className="text-2xl font-display font-bold text-white tracking-wide">
                        {pillar.title}
                      </h3>
                      <p className="text-xs font-mono text-[#E31B35] tracking-wider uppercase mt-1">
                        {pillar.subtitle}
                      </p>
                    </div>
                    <span className="p-3 rounded-xl bg-white/[0.05] border border-white/10 text-white">
                      {pillar.id === 'programming' && <Code2 className="w-6 h-6 text-[#E31B35]" />}
                      {pillar.id === 'cybersecurity' && <Terminal className="w-6 h-6 text-amber-500" />}
                      {pillar.id === 'exploration' && <Cpu className="w-6 h-6 text-blue-400" />}
                    </span>
                  </div>

                  <p className="text-base text-zinc-300 font-sans leading-relaxed">
                    {pillar.description}
                  </p>

                  {/* Skills Matrix */}
                  <div>
                    <h4 className="text-xs font-mono text-zinc-400 uppercase tracking-widest mb-3">
                      Core Areas of Exploration
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {pillar.skills.map((skill, idx) => (
                        <div 
                          key={idx}
                          className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-white/15 transition-all"
                        >
                          <div className="flex items-center space-x-2.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#E31B35]" />
                            <span className="text-xs font-medium text-zinc-200">{skill.name}</span>
                          </div>
                          <span className="text-[10px] font-mono text-zinc-400 bg-white/5 px-2 py-0.5 rounded">
                            {skill.level}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Key Highlights */}
                  <div className="pt-2">
                    <h4 className="text-xs font-mono text-zinc-400 uppercase tracking-widest mb-3">
                      Hands-on Practice & Mindset
                    </h4>
                    <ul className="space-y-2">
                      {pillar.highlights.map((h, i) => (
                        <li key={i} className="flex items-start space-x-2.5 text-xs sm:text-sm text-zinc-300">
                          <CheckCircle2 className="w-4 h-4 text-[#E31B35] mt-0.5 flex-shrink-0" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </motion.div>
              );
            })}
          </div>

          {/* Right Column: Interactive Terminal Console Experience */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-[#0d0d11] border border-white/10 shadow-2xl overflow-hidden font-mono text-xs">
              
              {/* Terminal Window Top Bar */}
              <div className="bg-[#15151b] px-4 py-3 border-b border-white/[0.08] flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="text-zinc-400 text-[11px] ml-2 font-mono">
                    abin@workbench:~
                  </span>
                </div>
                <span className="text-[10px] uppercase tracking-wider text-[#E31B35] bg-[#E31B35]/10 px-2 py-0.5 rounded border border-[#E31B35]/20">
                  {currentTab.tag}
                </span>
              </div>

              {/* Terminal Body */}
              <div className="p-5 space-y-4 min-h-[300px] flex flex-col justify-between bg-[#0a0a0d]">
                <div className="space-y-3">
                  {/* Command input prompt */}
                  <div className="flex items-center space-x-2 text-zinc-300">
                    <span className="text-[#E31B35] font-bold">➜</span>
                    <span className="text-amber-400">~</span>
                    <span className="text-zinc-100 font-semibold">{currentTab.command}</span>
                  </div>

                  {/* Dynamic Output lines */}
                  <div className="space-y-1.5 pt-2 border-t border-white/[0.05]">
                    {currentTab.output.map((line, idx) => (
                      <p 
                        key={idx}
                        className={`text-xs ${
                          line.startsWith('[✓]') 
                            ? 'text-emerald-400 font-semibold' 
                            : line.startsWith('[*]')
                            ? 'text-amber-300'
                            : line.startsWith('[+]')
                            ? 'text-cyan-300'
                            : 'text-zinc-400'
                        }`}
                      >
                        {line}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Live Status Footer inside terminal */}
                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-[11px] text-zinc-500">
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Active Session: Kerala Node</span>
                  </div>
                  <span className="text-zinc-600">UTF-8</span>
                </div>

              </div>

            </div>

            {/* Note on Authenticity */}
            <div className="mt-4 p-4 rounded-xl bg-zinc-900/50 border border-white/5 text-xs text-zinc-400 flex items-start space-x-2.5">
              <Sparkles className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
              <p>
                <strong className="text-zinc-200">Authentic Learning:</strong> Rather than reciting dry theory, I learn by compiling, testing in sandboxed environments, and breaking things down until I understand the core principles.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

