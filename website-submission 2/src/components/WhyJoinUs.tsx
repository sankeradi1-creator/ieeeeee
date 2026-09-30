import React from 'react';
import { BookOpen, Hammer, Network, ShieldAlert, Trophy, Sparkles, ArrowRight } from 'lucide-react';
import { playSound } from '../utils/soundEffects';

interface WhyJoinUsProps {
  onOpenJoinModal: () => void;
}

export const WhyJoinUs: React.FC<WhyJoinUsProps> = ({ onOpenJoinModal }) => {
  const cards = [
    {
      title: 'Learn',
      icon: BookOpen,
      color: 'from-cyan-400 to-blue-500',
      badge: 'SKILL ACCELERATION',
      desc: 'Explore cutting-edge frameworks, machine learning, systems architecture, and industry tooling through curated peer bootcamps.'
    },
    {
      title: 'Build',
      icon: Hammer,
      color: 'from-blue-500 to-indigo-600',
      badge: 'PORTFOLIO PROJECTS',
      desc: 'Transform raw theoretical concepts into deployed open-source systems, mobile apps, hardware robots, and scalable web apps.'
    },
    {
      title: 'Connect',
      icon: Network,
      color: 'from-purple-400 to-pink-500',
      badge: 'GLOBAL IEEE NETWORK',
      desc: 'Form lifelong professional relationships with student researchers, alumni engineers at top tech firms, and industry founders.'
    },
    {
      title: 'Lead',
      icon: ShieldAlert,
      color: 'from-amber-400 to-orange-500',
      badge: 'ORGANIZATIONAL IMPACT',
      desc: 'Take the helm of flagship hackathons, manage multi-tier operations, budget tech activities, and inspire peer engineers.'
    },
    {
      title: 'Compete',
      icon: Trophy,
      color: 'from-emerald-400 to-teal-500',
      badge: 'PODIUM HONORS',
      desc: 'Form elite student teams to contest high-stakes hackathons, competitive programming jousts, and IEEE Extreme.'
    }
  ];

  return (
    <section className="relative py-24 bg-[#030712] overflow-hidden">
      <div className="absolute inset-0 tech-dots-bg opacity-15 pointer-events-none" />
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono tracking-widest uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Value Proposition</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
            Why Join IEEE Computer Society <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400">
              at MBITS?
            </span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg font-light leading-relaxed">
            Your university journey is elevated when you are surrounded by passionate builders. Here is what IEEE CS MBITS unlocks for your career:
          </p>
        </div>

        {/* 5 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <div
                key={index}
                onMouseEnter={() => playSound('hover')}
                className={`glass-card rounded-3xl p-6 border border-white/5 hover:border-cyan-500/40 transition-all duration-300 group flex flex-col justify-between hover:shadow-[0_10px_35px_rgba(6,182,212,0.15)] hover:-translate-y-1 ${
                  index === 4 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${card.color} p-[1px]`}>
                      <div className="w-full h-full bg-[#060B1B] rounded-[15px] flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <span className="text-[10px] font-mono tracking-wider text-cyan-400/90 bg-cyan-950/50 px-2.5 py-1 rounded-full border border-cyan-500/20">
                      {card.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl font-display font-bold text-white group-hover:text-cyan-300 transition-colors mb-2.5">
                    {card.title}
                  </h3>

                  <p className="text-slate-300 text-sm font-light leading-relaxed">
                    {card.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center text-xs font-mono text-slate-400 group-hover:text-cyan-300 transition-colors">
                  <span>Growth Vector</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            );
          })}

          {/* 6th Card: Join Callout Box */}
          <div className="glass-panel rounded-3xl p-6 border border-cyan-500/40 flex flex-col justify-between relative overflow-hidden bg-gradient-to-br from-cyan-950/40 via-slate-900 to-[#0A122E]">
            <div>
              <span className="text-[10px] font-mono tracking-wider text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded-full border border-emerald-500/30">
                ACTIVE MEMBERSHIP
              </span>
              <h3 className="text-2xl font-display font-bold text-white mt-4 mb-2">
                Ready to Accelerate Your Career?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                Connect with chapter coordinators, receive official IEEE CS membership benefits, and gain priority access to all workshops.
              </p>
            </div>

            <button
              onClick={() => {
                playSound('click');
                onOpenJoinModal();
              }}
              onMouseEnter={() => playSound('hover')}
              className="mt-6 w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-xs tracking-wider uppercase transition-all shadow-[0_0_20px_rgba(6,182,212,0.35)] flex items-center justify-center space-x-2"
            >
              <span>Apply for Membership</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
