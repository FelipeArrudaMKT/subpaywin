
import React from 'react';
import { AFFILIATE_LINK } from '../constants';

interface ButtonProps {
  text: string;
  className?: string;
  pulse?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ text, className = "", pulse = false }) => {
  return (
    <a
      href={AFFILIATE_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        relative inline-flex items-center justify-center px-10 py-5
        text-xl font-black uppercase tracking-widest text-black
        bg-gradient-to-r from-green-500 via-green-400 to-yellow-500
        rounded-full transition-all duration-300 transform
        hover:scale-110 active:scale-95
        ${pulse ? 'animate-glow' : ''}
        ${className}
      `}
    >
      <span className="relative z-10 drop-shadow-md">{text}</span>
      <div className="absolute inset-0 bg-white opacity-20 hover:opacity-30 rounded-full transition-opacity"></div>
    </a>
  );
};
