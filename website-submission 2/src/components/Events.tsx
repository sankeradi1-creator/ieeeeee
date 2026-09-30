import React, { useState } from 'react';
import { Calendar, Clock, MapPin, ArrowRight } from 'lucide-react';
import { eventsData } from '../data/eventsData';
import type { EventItem } from '../types';
import { playSound } from '../utils/soundEffects';
import { EventModal } from './EventModal';

export const Events: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalEvent, setActiveModalEvent] = useState<EventItem | null>(null);

  const categories = ['All', 'Workshop', 'Hackathon', 'Competition', 'Tech Talk', 'Bootcamp'];

  const filteredEvents = selectedCategory === 'All'
    ? eventsData
    : eventsData.filter((evt) => evt.category === selectedCategory);

  return (
    <section id="events" className="relative py-24 bg-[#030712] overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/3 -left-40 w-80 h-80 bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 -right-40 w-80 h-80 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono tracking-widest uppercase mb-4">
              <Calendar className="w-3.5 h-3.5" />
              <span>Chapter Calendar</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
              Featured Events & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400">
                Technical Hackathons
              </span>
            </h2>
            <p className="mt-3 text-slate-300 text-sm sm:text-base max-w-2xl font-light">
              Elevate your programming skills through our hands-on workshops, state-level hackathons, and technical symposiums with industry mentors.
            </p>
          </div>

          {/* Category Filter Tabs */}
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

        {/* Events Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event) => {
            const isRegOpen = event.status === 'Registration Open';
            const isUpcoming = event.status === 'Upcoming';

            return (
              <div
                key={event.id}
                onMouseEnter={() => playSound('hover')}
                className="glass-card rounded-3xl p-6 border border-white/5 hover:border-cyan-500/40 transition-all duration-300 group flex flex-col justify-between hover:shadow-[0_10px_35px_rgba(6,182,212,0.15)] hover:-translate-y-1 relative"
              >
                {/* Event Top Meta */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-mono font-semibold bg-cyan-950/60 text-cyan-300 border border-cyan-500/30">
                      {event.category}
                    </span>
                    <span
                      className={`px-2 py-0.5 rounded-full text-[10px] font-mono font-medium border ${
                        isRegOpen
                          ? 'bg-emerald-950/60 text-emerald-400 border-emerald-500/30 animate-pulse'
                          : isUpcoming
                          ? 'bg-blue-950/60 text-blue-300 border-blue-500/30'
                          : 'bg-slate-900 text-slate-400 border-slate-700'
                      }`}
                    >
                      {event.status}
                    </span>
                  </div>

                  <h3 className="text-xl font-display font-bold text-white group-hover:text-cyan-300 transition-colors mb-2.5 leading-snug">
                    {event.title}
                  </h3>

                  <p className="text-slate-300 text-sm font-light leading-relaxed mb-5 line-clamp-2">
                    {event.description}
                  </p>
                </div>

                {/* Logistics & Footer */}
                <div className="pt-4 border-t border-slate-800/80 space-y-3">
                  <div className="space-y-1.5 text-xs font-mono text-slate-400">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span className="truncate">{event.location}</span>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {event.tags.slice(0, 3).map((tag, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-mono text-slate-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Button */}
                  <button
                    onClick={() => {
                      playSound('click');
                      setActiveModalEvent(event);
                    }}
                    className={`w-full mt-3 py-2.5 rounded-xl font-medium text-xs flex items-center justify-center space-x-2 transition-all ${
                      isRegOpen
                        ? 'bg-cyan-500/15 hover:bg-cyan-500/25 border border-cyan-500/40 text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.15)]'
                        : 'bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800'
                    }`}
                  >
                    <span>{isRegOpen ? 'Register Now' : 'Learn More & Agenda'}</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Interactive Detail & Registration Modal */}
      <EventModal
        event={activeModalEvent}
        onClose={() => setActiveModalEvent(null)}
      />
    </section>
  );
};
