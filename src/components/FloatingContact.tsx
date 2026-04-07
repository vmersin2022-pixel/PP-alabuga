import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function FloatingContact() {
  return (
    <motion.a
      href="https://t.me/printproject_elabuga_bot?start=raschet"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 transition"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <MessageCircle className="w-8 h-8" />
    </motion.a>
  );
}
