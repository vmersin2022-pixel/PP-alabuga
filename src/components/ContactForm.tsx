import React, { useState } from 'react';
import { CheckCircle, MessageCircle, Phone } from 'lucide-react';

export default function ContactForm({ onClose }: { onClose?: () => void }) {
  const [step, setStep] = useState(1);
  const [data, setData] = useState({
    product: '',
    quantity: '',
    hasLayout: '',
    name: '',
    phone: '',
    consent: false,
  });
  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    setError('');

    if (!data.consent) {
      setError('Нужно согласиться с обработкой персональных данных.');
      return;
    }
    if (!data.phone) {
      setError('Пожалуйста, укажите номер телефона.');
      return;
    }

    try {
      setLoading(true);
      const response = await fetch('https://n8n.printproj.ru/webhook/site-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error('Ошибка отправки');

      setIsSubmitted(true);
    } catch (err) {
      setError('Не удалось отправить заявку.');
    } finally {
      setLoading(false);
    }
  };

  const productOptions = [
    'Футболки / Поло',
    'Худи / Свитшоты',
    'Спецодежда / Форма',
    'Куртки / Жилеты',
    'Кепки / Каски',
    'Ткань / Крой',
    'Шопперы / Сумки',
    'Другое'
  ];

  const quantityOptions = [
    'До 10 шт.',
    '10 - 50 шт.',
    '50 - 100 шт.',
    'Более 100 шт.'
  ];

  const layoutOptions = [
    'Да, готовый макет',
    'Есть картинка/идея',
    'Нет, нужна помощь'
  ];

  if (isSubmitted) {
    return (
      <div className="p-6 sm:p-8 text-center space-y-6 animate-in fade-in zoom-in duration-500">
        <div className="flex justify-center">
          <CheckCircle className="w-16 h-16 text-green-500" />
        </div>
        <h2 className="text-2xl font-extrabold text-slate-900">Спасибо! Заявка принята.</h2>
        <p className="text-slate-600 leading-relaxed">
          Обычно отвечаем в течение 10–15 минут.<br />
          Если хотите ускорить расчет — можете пройти в бот или сразу написать менеджеру в Telegram.
        </p>
        <div className="flex flex-col space-y-3 pt-4">
          <a
            href="https://t.me/printproject_elabuga_bot?start=success"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-full bg-[#2AABEE] text-white py-4 rounded-xl font-bold text-lg hover:bg-[#229ED9] transition shadow-lg shadow-[#2AABEE]/30"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Пройти в Telegram-бот
          </a>

          <a
            href="https://t.me/printProject716"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-full bg-slate-900 text-white py-4 rounded-xl font-bold text-lg hover:bg-slate-800 transition"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Написать менеджеру
          </a>

          <a
            href="tel:+79656212493"
            className="flex items-center justify-center w-full bg-slate-100 text-slate-900 py-4 rounded-xl font-bold text-lg hover:bg-slate-200 transition"
          >
            <Phone className="w-5 h-5 mr-2" />
            Позвонить
          </a>
        </div>
      </div>
    );
  }

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h3 className="text-lg font-semibold text-slate-900">1. Что будем печатать?</h3>
            <div className="grid grid-cols-2 gap-3">
              {productOptions.map((p) => (
                <button key={p} onClick={() => { setData({ ...data, product: p }); setStep(2); }} className="p-3 border border-slate-200 rounded-xl hover:border-blue-500 hover:bg-blue-50 text-sm text-left transition-all text-slate-700 font-medium">
                  {p}
                </button>
              ))}
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <button onClick={() => setStep(1)} className="text-sm text-slate-400 hover:text-slate-800 mb-2 transition-colors">← Назад</button>
            <h3 className="text-lg font-semibold text-slate-900">2. Примерный тираж?</h3>
            <div className="grid grid-cols-2 gap-3">
              {quantityOptions.map((q) => (
                <button key={q} onClick={() => { setData({ ...data, quantity: q }); setStep(3); }} className="p-4 border border-slate-200 rounded-xl hover:border-blue-500 hover:bg-blue-50 text-sm text-center transition-all text-slate-700 font-medium">
                  {q}
                </button>
              ))}
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <button onClick={() => setStep(2)} className="text-sm text-slate-400 hover:text-slate-800 mb-2 transition-colors">← Назад</button>
            <h3 className="text-lg font-semibold text-slate-900">3. Есть ли у вас макет?</h3>
            <div className="space-y-3">
              {layoutOptions.map((l) => (
                <button key={l} onClick={() => { setData({ ...data, hasLayout: l }); setStep(4); }} className="w-full p-4 border border-slate-200 rounded-xl hover:border-blue-500 hover:bg-blue-50 text-left transition-all text-slate-700 font-medium">
                  {l}
                </button>
              ))}
            </div>
          </div>
        );
      case 4:
        return (
          <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <button onClick={() => setStep(3)} className="text-sm text-slate-400 hover:text-slate-800 mb-2 transition-colors">← Назад</button>
            <h3 className="text-lg font-semibold text-slate-900">4. Куда прислать расчет?</h3>
            <input type="text" placeholder="Ваше имя" className="w-full p-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all" value={data.name || ''} onChange={(e) => setData({ ...data, name: e.target.value })} />
            <input type="tel" placeholder="Телефон (WhatsApp / Telegram)" className="w-full p-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all" value={data.phone} onChange={(e) => setData({ ...data, phone: e.target.value })} />

            <div className="flex items-start space-x-3 mt-2">
              <input type="checkbox" id="consent" className="mt-1 w-4 h-4 text-blue-600 rounded border-slate-300" checked={data.consent} onChange={(e) => setData({ ...data, consent: e.target.checked })} />
              <label htmlFor="consent" className="text-xs text-slate-500 leading-relaxed">
                Согласен с <a href="/privacy" className="underline hover:text-blue-600">политикой обработки персональных данных</a>
              </label>
            </div>

            {error && <p className="text-red-700 font-medium bg-red-50 p-3 rounded-lg border border-red-100">{error}</p>}

            <button onClick={handleSubmit} disabled={loading} className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition disabled:opacity-60 shadow-lg shadow-blue-500/30 mt-4">
              {loading ? 'Отправка...' : 'Получить расчет'}
            </button>
          </div>
        );
    }
  };

  return (
    <div className="p-6 sm:p-8">
      <div className="flex justify-between items-start mb-6">
        <h2 className="text-2xl font-extrabold text-slate-900">Расчет стоимости</h2>
        <div className="text-sm font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
          Шаг {step} из 4
        </div>
      </div>

      <div className="mb-8 flex flex-wrap gap-2 text-xs font-medium text-slate-600">
        <span className="bg-slate-100 px-2.5 py-1 rounded-md">⚡️ Ответ за 10 мин</span>
        <span className="bg-slate-100 px-2.5 py-1 rounded-md">🎨 Поможем с макетом</span>
        <span className="bg-slate-100 px-2.5 py-1 rounded-md">📦 От 10 шт.</span>
      </div>

      {/* Progress bar */}
      <div className="w-full bg-slate-100 h-1.5 rounded-full mb-8 overflow-hidden">
        <div
          className="bg-blue-600 h-full transition-all duration-500 ease-out"
          style={{ width: `${(step / 4) * 100}%` }}
        />
      </div>

      {renderStep()}

      <div className="mt-8 pt-6 border-t border-slate-100 text-center">
        <p className="text-sm text-slate-500 mb-4">Или пройдите опрос в Telegram</p>

        <a
          href="https://t.me/printproject_elabuga_bot?start=quiz"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-full bg-[#2AABEE] text-white py-4 rounded-xl font-bold text-lg hover:bg-[#229ED9] transition shadow-lg shadow-[#2AABEE]/30"
        >
          <MessageCircle className="w-5 h-5 mr-2" />
          Ответить в Telegram
        </a>

        <p className="text-xs text-slate-400 mt-3">
          Бот задаст несколько быстрых вопросов и поможет собрать детали заказа
        </p>

        <a
          href="https://t.me/printProject716"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center mt-4 text-sm font-semibold text-slate-700 hover:text-blue-600 transition"
        >
          <MessageCircle className="w-4 h-4 mr-2" />
          Или написать менеджеру напрямую
        </a>
      </div>
    </div>
  );
}
