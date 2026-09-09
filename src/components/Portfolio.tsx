import React, { useState, useMemo } from 'react';
import { ExternalLink, Eye, ArrowUpRight, Play, X, MessageSquare, CheckCircle } from 'lucide-react';
import { Language, ProjectItem } from '../types';
import { projectsData, portfolioCategories } from '../data/projects';
import { translations } from '../data/translations';
import { siteConfig } from '../data/siteConfig';

interface PortfolioProps {
  currentLang: Language;
}

export const Portfolio: React.FC<PortfolioProps> = ({ currentLang }) => {
  const t = translations[currentLang].portfolio;
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'All') return projectsData;
    return projectsData.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <section id="portfolio" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header & Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#145BFF] bg-blue-50 px-3 py-1 rounded-md">
              <span>{t.eyebrow}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1B3A] tracking-tight">
              {t.heading}
            </h2>
            <p className="text-base sm:text-lg text-slate-600">
              {t.subheading}
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2 pt-2">
            {portfolioCategories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? 'bg-[#0B1B3A] text-white shadow-md'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {cat === 'All' ? t.filterAll : cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Portfolio Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              {/* Thumbnail Container */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                <img
                  src={project.image}
                  alt={project.title[currentLang]}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-[#0B1B3A]/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-3">
                  <button
                    onClick={() => setActiveProject(project)}
                    className="p-3 rounded-full bg-white text-[#0B1B3A] hover:bg-[#145BFF] hover:text-white shadow-lg transition-colors cursor-pointer"
                    title="View Project Details"
                  >
                    <Eye className="w-5 h-5" />
                  </button>
                </div>

                {/* Category Pill Tag */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-xs text-[11px] font-bold text-[#0B1B3A] shadow-xs">
                    {project.categoryLabel[currentLang]}
                  </span>
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-400 font-medium mb-2">
                    <span>{project.clientOrBrand || 'Commercial Client'}</span>
                    <span className="text-[#145BFF] font-semibold">{project.category}</span>
                  </div>

                  <h3 className="text-xl font-bold text-[#0B1B3A] group-hover:text-[#145BFF] transition-colors line-clamp-1 mb-2">
                    {project.title[currentLang]}
                  </h3>

                  <p className="text-sm text-slate-600 line-clamp-2 leading-relaxed mb-4">
                    {project.description[currentLang]}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => setActiveProject(project)}
                    className="inline-flex items-center space-x-1.5 text-xs font-bold text-[#0B1B3A] hover:text-[#145BFF] transition-colors cursor-pointer"
                  >
                    <span>{t.viewCase}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>

                  <a
                    href={`https://wa.me/917319195933?text=${encodeURIComponent(
                      `Hi Pradip, I'm interested in project work similar to "${project.title.en}".`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-emerald-600 hover:text-emerald-700 flex items-center space-x-1"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Inquire</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Modal Preview */}
      {activeProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden max-h-[90vh] flex flex-col animate-in zoom-in-95 duration-200">
            {/* Header */}
            <div className="flex items-center justify-between p-5 border-b border-slate-100 bg-slate-50/70">
              <div>
                <span className="text-xs font-bold text-[#145BFF] uppercase tracking-wider">
                  {activeProject.categoryLabel[currentLang]}
                </span>
                <h3 className="text-xl font-bold text-[#0B1B3A]">
                  {activeProject.title[currentLang]}
                </h3>
              </div>
              <button
                onClick={() => setActiveProject(null)}
                className="p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Body */}
            <div className="p-6 overflow-y-auto space-y-6">
              <div className="rounded-xl overflow-hidden bg-slate-900 aspect-[16/9] relative">
                <img
                  src={activeProject.image}
                  alt={activeProject.title[currentLang]}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-3">
                <h4 className="text-base font-bold text-[#0B1B3A]">
                  Project Overview
                </h4>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {activeProject.description[currentLang]}
                </p>
              </div>

              {activeProject.deliverables && (
                <div>
                  <h4 className="text-xs uppercase font-bold tracking-wider text-slate-400 mb-2">
                    {t.deliverablesHeading}
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {activeProject.deliverables.map((del, i) => (
                      <div key={i} className="flex items-center space-x-2 text-xs sm:text-sm text-slate-700">
                        <CheckCircle className="w-4 h-4 text-[#145BFF] shrink-0" />
                        <span>{del}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Footer Actions */}
            <div className="p-5 border-t border-slate-100 bg-slate-50 flex items-center justify-between">
              <span className="text-xs text-slate-500">
                Created by AI With Pradip
              </span>
              <div className="flex items-center space-x-3">
                <a
                  href={`https://wa.me/917319195933?text=${encodeURIComponent(
                    `Hi Pradip, let's discuss a creative project like "${activeProject.title.en}".`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-[#145BFF] hover:bg-[#0A47DC] text-white text-sm font-semibold shadow-xs flex items-center space-x-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Inquire on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
