import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, MessageCircle, Menu, X, ArrowRight } from 'lucide-react';

export default function Header({ onOpenModal }: { onOpenModal: () => void }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '#services', label: 'Услуги' },
    { href: '#b2b', label: 'Для бизнеса' },
  ];

  return (
    <header className="sticky top-4 z-50 px-4">
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="max-w-6xl mx-auto bg-white/80 backdrop-blur-xl border border-white/20 rounded-[32px] h-20 flex items-center justify-between px-6 shadow-[0_20px_40px_rgba(0,0,0,0.05)]"
      >
        <button 
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setIsMenuOpen(false);
          }}
          className="text-xl sm:text-2xl font-black text-slate-900 cursor-pointer hover:opacity-80 transition-opacity tracking-tighter"
        >
          Print<span className="text-blue-600">Project</span>
        </button>
        
        {/* Mobile Actions */}
        <div className="md:hidden flex items-center gap-3">
          <motion.a 
            whileTap={{ scale: 0.9 }}
            href="https://t.me/PrintProject16" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-[#2AABEE] text-white p-2.5 rounded-2xl font-bold shadow-lg shadow-blue-500/20"
          >
            <MessageCircle className="w-5 h-5" />
          </motion.a>
          <motion.button 
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2.5 bg-slate-100 rounded-2xl text-slate-900 border-none"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          <nav className="flex items-center space-x-6">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-slate-600 hover:text-blue-600 font-bold text-sm transition-colors">
                {link.label}
              </a>
            ))}
          </nav>
          
          <div className="h-8 w-px bg-slate-200" />

          <div className="flex flex-col items-end">
            <a href="tel:+79518906436" className="text-[11px] font-bold text-slate-400 hover:text-blue-600 transition-colors">
              +7 (951) 890-64-36
            </a>
            <a href="tel:+79656212493" className="text-sm font-black text-slate-900 hover:text-blue-600 transition-colors">
              +7 (965) 621-24-93
            </a>
          </div>

          <div className="flex items-center gap-3">
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onOpenModal} 
              className="bg-blue-600 text-white px-6 py-3 rounded-2xl font-bold hover:bg-blue-700 transition shadow-lg shadow-blue-500/20 text-sm"
            >
              Рассчитать
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="md:hidden absolute top-24 left-4 right-4 bg-white/95 backdrop-blur-2xl border border-white/20 rounded-[32px] p-8 shadow-[0_30px_60px_rgba(0,0,0,0.15)] z-50"
          >
            <nav className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <motion.a 
                  whileTap={{ scale: 0.98 }}
                  key={link.href} 
                  href={link.href} 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-lg font-black text-slate-900 p-5 bg-slate-50 rounded-2xl flex items-center justify-between group active:bg-blue-50 active:text-blue-600 transition-all"
                >
                  {link.label}
                  <ArrowRight className="w-5 h-5 text-slate-300 group-active:text-blue-400" />
                </motion.a>
              ))}
              
              <div className="pt-6 mt-2 border-t border-slate-100 space-y-6">
                <div className="space-y-3">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-2">Контакты</p>
                  <a href="tel:+79518906436" className="flex items-center gap-4 text-slate-900 font-bold p-2">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                      <Phone className="w-5 h-5" />
                    </div>
                    <span>+7 (951) 890-64-36</span>
                  </a>
                  <a href="tel:+79656212493" className="flex items-center gap-4 text-slate-900 font-bold p-2">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                      <Phone className="w-5 h-5" />
                    </div>
                    <span>+7 (965) 621-24-93</span>
                  </a>
                </div>

                <motion.button 
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    onOpenModal();
                    setIsMenuOpen(false);
                  }}
                  className="w-full bg-blue-600 text-white py-5 rounded-2xl font-black shadow-xl shadow-blue-500/30 flex items-center justify-center gap-3"
                >
                  Рассчитать стоимость <ArrowRight className="w-5 h-5" />
                </motion.button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
