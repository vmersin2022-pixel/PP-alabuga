import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { getProxyImageUrl } from '../lib/imageUtils';

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
    <section className="py-12 md:py-24 bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-500/10 border border-blue-100 dark:border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-widest mb-6"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Наше портфолио
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white text-center tracking-tight leading-tight">
            Примеры работ для бизнеса
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 mb-20">
          {works.map((work, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileTap={{ scale: 0.98 }}
              className={`rounded-[48px] overflow-hidden shadow-2xl shadow-blue-500/10 dark:shadow-none transition-all duration-500 bg-white dark:bg-slate-800 relative group cursor-pointer border-8 border-white dark:border-slate-800 flex flex-col ${activeMobileCard === index ? 'is-active ring-4 ring-blue-500/20 -translate-y-3 shadow-2xl' : ''}`}
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
                  src={getProxyImageUrl(work.url)} 
                  alt={work.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-[.is-active]:scale-110"
                  referrerPolicy="origin-when-cross-origin"
                />
                {/* Background Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent pointer-events-none opacity-40" />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 group-[.is-active]:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <ul className="space-y-3 text-white mb-8 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 group-[.is-active]:translate-y-0 group-[.is-active]:opacity-100 transition-all duration-500 delay-100">
                    {work.hoverFeatures.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                        <span className="font-medium leading-snug text-sm md:text-base">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 group-[.is-active]:translate-y-0 group-[.is-active]:opacity-100 transition-all duration-500 delay-200">
                    <span className="inline-flex items-center gap-2 text-white font-bold bg-blue-600 px-6 py-3 rounded-full hover:bg-blue-500 transition-colors shadow-lg shadow-blue-900/20">
                      {work.cta} <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-8 bg-white dark:bg-slate-800 relative z-10 flex-grow flex flex-col justify-center transition-all duration-500 group-hover:opacity-0 group-[.is-active]:opacity-0">
                <p className="font-black text-xl text-slate-900 dark:text-white mb-3 leading-tight tracking-tight">{work.title}</p>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-bold">{work.stats}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Final CTA */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-[40px] p-8 md:p-16 shadow-2xl text-center max-w-5xl mx-auto relative overflow-hidden border border-white/5"
        >
          <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-blue-600 rounded-full mix-blend-multiply filter blur-[100px] opacity-20"></div>
          <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-orange-600 rounded-full mix-blend-multiply filter blur-[100px] opacity-20"></div>
          
          <div className="relative z-10">
            <h3 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight leading-tight">
              Сделаем так же для вашего бизнеса
            </h3>
            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              Подберем формат нанесения и сделаем логотип, который не стирается и выглядит аккуратно каждый день
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onOpenModal}
              className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-slate-900 bg-white rounded-full hover:bg-slate-50 transition-all shadow-[0_20px_40px_rgba(255,255,255,0.1)]"
            >
              Получить расчет <ArrowRight className="w-5 h-5 ml-2" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
