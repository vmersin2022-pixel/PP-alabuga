import React from 'react';
import { MessageCircle, Zap } from 'lucide-react';
import { getProxyImageUrl } from '../lib/imageUtils';

export default function Hero({ onOpenModal }: { onOpenModal: () => void }) {
  return (
    <section className="relative py-8 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-16 items-center">
        <div className="text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#111827] tracking-[-0.5px] leading-[1.1] mb-8">
            <span className="block font-extrabold">Наносим логотипы</span>
            <span className="block font-extrabold">на одежду, которые</span>
            <span className="block font-semibold text-[#111827]">не стираются</span>
          </h1>
          <p className="text-xl text-[#6B7280] font-normal mb-10 leading-relaxed">
            Быстро печатаем на вашей форме или подскажем, что лучше подойдет для вашего бизнеса.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="flex flex-col gap-1">
              <button 
                onClick={onOpenModal} 
                className="bg-gradient-to-br from-[#2563EB] to-[#4F46E5] text-white px-10 py-5 rounded-2xl font-semibold text-lg hover:-translate-y-1 transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_40px_rgba(37,99,235,0.7)]"
              >
                Получить расчет
              </button>
              <span className="text-xs text-[#6B7280] text-center mt-1">Ответим за 10–15 минут</span>
            </div>
            <div className="flex flex-col gap-1">
              <a 
                href="https://t.me/PrintProject16" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-white text-slate-900 border-2 border-slate-200 px-10 py-5 rounded-2xl font-semibold text-lg hover:-translate-y-1 transition-all duration-300 hover:border-blue-500 hover:bg-slate-50 shadow-sm hover:shadow-[0_0_20px_rgba(37,99,235,0.2)]"
              >
                <MessageCircle className="w-5 h-5" />
                В Telegram
              </a>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 text-sm font-medium text-[#F97316]">
            {[
              { text: 'Работаем от 1 дня', icon: Zap },
              { text: 'Не стирается', icon: Zap },
              { text: 'Под бизнес', icon: Zap }
            ].map((badge, i) => (
              <span key={i} className="group flex items-center gap-2 bg-[#FFF7ED] px-4 py-2 rounded-full border border-orange-300 hover:border-orange-400 hover:shadow-[0_0_15px_rgba(249,115,22,0.2)] transition-all duration-300">
                <badge.icon className="w-4 h-4" /> {badge.text}
              </span>
            ))}
          </div>
        </div>
        
        <div className="relative">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-slate-200/50">
            <img 
              src={getProxyImageUrl("https://i.postimg.cc/mDX38RWq/Odezda-brendirovannaa-logotipom-Print-Project.png")} 
              alt="Сотрудник в брендированной форме" 
              className="w-full h-auto"
              referrerPolicy="origin-when-cross-origin"
            />
            {/* Photo Enhancements: Gradient & Blur */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            <div className="absolute inset-0 border-[1px] border-white/20 rounded-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
