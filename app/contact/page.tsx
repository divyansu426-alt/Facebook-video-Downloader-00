'use client';
import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => setSubmitted(true), 1000);
  };

  return (
    <div className="min-h-screen bg-slate-50 py-16 px-4">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Contact Us</h1>
        <p className="text-slate-500 mb-8">Have a question or feedback? We'd love to hear from you.</p>

        {submitted ? (
          <div className="bg-green-50 border border-green-100 p-6 rounded-xl text-center">
            <CheckCircle2 className="w-12 h-12 text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-green-800 mb-2">Message Sent!</h3>
            <p className="text-green-600">Thank you for reaching out. We will get back to you as soon as possible.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-1">Your Name</label>
              <input type="text" id="name" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all" placeholder="John Doe" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-bold text-slate-700 mb-1">Email Address</label>
              <input type="email" id="email" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all" placeholder="john@example.com" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-bold text-slate-700 mb-1">Message</label>
              <textarea id="message" required rows={5} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all resize-none" placeholder="How can we help you?"></textarea>
            </div>
            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-xl flex items-center justify-center gap-2 transition-all">
              Send Message <Send className="w-4 h-4" />
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
