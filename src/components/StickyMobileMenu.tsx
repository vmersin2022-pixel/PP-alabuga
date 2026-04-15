import React from 'react';
import { motion } from 'motion/react';
import { Phone, MessageCircle, FileText, Send } from 'lucide-react';

export default function StickyMobileMenu({ onOpenModal }: { onOpenModal: () => void }) {
  return (
    <>
      {/* Floating Action Button for quick contact */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileTap={{ scale: 0.9 }}
        onClick={onOpenModal}
        className="md:hidden fixed bottom-24 right-6 z-50 w-14 h-14 bg-orange-500 text-white rounded-full shadow-[0_8px_25px_rgba(249,115,22,0.4)] flex items-center justify-center border-none"
      >
        <Send className="w-6 h-6" />
      </motion.button>

      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 px-4 pb-6 pt-2">
        <div className="bg-white/80 backdrop-blur-xl border border-white/20 rounded-[28px] shadow-[0_-10px_40px_rgba(0,0,0,0.1)] flex justify-around p-3">
          <motion.a 
            whileTap={{ scale: 0.9 }}
            href="tel:+79656212493" 
            className="flex flex-col items-center text-slate-600 active:text-slate-900 transition-colors"
          >
            <div className="p-2 rounded-2xl bg-slate-50 mb-1">
              <Phone className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-wider">Звонок</span>
          </motion.a>

          <motion.a 
            whileTap={{ scale: 0.9 }}
            href="https://t.me/PrintProject16" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex flex-col items-center text-[#2AABEE] active:text-[#229ED9] transition-colors"
          >
            <div className="p-2 rounded-2xl bg-blue-50 mb-1">
              <MessageCircle className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-wider">Telegram</span>
          </motion.a>

          <motion.button 
            whileTap={{ scale: 0.9 }}
            onClick={onOpenModal} 
            className="flex flex-col items-center text-orange-600 active:text-orange-700 transition-colors border-none bg-transparent"
          >
            <div className="p-2 rounded-2xl bg-orange-50 mb-1">
              <FileText className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-wider">Заявка</span>
          </motion.button>
        </div>
      </div>
    </>
  );
}
