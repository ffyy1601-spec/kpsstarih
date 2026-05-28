import React from 'react';
import { Rocket, HelpCircle, Zap, Trophy } from 'lucide-react';

export default function LandingScreen({ onStart }) {
  return (
    <main className="relative min-h-dvh flex flex-col items-center justify-center px-3 sm:px-6 py-6 sm:py-12 overflow-hidden bg-transparent">
      {/* Floating Animated Background Glows */}
      <div className="glow-blob blob-purple"></div>
      <div className="glow-blob blob-blue"></div>
      <div className="glow-blob blob-orange"></div>

      <div className="relative z-10 w-full max-w-3xl bg-white/45 border border-white/50 rounded-3xl p-6 sm:p-12 shadow-[0_30px_70px_rgba(112,42,225,0.08)] flex flex-col items-center text-center backdrop-blur-3xl">
        <div className="mb-6 sm:mb-8 relative">
          <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full scale-150"></div>
          <div className="relative w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 bg-surface-container-lowest rounded-[24px] sm:rounded-3xl flex items-center justify-center shadow-[0_20px_50px_rgba(112,42,225,0.12)]">
            <img src="/favicon.svg" alt="KPSS Tarih logosu" className="h-[62%] w-[62%] object-contain" />
          </div>
        </div>

        <div className="space-y-2 sm:space-y-4 mb-6 sm:mb-10">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-headline font-black tracking-tight text-on-background leading-tight">
            KPSS Tarih <span className="bg-gradient-to-r from-primary to-violet-600 bg-clip-text text-transparent">Soru Çöz</span>
          </h1>
          <p className="text-sm sm:text-base md:text-xl text-on-surface-variant max-w-xl mx-auto font-semibold">
            Konu konu ilerle, çıkmış kalıpları gör ve sınava daha güvenli hazırlan.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto mb-8 sm:mb-16">
          <button
            onClick={onStart}
            className="w-full sm:w-auto bg-gradient-to-br from-primary to-violet-600 text-on-primary px-8 sm:px-12 py-3.5 sm:py-5 rounded-xl font-headline font-extrabold text-base sm:text-lg shadow-xl shadow-primary/30 hover:scale-[1.03] hover:shadow-[0_15px_35px_rgba(112,42,225,0.35)] active:scale-95 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <Rocket className="h-5 w-5" />
            Teste Başla
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 w-full">
          <div className="bg-white/60 backdrop-blur-md p-4 sm:p-6 rounded-2xl flex flex-col items-center justify-center space-y-2 border border-white/50 border-b-4 border-b-primary/30 shadow-md transition-all duration-300 hover:scale-[1.03] hover:shadow-lg hover:shadow-primary/5">
            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mb-1">
              <HelpCircle className="h-5 w-5 text-primary" />
            </div>
            <span className="text-lg sm:text-2xl font-label font-extrabold text-on-background">1.250 Soru</span>
            <span className="text-[10px] font-label font-bold text-outline uppercase tracking-wider">Kapsamlı Arşiv</span>
          </div>

          <div className="bg-white/60 backdrop-blur-md p-4 sm:p-6 rounded-2xl flex flex-col items-center justify-center space-y-2 border border-white/50 border-b-4 border-b-secondary/30 shadow-md transition-all duration-300 hover:scale-[1.03] hover:shadow-lg hover:shadow-secondary/5">
            <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center mb-1">
              <Zap className="h-5 w-5 text-secondary" />
            </div>
            <span className="text-lg sm:text-2xl font-label font-extrabold text-on-background">24/7 Erişim</span>
            <span className="text-[10px] font-label font-bold text-outline uppercase tracking-wider">Her An Yanında</span>
          </div>

          <div className="bg-white/60 backdrop-blur-md p-4 sm:p-6 rounded-2xl flex flex-col items-center justify-center space-y-2 border border-white/50 border-b-4 border-b-tertiary-container/30 shadow-md transition-all duration-300 hover:scale-[1.03] hover:shadow-lg hover:shadow-orange-500/5">
            <div className="w-10 h-10 bg-tertiary-container/10 rounded-full flex items-center justify-center mb-1">
              <Trophy className="h-5 w-5 text-tertiary" />
            </div>
            <span className="text-lg sm:text-2xl font-label font-extrabold text-on-background">%98 Başarı</span>
            <span className="text-[10px] font-label font-bold text-outline uppercase tracking-wider">Sınav Odaklı</span>
          </div>
        </div>
      </div>
    </main>
  );
}
