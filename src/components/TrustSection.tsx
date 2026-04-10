import React from 'react';
import { ShieldCheck, Clock, Users } from 'lucide-react';

export default function TrustSection() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-slate-900 text-center mb-16 tracking-tight">Почему нам доверяют</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-10 rounded-3xl border border-slate-100 shadow-lg shadow-slate-200/50 hover:shadow-xl hover:shadow-slate-200/60 transition-all duration-300">
            <Users className="w-16 h-16 text-blue-600 mb-8" />
            <h3 className="font-extrabold text-5xl text-slate-900 mb-4">100+</h3>
            <p className="text-xl font-bold text-slate-900 mb-3">довольных клиентов</p>
            <p className="text-slate-600 leading-relaxed text-lg">Работаем с компаниями, мероприятиями и частными заказами.</p>
          </div>
          <div className="bg-white p-10 rounded-3xl border border-slate-100 shadow-lg shadow-slate-200/50 hover:shadow-xl hover:shadow-slate-200/60 transition-all duration-300">
            <Clock className="w-16 h-16 text-blue-600 mb-8" />
            <h3 className="font-extrabold text-5xl text-slate-900 mb-4">3–5 дней</h3>
            <p className="text-xl font-bold text-slate-900 mb-3">средний срок выполнения</p>
            <p className="text-slate-600 leading-relaxed text-lg">Предварительно согласуем срок после расчёта. Срочные заказы — по загрузке.</p>
          </div>
          <div className="bg-white p-10 rounded-3xl border border-slate-100 shadow-lg shadow-slate-200/50 hover:shadow-xl hover:shadow-slate-200/60 transition-all duration-300">
            <ShieldCheck className="w-16 h-16 text-blue-600 mb-8" />
            <h3 className="font-extrabold text-5xl text-slate-900 mb-4">90%</h3>
            <p className="text-xl font-bold text-slate-900 mb-3">клиентов возвращаются</p>
            <p className="text-slate-600 leading-relaxed text-lg">Гарантия на принт — 30+ стирок. Бесплатная замена при браке печати.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
