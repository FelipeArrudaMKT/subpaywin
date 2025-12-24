
import React from 'react';

export const RunnerBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 bg-[#050505] overflow-hidden">
      {/* Distant City Sky with Breathing Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-green-900/10 via-black to-black"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(34,197,94,0.05),transparent_70%)] animate-breathe"></div>
      
      {/* Moving Speed Lines */}
      <div className="absolute inset-0 opacity-20">
        {Array.from({ length: 10 }).map((_, i) => (
          <div 
            key={i}
            className="absolute bg-white/40 w-[1px] h-24 animate-track"
            style={{
              left: `${Math.random() * 100}%`,
              animationDuration: `${1.5 + Math.random()}s`,
              animationDelay: `${Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>

      {/* Metro Tracks in Perspective */}
      <div className="absolute top-[40%] left-1/2 -translate-x-1/2 w-[120%] h-[60%] perspective-1000">
        <div className="absolute inset-0 flex justify-center">
          {/* Main Perspective Rails */}
          <div className="absolute w-[2px] h-[200%] bg-green-500/20 rotate-y-[-20deg] -translate-x-48 origin-top"></div>
          <div className="absolute w-[2px] h-[200%] bg-green-500/20 rotate-y-[20deg] translate-x-48 origin-top"></div>
          
          {/* Ground Grid */}
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `linear-gradient(to bottom, transparent, rgba(34, 197, 94, 0.2)), 
                                repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(34, 197, 94, 0.2) 40px)`
            }}
          ></div>

          {/* Animated Ties (Planks) */}
          {[0, 0.4, 0.8, 1.2, 1.6].map((delay, i) => (
            // Fix: Added missing '>' to properly close the opening div tag
            <div 
              key={i}
              className="absolute top-0 w-[60%] h-4 bg-green-500/10 border-y border-green-500/20 animate-track"
              style={{ animationDelay: `${delay}s` }}
            ></div>
          ))}
        </div>
      </div>

      {/* Buildings silhouettes with slow panning parallax */}
      <div className="absolute bottom-0 w-[110%] -left-[5%] h-1/2 flex items-end justify-between px-10 opacity-10 animate-slow-pan">
        <div className="w-16 h-32 bg-zinc-800 rounded-t-lg"></div>
        <div className="w-24 h-48 bg-zinc-800 rounded-t-lg"></div>
        <div className="w-20 h-64 bg-zinc-800 rounded-t-lg hidden md:block"></div>
        <div className="w-32 h-80 bg-zinc-800 rounded-t-lg"></div>
        <div className="w-16 h-40 bg-zinc-800 rounded-t-lg"></div>
        <div className="w-28 h-56 bg-zinc-800 rounded-t-lg hidden lg:block"></div>
        <div className="w-12 h-24 bg-zinc-800 rounded-t-lg"></div>
      </div>

      {/* Floating $ Symbols - already used float in index.html */}
      <div className="absolute inset-0">
        {Array.from({ length: 8 }).map((_, i) => (
          <div 
            key={i}
            className="absolute text-green-500/20 font-black text-4xl select-none animate-float"
            style={{
              top: `${20 + Math.random() * 60}%`,
              left: `${10 + Math.random() * 80}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${5 + Math.random() * 5}s`
            }}
          >
            $
          </div>
        ))}
      </div>
    </div>
  );
};
