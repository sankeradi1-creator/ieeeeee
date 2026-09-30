import React, { useState } from 'react';
import { Trophy, Award, Target } from 'lucide-react';
import { achievementsData } from '../data/achievementsData';
import { playSound } from '../utils/soundEffects';

export const Achievements: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Hackathons', 'Competitions', 'Awards', 'Projects'];

  const filteredAchievements = selectedCategory === 'All'
    ? achievementsData
    : achievementsData.filter((item) => item.category === selectedCategory);

  return (
    <section id="achievements" className="relative py-24 bg-[#050918] overflow-hidden">
      <div className="absolute inset-0 tech-grid-bg opacity-15 pointer-events-none" />
      <div className="absolute top-1/4 -right-40 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono tracking-widest uppercase mb-4">
              <Trophy className="w-3.5 h-3.5 text-amber-400" />
              <span>Chapter Milestones</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
              Track Record of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-400 to-cyan-400">
                Engineering Excellence
              </span>
            </h2>
            <p className="mt-3 text-slate-300 text-sm sm:text-base max-w-2xl font-light">
              Celebrating student triumphs at national hackathons, technical symposiums, research symposiums, and community impact initiatives.
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
                    ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-[0_0_15px_rgba(245,158,11,0.3)]'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline & Cards Layout */}
        <div className="relative border-l-2 border-cyan-500/30 ml-4 md:ml-32 space-y-10 pl-6 md:pl-10">
          {filteredAchievements.map((item) => (
            <div
              key={item.id}
              onMouseEnter={() => playSound('hover')}
              className="relative group"
            >
              {/* Timeline Node Dot */}
              <div className="absolute -left-[31px] md:-left-[47px] top-6 w-5 h-5 rounded-full bg-[#030712] border-2 border-cyan-400 flex items-center justify-center shadow-[0_0_10px_rgba(6,182,212,0.6)] group-hover:scale-125 transition-transform duration-300">
                <span className="w-2 h-2 rounded-full bg-cyan-400" />
              </div>

              {/* Year Label for larger screens */}
              <div className="hidden md:block absolute -left-32 top-5 font-mono font-bold text-cyan-400 text-sm">
                {item.year}
              </div>

              {/* Achievement Card */}
              <div className="glass-card rounded-2xl p-6 sm:p-7 border border-white/5 hover:border-amber-500/40 transition-all duration-300 group-hover:shadow-[0_10px_30px_rgba(245,158,11,0.15)] group-hover:-translate-y-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                  <div className="flex items-center space-x-2.5">
                    <span className="md:hidden font-mono font-bold text-cyan-400 text-xs bg-slate-900 px-2 py-0.5 rounded border border-cyan-500/30">
                      {item.year}
                    </span>
                    <span className="px-2.5 py-1 rounded-full text-xs font-mono font-semibold bg-amber-500/15 text-amber-300 border border-amber-500/30 flex items-center space-x-1.5">
                      <Award className="w-3.5 h-3.5" />
                      <span>{item.badge}</span>
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      • {item.category}
                    </span>
                  </div>

                  {item.isSample && (
                    <span className="text-[10px] font-mono text-slate-400 bg-slate-900/60 px-2 py-0.5 rounded self-start sm:self-auto">
                      Sample Milestone Data
                    </span>
                  )}
                </div>

                <h3 className="text-xl sm:text-2xl font-display font-bold text-white group-hover:text-amber-300 transition-colors mb-2">
                  {item.title}
                </h3>

                <p className="text-slate-300 text-sm font-light leading-relaxed mb-4">
                  {item.description}
                </p>

                {item.impactMetrics && (
                  <div className="pt-3 border-t border-slate-800/80 flex items-center space-x-2 text-xs font-mono text-cyan-300">
                    <Target className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Impact Metric: {item.impactMetrics}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
