import React from 'react';

export default function GameOverScreen({ result, onRestart, onHome }) {
  const isWin = result.win;

  return (
    <>
      <main className="flex-grow pt-12 pb-32 px-6 flex flex-col items-center justify-center max-w-2xl mx-auto w-full min-h-screen">
        
        {/* Result Hero Section */}
        <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700 mt-10">
          <div className={`mb-8 inline-flex items-center justify-center w-32 h-32 rounded-full ${isWin ? 'bg-success-container/20' : 'bg-error-container/20'} relative`}>
            <div className={`absolute inset-0 rounded-full border-4 ${isWin ? 'border-primary/30' : 'border-error/30'} animate-ping`}></div>
            <span className={`material-symbols-outlined ${isWin ? 'text-primary' : 'text-error'} text-7xl`} style={{fontVariationSettings: "'FILL' 1"}}>
               {isWin ? 'emoji_events' : 'heart_broken'}
            </span>
          </div>
          <h1 className="font-headline font-extrabold text-5xl md:text-6xl tracking-tight text-on-surface mb-4">
            {isWin ? 'Tebrikler!' : 'Maalesef Yandınız!'}
          </h1>
          <p className="text-on-surface-variant text-lg">
            {isWin ? 'Tüm soruları mükemmel bir şekilde tamamladınız.' : 'Hatalı cevap verdiniz ve yolculuğunuz burada bitti.'}
          </p>
        </div>

        {/* Bento Stats Grid */}
        <div className="grid grid-cols-2 gap-4 w-full mb-6">
          <div className="bg-surface-container-lowest p-6 rounded-xl flex flex-col items-center justify-center border-b-4 border-secondary/20">
            <span className="font-label text-xs uppercase tracking-widest text-secondary mb-1">DOĞRU SAYISI</span>
            <span className="font-headline font-extrabold text-4xl text-on-surface">{isWin ? result.total : result.score}</span>
          </div>
          <div className="bg-surface-container-lowest p-6 rounded-xl flex flex-col items-center justify-center border-b-4 border-primary/20">
            <span className="font-label text-xs uppercase tracking-widest text-primary mb-1">TOPLAM SORU</span>
            <span className="font-headline font-extrabold text-4xl text-on-surface">{result.total}</span>
          </div>
        </div>

        {/* Missed Answer Highlight */}
        {!isWin && result.correctAnswer && (
          <div className="w-full bg-tertiary-container/10 p-8 rounded-xl border-l-8 border-tertiary mb-12">
            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-tertiary mt-1" style={{fontVariationSettings: "'FILL' 1"}}>lightbulb</span>
              <div>
                <span className="font-label text-sm text-tertiary font-extrabold block mb-2 tracking-wide uppercase">KAÇIRDIĞINIZ DOĞRU CEVAP</span>
                <h2 className="font-headline font-extrabold text-2xl text-on-tertiary-container tracking-tight">{result.correctAnswer}</h2>
              </div>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="w-full flex flex-col gap-4 mb-16">
          <button onClick={onRestart} className="w-full py-5 rounded-xl bg-gradient-to-br from-primary to-primary-container text-on-primary font-headline font-bold text-lg shadow-xl shadow-primary/20 active:scale-[0.98] transition-transform flex items-center justify-center gap-3">
            <span className="material-symbols-outlined">replay</span>
            Hemen Yeniden Oyna
          </button>
          <button onClick={onHome} className="w-full py-5 rounded-xl border-2 border-outline-variant/30 text-secondary font-headline font-bold text-lg hover:bg-surface-container-low transition-colors active:scale-[0.98] flex items-center justify-center gap-3">
            <span className="material-symbols-outlined">category</span>
            Konu Seçimine Dön
          </button>
        </div>

        {/* Inspiring Quote */}
        <footer className="text-center px-4">
          <p className="font-label text-sm italic text-violet-600 dark:text-violet-400 font-bold leading-relaxed max-w-sm mx-auto">
            {isWin ? '"Başarının sırrı, doğru zamanda doğru bilgiyi kullanmaktır."' : '"Zayıf yönlerini bilmek, bilgeliğin ilk adımıdır. Her hata, daha güçlü bir dönüş için fırsattır."'}
          </p>
        </footer>
      </main>
    </>
  );
}
