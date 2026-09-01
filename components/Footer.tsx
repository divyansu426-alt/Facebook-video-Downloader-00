'use client';

import React, { useState } from 'react';
import LegalModal from './LegalModal';

export default function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTab, setModalTab] = useState<'privacy' | 'terms'>('terms');

  const openModal = (e: React.MouseEvent, tab: 'privacy' | 'terms') => {
    e.preventDefault();
    setModalTab(tab);
    setIsModalOpen(true);
  };

  return (
    <footer className="bg-slate-900 text-slate-400 py-10 px-4 sm:px-8 mt-auto shrink-0 text-xs relative z-40">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <p className="font-bold text-white text-sm mb-1">FBDownloader</p>
          <p>&copy; {new Date().getFullYear()} Facebook Video Downloader. All rights reserved.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-6 uppercase tracking-widest font-bold">
          <a href="#terms" onClick={(e) => openModal(e, 'terms')} className="hover:text-white transition-colors">Terms</a>
          <a href="#privacy" onClick={(e) => openModal(e, 'privacy')} className="hover:text-white transition-colors">Privacy</a>
          <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-white transition-colors">About</a>
          <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-white transition-colors">Contact</a>
        </div>
      </div>
      
      <LegalModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        initialTab={modalTab} 
      />
    </footer>
  );
}
