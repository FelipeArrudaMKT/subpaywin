
import React from 'react';
import { AFFILIATE_LINK } from '../constants';

interface ButtonProps {
  text: string;
  className?: string;
  pulse?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ text, className = "", pulse = false }) => {
  const handleClick = () => {
    // Analytics tracking could go here
    console.log('Affiliate link clicked');
  };

  return (
    <a
      href={AFFILIATE_LINK}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className={`
        relative inline-flex items-center justify-center px-8 py-5 md:px-12 md:py-6
        text-lg md:text-xl font-black uppercase tracking-widest text-black
        bg-gradient-to-r from-green-500 via-green-400 to-yellow-500
        rounded-2xl transition-all duration-300 transform
        hover:scale-105 hover:brightness-110
        active:scale-95 active:brightness-125 active:shadow-inner
        shadow-lg select-none cursor-pointer
        ${pulse ? 'animate-glow' : ''}
        ${className}
      `}
    >
      <span className="relative z-10 drop-shadow-md text-center">{text}</span>
      {/* Glossy Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-white/20 rounded-2xl pointer-events-none transition-opacity group-active:opacity-50"></div>
      <div className="absolute inset-x-0 top-0 h-[1px] bg-white/40 rounded-t-2xl pointer-events-none"></div>
    </a>
  );
};
