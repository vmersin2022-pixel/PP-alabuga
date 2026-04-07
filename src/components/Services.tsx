import React from 'react';

const services = [
  { title: 'Футболки', desc: 'Логотипы, принты и надписи' },
  { title: 'Худи и свитшоты', desc: 'Мерч, форма и брендированная одежда' },
  { title: 'Спецодежда', desc: 'Логотипы для сотрудников и бригад' },
  { title: 'Жилеты', desc: 'Для промо, склада и стройки' },
  { title: 'Куртки', desc: 'Брендирование верхней одежды' },
  { title: 'Кепки', desc: 'Нанесение логотипов под заказ' },
  { title: 'Каски', desc: 'Маркировка и фирменное оформление' },
  { title: 'Ткань', desc: 'Печать на крое и текстиле' },
];

export default function Services() {
  return (
    <section id="services" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-slate-900 text-center mb-16 tracking-tight">Что мы печатаем</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {services.map((service) => (
            <div key={service.title} className="bg-white/50 p-8 rounded-3xl border border-slate-100 hover:shadow-lg transition-shadow duration-300">
              <h3 className="font-bold text-xl text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 text-sm mb-6 leading-relaxed">{service.desc}</p>
              <a href="https://t.me/printproject_elabuga_bot?start=raschet" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold text-sm hover:text-blue-700 transition">Рассчитать →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
