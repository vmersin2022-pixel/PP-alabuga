import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { segments } from '../segments';
import Header from './Header';
import Footer from './Footer';
import ContactForm from './ContactForm';
import BackgroundLayer from './BackgroundLayer';
import Modal from './Modal';
import StickyMobileMenu from './StickyMobileMenu';
import { ArrowRight, CheckCircle2, MessageCircle } from 'lucide-react';

export default function SegmentPage() {
  const { segment } = useParams<{ segment: string }>();
  const config = segment ? segments[segment] : null;
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!config) {
    return <div>Страница не найдена</div>;
  }

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-blue-100 selection:text-blue-900">
      <BackgroundLayer />
      <Header onOpenModal={() => setIsModalOpen(true)} />
      
      <main className="flex-grow pt-24 pb-12">
        <div className="max-w-6xl mx-auto px-4">
          <Link to="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 mb-12 transition-all hover:-translate-x-1 group">
            <div className="bg-white p-2 rounded-xl shadow-sm border border-slate-100 group-hover:border-blue-200 transition-colors">
              <ArrowRight className="w-4 h-4 rotate-180" />
            </div>
            <span className="font-bold text-sm">Все решения</span>
          </Link>
          
          {/* Hero */}
          <section className="mb-16">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-7xl font-extrabold text-slate-900 mb-8 tracking-tight leading-[1.1]">
                {config.hero.title}
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 mb-10 leading-relaxed max-w-3xl">
                {config.hero.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="bg-gradient-to-br from-blue-600 to-indigo-600 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:-translate-y-1 transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_40px_rgba(37,99,235,0.7)]"
                >
                  {config.hero.ctaPrimary}
                </button>
                <a 
                  href="https://t.me/PrintProject16"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-white text-slate-900 border-2 border-slate-200 px-10 py-5 rounded-2xl font-bold text-lg hover:-translate-y-1 transition-all hover:border-blue-500 hover:bg-slate-50"
                >
                  <MessageCircle className="w-5 h-5" />
                  В Telegram
                </a>
              </div>
              <div className="flex items-center gap-2 text-orange-600 font-bold text-sm bg-orange-50 px-4 py-2 rounded-full w-fit border border-orange-100">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                </span>
                {config.hero.microProof}
              </div>
            </div>
          </section>

          {/* For Whom */}
          {config.forWhom.length > 0 && (
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-slate-900 mb-8 tracking-tight">Для кого это решение</h2>
              <div className="flex flex-wrap gap-3">
                {config.forWhom.map((item) => (
                  <span key={item} className="bg-white px-6 py-3 rounded-2xl font-bold text-slate-700 border border-slate-100 shadow-sm hover:border-blue-200 transition-colors">
                    {item}
                  </span>
                ))}
              </div>
            </section>
          )}

          {/* Pain Points */}
          <section className="mb-16">
            <div className="bg-slate-900 rounded-[40px] p-8 md:p-16 text-white relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-[100px] opacity-20"></div>
              <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-orange-500 rounded-full mix-blend-multiply filter blur-[100px] opacity-20"></div>
              
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-extrabold mb-12 tracking-tight">С какими болями мы работаем</h2>
                <div className="grid md:grid-cols-3 gap-12">
                  {[
                    { title: 'Бизнес', items: config.painPoints.business },
                    { title: 'Закупки', items: config.painPoints.procurement },
                    { title: 'Эксплуатация', items: config.painPoints.exploitation }
                  ].map((group) => (
                    <div key={group.title}>
                      <h3 className="font-bold text-xl mb-6 text-blue-400">{group.title}</h3>
                      <ul className="space-y-4">
                        {group.items.map((p) => (
                          <li key={p} className="flex items-start gap-3 text-slate-300 leading-relaxed">
                            <span className="text-orange-500 mt-1.5">•</span>
                            <span>{p}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Solutions */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-10 tracking-tight">Наши решения</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {config.solutions.map((s) => (
                <div key={s.title} className="group bg-white p-8 md:p-10 rounded-[32px] border border-slate-100 shadow-lg shadow-slate-200/50 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 hover:-translate-y-1">
                  <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-2xl mb-4 text-slate-900">{s.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-lg">{s.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Evidence */}
          {config.evidence.cases.length > 0 && (
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-10 tracking-tight">Примеры работы</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {config.evidence.cases.map((c) => (
                  <div key={c.title} className="group bg-white p-4 rounded-[32px] shadow-lg shadow-slate-200/50 border border-slate-100 hover:shadow-2xl transition-all duration-500">
                    <div className="relative overflow-hidden rounded-2xl mb-6 aspect-[4/3]">
                      <img src={c.image} alt={c.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                    </div>
                    <div className="px-4 pb-4">
                      <h3 className="font-bold text-xl mb-3 text-slate-900">{c.title}</h3>
                      <p className="text-slate-600 leading-relaxed">{c.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* How It Works */}
          {config.howItWorks && config.howItWorks.length > 0 && (
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-10 tracking-tight">Как мы работаем</h2>
              <div className="grid md:grid-cols-5 gap-6">
                {config.howItWorks.map((step, index) => (
                  <div key={step.title} className="bg-white p-8 rounded-[32px] shadow-sm border border-slate-100 hover:border-blue-200 transition-colors">
                    <div className="text-blue-600 font-extrabold text-4xl mb-6 opacity-20">{index + 1}</div>
                    <h3 className="font-bold text-lg mb-3 text-slate-900">{step.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{step.description}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Form */}
          <section className="mb-16">
            <div className="bg-white p-8 md:p-12 rounded-[40px] shadow-2xl border border-slate-100 max-w-2xl mx-auto relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full -mt-16 -mr-16"></div>
              <div className="relative z-10">
                <ContactForm onClose={() => setIsModalOpen(false)} />
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="text-center mb-16 bg-gradient-to-br from-blue-600 to-indigo-700 p-12 md:p-20 rounded-[48px] text-white shadow-2xl shadow-blue-500/30 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -ml-32 -mt-32 blur-3xl"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">{config.finalCta.title}</h2>
              <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto leading-relaxed">{config.finalCta.description}</p>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-white text-blue-600 px-12 py-5 rounded-2xl font-bold text-xl hover:bg-slate-50 transition-all hover:-translate-y-1 shadow-xl"
              >
                {config.finalCta.buttonText}
              </button>
            </div>
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
