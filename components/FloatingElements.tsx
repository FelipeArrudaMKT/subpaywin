
import React from 'react';
import { DollarSign, Coins, Footprints, SprayCan, Ghost as Skateboarding } from 'lucide-react';

const icons = [
  <DollarSign className="w-12 h-12 text-green-600/30" />,
  <Coins className="w-16 h-16 text-yellow-600/20" />,
  <Skateboarding className="w-14 h-14 text-green-500/20" />,
  <SprayCan className="w-10 h-10 text-yellow-500/20" />,
  <span className="text-4xl opacity-20 select-none">💸</span>,
  <span className="text-5xl opacity-10 select-none">⚽</span>,
  <span className="text-6xl opacity-20 select-none">$</span>,
];

export const FloatingElements: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {Array.from({ length: 15 }).map((_, i) => (
        <div
          key={i}
          className="absolute animate-float"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${4 + Math.random() * 6}s`,
          }}
        >
          {icons[i % icons.length]}
        </div>
      ))}
    </div>
  );
};
