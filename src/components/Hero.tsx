import React from 'react';

export default function Hero({ onOpenModal }: { onOpenModal: () => void }) {
  return (
    <section className="py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight mb-8">
          Печать логотипов и принтов на одежде в Елабуге
        </h1>
        <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed">
          Футболки, худи, спецодежда, жилеты, куртки, кепки и каски. 
          Рассчитаем стоимость по фото, макету или описанию задачи, поможем с подготовкой и согласуем срок до запуска.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button onClick={onOpenModal} className="bg-blue-600 text-white px-10 py-5 rounded-3xl font-bold text-lg hover:bg-blue-700 transition shadow-lg shadow-blue-500/20 text-center">
            Получить расчет за 15 минут
          </button>
          <a href="#b2b" className="bg-white text-slate-900 px-10 py-5 rounded-3xl font-bold text-lg hover:bg-slate-100 transition shadow-sm border border-slate-200">
            Запросить КП
          </a>
        </div>
        <div className="mt-16 flex flex-wrap justify-center gap-4 text-sm text-slate-500">
          <span className="px-5 py-3 rounded-full shadow-sm border border-slate-100 bg-white/50">✓ Расчёт по фото, макету или описанию</span>
          <span className="px-5 py-3 rounded-full shadow-sm border border-slate-100 bg-white/50">✓ Поможем подготовить макет к печати</span>
          <span className="px-5 py-3 rounded-full shadow-sm border border-slate-100 bg-white/50">✓ Срочные заказы</span>
        </div>
      </div>
    </section>
  );
}
