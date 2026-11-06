import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FolderGit2, 
  ExternalLink, 
  Sparkles, 
  Layers, 
  Code2, 
  Terminal, 
  Film, 
  Cpu,
  Info
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { projectsList, projectCategories, personalInfo } from '../data/portfolioData';

export default function ProjectsShowcase() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = activeCategory === 'All'
    ? projectsList
    : projectsList.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 relative z-10 border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 mb-4">
            <FolderGit2 className="w-3.5 h-3.5 text-[#E31B35]" />
            <span className="text-xs font-mono tracking-widest uppercase text-zinc-300">
              Work & Prototypes
            </span>
          </div>
          
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight uppercase">
            FEATURED <span className="text-[#E31B35]">PROJECTS</span>
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg max-w-2xl mt-3 font-sans">
            A curated collection of web applications, security lab experiments, creative edits, and hardware prototypes. Marked slots ready for future deployment.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2.5 mb-12">
          {projectCategories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-mono tracking-wider transition-all duration-300 uppercase ${
                  isActive
                    ? 'bg-[#E31B35] text-white shadow-lg shadow-[#E31B35]/25 border border-[#E31B35]'
                    : 'bg-zinc-900/80 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-white/10'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => {
            return (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="glass-card rounded-2xl overflow-hidden group flex flex-col justify-between"
              >
                {/* Visual Banner / Tech Graphic Frame */}
                <div className="relative aspect-[16/9] w-full bg-[#121216] border-b border-white/[0.08] overflow-hidden p-6 flex flex-col justify-between">
                  
                  {/* Subtle Background Accent Glow */}
                  <div className={`absolute top-0 right-0 w-36 h-36 rounded-full blur-2xl opacity-20 pointer-events-none ${
                    project.imageAccent === 'crimson' ? 'bg-[#E31B35]' : project.imageAccent === 'amber' ? 'bg-amber-500' : 'bg-slate-400'
                  }`} />

                  {/* Top Status & Badge */}
                  <div className="flex items-center justify-between z-10">
                    <span className="text-[10px] font-mono tracking-widest uppercase px-2.5 py-1 rounded bg-black/60 backdrop-blur-md text-zinc-300 border border-white/10">
                      {project.category}
                    </span>
                    <span className={`text-[10px] font-mono font-semibold px-2 py-0.5 rounded ${
                      project.isPlaceholder 
                        ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20' 
                        : 'bg-[#E31B35]/20 text-white border border-[#E31B35]/40'
                    }`}>
                      {project.badge}
                    </span>
                  </div>

                  {/* Center Tech Icon representation */}
                  <div className="flex items-center justify-center my-auto py-2 z-10">
                    <div className="w-14 h-14 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:border-[#E31B35]/50 transition-all duration-300">
                      {project.category === 'Websites & Apps' && <Code2 className="w-7 h-7 text-[#E31B35]" />}
                      {project.category === 'Coding Experiments' && <Layers className="w-7 h-7 text-amber-400" />}
                      {project.category === 'Cybersecurity' && <Terminal className="w-7 h-7 text-emerald-400" />}
                      {project.category === 'Creative Editing' && <Film className="w-7 h-7 text-rose-400" />}
                      {project.category === 'Tech & Inventions' && <Cpu className="w-7 h-7 text-blue-400" />}
                    </div>
                  </div>

                  {/* Bottom Slot Label */}
                  {project.isPlaceholder && (
                    <div className="z-10 flex items-center space-x-1.5 text-[10px] font-mono text-amber-400/90">
                      <Info className="w-3 h-3" />
                      <span>Ready for live repository deployment</span>
                    </div>
                  )}
                </div>

                {/* Content Body */}
                <div className="p-6 flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="font-display font-bold text-xl text-white mb-2 group-hover:text-white transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-sans mb-5 line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.techStack.map((tech, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.03] text-zinc-400 border border-white/5"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Links */}
                    <div className="flex items-center justify-between pt-4 border-t border-white/[0.08]">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-1.5 text-xs font-mono text-zinc-300 hover:text-white transition-colors"
                      >
                        <GithubIcon className="w-4 h-4 text-zinc-400" />
                        <span>{project.isPlaceholder ? 'GitHub Profile' : 'Source Code'}</span>
                      </a>

                      <a
                        href={project.isPlaceholder ? project.githubUrl : project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-1 text-xs font-mono text-[#E31B35] hover:text-[#ff2a47] font-semibold transition-colors"
                      >
                        <span>{project.isPlaceholder ? 'Details' : 'Live Preview'}</span>
                        <ExternalLink className="w-3.5 h-3.5 ml-0.5" />
                      </a>
                    </div>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

        {/* GitHub Repository Quick Callout */}
        <div className="mt-12 p-6 rounded-2xl bg-zinc-900/60 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
              <GithubIcon className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="text-base font-display font-bold text-white">
                Explore More on GitHub: @{personalInfo.contact.githubHandle}
              </h4>
              <p className="text-xs text-zinc-400 font-sans">
                Active commits, open-source experiments, scripts, and code repositories.
              </p>
            </div>
          </div>

          <a
            href={personalInfo.contact.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white text-xs font-mono border border-white/15 transition-all whitespace-nowrap"
          >
            <span>Visit github.com/{personalInfo.contact.githubHandle}</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#E31B35]" />
          </a>
        </div>

      </div>
    </section>
  );
}
