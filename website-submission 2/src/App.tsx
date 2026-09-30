import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { InnovationFeature } from './components/InnovationFeature';
import { Events } from './components/Events';
import { Achievements } from './components/Achievements';
import { WhyJoinUs } from './components/WhyJoinUs';
import { Team } from './components/Team';
import { Gallery } from './components/Gallery';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { TerminalModal } from './components/TerminalModal';
import { JoinChapterModal } from './components/JoinChapterModal';
import { playSound } from './utils/soundEffects';

export function App() {
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [joinModalOpen, setJoinModalOpen] = useState(false);
  const [selectedDomainForJoin, setSelectedDomainForJoin] = useState<string | undefined>(undefined);

  // Keyboard shortcut listener for Easter Egg terminal: `~` (backtick) or Ctrl/Cmd + K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger if user is actively typing in an input or textarea
      const target = e.target as HTMLElement;
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.tagName === 'SELECT') {
        return;
      }

      if (e.key === '`' || e.key === '~' || ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k')) {
        e.preventDefault();
        playSound('terminal');
        setTerminalOpen((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleExploreEvents = () => {
    document.getElementById('events')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleExploreDomains = () => {
    document.getElementById('command-center')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleJoinDomain = (domainName: string) => {
    setSelectedDomainForJoin(domainName);
    setJoinModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 flex flex-col font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Sticky Navigation Bar */}
      <Navbar
        onOpenTerminal={() => setTerminalOpen(true)}
        onOpenJoinModal={() => {
          setSelectedDomainForJoin(undefined);
          setJoinModalOpen(true);
        }}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onExploreEvents={handleExploreEvents}
          onExploreDomains={handleExploreDomains}
          onOpenTerminal={() => setTerminalOpen(true)}
        />

        {/* About Chapter Section */}
        <About />

        {/* Special Innovation Feature: Digital Command Center & Tech Network */}
        <InnovationFeature onJoinDomain={handleJoinDomain} />

        {/* Events & Hackathons Section */}
        <Events />

        {/* Achievements & Milestones Section */}
        <Achievements />

        {/* Why Join Us / Value Proposition */}
        <WhyJoinUs
          onOpenJoinModal={() => {
            setSelectedDomainForJoin(undefined);
            setJoinModalOpen(true);
          }}
        />

        {/* Leadership & Faculty Team Section */}
        <Team
          onOpenJoinModal={() => {
            setSelectedDomainForJoin(undefined);
            setJoinModalOpen(true);
          }}
        />

        {/* Visual Media Gallery with Lightbox */}
        <Gallery />

        {/* Contact Headquarters & Inquiry Form */}
        <Contact />
      </main>

      {/* Global Footer */}
      <Footer onOpenTerminal={() => setTerminalOpen(true)} />

      {/* Easter Egg Terminal CLI Modal */}
      <TerminalModal
        isOpen={terminalOpen}
        onClose={() => setTerminalOpen(false)}
        onOpenJoinModal={() => {
          setTerminalOpen(false);
          setJoinModalOpen(true);
        }}
      />

      {/* Join Chapter & Membership Modal */}
      <JoinChapterModal
        isOpen={joinModalOpen}
        initialDomain={selectedDomainForJoin}
        onClose={() => setJoinModalOpen(false)}
      />
    </div>
  );
}

export default App;
