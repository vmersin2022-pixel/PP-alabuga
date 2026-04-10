import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { segments } from '../segments';
import Header from './Header';
import Footer from './Footer';
import ContactForm from './ContactForm';

export default function SegmentPage() {
  const { segment } = useParams<{ segment: string }>();
  const config = segment ? segments[segment] : null;

  if (!config) {
    return <div>Страница не найдена</div>;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header onOpenModal={() => {}} />
      <main className="flex-grow py-20">
        <div className="max-w-5xl mx-auto px-4">
          <Link to="/" className="sticky top-24 z-10 inline-flex items-center text-slate-500 hover:text-blue-600 mb-8 transition-colors bg-white/80 backdrop-blur-sm p-2 rounded-lg w-fit">
            ← Назад к решениям
          </Link>
          
          {/* Hero */}
          <section className="mb-20">
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6">{config.hero.title}</h1>
            <p className="text-xl text-slate-600 mb-8">{config.hero.subtitle}</p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition shadow-lg shadow-blue-500/30">{config.hero.ctaPrimary}</button>
              <button className="bg-slate-100 text-slate-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-200 transition">{config.hero.ctaSecondary}</button>
            </div>
            <p className="text-sm text-slate-500 font-medium">{config.hero.microProof}</p>
          </section>

          {/* For Whom */}
          {config.forWhom.length > 0 && (
            <section className="mb-20">
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Для кого это решение</h2>
              <div className="flex flex-wrap gap-4">
                {config.forWhom.map((item) => (
                  <span key={item} className="bg-slate-100 px-6 py-3 rounded-full font-semibold text-slate-800">{item}</span>
                ))}
              </div>
            </section>
          )}

          {/* Pain Points */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">С какими болями мы работаем</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-bold text-lg mb-4">Бизнес</h3>
                <ul className="space-y-2 text-slate-600">
                  {config.painPoints.business.map((p) => <li key={p}>• {p}</li>)}
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4">Закупки</h3>
                <ul className="space-y-2 text-slate-600">
                  {config.painPoints.procurement.map((p) => <li key={p}>• {p}</li>)}
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4">Эксплуатация</h3>
                <ul className="space-y-2 text-slate-600">
                  {config.painPoints.exploitation.map((p) => <li key={p}>• {p}</li>)}
                </ul>
              </div>
            </div>
          </section>

          {/* Solutions */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Наши решения</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {config.solutions.map((s) => (
                <div key={s.title} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
                  <h3 className="font-bold text-xl mb-2">{s.title}</h3>
                  <p className="text-slate-600">{s.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Evidence */}
          {config.evidence.cases.length > 0 && (
            <section className="mb-20">
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Примеры работы</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {config.evidence.cases.map((c) => (
                  <div key={c.title} className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
                    <img src={c.image} alt={c.title} className="w-full h-48 object-cover rounded-2xl mb-4" />
                    <h3 className="font-bold text-lg mb-2">{c.title}</h3>
                    <p className="text-slate-600 text-sm">{c.description}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* How It Works */}
          {config.howItWorks && config.howItWorks.length > 0 && (
            <section className="mb-20">
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Как мы работаем</h2>
              <div className="grid md:grid-cols-5 gap-4">
                {config.howItWorks.map((step, index) => (
                  <div key={step.title} className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
                    <div className="text-blue-600 font-bold text-2xl mb-2">{index + 1}</div>
                    <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                    <p className="text-slate-600 text-sm">{step.description}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Form */}
          <section className="mb-20">
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 max-w-2xl mx-auto">
              <ContactForm onClose={() => {}} />
            </div>
          </section>

          {/* Final CTA */}
          <section className="text-center mb-20 bg-blue-600 p-12 rounded-3xl text-white">
            <h2 className="text-3xl font-bold mb-4">{config.finalCta.title}</h2>
            <p className="text-lg mb-8 opacity-90">{config.finalCta.description}</p>
            <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-100 transition">{config.finalCta.buttonText}</button>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
