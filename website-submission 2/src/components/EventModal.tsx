import React, { useState } from 'react';
import { X, Calendar, Clock, MapPin, User, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import type { EventItem } from '../types';
import { playSound } from '../utils/soundEffects';
import confetti from 'canvas-confetti';

interface EventModalProps {
  event: EventItem | null;
  onClose: () => void;
}

export const EventModal: React.FC<EventModalProps> = ({ event, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    department: 'Computer Science & Engineering',
    semester: 'S5',
    ieeeNumber: '',
  });
  const [registered, setRegistered] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!event) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    playSound('click');

    setTimeout(() => {
      setIsSubmitting(false);
      setRegistered(true);
      playSound('success');

      // Trigger celebratory confetti
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    }, 700);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in overflow-y-auto">
      <div 
        className="relative w-full max-w-2xl bg-[#060B1B] border border-cyan-500/40 rounded-3xl p-6 sm:p-8 shadow-[0_0_60px_rgba(0,242,254,0.15)] overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glow Top Accent */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500" />

        {/* Close Button */}
        <button
          onClick={() => {
            playSound('click');
            onClose();
          }}
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-cyan-400 transition-colors"
          aria-label="Close Event Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="pr-10 mb-6">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="px-2.5 py-1 rounded-full text-xs font-mono font-semibold bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
              {event.category}
            </span>
            <span
              className={`px-2.5 py-1 rounded-full text-xs font-mono font-medium border ${
                event.status === 'Registration Open'
                  ? 'bg-emerald-950/70 text-emerald-400 border-emerald-500/40'
                  : event.status === 'Upcoming'
                  ? 'bg-blue-950/70 text-blue-300 border-blue-500/40'
                  : 'bg-slate-900 text-slate-400 border-slate-700'
              }`}
            >
              {event.status}
            </span>
            {event.isSample && (
              <span className="text-[10px] font-mono text-amber-400/90 bg-amber-950/40 px-2 py-0.5 rounded border border-amber-500/30">
                Sample / Central Data
              </span>
            )}
          </div>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
            {event.title}
          </h2>
        </div>

        {/* Event Logistics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6 p-4 rounded-2xl bg-slate-900/60 border border-slate-800 text-xs font-mono">
          <div className="flex items-center space-x-2 text-slate-300">
            <Calendar className="w-4 h-4 text-cyan-400 shrink-0" />
            <span>{event.date}</span>
          </div>
          <div className="flex items-center space-x-2 text-slate-300">
            <Clock className="w-4 h-4 text-purple-400 shrink-0" />
            <span>{event.time}</span>
          </div>
          <div className="flex items-center space-x-2 text-slate-300">
            <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
            <span className="truncate">{event.location}</span>
          </div>
        </div>

        {/* Description & Overview */}
        <div className="space-y-4 mb-6 text-sm text-slate-300 leading-relaxed font-light">
          <p>{event.longDescription || event.description}</p>

          {/* Speaker Card */}
          {event.speaker && (
            <div className="p-4 rounded-2xl bg-slate-900/40 border border-white/5 flex items-center space-x-3.5">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-cyan-500 to-purple-600 flex items-center justify-center text-white font-bold font-mono text-sm">
                <User className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-cyan-400 font-mono">FEATURED SPEAKER</div>
                <div className="font-semibold text-white text-sm">{event.speaker.name}</div>
                <div className="text-xs text-slate-400">{event.speaker.role} • {event.speaker.organization}</div>
              </div>
            </div>
          )}

          {/* Prerequisites */}
          {event.prerequisites && (
            <div>
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">Prerequisites:</div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {event.prerequisites.map((req, i) => (
                  <li key={i} className="flex items-center space-x-2 text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Registration Section or Confirmation */}
        <div className="pt-6 border-t border-slate-800">
          {event.status === 'Completed' ? (
            <div className="p-4 rounded-xl bg-slate-900 text-center font-mono text-xs text-slate-400">
              This event has concluded. Event materials & repository will be uploaded to chapter archives.
            </div>
          ) : registered ? (
            <div className="p-5 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 text-center space-y-2">
              <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                <Sparkles className="w-5 h-5" />
              </div>
              <h4 className="font-display font-bold text-white text-base">Seat Reserved Successfully!</h4>
              <p className="text-xs text-slate-300 font-light">
                A confirmation voucher and prep material has been dispatched to <strong className="text-cyan-300">{formData.email || 'your email'}</strong>.
              </p>
              <button
                onClick={() => setRegistered(false)}
                className="mt-2 text-xs font-mono text-emerald-400 hover:underline"
              >
                Register Another Participant
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider flex items-center justify-between">
                <span>Instant Chapter Registration</span>
                <span className="text-[10px] text-slate-500">Free for MBITS Students</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  required
                  placeholder="Full Name *"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-cyan-400 transition-colors"
                />
                <input
                  type="email"
                  required
                  placeholder="College / Personal Email *"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-cyan-400 transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <select
                  value={formData.department}
                  onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                  className="px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs focus:outline-none focus:border-cyan-400"
                >
                  <option value="CSE">CSE Department</option>
                  <option value="AI&DS">AI & Data Science</option>
                  <option value="ECE">ECE Department</option>
                  <option value="EEE">EEE Department</option>
                  <option value="Other">Other Branch</option>
                </select>

                <select
                  value={formData.semester}
                  onChange={(e) => setFormData({ ...formData, semester: e.target.value })}
                  className="px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs focus:outline-none focus:border-cyan-400"
                >
                  <option value="S1/S2">Semester 1 / 2</option>
                  <option value="S3/S4">Semester 3 / 4</option>
                  <option value="S5/S6">Semester 5 / 6</option>
                  <option value="S7/S8">Semester 7 / 8</option>
                </select>

                <input
                  type="text"
                  placeholder="IEEE Member # (Optional)"
                  value={formData.ieeeNumber}
                  onChange={(e) => setFormData({ ...formData, ieeeNumber: e.target.value })}
                  className="px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-cyan-400"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-xs tracking-wider uppercase transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <span>Processing Registration...</span>
                ) : (
                  <>
                    <span>Confirm Event Registration</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
