import React, { useState } from 'react';
import { 
  Network, 
  Cpu, 
  ShieldAlert, 
  Server, 
  BrainCircuit, 
  Binary, 
  Blocks, 
  Activity, 
  Terminal, 
  FolderGit2, 
  Clock, 
  Layers,
  ArrowRight
} from 'lucide-react';
import { techDomainsData } from '../data/techDomainsData';
import type { TechDomain } from '../types';
import { playSound } from '../utils/soundEffects';

interface InnovationFeatureProps {
  onJoinDomain: (domainName: string) => void;
}

export const InnovationFeature: React.FC<InnovationFeatureProps> = ({ onJoinDomain }) => {
  const [selectedDomain, setSelectedDomain] = useState<TechDomain>(techDomainsData[0]);
  const [viewMode, setViewMode] = useState<'network' | 'dashboard'>('network');

  const getDomainIcon = (iconName: string) => {
    switch (iconName) {
      case 'BrainCircuit': return BrainCircuit;
      case 'ShieldAlert': return ShieldAlert;
      case 'Server': return Server;
      case 'Cpu': return Cpu;
      case 'Binary': return Binary;
      case 'Blocks': return Blocks;
      default: return Network;
    }
  };

  return (
    <section id="command-center" className="relative py-24 bg-[#050918] overflow-hidden">
      {/* Background Cyber Grid */}
      <div className="absolute inset-0 tech-grid-bg opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 -left-40 w-96 h-96 bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono tracking-widest uppercase mb-4">
              <Activity className="w-3.5 h-3.5 animate-pulse" />
              <span>Interactive Innovation Hub</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
              Digital Command Center & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400">
                Interactive Tech Network
              </span>
            </h2>
            <p className="mt-3 text-slate-300 text-sm sm:text-base max-w-2xl font-light">
              Explore the 6 core computing verticals governed by IEEE CS MBITS. Inspect live student software repositories, skill taxonomies, and technical roadmaps.
            </p>
          </div>

          {/* View Mode Toggle */}
          <div className="mt-6 md:mt-0 flex items-center bg-slate-900/80 p-1.5 rounded-xl border border-slate-800 backdrop-blur-md">
            <button
              onClick={() => {
                playSound('click');
                setViewMode('network');
              }}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-xs font-medium transition-all ${
                viewMode === 'network'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-[0_0_15px_rgba(6,182,212,0.25)]'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Network className="w-3.5 h-3.5" />
              <span>Domain Explorer</span>
            </button>
            <button
              onClick={() => {
                playSound('click');
                setViewMode('dashboard');
              }}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-xs font-medium transition-all ${
                viewMode === 'dashboard'
                  ? 'bg-purple-500/20 text-purple-300 border border-purple-500/40 shadow-[0_0_15px_rgba(168,85,247,0.25)]'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Activity className="w-3.5 h-3.5" />
              <span>Chapter Telemetry</span>
            </button>
          </div>
        </div>

        {/* VIEW 1: DOMAIN EXPLORER & INTERACTIVE NETWORK */}
        {viewMode === 'network' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Domain Selector Nodes */}
            <div className="lg:col-span-5 space-y-3">
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider px-1 mb-2 flex items-center justify-between">
                <span>Select Computing Domain</span>
                <span className="text-cyan-400">6 Specialized Nodes</span>
              </div>

              {techDomainsData.map((domain) => {
                const isSelected = selectedDomain.id === domain.id;
                const IconComponent = getDomainIcon(domain.iconName);

                return (
                  <button
                    key={domain.id}
                    onClick={() => {
                      playSound('click');
                      setSelectedDomain(domain);
                    }}
                    onMouseEnter={() => playSound('hover')}
                    className={`w-full text-left p-4 rounded-2xl transition-all duration-300 flex items-center justify-between border ${
                      isSelected
                        ? 'bg-gradient-to-r from-slate-900 to-[#0A122E] border-cyan-400 shadow-[0_0_25px_rgba(6,182,212,0.2)] transform translate-x-2'
                        : 'bg-[#060B1B]/70 hover:bg-slate-900/60 border-white/5 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center space-x-3.5">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center transition-colors"
                        style={{
                          backgroundColor: isSelected ? `${domain.color}25` : '#0f172a',
                          border: `1px solid ${isSelected ? domain.color : 'rgba(255,255,255,0.1)'}`
                        }}
                      >
                        <IconComponent
                          className="w-5 h-5 transition-transform group-hover:scale-110"
                          style={{ color: isSelected ? domain.color : '#94a3b8' }}
                        />
                      </div>

                      <div>
                        <div className="flex items-center space-x-2">
                          <span className="text-xs font-mono font-semibold" style={{ color: domain.color }}>
                            {domain.code}
                          </span>
                          {isSelected && (
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                          )}
                        </div>
                        <h4 className="text-sm font-semibold text-white mt-0.5">
                          {domain.name}
                        </h4>
                      </div>
                    </div>

                    <div className="text-right">
                      <span className="text-[11px] font-mono text-slate-400 bg-slate-800/80 px-2 py-1 rounded-md">
                        {domain.activeProjects.length} Projects
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right Column: Interactive Domain Detail Panel */}
            <div className="lg:col-span-7">
              <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-cyan-500/30 shadow-[0_0_50px_rgba(0,0,0,0.5)] relative overflow-hidden transition-all duration-300">
                {/* Glowing Top Banner */}
                <div
                  className="absolute top-0 left-0 right-0 h-1.5"
                  style={{ backgroundColor: selectedDomain.color }}
                />

                {/* Header Information */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-800 gap-4">
                  <div>
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="text-xs font-mono font-bold" style={{ color: selectedDomain.color }}>
                        {selectedDomain.code}
                      </span>
                      <span className="text-slate-500">•</span>
                      <span className="text-xs text-slate-400 font-mono">IEEE CS WORKING GROUP</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
                      {selectedDomain.name}
                    </h3>
                  </div>

                  <button
                    onClick={() => {
                      playSound('click');
                      onJoinDomain(selectedDomain.name);
                    }}
                    onMouseEnter={() => playSound('hover')}
                    className="px-4 py-2 rounded-xl bg-cyan-500/15 hover:bg-cyan-500/25 border border-cyan-500/40 text-cyan-300 text-xs font-medium flex items-center space-x-1.5 transition-all self-start sm:self-auto shadow-[0_0_15px_rgba(6,182,212,0.15)]"
                  >
                    <span>Join This Wing</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Domain Overview Description */}
                <div className="py-5">
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {selectedDomain.fullDesc}
                  </p>
                </div>

                {/* Competency & Skill Tags */}
                <div className="mb-6">
                  <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2.5 flex items-center space-x-1.5">
                    <Layers className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Technical Stack & Core Tooling</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {selectedDomain.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 rounded-lg text-xs font-mono bg-slate-900 border border-slate-700/60 text-slate-300 hover:border-cyan-400/50 hover:text-cyan-200 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Active Student Projects */}
                <div className="mb-6">
                  <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3 flex items-center space-x-1.5">
                    <FolderGit2 className="w-3.5 h-3.5 text-purple-400" />
                    <span>Active Chapter Prototypes & Research</span>
                  </div>
                  <div className="space-y-3">
                    {selectedDomain.activeProjects.map((project, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-xl bg-[#030712]/70 border border-white/5 hover:border-slate-700 transition-colors"
                      >
                        <div className="flex items-center justify-between mb-1.5">
                          <h4 className="text-sm font-semibold text-white flex items-center space-x-2">
                            <span>{project.title}</span>
                          </h4>
                          <span
                            className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${
                              project.status === 'Completed'
                                ? 'bg-emerald-950/60 text-emerald-400 border-emerald-500/30'
                                : project.status === 'In Development'
                                ? 'bg-amber-950/60 text-amber-400 border-amber-500/30'
                                : 'bg-blue-950/60 text-blue-400 border-blue-500/30'
                            }`}
                          >
                            {project.status}
                          </span>
                        </div>
                        <p className="text-xs text-slate-400 leading-normal mb-2.5">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {project.tech.map((t, i) => (
                            <span
                              key={i}
                              className="text-[10px] font-mono text-cyan-300/80 bg-cyan-950/40 px-2 py-0.5 rounded border border-cyan-500/20"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Roadmap Milestones */}
                <div>
                  <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2.5 flex items-center space-x-1.5">
                    <Clock className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Upcoming Domain Roadmap & Workshops</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {selectedDomain.roadmap.map((item, index) => (
                      <div
                        key={index}
                        className="p-2.5 rounded-lg bg-slate-900/50 border border-slate-800 text-[11px] text-slate-300 font-mono flex items-center space-x-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                        <span className="truncate">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* VIEW 2: CHAPTER TELEMETRY DASHBOARD */}
        {viewMode === 'dashboard' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Panel 1: Activity Feed & Systems */}
            <div className="glass-panel rounded-2xl p-6 border border-slate-800">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-4">
                <span className="font-mono text-xs text-cyan-400 font-semibold flex items-center space-x-2">
                  <Activity className="w-4 h-4" />
                  <span>COMMUNITY PULSE</span>
                </span>
                <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
                  LIVE TELEMETRY
                </span>
              </div>

              <div className="space-y-4">
                <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-white font-medium">WebNova Competition Sprint</span>
                    <span className="font-mono text-cyan-400">Phase 3 Complete</span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                    <div className="bg-gradient-to-r from-cyan-400 to-blue-500 h-1.5 rounded-full w-[94%]" />
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-white font-medium">AI Workshop Registration</span>
                    <span className="font-mono text-purple-400">82% Filled</span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                    <div className="bg-gradient-to-r from-purple-400 to-pink-500 h-1.5 rounded-full w-[82%]" />
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-white font-medium">CodeSprint 4.0 Submissions</span>
                    <span className="font-mono text-emerald-400">Open</span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                    <div className="bg-gradient-to-r from-emerald-400 to-teal-500 h-1.5 rounded-full w-[65%]" />
                  </div>
                </div>
              </div>
            </div>

            {/* Panel 2: Chapter Core Metrics */}
            <div className="glass-panel rounded-2xl p-6 border border-slate-800">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-4">
                <span className="font-mono text-xs text-purple-400 font-semibold flex items-center space-x-2">
                  <Cpu className="w-4 h-4" />
                  <span>CHAPTER CAPABILITIES</span>
                </span>
                <span className="text-[11px] font-mono text-slate-400">2026 AUDIT</span>
              </div>

              <div className="space-y-3 font-mono text-xs">
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-900/50">
                  <span className="text-slate-400">Active GitHub Repos</span>
                  <span className="text-white font-bold">18 Repositories</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-900/50">
                  <span className="text-slate-400">IEEE Paper Reviews</span>
                  <span className="text-cyan-300 font-bold">4 Publications</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-900/50">
                  <span className="text-slate-400">Hardware Testbeds</span>
                  <span className="text-white font-bold">ESP32, STM32, Jetson</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-900/50">
                  <span className="text-slate-400">Section Affiliation</span>
                  <span className="text-emerald-400 font-bold">IEEE Kerala Section</span>
                </div>
              </div>
            </div>

            {/* Panel 3: Terminal Command Preview */}
            <div className="glass-panel rounded-2xl p-6 border border-slate-800 bg-[#060B1B]">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-4">
                <span className="font-mono text-xs text-emerald-400 font-semibold flex items-center space-x-2">
                  <Terminal className="w-4 h-4" />
                  <span>TERMINAL BRIDGE</span>
                </span>
                <span className="text-[11px] font-mono text-cyan-400">ONLINE</span>
              </div>

              <div className="bg-[#030712] rounded-xl p-4 font-mono text-[11px] text-slate-300 space-y-2 border border-slate-800">
                <p className="text-cyan-400">$ ieee-cs-mbits --status</p>
                <p className="text-slate-400">&gt; Node Cluster: Healthy [6/6 Nodes]</p>
                <p className="text-slate-400">&gt; Active Sessions: 42 Students</p>
                <p className="text-slate-400">&gt; Next Hackathon: CodeSprint 4.0</p>
                <p className="text-emerald-400">&gt; Tip: Press `~` anytime to launch CLI</p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/80 flex justify-between items-center text-xs font-mono text-slate-400">
                <span>Kernel: v2.6.4-webnova</span>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
