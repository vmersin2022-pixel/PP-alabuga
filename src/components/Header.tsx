import React, { useState } from 'react';
import { Phone, MessageCircle, Menu, X } from 'lucide-react';

export default function Header({ onOpenModal }: { onOpenModal: () => void }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '#services', label: 'Услуги' },
    { href: '#b2b', label: 'Для бизнеса' },
  ];

  return (
    <header className="sticky top-4 z-50 px-4">
      <div className="max-w-6xl mx-auto bg-white/80 backdrop-blur-xl border border-slate-100 rounded-3xl h-20 flex items-center justify-between px-4 sm:px-6 shadow-lg shadow-slate-200/50">
        <button 
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setIsMenuOpen(false);
          }}
          className="text-xl sm:text-2xl font-extrabold text-primary cursor-pointer hover:opacity-80 transition-opacity"
        >
          Print Project
        </button>
        
        {/* Mobile Actions */}
        <div className="md:hidden flex items-center gap-2">
          <a href="https://t.me/PrintProject16" target="_blank" rel="noopener noreferrer" className="bg-[#2AABEE] text-white p-2.5 rounded-xl font-bold hover:bg-[#229ED9] transition shadow-md flex items-center gap-2 text-sm">
            <MessageCircle className="w-5 h-5" />
          </a>
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2.5 bg-slate-100 rounded-xl text-slate-900 hover:bg-slate-200 transition"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-text-muted hover:text-primary font-medium transition-colors">
              {link.label}
            </a>
          ))}
          <div className="flex flex-col items-end text-sm">
            <a href="tel:+79518906436" className="flex items-center text-text-main font-semibold hover:text-primary transition-colors">
              <Phone className="w-3.5 h-3.5 mr-1.5" /> +7 (951) 890-64-36
            </a>
            <a href="tel:+79656212493" className="flex items-center text-text-main font-semibold hover:text-primary transition-colors">
              <Phone className="w-3.5 h-3.5 mr-1.5" /> +7 (965) 621-24-93
            </a>
          </div>
          <div className="flex items-center gap-3">
            <button onClick={onOpenModal} className="bg-primary text-white px-5 py-3 rounded-2xl font-semibold hover:bg-blue-700 transition shadow-md">
              Рассчитать
            </button>
            <a href="https://t.me/PrintProject16" target="_blank" rel="noopener noreferrer" className="bg-[#2AABEE] text-white px-5 py-3 rounded-2xl font-semibold hover:bg-[#229ED9] transition shadow-md flex items-center gap-2">
              <MessageCircle className="w-5 h-5" />
              Рассчитать в Telegram
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-24 left-4 right-4 bg-white/95 backdrop-blur-xl border border-slate-100 rounded-3xl p-6 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-300">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a 
                key={link.href} 
                href={link.href} 
                onClick={() => setIsMenuOpen(false)}
                className="text-lg font-bold text-slate-900 p-4 bg-slate-50 rounded-2xl hover:bg-blue-50 hover:text-blue-600 transition-all"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 border-t border-slate-100 space-y-4">
              <a href="tel:+79518906436" className="flex items-center gap-3 text-slate-900 font-bold p-2">
                <Phone className="w-5 h-5 text-blue-600" /> +7 (951) 890-64-36
              </a>
              <a href="tel:+79656212493" className="flex items-center gap-3 text-slate-900 font-bold p-2">
                <Phone className="w-5 h-5 text-blue-600" /> +7 (965) 621-24-93
              </a>
              <button 
                onClick={() => {
                  onOpenModal();
                  setIsMenuOpen(false);
                }}
                className="w-full bg-primary text-white py-4 rounded-2xl font-bold shadow-lg shadow-blue-500/30"
              >
                Рассчитать стоимость
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
