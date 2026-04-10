import React from 'react';

export default function B2BSection({ onOpenModal }: { onOpenModal: () => void }) {
  return (
    <section id="b2b" className="py-24 px-4">
      <div className="max-w-5xl mx-auto bg-slate-900/70 backdrop-blur-sm rounded-3xl p-16 text-center shadow-2xl">
        <h2 className="text-4xl font-extrabold text-white mb-8 tracking-tight">Печать и брендирование текстиля для бизнеса</h2>
        <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
          Print Project работает с B2B-клиентами в Елабуге и соседних городах. Мы помогаем компаниям оформить одежду для персонала, подготовить корпоративный мерч, нанести логотипы на форму и текстиль для мероприятий.
        </p>
        <button onClick={onOpenModal} className="bg-white text-slate-900 px-10 py-5 rounded-3xl font-bold text-lg hover:bg-slate-100 transition shadow-lg text-center">
          Запросить КП
        </button>
      </div>
    </section>
  );
}
