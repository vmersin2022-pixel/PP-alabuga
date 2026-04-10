import React from 'react';
import { MessageCircle, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-slate-400">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">Нанесем логотип на вашу одежду за 1–3 дня</h2>
        <p className="text-lg md:text-xl text-slate-300 mb-12 max-w-2xl mx-auto">Работаем как с единичными заказами, так и с оптовыми партиями.</p>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12 text-sm text-slate-300 border-t border-slate-700/50 pt-12">
          <div className="space-y-3 flex flex-col items-center md:items-start text-center md:text-left">
            <p className="font-extrabold text-white text-xl tracking-tight mb-2">Print Project</p>
            <p className="leading-relaxed">
              Печать логотипов и принтов на текстиле в Елабуге.<br />
              Футболки, худи, спецодежда, шоперы, корпоративный мерч.
            </p>
          </div>

          <div className="space-y-3 flex flex-col items-center md:items-start text-center md:text-left">
            <p className="font-bold text-white text-lg mb-2">Контакты</p>
            <p>Тел: <a href="tel:+79518906436" className="hover:text-blue-400 transition">+7 (951) 890-64-36</a></p>
            <p>Тел: <a href="tel:+79656212493" className="hover:text-blue-400 transition">+7 (965) 621-24-93</a></p>
            <p>Email: <a href="mailto:printproject75@gmail.com" className="hover:text-blue-400 transition">printproject75@gmail.com</a></p>
            <p>Адрес: Елабуга, Казанская ул., 48А</p>
          </div>

          <div className="space-y-3 flex flex-col items-center md:items-start text-center md:text-left">
            <p className="font-bold text-white text-lg mb-2">Реквизиты и соцсети</p>
            <p>ИП Давлетшина Юлия Вадимовна</p>
            <p>ИНН 165058069923</p>
            <div className="flex space-x-4 mt-4">
              <a href="https://t.me/printproject_elabuga_bot?start=footer" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-slate-300 hover:text-blue-400 transition">
                <MessageCircle className="w-5 h-5" />
                <span>Telegram</span>
              </a>
              <a href="https://vk.com/print.project" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-slate-300 hover:text-blue-400 transition">
                <Globe className="w-5 h-5" />
                <span>VK</span>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-700/50 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-xs text-slate-500">
          <a href="/privacy" className="hover:text-slate-300 transition underline">Политика обработки персональных данных</a>
          <a href="/consent" className="hover:text-slate-300 transition underline">Согласие на обработку персональных данных</a>
        </div>
      </div>
    </footer>
  );
}
