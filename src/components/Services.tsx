import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Shirt, Layers, Wrench, Shield, HardHat, ShoppingBag, Scissors, ArrowRight } from 'lucide-react';

type FilterType = 'business' | 'events' | 'personnel';

const filters: { id: FilterType; label: string }[] = [
  { id: 'business', label: 'Для бизнеса' },
  { id: 'events', label: 'Для мероприятий' },
  { id: 'personnel', label: 'Для персонала' },
];

const products = [
  {
    id: 'tshirts',
    title: 'Футболки',
    icon: Shirt,
    defaultDesc: 'Логотипы и принты, которые не стираются',
    hoverDesc: 'Печать на футболках для бизнеса, мероприятий и команд',
    cta: 'Получить расчет',
    categories: ['business', 'events', 'personnel'],
    badge: 'Популярный вариант',
    badgeColor: 'bg-orange-500/15 text-orange-600',
  },
  {
    id: 'polo',
    title: 'Поло',
    icon: Shirt,
    defaultDesc: 'Аккуратная форма для сотрудников и команд',
    hoverDesc: 'Идеально для продавцов, администраторов, кафе и персонала',
    cta: 'Получить расчет',
    categories: ['business', 'personnel'],
  },
  {
    id: 'hoodies',
    title: 'Худи и свитшоты',
    icon: Layers,
    defaultDesc: 'Брендированная одежда для команд и мерча',
    hoverDesc: 'Печать на худи и свитшотах для брендов, сотрудников и мероприятий',
    cta: 'Получить расчет',
    categories: ['business', 'events'],
  },
  {
    id: 'workwear',
    title: 'Спецодежда',
    icon: Wrench,
    defaultDesc: 'Логотипы на форме для сотрудников и бригад',
    hoverDesc: 'Печать на рабочей одежде — выдерживает стирки и активную эксплуатацию',
    cta: 'Получить расчет',
    categories: ['business', 'personnel'],
    badge: 'Для рабочих команд',
    badgeColor: 'bg-orange-500/15 text-orange-600',
  },
  {
    id: 'jackets',
    title: 'Куртки и жилеты',
    icon: Shield,
    defaultDesc: 'Логотипы, которые держатся в сложных условиях',
    hoverDesc: 'Подходят для выездных сотрудников, бригад, логистики и рабочих команд',
    cta: 'Получить расчет',
    categories: ['business', 'personnel'],
  },
  {
    id: 'hats',
    title: 'Кепки и каски',
    icon: HardHat,
    defaultDesc: 'Брендирование аксессуаров и рабочей защиты',
    hoverDesc: 'Заметный логотип на головных уборах для сотрудников, промо и объектов',
    cta: 'Получить расчет',
    categories: ['business', 'events', 'personnel'],
  },
  {
    id: 'bags',
    title: 'Шопперы и сумки',
    icon: ShoppingBag,
    defaultDesc: 'Печать для промо, подарков и брендов',
    hoverDesc: 'Отлично подходят для мероприятий, мерча и корпоративных наборов',
    cta: 'Получить расчет',
    categories: ['events', 'business'],
    badge: 'Для мероприятий',
    badgeColor: 'bg-orange-500/15 text-orange-600',
  },
  {
    id: 'custom',
    title: 'Нестандартные изделия',
    icon: Scissors,
    defaultDesc: 'Печать на текстиле под нестандартные задачи',
    hoverDesc: 'Работаем с нестандартными материалами, кроем и особыми запросами',
    cta: 'Получить расчет',
    categories: ['events', 'business'],
  },
];

export default function Services({ onOpenModal }: { onOpenModal: () => void }) {
  const [activeFilter, setActiveFilter] = useState<FilterType>('business');

  const filteredProducts = products.filter((p) => p.categories.includes(activeFilter));

  return (
    <section id="services" className="py-8 bg-slate-50/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#111827] mb-6 tracking-tight">
            Печатаем на любой одежде под вашу задачу
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Для бизнеса, мероприятий, команд и сотрудников — от базовых футболок до спецодежды и аксессуаров.
          </p>
        </div>

        {/* Filter */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-slate-100 p-1.5 rounded-full">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`relative px-6 py-2.5 rounded-full text-sm transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'text-white font-bold shadow-sm'
                    : 'text-slate-500 font-medium hover:text-slate-800'
                }`}
              >
                {activeFilter === filter.id && (
                  <motion.div
                    layoutId="active-filter"
                    className="absolute inset-0 bg-orange-500/80 backdrop-blur-sm rounded-full shadow-sm"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{filter.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Cards Grid */}
        <motion.div layout className="flex flex-wrap justify-center gap-6 mb-16">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                onClick={onOpenModal}
                className="group w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] xl:w-[calc(25%-18px)] bg-white p-6 rounded-[24px] shadow-sm shadow-slate-200/50 border border-slate-100 flex flex-col relative overflow-hidden transition-all duration-500 cursor-pointer hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20"
              >
                {/* Base Content */}
                <div className="relative z-10 flex flex-col h-full transition-opacity duration-500 group-hover:opacity-0">
                  <div className="mb-4 text-blue-600 transition-transform duration-700 group-hover:scale-110 origin-left">
                    <product.icon className="w-10 h-10" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-slate-900">{product.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-5 flex-grow">
                    {product.defaultDesc}
                  </p>
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
                    <span className="text-blue-600 font-bold text-sm flex items-center gap-1.5">
                      {product.cta} <ArrowRight className="w-4 h-4" />
                    </span>
                    {product.badge && (
                      <span className={`text-[10px] font-bold px-3 py-1.5 rounded-full whitespace-nowrap ${product.badgeColor}`}>
                        {product.badge}
                      </span>
                    )}
                  </div>
                </div>

                {/* Cinematic Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-800 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center p-6 z-20">
                  <h3 className="text-xl font-bold text-white mb-3 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-75">
                    {product.title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-6 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-150">
                    {product.hoverDesc}
                  </p>
                  <div className="transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                    <span className="inline-flex items-center gap-2 text-white font-bold bg-blue-600 px-6 py-3 rounded-full hover:bg-blue-500 transition-all shadow-[0_0_15px_rgba(37,99,235,0.4)] hover:shadow-[0_0_25px_rgba(37,99,235,0.7)] text-sm">
                      {product.cta} <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Final CTA */}
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 md:p-12 shadow-2xl text-center max-w-4xl mx-auto relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
          <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>

          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">
              Не нашли нужную позицию? Работаем и с нестандартными заказами.
            </h3>
            <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Рассчитаем нестандартный заказ. Мы можем нанести логотип на вашу одежду или подобрать особые материалы под вашу задачу. Подберем формат нанесения и сделаем логотип, который не стирается и выглядит аккуратно каждый день.
            </p>
            <button
              onClick={onOpenModal}
              className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-slate-900 bg-white rounded-full hover:bg-slate-50 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_40px_rgba(255,255,255,0.6)] hover:-translate-y-1"
            >
              Получить расчет <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
