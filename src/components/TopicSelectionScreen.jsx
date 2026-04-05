import React from 'react';
import { kpssData } from '../data/questions';

const topicStyles = [
  { bg: 'bg-orange-100', text: 'text-orange-600', icon: 'travel_explore' },
  { bg: 'bg-sky-100', text: 'text-sky-600', icon: 'fort' },
  { bg: 'bg-red-100', text: 'text-red-600', icon: 'swords' },
  { bg: 'bg-emerald-100', text: 'text-emerald-600', icon: 'museum' },
  { bg: 'bg-indigo-100', text: 'text-indigo-600', icon: 'timeline' },
  { bg: 'bg-amber-100', text: 'text-amber-600', icon: 'assignment' },
  { bg: 'bg-rose-100', text: 'text-rose-600', icon: 'military_tech' },
  { bg: 'bg-violet-100', text: 'text-violet-600', icon: 'auto_awesome' },
  { bg: 'bg-teal-100', text: 'text-teal-600', icon: 'public' },
  { bg: 'bg-fuchsia-100', text: 'text-fuchsia-600', icon: 'history_edu' }
];

export default function TopicSelectionScreen({ onSelectTopic }) {
  return (
    <>
      <main className="max-w-7xl mx-auto px-6 py-12 mt-4 flex-grow flex flex-col justify-center">
        <header className="mb-6 text-center">
          <h1 className="font-headline text-4xl md:text-5xl font-extrabold text-on-surface tracking-tighter mb-2">Hazır Mısın?</h1>
          <p className="font-headline text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto">Çözmek istediğin tarih konusunu seç.</p>
        </header>

        <div className="flex flex-col gap-4 max-w-5xl mx-auto w-full">
          {/* Karışık Çöz - Hero Card */}
          <div 
            className="w-full bg-gradient-to-r from-violet-600 to-primary text-white rounded-2xl p-6 transition-transform duration-300 hover:scale-[1.02] cursor-pointer shadow-lg shadow-primary/30 flex items-center justify-between"
            onClick={() => onSelectTopic('all')}
          >
            <div className="flex items-center gap-4">
               <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md">
                 <span className="material-symbols-outlined text-3xl font-bold">shuffle</span>
               </div>
               <div>
                  <h2 className="font-headline text-xl md:text-2xl font-bold">Karışık Soru Çöz</h2>
                  <p className="font-label text-sm text-white/80 mt-1">Tüm konulardan rastgele seçilmiş 20 soru</p>
               </div>
            </div>
            <button className="bg-white text-primary font-bold font-label text-xs uppercase px-6 py-3 rounded-xl hover:bg-slate-50 transition-colors hidden sm:block">
              Hemen Başla
            </button>
          </div>

          {/* Normal Konular */}
          <div className="flex flex-wrap justify-center gap-4 w-full">
            {kpssData.map((topic, index) => {
              const style = topicStyles[index % topicStyles.length];
              return (
                <div 
                  key={topic.id}
                  className="w-full sm:w-[46%] md:w-[30%] lg:w-[23%] bg-surface-container-lowest topic-card rounded-xl p-5 transition-all duration-300 hover:bg-surface-container flex flex-col justify-between group cursor-pointer border border-slate-100 shadow-sm hover:shadow-md"
                  onClick={() => onSelectTopic(topic.id)}
                >
                  <div className="flex flex-col items-center text-center flex-grow">
                    <div className={`w-12 h-12 rounded-full ${style.bg} flex items-center justify-center mb-3`}>
                      <span className={`material-symbols-outlined text-[1.4rem] ${style.text}`}>{style.icon}</span>
                    </div>
                    <h3 className="font-headline text-[14px] lg:text-[15px] font-bold mb-4 text-on-surface leading-snug">{topic.title}</h3>
                  </div>
                  <button className="start-btn w-full font-label font-bold text-[11px] uppercase py-2.5 px-3 rounded-lg bg-surface-container-low text-primary transition-all duration-200 mt-auto">
                    Hemen Başla
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
}
