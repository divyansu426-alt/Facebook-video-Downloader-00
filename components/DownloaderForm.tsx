'use client';

import React, { useState } from 'react';
import { Download, Loader2, Link as LinkIcon, AlertCircle, CheckCircle2, ClipboardPaste } from 'lucide-react';
import Image from 'next/image';
import { logEvent } from 'firebase/analytics';
import { analytics } from '@/lib/firebase';

interface VideoResult {
  id: string;
  title: string;
  thumbnail: string;
  duration: string;
  downloads: {
    quality: string;
    size: string;
    url: string;
  }[];
}

export default function DownloaderForm() {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [result, setResult] = useState<VideoResult | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setResult(null);
    setError('');

    if (!url.trim()) {
      setError('Please enter a Facebook video URL.');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('/api/download', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || 'Something went wrong. Please try again later.');
      } else {
        setResult(data.data);
        if (analytics) {
          logEvent(analytics, 'video_processed', {
            video_url: url
          });
        }
      }
    } catch (err) {
      setError('Something went wrong. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setUrl(text);
      setError('');
    } catch (err) {
      console.error('Failed to read clipboard text: ', err);
      setError('Clipboard access denied or unavailable. Please paste manually using Ctrl+V or Cmd+V.');
    }
  };

  const handleDownloadClick = (e: React.MouseEvent<HTMLAnchorElement>, quality: string) => {
    if (analytics) {
      logEvent(analytics, 'download_clicked', {
        quality,
        video_url: url
      });
    }

    // In a real application with actual files, this might trigger a programmatic download
    // For this demo, it's just a mock link. We'll show a quick alert just for feedback.
    if (e.currentTarget.getAttribute('href')?.startsWith('#')) {
      e.preventDefault();
      alert(`Simulating download for ${quality} quality...`);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto bg-white/10 backdrop-blur-md p-2 rounded-2xl border border-white/20 shadow-2xl relative z-10 text-left">
      <div>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
          <div className="relative flex-1 flex w-full">
            <input
              type="text"
              className="flex-1 bg-white rounded-xl pl-4 sm:pl-6 pr-24 py-4 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder:text-slate-400 shadow-inner w-full"
              placeholder="Paste Facebook video URL here..."
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              disabled={loading}
            />
            <button
              type="button"
              onClick={handlePaste}
              disabled={loading}
              title="Paste from clipboard"
              className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold px-3 py-2 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ClipboardPaste className="w-4 h-4" />
              <span className="hidden sm:inline">Paste</span>
            </button>
          </div>
          <button
            type="submit"
            disabled={loading}
            className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg active:scale-95 transition-all disabled:opacity-70 disabled:cursor-not-allowed w-full sm:w-auto"
          >
            {loading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Processing...</span>
              </>
            ) : (
              <>
                <span>Download</span>
                <Download className="w-5 h-5" />
              </>
            )}
          </button>
        </form>

        {/* Error Message */}
        {error && (
          <div className="mt-4 flex items-start sm:items-center gap-3 p-4 bg-red-50 text-red-700 rounded-xl border border-red-100 animate-in fade-in slide-in-from-top-2">
            <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5 sm:mt-0" />
            <p className="text-sm font-medium">{error}</p>
          </div>
        )}

        {/* Results Section */}
        {result && (
          <div className="mt-4 p-6 bg-white rounded-xl border border-slate-100 shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex items-center gap-2 mb-6 text-green-700">
              <CheckCircle2 className="w-6 h-6" />
              <h3 className="font-bold text-lg text-slate-800">Video Ready for Download</h3>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6 items-start">
              {/* Thumbnail */}
              <div className="w-full md:w-1/2 aspect-video relative rounded-xl overflow-hidden bg-slate-100 shadow-md flex-shrink-0 border border-slate-200">
                <img
                  src={result.thumbnail}
                  alt={result.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-2 right-2 bg-slate-900/80 text-white text-xs font-bold px-2 py-1 rounded">
                  {result.duration}
                </div>
              </div>

              {/* Download Links */}
              <div className="w-full md:w-1/2 flex flex-col gap-3">
                <h4 className="font-bold text-slate-900 line-clamp-2 mb-2">{result.title}</h4>
                
                {result.downloads.map((download, index) => (
                  <a
                    key={index}
                    href={download.url}
                    onClick={(e) => handleDownloadClick(e, download.quality)}
                    className="group flex items-center justify-between p-4 rounded-xl border border-slate-200 hover:border-blue-600 hover:bg-blue-50 transition-all text-slate-700 hover:text-blue-700 font-bold shadow-sm"
                  >
                    <div className="flex items-center gap-3">
                      <div className="bg-slate-100 group-hover:bg-blue-100 p-2 rounded-lg transition-colors">
                        <Download className="w-4 h-4 text-slate-500 group-hover:text-blue-600" />
                      </div>
                      <span>Download {download.quality}</span>
                    </div>
                    <span className="text-xs text-slate-500 group-hover:text-blue-600 bg-white group-hover:bg-blue-100/50 px-2.5 py-1 rounded-md border border-slate-200 group-hover:border-transparent transition-colors">
                      {download.size}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
