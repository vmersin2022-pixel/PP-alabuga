/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'motion/react';
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
import FinalCTA from './components/FinalCTA';
import BackgroundLayer from './components/BackgroundLayer';

function HomePage({ onOpenModal }: { onOpenModal: () => void }) {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  const sectionVariants = {
    hidden: { opacity: isMobile ? 1 : 0, y: isMobile ? 0 : 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="min-h-screen text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      <BackgroundLayer />
      <Header onOpenModal={onOpenModal} />
      <main>
        <Hero onOpenModal={onOpenModal} />
        <motion.div initial={isMobile ? "visible" : "hidden"} whileInView="visible" viewport={{ once: true, amount: 0.01 }} variants={sectionVariants}><SolutionsHub /></motion.div>
        <motion.div initial={isMobile ? "visible" : "hidden"} whileInView="visible" viewport={{ once: true, amount: 0.01 }} variants={sectionVariants}><Services onOpenModal={onOpenModal} /></motion.div>
        <motion.div initial={isMobile ? "visible" : "hidden"} whileInView="visible" viewport={{ once: true, amount: 0.01 }} variants={sectionVariants}><Portfolio onOpenModal={onOpenModal} /></motion.div>
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

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage onOpenModal={() => setIsModalOpen(true)} />} />
        <Route path="/:segment" element={<SegmentPage />} />
      </Routes>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ContactForm onClose={() => setIsModalOpen(false)} />
      </Modal>
      <CookieConsent />
    </Router>
  );
}
