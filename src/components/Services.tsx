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

export default function Services({ onOpenModal }: { onOpenModal: () => void }) {
  return (
    <section id="services" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-text-main text-center mb-8 tracking-tight">Печать на текстиле в Елабуге для частных заказов и бизнеса</h2>
        <p className="text-lg text-text-muted text-center mb-16 max-w-3xl mx-auto leading-relaxed">
          Если вам нужна печать на одежде в Елабуге, брендирование формы, нанесение логотипа на рабочую одежду или изготовление мерча, мы поможем подобрать подходящий вариант. Выполняем печать на текстиле на заказ для компаний, магазинов, мероприятий, команд, студий и частных клиентов.
        </p>

        <h2 className="text-4xl font-extrabold text-text-main text-center mb-16 tracking-tight">Что мы печатаем</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.title} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-lg shadow-slate-200/50 hover:shadow-xl hover:shadow-slate-200/60 transition-all duration-300">
              <h3 className="font-bold text-xl text-text-main mb-3">{service.title}</h3>
              <p className="text-text-muted text-sm mb-6 leading-relaxed">{service.desc}</p>
              <button onClick={onOpenModal} className="text-primary font-semibold text-sm hover:text-blue-700 transition flex items-center gap-1">
                Рассчитать <span className="text-accent">→</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
