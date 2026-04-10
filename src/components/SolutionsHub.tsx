import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { segments } from '../segments';

export default function SolutionsHub() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });
  const navigate = useNavigate();
  const [activeMobileCard, setActiveMobileCard] = useState<string | null>(null);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const allSegments = Object.values(segments)
    .filter((s) => s.status === 'active')
    .sort((a, b) => a.order - b.order);

  return (
    <section className="py-8">
      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-[32px] p-6 md:p-10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-[100px] opacity-30"></div>
          <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-orange-500 rounded-full mix-blend-multiply filter blur-[100px] opacity-30"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-10 text-center tracking-[-0.5px]">
              Выберите ваш бизнес — покажем решение под вас
            </h2>
            
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex gap-4 md:gap-6 group/list">
            {allSegments.map((s) => (
              <div key={s.id} className="flex-[0_0_100%] md:flex-[0_0_calc(50%-0.75rem)] lg:flex-[0_0_calc(25%-1.125rem)] min-w-0 py-4">
                  <div 
                  data-active={activeMobileCard === s.id}
                  onClick={(e) => {
                    if (window.matchMedia('(max-width: 768px)').matches) {
                      if (activeMobileCard !== s.id) {
                        e.preventDefault();
                        setActiveMobileCard(s.id);
                        return;
                      }
                    }
                    navigate(`/${s.slug}`);
                  }}
                  className="group/card bg-white p-6 lg:p-8 rounded-3xl shadow-lg shadow-slate-200/50 border border-slate-100 flex flex-col h-full relative overflow-hidden transition-all duration-500 cursor-pointer md:group-hover/list:opacity-75 md:hover:!opacity-100 md:hover:-translate-y-2 md:hover:scale-[1.02] md:hover:shadow-2xl md:hover:shadow-blue-500/20 md:hover:border-blue-500/30 data-[active=true]:-translate-y-2 data-[active=true]:scale-[1.02] data-[active=true]:shadow-2xl data-[active=true]:shadow-blue-500/20 data-[active=true]:border-blue-500/30"
                >
                  {/* Base Content */}
                  <div className="relative z-10 flex flex-col h-full transition-opacity duration-500 md:group-hover/card:opacity-0 group-data-[active=true]/card:opacity-0">
                    <div className="mb-4 lg:mb-6 transition-transform duration-700 origin-left md:group-hover/card:scale-110 group-data-[active=true]/card:scale-110 text-blue-600">
                      {s.assets.hubCard.icon.startsWith('http') ? (
                        <img src={s.assets.hubCard.icon} alt={s.assets.hubCard.title} className="w-20 h-20 lg:w-28 lg:h-28 object-contain" />
                      ) : (
                        <span className="text-5xl lg:text-6xl">{s.assets.hubCard.icon}</span>
                      )}
                    </div>
                    <h3 className="text-xl lg:text-2xl font-bold mb-3 lg:mb-4 text-slate-900">{s.assets.hubCard.title}</h3>
                    <p className="text-sm lg:text-base text-slate-600 leading-relaxed mb-6 lg:mb-8 flex-grow">
                      {s.assets.hubCard.description}
                    </p>
                    <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-3 mt-auto pt-4 lg:pt-6 border-t border-slate-100">
                      <span className="text-blue-600 font-bold flex items-center gap-2 text-sm lg:text-base">
                        Перейти <ArrowRight className="w-4 h-4" />
                      </span>
                      <span className="text-[10px] lg:text-xs font-bold text-slate-700 bg-slate-200/80 px-2 lg:px-3 py-1 lg:py-1.5 rounded-full whitespace-nowrap w-fit">
                        {s.assets.hubCard.socialProof}
                      </span>
                    </div>
                  </div>

                  {/* Cinematic Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-800 opacity-0 md:group-hover/card:opacity-100 group-data-[active=true]/card:opacity-100 transition-opacity duration-500 flex flex-col justify-center p-6 lg:p-8 z-20">
                    <h3 className="text-xl lg:text-2xl font-bold text-white mb-3 lg:mb-4 transform translate-y-4 opacity-0 md:group-hover/card:translate-y-0 md:group-hover/card:opacity-100 group-data-[active=true]/card:translate-y-0 group-data-[active=true]/card:opacity-100 transition-all duration-500 delay-75">
                      {s.assets.hubCard.title}
                    </h3>
                    <p className="text-sm lg:text-base text-slate-300 leading-relaxed mb-6 lg:mb-8 transform translate-y-4 opacity-0 md:group-hover/card:translate-y-0 md:group-hover/card:opacity-100 group-data-[active=true]/card:translate-y-0 group-data-[active=true]/card:opacity-100 transition-all duration-500 delay-150">
                      {s.assets.hubCard.descriptionHover}
                    </p>
                    <div className="transform translate-y-4 opacity-0 md:group-hover/card:translate-y-0 md:group-hover/card:opacity-100 group-data-[active=true]/card:translate-y-0 group-data-[active=true]/card:opacity-100 transition-all duration-500 delay-200">
                      <span className="inline-flex items-center gap-2 text-white font-bold bg-blue-600 px-4 lg:px-6 py-2 lg:py-3 rounded-full hover:bg-blue-500 transition-colors text-sm lg:text-base">
                        Перейти <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center mt-8 text-slate-400 font-medium flex items-center justify-center gap-2 animate-pulse">
          Листайте <ArrowRight className="w-4 h-4" />
        </div>

        <button onClick={scrollPrev} className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-orange-500/40 hover:bg-orange-500/60 backdrop-blur-md text-white p-3 rounded-full shadow-lg shadow-orange-500/20 transition border-none group/btn z-20">
          <ChevronLeft className="w-6 h-6 transition-transform group-hover/btn:-translate-x-1" />
        </button>
        <button onClick={scrollNext} className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-orange-500/40 hover:bg-orange-500/60 backdrop-blur-md text-white p-3 rounded-full shadow-lg shadow-orange-500/20 transition border-none group/btn z-20">
          <ChevronRight className="w-6 h-6 transition-transform group-hover/btn:translate-x-1" />
        </button>
          </div>
        </div>
      </div>
    </section>
  );
}
