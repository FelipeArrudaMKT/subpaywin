
import React, { useState, useEffect } from 'react';
import { NOTIFICATION_NAMES, NOTIFICATION_VARIANTS } from '../constants';
import { CheckCircle2, TrendingUp, Zap } from 'lucide-react';

export const SocialProofNotifications: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState({ name: '', text: '' });

  const triggerNotification = () => {
    // Avoid double triggering
    if (visible) return;

    const randomName = NOTIFICATION_NAMES[Math.floor(Math.random() * NOTIFICATION_NAMES.length)];
    const randomText = NOTIFICATION_VARIANTS[Math.floor(Math.random() * NOTIFICATION_VARIANTS.length)];
    
    setData({ name: randomName, text: randomText });
    setVisible(true);

    // Hide after 6 seconds
    setTimeout(() => {
      setVisible(false);
    }, 6000);
  };

  useEffect(() => {
    // Show first notification after a short delay
    const initialTimer = setTimeout(triggerNotification, 4000);
    
    // Interval for subsequent notifications
    const interval = setInterval(() => {
      triggerNotification();
    }, 18000); // roughly every 18 seconds
    
    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:right-auto md:left-6 md:bottom-6 z-[60] pointer-events-none">
      <div className="bg-black/80 backdrop-blur-xl border border-green-500/50 p-4 rounded-2xl shadow-[0_0_30px_rgba(0,0,0,0.5)] flex items-start gap-4 max-w-[320px] mx-auto md:mx-0 notification-appear border-l-4 border-l-green-500">
        <div className="bg-green-500 p-2 rounded-xl shrink-0 shadow-lg shadow-green-500/20">
          <Zap className="w-5 h-5 text-black" fill="currentColor" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-bold text-white mb-0.5 truncate flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-green-500 inline" />
            {data.name}
          </p>
          <p className="text-xs text-gray-300 font-medium leading-tight">
            {data.text}
          </p>
          <div className="flex items-center gap-1.5 mt-2.5">
             <span className="flex h-1.5 w-1.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500"></span>
            </span>
            <span className="text-[10px] text-green-400 font-bold uppercase tracking-wider">Acesso verificado</span>
          </div>
        </div>
      </div>
    </div>
  );
};
