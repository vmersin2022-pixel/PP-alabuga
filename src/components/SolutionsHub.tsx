import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { segments } from '../segments';

export default function SolutionsHub() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });
  const [hoveredSegment, setHoveredSegment] = useState<string | null>(null);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const allSegments = Object.values(segments)
    .filter((s) => s.status === 'active')
    .sort((a, b) => a.order - b.order);

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 relative">
        <h2 className="text-4xl font-extrabold text-slate-900 mb-16 text-center tracking-tight">Решения для бизнеса</h2>
        
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-8">
            {allSegments.map((s) => (
              <div key={s.id} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.33%] min-w-0">
                <Link 
                  to={`/${s.slug}`} 
                  className="bg-white p-10 rounded-3xl shadow-lg shadow-slate-200/50 hover:shadow-xl hover:shadow-slate-200/60 transition-all duration-300 border border-slate-100 flex flex-col h-full relative overflow-hidden"
                  onMouseEnter={() => setHoveredSegment(s.id)}
                  onMouseLeave={() => setHoveredSegment(null)}
                >
                  <div className="text-5xl mb-6">{s.assets.hubCard.icon}</div>
                  <h3 className="text-2xl font-bold mb-4 text-slate-900">{s.assets.hubCard.title}</h3>
                  <p className="text-slate-600 mb-8 flex-grow leading-relaxed">{s.assets.hubCard.description}</p>
                  <div className="text-blue-600 font-bold flex items-center gap-2">
                    {s.assets.hubCard.cta} →
                  </div>
                  
                  {hoveredSegment === s.id && (
                    <div className="absolute inset-0 bg-blue-600/95 p-10 rounded-3xl flex flex-col justify-center text-white animate-in fade-in duration-300">
                      <h4 className="font-bold text-xl mb-6">Почему выбирают нас:</h4>
                      <ul className="space-y-4">
                        {s.hero.benefits.map((b) => <li key={b} className="flex items-center gap-3 text-lg">✓ {b}</li>)}
                      </ul>
                    </div>
                  )}
                </Link>
              </div>
            ))}
          </div>
        </div>

        <button onClick={scrollPrev} className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-4 rounded-full shadow-lg hover:bg-slate-50 transition border border-slate-100">
          <ChevronLeft className="w-8 h-8 text-slate-900" />
        </button>
        <button onClick={scrollNext} className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-4 rounded-full shadow-lg hover:bg-slate-50 transition border border-slate-100">
          <ChevronRight className="w-8 h-8 text-slate-900" />
        </button>
      </div>
    </section>
  );
}
