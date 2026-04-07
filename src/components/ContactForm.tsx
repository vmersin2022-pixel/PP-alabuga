import React from 'react';

export default function ContactForm({ onClose }: { onClose?: () => void }) {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-6">Рассчитать стоимость заказа</h2>
      <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); onClose?.(); }}>
        <input type="text" placeholder="Ваше имя" className="w-full p-3 rounded-lg border border-gray-200" required />
        <input type="tel" placeholder="Телефон" className="w-full p-3 rounded-lg border border-gray-200" required />
        <textarea placeholder="Что нужно нанести, количество, есть ли макет?" className="w-full p-3 rounded-lg border border-gray-200 h-32"></textarea>
        
        <div className="flex items-start space-x-2">
          <input type="checkbox" id="consent" className="mt-1" required />
          <label htmlFor="consent" className="text-sm text-gray-600">
            Нажимая кнопку, вы соглашаетесь с обработкой персональных данных в соответствии с <a href="/privacy" className="text-blue-600 underline">Политикой</a>.
          </label>
        </div>
        
        <button type="submit" className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold hover:bg-blue-700 transition">
          Отправить заявку
        </button>
      </form>
    </div>
  );
}
