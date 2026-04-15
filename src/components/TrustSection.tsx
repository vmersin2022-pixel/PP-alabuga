import React from 'react';
import { ShieldCheck, Clock, Users, Building2 } from 'lucide-react';

export default function TrustSection() {
  const cards = [
    {
      icon: <Building2 className="w-12 h-12" strokeWidth={1.5} />,
      title: '100+',
      subtitle: 'компаний уже заказали у нас форму с логотипом',
      desc: 'Работаем с бизнесом, командами и производствами'
    },
    {
      icon: <Clock className="w-12 h-12" strokeWidth={1.5} />,
      title: '3–5 дней',
      subtitle: 'средний срок выполнения',
      desc: 'Согласовываем сроки заранее и соблюдаем их'
    },
    {
      icon: <Users className="w-12 h-12" strokeWidth={1.5} />,
      title: '90%',
      subtitle: 'клиентов возвращаются',
      desc: 'Потому что логотип не стирается даже после 30+ стирок. И мы бесплатно переделаем, если есть брак'
    },
    {
      icon: <ShieldCheck className="w-12 h-12" strokeWidth={1.5} />,
      title: 'Гарантия',
      subtitle: 'Гарантия на печать',
      desc: 'Если логотип треснет или сотрется — переделаем бесплатно'
    }
  ];

  return (
    <section className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white text-center mb-16 tracking-tight">Почему нам доверяют</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, index) => (
            <div 
              key={index} 
              className="group bg-white dark:bg-slate-800 p-8 rounded-[24px] shadow-sm shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-white/5 flex flex-col relative overflow-hidden transition-all duration-500 cursor-pointer hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20"
            >
              {/* Base Content */}
              <div className="relative z-10 flex flex-col h-full transition-opacity duration-500 group-hover:opacity-0">
                <div className="mb-6 text-blue-600 dark:text-blue-400 transition-transform duration-700 group-hover:scale-110 origin-left">
                  {card.icon}
                </div>
                <h3 className="font-extrabold text-4xl text-slate-900 dark:text-white mb-3">{card.title}</h3>
                <p className="text-lg font-bold text-slate-800 dark:text-slate-200 mb-4">{card.subtitle}</p>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed flex-grow">{card.desc}</p>
              </div>

              {/* Cinematic Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-800 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center p-8 z-20">
                <h3 className="text-3xl font-extrabold text-white mb-3 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-75">
                  {card.title}
                </h3>
                <p className="text-lg font-bold text-blue-400 mb-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-150">
                  {card.subtitle}
                </p>
                <p className="text-slate-300 leading-relaxed transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
