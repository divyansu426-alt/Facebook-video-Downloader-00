import React from 'react';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-16 px-4">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
        <h1 className="text-3xl font-bold text-slate-900 mb-6">Terms of Service</h1>
        <div className="prose prose-slate max-w-none space-y-6 text-slate-600">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">1. Acceptance of Terms</h2>
            <p>By accessing and using FBDownloader, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by these terms, please do not use this service.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">2. Description of Service</h2>
            <p>FBDownloader provides a web-based utility that allows users to download videos from Facebook. Our service acts solely as a technical conduit to extract public, freely available URLs. We do not host any of the media downloaded through our service.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">3. Copyright & Intellectual Property</h2>
            <p>Users are strictly prohibited from downloading copyrighted material without the explicit consent of the copyright owner. You agree to use this service only for personal, non-commercial purposes. FBDownloader does not condone piracy and is not responsible for the media you choose to download.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">4. Disclaimer of Affiliation</h2>
            <p>FBDownloader is an independent tool and is <strong>not affiliated with, endorsed by, sponsored by, or associated with Facebook or Meta Platforms, Inc.</strong> The names, logos, and trademarks of Facebook are the property of Meta Platforms, Inc.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">5. Limitation of Liability</h2>
            <p>In no event shall FBDownloader be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or inability to use the service. The service is provided "as is" without warranties of any kind.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">6. Changes to Terms</h2>
            <p>We reserve the right to modify these terms at any time. Your continued use of the service following the posting of changes will mean that you accept and agree to the changes.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
