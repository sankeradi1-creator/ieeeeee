import React, { useState, useEffect, useRef } from 'react';
import { X, CornerDownLeft } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { eventsData } from '../data/eventsData';
import { teamData } from '../data/teamData';
import { playSound } from '../utils/soundEffects';

interface TerminalModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenJoinModal: () => void;
}

interface CommandLog {
  id: string;
  command?: string;
  output: string | React.ReactNode;
  type?: 'input' | 'output' | 'system' | 'error' | 'success';
}

export const TerminalModal: React.FC<TerminalModalProps> = ({ isOpen, onClose, onOpenJoinModal }) => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<CommandLog[]>([
    {
      id: 'init-1',
      output: 'IEEE CS MBITS Chapter OS [Version 2.6.4-webnova-release]',
      type: 'system'
    },
    {
      id: 'init-2',
      output: 'Type "help" to view the registry of available terminal routines.',
      type: 'system'
    }
  ]);
  const [cmdHistory, setCmdHistory] = useState<string[]>([]);
  const [historyIdx, setHistoryIdx] = useState(-1);
  const [matrixActive, setMatrixActive] = useState(false);

  const bottomRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  // Auto focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  // Scroll to bottom on output change
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history, matrixActive]);

  if (!isOpen) return null;

  const handleCommand = (cmdStr: string) => {
    const raw = cmdStr.trim();
    if (!raw) return;

    playSound('terminal');

    // Add to history list
    setCmdHistory((prev) => [...prev, raw]);
    setHistoryIdx(-1);

    const parts = raw.split(' ');
    const mainCmd = parts[0].toLowerCase();

    const newLogs: CommandLog[] = [
      { id: Math.random().toString(), command: raw, output: '', type: 'input' }
    ];

    switch (mainCmd) {
      case 'help':
        newLogs.push({
          id: Math.random().toString(),
          type: 'output',
          output: (
            <div className="space-y-1 font-mono text-xs text-slate-300">
              <p className="text-cyan-400 font-semibold mb-1">AVAILABLE COMMANDS:</p>
              <p><span className="text-cyan-300 font-bold">about</span> : Display chapter mission and background</p>
              <p><span className="text-cyan-300 font-bold">events</span> : List upcoming workshops and hackathons</p>
              <p><span className="text-cyan-300 font-bold">team</span> : View executive leaders and faculty advisors</p>
              <p><span className="text-cyan-300 font-bold">domains</span> : Inspect 6 active computing wings</p>
              <p><span className="text-cyan-300 font-bold">stats</span> : Chapter metrics and telemetry telemetry</p>
              <p><span className="text-cyan-300 font-bold">matrix</span> : Toggle digital cyber rain visualizer</p>
              <p><span className="text-cyan-300 font-bold">join</span> : Open student membership registration</p>
              <p><span className="text-cyan-300 font-bold">contact</span> : Get official chapter correspondence</p>
              <p><span className="text-cyan-300 font-bold">sudo</span> : Administrative privileges escalation test</p>
              <p><span className="text-cyan-300 font-bold">clear</span> : Clear terminal scrollback buffer</p>
              <p><span className="text-cyan-300 font-bold">exit</span> : Terminate session and return to UI</p>
            </div>
          )
        });
        break;

      case 'about':
        newLogs.push({
          id: Math.random().toString(),
          type: 'output',
          output: `${siteConfig.chapterName} - ${siteConfig.subTagline} Located at ${siteConfig.institution}.`
        });
        break;

      case 'events':
        newLogs.push({
          id: Math.random().toString(),
          type: 'output',
          output: (
            <div className="space-y-1.5 text-xs font-mono">
              <p className="text-cyan-400 font-semibold">SCHEDULED CHAPTER EVENTS:</p>
              {eventsData.map((e) => (
                <div key={e.id} className="text-slate-300">
                  • <span className="text-cyan-300 font-bold">{e.title}</span> [{e.category}] - {e.date} ({e.status})
                </div>
              ))}
            </div>
          )
        });
        break;

      case 'team':
        newLogs.push({
          id: Math.random().toString(),
          type: 'output',
          output: (
            <div className="space-y-1 text-xs font-mono">
              <p className="text-purple-400 font-semibold">CORE OFFICE BEARERS:</p>
              {teamData.map((t) => (
                <div key={t.id} className="text-slate-300">
                  • <span className="text-white font-bold">{t.name}</span> - {t.role} ({t.category})
                </div>
              ))}
            </div>
          )
        });
        break;

      case 'domains':
        newLogs.push({
          id: Math.random().toString(),
          type: 'output',
          output: 'Active Wings: [AI & Machine Learning] [Cybersecurity & DefOps] [Full-Stack & Cloud] [Embedded IoT & Robotics] [Data Science & Quantum] [Web3 & Distributed Ledgers].'
        });
        break;

      case 'stats':
        newLogs.push({
          id: Math.random().toString(),
          type: 'output',
          output: `Active Members: 350+ | Workshops: 30+ | Hackathons: 8+ | Campus Repos: 18 | Status: All Systems Operational`
        });
        break;

      case 'matrix':
        setMatrixActive(!matrixActive);
        newLogs.push({
          id: Math.random().toString(),
          type: 'success',
          output: !matrixActive ? 'Matrix protocol engaged. Decoding neural stream...' : 'Matrix protocol disabled.'
        });
        break;

      case 'sudo':
        newLogs.push({
          id: Math.random().toString(),
          type: 'error',
          output: `[PERMISSION_DENIED]: User "guest" is not in sudoers file. This incident will be reported to Chairperson and Faculty Coordinator.`
        });
        break;

      case 'join':
        onOpenJoinModal();
        newLogs.push({
          id: Math.random().toString(),
          type: 'success',
          output: 'Launching chapter membership application modal...'
        });
        break;

      case 'contact':
        newLogs.push({
          id: Math.random().toString(),
          type: 'output',
          output: `Email: ${siteConfig.email} | Phone: ${siteConfig.phone} | Campus: ${siteConfig.location}`
        });
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      case 'exit':
      case 'quit':
        onClose();
        return;

      default:
        newLogs.push({
          id: Math.random().toString(),
          type: 'error',
          output: `Command not recognized: "${raw}". Type "help" to inspect known instructions.`
        });
        break;
    }

    setHistory((prev) => [...prev, ...newLogs]);
    setInputVal('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(inputVal);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (cmdHistory.length === 0) return;
      const nextIdx = historyIdx + 1;
      if (nextIdx < cmdHistory.length) {
        setHistoryIdx(nextIdx);
        setInputVal(cmdHistory[cmdHistory.length - 1 - nextIdx]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIdx > 0) {
        const nextIdx = historyIdx - 1;
        setHistoryIdx(nextIdx);
        setInputVal(cmdHistory[cmdHistory.length - 1 - nextIdx]);
      } else if (historyIdx === 0) {
        setHistoryIdx(-1);
        setInputVal('');
      }
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-[#030712] border border-cyan-500/50 rounded-2xl shadow-[0_0_80px_rgba(0,242,254,0.25)] overflow-hidden flex flex-col h-[520px]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Terminal Titlebar */}
        <div className="bg-[#0A1024] px-4 py-2.5 border-b border-cyan-500/30 flex items-center justify-between select-none">
          <div className="flex items-center space-x-2">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
            <span className="text-xs font-mono text-cyan-300 ml-2 font-semibold">
              ieee-cs@mbits-terminal:~ (zsh)
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <span className="text-[10px] font-mono text-slate-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
              Easter Egg Mode
            </span>
            <button
              onClick={() => {
                playSound('click');
                onClose();
              }}
              className="p-1 rounded text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close Terminal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Matrix Rain Animation Overlay (when active) */}
        {matrixActive && (
          <div className="absolute inset-0 top-10 pointer-events-none opacity-20 text-emerald-400 font-mono text-[10px] overflow-hidden select-none p-4 leading-none">
            {Array.from({ length: 24 }).map((_, i) => (
              <p key={i} className="animate-pulse">
                01010100 01100101 01100011 01101000 01001110 01101111 01110110 01100001 00100000 01001001 01000101 01000101 01000101 00100000 01001101 01000010 01001001 01010100 01010011
              </p>
            ))}
          </div>
        )}

        {/* Terminal Body */}
        <div
          className="flex-1 p-4 overflow-y-auto font-mono text-xs space-y-2.5 scanline-overlay text-slate-200"
          onClick={() => inputRef.current?.focus()}
        >
          {history.map((log) => {
            if (log.type === 'input') {
              return (
                <div key={log.id} className="flex items-center space-x-2 text-cyan-400">
                  <span className="text-emerald-400">ieee-cs@mbits:~$</span>
                  <span className="text-white font-bold">{log.command}</span>
                </div>
              );
            }
            if (log.type === 'error') {
              return (
                <div key={log.id} className="text-rose-400 pl-4 border-l-2 border-rose-500/50">
                  {log.output}
                </div>
              );
            }
            if (log.type === 'success') {
              return (
                <div key={log.id} className="text-emerald-400 pl-4 border-l-2 border-emerald-500/50">
                  {log.output}
                </div>
              );
            }
            if (log.type === 'system') {
              return (
                <div key={log.id} className="text-cyan-300/80">
                  {log.output}
                </div>
              );
            }
            return (
              <div key={log.id} className="text-slate-300 pl-2">
                {log.output}
              </div>
            );
          })}
          <div ref={bottomRef} />
        </div>

        {/* Input Bar */}
        <div className="bg-[#060B1B] p-3 border-t border-cyan-500/30 flex items-center space-x-2 font-mono text-xs">
          <span className="text-emerald-400 font-bold shrink-0">ieee-cs@mbits:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type 'help' or command..."
            className="flex-1 bg-transparent text-white focus:outline-none placeholder-slate-600 caret-cyan-400"
          />
          <button
            onClick={() => handleCommand(inputVal)}
            className="px-2.5 py-1 rounded bg-cyan-500/20 text-cyan-300 hover:bg-cyan-500/30 border border-cyan-500/30 text-[11px] flex items-center space-x-1"
          >
            <span>Run</span>
            <CornerDownLeft className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  );
};
