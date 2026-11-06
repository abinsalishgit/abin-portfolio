import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import TechWorld from './components/TechWorld';
import CreativeProduction from './components/CreativeProduction';
import MusicSection from './components/MusicSection';
import SportsAchievements from './components/SportsAchievements';
import InterestsGrid from './components/InterestsGrid';
import ProjectsShowcase from './components/ProjectsShowcase';
import JourneyTimeline from './components/JourneyTimeline';
import Philosophy from './components/Philosophy';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import BackgroundAtmosphere from './components/BackgroundAtmosphere';
import CustomCursor from './components/CustomCursor';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#080808] text-slate-100 selection:bg-[#E31B35] selection:text-white">
      {/* Ambient background particles & glows */}
      <BackgroundAtmosphere />

      {/* Subtle interactive cursor for desktop */}
      <CustomCursor />

      {/* Sticky Top Navigation */}
      <Navbar />

      {/* Main Sections */}
      <main className="relative z-10">
        <Hero />
        <AboutMe />
        <TechWorld />
        <CreativeProduction />
        <MusicSection />
        <SportsAchievements />
        <InterestsGrid />
        <ProjectsShowcase />
        <JourneyTimeline />
        <Philosophy />
        <ContactSection />
      </main>

      {/* Comprehensive Footer */}
      <Footer />
    </div>
  );
}

