import React, { useState } from 'react';
import { CheckCircle, MessageCircle } from 'lucide-react';

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
      const payload = {
        ...data,
        page: window.location.pathname,
        source: new URLSearchParams(window.location.search).get('utm_source') || 'website',
        utm: window.location.search,
        segment: 'general', // Should be dynamic if possible
        offer: 'general_lead',
        form_type: 'quest',
      };

      const response = await fetch('https://n8n.printproj.ru/webhook/site-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
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

  const OptionButton = ({ value, selected, onClick, children }: { value: string, selected: boolean, onClick: () => void, children: React.ReactNode, key?: string | number }) => (
    <button 
      onClick={onClick} 
      className={`p-4 border-2 rounded-2xl text-sm text-left transition-all duration-200 font-medium ${
        selected 
          ? 'border-blue-600 bg-blue-50 text-blue-900 shadow-md shadow-blue-100' 
          : 'border-slate-200 hover:border-blue-300 hover:bg-slate-50 text-slate-700'
      }`}
    >
      {children}
    </button>
  );

  if (isSubmitted) {
    return (
      <div className="p-6 sm:p-8 text-center space-y-6 animate-in fade-in zoom-in duration-500">
        <div className="flex justify-center">
          <CheckCircle className="w-16 h-16 text-green-500" />
        </div>
        <div>
          <p className="text-blue-600 font-bold mb-2">Уже считаем ваш заказ...</p>
          <h2 className="text-2xl font-extrabold text-slate-900">Спасибо, заявка отправлена!</h2>
        </div>
        <p className="text-slate-600 leading-relaxed">Мы свяжемся с вами в ближайшее время.</p>
        <div className="space-y-3">
          <a href="https://t.me/printproject_elabuga_bot?start=lead" target="_blank" rel="noopener noreferrer" className="block w-full bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_40px_rgba(37,99,235,0.7)] hover:-translate-y-1">
            Связаться с менеджером лично
          </a>
          <button onClick={onClose} className="text-slate-500 hover:text-slate-800 text-sm font-medium">Закрыть</button>
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
                <OptionButton key={p} value={p} selected={data.product === p} onClick={() => { setData({...data, product: p}); setStep(2); }}>
                  {p}
                </OptionButton>
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
                <OptionButton key={q} value={q} selected={data.quantity === q} onClick={() => { setData({...data, quantity: q}); setStep(3); }}>
                  {q}
                </OptionButton>
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
                <OptionButton key={l} value={l} selected={data.hasLayout === l} onClick={() => { setData({...data, hasLayout: l}); setStep(4); }}>
                  {l}
                </OptionButton>
              ))}
            </div>
          </div>
        );
      case 4:
        return (
          <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <button onClick={() => setStep(3)} className="text-sm text-slate-400 hover:text-slate-800 mb-2 transition-colors">← Назад</button>
            <h3 className="text-lg font-semibold text-slate-900">4. Куда прислать расчет?</h3>
            <input type="text" placeholder="Ваше имя" className="w-full p-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all" value={data.name || ''} onChange={(e) => setData({...data, name: e.target.value})} />
            <input type="tel" placeholder="Телефон (WhatsApp / Telegram)" className="w-full p-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all" value={data.phone} onChange={(e) => setData({...data, phone: e.target.value})} />
            
            <div className="flex items-start space-x-3 mt-2">
              <input type="checkbox" id="consent" className="mt-1 w-4 h-4 text-blue-600 rounded border-slate-300" checked={data.consent} onChange={(e) => setData({...data, consent: e.target.checked})} />
              <label htmlFor="consent" className="text-xs text-slate-500 leading-relaxed">
                Согласен с <a href="/privacy" className="underline hover:text-blue-600">политикой обработки персональных данных</a>
              </label>
            </div>
            
            {error && <p className="text-red-700 font-medium bg-red-50 p-3 rounded-lg border border-red-100">{error}</p>}
            
            <div className="space-y-3 mt-4">
              <button onClick={handleSubmit} disabled={loading} className="w-full bg-blue-600 text-white py-5 rounded-xl font-bold text-lg hover:bg-blue-700 transition disabled:opacity-60 shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_40px_rgba(37,99,235,0.7)] hover:-translate-y-1 disabled:hover:translate-y-0 disabled:hover:shadow-none">
                {loading ? 'Отправка...' : 'Получить расчет'}
              </button>
              <a href="https://t.me/printproject_elabuga_bot?start=lead" target="_blank" rel="noopener noreferrer" className="block w-full text-center text-slate-600 py-3 rounded-xl font-semibold hover:bg-slate-50 transition border border-slate-200">
                Связаться с менеджером лично
              </a>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="p-6 sm:p-8">
      <div className="flex justify-between items-start mb-6">
        <div>
          <p className="text-sm text-blue-600 font-bold mb-2">⏱ Расчет займет 30 секунд</p>
          <h2 className="text-2xl font-extrabold text-slate-900">Расчет стоимости</h2>
        </div>
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
    </div>
  );
}
