import React from 'react';
import { ArrowLeftRight, Home } from 'lucide-react';
import { kpssData } from '../data/questions';

export default function TopicSelectionScreen({ onSelectTopic, onHome }) {
  return (
    <main className="max-w-7xl mx-auto px-3 sm:px-6 py-2.5 sm:py-12 mt-0 sm:mt-4 flex-grow flex flex-col justify-center">
      <div className="flex flex-col gap-2.5 sm:gap-4 max-w-5xl mx-auto w-full">
        <div className="flex justify-end">
          <button
            onClick={onHome}
            className="inline-flex items-center gap-1.5 rounded-full border border-white/70 bg-surface-container-lowest/85 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-secondary shadow-sm"
          >
            <Home className="h-4 w-4" />
            Ana Sayfa
          </button>
        </div>

        <div
          className="w-full bg-gradient-to-r from-violet-600 to-primary text-white rounded-2xl p-3 sm:p-6 transition-all duration-300 hover:scale-[1.01] hover:shadow-xl hover:shadow-primary/20 cursor-pointer shadow-lg shadow-primary/30 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3"
          onClick={() => onSelectTopic('all')}
        >
          <div className="flex items-center gap-2.5 sm:gap-4">
            <div className="w-10 h-10 sm:w-14 sm:h-14 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md shrink-0">
              <ArrowLeftRight className="h-5 w-5 sm:h-7 sm:w-7" />
            </div>
            <div>
              <h2 className="font-headline text-base sm:text-xl md:text-2xl font-bold">Karışık Soru Çöz</h2>
              <p className="font-label text-xs sm:text-sm text-white/80 mt-0.5 sm:mt-1">
                Tüm konulardan rastgele seçilmiş 15 soru
              </p>
            </div>
          </div>

          <button className="w-full sm:w-auto bg-white text-primary font-bold font-label text-[11px] sm:text-xs uppercase px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl hover:bg-slate-50 transition-colors shadow-sm">
            Hemen Başla
          </button>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 w-full">
          {kpssData.map((topic) => {
            const imageUrl = `/images/${topic.id}.webp`;

            return (
              <div
                key={topic.id}
                className="relative min-h-[170px] sm:min-h-[230px] rounded-2xl overflow-hidden group cursor-pointer border border-white/10 shadow-lg transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_20px_40px_rgba(112,42,225,0.25)] flex flex-col justify-end"
                onClick={() => onSelectTopic(topic.id)}
              >
                {/* Background Image with Zoom Effect */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
                  style={{ backgroundImage: `url('${imageUrl}')` }}
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/10 transition-opacity duration-300 group-hover:opacity-95" />

                {/* Card Content */}
                <div className="relative z-10 p-4 sm:p-5 flex flex-col h-full justify-between items-stretch">
                  <div /> {/* Spacer */}
                  <div className="mt-8 sm:mt-12 text-left">
                    <h3 className="font-headline text-[13px] sm:text-base md:text-[17px] font-black text-white leading-snug tracking-tight drop-shadow-md mb-3">
                      {topic.title}
                    </h3>
                    
                    <button className="w-full font-label font-bold text-[9px] sm:text-[11px] uppercase py-2 sm:py-2.5 px-3 rounded-xl bg-white/10 text-white border border-white/20 backdrop-blur-md group-hover:bg-white group-hover:text-primary group-hover:border-transparent transition-all duration-300 shadow-sm mt-auto">
                      Hemen Başla
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
