import React from 'react';

export default function B2BSection() {
  return (
    <section id="b2b" className="py-24 px-4">
      <div className="max-w-5xl mx-auto bg-slate-900/70 backdrop-blur-sm rounded-3xl p-16 text-center shadow-2xl">
        <h2 className="text-4xl font-extrabold text-white mb-8 tracking-tight">Брендирование одежды для компаний</h2>
        <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
          Форма сотрудников, спецодежда, жилеты, куртки, кепки и каски с логотипом. 
          Подготовим макет, рассчитаем стоимость по тиражу и согласуем сроки.
        </p>
        <a href="https://t.me/printproject_elabuga_bot?start=raschet" target="_blank" rel="noopener noreferrer" className="bg-white text-slate-900 px-10 py-5 rounded-3xl font-bold text-lg hover:bg-slate-100 transition shadow-lg text-center">
          Запросить коммерческое предложение
        </a>
      </div>
    </section>
  );
}
