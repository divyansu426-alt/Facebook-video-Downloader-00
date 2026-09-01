'use client';

import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: 'privacy' | 'terms';
}

export default function LegalModal({ isOpen, onClose, initialTab = 'privacy' }: LegalModalProps) {
  const [activeTab, setActiveTab] = useState(initialTab);

  useEffect(() => {
    if (isOpen) {
      setActiveTab(initialTab);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, initialTab]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200 text-left">
      <div 
        className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[85vh] flex flex-col overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/50">
          <h2 className="text-xl font-bold text-slate-900">Legal Information</h2>
          <button 
            onClick={onClose} 
            className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-200 rounded-full transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="flex px-6 border-b border-slate-100 bg-white">
          <button 
            onClick={() => setActiveTab('privacy')}
            className={`py-3 px-4 text-sm font-bold border-b-2 transition-colors ${activeTab === 'privacy' ? 'border-blue-600 text-blue-600' : 'border-transparent text-slate-500 hover:text-slate-700'}`}
          >
            Privacy Policy
          </button>
          <button 
            onClick={() => setActiveTab('terms')}
            className={`py-3 px-4 text-sm font-bold border-b-2 transition-colors ${activeTab === 'terms' ? 'border-blue-600 text-blue-600' : 'border-transparent text-slate-500 hover:text-slate-700'}`}
          >
            Terms of Service
          </button>
        </div>

        <div className="p-6 overflow-y-auto text-sm text-slate-600 leading-relaxed space-y-6 bg-white">
          {activeTab === 'privacy' ? (
            <>
              <section>
                <h3 className="text-base font-bold text-slate-900 mb-2">1. Data Collection</h3>
                <p>We do not collect, store, or process any personal data or video files on our servers. All video processing is done dynamically, and generated links are provided directly to you. We do not keep logs of the videos you download.</p>
              </section>
              <section>
                <h3 className="text-base font-bold text-slate-900 mb-2">2. Usage Analytics</h3>
                <p>We may collect anonymized, non-personally identifiable information such as browser type, operating system, and general usage patterns to improve the performance and reliability of our service.</p>
              </section>
              <section>
                <h3 className="text-base font-bold text-slate-900 mb-2">3. Cookies</h3>
                <p>This application does not use tracking cookies. We may use essential cookies strictly necessary for the operation of the website, such as rate limiting and basic security measures.</p>
              </section>
            </>
          ) : (
            <>
              <section>
                <h3 className="text-base font-bold text-slate-900 mb-2">1. Personal Use Only</h3>
                <p>This service is strictly for personal, non-commercial use. You may only download videos that you own, or videos for which you have explicit permission from the copyright holder to download.</p>
              </section>
              <section>
                <h3 className="text-base font-bold text-slate-900 mb-2">2. Copyright & Responsibility</h3>
                <p>We respect intellectual property rights. Users are solely responsible for the media they download. We do not host any copyrighted material and act merely as a conduit to process public URLs.</p>
              </section>
              <section>
                <h3 className="text-base font-bold text-slate-900 mb-2">3. Disclaimer of Affiliation</h3>
                <p>This tool is completely independent and is NOT affiliated with, endorsed by, sponsored by, or associated with Facebook or Meta Platforms, Inc. The Facebook name, logo, and all related trademarks are the property of Meta Platforms, Inc.</p>
              </section>
            </>
          )}
        </div>
        
        <div className="px-6 py-4 border-t border-slate-100 bg-slate-50 flex justify-end">
          <button 
            onClick={onClose}
            className="px-6 py-2 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all active:scale-95 shadow-sm"
          >
            Understood
          </button>
        </div>
      </div>
    </div>
  );
}
