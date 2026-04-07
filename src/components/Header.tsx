import React from 'react';
import { Phone } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-4 z-50 px-4">
      <div className="max-w-5xl mx-auto bg-white/80 backdrop-blur-xl border border-slate-100 rounded-3xl h-20 flex items-center justify-between px-6 shadow-sm">
        <div className="text-2xl font-extrabold text-blue-600">Print Project</div>
        <div className="hidden md:flex items-center space-x-8">
          <a href="#services" className="text-slate-600 hover:text-blue-600 font-medium">Услуги</a>
          <a href="#b2b" className="text-slate-600 hover:text-blue-600 font-medium">Для бизнеса</a>
          <div className="flex flex-col items-end text-sm">
            <a href="tel:+79518906436" className="flex items-center text-slate-900 font-semibold hover:text-blue-600">
              <Phone className="w-3.5 h-3.5 mr-1.5" /> +7 (951) 890-64-36
            </a>
            <a href="tel:+79656212493" className="flex items-center text-slate-900 font-semibold hover:text-blue-600">
              <Phone className="w-3.5 h-3.5 mr-1.5" /> +7 (965) 621-24-93
            </a>
          </div>
          <a href="https://t.me/printproject_elabuga_bot?start=raschet" target="_blank" rel="noopener noreferrer" className="bg-slate-900 text-white px-6 py-3 rounded-2xl font-semibold hover:bg-slate-800 transition shadow-md">
            Рассчитать
          </a>
        </div>
      </div>
    </header>
  );
}
