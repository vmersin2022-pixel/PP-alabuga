import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

export default function Header({ onOpenModal }: { onOpenModal: () => void }) {
  return (
    <header className="sticky top-4 z-50 px-4">
      <div className="max-w-6xl mx-auto bg-white/80 backdrop-blur-xl border border-slate-100 rounded-3xl h-20 flex items-center justify-between px-4 sm:px-6 shadow-lg shadow-slate-200/50">
        <div className="text-xl sm:text-2xl font-extrabold text-primary">Print Project</div>
        
        {/* Mobile Telegram Button */}
        <div className="md:hidden flex items-center">
          <a href="https://t.me/printproject_elabuga_bot?start=header" target="_blank" rel="noopener noreferrer" className="bg-[#2AABEE] text-white px-4 py-2 rounded-xl font-bold hover:bg-[#229ED9] transition shadow-md flex items-center gap-2 text-sm">
            <MessageCircle className="w-4 h-4" />
            В Telegram
          </a>
        </div>

        <div className="hidden md:flex items-center space-x-6">
          <a href="#services" className="text-text-muted hover:text-primary font-medium">Услуги</a>
          <a href="#b2b" className="text-text-muted hover:text-primary font-medium">Для бизнеса</a>
          <div className="flex flex-col items-end text-sm">
            <a href="tel:+79518906436" className="flex items-center text-text-main font-semibold hover:text-primary">
              <Phone className="w-3.5 h-3.5 mr-1.5" /> +7 (951) 890-64-36
            </a>
            <a href="tel:+79656212493" className="flex items-center text-text-main font-semibold hover:text-primary">
              <Phone className="w-3.5 h-3.5 mr-1.5" /> +7 (965) 621-24-93
            </a>
          </div>
          <div className="flex items-center gap-3">
            <button onClick={onOpenModal} className="bg-primary text-white px-5 py-3 rounded-2xl font-semibold hover:bg-blue-700 transition shadow-md">
              Рассчитать
            </button>
            <a href="https://t.me/printproject_elabuga_bot?start=header" target="_blank" rel="noopener noreferrer" className="bg-[#2AABEE] text-white px-5 py-3 rounded-2xl font-semibold hover:bg-[#229ED9] transition shadow-md flex items-center gap-2">
              <MessageCircle className="w-5 h-5" />
              Рассчитать в Telegram
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
