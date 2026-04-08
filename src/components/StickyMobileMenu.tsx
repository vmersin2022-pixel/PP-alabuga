import React from 'react';
import { Phone, MessageCircle, FileText } from 'lucide-react';

export default function StickyMobileMenu({ onOpenModal }: { onOpenModal: () => void }) {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-slate-200 flex justify-around p-2 shadow-lg">
      <a href="tel:+79656212493" className="flex flex-col items-center text-slate-900 text-xs font-medium">
        <Phone className="w-6 h-6 mb-1" />
        Позвонить
      </a>
      <a href="https://t.me/printproject_elabuga_bot?start=header" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center text-[#2AABEE] text-xs font-bold">
        <MessageCircle className="w-6 h-6 mb-1" />
        Telegram
      </a>
      <button onClick={onOpenModal} className="flex flex-col items-center text-slate-900 text-xs font-medium">
        <FileText className="w-6 h-6 mb-1" />
        Заявка
      </button>
    </div>
  );
}
