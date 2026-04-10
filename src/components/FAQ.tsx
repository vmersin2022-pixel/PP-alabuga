import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  const questions = [
    { q: 'Можно заказать печать от 1 штуки?', a: 'Да, мы работаем как с единичными заказами, так и с тиражами для бизнеса, мероприятий и команд.' },
    { q: 'Можно прислать фото вместо готового макета?', a: 'Да. Вы можете отправить пример, фото, референс или описание. Мы подскажем, как лучше подготовить макет для печати.' },
    { q: 'Печатаете только на своей одежде или можно на нашей?', a: 'Это зависит от типа изделия и задачи. Лучше уточнить этот момент при расчете, чтобы мы сразу сказали, подойдет ли ваш текстиль для нанесения.' },
    { q: 'Какие сроки изготовления?', a: 'Срок зависит от тиража, сложности макета, типа изделия и загрузки. Если заказ срочный, сообщите об этом сразу — посмотрим, что можно сделать.' },
    { q: 'Работаете ли вы с компаниями?', a: 'Да, мы принимаем B2B-заказы: корпоративная одежда, брендирование формы, мерч, текстиль для сотрудников и мероприятий.' },
    { q: 'Можно получить расчет в Telegram?', a: 'Да, вы можете перейти в Telegram и отправить заявку там. Это один из самых удобных способов быстро обсудить заказ.' },
    { q: 'Можно ли заказать печать логотипа на спецодежде?', a: 'Да, мы делаем нанесение логотипов на рабочую одежду и текстиль для персонала.' },
  ];

  return (
    <section className="py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-slate-900 text-center mb-16 tracking-tight">Часто задаваемые вопросы</h2>
        <div className="space-y-6">
          {questions.map((item, index) => (
            <div key={index} className="bg-white/50 rounded-3xl border border-slate-100 overflow-hidden">
              <button 
                className="w-full p-8 text-left flex justify-between items-center"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-bold text-lg text-slate-900">{item.q}</span>
                <motion.div animate={{ rotate: openIndex === index ? 180 : 0 }}>
                  <ChevronDown className="w-6 h-6 text-slate-400" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-8 pb-8 text-slate-600 leading-relaxed"
                  >
                    {item.a}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
