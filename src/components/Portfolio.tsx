import React from 'react';

const works = [
  { seed: 'branded-tshirt', title: 'Принт на футболке', url: 'https://i.postimg.cc/JnXFqVFh/1-(2).webp' },
  { seed: 'team-hoodie', title: 'Мерч для команды', url: 'https://i.postimg.cc/ZKK5f485/Gemini-Generated-Image-7f9wb17f9wb17f9w-(1).png' },
  { seed: 'corporate-vest', title: 'Брендированный жилет', url: 'https://i.postimg.cc/QxCy4TwP/Gemini-Generated-Image-jxm6lkjxm6lkjxm6-(1).png' },
  { seed: 'branded-cap', title: 'Кепка с логотипом', url: 'https://i.postimg.cc/J4LMgmjZ/Gemini-Generated-Image-q9yya3q9yya3q9yy-(1).png' },
  { seed: 'corporate-jacket', title: 'Куртка для компании', url: 'https://i.postimg.cc/FzHLvcLv/Gemini-Generated-Image-qy75xfqy75xfqy75-(1).png' },
  { seed: 'branded-helmet', title: 'Маркировка каски', url: 'https://i.postimg.cc/hj0vZjhr/Gemini-Generated-Image-ewrwmsewrwmsewrw-(1).png' },
];

export default function Portfolio() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-slate-900 text-center mb-16 tracking-tight">Наши работы</h2>
        <div className="columns-2 md:columns-3 gap-8 space-y-8">
          {works.map((work, index) => (
            <div key={index} className="rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 break-inside-avoid bg-white/50">
              <img 
                src={work.url || `https://picsum.photos/seed/${work.seed}/600/800`} 
                alt={work.title} 
                className="w-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="p-8">
                <p className="font-bold text-xl text-slate-900">{work.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
