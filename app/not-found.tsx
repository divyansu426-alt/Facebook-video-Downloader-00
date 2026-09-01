import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-slate-900 mb-4">404 - Not Found</h2>
        <p className="text-slate-600 mb-8">Could not find the requested resource</p>
        <Link href="/" className="bg-blue-600 text-white px-6 py-3 rounded-xl font-bold">
          Return Home
        </Link>
      </div>
    </div>
  );
}
