import React from 'react';

export default function HowItWorks() {
  const steps = [
    { title: 'Заявка', desc: 'Оставьте контакты, мы свяжемся за 15 минут' },
    { title: 'Расчет', desc: 'Подберем текстиль и метод нанесения' },
    { title: 'Макет', desc: 'Утверждаем дизайн и готовим к печати' },
    { title: 'Печать', desc: 'Наносим логотип и доставляем заказ' },
  ];

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-slate-900 text-center mb-16 tracking-tight">Как мы работаем</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white p-10 rounded-3xl border border-slate-100 shadow-lg shadow-slate-200/50 hover:shadow-xl hover:shadow-slate-200/60 transition-all duration-300 relative">
              <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-2xl mb-8">
                {index + 1}
              </div>
              <h3 className="font-bold text-2xl text-slate-900 mb-4">{step.title}</h3>
              <p className="text-slate-600 text-lg leading-relaxed">{step.desc}</p>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-slate-300" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
