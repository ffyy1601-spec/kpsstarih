import React from 'react';
import { Rocket, HelpCircle, Zap, Trophy } from 'lucide-react';

export default function LandingScreen({ onStart }) {
  return (
    <main className="relative min-h-dvh flex flex-col items-center justify-center px-4 sm:px-6 py-8 sm:py-12 glass-background overflow-hidden">
      <div className="absolute top-1/4 -left-24 w-64 h-64 bg-primary/10 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-1/4 -right-24 w-64 h-64 bg-secondary/10 rounded-full blur-[100px]"></div>

      <div className="relative z-10 w-full max-w-3xl flex flex-col items-center text-center">
        <div className="mb-8 sm:mb-10 relative">
          <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full scale-150"></div>
          <div className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 bg-surface-container-lowest rounded-[28px] sm:rounded-3xl flex items-center justify-center shadow-[0_20px_50px_rgba(112,42,225,0.12)]">
            <img src="/favicon.svg" alt="KPSS Tarih logosu" className="h-[62%] w-[62%] object-contain" />
          </div>
        </div>

        <div className="space-y-3 sm:space-y-4 mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-headline font-extrabold tracking-tight text-on-background leading-tight">
            KPSS Tarih <span className="text-primary">Soru Çöz</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-on-surface-variant max-w-xl mx-auto font-medium">
            Konu konu ilerle, çıkmış kalıpları gör ve sınava daha güvenli hazırlan.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto mb-10 sm:mb-20">
          <button
            onClick={onStart}
            className="w-full sm:w-auto bg-gradient-to-br from-primary to-primary-container text-on-primary px-8 sm:px-10 py-4 sm:py-5 rounded-xl font-headline font-bold text-base sm:text-lg shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all duration-200 flex items-center justify-center gap-2"
          >
            <Rocket className="h-5 w-5" />
            Teste Başla
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 w-full">
          <div className="bg-surface-container-lowest p-5 sm:p-6 rounded-2xl flex flex-col items-center justify-center space-y-2 border-b-4 border-primary/20">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-2">
              <HelpCircle className="h-6 w-6 text-primary" />
            </div>
            <span className="text-xl sm:text-2xl font-label font-extrabold text-on-background">1.250 Soru</span>
            <span className="text-sm font-label font-bold text-outline uppercase tracking-wider">Kapsamlı Arşiv</span>
          </div>

          <div className="bg-surface-container-lowest p-5 sm:p-6 rounded-2xl flex flex-col items-center justify-center space-y-2 border-b-4 border-secondary/20">
            <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-2">
              <Zap className="h-6 w-6 text-secondary" />
            </div>
            <span className="text-xl sm:text-2xl font-label font-extrabold text-on-background">24/7 Erişim</span>
            <span className="text-sm font-label font-bold text-outline uppercase tracking-wider">Her An Yanında</span>
          </div>

          <div className="bg-surface-container-lowest p-5 sm:p-6 rounded-2xl flex flex-col items-center justify-center space-y-2 border-b-4 border-tertiary-container/20">
            <div className="w-12 h-12 bg-tertiary-container/10 rounded-full flex items-center justify-center mb-2">
              <Trophy className="h-6 w-6 text-tertiary" />
            </div>
            <span className="text-xl sm:text-2xl font-label font-extrabold text-on-background">%98 Başarı</span>
            <span className="text-sm font-label font-bold text-outline uppercase tracking-wider">Sınav Odaklı</span>
          </div>
        </div>
      </div>
    </main>
  );
}
