import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

export default function Modal({ isOpen, onClose, children }: { isOpen: boolean; onClose: () => void; children: React.ReactNode }) {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 z-50 backdrop-blur-md"
          />
          <motion.div
            initial={isMobile ? { y: '100%' } : { opacity: 0, scale: 0.95, y: 20 }}
            animate={isMobile ? { y: 0 } : { opacity: 1, scale: 1, y: 0 }}
            exit={isMobile ? { y: '100%' } : { opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className={`fixed z-50 flex pointer-events-none ${
              isMobile ? 'inset-x-0 bottom-0' : 'inset-0 items-center justify-center p-4'
            }`}
          >
            <div className={`bg-white shadow-2xl pointer-events-auto relative ${
              isMobile 
                ? 'w-full rounded-t-[32px] max-h-[95vh] overflow-y-auto pb-10' 
                : 'rounded-2xl w-full max-w-lg overflow-y-auto max-h-[90vh]'
            }`}>
              {isMobile && (
                <div className="w-12 h-1.5 bg-slate-200 rounded-full mx-auto mt-4 mb-2" />
              )}
              <button 
                onClick={onClose} 
                className={`absolute p-2 hover:bg-slate-100 rounded-full z-10 ${
                  isMobile ? 'top-4 right-4' : 'top-4 right-4'
                }`}
              >
                <X className="w-6 h-6 text-slate-500" />
              </button>
              <div className={isMobile ? 'pt-2' : ''}>
                {children}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
