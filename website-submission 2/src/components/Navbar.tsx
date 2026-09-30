import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal, Volume2, VolumeX, Sparkles, ChevronRight } from 'lucide-react';
import { playSound, toggleAudio } from '../utils/soundEffects';

interface NavbarProps {
  onOpenTerminal: () => void;
  onOpenJoinModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenTerminal, onOpenJoinModal }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);
  const [soundOn, setSoundOn] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Domains', href: '#command-center' },
    { name: 'Events', href: '#events' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Team', href: '#team' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ['hero', 'about', 'command-center', 'events', 'achievements', 'team', 'gallery', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    playSound('click');
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleSound = () => {
    const nextState = toggleAudio();
    setSoundOn(nextState);
    if (nextState) {
      playSound('cyber');
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#030712]/85 backdrop-blur-md border-b border-cyan-500/20 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#hero"
            onClick={() => handleNavClick('#hero')}
            className="flex items-center space-x-3 group focus:outline-none"
            aria-label="IEEE Computer Society MBITS Home"
          >
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 via-blue-600/30 to-purple-600/20 p-[1px] transition-transform duration-300 group-hover:scale-105 border border-cyan-500/30">
              <div className="w-full h-full bg-[#060B1B] rounded-[11px] flex items-center justify-center">
                <span className="font-display font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 text-lg tracking-tighter">
                  CS
                </span>
              </div>
              <div className="absolute -inset-0.5 bg-cyan-400 rounded-xl blur-sm opacity-0 group-hover:opacity-30 transition duration-300" />
            </div>

            <div className="flex flex-col">
              <div className="flex items-center space-x-1.5">
                <span className="text-xs font-mono font-bold tracking-widest text-cyan-400">IEEE</span>
                <span className="text-xs font-mono text-slate-400">|</span>
                <span className="text-xs font-semibold tracking-wider text-slate-200">COMPUTER SOCIETY</span>
              </div>
              <div className="flex items-center space-x-1">
                <span className="font-display font-bold text-sm tracking-wide text-white group-hover:text-cyan-300 transition-colors">
                  MBITS CHAPTER
                </span>
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              </div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 bg-slate-900/60 p-1.5 rounded-full border border-slate-800 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  onMouseEnter={() => playSound('hover')}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-200 relative ${
                    isActive
                      ? 'text-cyan-300 bg-cyan-500/15 shadow-[0_0_15px_rgba(6,182,212,0.25)] border border-cyan-500/30'
                      : 'text-slate-400 hover:text-slate-100 hover:bg-white/5'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-0.5 bg-cyan-400 rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action Icons & CTA */}
          <div className="hidden sm:flex items-center space-x-2.5">
            {/* Audio Toggle */}
            <button
              onClick={toggleSound}
              className={`p-2 rounded-lg border transition-all text-xs font-mono flex items-center justify-center ${
                soundOn
                  ? 'border-cyan-500/50 bg-cyan-500/10 text-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.3)]'
                  : 'border-slate-800 bg-slate-900/60 text-slate-400 hover:text-slate-200'
              }`}
              title={soundOn ? 'Mute Cyber Audio FX' : 'Enable Cyber Audio FX'}
              aria-label="Toggle Sound Effects"
            >
              {soundOn ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            </button>

            {/* Terminal Easter Egg Trigger */}
            <button
              onClick={() => {
                playSound('terminal');
                onOpenTerminal();
              }}
              onMouseEnter={() => playSound('hover')}
              className="px-3 py-1.5 rounded-lg border border-purple-500/30 bg-purple-500/10 hover:bg-purple-500/20 text-purple-300 hover:text-purple-200 text-xs font-mono flex items-center space-x-1.5 transition-all shadow-[0_0_10px_rgba(168,85,247,0.15)] group"
              title="Open Interactive Cyber Terminal (Shortcut: `~`)"
            >
              <Terminal className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
              <span>CLI [~]</span>
            </button>

            {/* Join Chapter CTA */}
            <button
              onClick={() => {
                playSound('click');
                onOpenJoinModal();
              }}
              onMouseEnter={() => playSound('hover')}
              className="relative group overflow-hidden rounded-lg px-4 py-2 font-medium text-xs tracking-wider uppercase"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 transition-all duration-300 group-hover:scale-105" />
              <span className="absolute inset-0 bg-cyan-400 opacity-0 group-hover:opacity-20 blur transition-opacity" />
              <span className="relative flex items-center space-x-1.5 text-white font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Join Chapter</span>
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-2 lg:hidden">
            <button
              onClick={() => {
                playSound('terminal');
                onOpenTerminal();
              }}
              className="p-2 rounded-lg border border-purple-500/30 bg-purple-500/10 text-purple-300 text-xs"
              aria-label="Open Terminal"
            >
              <Terminal className="w-4 h-4" />
            </button>

            <button
              onClick={() => {
                playSound('click');
                setIsOpen(!isOpen);
              }}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X className="w-5 h-5 text-cyan-400" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="lg:hidden bg-[#060B1B]/95 border-b border-cyan-500/20 backdrop-blur-xl px-4 pt-3 pb-6 space-y-2 mt-2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`flex items-center justify-between px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/30'
                    : 'text-slate-300 hover:bg-slate-800/60 hover:text-white'
                }`}
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 opacity-50" />
              </a>
            );
          })}

          <div className="pt-4 border-t border-slate-800/80 flex flex-col space-y-2.5">
            <div className="flex items-center justify-between px-2">
              <span className="text-xs font-mono text-slate-400">Audio Feedback FX</span>
              <button
                onClick={toggleSound}
                className="flex items-center space-x-1.5 text-xs font-mono px-3 py-1.5 rounded-lg border border-slate-700 bg-slate-800 text-cyan-300"
              >
                {soundOn ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
                <span>{soundOn ? 'Enabled' : 'Disabled'}</span>
              </button>
            </div>

            <button
              onClick={() => {
                setIsOpen(false);
                onOpenJoinModal();
              }}
              className="w-full py-2.5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium text-sm flex items-center justify-center space-x-2 shadow-lg shadow-cyan-500/20"
            >
              <Sparkles className="w-4 h-4" />
              <span>Join IEEE CS MBITS</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
