import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-10 px-4 sm:px-8 mt-auto shrink-0 text-xs relative z-40">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <p className="font-bold text-white text-sm mb-1">FBDownloader</p>
          <p>&copy; {new Date().getFullYear()} Facebook Video Downloader. All rights reserved.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-6 uppercase tracking-widest font-bold">
          <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
          <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
          <Link href="/about" className="hover:text-white transition-colors">About</Link>
          <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
