import React from 'react';
import { AlertCircle, Home, Lightbulb, RefreshCcw, Trophy } from 'lucide-react';

export default function GameOverScreen({ result, onRestart, onHome }) {
  const isWin = result.win;

  return (
    <main className="flex-grow h-dvh max-h-dvh overflow-hidden pt-3 pb-4 px-3 sm:px-6 flex flex-col items-center justify-between max-w-2xl mx-auto w-full">
      <div className="w-full text-center mb-3 sm:mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700 mt-2 sm:mt-6">
        <div
          className={`mb-3 sm:mb-6 inline-flex items-center justify-center w-20 h-20 sm:w-32 sm:h-32 rounded-full ${isWin ? 'bg-success-container/20' : 'bg-error-container/20'} relative`}
        >
          <div className={`absolute inset-0 rounded-full border-[3px] sm:border-4 ${isWin ? 'border-primary/30' : 'border-error/30'} animate-ping`}></div>
          {isWin ? (
            <Trophy className="h-12 w-12 sm:h-16 sm:w-16 text-primary" />
          ) : (
            <AlertCircle className="h-12 w-12 sm:h-16 sm:w-16 text-error" />
          )}
        </div>

        <h1 className="font-headline font-extrabold text-3xl sm:text-5xl md:text-6xl tracking-tight text-on-surface mb-2 sm:mb-4">
          {isWin ? 'Tebrikler!' : 'Maalesef yandınız!'}
        </h1>

        <p className="text-on-surface-variant text-sm sm:text-lg max-w-md mx-auto">
          {isWin ? 'Tüm soruları başarıyla tamamladınız.' : 'Yanlış cevap nedeniyle bu tur burada sona erdi.'}
        </p>
      </div>

      <div className="grid grid-cols-2 gap-2 sm:gap-4 w-full mb-3 sm:mb-6">
        <div className="bg-surface-container-lowest p-3 sm:p-6 rounded-xl flex flex-col items-center justify-center border-b-4 border-secondary/20">
          <span className="font-label text-[10px] sm:text-xs uppercase tracking-[0.18em] sm:tracking-widest text-secondary mb-1 text-center">
            Doğru Sayısı
          </span>
          <span className="font-headline font-extrabold text-2xl sm:text-4xl text-on-surface">
            {isWin ? result.total : result.score}
          </span>
        </div>

        <div className="bg-surface-container-lowest p-3 sm:p-6 rounded-xl flex flex-col items-center justify-center border-b-4 border-primary/20">
          <span className="font-label text-[10px] sm:text-xs uppercase tracking-[0.18em] sm:tracking-widest text-primary mb-1 text-center">
            Toplam Soru
          </span>
          <span className="font-headline font-extrabold text-2xl sm:text-4xl text-on-surface">{result.total}</span>
        </div>
      </div>

      {!isWin && result.correctAnswer && (
        <div className="w-full bg-tertiary-container/10 p-3 sm:p-8 rounded-xl border-l-[6px] sm:border-l-8 border-tertiary mb-3 sm:mb-8">
          <div className="flex items-start gap-2 sm:gap-4">
            <Lightbulb className="h-5 w-5 sm:h-6 sm:w-6 text-tertiary mt-0.5 sm:mt-1" />
            <div>
              <span className="font-label text-[10px] sm:text-sm text-tertiary font-extrabold block mb-1 sm:mb-2 tracking-wide uppercase">
                Kaçırdığınız Doğru Cevap
              </span>
              <h2 className="font-headline font-extrabold text-base sm:text-2xl text-on-tertiary-container tracking-tight leading-snug">
                {result.correctAnswer}
              </h2>
            </div>
          </div>
        </div>
      )}

      <div className="w-full flex flex-col gap-2 sm:gap-4 mb-0 sm:mb-10">
        <button
          onClick={onRestart}
          className="w-full py-3.5 sm:py-5 rounded-xl bg-gradient-to-br from-primary to-primary-container text-on-primary font-headline font-bold text-base sm:text-lg shadow-xl shadow-primary/20 active:scale-[0.98] transition-transform flex items-center justify-center gap-2 sm:gap-3"
        >
          <RefreshCcw className="h-5 w-5" />
          Hemen Yeniden Oyna
        </button>

        <button
          onClick={onHome}
          className="w-full py-3.5 sm:py-5 rounded-xl border-2 border-outline-variant/30 text-secondary font-headline font-bold text-base sm:text-lg hover:bg-surface-container-low transition-colors active:scale-[0.98] flex items-center justify-center gap-2 sm:gap-3"
        >
          <Home className="h-5 w-5" />
          Konu Seçimine Dön
        </button>
      </div>

      <footer className="hidden sm:block text-center px-4">
        <p className="font-label text-sm italic text-violet-600 dark:text-violet-400 font-bold leading-relaxed max-w-sm mx-auto">
          {isWin
            ? '"Başarı, doğru bilgiyi doğru anda kullanabilmektir."'
            : '"Her yanlış cevap, bir sonraki doğruya açılan kapıdır."'}
        </p>
      </footer>
    </main>
  );
}
