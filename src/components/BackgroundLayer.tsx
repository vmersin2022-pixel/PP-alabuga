import React from 'react';

export default function BackgroundLayer() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden bg-gradient-to-br from-[#FFFBF7] to-[#EFF6FF] dark:from-slate-950 dark:to-slate-900">
      {/* Tech Layer: Partial Fading Grid & Blur Orbs */}
      <div className="absolute inset-0 opacity-[0.08] dark:opacity-[0.03] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" style={{ backgroundImage: 'linear-gradient(#2563EB 1px, transparent 1px), linear-gradient(90deg, #2563EB 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      <div className="absolute top-[-10%] left-[20%] w-[600px] h-[600px] bg-blue-300 dark:bg-blue-600 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-[128px] opacity-20"></div>
      <div className="absolute bottom-[-10%] right-[10%] w-[500px] h-[500px] bg-orange-200 dark:bg-orange-600 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-[128px] opacity-20"></div>
    </div>
  );
}
