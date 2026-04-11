import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const works = [
  { 
    seed: 'branded-tshirt', 
    title: 'Принт на футболках для команды', 
    url: 'https://i.postimg.cc/JnXFqVFh/1-(2).webp', 
    stats: '50 шт за 2 дня — логотип не выцветает после стирок',
    hoverFeatures: [
      'Сделали тираж 50 футболок',
      'Срок: 2 дня',
      'Четкий принт без трещин и выцветания'
    ],
    cta: 'Хочу так же'
  },
  { 
    seed: 'corporate-vest', 
    title: 'Брендированные жилеты для сотрудников', 
    url: 'https://i.postimg.cc/QxCy4TwP/Gemini-Generated-Image-jxm6lkjxm6lkjxm6-(1).png', 
    stats: '15 шт за 1 день — выдерживают ежедневную работу',
    hoverFeatures: [
      'Жилеты для рабочей команды',
      'Сделали за 1 день',
      'Логотип держится при постоянной носке'
    ],
    cta: 'Повторить заказ'
  },
  { 
    seed: 'corporate-jacket', 
    title: 'Куртки с логотипом для компании', 
    url: 'https://i.postimg.cc/FzHLvcLv/Gemini-Generated-Image-qy75xfqy75xfqy75-(1).png', 
    stats: '25 комплектов за 3 дня — единый стиль команды',
    hoverFeatures: [
      'Комплект формы для сотрудников',
      'Сделали за 3 дня',
      'Логотип не стирается и не трескается'
    ],
    cta: 'Хочу так же'
  },
  { 
    seed: 'team-hoodie', 
    title: 'Мерч для команды и мероприятий', 
    url: 'https://i.postimg.cc/ZKK5f485/Gemini-Generated-Image-7f9wb17f9wb17f9w-(1).png', 
    stats: 'Полный комплект — футболки, аксессуары и экипировка',
    hoverFeatures: [
      'Мерч под мероприятие',
      'Несколько позиций в одном стиле',
      'Яркие принты, которые не выцветают'
    ],
    cta: 'Сделать такой же'
  },
  { 
    seed: 'branded-cap', 
    title: 'Кепки с логотипом для сотрудников', 
    url: 'https://i.postimg.cc/J4LMgmjZ/Gemini-Generated-Image-q9yya3q9yya3q9yy-(1).png', 
    stats: 'Аккуратный принт — сохраняет вид каждый день',
    hoverFeatures: [
      'Кепки для команды',
      'Четкая детализация логотипа',
      'Не выгорает на солнце'
    ],
    cta: 'Повторить заказ'
  },
  { 
    seed: 'branded-helmet', 
    title: 'Маркировка касок для бригады', 
    url: 'https://i.postimg.cc/hj0vZjhr/Gemini-Generated-Image-ewrwmsewrwmsewrw-(1).png', 
    stats: 'Четкий логотип — не стирается в работе',
    hoverFeatures: [
      'Маркировка для рабочих',
      'Устойчива к условиям стройки',
      'Видно и читается издалека'
    ],
    cta: 'Хочу так же'
  },
];

export default function Portfolio({ onOpenModal }: { onOpenModal: () => void }) {
  const [activeMobileCard, setActiveMobileCard] = useState<number | null>(null);

  return (
    <section className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-slate-900 text-center mb-16 tracking-tight">Примеры работ для бизнеса</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {works.map((work, index) => (
            <div 
              key={index} 
              data-active={activeMobileCard === index}
              className="rounded-3xl overflow-hidden shadow-lg shadow-slate-200/50 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 bg-white relative group cursor-pointer border border-slate-100 flex flex-col data-[active=true]:shadow-2xl data-[active=true]:shadow-blue-500/20 data-[active=true]:-translate-y-1"
              onClick={() => {
                if (window.matchMedia('(max-width: 768px)').matches) {
                  if (activeMobileCard !== index) {
                    setActiveMobileCard(index);
                    return;
                  }
                }
                onOpenModal();
              }}
            >
              <div className="relative overflow-hidden aspect-[4/5]">
                <img 
                  src={work.url || `https://picsum.photos/seed/${work.seed}/600/800`} 
                  alt={work.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 group-data-[active=true]:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 group-data-[active=true]:opacity-100 transition-opacity duration-500 flex flex-col justify-center p-8">
                  <ul className="space-y-3 text-white mb-6 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 group-data-[active=true]:translate-y-0 group-data-[active=true]:opacity-100 transition-all duration-500 delay-100">
                    {work.hoverFeatures.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-blue-400 mt-1">—</span>
                        <span className="font-medium leading-snug">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 group-data-[active=true]:translate-y-0 group-data-[active=true]:opacity-100 transition-all duration-500 delay-200">
                    <span className="inline-flex items-center gap-2 text-white font-bold bg-blue-600 px-5 py-2.5 rounded-full hover:bg-blue-500 transition-colors">
                      {work.cta} <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-6 bg-white relative z-10 flex-grow flex flex-col justify-center transition-opacity duration-500 group-hover:opacity-0 group-data-[active=true]:opacity-0">
                <p className="font-bold text-xl text-slate-900 mb-2">{work.title}</p>
                <p className="text-sm text-slate-600 leading-relaxed">{work.stats}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Final CTA */}
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 md:p-12 shadow-2xl text-center max-w-4xl mx-auto relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
          <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
          
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">
              Сделаем так же для вашего бизнеса
            </h3>
            <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Подберем формат нанесения и сделаем логотип, который не стирается и выглядит аккуратно каждый день
            </p>
            <button
              onClick={onOpenModal}
              className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-slate-900 bg-white rounded-full hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Получить расчет <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
