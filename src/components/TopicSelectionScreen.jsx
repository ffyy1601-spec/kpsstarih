import React from 'react';
import {
  ArrowLeftRight,
  BadgeHelp,
  BookOpen,
  Castle,
  FileText,
  Globe,
  Home,
  Landmark,
  Medal,
  ScrollText,
  Swords,
  TimerReset
} from 'lucide-react';
import { kpssData } from '../data/questions';

const topicStyles = [
  { bg: 'bg-orange-100', text: 'text-orange-600', icon: Globe },
  { bg: 'bg-sky-100', text: 'text-sky-600', icon: Landmark },
  { bg: 'bg-red-100', text: 'text-red-600', icon: Swords },
  { bg: 'bg-emerald-100', text: 'text-emerald-600', icon: Castle },
  { bg: 'bg-indigo-100', text: 'text-indigo-600', icon: TimerReset },
  { bg: 'bg-amber-100', text: 'text-amber-600', icon: FileText },
  { bg: 'bg-rose-100', text: 'text-rose-600', icon: Medal },
  { bg: 'bg-violet-100', text: 'text-violet-600', icon: ScrollText },
  { bg: 'bg-teal-100', text: 'text-teal-600', icon: BookOpen },
  { bg: 'bg-fuchsia-100', text: 'text-fuchsia-600', icon: BadgeHelp }
];

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
          className="w-full bg-gradient-to-r from-violet-600 to-primary text-white rounded-2xl p-3 sm:p-6 transition-transform duration-300 hover:scale-[1.02] cursor-pointer shadow-lg shadow-primary/30 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3"
          onClick={() => onSelectTopic('all')}
        >
          <div className="flex items-center gap-2.5 sm:gap-4">
            <div className="w-10 h-10 sm:w-14 sm:h-14 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md shrink-0">
              <ArrowLeftRight className="h-5 w-5 sm:h-7 sm:w-7" />
            </div>
            <div>
              <h2 className="font-headline text-base sm:text-xl md:text-2xl font-bold">Karışık Soru Çöz</h2>
              <p className="font-label text-xs sm:text-sm text-white/80 mt-0.5 sm:mt-1">
                Tüm konulardan rastgele seçilmiş 20 soru
              </p>
            </div>
          </div>

          <button className="w-full sm:w-auto bg-white text-primary font-bold font-label text-[11px] sm:text-xs uppercase px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl hover:bg-slate-50 transition-colors">
            Hemen Başla
          </button>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 w-full">
          {kpssData.map((topic, index) => {
            const style = topicStyles[index % topicStyles.length];
            const Icon = style.icon;

            return (
              <div
                key={topic.id}
                className="min-h-[154px] sm:min-h-[214px] bg-surface-container-lowest topic-card rounded-xl p-3 sm:p-5 transition-all duration-300 hover:bg-surface-container flex flex-col justify-between group cursor-pointer border border-slate-100 shadow-sm hover:shadow-md"
                onClick={() => onSelectTopic(topic.id)}
              >
                <div className="flex flex-col items-center text-center flex-grow">
                  <div className={`w-9 h-9 sm:w-12 sm:h-12 rounded-full ${style.bg} flex items-center justify-center mb-2.5 sm:mb-3`}>
                    <Icon className={`h-[1.05rem] w-[1.05rem] sm:h-[1.4rem] sm:w-[1.4rem] ${style.text}`} />
                  </div>
                  <h3 className="font-headline text-[12px] sm:text-[14px] lg:text-[15px] font-bold mb-3 text-on-surface leading-snug">
                    {topic.title}
                  </h3>
                </div>

                <button className="start-btn w-full font-label font-bold text-[9px] sm:text-[11px] uppercase py-2 sm:py-2.5 px-2.5 sm:px-3 rounded-lg bg-surface-container-low text-primary transition-all duration-200 mt-auto">
                  Hemen Başla
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
