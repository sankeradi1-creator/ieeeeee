import React from 'react';
import { Lightbulb, Code2, Users2, GraduationCap, ArrowUpRight, Binary, Cpu, CheckCircle2, Info } from 'lucide-react';
import { playSound } from '../utils/soundEffects';

export const About: React.FC = () => {
  const pillars = [
    {
      title: 'Innovation',
      icon: Lightbulb,
      color: 'from-amber-400 to-orange-500',
      borderColor: 'group-hover:border-amber-500/40',
      glowColor: 'group-hover:shadow-[0_0_25px_rgba(245,158,11,0.2)]',
      desc: 'Fostering inventive thinking by incubating student ideas, participating in patentable research, and exploring emerging computational frontiers.'
    },
    {
      title: 'Technical Excellence',
      icon: Code2,
      color: 'from-cyan-400 to-blue-500',
      borderColor: 'group-hover:border-cyan-500/40',
      glowColor: 'group-hover:shadow-[0_0_25px_rgba(6,182,212,0.2)]',
      desc: 'Mastering algorithm design, system architecture, clean coding practices, and competitive programming with global industry standards.'
    },
    {
      title: 'Community',
      icon: Users2,
      color: 'from-purple-400 to-pink-500',
      borderColor: 'group-hover:border-purple-500/40',
      glowColor: 'group-hover:shadow-[0_0_25px_rgba(168,85,247,0.2)]',
      desc: 'Cultivating a collaborative ecosystem where senior mentors, peer developers, and faculty advisors build transformative solutions together.'
    },
    {
      title: 'Continuous Learning',
      icon: GraduationCap,
      color: 'from-emerald-400 to-teal-500',
      borderColor: 'group-hover:border-emerald-500/40',
      glowColor: 'group-hover:shadow-[0_0_25px_rgba(16,185,129,0.2)]',
      desc: 'Organizing intensive hands-on workshops, bootcamps, and technical talks delivered by distinguished IEEE scholars and industry leads.'
    }
  ];

  const outcomes = [
    'Master high-demand computing frameworks (AI, Cloud, IoT, Web3)',
    'Build and deploy real-world open-source software and hardware projects',
    'Represent MBITS at prestigious national hackathons and symposiums',
    'Access IEEE digital libraries, technical publications, and global conferences',
    'Develop teamwork, technical communication, and organizational leadership',
    'Network with a worldwide directory of computing professionals and alumni'
  ];

  return (
    <section id="about" className="relative py-24 bg-[#030712] overflow-hidden">
      {/* Decorative gradient lines */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
      <div className="absolute -left-40 top-1/3 w-96 h-96 bg-cyan-600/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono tracking-widest uppercase mb-4">
            <Binary className="w-3.5 h-3.5" />
            <span>Identity & Purpose</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
            Pioneering the Next Generation of <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400">
              Computer Scientists & Engineers
            </span>
          </h2>
          <p className="mt-4 max-w-3xl text-slate-300 text-base sm:text-lg font-light leading-relaxed">
            The IEEE Computer Society Student Chapter at Mar Baselios Institute of Technology and Science (MBITS) is a premier technical collective. We bridge academic theory with industry execution, equipping students with practical engineering prowess.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                onMouseEnter={() => playSound('hover')}
                className={`glass-card rounded-2xl p-6 border border-white/5 transition-all duration-300 ${pillar.borderColor} ${pillar.glowColor} group flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${pillar.color} p-[1px] transition-transform duration-300 group-hover:scale-110`}>
                      <div className="w-full h-full bg-[#060B1B] rounded-[11px] flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <span className="text-xs font-mono text-slate-400">0{idx + 1}</span>
                  </div>

                  <h3 className="text-xl font-display font-bold text-white group-hover:text-cyan-300 transition-colors mb-2.5">
                    {pillar.title}
                  </h3>

                  <p className="text-slate-300 text-sm leading-relaxed font-light">
                    {pillar.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-cyan-400/80 group-hover:text-cyan-300">
                  <span>Core Principle</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Detailed Chapter Mission & Student Impact */}
        <div className="glass-panel rounded-3xl p-8 sm:p-10 border border-cyan-500/20 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-[80px] pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center space-x-2 text-cyan-400 font-mono text-xs tracking-wider">
                <Cpu className="w-4 h-4" />
                <span>STUDENT GROWTH MATRIX</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
                Empowering Engineers to Build Real-World Solutions
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                As a student chapter of the world’s premier organization for computer professionals, IEEE CS MBITS provides a vibrant playground for developers, researchers, designers, and tech strategists.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {outcomes.map((item, index) => (
                  <div key={index} className="flex items-start space-x-2.5 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Interactive Chapter Blueprint Card */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <div className="rounded-2xl bg-[#060B1B]/90 border border-cyan-500/30 p-6 space-y-4 shadow-xl">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <div className="flex items-center space-x-2">
                    <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="font-mono text-xs text-slate-300 font-semibold">CHAPTER PULSE</span>
                  </div>
                  <span className="font-mono text-[11px] text-cyan-400">MBITS CSE WING</span>
                </div>

                <div className="space-y-3 font-mono text-xs">
                  <div className="flex justify-between py-1.5 border-b border-slate-800/60">
                    <span className="text-slate-400">Parent Society:</span>
                    <span className="text-slate-200 font-semibold">IEEE Computer Society</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-800/60">
                    <span className="text-slate-400">Parent Section:</span>
                    <span className="text-slate-200 font-semibold">IEEE Kerala Section (R10)</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-800/60">
                    <span className="text-slate-400">College Chapter:</span>
                    <span className="text-cyan-300 font-semibold">MBITS Kothamangalam</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-800/60">
                    <span className="text-slate-400">Focus Areas:</span>
                    <span className="text-slate-200">AI, Cloud, Cyber, IoT, Web</span>
                  </div>
                  <div className="flex justify-between pt-1">
                    <span className="text-slate-400">Status:</span>
                    <span className="text-emerald-400 font-semibold">Active & Recruiting</span>
                  </div>
                </div>

                <div className="pt-2">
                  <div className="p-3 rounded-xl bg-cyan-950/40 border border-cyan-500/20 flex items-start space-x-2">
                    <Info className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <p className="text-[11px] text-slate-400 leading-normal">
                      Information on this portal is structured with central data models for seamless official chapter updates.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
