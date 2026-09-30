import React from 'react';
import { ArrowUp, Sparkles } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { playSound } from '../utils/soundEffects';
import { InstagramIcon, LinkedInIcon, GitHubIcon } from './Icons';

interface FooterProps {
  onOpenTerminal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenTerminal }) => {
  const scrollToTop = () => {
    playSound('click');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About Chapter', href: '#about' },
    { name: 'Computing Domains', href: '#command-center' },
    { name: 'Featured Events', href: '#events' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Leadership Team', href: '#team' },
    { name: 'Visual Gallery', href: '#gallery' },
    { name: 'Contact HQ', href: '#contact' },
  ];

  return (
    <footer className="relative bg-[#02050E] border-t border-cyan-500/20 pt-16 pb-12 overflow-hidden text-slate-400">
      <div className="absolute inset-0 tech-grid-bg opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          {/* Column 1: Chapter Brand & Identity */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 via-blue-600/30 to-purple-600/20 p-[1px] border border-cyan-500/30">
                <div className="w-full h-full bg-[#060B1B] rounded-[11px] flex items-center justify-center">
                  <span className="font-display font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 text-lg">
                    CS
                  </span>
                </div>
              </div>

              <div>
                <div className="text-xs font-mono font-bold tracking-widest text-cyan-400">
                  IEEE COMPUTER SOCIETY
                </div>
                <div className="font-display font-bold text-white text-base">
                  MBITS STUDENT CHAPTER
                </div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 font-light leading-relaxed max-w-sm">
              {siteConfig.subTagline}
            </p>

            {/* Social Icons */}
            <div className="flex items-center space-x-2 pt-2">
              <a
                href={siteConfig.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-400/40 transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-400/40 transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedInIcon className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-400/40 transition-colors"
                aria-label="GitHub"
              >
                <GitHubIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="lg:col-span-3">
            <h4 className="font-mono text-xs font-semibold text-white uppercase tracking-wider mb-4">
              Explore Portal
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      playSound('click');
                      document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="hover:text-cyan-300 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: College Affiliation & Credits */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-mono text-xs font-semibold text-white uppercase tracking-wider mb-4">
              Affiliation & Venue
            </h4>
            <div className="text-xs space-y-1 font-light">
              <p className="text-white font-medium">{siteConfig.institution}</p>
              <p>{siteConfig.location}</p>
              <p className="pt-2 text-cyan-400 font-mono">IEEE Kerala Section (Region 10)</p>
            </div>

            <div className="pt-3">
              <button
                onClick={() => {
                  playSound('terminal');
                  onOpenTerminal();
                }}
                className="px-3.5 py-1.5 rounded-lg bg-purple-950/40 border border-purple-500/30 text-purple-300 hover:text-purple-200 text-xs font-mono flex items-center space-x-1.5 transition-all"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Launch Chapter Shell [CLI]</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back-to-Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-slate-500 gap-4">
          <div className="text-center sm:text-left">
            <p>© 2026 IEEE Computer Society MBITS. All rights reserved.</p>
            <p className="text-[11px] text-slate-600 mt-0.5">
              Developed as an official submission for the WebNova Website Competition.
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-400 text-slate-400 hover:text-cyan-300 transition-colors"
            aria-label="Scroll Back to Top"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
