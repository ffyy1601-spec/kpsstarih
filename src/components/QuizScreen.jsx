import React, { useEffect, useState } from 'react';
import { CheckCircle2, Home, Sparkles, Users, X, XCircle } from 'lucide-react';
import { kpssData } from '../data/questions';

export default function QuizScreen({ topicId, onBack, onHome, onGameOver }) {
  const isMixed = topicId === 'all';
  const topic = isMixed ? { title: 'Karışık Sorular (Tüm Konular)' } : kpssData.find((t) => t.id === topicId);

  const shuffleQuestions = (questionList) => [...questionList].sort(() => 0.5 - Math.random());

  const [questions] = useState(() => {
    if (isMixed) {
      const allQ = kpssData.flatMap((t) => t.questions || []);
      return shuffleQuestions(allQ).slice(0, 20);
    }
    return topic ? shuffleQuestions(topic.questions || []) : [];
  });

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
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

  useEffect(() => {
    const guardState = { quizGuard: true, topicId };
    window.history.pushState(guardState, '', window.location.href);

    const handlePopState = () => {
      setShowExitConfirm(true);
      window.history.pushState(guardState, '', window.location.href);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [topicId]);

  if (!questions || questions.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h2 className="text-2xl font-bold font-headline mb-4">Bu konu için henüz soru eklenmemiş.</h2>
        <button className="bg-primary text-white px-6 py-2 rounded-xl" onClick={onBack}>
          Geri Dön
        </button>
      </div>
    );
  }

  const currentQ = questions[currentIndex];
  const maxQuestions = questions.length;

  const handleOptionClick = (index) => {
    if (status === 'locked' || status === 'revealed' || eliminatedOptions.includes(index)) return;

    setSelectedOption(index);
    setStatus('locked');

    setTimeout(() => {
      setStatus('revealed');
      const isCorrect = index === currentQ.correctAnswerIndex;

      setTimeout(() => {
        if (isCorrect) {
          if (currentIndex + 1 < questions.length) {
            setCurrentIndex((prev) => prev + 1);
            setSelectedOption(null);
            setStatus('idle');
            setEliminatedOptions([]);
            setActiveSecondChance(false);
          } else {
            onGameOver({ score: currentIndex + 1, total: questions.length, win: true });
          }
        } else if (activeSecondChance) {
          setEliminatedOptions((prev) => [...prev, index]);
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
      }, 2000);
    }, 2000);
  };

  const useFiftyFifty = () => {
    if (jokers.fiftyFifty || status === 'locked' || status === 'revealed') return;
    const correctIdx = currentQ.correctAnswerIndex;
    const available = [0, 1, 2, 3].filter((i) => i !== correctIdx && !eliminatedOptions.includes(i));
    const toEl = [];

    if (available.length >= 2) {
      toEl.push(available.splice(Math.floor(Math.random() * available.length), 1)[0]);
      toEl.push(available.splice(Math.floor(Math.random() * available.length), 1)[0]);
    }

    setEliminatedOptions((prev) => [...prev, ...toEl]);
    setJokers((prev) => ({ ...prev, fiftyFifty: true }));
  };

  const useSeyirci = () => {
    if (jokers.seyirci || status === 'locked' || status === 'revealed') return;
    setJokers((prev) => ({ ...prev, seyirci: true }));

    const data = [0, 0, 0, 0];
    const correctIdx = currentQ.correctAnswerIndex;
    let remaining = 100;
    data[correctIdx] = Math.floor(Math.random() * 20) + 50;
    remaining -= data[correctIdx];

    const available = [0, 1, 2, 3].filter((i) => i !== correctIdx && !eliminatedOptions.includes(i));
    available.forEach((idx, i) => {
      if (i === available.length - 1) {
        data[idx] = remaining;
      } else {
        const value = Math.floor(Math.random() * remaining);
        data[idx] = value;
        remaining -= value;
      }
    });

    setAudienceData(data);
    setTimeout(() => setAudienceData(null), 5000);
  };

  const useSecondChance = () => {
    if (jokers.secondChance || status === 'locked' || status === 'revealed') return;
    setJokers((prev) => ({ ...prev, secondChance: true }));
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
            <button className="bg-error text-white px-8 py-3 rounded-xl font-bold" onClick={() => onBack()}>
              Evet, Çık
            </button>
            <button className="bg-surface-container-low text-on-surface px-8 py-3 rounded-xl font-bold" onClick={() => setShowExitConfirm(false)}>
              İptal
            </button>
          </div>
        </div>
      )}

      <main className="flex-grow h-dvh max-h-dvh overflow-hidden pt-1.5 pb-1.5 px-2 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full flex flex-col justify-start bg-transparent">
        <section className="mb-1.5 shrink-0 rounded-[20px] border border-white/60 bg-surface-container-lowest/88 p-1.5 sm:p-2 shadow-[0_12px_30px_rgba(148,163,184,0.12)] backdrop-blur-xl">
          <div className="mb-1 flex items-center justify-between gap-2">
            <div className="flex items-center gap-1.5">
              <button
                onClick={() => setShowExitConfirm(true)}
                className="flex h-8 w-8 items-center justify-center rounded-2xl bg-surface-container-low text-on-surface shadow-sm transition-transform hover:scale-105"
                aria-label="Çıkış"
              >
                <X className="h-4 w-4" />
              </button>

              <button
                onClick={onHome}
                className="flex h-8 w-8 items-center justify-center rounded-2xl bg-surface-container-low text-secondary shadow-sm transition-transform hover:scale-105"
                aria-label="Ana Sayfa"
              >
                <Home className="h-4 w-4" />
              </button>
            </div>

            <div className="min-w-0 flex-1 text-right">
              <div className="text-[9px] font-black uppercase tracking-[0.22em] text-secondary">
                Soru {currentIndex + 1} / {maxQuestions}
              </div>
              <div className="mt-0.5 truncate text-[0.86rem] sm:text-[0.98rem] font-headline font-extrabold text-on-surface">{topic.title}</div>
            </div>
          </div>

          <div className="mb-1 flex items-center justify-between gap-2">
            <div className="inline-flex items-center rounded-full border border-primary/15 bg-primary/5 px-2 py-0.5 text-primary shadow-sm">
              <span className="font-headline text-[0.82rem] sm:text-[0.95rem] font-extrabold">Skor: {currentIndex * 10}</span>
            </div>
            <div className="text-right text-[9px] font-semibold tracking-wide text-on-surface-variant">
              {isMixed ? 'Karışık Mod' : 'Konu Modu'}
            </div>
          </div>

          <div className="mb-1 flex gap-1">
            {questions.map((_, idx) => (
              <span key={idx} className={`h-1 flex-1 rounded-full ${idx <= currentIndex ? 'bg-primary' : 'bg-surface-container-high'}`} />
            ))}
          </div>

          <div className="grid grid-cols-3 gap-1">
            <button
              onClick={useFiftyFifty}
              disabled={jokers.fiftyFifty || status === 'locked' || status === 'revealed'}
              className={`flex h-[31px] sm:h-[40px] items-center justify-center rounded-[14px] border transition-all active:scale-95 ${jokers.fiftyFifty ? 'bg-slate-100 text-slate-400 border-slate-200 cursor-not-allowed' : 'bg-amber-50 text-amber-500 border-amber-100 hover:bg-amber-100'}`}
              title="Yarı Yarıya (İki şıkkı eler)"
            >
              <div className="relative flex items-center justify-center">
                <span className="text-[15px] sm:text-[17px] font-extrabold">2</span>
                {jokers.fiftyFifty && <span className="absolute text-red-500 font-bold text-lg mix-blend-multiply">X</span>}
              </div>
            </button>

            <button
              onClick={useSecondChance}
              disabled={jokers.secondChance || status === 'locked' || status === 'revealed'}
              className={`flex h-[31px] sm:h-[40px] items-center justify-center rounded-[14px] border transition-all active:scale-95 ${jokers.secondChance ? 'bg-slate-100 text-slate-400 border-slate-200 cursor-not-allowed' : activeSecondChance ? 'bg-rose-500 text-white border-rose-500' : 'bg-rose-50 text-rose-500 border-rose-100 hover:bg-rose-100'}`}
              title="Çift Cevap (1 yanlış hakkı)"
            >
              <div className="relative flex items-center justify-center">
                <span className="text-[15px] sm:text-[17px] font-extrabold">+2</span>
                {jokers.secondChance && !activeSecondChance && <span className="absolute text-red-500 font-bold text-lg mix-blend-multiply">X</span>}
              </div>
            </button>

            <button
              onClick={useSeyirci}
              disabled={jokers.seyirci || status === 'locked' || status === 'revealed'}
              className={`flex h-[31px] sm:h-[40px] items-center justify-center rounded-[14px] border transition-all active:scale-95 ${jokers.seyirci ? 'bg-slate-100 text-slate-400 border-slate-200 cursor-not-allowed' : 'bg-sky-50 text-secondary border-sky-100 hover:bg-sky-100'}`}
              title="Seyirci Jokeri"
            >
              <div className="relative flex items-center justify-center">
                <Users className="h-4 w-4 sm:h-5 sm:w-5" />
                {jokers.seyirci && <span className="absolute text-red-500 font-bold text-lg mix-blend-multiply">X</span>}
              </div>
            </button>
          </div>
        </section>

        <section className="bg-surface-container-lowest/85 backdrop-blur-xl rounded-[22px] p-2.5 sm:p-5 md:p-8 mb-1.5 sm:mb-4 shadow-[0_16px_38px_rgba(148,163,184,0.14)] border border-white/60 relative overflow-hidden shrink-0">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl -mt-10 -mr-10"></div>
          <div className="inline-flex items-center gap-1 px-2 py-0.5 bg-secondary-container text-secondary-dim rounded-full mb-1 sm:mb-4 shadow-sm">
            <Sparkles className="h-3 w-3" />
            <span className="font-label text-[9px] md:text-xs uppercase font-bold tracking-[0.18em]">Soru Metni</span>
          </div>
          <p className="text-[0.86rem] sm:text-lg md:text-3xl font-headline font-bold leading-snug md:leading-snug text-on-surface min-h-0 max-h-[15dvh] sm:max-h-none overflow-y-auto pr-1 relative z-10">
            {currentQ.questionText.split('değildir?').map((part, i, arr) =>
              i === arr.length - 1 && arr.length > 1 ? (
                <React.Fragment key={i}>
                  <span className="text-primary underline decoration-primary-container decoration-4 underline-offset-4">değildir?</span>
                  {part}
                </React.Fragment>
              ) : (
                part
              )
            )}
          </p>
        </section>

        <div className="grid flex-1 min-h-0 grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-4 relative content-start">
          {audienceData && (
            <div className="absolute left-1/2 -translate-x-1/2 -top-12 sm:left-auto sm:right-0 sm:translate-x-0 bg-white p-2 rounded-xl shadow-xl flex gap-3 z-10 border border-slate-100">
              {audienceData.map(
                (pct, i) =>
                  !eliminatedOptions.includes(i) && (
                    <div key={i} className="flex flex-col items-center">
                      <div className="h-12 w-4 bg-slate-100 rounded-full flex items-end overflow-hidden">
                        <div className="w-full bg-secondary" style={{ height: `${pct}%` }}></div>
                      </div>
                      <span className="text-[10px] font-bold mt-1 text-slate-500">
                        {letters[i]} %{pct}
                      </span>
                    </div>
                  )
              )}
            </div>
          )}

          {currentQ.options.map((opt, idx) => {
            const isEliminated = eliminatedOptions.includes(idx);
            let btnClass =
              'group min-h-[56px] sm:min-h-[104px] flex items-center text-left px-2.5 py-2 sm:px-4 sm:py-4 md:py-6 md:px-6 rounded-[18px] border-2 transition-all duration-300 shadow-sm hover:shadow-md ';
            let letterClass =
              'w-7 h-7 sm:w-10 sm:h-10 md:w-14 md:h-14 shrink-0 flex items-center justify-center rounded-xl font-headline font-extrabold text-[13px] sm:text-base md:text-xl mr-2 sm:mr-4 md:mr-5 transition-colors ';
            let textClass = 'text-[10px] sm:text-[13px] md:text-[17px] font-headline font-semibold leading-snug flex-grow ';
            let showCheck = false;
            let showCross = false;

            if (isEliminated) {
              return <div key={idx} className={`${btnClass} opacity-0 pointer-events-none`} />;
            }

            const isSelected = selectedOption === idx;
            const isCorrect = idx === currentQ.correctAnswerIndex;

            if (status === 'revealed') {
              if (isCorrect) {
                btnClass += 'bg-green-100 border-green-500 ring-4 ring-green-100';
                letterClass += 'bg-green-500 text-white';
                textClass += 'text-green-800';
                showCheck = true;
              } else if (isSelected) {
                btnClass += 'bg-red-100 border-red-500 ring-4 ring-red-100';
                letterClass += 'bg-red-500 text-white';
                textClass += 'text-red-800';
                showCross = true;
              } else {
                btnClass += 'bg-surface-container-lowest border-transparent opacity-50';
                letterClass += 'bg-surface-container-low text-slate-400';
                textClass += 'text-slate-400';
              }
            } else if (isSelected) {
              if (status === 'locked') {
                btnClass += 'bg-amber-100 border-amber-500 ring-4 ring-amber-100';
                letterClass += 'bg-amber-500 text-white';
                textClass += 'text-amber-800';
              } else {
                btnClass += 'bg-primary/10 border-primary ring-4 ring-primary/5';
                letterClass += 'bg-primary text-white';
                textClass += 'text-primary';
              }
            } else {
              btnClass += 'bg-surface-container-lowest hover:bg-primary/5 border-transparent cursor-pointer';
              letterClass += 'bg-surface-container-low group-hover:bg-primary-container text-primary';
              textClass += 'text-on-surface';
            }

            return (
              <button key={idx} className={btnClass} onClick={() => handleOptionClick(idx)} disabled={status === 'locked' || status === 'revealed'}>
                <div className={letterClass}>{letters[idx]}</div>
                <span className={textClass}>{opt}</span>
                {showCheck && <CheckCircle2 className="ml-1 h-5 w-5 md:h-6 md:w-6 text-emerald-500" />}
                {showCross && <XCircle className="ml-1 h-5 w-5 md:h-6 md:w-6 text-rose-500" />}
              </button>
            );
          })}
        </div>
      </main>
    </>
  );
}
