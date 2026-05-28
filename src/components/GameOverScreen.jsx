import React from 'react';
import { AlertCircle, Home, Lightbulb, RefreshCcw, Trophy } from 'lucide-react';

export default function GameOverScreen({ result, onRestart, onHome }) {
  const correctCount = result.correctCount || 0;
  const total = result.total || 15;
  const score = Math.round((correctCount / total) * 100);
  const wrongCount = total - correctCount;

  let title = "Daha Çok Çalışmalısın! 📚";
  let description = "Konu tekrarlarını artırıp daha fazla test çözmek netlerinizi yükseltecektir.";
  let badgeClass = "bg-error-container/20 border-error/30 text-error";
  let iconComponent = <AlertCircle className="h-12 w-12 sm:h-16 sm:w-16 text-error" />;

  if (score >= 85) {
    title = "Mükemmel Başarı! 🏆";
    description = "Tarih konularına son derece hakimsiniz. Harika bir derece!";
    badgeClass = "bg-success-container/20 border-primary/30 text-primary";
    iconComponent = <Trophy className="h-12 w-12 sm:h-16 sm:w-16 text-primary" />;
  } else if (score >= 50) {
    title = "Güzel Deneme! 👍";
    description = "Konulara oldukça aşinasınız, eksikleri kapatarak daha yüksek puan alabilirsiniz.";
    badgeClass = "bg-secondary-container/25 border-secondary/30 text-secondary";
    iconComponent = <Lightbulb className="h-12 w-12 sm:h-16 sm:w-16 text-secondary" />;
  }

  return (
    <main className="flex-grow h-dvh max-h-dvh overflow-hidden pt-3 pb-4 px-3 sm:px-6 flex flex-col items-center justify-between max-w-2xl mx-auto w-full">
      <div className="w-full text-center mb-3 sm:mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700 mt-2 sm:mt-6">
        <div
          className={`mb-3 sm:mb-6 inline-flex items-center justify-center w-20 h-20 sm:w-32 sm:h-32 rounded-full ${badgeClass} relative`}
        >
          <div className="absolute inset-0 rounded-full border-[3px] sm:border-4 border-current opacity-30 animate-ping"></div>
          {iconComponent}
        </div>

        <h1 className="font-headline font-extrabold text-3xl sm:text-5xl md:text-6xl tracking-tight text-on-surface mb-2 sm:mb-4">
          {title}
        </h1>

        <p className="text-on-surface-variant text-sm sm:text-lg max-w-md mx-auto">
          {description}
        </p>
      </div>

      <div className="w-full flex flex-col gap-3 mb-3 sm:mb-6">
        <div className="bg-surface-container-lowest p-4 sm:p-6 rounded-xl flex flex-col items-center justify-center border-b-4 border-primary/20 shadow-sm">
          <span className="font-label text-[10px] sm:text-xs uppercase tracking-[0.18em] text-primary mb-1 font-bold">
            Başarı Puanı
          </span>
          <span className="font-headline font-extrabold text-4xl sm:text-5xl text-on-surface">
            {score} / 100
          </span>
        </div>

        <div className="grid grid-cols-2 gap-2 sm:gap-4 w-full">
          <div className="bg-surface-container-lowest p-3 sm:p-5 rounded-xl flex flex-col items-center justify-center border-b-4 border-emerald-500/20 shadow-sm">
            <span className="font-label text-[10px] sm:text-xs uppercase tracking-[0.18em] text-emerald-600 mb-1 font-bold">
              Doğru Sayısı
            </span>
            <span className="font-headline font-extrabold text-2xl sm:text-3xl text-emerald-600">
              {correctCount}
            </span>
          </div>

          <div className="bg-surface-container-lowest p-3 sm:p-5 rounded-xl flex flex-col items-center justify-center border-b-4 border-rose-500/20 shadow-sm">
            <span className="font-label text-[10px] sm:text-xs uppercase tracking-[0.18em] text-rose-500 mb-1 font-bold">
              Yanlış Sayısı
            </span>
            <span className="font-headline font-extrabold text-2xl sm:text-3xl text-rose-500">
              {wrongCount}
            </span>
          </div>
        </div>
      </div>

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
          {score >= 50
            ? '"Başarı, doğru bilgiyi doğru anda kullanabilmektir."'
            : '"Her yanlış cevap, bir sonraki doğruya açılan kapıdır."'}
        </p>
      </footer>
    </main>
  );
}
