import React from 'react';
import { ShieldCheck, Clock, Users } from 'lucide-react';

export default function TrustSection() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-slate-900 text-center mb-16 tracking-tight">Почему нам доверяют</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/50 p-10 rounded-3xl border border-slate-100 hover:shadow-lg transition-shadow duration-300">
            <ShieldCheck className="w-12 h-12 text-blue-600 mb-6" />
            <h3 className="font-bold text-2xl text-slate-900 mb-3">Гарантия качества</h3>
            <p className="text-slate-600 leading-relaxed">Гарантия на принт — 30+ стирок. Бесплатная замена при браке печати.</p>
          </div>
          <div className="bg-white/50 p-10 rounded-3xl border border-slate-100 hover:shadow-lg transition-shadow duration-300">
            <Clock className="w-12 h-12 text-blue-600 mb-6" />
            <h3 className="font-bold text-2xl text-slate-900 mb-3">Соблюдение сроков</h3>
            <p className="text-slate-600 leading-relaxed">Предварительно согласуем срок после расчёта. Срочные заказы — по загрузке.</p>
          </div>
          <div className="bg-white/50 p-10 rounded-3xl border border-slate-100 hover:shadow-lg transition-shadow duration-300">
            <Users className="w-12 h-12 text-blue-600 mb-6" />
            <h3 className="font-bold text-2xl text-slate-900 mb-3">Опыт в B2B</h3>
            <p className="text-slate-600 leading-relaxed">Работаем с компаниями, мероприятиями и частными заказами. Предоставляем закрывающие документы.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
