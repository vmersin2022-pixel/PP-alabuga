import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useEmblaCarousel from 'embla-carousel-react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight, ArrowRight, Sparkles } from 'lucide-react';
import { segments } from '../segments';
import { getProxyImageUrl } from '../lib/imageUtils';

export default function SolutionsHub() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true, 
    align: 'start',
    containScroll: 'trimSnaps'
  });
  const navigate = useNavigate();
  const [activeMobileCard, setActiveMobileCard] = useState<string | null>(null);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const allSegments = Object.values(segments)
    .filter((s) => s.status === 'active')
    .sort((a, b) => a.order - b.order);

  return (
    <section id="b2b" className="py-8 md:py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-[40px] p-6 md:p-12 lg:p-16 shadow-[0_32px_64px_-12px_rgba(0,0,0,0.5)] relative overflow-hidden border border-white/5">
          <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-[120px] opacity-20 animate-pulse"></div>
          <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-96 h-96 bg-orange-600 rounded-full mix-blend-multiply filter blur-[120px] opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
          
          <div className="relative z-10">
            <div className="flex flex-col items-center mb-12">
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6"
              >
                <Sparkles className="w-3.5 h-3.5" />
                Индивидуальные решения
              </motion.div>
              <h2 className="text-3xl md:text-5xl font-black text-white text-center tracking-tight leading-tight max-w-3xl">
                Выберите ваш бизнес — <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200">покажем решение</span> под вас
              </h2>
            </div>
            
            <div className="overflow-visible" ref={emblaRef}>
              <div className="flex gap-4 md:gap-8 group/list">
                {allSegments.map((s) => (
                  <div key={s.id} className="flex-[0_0_85%] md:flex-[0_0_45%] lg:flex-[0_0_23%] min-w-0 py-4">
                    <motion.div 
                      whileTap={{ scale: 0.98 }}
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
                      className={`group/card bg-white dark:bg-slate-800 rounded-[48px] shadow-2xl shadow-blue-500/10 border-8 border-white dark:border-slate-800 flex flex-col h-full relative overflow-hidden transition-all duration-500 cursor-pointer md:group-hover/list:opacity-75 md:hover:!opacity-100 md:hover:-translate-y-3 md:hover:shadow-blue-500/20 ${activeMobileCard === s.id ? 'is-active ring-4 ring-blue-500/20 -translate-y-3 shadow-2xl' : ''}`}
                    >
                      {/* Background Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-600/5 to-transparent pointer-events-none" />

                      {/* Base Content */}
                      <div className="relative z-10 p-8 flex flex-col h-full transition-opacity duration-500 md:group-hover/card:opacity-0 group-[.is-active]:opacity-0">
                        <div className="mb-8 transition-transform duration-700 origin-left md:group-hover/card:scale-110 group-[.is-active]:scale-110">
                          <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-[24px] bg-slate-50 dark:bg-slate-900/50 flex items-center justify-center p-4">
                            {s.assets.hubCard.icon.startsWith('http') ? (
                              <img 
                                src={getProxyImageUrl(s.assets.hubCard.icon)} 
                                alt={s.assets.hubCard.title} 
                                className="w-full h-full object-contain" 
                                referrerPolicy="origin-when-cross-origin"
                              />
                            ) : (
                              <span className="text-4xl lg:text-5xl">{s.assets.hubCard.icon}</span>
                            )}
                          </div>
                        </div>
                        <h3 className="text-2xl lg:text-3xl font-black mb-4 text-slate-900 dark:text-white tracking-tight leading-tight">{s.assets.hubCard.title}</h3>
                        <p className="text-base lg:text-lg text-slate-500 dark:text-slate-400 leading-relaxed mb-10 flex-grow font-medium">
                          {s.assets.hubCard.description}
                        </p>
                        <div className="flex items-center justify-between mt-auto pt-8 border-t border-slate-50 dark:border-white/5">
                          <span className="text-blue-600 dark:text-blue-400 font-black flex items-center gap-2 text-sm">
                            Подробнее <ArrowRight className="w-4 h-4" />
                          </span>
                          <span className="text-[10px] font-black text-slate-400 uppercase tracking-tighter">
                            {s.assets.hubCard.socialProof}
                          </span>
                        </div>
                      </div>

                      {/* Cinematic Hover Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-700 to-blue-900 opacity-0 md:group-hover/card:opacity-100 group-[.is-active]:opacity-100 transition-opacity duration-500 flex flex-col justify-center p-8 z-20">
                        <h3 className="text-xl lg:text-2xl font-bold text-white mb-4 transform translate-y-4 opacity-0 md:group-hover/card:translate-y-0 md:group-hover/card:opacity-100 group-[.is-active]:translate-y-0 group-[.is-active]:opacity-100 transition-all duration-500 delay-75">
                          {s.assets.hubCard.title}
                        </h3>
                        <p className="text-sm lg:text-base text-blue-100 leading-relaxed mb-8 transform translate-y-4 opacity-0 md:group-hover/card:translate-y-0 md:group-hover/card:opacity-100 group-[.is-active]:translate-y-0 group-[.is-active]:opacity-100 transition-all duration-500 delay-150">
                          {s.assets.hubCard.descriptionHover}
                        </p>
                        <div className="transform translate-y-4 opacity-0 md:group-hover/card:translate-y-0 md:group-hover/card:opacity-100 group-[.is-active]:translate-y-0 group-[.is-active]:opacity-100 transition-all duration-500 delay-200">
                          <span className="inline-flex items-center gap-2 text-blue-900 font-bold bg-white px-6 py-3 rounded-full shadow-xl text-sm">
                            Смотреть решение <ArrowRight className="w-4 h-4" />
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex items-center justify-between mt-12">
              <div className="flex gap-2">
                <button onClick={scrollPrev} className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors border border-white/10">
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button onClick={scrollNext} className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors border border-white/10">
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
              <div className="hidden md:flex items-center gap-2 text-slate-400 text-sm font-medium">
                Листайте вправо <ArrowRight className="w-4 h-4 animate-bounce-x" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
