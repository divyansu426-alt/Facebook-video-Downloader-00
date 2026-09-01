import React from 'react';
import { Download } from 'lucide-react';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="h-16 bg-white border-b border-slate-200 px-4 sm:px-8 flex items-center justify-between shrink-0 sticky top-0 z-50">
      <Link href="/" className="flex items-center gap-2">
        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
          <Download className="w-5 h-5 text-white" />
        </div>
        <span className="text-xl font-bold tracking-tight text-slate-900 hidden sm:block">
          FB<span className="text-blue-600">Downloader</span>
        </span>
      </Link>
      
      <nav className="hidden md:flex gap-8 text-sm font-medium text-slate-500">
        <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
        <Link href="/#how-it-works" className="hover:text-blue-600 transition-colors">How it Works</Link>
        <Link href="/#articles" className="hover:text-blue-600 transition-colors">Blog</Link>
        <Link href="/#faq" className="hover:text-blue-600 transition-colors">FAQ</Link>
      </nav>
    </header>
  );
}
