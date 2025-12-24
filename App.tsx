
import React, { useEffect } from 'react';
import { Button } from './components/Button';
import { RunnerBackground } from './components/RunnerBackground';
import { FloatingElements } from './components/FloatingElements';
import { SocialProofNotifications } from './components/SocialProofNotifications';
import { BENEFITS } from './constants';
import { AIPredictor } from './components/AIPredictor';
import { TechPerformanceCard } from './components/TechPerformanceCard';
import { SprayCan, Zap, ShieldCheck, DollarSign, TrendingUp } from 'lucide-react';

const App: React.FC = () => {
  useEffect(() => {
    // Safe removal of the global loader once the app components are ready
    const loader = document.getElementById('loading-screen');
    if (loader) {
      loader.classList.add('fade-out');
      setTimeout(() => {
        if (loader.parentNode) loader.parentNode.removeChild(loader);
      }, 600);
    }
  }, []);

  return (
    <div className="min-h-screen relative flex flex-col bg-[#050505] opacity-100 visible">
      <RunnerBackground />
      <FloatingElements />
      <SocialProofNotifications />

      {/* Top Bar / Logo */}
      <header className="relative z-20 flex justify-center py-6 md:py-10">
        <div className="font-urban text-2xl md:text-4xl font-black italic flex items-center gap-2">
          <span className="text-green-500">SUBPAY</span>
          <span className="gold-text">WIN</span>
        </div>
      </header>

      {/* Main Content - Forced visible and relatively positioned */}
      <main className="relative z-10 flex-1 flex flex-col items-center opacity-100">
        
        {/* Hero Section */}
        <section className="w-full px-6 pt-12 pb-24 text-center max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-[10px] md:text-xs font-black uppercase tracking-widest animate-pulse mb-8 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            CONEXÃO ESTRATÉGICA ATIVA ⚡
          </div>
          
          <h2 className="font-urban text-5xl md:text-8xl font-black leading-[1.1] mb-6 drop-shadow-[0_10px_10px_rgba(0,0,0,0.8)] text-white">
            ENTRE NO JOGO COM <br />
            <span className="gold-text italic">ESTRATÉGIA</span>
          </h2>
          
          <p className="text-gray-300 text-lg md:text-2xl max-w-2xl mx-auto leading-relaxed font-medium mb-12 drop-shadow-md">
            Domine as pistas com a melhor tecnologia de análise. Acesse agora e comece sua corrida para o sucesso.
          </p>

          <div className="flex flex-col items-center gap-4">
            <Button text="👉 JOGAR AGORA" pulse className="w-full md:w-auto min-w-[300px]" />
            <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest mt-2 flex items-center gap-2">
              <ShieldCheck className="w-3 h-3 text-green-500" /> Plataforma 100% Verificada
            </p>
          </div>

          <AIPredictor />
        </section>

        {/* Benefits Grid */}
        <section className="w-full py-20 px-6 bg-gradient-to-t from-black to-transparent">
          <div className="max-w-6xl mx-auto">
            <h3 className="font-urban text-center text-2xl md:text-4xl font-black mb-16 uppercase italic text-white">
              VANTAGEM <span className="text-green-500">EXPERIENCE</span>
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {BENEFITS.map((benefit, idx) => (
                <div 
                  key={idx}
                  className="group p-8 rounded-[2rem] bg-white/5 border border-white/5 backdrop-blur-sm transition-all duration-500 
                             hover:border-green-500/50 hover:bg-white/10 hover:-translate-y-2 hover:rotate-1 
                             hover:shadow-[0_20px_50px_rgba(0,0,0,0.5),0_0_20px_rgba(34,197,94,0.15)] 
                             cursor-default"
                >
                  <div className="mb-6 transform group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500">
                    {benefit.icon}
                  </div>
                  <h4 className="text-xl font-black mb-3 text-white uppercase group-hover:text-green-400 transition-colors duration-300">
                    {benefit.title}
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Dynamic Urban Spacer - Alta Performance */}
        <section className="w-full py-24 px-6 overflow-hidden">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2 relative">
              <div className="absolute -inset-4 bg-green-500/10 blur-3xl rounded-full animate-breathe"></div>
              <TechPerformanceCard />
            </div>
            
            <div className="w-full md:w-1/2 space-y-8 text-center md:text-left">
              <h3 className="font-urban text-4xl md:text-6xl font-black italic leading-tight text-white">
                ESTRATÉGIA DE <br /> <span className="text-green-500 underline decoration-yellow-500 underline-offset-8">ALTA PRECISÃO</span>
              </h3>
              <p className="text-gray-400 text-lg italic leading-relaxed">
                Nossa tecnologia processa milhares de dados em tempo real para entregar a você a melhor experiência. O SubPay Win não é apenas um jogo, é onde a estratégia encontra o resultado.
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                 <div className="flex items-center gap-2 text-white font-bold bg-white/5 px-6 py-3 rounded-2xl border border-white/10 hover:border-green-500/50 transition-colors cursor-default">
                   <TrendingUp className="text-green-500 w-5 h-5" /> Taxa de Sucesso Elevada
                 </div>
                 <div className="flex items-center gap-2 text-white font-bold bg-white/5 px-6 py-3 rounded-2xl border border-white/10 hover:border-yellow-500/50 transition-colors cursor-default">
                   <DollarSign className="text-yellow-500 w-5 h-5" /> Pagamentos Instantâneos
                 </div>
              </div>
              <div className="pt-4">
                <Button text="🚀 ACESSAR SISTEMA AGORA" pulse className="w-full md:w-auto" />
              </div>
            </div>
          </div>
        </section>

        {/* Final Replay CTA */}
        <section className="w-full py-32 px-6">
          <div className="max-w-4xl mx-auto text-center space-y-12 relative">
            <div className="absolute -top-12 -left-12 opacity-10 rotate-12 scale-150">
              <SprayCan className="w-48 h-48 text-green-500" />
            </div>
            
            <div className="bg-gradient-to-b from-zinc-900 to-black p-10 md:p-20 rounded-[3rem] border border-green-500/30 relative shadow-2xl">
              <h2 className="font-urban text-4xl md:text-6xl font-black mb-8 drop-shadow-lg leading-tight text-white">
                PRONTO PARA <br />
                <span className="gold-text uppercase">Dominar as Pistas?</span>
              </h2>
              <div className="flex flex-col items-center gap-6">
                <Button text="🔥 COMEÇAR AGORA" pulse className="px-16 w-full md:w-auto" />
                <p className="text-gray-500 text-xs font-black uppercase tracking-[0.3em]">Clique acima para ser redirecionado</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-20 py-16 px-6 bg-black border-t border-white/5 text-center">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="font-urban text-2xl font-black italic">
            <span className="text-green-500">SUBPAY</span>
            <span className="gold-text">WIN</span>
          </div>
          
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-green-500/20 to-transparent"></div>
          
          <div className="space-y-4">
            <p className="text-gray-400 text-[10px] font-bold uppercase tracking-[0.2em] leading-loose max-w-xl mx-auto">
              SubPay Win &copy; {new Date().getFullYear()}. Todos os direitos reservados. <br />
              Conteúdo informativo. Destinado a maiores de 18 anos.
            </p>
            <div className="inline-block px-6 py-3 border border-red-500/20 bg-red-500/5 rounded-2xl">
              <span className="text-red-500 font-black text-xs uppercase tracking-widest">Jogue com responsabilidade</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
