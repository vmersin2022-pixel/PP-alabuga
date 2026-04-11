import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, MessageCircle, Phone } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  const questions = [
    { 
      q: 'Можно заказать печать от 1 штуки?', 
      a: 'Да, можно от 1 изделия.\nНо выгоднее — от 10 шт., так как снижается стоимость за единицу.',
      highlight: 'Подскажем оптимальный тираж под вашу задачу'
    },
    { 
      q: 'Можно прислать фото вместо готового макета?', 
      a: 'Да, этого достаточно.\nМожете отправить фото, логотип или даже пример — мы подготовим макет бесплатно.',
      highlight: 'Согласуем с вами перед печатью'
    },
    { 
      q: 'Печатаете только на нашей одежде или можно на вашей?', 
      a: 'Можем напечатать на вашей одежде или подобрать варианты.\nРаботаем с проверенными поставщиками — подберем под задачу, если нужно.',
      highlight: 'Но чаще печатаем на готовой форме клиента — это быстрее'
    },
    { 
      q: 'Какие сроки изготовления?', 
      a: 'В среднем 3–5 дней.\nСрочные заказы — от 1 дня (зависит от тиража и загрузки).',
      highlight: 'Срок фиксируем заранее — без сюрпризов'
    },
    { 
      q: 'Работаете ли вы с компаниями?', 
      a: 'Да, это наш основной сегмент.\nРаботаем с бизнесом, командами, производствами и мероприятиями.',
      highlight: 'Делаем заказы под сотрудников и масштабируем партии'
    },
    { 
      q: 'Можно получить расчет в Telegram?', 
      a: 'Да, это самый быстрый способ.\nОтправьте задачу — ответим в течение 10–15 минут.',
      highlight: 'Можно сразу прислать фото или ТЗ'
    },
    { 
      q: 'Можно ли нанести логотип на спецодежду?', 
      a: 'Да, это одна из основных задач.\nПечатаем на рабочей форме, куртках, жилетах, касках и т.д.',
      highlight: 'Используем методы, которые выдерживают нагрузки и стирки'
    },
    { 
      q: 'Логотип точно не сотрется?', 
      a: 'Да, мы даем гарантию.\nПодбираем метод печати под задачу — выдерживает 30+ стирок.',
      highlight: 'Если будет брак — переделаем бесплатно'
    },
  ];

  return (
    <section className="py-8">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-blue-600 font-bold uppercase tracking-wider text-base md:text-lg mb-4">Отвечаем на частые вопросы перед заказом</p>
          <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight">Часто задаваемые вопросы</h2>
        </div>
        <div className="space-y-4">
          {questions.map((item, index) => (
            <div 
              key={index} 
              className={`rounded-3xl border transition-all duration-300 overflow-hidden cursor-pointer backdrop-blur-sm ${
                openIndex === index 
                  ? 'bg-gradient-to-br from-slate-200/80 to-slate-100/50 border-slate-300 shadow-lg shadow-slate-900/5' 
                  : 'bg-gradient-to-br from-slate-100/50 to-slate-50/30 border-slate-200 hover:from-slate-200/60 hover:to-slate-100/40'
              }`}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <button 
                className="w-full p-6 md:p-8 text-left flex justify-between items-center"
              >
                <span className={`font-bold text-lg md:text-xl transition-colors duration-300 ${openIndex === index ? 'text-blue-700' : 'text-slate-900'}`}>
                  {item.q}
                </span>
                <motion.div 
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className={`flex-shrink-0 ml-4 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 bg-orange-500 text-white shadow-md ${openIndex === index ? 'shadow-orange-500/40 scale-110' : 'shadow-orange-500/20'}`}
                >
                  <ChevronDown className="w-5 h-5" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 md:px-8 pb-6 md:pb-8">
                      <div className="text-slate-600 leading-relaxed whitespace-pre-line mb-6 text-lg">
                        {item.a}
                      </div>
                      <div className="flex items-start gap-3 bg-blue-50/80 p-4 md:p-5 rounded-2xl border border-blue-100/50">
                        <span className="text-xl leading-none mt-0.5">👉</span>
                        <span className="text-blue-900 font-medium leading-snug">{item.highlight}</span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Mini CTA */}
        <div className="mt-16 bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 md:p-10 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
          <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
          
          <div className="relative z-10 text-center md:text-left">
            <p className="text-2xl md:text-3xl font-extrabold text-white mb-2">Остались вопросы?</p>
            <p className="text-slate-300 text-lg">Напишите нам напрямую</p>
          </div>
          <div className="relative z-10 flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <a 
              href="https://t.me/PrintProject16" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-white bg-[#229ED9] rounded-full hover:bg-[#1E8CC0] transition-all shadow-[0_0_20px_rgba(34,158,217,0.4)] hover:shadow-[0_0_40px_rgba(34,158,217,0.7)] hover:-translate-y-1 whitespace-nowrap"
            >
              <MessageCircle className="w-5 h-5 mr-2" /> В Telegram
            </a>
            <a 
              href="tel:+79656212493" 
              className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-slate-900 bg-white border-2 border-slate-200 rounded-full hover:border-blue-500 hover:bg-slate-50 transition-all hover:shadow-[0_0_20px_rgba(37,99,235,0.2)] hover:-translate-y-1 whitespace-nowrap"
            >
              <Phone className="w-5 h-5 mr-2" /> Позвонить
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
