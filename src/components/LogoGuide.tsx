import React from 'react';
import { motion } from 'motion/react';
import { FileType, Maximize, Palette, CheckCircle2, AlertCircle } from 'lucide-react';

export default function LogoGuide() {
  const requirements = [
    {
      icon: <FileType className="w-6 h-6" />,
      title: 'Форматы файлов',
      description: 'Предпочтительно векторные форматы: .AI, .EPS, .PDF, .SVG. Они позволяют масштабировать логотип без потери качества.',
      color: 'blue'
    },
    {
      icon: <Maximize className="w-6 h-6" />,
      title: 'Разрешение',
      description: 'Для растровых изображений (.PNG, .JPG) разрешение должно быть не менее 300 DPI в реальном размере печати.',
      color: 'orange'
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: 'Цветовая модель',
      description: 'Используйте CMYK или укажите номера Pantone. Цвета на экране (RGB) могут отличаться от печатных.',
      color: 'emerald'
    }
  ];

  return (
    <section className="py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-white dark:bg-slate-800/50 rounded-[48px] p-8 md:p-16 border border-slate-100 dark:border-white/5 shadow-2xl relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -mt-32 -mr-32" />
          
          <div className="relative z-10">
            <div className="flex flex-col items-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 text-[10px] font-black uppercase tracking-widest mb-6">
                Полезно знать
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white text-center tracking-tight">
                Как подготовить логотип <br className="hidden md:block" />
                <span className="text-blue-600">для идеальной печати</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {requirements.map((req, i) => (
                <motion.div
                  key={req.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-slate-900/50 p-8 rounded-[48px] border-8 border-white dark:border-slate-800 shadow-2xl shadow-blue-500/10 transition-all group relative overflow-hidden hover:-translate-y-3"
                >
                  {/* Background Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-600/5 to-transparent pointer-events-none" />

                  <div className="relative z-10">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 ${
                      req.color === 'blue' ? 'bg-blue-100 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400' :
                      req.color === 'orange' ? 'bg-orange-100 text-orange-600 dark:bg-orange-500/20 dark:text-orange-400' :
                      'bg-emerald-100 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400'
                    }`}>
                      {req.icon}
                    </div>
                    <h3 className="text-xl font-black text-slate-900 dark:text-white mb-4">{req.title}</h3>
                    <p className="text-slate-500 dark:text-slate-400 leading-relaxed font-medium text-sm">
                      {req.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="bg-blue-600 rounded-[32px] p-8 md:p-10 text-white flex flex-col md:flex-row items-center gap-8 shadow-xl shadow-blue-500/20">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                <AlertCircle className="w-8 h-8" />
              </div>
              <div className="text-center md:text-left">
                <h4 className="text-xl font-black mb-2">Нет макета в нужном формате?</h4>
                <p className="text-blue-100 font-medium">
                  Не переживайте! Наши дизайнеры помогут отрисовать ваш логотип в векторе или подготовить его к печати с нуля.
                </p>
              </div>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://t.me/PrintProject16"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-black whitespace-nowrap shadow-lg flex items-center justify-center"
              >
                Нужна помощь
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
