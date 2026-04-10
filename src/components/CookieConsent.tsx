import React, { useState, useEffect } from 'react';

export default function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShow(true);
    }
  }, []);

  const handleAction = (action: string) => {
    localStorage.setItem('cookieConsent', action);
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 max-w-sm z-50">
      <p className="text-slate-600 mb-4">
        С помощью файлов cookie мы делаем сайт удобнее для пользователя, анализируем трафик и совершенствуем маркетинговые активности.
        <a href="#" className="text-blue-600 underline ml-1">Узнать больше</a>
      </p>
      <div className="space-y-2">
        <button onClick={() => handleAction('necessary')} className="w-full bg-indigo-600 text-white py-3 rounded-xl font-semibold hover:bg-indigo-700 transition">
          Принять только необходимые файлы cookie
        </button>
        <button onClick={() => handleAction('settings')} className="w-full bg-slate-800 text-white py-3 rounded-xl font-semibold hover:bg-slate-900 transition">
          Настройки
        </button>
        <button onClick={() => handleAction('all')} className="w-full bg-indigo-600 text-white py-3 rounded-xl font-semibold hover:bg-indigo-700 transition">
          Разрешить cookie
        </button>
      </div>
    </div>
  );
}
