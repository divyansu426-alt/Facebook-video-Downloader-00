import React from 'react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-16 px-4">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
        <h1 className="text-3xl font-bold text-slate-900 mb-6">About Us</h1>
        <div className="prose prose-slate max-w-none space-y-4 text-slate-600">
          <p>
            Welcome to FBDownloader, your number one source for downloading Facebook videos quickly, securely, and for free. We're dedicated to providing you the very best tool to save your favorite moments, with an emphasis on speed, privacy, and ease of use.
          </p>
          <p>
            Founded with the goal of making social media content more accessible offline, FBDownloader has come a long way from its beginnings. We understand how frustrating it can be to lose access to a video you loved, which is why we built a tool that works seamlessly across all devices—mobile, tablet, and desktop.
          </p>
          <p>
            Our service is completely free and requires no software installation or registration. We respect your privacy, which is why we don't store any of the videos you download or keep logs of your activity.
          </p>
          <p>
            We hope you enjoy our service as much as we enjoy offering it to you. If you have any questions or comments, please don't hesitate to contact us.
          </p>
        </div>
      </div>
    </div>
  );
}
