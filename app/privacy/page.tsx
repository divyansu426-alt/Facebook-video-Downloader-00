import React from 'react';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-16 px-4">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
        <h1 className="text-3xl font-bold text-slate-900 mb-6">Privacy Policy</h1>
        <div className="prose prose-slate max-w-none space-y-6 text-slate-600">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">1. Information We Collect</h2>
            <p>We believe in data minimization. When you use our service to download videos, we <strong>do not</strong> require you to create an account, nor do we collect any personally identifiable information (PII) such as your name, email, or phone number.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">2. Log Data and Analytics</h2>
            <p>We use industry-standard analytics (such as Google Analytics/Firebase) to collect non-personal information. This includes your IP address, browser type, device type, and the pages you visit. This helps us understand how our service is used and allows us to improve the user experience. <strong>We do not log the specific video URLs you download.</strong></p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">3. Cookies</h2>
            <p>We may use essential cookies to keep our website secure, prevent abuse (like DDoS attacks), and maintain rate limits. Third-party advertisers (like Google AdSense) may also use cookies to serve personalized ads based on your visit to this and other websites.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">4. Video Processing</h2>
            <p>All video processing is done dynamically. We do not store, host, or cache any Facebook videos on our servers. The links provided to you are generated in real-time and served directly from Facebook's Content Delivery Network (CDN).</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">5. Third-Party Links</h2>
            <p>Our website may contain links to third-party sites or advertisements. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">6. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us via our Contact page.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
