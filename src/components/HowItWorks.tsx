import React from 'react';
import { MessageSquare, Calculator, PenTool, Truck } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    { 
      icon: <MessageSquare className="w-10 h-10" strokeWidth={1.5} />,
      title: 'Оставляете заявку', 
      desc: 'Связываемся с вами за 10–15 минут' 
    },
    { 
      icon: <Calculator className="w-10 h-10" strokeWidth={1.5} />,
      title: 'Считаем и предлагаем вариант', 
      desc: 'Подбираем одежду и способ печати под задачу' 
    },
    { 
      icon: <PenTool className="w-10 h-10" strokeWidth={1.5} />,
      title: 'Согласуем макет', 
      desc: 'Утверждаете дизайн перед запуском' 
    },
    { 
      icon: <Truck className="w-10 h-10" strokeWidth={1.5} />,
      title: 'Печатаем и доставляем', 
      desc: 'Получаете форму с логотипом, который не стирается' 
    },
  ];

  return (
    <section className="py-8 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-slate-900 text-center mb-16 tracking-tight">Как мы работаем</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="group bg-white p-8 rounded-[24px] shadow-sm shadow-slate-200/50 border border-slate-100 flex flex-col relative overflow-hidden transition-all duration-500 cursor-pointer hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20"
            >
              {/* Base Content */}
              <div className="relative z-10 flex flex-col h-full transition-opacity duration-500 group-hover:opacity-0">
                <div className="flex items-center justify-between mb-6">
                  <div className="text-blue-600 transition-transform duration-700 group-hover:scale-110 origin-left">
                    {step.icon}
                  </div>
                  <div className="text-4xl font-extrabold text-orange-500/20">
                    0{index + 1}
                  </div>
                </div>
                <h3 className="font-bold text-2xl text-slate-900 mb-4">{step.title}</h3>
                <p className="text-slate-600 text-lg leading-relaxed flex-grow">{step.desc}</p>
              </div>

              {/* Cinematic Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-800 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center p-8 z-20">
                <div className="absolute top-8 right-8 text-4xl font-extrabold text-orange-400/20">
                  0{index + 1}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-75">
                  {step.title}
                </h3>
                <p className="text-slate-300 text-lg leading-relaxed transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-150">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
