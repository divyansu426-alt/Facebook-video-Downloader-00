import type {Metadata} from 'next';
import './globals.css'; // Global styles
import '@/lib/firebase'; // Initialize Firebase App & Analytics

export const metadata: Metadata = {
  title: 'Facebook Video Downloader \u2013 Download Facebook Videos Online',
  description: 'Free and easy Facebook Video Downloader. Paste a public Facebook video URL and save supported videos quickly on mobile or desktop.',
  keywords: [
    'Facebook Video Downloader',
    'Download Facebook Video',
    'Facebook Video Download',
    'FB Video Downloader',
    'Facebook Video Saver',
  ],
  openGraph: {
    title: 'Facebook Video Downloader \u2013 Download Facebook Videos Online',
    description: 'Free and easy Facebook Video Downloader. Paste a public Facebook video URL and save supported videos quickly on mobile or desktop.',
    type: 'website',
    url: 'https://facebook-video-downloader.com', // Placeholder
    siteName: 'Facebook Video Downloader',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Facebook Video Downloader \u2013 Download Facebook Videos Online',
    description: 'Free and easy Facebook Video Downloader. Paste a public Facebook video URL and save supported videos quickly on mobile or desktop.',
  },
  alternates: {
    canonical: 'https://facebook-video-downloader.com',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased text-slate-800 bg-slate-50 flex flex-col min-h-screen font-sans" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
