import React, { useState } from 'react';
import { BookOpen, Calendar, Clock, ArrowRight, X, MessageSquare } from 'lucide-react';
import { Language, InsightPost } from '../types';
import { insightsData } from '../data/insights';
import { translations } from '../data/translations';

interface InsightsProps {
  currentLang: Language;
}

export const Insights: React.FC<InsightsProps> = ({ currentLang }) => {
  const t = translations[currentLang].insights;
  const [activeArticle, setActiveArticle] = useState<InsightPost | null>(null);

  return (
    <section id="insights" className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#145BFF] bg-blue-50 px-3 py-1 rounded-md">
            <BookOpen className="w-3.5 h-3.5" />
            <span>{t.eyebrow}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1B3A] tracking-tight">
            {t.heading}
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            {t.subheading}
          </p>
        </div>

        {/* Article Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {insightsData.map((post) => (
            <article
              key={post.id}
              className="group bg-white rounded-2xl p-7 border border-slate-200/90 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Meta tags */}
                <div className="flex items-center justify-between text-xs text-slate-500 font-medium mb-4">
                  <span className="font-bold uppercase tracking-wider text-[#145BFF] bg-blue-50 px-2.5 py-1 rounded-md">
                    {post.category}
                  </span>
                  <div className="flex items-center space-x-1 text-slate-400">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-[#0B1B3A] group-hover:text-[#145BFF] transition-colors line-clamp-2 mb-3 leading-snug">
                  {post.title[currentLang]}
                </h3>

                {/* Excerpt */}
                <p className="text-sm text-slate-600 line-clamp-3 leading-relaxed mb-6">
                  {post.excerpt[currentLang]}
                </p>
              </div>

              {/* Footer / Read More Action */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-400 flex items-center space-x-1 font-medium">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{post.date}</span>
                </span>

                <button
                  onClick={() => setActiveArticle(post)}
                  className="inline-flex items-center space-x-1.5 text-xs font-bold text-[#0B1B3A] group-hover:text-[#145BFF] transition-colors cursor-pointer"
                >
                  <span>{t.readMore}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Full Article Reader Modal */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden max-h-[85vh] flex flex-col animate-in zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-slate-100 bg-slate-50/80">
              <div className="flex items-center space-x-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#145BFF] bg-blue-100/70 px-2.5 py-1 rounded-md">
                  {activeArticle.category}
                </span>
                <span className="text-xs text-slate-400 font-medium">
                  {activeArticle.readTime}
                </span>
              </div>
              <button
                onClick={() => setActiveArticle(null)}
                className="p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors"
                aria-label="Close article"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Article Content */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1B3A] leading-tight">
                {activeArticle.title[currentLang]}
              </h2>

              <p className="text-sm sm:text-base font-semibold text-slate-700 leading-relaxed italic border-l-3 border-[#145BFF] pl-4 py-1">
                {activeArticle.excerpt[currentLang]}
              </p>

              <div className="text-sm sm:text-base text-slate-600 leading-relaxed space-y-4 whitespace-pre-line">
                {activeArticle.content[currentLang]}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-5 border-t border-slate-100 bg-slate-50 flex items-center justify-between">
              <span className="text-xs text-slate-500 font-medium">
                Published by Pradip Das • {activeArticle.date}
              </span>
              <button
                onClick={() => setActiveArticle(null)}
                className="px-5 py-2 rounded-xl bg-[#0B1B3A] hover:bg-[#145BFF] text-white text-xs font-semibold transition-colors"
              >
                {t.closeArticle}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
