import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { kpssData } from '../data/questions';

export default function QuizScreen({ topicId, onBack, onGameOver }) {
  const isMixed = topicId === 'all';
  const topic = isMixed 
    ? { title: 'Karışık Sorular (Tüm Konular)' } 
    : kpssData.find(t => t.id === topicId);
    
  // Karışıksa hepsini birleştir, karıştır ve 20 soru seç. Değilse normal topic.
  const [questions] = useState(() => {
    if (isMixed) {
      const allQ = kpssData.flatMap(t => t.questions || []);
      return allQ.sort(() => 0.5 - Math.random()).slice(0, 20);
    }
    return topic ? (topic.questions || []) : [];
  });

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  
  // 'idle': bekliyor, 'selected': şık seçildi ama onaylanmadı, 
  // 'locked': onaylandı (bekleme heyecanı), 'revealed': doğru/yanlış gösteriliyor
  const [status, setStatus] = useState('idle'); 
  
  const [showExitConfirm, setShowExitConfirm] = useState(false);

  const [jokers, setJokers] = useState({
    fiftyFifty: false,
    seyirci: false,
    secondChance: false
  });
  
  const [audienceData, setAudienceData] = useState(null);
  const [eliminatedOptions, setEliminatedOptions] = useState([]);
  const [activeSecondChance, setActiveSecondChance] = useState(false);

  if (!questions || questions.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h2 className="text-2xl font-bold font-headline mb-4">Bu konuya henüz soru eklenmemiş.</h2>
        <button className="bg-primary text-white px-6 py-2 rounded-xl" onClick={onBack}>Geri Dön</button>
      </div>
    );
  }

  const currentQ = questions[currentIndex];
  const maxQuestions = questions.length;
  const progressPercent = ((currentIndex) / maxQuestions) * 100;

  const handleOptionClick = (index) => {
    if (status === 'locked' || status === 'revealed' || eliminatedOptions.includes(index)) return;
    
    setSelectedOption(index);
    setStatus('locked'); // Seçildi ve kilitlendi, bekleme (heyecan) başladı

    setTimeout(() => {
      setStatus('revealed');
      const isCorrect = index === currentQ.correctAnswerIndex;
      
      setTimeout(() => {
        if (isCorrect) {
          if (currentIndex + 1 < questions.length) {
            setCurrentIndex(prev => prev + 1);
            setSelectedOption(null);
            setStatus('idle');
            setEliminatedOptions([]);
            setActiveSecondChance(false);
          } else {
            onGameOver({ score: currentIndex + 1, total: questions.length, win: true });
          }
        } else {
          if (activeSecondChance) {
            setEliminatedOptions(prev => [...prev, index]);
            setActiveSecondChance(false);
            setStatus('idle');
            setSelectedOption(null);
          } else {
            onGameOver({ 
              score: currentIndex, 
              total: questions.length, 
              win: false,
              correctAnswer: currentQ.options[currentQ.correctAnswerIndex]
            });
          }
        }
      }, 2000); // 2 saniye rengi göster
    }, 2000); // 2 saniye kilitli sarı (heyecan) kalsın
  };

  const useFiftyFifty = () => {
    if (jokers.fiftyFifty || status === 'locked' || status === 'revealed') return;
    const correctIdx = currentQ.correctAnswerIndex;
    let toEl = [];
    const available = [0, 1, 2, 3].filter(i => i !== correctIdx && !eliminatedOptions.includes(i));
    if (available.length >= 2) {
      toEl.push(available.splice(Math.floor(Math.random() * available.length), 1)[0]);
      toEl.push(available.splice(Math.floor(Math.random() * available.length), 1)[0]);
    }
    setEliminatedOptions(prev => [...prev, ...toEl]);
    setJokers(prev => ({ ...prev, fiftyFifty: true }));
  };

  const useSeyirci = () => {
    if (jokers.seyirci || status === 'locked' || status === 'revealed') return;
    setJokers(prev => ({ ...prev, seyirci: true }));
    const data = [0, 0, 0, 0];
    const correctIdx = currentQ.correctAnswerIndex;
    let remaining = 100;
    data[correctIdx] = Math.floor(Math.random() * 20) + 50; 
    remaining -= data[correctIdx];
    const av = [0, 1, 2, 3].filter(i => i !== correctIdx && !eliminatedOptions.includes(i));
    av.forEach((idx, i) => {
      if (i === av.length - 1) data[idx] = remaining;
      else {
        const val = Math.floor(Math.random() * remaining);
        data[idx] = val;
        remaining -= val;
      }
    });
    setAudienceData(data);
    setTimeout(() => setAudienceData(null), 5000);
  };

  const useSecondChance = () => {
    if (jokers.secondChance || status === 'locked' || status === 'revealed') return;
    setJokers(prev => ({ ...prev, secondChance: true }));
    setActiveSecondChance(true);
  };

  const letters = ['A', 'B', 'C', 'D'];

  return (
    <>
      {showExitConfirm && (
        <div className="fixed inset-0 bg-white/90 z-[100] flex flex-col items-center justify-center backdrop-blur-sm">
          <h3 className="text-2xl font-headline font-bold mb-4 text-on-surface">Emin misiniz?</h3>
          <p className="mb-8 text-on-surface-variant">Mevcut ilerlemeniz kaydedilmeyecek!</p>
          <div className="flex gap-4">
            <button className="bg-error text-white px-8 py-3 rounded-xl font-bold" onClick={() => onBack()}>Evet, Çık</button>
            <button className="bg-surface-container-low text-on-surface px-8 py-3 rounded-xl font-bold" onClick={() => setShowExitConfirm(false)}>İptal</button>
          </div>
        </div>
      )}

      {/* Üstte küçük bir çıkış butonu (navigasyon barı olmadan) */}
      <div className="absolute top-4 right-4 z-40">
        <button onClick={() => setShowExitConfirm(true)} className="p-2 rounded-xl bg-red-50 text-error flex items-center gap-1 font-bold text-sm shadow-sm hover:scale-105 transition-transform">
          <span className="material-symbols-outlined text-sm">close</span> Çıkış
        </button>
      </div>

      <main className="flex-grow pt-12 pb-4 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full flex flex-col justify-center">
        {/* Progress Indicator */}
        <div className="mb-4 space-y-2">
          <div className="flex justify-between items-end">
            <div>
              <span className="font-label text-[10px] uppercase tracking-widest text-secondary font-bold">{topic.title}</span>
              <h1 className="text-xl font-headline font-extrabold text-on-surface">Soru {currentIndex + 1} / {maxQuestions}</h1>
            </div>
            {/* Skor / İstatistik yer tutucuları */}
            <div className="flex gap-2">
              <div className="bg-surface-container-low px-3 py-1 rounded-xl flex items-center gap-1">
                 <span className="material-symbols-outlined text-tertiary-fixed filled-icon text-[1rem]">bolt</span>
                 <span className="font-label text-xs font-bold">{currentIndex * 10}</span>
              </div>
            </div>
          </div>
          
          <div className="w-full h-2 bg-surface-container-high rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-primary to-primary-container transition-all duration-500" style={{ width: `${progressPercent}%` }}></div>
          </div>
        </div>

        {/* Jokerler Üstte */}
        <div className="flex gap-4 justify-center mb-6 z-40 relative">
          {/* Yarı Yarıya */}
          <button 
            onClick={useFiftyFifty}
            disabled={jokers.fiftyFifty || status === 'locked' || status === 'revealed'}
            className={`w-12 h-12 flex items-center justify-center rounded-xl transition-all active:scale-95 ${jokers.fiftyFifty ? 'bg-slate-100 text-slate-400 cursor-not-allowed' : 'bg-tertiary-container/10 text-tertiary-fixed hover:bg-tertiary-container/20'}`}
            title="Yarı Yarıya (İki şık eler)"
          >
            <div className="relative flex items-center justify-center">
              <span className="material-symbols-outlined filled-icon">lightbulb</span>
              {jokers.fiftyFifty && <span className="absolute text-red-500 font-bold text-lg mix-blend-multiply">X</span>}
            </div>
          </button>
          
          {/* Çift Cevap (2. Hak) */}
          <button 
             onClick={useSecondChance}
             disabled={jokers.secondChance || status === 'locked' || status === 'revealed'}
             className={`w-12 h-12 flex items-center justify-center rounded-xl transition-all active:scale-95 ${jokers.secondChance ? 'bg-slate-100 text-slate-400 cursor-not-allowed' : (activeSecondChance ? 'bg-rose-500 text-white' : 'bg-rose-100 text-rose-500 hover:bg-rose-200')}`}
             title="Çift Cevap (1 Yanlış hakkı)"
          >
            <div className="relative flex items-center justify-center">
              <span className="material-symbols-outlined filled-icon">favorite</span>
              {jokers.secondChance && !activeSecondChance && <span className="absolute text-red-500 font-bold text-lg mix-blend-multiply">X</span>}
            </div>
          </button>

          {/* Seyirci */}
          <button 
            onClick={useSeyirci}
            disabled={jokers.seyirci || status === 'locked' || status === 'revealed'}
            className={`w-12 h-12 flex items-center justify-center rounded-xl transition-all active:scale-95 ${jokers.seyirci ? 'bg-slate-100 text-slate-400 cursor-not-allowed' : 'bg-secondary-container/10 text-secondary hover:bg-secondary-container/20'}`}
            title="Seyirci Jokeri"
          >
            <div className="relative flex items-center justify-center">
              <span className="material-symbols-outlined">equalizer</span>
              {jokers.seyirci && <span className="absolute text-red-500 font-bold text-lg mix-blend-multiply">X</span>}
            </div>
          </button>
        </div>

        {/* Question Card */}
        <section className="bg-surface-container-lowest/80 backdrop-blur-xl rounded-2xl p-6 md:p-8 mb-6 shadow-xl shadow-slate-200/50 border border-white/50 relative overflow-hidden">
          {/* Soru kartı arkası hafif glow efekti */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl -mt-10 -mr-10"></div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-secondary-container text-secondary-dim rounded-full mb-4 shadow-sm">
            <span className="material-symbols-outlined text-[12px]">auto_awesome</span>
            <span className="font-label text-[10px] md:text-xs uppercase font-bold tracking-widest">Soru Metni</span>
          </div>
          <p className="text-xl md:text-3xl font-headline font-bold leading-tight md:leading-snug text-on-surface min-h-[80px] flex items-center relative z-10">
            {currentQ.questionText.split('değildir?').map((part, i, arr) => 
               i === arr.length - 1 && arr.length > 1 
                 ? <React.Fragment key={i}><span className="text-primary underline decoration-primary-container decoration-4 underline-offset-4">değildir?</span>{part}</React.Fragment>
                 : part
            )}
          </p>
        </section>

        {/* Options Grid (2x2 Structure) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 relative">
          
          {audienceData && (
             <div className="absolute -top-14 right-0 bg-white p-2 rounded-xl shadow-xl flex gap-4 z-10 border border-slate-100">
                {audienceData.map((pct, i) => !eliminatedOptions.includes(i) && (
                  <div key={i} className="flex flex-col items-center">
                     <div className="h-12 w-4 bg-slate-100 rounded-full flex items-end overflow-hidden">
                       <div className="w-full bg-secondary" style={{ height: `${pct}%` }}></div>
                     </div>
                     <span className="text-[10px] font-bold mt-1 text-slate-500">{letters[i]} %{pct}</span>
                  </div>
                ))}
             </div>
          )}

          {currentQ.options.map((opt, idx) => {
            const isEliminated = eliminatedOptions.includes(idx);
            
            // Gizlenen şıkların yapıyı bozmaması için `invisible` yapıyoruz
            let btnClass = "group flex items-center text-left px-4 py-5 md:py-6 md:px-6 rounded-2xl border-2 transition-all duration-300 shadow-sm hover:shadow-md ";
            let letterClass = "w-10 h-10 md:w-14 md:h-14 shrink-0 flex items-center justify-center rounded-2xl font-headline font-extrabold text-base md:text-xl mr-4 md:mr-5 transition-colors ";
            let textClass = "text-[14px] md:text-[17px] font-headline font-semibold leading-snug flex-grow ";
            let showCheck = false;
            let showCross = false;

            if (isEliminated) {
                return <div key={idx} className={btnClass + " opacity-0 pointer-events-none"} />;
            }
            
            const isSelected = selectedOption === idx;
            const isCorrect = idx === currentQ.correctAnswerIndex;

            if (status === 'revealed') {
               if (isCorrect) {
                  btnClass += "bg-green-100 border-green-500 ring-4 ring-green-100";
                  letterClass += "bg-green-500 text-white";
                  textClass += "text-green-800";
                  showCheck = true;
               } else if (isSelected) {
                  btnClass += "bg-red-100 border-red-500 ring-4 ring-red-100";
                  letterClass += "bg-red-500 text-white";
                  textClass += "text-red-800";
                  showCross = true;
               } else {
                  btnClass += "bg-surface-container-lowest border-transparent opacity-50";
                  letterClass += "bg-surface-container-low text-slate-400";
                  textClass += "text-slate-400";
               }
            } else if (isSelected) {
               if (status === 'locked') {
                 // Locked state = Koyu sarımsı, heyecan
                 btnClass += "bg-amber-100 border-amber-500 ring-4 ring-amber-100";
                 letterClass += "bg-amber-500 text-white";
                 textClass += "text-amber-800";
               } else {
                 // Selected but not confirmed yet
                 btnClass += "bg-primary/10 border-primary ring-4 ring-primary/5";
                 letterClass += "bg-primary text-white";
                 textClass += "text-primary";
               }
            } else {
               btnClass += "bg-surface-container-lowest hover:bg-primary/5 border-transparent cursor-pointer";
               letterClass += "bg-surface-container-low group-hover:bg-primary-container text-primary";
               textClass += "text-on-surface";
            }

            return (
              <button 
                key={idx} 
                className={btnClass}
                onClick={() => handleOptionClick(idx)}
                disabled={status === 'locked' || status === 'revealed'}
              >
                <div className={letterClass}>{letters[idx]}</div>
                <span className={textClass}>{opt}</span>
                {showCheck && <span className="material-symbols-outlined ml-1 text-green-600 filled-icon text-[20px] md:text-[24px]">check_circle</span>}
                {showCross && <span className="material-symbols-outlined ml-1 text-red-600 filled-icon text-[20px] md:text-[24px]">cancel</span>}
              </button>
            )
          })}
        </div>
      </main>
    </>
  );
}
