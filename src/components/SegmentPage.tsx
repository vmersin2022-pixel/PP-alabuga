import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { segments } from '../segments';
import Header from './Header';
import Footer from './Footer';
import ContactForm from './ContactForm';
import BackgroundLayer from './BackgroundLayer';
import Modal from './Modal';
import StickyMobileMenu from './StickyMobileMenu';
import { ArrowRight, CheckCircle2, MessageCircle, Sparkles, Zap } from 'lucide-react';
import { getProxyImageUrl } from '../lib/imageUtils';

export default function SegmentPage() {
  const { segment } = useParams<{ segment: string }>();
  const config = segment ? segments[segment] : null;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeWorkCard, setActiveWorkCard] = useState<string | null>(null);

  if (!config) {
    return <div>Страница не найдена</div>;
  }

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden dark:bg-slate-950 transition-colors">
      <BackgroundLayer />
      <Header onOpenModal={() => setIsModalOpen(true)} />
      
      <main className="flex-grow pt-24 pb-12">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <Link to="/" className="inline-flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 mb-12 transition-all hover:-translate-x-1 group">
              <div className="bg-white dark:bg-slate-800 p-2 rounded-xl shadow-sm border border-slate-100 dark:border-white/5 group-hover:border-blue-200 dark:group-hover:border-blue-500/30 transition-colors">
                <ArrowRight className="w-4 h-4 rotate-180" />
              </div>
              <span className="font-bold text-sm">Все решения</span>
            </Link>
          </motion.div>
          
          {/* Hero */}
          <section className="mb-20">
            <div className="max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 text-xs font-bold uppercase tracking-widest mb-8">
                  <Zap className="w-3.5 h-3.5" />
                  Готовое решение
                </div>
                <h1 className="text-4xl md:text-7xl font-black text-slate-900 dark:text-white mb-8 tracking-tight leading-[1.1]">
                  {config.hero.title}
                </h1>
                <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed max-w-3xl font-medium">
                  {config.hero.subtitle}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-10">
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setIsModalOpen(true)}
                    className="bg-blue-600 text-white px-10 py-5 rounded-2xl font-black text-lg shadow-xl shadow-blue-500/30 hover:bg-blue-700 transition-all"
                  >
                    {config.hero.ctaPrimary}
                  </motion.button>
                  <motion.a 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href="https://t.me/PrintProject16"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border-2 border-slate-100 dark:border-white/5 px-10 py-5 rounded-2xl font-black text-lg hover:border-blue-200 dark:hover:border-blue-500/30 transition-all"
                  >
                    <MessageCircle className="w-6 h-6 text-[#2AABEE]" />
                    В Telegram
                  </motion.a>
                </div>
                <div className="flex items-center gap-3 text-orange-600 dark:text-orange-400 font-black text-xs bg-orange-50 dark:bg-orange-500/10 px-5 py-3 rounded-2xl w-fit border border-orange-100 dark:border-orange-500/20 uppercase tracking-wider">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-orange-500"></span>
                  </span>
                  {config.hero.microProof}
                </div>
              </motion.div>
            </div>
          </section>

          {/* For Whom */}
          {config.forWhom.length > 0 && (
            <motion.section 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mb-20"
            >
              <h2 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-8">Для кого это решение</h2>
              <div className="flex flex-wrap gap-3">
                {config.forWhom.map((item, i) => (
                  <motion.span 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.05 }}
                    key={item} 
                    className="bg-white dark:bg-slate-800 px-6 py-4 rounded-2xl font-bold text-slate-700 dark:text-slate-300 border border-slate-100 dark:border-white/5 shadow-sm"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.section>
          )}

          {/* Pain Points */}
          <section className="mb-20">
            <div className="flex flex-col items-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 text-[10px] font-black uppercase tracking-widest mb-6">
                Проблематика
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white text-center tracking-tight">С какими болями мы работаем</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: 'Бизнес', items: config.painPoints.business, color: 'blue', icon: <Sparkles className="w-6 h-6" /> },
                { title: 'Закупки', items: config.painPoints.procurement, color: 'orange', icon: <Zap className="w-6 h-6" /> },
                { title: 'Эксплуатация', items: config.painPoints.exploitation, color: 'emerald', icon: <CheckCircle2 className="w-6 h-6" /> }
              ].map((group, i) => (
                <motion.div
                  key={group.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-slate-800 p-8 rounded-[48px] border-8 border-white dark:border-slate-800 shadow-2xl shadow-blue-500/10 dark:shadow-none flex flex-col h-full group hover:-translate-y-3 transition-all duration-500"
                >
                  {/* Background Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-600/5 to-transparent pointer-events-none" />

                  <div className="relative z-10">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 transition-transform group-hover:scale-110 ${
                      group.color === 'blue' ? 'bg-blue-100 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400' :
                      group.color === 'orange' ? 'bg-orange-100 text-orange-600 dark:bg-orange-500/20 dark:text-orange-400' :
                      'bg-emerald-100 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400'
                    }`}>
                      {group.icon}
                    </div>
                    <h3 className="font-black text-xl mb-6 uppercase tracking-widest text-slate-900 dark:text-white">{group.title}</h3>
                    <ul className="space-y-4">
                      {group.items.map((p) => (
                        <li key={p} className="flex items-start gap-3 text-slate-600 dark:text-slate-400 leading-relaxed group/item">
                          <div className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${
                            group.color === 'blue' ? 'bg-blue-400' :
                            group.color === 'orange' ? 'bg-orange-400' :
                            'bg-emerald-400'
                          }`} />
                          <span className="font-medium text-sm">{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Solutions */}
          <section className="mb-20">
            <div className="flex flex-col items-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 text-[10px] font-black uppercase tracking-widest mb-6">
                Наш подход
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white text-center tracking-tight">Наши решения</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              {config.solutions.map((s, i) => (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  key={s.title} 
                  className="group bg-white dark:bg-slate-800 p-8 md:p-12 rounded-[48px] border-8 border-white dark:border-slate-800 shadow-2xl shadow-blue-500/10 dark:shadow-none hover:-translate-y-3 transition-all duration-500 relative overflow-hidden"
                >
                  {/* Background Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-600/5 to-transparent pointer-events-none" />

                  <div className="relative z-10">
                    <div className="w-14 h-14 bg-blue-50 dark:bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-600 dark:text-blue-400 mb-8 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                      <CheckCircle2 className="w-7 h-7" />
                    </div>
                    <h3 className="font-black text-2xl mb-4 text-slate-900 dark:text-white leading-tight">{s.title}</h3>
                    <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-lg font-medium">{s.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Evidence */}
          {config.evidence.cases.length > 0 && (
            <section className="mb-20">
              <div className="flex flex-col items-center mb-12">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 text-[10px] font-black uppercase tracking-widest mb-6">
                  Результаты
                </div>
                <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white text-center tracking-tight">Примеры работы</h2>
              </div>
              <div className="grid md:grid-cols-3 gap-6 md:gap-8">
                {config.evidence.cases.map((c, i) => (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      if (window.matchMedia('(max-width: 768px)').matches) {
                        setActiveWorkCard(activeWorkCard === c.title ? null : c.title);
                      }
                    }}
                    key={c.title} 
                    className={`group bg-white dark:bg-slate-800 p-4 rounded-[48px] shadow-2xl shadow-blue-500/10 dark:shadow-none border-8 border-white dark:border-slate-800 transition-all duration-500 relative overflow-hidden ${activeWorkCard === c.title ? 'ring-4 ring-blue-500/20 -translate-y-3' : 'hover:-translate-y-3'}`}
                  >
                    {/* Background Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-600/10 to-transparent pointer-events-none opacity-40" />

                    <div className="relative overflow-hidden rounded-[32px] mb-6 aspect-[4/3]">
                      <img 
                        src={getProxyImageUrl(c.image)} 
                        alt={c.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-[.is-active]:scale-110" 
                        referrerPolicy="origin-when-cross-origin"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
                    </div>
                    <div className="px-4 pb-6">
                      <h3 className="font-black text-xl mb-3 text-slate-900 dark:text-white leading-tight">{c.title}</h3>
                      <p className="text-slate-500 dark:text-slate-400 leading-relaxed font-medium">{c.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>
          )}

          {/* How It Works */}
          {config.howItWorks && config.howItWorks.length > 0 && (
            <section className="mb-20">
              <div className="flex flex-col items-center mb-12">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-[10px] font-black uppercase tracking-widest mb-6">
                  Процесс
                </div>
                <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white text-center tracking-tight">Как мы работаем</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
                {config.howItWorks.map((step, index) => (
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    key={step.title} 
                    className="bg-white dark:bg-slate-800 p-8 rounded-[36px] shadow-sm border border-slate-100 dark:border-white/5 hover:border-blue-200 dark:hover:border-blue-500/30 transition-all group"
                  >
                    <div className="text-blue-600 dark:text-blue-400 font-black text-5xl mb-6 opacity-10 group-hover:opacity-30 transition-opacity">{index + 1}</div>
                    <h3 className="font-black text-lg mb-3 text-slate-900 dark:text-white leading-tight">{step.title}</h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed font-medium">{step.description}</p>
                  </motion.div>
                ))}
              </div>
            </section>
          )}

          {/* Form */}
          <section className="mb-20">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-slate-800 p-8 md:p-16 rounded-[48px] shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)] border border-slate-100 dark:border-white/5 max-w-3xl mx-auto relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-blue-50 dark:bg-blue-500/10 rounded-full -mt-24 -mr-24 opacity-50"></div>
              <div className="relative z-10">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-4">Оставьте заявку</h2>
                  <p className="text-slate-500 dark:text-slate-400 font-medium">Обсудим ваш проект и предложим лучшие варианты</p>
                </div>
                <ContactForm onClose={() => setIsModalOpen(false)} />
              </div>
            </motion.div>
          </section>

          {/* Final CTA */}
          <section className="mb-20">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 p-12 md:p-24 rounded-[64px] text-white shadow-[0_40px_80px_-15px_rgba(37,99,235,0.4)] relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full -ml-48 -mt-48 blur-[100px]"></div>
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/20 rounded-full -mr-48 -mb-48 blur-[100px]"></div>
              
              <div className="relative z-10">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <h2 className="text-3xl md:text-6xl font-black mb-8 tracking-tight leading-tight">{config.finalCta.title}</h2>
                  <p className="text-xl md:text-2xl mb-12 opacity-90 max-w-3xl mx-auto leading-relaxed font-medium">{config.finalCta.description}</p>
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsModalOpen(true)}
                    className="bg-white text-blue-600 px-12 py-6 rounded-[24px] font-black text-xl shadow-2xl hover:bg-slate-50 transition-all"
                  >
                    {config.finalCta.buttonText}
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          </section>
        </div>
      </main>

      <Footer />
      <StickyMobileMenu onOpenModal={() => setIsModalOpen(true)} />

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ContactForm onClose={() => setIsModalOpen(false)} />
      </Modal>
    </div>
  );
}
