import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote, MessageSquare } from 'lucide-react';

const reviews = [
  {
    name: 'Алексей',
    company: 'Автосервис "Драйв"',
    text: 'Заказывали брендированные жилеты для мастеров. Качество печати отличное, логотип не стирается даже после агрессивной стирки. Сделали быстро, за 2 дня.',
    image: 'https://mtvpselwqpxbptipwjqe.supabase.co/storage/v1/object/public/images/team_mechanics.png',
    rating: 5
  },
  {
    name: 'Марина',
    company: 'Салон "Эстетика"',
    text: 'Очень довольны футболками! Ткань приятная, принт яркий и четкий. Клиенты сразу замечают единый стиль команды. Спасибо за оперативность!',
    image: 'https://mtvpselwqpxbptipwjqe.supabase.co/storage/v1/object/public/images/beauty.png',
    rating: 5
  },
  {
    name: 'Дмитрий',
    company: 'Логистика "Экспресс"',
    text: 'Работаем с Print Project уже полгода. Всегда вовремя, всегда качественно. Куртки с логотипом выдерживают любые погодные условия.',
    image: 'https://mtvpselwqpxbptipwjqe.supabase.co/storage/v1/object/public/images/dostavka.png',
    rating: 5
  }
];

export default function Reviews() {
  return (
    <section className="py-16 md:py-24 bg-slate-50 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center mb-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-orange-50 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 text-xs font-black uppercase tracking-widest mb-6">
            Отзывы клиентов
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white text-center tracking-tight">
            Что говорят о нашей <span className="text-orange-500">работе</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-slate-800 p-8 rounded-[48px] shadow-2xl shadow-blue-500/10 dark:shadow-none border-8 border-white dark:border-slate-800 flex flex-col relative group hover:-translate-y-3 transition-all duration-500 overflow-hidden"
            >
              {/* Background Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/5 to-transparent pointer-events-none" />

              <div className="absolute top-8 right-8 text-slate-100 dark:text-white/5 group-hover:text-orange-500/10 transition-colors z-0">
                <Quote className="w-16 h-16" />
              </div>
              
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-orange-400 text-orange-400" />
                ))}
              </div>

              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8 font-medium italic relative z-10">
                "{review.text}"
              </p>

              <div className="mt-auto flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-slate-50 dark:border-white/10 flex-shrink-0">
                  <img 
                    src={review.image} 
                    alt={review.name} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h4 className="font-black text-slate-900 dark:text-white">{review.name}</h4>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">{review.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://t.me/PrintProject16"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white dark:bg-slate-800 px-8 py-4 rounded-2xl font-black text-slate-900 dark:text-white shadow-lg border border-slate-100 dark:border-white/5"
          >
            <MessageSquare className="w-5 h-5 text-[#2AABEE]" />
            Смотреть все отзывы в Telegram
          </motion.a>
        </div>
      </div>
    </section>
  );
}
