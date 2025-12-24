
import React from 'react';
import { TrendingUp, Activity, Smartphone, Headphones } from 'lucide-react';

export const TechPerformanceCard: React.FC = () => {
  return (
    <div className="relative w-full aspect-video rounded-[2.5rem] overflow-hidden border border-green-500/40 bg-gradient-to-br from-[#08150c] via-[#050505] to-black shadow-[0_0_50px_rgba(34,197,94,0.15)] group select-none">
      
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-10" 
           style={{ 
             backgroundImage: `linear-gradient(#22c55e 1px, transparent 1px), linear-gradient(90deg, #22c55e 1px, transparent 1px)`,
             backgroundSize: '40px 40px'
           }}>
      </div>

      {/* Floating Elements ($ and Particles) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div 
            key={i}
            className="absolute text-green-500/10 font-black text-3xl animate-float-slow"
            style={{
              top: `${Math.random() * 80}%`,
              left: `${Math.random() * 90}%`,
              animationDelay: `${i * 1.2}s`,
            }}
          >
            $
          </div>
        ))}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.05),transparent_70%)] animate-pulse"></div>
      </div>

      {/* Main Content Layout */}
      <div className="absolute inset-0 flex items-center justify-between px-6 md:px-12 pt-8">
        
        {/* Left Character: Tech Guy */}
        <div className="hidden sm:flex flex-col items-center animate-character-float">
          <svg width="120" height="180" viewBox="0 0 120 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-[0_0_15px_rgba(34,197,94,0.3)]">
            {/* Body/Hoodie */}
            <path d="M20 180C20 140 30 110 60 110C90 110 100 140 100 180H20Z" fill="#111" stroke="#22c55e" strokeWidth="2"/>
            <path d="M35 110L45 70L75 70L85 110" fill="#111" stroke="#22c55e" strokeWidth="2"/>
            {/* Head */}
            <circle cx="60" cy="45" r="25" fill="#111" stroke="#22c55e" strokeWidth="2"/>
            {/* Phone Hand */}
            <rect x="75" y="110" width="25" height="45" rx="4" fill="#22c55e" className="animate-pulse"/>
            <Smartphone x="80" y="115" size="16" className="text-black" />
          </svg>
        </div>

        {/* Central Text Area */}
        <div className="flex-1 text-center z-20 space-y-4">
          <div className="inline-flex items-center gap-2 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-green-500/30 mb-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-ping"></div>
            <span className="text-[10px] font-urban font-bold text-green-400 tracking-[0.3em] uppercase">Status: Operacional</span>
          </div>
          
          <h4 className="font-urban text-4xl md:text-6xl font-black text-white tracking-tighter drop-shadow-[0_0_20px_rgba(0,0,0,1)]">
            SISTEMA <span className="text-green-500">ATIVO</span>
          </h4>
          
          <p className="text-green-400/90 text-xs md:text-sm font-black uppercase tracking-[0.5em] max-w-xs mx-auto">
            Otimização de Performance
          </p>

          <div className="flex justify-center gap-2 mt-6">
            <div className="w-12 h-1 bg-green-500/20 rounded-full overflow-hidden">
              <div className="h-full bg-green-500 w-full animate-[loading_2s_ease-in-out_infinite]"></div>
            </div>
            <div className="w-12 h-1 bg-green-500/20 rounded-full overflow-hidden">
              <div className="h-full bg-green-500 w-full animate-[loading_2s_ease-in-out_infinite_0.5s]"></div>
            </div>
          </div>
        </div>

        {/* Right Character: Tech Girl */}
        <div className="hidden sm:flex flex-col items-center animate-character-float-delayed">
          <svg width="120" height="180" viewBox="0 0 120 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-[0_0_15px_rgba(234,179,8,0.3)]">
            {/* Body/Tech Jacket */}
            <path d="M20 180C20 145 35 115 60 115C85 115 100 145 100 180H20Z" fill="#111" stroke="#eab308" strokeWidth="2"/>
            {/* Head */}
            <circle cx="60" cy="50" r="23" fill="#111" stroke="#eab308" strokeWidth="2"/>
            {/* Headphones */}
            <path d="M35 50C35 30 45 20 60 20C75 20 85 30 85 50" stroke="#eab308" strokeWidth="4" strokeLinecap="round"/>
            <rect x="32" y="45" width="8" height="15" rx="2" fill="#eab308"/>
            <rect x="80" y="45" width="8" height="15" rx="2" fill="#eab308"/>
            {/* Accessory Glow */}
            <circle cx="60" cy="140" r="5" fill="#eab308" className="animate-pulse"/>
          </svg>
        </div>
      </div>

      {/* Bottom Interface Elements */}
      <div className="absolute bottom-0 left-0 w-full p-6 flex justify-between items-end border-t border-white/5 bg-black/20 backdrop-blur-sm">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-green-500 rounded-lg shadow-lg">
            <TrendingUp className="text-black w-4 h-4" />
          </div>
          <span className="text-[10px] font-bold text-white/60 tracking-widest uppercase">Análise em Tempo Real</span>
        </div>
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="w-1.5 h-4 bg-green-500/20 rounded-full overflow-hidden">
               <div className={`w-full bg-green-500 animate-[bar-growth_1.5s_ease-in-out_infinite]`} style={{ animationDelay: `${i * 0.2}s` }}></div>
            </div>
          ))}
        </div>
      </div>

      {/* Scan Line Effect */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-green-400 to-transparent z-10 animate-[scan_3.5s_linear_infinite] opacity-50"></div>

      <style>{`
        @keyframes scan {
          0% { top: 0; }
          100% { top: 100%; }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0) rotate(0); }
          50% { transform: translateY(-15px) rotate(5deg); }
        }
        @keyframes character-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        @keyframes character-float-delayed {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        .animate-character-float { animation: character-float 4s ease-in-out infinite; }
        .animate-character-float-delayed { animation: character-float-delayed 4s ease-in-out infinite 2s; }
        @keyframes loading {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes bar-growth {
          0%, 100% { height: 20%; }
          50% { height: 100%; }
        }
      `}</style>
    </div>
  );
};
