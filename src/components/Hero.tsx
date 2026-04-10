import React from 'react';

export default function Hero({ onOpenModal }: { onOpenModal: () => void }) {
  return (
    <section className="py-24 bg-gradient-to-r from-white to-[#EFF6FF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-16 items-center">
        <div className="text-left">
          <h1 className="text-5xl md:text-6xl font-extrabold text-[#111827] tracking-[-0.5px] leading-[1.1] mb-8">
            <span className="block font-extrabold">Наносим логотипы</span>
            <span className="block font-extrabold">на одежду, которые</span>
            <span className="block font-semibold text-[#111827]">не стираются</span>
          </h1>
          <p className="text-xl text-[#6B7280] font-normal mb-10 leading-relaxed">
            Быстро печатаем на вашей форме или подскажем, что лучше подойдет для вашего бизнеса.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 mb-10">
            <button 
              onClick={onOpenModal} 
              className="bg-gradient-to-b from-[#2563EB] to-[#1D4ED8] text-white px-10 py-5 rounded-2xl font-semibold text-lg hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40"
            >
              Получить расчет
            </button>
          </div>
          <div className="flex flex-wrap gap-4 text-sm font-medium text-[#F97316]">
            <span className="flex items-center gap-2 bg-[#FFF7ED] px-4 py-2 rounded-full border border-orange-300">⚡ Работаем от 1 дня</span>
            <span className="flex items-center gap-2 bg-[#FFF7ED] px-4 py-2 rounded-full border border-orange-300">⚡ Не стирается</span>
            <span className="flex items-center gap-2 bg-[#FFF7ED] px-4 py-2 rounded-full border border-orange-300">⚡ Под бизнес</span>
          </div>
        </div>
        <div className="relative">
          <img 
            src="https://picsum.photos/seed/workwear/800/600" 
            alt="Сотрудник в брендированной форме" 
            className="rounded-3xl shadow-2xl shadow-slate-200/50"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-blue-600/10 rounded-3xl pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
}
