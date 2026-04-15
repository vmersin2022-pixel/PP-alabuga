import React from 'react';
import { MapPin, Navigation, Clock, Phone, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function Location() {
  return (
    <section className="py-20 bg-white dark:bg-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-black uppercase tracking-widest mb-6"
            >
              <MapPin className="w-4 h-4" />
              Где мы находимся
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-8 tracking-tight">
              Приезжайте в гости <br />
              <span className="text-blue-600">на производство</span>
            </h2>
            
            <div className="space-y-8 mb-10">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-2xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-blue-600 dark:text-blue-400 flex-shrink-0">
                  <Navigation className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-1">Адрес</p>
                  <p className="text-lg font-bold text-slate-900 dark:text-white">Республика Татарстан, г. Елабуга, ул. Казанская, 48А</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-2xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-blue-600 dark:text-blue-400 flex-shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-1">Режим работы</p>
                  <p className="text-lg font-bold text-slate-900 dark:text-white">Пн-Пт: 08:00 — 17:00</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-2xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-blue-600 dark:text-blue-400 flex-shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-1">Телефон</p>
                  <p className="text-lg font-bold text-slate-900 dark:text-white">+7 (965) 621-24-93</p>
                </div>
              </div>
            </div>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://yandex.com/maps/-/CPvfNBKD"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-2xl font-black shadow-xl shadow-blue-500/20 hover:bg-blue-700 transition-all"
            >
              Открыть в Яндекс Картах <ArrowRight className="w-5 h-5" />
            </motion.a>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative aspect-video lg:aspect-square rounded-[48px] overflow-hidden shadow-2xl border-8 border-white dark:border-slate-800"
          >
            <iframe 
              src="https://yandex.com/map-widget/v1/?ll=52.062164%2C55.761066&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1NjI2MjYyNhI_0KDQvtGB0YHQuNGPLCDQoNC10YHQv9GD0LHQu9C40LrQsCDQotCw0YLQsNGA0YHRgtCw0L0sINCV0LvQsNCx0YPQsyQsINGD0LsuINCa0LDQt9Cw0L3RgdC60LDRjSwgNDhBIgoNX_4WQhWaWF9C%2C&z=16" 
              width="100%" 
              height="100%" 
              frameBorder="0" 
              allowFullScreen={true}
              className="grayscale dark:invert dark:hue-rotate-180 dark:opacity-80"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
