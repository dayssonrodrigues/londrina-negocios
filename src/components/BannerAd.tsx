import React from 'react';

export function BannerAd() {
  return (
    <div className="w-full max-w-[1250px] mx-auto px-4 sm:px-8 py-8 lg:py-12">
      <div className="bg-neutral-200 w-full h-[120px] sm:h-[150px] flex items-center justify-center text-neutral-500 font-poppins font-bold uppercase tracking-widest text-sm sm:text-base cursor-pointer hover:bg-neutral-300 transition-colors border border-neutral-300">
        Espaço Publicitário - Anuncie Aqui
      </div>
    </div>
  );
}
