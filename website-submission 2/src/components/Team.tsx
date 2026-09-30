import React, { useState } from 'react';
import { Mail, Users, Sparkles, HeartHandshake } from 'lucide-react';
import { teamData } from '../data/teamData';
import type { TeamMember } from '../types';
import { playSound } from '../utils/soundEffects';
import { LinkedInIcon, GitHubIcon } from './Icons';

interface TeamProps {
  onOpenJoinModal: () => void;
}

export const Team: React.FC<TeamProps> = ({ onOpenJoinModal }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Faculty', 'Executive', 'Technical', 'Creative & Operations'];

  const filteredTeam: TeamMember[] = selectedCategory === 'All'
    ? teamData
    : teamData.filter((member) => member.category === selectedCategory);

  return (
    <section id="team" className="relative py-24 bg-[#030712] overflow-hidden">
      <div className="absolute inset-0 tech-grid-bg opacity-20 pointer-events-none" />
      <div className="absolute top-1/3 -left-40 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 -right-40 w-96 h-96 bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono tracking-widest uppercase mb-4">
              <Users className="w-3.5 h-3.5" />
              <span>Leadership & Mentors</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
              The Minds Driving <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400">
                IEEE CS MBITS
              </span>
            </h2>
            <p className="mt-3 text-slate-300 text-sm sm:text-base max-w-2xl font-light">
              Meet our faculty advisors, executive committee, technical architects, and creative directors shaping our student initiatives.
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

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {filteredTeam.map((member) => (
            <div
              key={member.id}
              onMouseEnter={() => playSound('hover')}
              className="glass-card rounded-3xl p-5 border border-white/5 hover:border-cyan-500/40 transition-all duration-300 group flex flex-col justify-between hover:shadow-[0_10px_35px_rgba(6,182,212,0.15)] hover:-translate-y-1.5"
            >
              <div>
                {/* Photo with Cyber Neon Border */}
                <div className="relative aspect-square rounded-2xl overflow-hidden mb-4 bg-slate-900 border border-slate-800 group-hover:border-cyan-400/50 transition-colors">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060B1B] via-transparent to-transparent opacity-60" />

                  {/* Role Category Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-slate-900/90 text-cyan-300 border border-cyan-500/30 backdrop-blur-md">
                      {member.category}
                    </span>
                  </div>
                </div>

                {/* Name & Role */}
                <h3 className="text-lg font-display font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {member.name}
                </h3>
                <div className="text-xs font-mono text-cyan-400 mt-0.5 mb-2 font-medium">
                  {member.role}
                </div>

                {/* Bio */}
                <p className="text-xs text-slate-300 font-light leading-relaxed mb-4 line-clamp-3">
                  {member.bio}
                </p>
              </div>

              {/* Social Links & Sample Marker */}
              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg bg-slate-900 hover:bg-cyan-500/20 text-slate-400 hover:text-cyan-300 transition-colors"
                      aria-label={`${member.name} LinkedIn`}
                    >
                      <LinkedInIcon className="w-3.5 h-3.5" />
                    </a>
                  )}
                  {member.github && (
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg bg-slate-900 hover:bg-cyan-500/20 text-slate-400 hover:text-cyan-300 transition-colors"
                      aria-label={`${member.name} GitHub`}
                    >
                      <GitHubIcon className="w-3.5 h-3.5" />
                    </a>
                  )}
                  {member.email && (
                    <a
                      href={`mailto:${member.email}`}
                      className="p-1.5 rounded-lg bg-slate-900 hover:bg-cyan-500/20 text-slate-400 hover:text-cyan-300 transition-colors"
                      aria-label={`Email ${member.name}`}
                    >
                      <Mail className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>

                {member.isSample && (
                  <span className="text-[10px] font-mono text-slate-400">
                    Sample Lead
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Join the Core Committee Callout */}
        <div className="glass-panel rounded-3xl p-8 sm:p-10 border border-purple-500/30 text-center max-w-4xl mx-auto relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/10 rounded-full blur-[70px] pointer-events-none" />
          
          <div className="relative z-10 flex flex-col items-center">
            <div className="w-12 h-12 rounded-2xl bg-purple-500/20 border border-purple-500/40 text-purple-300 flex items-center justify-center mb-4">
              <HeartHandshake className="w-6 h-6" />
            </div>

            <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-2">
              Interested in Leading with Us?
            </h3>
            <p className="text-slate-300 text-sm max-w-xl font-light mb-6">
              Applications for Executive Committee Sub-Leads, Technical Organizers, and Design Volunteers open each academic semester.
            </p>

            <button
              onClick={() => {
                playSound('click');
                onOpenJoinModal();
              }}
              onMouseEnter={() => playSound('hover')}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-400 hover:to-indigo-500 text-white font-semibold text-xs tracking-wider uppercase shadow-[0_0_25px_rgba(168,85,247,0.35)] transition-all flex items-center space-x-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>Submit Core Team Application</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
