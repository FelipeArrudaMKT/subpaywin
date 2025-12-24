
import React, { useState, useEffect } from 'react';
import { NOTIFICATION_NAMES, NOTIFICATION_VARIANTS } from '../constants';
import { CheckCircle2, TrendingUp } from 'lucide-react';

export const SocialProofNotifications: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState({ name: '', text: '' });

  const triggerNotification = () => {
    const randomName = NOTIFICATION_NAMES[Math.floor(Math.random() * NOTIFICATION_NAMES.length)];
    const randomText = NOTIFICATION_VARIANTS[Math.floor(Math.random() * NOTIFICATION_VARIANTS.length)];
    
    setData({ name: randomName, text: randomText });
    setVisible(true);

    // Hide after 7 seconds
    setTimeout(() => {
      setVisible(false);
    }, 7000);
  };

  useEffect(() => {
    // Initial delay then repeat every 15 seconds for demo (user asked for 5 min but for demo visibility we'll do it faster)
    const timer = setInterval(triggerNotification, 20000); 
    // Show one shortly after load
    const initialTimer = setTimeout(triggerNotification, 3000);
    
    return () => {
      clearInterval(timer);
      clearTimeout(initialTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 left-6 z-50 notification-appear pointer-events-none">
      <div className="bg-black/90 backdrop-blur-xl border border-green-500/40 p-4 rounded-2xl shadow-2xl flex items-start gap-4 max-w-[280px]">
        <div className="bg-green-500 p-2 rounded-full shrink-0">
          <CheckCircle2 className="w-5 h-5 text-black" />
        </div>
        <div>
          <p className="text-sm font-bold text-white mb-1">
            ✅ {data.name}
          </p>
          <p className="text-xs text-gray-400 font-medium">
            {data.text}
          </p>
          <div className="flex items-center gap-1 mt-2 text-[10px] text-green-400 font-bold uppercase tracking-wider">
            <TrendingUp className="w-3 h-3" />
            Atividade em andamento
          </div>
        </div>
      </div>
    </div>
  );
};
