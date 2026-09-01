import React from 'react';
import { BookOpen, ChevronRight } from 'lucide-react';

export default function ArticlesSection() {
  const articles = [
    {
      title: "How to Download Facebook Videos on Android & iPhone",
      excerpt: "Learn the step-by-step process of saving your favorite Facebook videos directly to your mobile device's camera roll or gallery.",
      category: "Guide",
      readTime: "3 min read"
    },
    {
      title: "Why You Can't Download Private Facebook Videos",
      excerpt: "Understanding Facebook's privacy policies, DRM protections, and why public video downloaders are the only safe and legal way to save content.",
      category: "Privacy",
      readTime: "4 min read"
    },
    {
      title: "Top 5 Uses for Downloaded Facebook Videos",
      excerpt: "From offline viewing during flights to backing up your own memories. Explore the best ways to utilize saved videos.",
      category: "Tips",
      readTime: "2 min read"
    },
    {
      title: "SD vs HD: Which Video Quality Should You Choose?",
      excerpt: "A comprehensive guide to video resolutions. Find out when to save space with SD and when to demand the crisp clarity of High Definition.",
      category: "Tech",
      readTime: "5 min read"
    }
  ];

  return (
    <section id="articles" className="py-16 px-4 max-w-7xl mx-auto w-full">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 flex items-center gap-3">
          <span className="w-1.5 h-8 bg-blue-600 rounded-full"></span>
          Latest Guides & Articles
        </h2>
        <a href="#articles" className="text-blue-600 hover:text-blue-700 font-bold text-sm flex items-center gap-1 transition-colors self-start sm:self-auto">
          View all articles <ChevronRight className="w-4 h-4" />
        </a>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {articles.map((article, i) => (
          <article key={i} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-shadow group cursor-pointer flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-blue-50 text-blue-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                  {article.category}
                </span>
                <span className="text-slate-400 text-xs font-medium flex items-center gap-1">
                  <BookOpen className="w-3.5 h-3.5" />
                  {article.readTime}
                </span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                {article.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed line-clamp-3">
                {article.excerpt}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-50">
              <span className="text-sm font-bold text-blue-600 flex items-center gap-1 group-hover:gap-2 transition-all">
                Read full article <ChevronRight className="w-4 h-4" />
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
