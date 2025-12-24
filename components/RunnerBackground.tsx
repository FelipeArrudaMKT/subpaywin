
import React from 'react';

export const RunnerBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 bg-black overflow-hidden">
      {/* Sky/City Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-black to-black opacity-60"></div>
      
      {/* Metro Tracks (Perspective) */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[60vh] perspective-1000">
        {[0, 1, 2].map((i) => (
          <div 
            key={i} 
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[2px] h-full bg-gradient-to-t from-green-500/40 to-transparent animate-track"
            style={{ 
                left: `${35 + (i * 15)}%`,
                animationDelay: `${i * 1}s` 
            }}
          ></div>
        ))}
        
        {/* Horizontal ties */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-green-500/20 blur-sm"></div>
      </div>

      {/* Stylized Buildings (Static Shapes) */}
      <div className="absolute bottom-0 w-full h-[40vh] flex items-end justify-between px-10 opacity-30">
        <div className="w-24 h-64 bg-zinc-900 rounded-t-lg border-t-2 border-green-500/20"></div>
        <div className="w-32 h-80 bg-zinc-900 rounded-t-lg border-t-2 border-yellow-500/20"></div>
        <div className="hidden md:block w-20 h-56 bg-zinc-900 rounded-t-lg border-t-2 border-green-500/20"></div>
        <div className="w-40 h-96 bg-zinc-900 rounded-t-lg border-t-2 border-yellow-500/20"></div>
        <div className="w-24 h-72 bg-zinc-900 rounded-t-lg border-t-2 border-green-500/20"></div>
      </div>

      {/* Glowing particles / "Coins" */}
      {Array.from({ length: 12 }).map((_, i) => (
        <div 
          key={i}
          className="absolute bg-yellow-500 rounded-full blur-[2px] opacity-40 animate-float"
          style={{
            width: Math.random() * 10 + 5 + 'px',
            height: Math.random() * 10 + 5 + 'px',
            top: Math.random() * 80 + '%',
            left: Math.random() * 90 + '%',
            animationDelay: Math.random() * 5 + 's'
          }}
        ></div>
      ))}
    </div>
  );
};
