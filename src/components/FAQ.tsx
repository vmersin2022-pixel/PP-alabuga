import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  const questions = [
    { q: 'Можно ли заказать без готового макета?', a: 'Да, мы поможем подготовить макет к печати.' },
    { q: 'Можно ли прислать только фото или логотип?', a: 'Да, присылайте, мы подскажем, как лучше нанести.' },
    { q: 'На каких изделиях вы делаете нанесение?', a: 'Футболки, худи, спецодежда, жилеты, куртки, кепки, каски и ткань.' },
    { q: 'Работаете ли с компаниями и корпоративными заказами?', a: 'Да, брендирование формы для сотрудников — наше основное направление.' },
    { q: 'Можно ли сделать срочно?', a: 'Срочные заказы выполняем по загрузке производства.' },
    { q: 'От какого тиража принимаете заказы?', a: 'Принимаем малые и средние тиражи, условия уточняются по задаче.' },
    { q: 'Можно ли заказать нанесение на кепки и каски?', a: 'Да, мы делаем брендирование кепок и маркировку касок.' },
  ];

  return (
    <section className="py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-slate-900 text-center mb-16 tracking-tight">Частые вопросы</h2>
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
