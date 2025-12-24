
import React from 'react';
import { TrendingUp, Activity, DollarSign } from 'lucide-react';

export const TechPerformanceCard: React.FC = () => {
  return (
    <div className="relative w-full aspect-video rounded-[2rem] overflow-hidden border border-green-500/30 bg-gradient-to-br from-[#0a1a0f] via-[#050505] to-black shadow-2xl group select-none">
      
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-20" 
           style={{ 
             backgroundImage: `linear-gradient(#22c55e 1px, transparent 1px), linear-gradient(90deg, #22c55e 1px, transparent 1px)`,
             backgroundSize: '30px 30px'
           }}>
      </div>

      {/* Floating Particles/Symbols */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div 
            key={i}
            className="absolute text-green-500/20 font-black text-2xl animate-float"
            style={{
              top: `${Math.random() * 80}%`,
              left: `${Math.random() * 90}%`,
              animationDelay: `${i * 0.7}s`,
              animationDuration: `${5 + Math.random() * 5}s`
            }}
          >
            $
          </div>
        ))}
        {[...Array(12)].map((_, i) => (
          <div 
            key={i}
            className="absolute w-1 h-1 bg-green-400 rounded-full animate-pulse opacity-40"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>

      {/* Animated Performance Chart (SVG) */}
      <div className="absolute inset-0 flex items-center justify-center pt-10">
        <svg viewBox="0 0 400 200" className="w-[80%] h-auto drop-shadow-[0_0_15px_rgba(34,197,94,0.5)]">
          <defs>
            <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#22c55e" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#22c55e" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path 
            d="M0,180 Q50,170 100,140 T200,100 T300,40 T400,20 L400,200 L0,200 Z" 
            fill="url(#chartGradient)"
            className="opacity-50"
          />
          <path 
            d="M0,180 Q50,170 100,140 T200,100 T300,40 T400,20" 
            fill="none" 
            stroke="#22c55e" 
            strokeWidth="4" 
            strokeLinecap="round"
            style={{ strokeDasharray: 1000, strokeDashoffset: 1000, animation: 'draw 4s ease-out infinite' }}
          />
        </svg>
      </div>

      {/* Scan Line Effect */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-green-400 to-transparent z-10 animate-[scan_4s_linear_infinite] shadow-[0_0_15px_rgba(34,197,94,1)]"></div>
      
      {/* Horizontal Shine Effect */}
      <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-[-25deg] group-hover:left-[200%] transition-all duration-1000"></div>

      {/* Tech Overlay Content */}
      <div className="absolute inset-0 p-8 flex flex-col justify-between">
        {/* Top Indicators */}
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-2 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-green-500/30">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-ping"></div>
            <span className="text-[10px] font-urban font-bold text-green-400 tracking-widest uppercase">Live Tracking</span>
          </div>
          <Activity className="text-green-500/40 w-6 h-6" />
        </div>

        {/* Main Text Area */}
        <div className="space-y-1">
          <div className="flex items-center gap-4 mb-2">
            <div className="p-3 bg-green-500 rounded-2xl shadow-[0_0_20px_rgba(34,197,94,0.4)]">
              <TrendingUp className="text-black w-7 h-7" />
            </div>
            <div>
              <h4 className="font-urban text-3xl md:text-4xl font-black text-white tracking-tighter drop-shadow-lg">
                SISTEMA <span className="text-green-500">ATIVO</span>
              </h4>
              <p className="text-green-400/80 text-[11px] md:text-xs font-black uppercase tracking-[0.4em]">
                Otimização de Performance
              </p>
            </div>
          </div>
          
          {/* Mock Progress Bars */}
          <div className="grid grid-cols-2 gap-4 mt-4 opacity-60">
            <div className="h-1 bg-zinc-800 rounded-full overflow-hidden">
              <div className="h-full bg-green-500 w-[85%] animate-[progress_3s_ease-in-out_infinite]"></div>
            </div>
            <div className="h-1 bg-zinc-800 rounded-full overflow-hidden">
              <div className="h-full bg-green-500 w-[92%] animate-[progress_4s_ease-in-out_infinite_reverse]"></div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes draw {
          0% { stroke-dashoffset: 1000; }
          40% { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: 0; opacity: 0; }
        }
        @keyframes progress {
          0%, 100% { transform: translateX(-100%); }
          50% { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
};
