import React from 'react';

export default function LandingScreen({ onStart }) {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center px-6 glass-background">
      {/* Background Energy Blobs */}
      <div className="absolute top-1/4 -left-24 w-64 h-64 bg-primary/10 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-1/4 -right-24 w-64 h-64 bg-secondary/10 rounded-full blur-[100px]"></div>
      
      <div className="relative z-10 w-full max-w-3xl flex flex-col items-center text-center">
        
        {/* Icon/Hero Section */}
        <div className="mb-10 relative">
          <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full scale-150"></div>
          <div className="relative w-32 h-32 md:w-40 md:h-40 bg-surface-container-lowest rounded-3xl flex items-center justify-center shadow-[0_20px_50px_rgba(112,42,225,0.12)]">
            <span className="material-symbols-outlined text-primary text-6xl md:text-7xl" data-icon="auto_stories" style={{fontVariationSettings: "'FILL' 1"}}>auto_stories</span>
          </div>
        </div>
        
        {/* Headlines */}
        <div className="space-y-4 mb-12">
          <h1 className="text-4xl md:text-6xl font-headline font-extrabold tracking-tight text-on-background leading-tight">
            KPSS Tarih <span className="text-primary">Soru Çözümü</span>
          </h1>
          <p className="text-lg md:text-xl text-on-surface-variant max-w-xl mx-auto font-medium">
            Geçmişin bilgisiyle geleceğini inşa et. En güncel müfredatla hazırlanan binlerce soruyla sınav yolculuğunda yanındayız.
          </p>
        </div>
        
        {/* Action Cluster */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-20">
          <button 
            onClick={onStart}
            className="bg-gradient-to-br from-primary to-primary-container text-on-primary px-10 py-5 rounded-xl font-headline font-bold text-lg shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all duration-200 flex items-center justify-center gap-2"
          >
            <span className="material-symbols-outlined" data-icon="rocket_launch" style={{fontVariationSettings: "'FILL' 1"}}>rocket_launch</span>
            Teste Başla
          </button>
        </div>
        
        {/* Stats Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          <div className="bg-surface-container-lowest p-6 rounded-2xl flex flex-col items-center justify-center space-y-2 border-b-4 border-primary/20">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-2">
              <span className="material-symbols-outlined text-primary" data-icon="quiz" style={{fontVariationSettings: "'FILL' 1"}}>quiz</span>
            </div>
            <span className="text-2xl font-label font-extrabold text-on-background">5.000+ Soru</span>
            <span className="text-sm font-label font-bold text-outline uppercase tracking-wider">Kapsamlı Arşiv</span>
          </div>
          
          <div className="bg-surface-container-lowest p-6 rounded-2xl flex flex-col items-center justify-center space-y-2 border-b-4 border-secondary/20">
            <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-2">
              <span className="material-symbols-outlined text-secondary" data-icon="bolt" style={{fontVariationSettings: "'FILL' 1"}}>bolt</span>
            </div>
            <span className="text-2xl font-label font-extrabold text-on-background">24/7 Erişim</span>
            <span className="text-sm font-label font-bold text-outline uppercase tracking-wider">Her An Yanında</span>
          </div>
          
          <div className="bg-surface-container-lowest p-6 rounded-2xl flex flex-col items-center justify-center space-y-2 border-b-4 border-tertiary-container/20">
            <div className="w-12 h-12 bg-tertiary-container/10 rounded-full flex items-center justify-center mb-2">
              <span className="material-symbols-outlined text-tertiary" data-icon="military_tech" style={{fontVariationSettings: "'FILL' 1"}}>military_tech</span>
            </div>
            <span className="text-2xl font-label font-extrabold text-on-background">%98 Başarı</span>
            <span className="text-sm font-label font-bold text-outline uppercase tracking-wider">Sınav Odaklı</span>
          </div>
        </div>
        
      </div>
    </main>
  );
}
