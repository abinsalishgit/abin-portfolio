import React from 'react';

export default function BackgroundAtmosphere() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Deep dark canvas background */}
      <div className="absolute inset-0 bg-[#080808]" />

      {/* Grid Pattern with subtle opacity */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40" />

      {/* Ambient Crimson Glow (Top Right) */}
      <div 
        className="absolute -top-[15%] -right-[10%] w-[650px] h-[650px] rounded-full blur-[140px] opacity-25"
        style={{
          background: 'radial-gradient(circle, #E31B35 0%, rgba(227, 27, 53, 0) 70%)'
        }}
      />

      {/* Ambient Warm Amber Glow (Mid Left) */}
      <div 
        className="absolute top-[40%] -left-[15%] w-[600px] h-[600px] rounded-full blur-[150px] opacity-15"
        style={{
          background: 'radial-gradient(circle, #f59e0b 0%, rgba(245, 158, 11, 0) 70%)'
        }}
      />

      {/* Ambient Crimson Glow (Bottom Right) */}
      <div 
        className="absolute bottom-[10%] -right-[15%] w-[700px] h-[700px] rounded-full blur-[160px] opacity-20"
        style={{
          background: 'radial-gradient(circle, #E31B35 0%, rgba(227, 27, 53, 0) 70%)'
        }}
      />

      {/* Vignette edge darkening */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(8,8,8,0.7)_100%)]" />
    </div>
  );
}

