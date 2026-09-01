import { articles } from '@/data/articles';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ChevronLeft, BookOpen, Clock } from 'lucide-react';
import { Metadata } from 'next';

export function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const article = articles.find((a) => a.slug === resolvedParams.slug);
  if (!article) return { title: 'Article Not Found' };
  
  return {
    title: `${article.title} | FBDownloader Blog`,
    description: article.excerpt,
  };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const article = articles.find((a) => a.slug === resolvedParams.slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-50 py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-bold mb-8 transition-colors">
          <ChevronLeft className="w-4 h-4" /> Back to Home
        </Link>
        
        <article className="bg-white p-8 sm:p-12 rounded-3xl shadow-sm border border-slate-100">
          <div className="flex items-center gap-4 mb-6">
            <span className="bg-blue-50 text-blue-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
              {article.category}
            </span>
            <span className="text-slate-400 text-sm font-medium flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              {article.readTime}
            </span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-8 leading-tight">
            {article.title}
          </h1>
          
          <div 
            className="prose prose-lg prose-slate prose-headings:font-bold prose-headings:text-slate-900 prose-a:text-blue-600 hover:prose-a:text-blue-700 max-w-none"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </article>
      </div>
    </div>
  );
}
