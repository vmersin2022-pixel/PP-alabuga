/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, createContext, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';
import Modal from './components/Modal';
import StickyMobileMenu from './components/StickyMobileMenu';
import Portfolio from './components/Portfolio';
import TrustSection from './components/TrustSection';
import SolutionsHub from './components/SolutionsHub';
import SegmentPage from './components/SegmentPage';
import CookieConsent from './components/CookieConsent';
import BackgroundLayer from './components/BackgroundLayer';
import LogoGuide from './components/LogoGuide';
import Reviews from './components/Reviews';
import Location from './components/Location';

const ThemeContext = createContext<{ isDark: boolean; toggleTheme: () => void }>({
  isDark: false,
  toggleTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

function AnimatedRoutes({ onOpenModal }: { onOpenModal: () => void }) {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location}>
        <Route path="/" element={
          <motion.div
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <HomePage onOpenModal={onOpenModal} />
          </motion.div>
        } />
        <Route path="/:segment" element={
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <SegmentPage />
          </motion.div>
        } />
      </Routes>
    </AnimatePresence>
  );
}

function HomePage({ onOpenModal }: { onOpenModal: () => void }) {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  const sectionVariants = {
    hidden: { opacity: isMobile ? 1 : 0, y: isMobile ? 0 : 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="min-h-screen text-slate-900 dark:text-white font-sans selection:bg-blue-100 selection:text-blue-900">
      <BackgroundLayer />
      <Header onOpenModal={onOpenModal} />
      <main>
        <Hero onOpenModal={onOpenModal} />
        <motion.div initial={isMobile ? "visible" : "hidden"} whileInView="visible" viewport={{ once: true, amount: 0.01 }} variants={sectionVariants}><SolutionsHub /></motion.div>
        <motion.div initial={isMobile ? "visible" : "hidden"} whileInView="visible" viewport={{ once: true, amount: 0.01 }} variants={sectionVariants}><Services onOpenModal={onOpenModal} /></motion.div>
        <motion.div initial={isMobile ? "visible" : "hidden"} whileInView="visible" viewport={{ once: true, amount: 0.01 }} variants={sectionVariants}><Portfolio onOpenModal={onOpenModal} /></motion.div>
        <motion.div initial={isMobile ? "visible" : "hidden"} whileInView="visible" viewport={{ once: true, amount: 0.01 }} variants={sectionVariants}><LogoGuide /></motion.div>
        <motion.div initial={isMobile ? "visible" : "hidden"} whileInView="visible" viewport={{ once: true, amount: 0.01 }} variants={sectionVariants}><Reviews /></motion.div>
        <motion.div initial={isMobile ? "visible" : "hidden"} whileInView="visible" viewport={{ once: true, amount: 0.01 }} variants={sectionVariants}><Location /></motion.div>
        <motion.div initial={isMobile ? "visible" : "hidden"} whileInView="visible" viewport={{ once: true, amount: 0.01 }} variants={sectionVariants}><TrustSection /></motion.div>
        <motion.div initial={isMobile ? "visible" : "hidden"} whileInView="visible" viewport={{ once: true, amount: 0.01 }} variants={sectionVariants}><HowItWorks /></motion.div>
        <motion.div initial={isMobile ? "visible" : "hidden"} whileInView="visible" viewport={{ once: true, amount: 0.01 }} variants={sectionVariants}><FAQ /></motion.div>
      </main>
      <Footer />
      <StickyMobileMenu onOpenModal={onOpenModal} />
    </div>
  );
}

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark' || 
        (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <Router>
        <AnimatedRoutes onOpenModal={() => setIsModalOpen(true)} />
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <ContactForm onClose={() => setIsModalOpen(false)} />
        </Modal>
        <CookieConsent />
      </Router>
    </ThemeContext.Provider>
  );
}
