import React, { useState } from 'react';
import { Image, Maximize2, Calendar } from 'lucide-react';
import { galleryData } from '../data/galleryData';
import type { GalleryItem } from '../types';
import { playSound } from '../utils/soundEffects';
import { LightboxModal } from './LightboxModal';

export const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeLightboxItem, setActiveLightboxItem] = useState<GalleryItem | null>(null);

  const categories = ['All', 'Workshops', 'Hackathons', 'Tech Talks', 'Team', 'Community'];

  const filteredItems = selectedCategory === 'All'
    ? galleryData
    : galleryData.filter((item) => item.category === selectedCategory);

  return (
    <section id="gallery" className="relative py-24 bg-[#050918] overflow-hidden">
      <div className="absolute inset-0 tech-grid-bg opacity-15 pointer-events-none" />
      <div className="absolute top-1/2 -left-40 w-96 h-96 bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono tracking-widest uppercase mb-4">
              <Image className="w-3.5 h-3.5" />
              <span>Visual Chronicle</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
              Life Inside the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400">
                IEEE CS MBITS Lab
              </span>
            </h2>
            <p className="mt-3 text-slate-300 text-sm sm:text-base max-w-2xl font-light">
              Memories from our hackathons, keynote tech talks, project demos, and student community hack nights.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="mt-6 md:mt-0 flex flex-wrap gap-1.5 bg-slate-900/80 p-1.5 rounded-2xl border border-slate-800 backdrop-blur-md">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  playSound('click');
                  setSelectedCategory(cat);
                }}
                onMouseEnter={() => playSound('hover')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-[0_0_15px_rgba(6,182,212,0.3)]'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => {
                playSound('click');
                setActiveLightboxItem(item);
              }}
              onMouseEnter={() => playSound('hover')}
              className="group relative rounded-3xl overflow-hidden bg-slate-900 border border-white/10 hover:border-cyan-400/60 cursor-pointer shadow-lg hover:shadow-[0_0_30px_rgba(0,242,254,0.2)] transition-all duration-300 aspect-[16/11]"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Gradient Backdrop on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/50 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />

              {/* Top Tag & Enlarge Icon */}
              <div className="absolute top-4 inset-x-4 flex items-center justify-between">
                <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-medium bg-slate-900/80 text-cyan-300 border border-cyan-500/30 backdrop-blur-md">
                  {item.category}
                </span>

                <div className="w-8 h-8 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-75 group-hover:scale-100">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>

              {/* Bottom Caption Overlay */}
              <div className="absolute bottom-4 inset-x-4 transition-transform duration-300 transform group-hover:-translate-y-1">
                <div className="text-[11px] font-mono text-cyan-400 mb-1 flex items-center space-x-1.5">
                  <Calendar className="w-3 h-3" />
                  <span>{item.date}</span>
                </div>
                <h3 className="font-display font-bold text-white text-base leading-snug group-hover:text-cyan-200 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-300 mt-1 line-clamp-1 font-light">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        item={activeLightboxItem}
        items={filteredItems}
        onClose={() => setActiveLightboxItem(null)}
        onNavigate={(newItem) => setActiveLightboxItem(newItem)}
      />
    </section>
  );
};
