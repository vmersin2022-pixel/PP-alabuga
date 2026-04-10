import React, { useState } from 'react';

const works = [
  { seed: 'branded-tshirt', title: 'Принт на футболке', url: 'https://i.postimg.cc/JnXFqVFh/1-(2).webp', stats: '50 шт за 2 дня' },
  { seed: 'team-hoodie', title: 'Мерч для команды', url: 'https://i.postimg.cc/ZKK5f485/Gemini-Generated-Image-7f9wb17f9wb17f9w-(1).png', stats: '20 шт за 3 дня' },
  { seed: 'corporate-vest', title: 'Брендированный жилет', url: 'https://i.postimg.cc/QxCy4TwP/Gemini-Generated-Image-jxm6lkjxm6lkjxm6-(1).png', stats: '15 шт за 1 день' },
  { seed: 'branded-cap', title: 'Кепка с логотипом', url: 'https://i.postimg.cc/J4LMgmjZ/Gemini-Generated-Image-q9yya3q9yya3q9yy-(1).png', stats: '100 шт за 5 дней' },
  { seed: 'corporate-jacket', title: 'Куртка для компании', url: 'https://i.postimg.cc/FzHLvcLv/Gemini-Generated-Image-qy75xfqy75xfqy75-(1).png', stats: '25 комплектов за 3 дня' },
  { seed: 'branded-helmet', title: 'Маркировка каски', url: 'https://i.postimg.cc/hj0vZjhr/Gemini-Generated-Image-ewrwmsewrwmsewrw-(1).png', stats: '50 шт за 2 дня' },
];

export default function Portfolio() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-slate-900 text-center mb-16 tracking-tight">Наши работы</h2>
        <div className="columns-2 md:columns-3 gap-8 space-y-8">
          {works.map((work, index) => (
            <div 
              key={index} 
              className="rounded-3xl overflow-hidden shadow-lg shadow-slate-200/50 hover:shadow-xl hover:shadow-slate-200/60 transition-all duration-300 break-inside-avoid bg-white relative group"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img 
                src={work.url || `https://picsum.photos/seed/${work.seed}/600/800`} 
                alt={work.title} 
                className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="p-8">
                <p className="font-bold text-xl text-slate-900 mb-2">{work.title}</p>
                <p className="text-sm text-blue-600 font-bold uppercase tracking-wider">{work.stats}</p>
              </div>
              {hoveredIndex === index && (
                <div className="absolute inset-0 bg-blue-600/90 flex items-center justify-center text-white font-bold text-xl animate-in fade-in duration-300">
                  Смотреть кейс
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
