import React from 'react';
import { Download } from 'lucide-react';

export default function Header() {
  return (
    <header className="h-16 bg-white border-b border-slate-200 px-4 sm:px-8 flex items-center justify-between shrink-0 sticky top-0 z-50">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
          <Download className="w-5 h-5 text-white" />
        </div>
        <span className="text-xl font-bold tracking-tight text-slate-900 hidden sm:block">
          FB<span className="text-blue-600">Downloader</span>
        </span>
      </div>
      <nav className="hidden md:flex gap-8 text-sm font-medium text-slate-500">
        <a href="#" className="hover:text-blue-600 transition-colors">Home</a>
        <a href="#how-it-works" className="hover:text-blue-600 transition-colors">How it Works</a>
        <a href="#features" className="hover:text-blue-600 transition-colors">Features</a>
        <a href="#faq" className="hover:text-blue-600 transition-colors">FAQ</a>
      </nav>
    </header>
  );
}
