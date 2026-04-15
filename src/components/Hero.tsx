import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, MessageCircle, Sparkles, ShieldCheck, Zap } from 'lucide-react';
import { getProxyImageUrl } from '../lib/imageUtils';

export default function Hero({ onOpenModal }: { onOpenModal: () => void }) {
  return (
    <section className="relative pt-20 pb-10 md:pt-32 md:pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-500/10 border border-blue-100 dark:border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-black uppercase tracking-widest mb-8"
            >
              <Sparkles className="w-4 h-4" />
              Собственное производство в Елабуге
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white mb-8 tracking-tight leading-[0.95]"
            >
              Брендируем бизнес <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
                за 24 часа
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-slate-600 dark:text-slate-400 mb-12 leading-relaxed font-medium"
            >
              Печать на спецодежде, мерч для команд и униформа, которая выдерживает 100+ стирок.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-4 mb-16"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onOpenModal}
                className="w-full sm:w-auto bg-blue-600 text-white px-10 py-6 rounded-2xl font-black text-xl shadow-2xl shadow-blue-500/30 hover:bg-blue-700 transition-all flex items-center justify-center gap-2"
              >
                Рассчитать <ArrowRight className="w-6 h-6" />
              </motion.button>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://t.me/PrintProject16"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border-2 border-slate-100 dark:border-white/5 px-10 py-6 rounded-2xl font-black text-xl hover:bg-slate-50 dark:hover:bg-slate-700 transition-all shadow-xl"
              >
                <MessageCircle className="w-6 h-6 text-[#2AABEE]" />
                Telegram
              </motion.a>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="flex flex-wrap gap-8"
            >
              <div className="flex items-center gap-3 text-slate-400 dark:text-slate-500 font-bold uppercase tracking-widest text-[10px]">
                <ShieldCheck className="w-5 h-5 text-emerald-500" />
                Гарантия на принт
              </div>
              <div className="flex items-center gap-3 text-slate-400 dark:text-slate-500 font-bold uppercase tracking-widest text-[10px]">
                <Zap className="w-5 h-5 text-orange-500" />
                Срочные тиражи
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-[48px] overflow-hidden shadow-2xl shadow-blue-500/10 border-8 border-white dark:border-slate-800">
              <img 
                src={getProxyImageUrl("https://i.postimg.cc/mDX38RWq/Odezda-brendirovannaa-logotipom-Print-Project.png")} 
                alt="Сотрудник в брендированной форме" 
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent" />
            </div>
            
            {/* Floating Badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-800 p-6 rounded-[32px] shadow-2xl border border-slate-100 dark:border-white/5 flex items-center gap-4"
            >
              <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-500/20 rounded-2xl flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <p className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest">Качество</p>
                <p className="text-sm font-black text-slate-900 dark:text-white">100+ стирок</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
