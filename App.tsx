
import React from 'react';
import { Button } from './components/Button';
import { RunnerBackground } from './components/RunnerBackground';
import { FloatingElements } from './components/FloatingElements';
import { SocialProofNotifications } from './components/SocialProofNotifications';
import { BENEFITS, STEPS, AFFILIATE_LINK } from './constants';
import { AIPredictor } from './components/AIPredictor';
import { ChevronRight, ArrowRight, DollarSign, Footprints, Skateboarding, SprayCan } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen relative selection:bg-green-500 selection:text-black">
      <RunnerBackground />
      <FloatingElements />
      <SocialProofNotifications />

      {/* Header / Logo */}
      <header className="relative z-20 flex justify-center py-8">
        <h1 className="font-urban text-3xl md:text-4xl font-black italic flex items-center gap-2 tracking-tighter">
          <span className="text-green-500">SUBPAY</span>
          <span className="gold-text">WIN</span>
        </h1>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 px-6 pt-12 pb-24 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-xs font-black uppercase tracking-widest animate-pulse">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            CONEXÃO ESTABELECIDA ⚡
          </div>
          
          <h2 className="font-urban text-5xl md:text-8xl font-black leading-none drop-shadow-2xl">
            ENTRE NO JOGO COM <br />
            <span className="gold-text italic">ESTRATÉGIA</span>
          </h2>
          
          <p className="text-gray-300 text-lg md:text-2xl max-w-2xl mx-auto leading-relaxed font-medium drop-shadow-md">
            Domine as pistas com análise precisa. Acesse agora a plataforma e comece sua corrida para o lucro.
          </p>

          <div className="pt-6">
            <Button text="👉 JOGAR AGORA" pulse />
          </div>

          <AIPredictor />
        </div>
      </section>

      {/* Runner Aesthetic Section */}
      <section className="relative z-10 py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center p-8 bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 text-center transform hover:rotate-1 transition-transform">
             <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mb-4 rotate-12">
               <span className="text-4xl">🛹</span>
             </div>
             <h4 className="font-urban text-xl font-bold mb-2">AGILIDADE</h4>
             <p className="text-gray-400 text-sm">Respostas rápidas para mercados voláteis.</p>
          </div>
          <div className="flex flex-col items-center p-8 bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 text-center transform hover:-rotate-1 transition-transform">
             <div className="w-16 h-16 bg-yellow-500 rounded-2xl flex items-center justify-center mb-4 -rotate-12">
               <span className="text-4xl">🎨</span>
             </div>
             <h4 className="font-urban text-xl font-bold mb-2">ESTILO</h4>
             <p className="text-gray-400 text-sm">Interface intuitiva e moderna para você focar no jogo.</p>
          </div>
          <div className="flex flex-col items-center p-8 bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 text-center transform hover:rotate-2 transition-transform">
             <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mb-4 rotate-3">
               <span className="text-4xl">💰</span>
             </div>
             <h4 className="font-urban text-xl font-bold mb-2">RESULTADO</h4>
             <p className="text-gray-400 text-sm">Sua estratégia convertida em vantagem real.</p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="font-urban text-center text-3xl md:text-5xl font-black mb-16 uppercase tracking-tight">
            VANTAGEM <span className="text-green-500">SUBPAY WIN</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {BENEFITS.map((benefit, idx) => (
              <div 
                key={idx}
                className="group p-8 rounded-[2rem] bg-gradient-to-br from-white/10 to-transparent border border-white/5 hover:border-green-500/50 transition-all duration-500"
              >
                <div className="mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                  {benefit.icon}
                </div>
                <h4 className="text-xl font-black mb-3 text-white uppercase">{benefit.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Replay Section */}
      <section className="relative z-10 py-24 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto relative">
          {/* Decorative Spray Can Icon */}
          <div className="absolute -top-10 -right-10 opacity-10 rotate-45 scale-150">
             <SprayCan className="w-64 h-64 text-green-500" />
          </div>
          
          <div className="bg-gradient-to-r from-green-900/40 to-transparent p-12 rounded-[3rem] border border-green-500/20 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="text-left space-y-4 max-w-xl">
              <h3 className="font-urban text-4xl md:text-5xl font-black leading-tight">
                O JOGO JÁ ESTÁ <br />
                <span className="gold-text italic underline decoration-green-500">DISPONÍVEL AGORA</span>
              </h3>
              <p className="text-gray-300 text-lg">
                Não fique parado nos trilhos. Comece sua jornada agora mesmo na plataforma líder.
              </p>
            </div>
            <div className="shrink-0">
               <Button text="🔥 ACESSAR O JOGO AGORA" pulse />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-16 px-6 bg-black/80 backdrop-blur-md border-t border-white/5 text-center mt-24">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="font-urban text-2xl font-black italic tracking-tighter">
            <span className="text-green-500">SUBPAY</span>
            <span className="gold-text">WIN</span>
          </div>
          
          <div className="flex justify-center gap-8">
             <span className="text-green-500/50 text-2xl">🛹</span>
             <span className="text-yellow-500/50 text-2xl">💰</span>
             <span className="text-green-500/50 text-2xl">🎨</span>
          </div>

          <p className="text-gray-500 text-[10px] md:text-xs max-w-xl mx-auto leading-relaxed font-bold uppercase tracking-widest">
            SubPay Win &copy; {new Date().getFullYear()}. Conteúdo informativo e analítico. <br />
            Destinado exclusivamente a maiores de 18 anos. 
            <span className="block mt-4 text-green-500/60 p-2 border border-green-500/20 rounded-lg">JOGUE COM RESPONSABILIDADE.</span>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
