import React, { useEffect, useRef } from 'react';
import { ArrowRight, Terminal, Compass } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { playSound } from '../utils/soundEffects';

interface HeroProps {
  onExploreEvents: () => void;
  onExploreDomains: () => void;
  onOpenTerminal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreEvents, onExploreDomains, onOpenTerminal }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // High performance futuristic interactive particle & cyber constellation network
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Particle nodes
    const particleCount = Math.min(Math.floor(width / 16), 75);
    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;
      baseAlpha: number;
    }

    const colors = ['#00f2fe', '#38bdf8', '#818cf8', '#a855f7'];
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.7,
        vy: (Math.random() - 0.5) * 0.7,
        radius: Math.random() * 2 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        baseAlpha: Math.random() * 0.5 + 0.25,
      });
    }

    // Mouse interactivity
    const mouse = { x: -1000, y: -1000, radius: 140 };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Connect particles
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];

        // Move
        p1.x += p1.vx;
        p1.y += p1.vy;

        // Bounce
        if (p1.x < 0 || p1.x > width) p1.vx *= -1;
        if (p1.y < 0 || p1.y > height) p1.vy *= -1;

        // Mouse influence
        const dxMouse = mouse.x - p1.x;
        const dyMouse = mouse.y - p1.y;
        const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
        if (distMouse < mouse.radius) {
          const force = (mouse.radius - distMouse) / mouse.radius;
          p1.x -= (dxMouse / distMouse) * force * 3;
          p1.y -= (dyMouse / distMouse) * force * 3;
        }

        // Draw particle
        ctx.beginPath();
        ctx.arc(p1.x, p1.y, p1.radius, 0, Math.PI * 2);
        ctx.fillStyle = p1.color;
        ctx.shadowBlur = 8;
        ctx.shadowColor = p1.color;
        ctx.fill();

        // Connect nearby nodes
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(0, 242, 254, ${(1 - dist / 130) * 0.18})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center items-center pt-24 pb-16 overflow-hidden">
      {/* Interactive Background Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-0 opacity-70" />

      {/* Cyber Grid Overlay */}
      <div className="absolute inset-0 tech-grid-bg opacity-30 pointer-events-none" />

      {/* Futuristic Radial Glowing Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-gradient-to-tr from-cyan-600/15 via-blue-600/10 to-purple-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-80 h-80 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-20 -right-20 w-80 h-80 bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Competition & Chapter Badge */}
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs font-mono tracking-wider mb-6 backdrop-blur-md shadow-[0_0_15px_rgba(6,182,212,0.15)] animate-float">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          <span className="font-semibold">{siteConfig.competitionNotice}</span>
          <span className="text-slate-500">•</span>
          <span className="text-slate-300">Mar Baselios Institute of Technology & Science</span>
        </div>

        {/* Hero Title */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-extrabold tracking-tight text-white mb-6 leading-[1.1]">
          Where Technology <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400">
            Meets Imagination.
          </span>
        </h1>

        {/* Hero Subtitle */}
        <p className="max-w-2xl text-base sm:text-lg md:text-xl text-slate-300 font-light leading-relaxed mb-10 text-balance">
          {siteConfig.subTagline}
        </p>

        {/* Interactive CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-16">
          <button
            onClick={() => {
              playSound('click');
              onExploreEvents();
            }}
            onMouseEnter={() => playSound('hover')}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:via-blue-500 hover:to-indigo-500 text-white font-semibold text-sm tracking-wide shadow-[0_0_30px_rgba(6,182,212,0.35)] transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center space-x-2 group"
          >
            <span>Explore Events</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>

          <button
            onClick={() => {
              playSound('click');
              onExploreDomains();
            }}
            onMouseEnter={() => playSound('hover')}
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800/90 text-slate-200 hover:text-white font-medium text-sm tracking-wide border border-cyan-500/25 hover:border-cyan-400/50 backdrop-blur-md transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center space-x-2.5 shadow-lg group"
          >
            <Compass className="w-4 h-4 text-cyan-400 group-hover:rotate-45 transition-transform duration-300" />
            <span>Digital Command Center</span>
          </button>

          <button
            onClick={() => {
              playSound('terminal');
              onOpenTerminal();
            }}
            onMouseEnter={() => playSound('hover')}
            className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-purple-950/40 hover:bg-purple-900/40 text-purple-300 hover:text-purple-200 font-mono text-xs tracking-wider border border-purple-500/30 backdrop-blur-md transition-all duration-300 flex items-center justify-center space-x-2 group"
            title="Launch Interactive Terminal"
          >
            <Terminal className="w-4 h-4 group-hover:scale-110 transition-transform" />
            <span>CLI Mode [~]</span>
          </button>
        </div>

        {/* Live Chapter Metric Ticker */}
        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto">
          {siteConfig.stats.map((stat, idx) => (
            <div
              key={idx}
              className="glass-card rounded-2xl p-4 sm:p-5 text-left border border-white/5 hover:border-cyan-500/30 transition-all duration-300 group"
            >
              <div className="text-2xl sm:text-3xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-cyan-200 group-hover:from-cyan-300 group-hover:to-blue-400 transition-colors">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-medium text-slate-300 mt-1">{stat.label}</div>
              <div className="text-[11px] font-mono text-cyan-400/80 mt-1 flex items-center space-x-1">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span>{stat.change}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cyber Scroll Down Indicator */}
      <div className="relative z-10 mt-12 flex flex-col items-center">
        <a
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            playSound('click');
            document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="text-xs font-mono text-slate-400 hover:text-cyan-400 transition-colors flex flex-col items-center space-y-1.5 group cursor-pointer"
        >
          <span className="tracking-widest uppercase text-[10px]">Scroll to Explore</span>
          <div className="w-5 h-8 rounded-full border border-slate-700 group-hover:border-cyan-400 flex items-start justify-center p-1 transition-colors">
            <span className="w-1 h-2 rounded-full bg-cyan-400 animate-bounce" />
          </div>
        </a>
      </div>
    </section>
  );
};
