import React from 'react';

export default function Footer() {
  return (
    <footer className="py-20 bg-slate-900/80 backdrop-blur-sm text-slate-400">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <p className="mb-4 font-extrabold text-white text-2xl tracking-tight">Print Project</p>
        <p className="mb-8 text-slate-300">Печать и брендирование одежды в Елабуге</p>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12 text-sm text-slate-300">
          <div className="space-y-2">
            <p>ИП Давлетшина Юлия Вадимовна</p>
            <p>ИНН 165058069923</p>
          </div>
          <div className="space-y-2">
            <p>Тел: <a href="tel:+79518906436" className="hover:text-white transition">+7 (951) 890-64-36</a>, <a href="tel:+79656212493" className="hover:text-white transition">+7 (965) 621-24-93</a></p>
            <p>Email: <a href="mailto:printproject75@gmail.com" className="hover:text-white transition">printproject75@gmail.com</a></p>
            <p>Адрес: Елабуга, Казанская ул., 48А</p>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-xs text-slate-500">
          <a href="/privacy" className="hover:text-slate-300 transition underline">Политика обработки персональных данных</a>
          <a href="/consent" className="hover:text-slate-300 transition underline">Согласие на обработку персональных данных</a>
        </div>
      </div>
    </footer>
  );
}
