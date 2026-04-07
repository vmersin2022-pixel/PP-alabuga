import React from 'react';

export default function HowItWorks() {
  const steps = [
    'Вы оставляете заявку',
    'Отправляете фото, макет или описание задачи',
    'Мы рассчитываем стоимость и сроки',
    'Согласовываем макет и способ нанесения',
    'Выполняем печать',
    'Вы получаете готовый заказ'
  ];

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-slate-900 text-center mb-16 tracking-tight">Как мы работаем</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white/50 p-8 rounded-3xl border border-slate-100 shadow-sm flex items-start space-x-6">
              <div className="w-12 h-12 rounded-2xl bg-blue-50/50 text-blue-600 flex items-center justify-center font-bold text-lg shrink-0">
                {index + 1}
              </div>
              <p className="font-semibold text-lg text-slate-800 pt-2">{step}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
