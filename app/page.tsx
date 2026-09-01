import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AdPlaceholder from '@/components/AdPlaceholder';
import DownloaderForm from '@/components/DownloaderForm';
import ArticlesSection from '@/components/ArticlesSection';
import { Copy, ClipboardPaste, DownloadCloud, Zap, Smartphone, CheckCircle, Lock, Globe, Feather } from 'lucide-react';

export default function Home() {
  return (
    <>
      <Header />
      
      <main className="flex-1 flex flex-col">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 py-16 px-4 sm:px-10 flex flex-col items-center justify-center text-center shrink-0 shadow-inner">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-3 tracking-tight">
            Download Facebook Videos Easily
          </h1>
          <p className="text-blue-100 text-lg sm:text-xl mb-8 max-w-2xl leading-relaxed">
            Paste a public Facebook video link and download it in high quality in just a few simple steps.
          </p>
          
          <DownloaderForm />

          <div className="mt-8 flex flex-wrap justify-center items-center gap-6 text-blue-100 text-sm font-medium">
            <div className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4" /> 100% Free</div>
            <div className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4" /> No Login Required</div>
            <div className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4" /> HD Supported</div>
          </div>
        </section>

        {/* Top Ad Placeholder */}
        <div className="px-4 mt-8">
          <AdPlaceholder text="Advertisement - Top" />
        </div>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-16 px-4 max-w-7xl mx-auto w-full">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-8 flex items-center justify-center gap-3">
            <span className="w-1.5 h-8 bg-blue-600 rounded-full"></span>
            How It Works
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                step: '1',
                title: 'Copy Video Link',
                desc: 'Copy the URL of any public Facebook video from your browser or app.'
              },
              {
                step: '2',
                title: 'Paste & Process',
                desc: 'Paste the link into the box above and click download to analyze the video.'
              },
              {
                step: '3',
                title: 'Save Locally',
                desc: 'Select your preferred quality and save the file directly to your device.'
              }
            ].map((step, i) => (
              <div key={i} className="flex gap-4 p-5 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold shrink-0 text-lg">
                  {step.step}
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 text-base">{step.title}</h3>
                  <p className="text-slate-500 text-sm mt-1.5 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Middle Ad Placeholder */}
        <div className="px-4">
          <AdPlaceholder text="Advertisement - Middle" />
        </div>

        {/* Features Section */}
        <section id="features" className="py-16 px-4 max-w-7xl mx-auto w-full">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-8 flex items-center justify-center gap-3">
            <span className="w-1.5 h-8 bg-blue-600 rounded-full"></span>
            Top Features
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {[
              { icon: '⚡', color: 'bg-orange-100 text-orange-600', title: 'Fast Processing' },
              { icon: '📱', color: 'bg-green-100 text-green-600', title: 'Mobile Friendly' },
              { icon: '🔒', color: 'bg-purple-100 text-purple-600', title: 'Secure & Safe' },
              { icon: '🚀', color: 'bg-blue-100 text-blue-600', title: 'Unlimited Use' },
            ].map((feat, i) => (
              <div key={i} className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm text-center hover:shadow-md transition-shadow flex flex-col items-center justify-center">
                <div className={`w-12 h-12 ${feat.color} rounded-xl flex items-center justify-center text-2xl mb-4`}>
                  {feat.icon}
                </div>
                <h3 className="font-bold text-slate-800 text-sm">{feat.title}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* Articles & Guides Section */}
        <ArticlesSection />

        {/* FAQ Section */}
        <section id="faq" className="py-16 px-4 max-w-3xl mx-auto w-full">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-8 flex items-center justify-center gap-3">
            <span className="w-1.5 h-8 bg-blue-600 rounded-full"></span>
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-4">
            {[
              {
                q: 'Is this downloader free?',
                a: 'Yes! Our Facebook Video Downloader is completely free to use. There are no hidden fees or subscriptions required.'
              },
              {
                q: 'Can I download any Facebook video?',
                a: 'You can download public videos that are not restricted by privacy settings or DRM. Private videos or videos restricted by the creator cannot be downloaded.'
              },
              {
                q: 'Can I download private Facebook videos?',
                a: 'No. We respect user privacy and Facebook\'s security mechanisms. Private or restricted content is not supported and cannot be retrieved by this tool.'
              },
              {
                q: 'Can I use this website on mobile?',
                a: 'Absolutely. The website is fully responsive and optimized to work smoothly on all modern smartphones, including Android and iOS devices.'
              },
              {
                q: 'Why isn\'t my video working?',
                a: 'If a video fails to process, it might be private, deleted, restricted by location, or the URL format might be incorrect. Please ensure you are pasting a valid, public video URL.'
              }
            ].map((faq, i) => (
              <div key={i} className="bg-white rounded-xl p-5 border border-slate-100 shadow-sm">
                <h3 className="text-base font-bold text-slate-800 mb-2">{faq.q}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom Ad Placeholder */}
        <div className="px-4 mb-8">
          <AdPlaceholder text="Advertisement - Bottom" />
        </div>

        {/* Disclaimer Section */}
        <section className="px-4 pb-12 max-w-7xl mx-auto w-full">
          <div className="p-5 bg-amber-50 rounded-xl border border-amber-100 max-w-3xl mx-auto">
            <h4 className="text-xs font-bold text-amber-800 uppercase tracking-wider mb-2 text-center sm:text-left">Important Disclaimer</h4>
            <p className="text-xs sm:text-sm text-amber-700 leading-relaxed text-center sm:text-left">
              This tool is for personal use only. Users are responsible for ensuring they have the rights or permission to download content. We are not affiliated with Meta or Facebook. We do not host any copyrighted material on our servers.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
