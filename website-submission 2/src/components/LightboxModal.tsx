import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Calendar } from 'lucide-react';
import type { GalleryItem } from '../types';
import { playSound } from '../utils/soundEffects';

interface LightboxModalProps {
  item: GalleryItem | null;
  items: GalleryItem[];
  onClose: () => void;
  onNavigate: (newItem: GalleryItem) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({ item, items, onClose, onNavigate }) => {
  useEffect(() => {
    if (!item) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [item, items]);

  if (!item) return null;

  const currentIndex = items.findIndex((i) => i.id === item.id);

  const handleNext = () => {
    playSound('click');
    const nextIndex = (currentIndex + 1) % items.length;
    onNavigate(items[nextIndex]);
  };

  const handlePrev = () => {
    playSound('click');
    const prevIndex = (currentIndex - 1 + items.length) % items.length;
    onNavigate(items[prevIndex]);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl animate-fade-in"
      onClick={onClose}
    >
      {/* Lightbox Container */}
      <div
        className="relative max-w-5xl w-full flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Controls Bar */}
        <div className="w-full flex items-center justify-between text-white pb-3 mb-2 border-b border-white/10 font-mono text-xs">
          <div className="flex items-center space-x-2">
            <span className="text-cyan-400 font-bold">{item.category}</span>
            <span className="text-slate-500">•</span>
            <span className="text-slate-300">{currentIndex + 1} of {items.length}</span>
          </div>

          <button
            onClick={() => {
              playSound('click');
              onClose();
            }}
            className="p-1.5 rounded-lg bg-slate-900 border border-slate-700 text-slate-400 hover:text-white hover:border-cyan-400 transition-colors"
            aria-label="Close Lightbox"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Main Image Display */}
        <div className="relative w-full rounded-2xl overflow-hidden bg-black/60 border border-cyan-500/30 flex items-center justify-center max-h-[70vh]">
          <img
            src={item.imageUrl}
            alt={item.title}
            className="w-full max-h-[70vh] object-contain select-none"
          />

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-3 p-2.5 rounded-full bg-black/60 hover:bg-cyan-500/30 border border-white/20 text-white backdrop-blur-md transition-all hover:scale-110"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-3 p-2.5 rounded-full bg-black/60 hover:bg-cyan-500/30 border border-white/20 text-white backdrop-blur-md transition-all hover:scale-110"
            aria-label="Next Image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Caption & Metadata */}
        <div className="w-full mt-4 text-left p-4 rounded-xl bg-slate-900/80 border border-slate-800">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
            <h3 className="font-display font-bold text-white text-lg">{item.title}</h3>
            <span className="text-xs font-mono text-cyan-400 flex items-center space-x-1">
              <Calendar className="w-3.5 h-3.5" />
              <span>{item.date}</span>
            </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 font-light">{item.caption}</p>
        </div>
      </div>
    </div>
  );
};
