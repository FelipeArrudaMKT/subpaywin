
import React, { useEffect, useState } from 'react';
import { getMarketInsight } from '../services/geminiService';
import { BrainCircuit } from 'lucide-react';

export const AIPredictor: React.FC = () => {
  const [insight, setInsight] = useState<string>("Calculando insights estratégicos...");

  useEffect(() => {
    const fetchInsight = async () => {
      const text = await getMarketInsight();
      setInsight(text);
    };
    fetchInsight();
  }, []);

  return (
    <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-4 max-w-sm mx-auto my-8 flex items-center gap-4">
      <div className="bg-green-500/20 p-2 rounded-full animate-pulse">
        <BrainCircuit className="text-green-500 w-6 h-6" />
      </div>
      <div>
        <p className="text-[10px] text-green-400 font-bold uppercase tracking-widest">IA Insight</p>
        <p className="text-sm text-gray-300 italic">"{insight}"</p>
      </div>
    </div>
  );
};
