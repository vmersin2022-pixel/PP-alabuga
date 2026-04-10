import React from 'react';

export default function FinalCTA({ onOpenModal }: { onOpenModal: () => void }) {
  return (
    <section className="py-8 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-8 tracking-tight">
          Нанесем логотип на вашу одежду за 1–3 дня
        </h2>
        <p className="text-xl text-blue-100 mb-12 leading-relaxed">
          Получите расчет стоимости и консультацию по выбору метода печати прямо сейчас.
        </p>
        <button onClick={onOpenModal} className="bg-gradient-to-r from-primary to-[#7C3AED] text-white px-12 py-6 rounded-2xl font-bold text-lg hover:opacity-90 transition shadow-2xl shadow-blue-900/20">
          Получить расчет
        </button>
      </div>
    </section>
  );
}
