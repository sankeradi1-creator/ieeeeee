import React, { useState } from 'react';
import { X, Sparkles, ArrowRight, UserCheck } from 'lucide-react';
import { playSound } from '../utils/soundEffects';
import confetti from 'canvas-confetti';

interface JoinChapterModalProps {
  isOpen: boolean;
  initialDomain?: string;
  onClose: () => void;
}

export const JoinChapterModal: React.FC<JoinChapterModalProps> = ({ isOpen, initialDomain, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    department: 'Computer Science & Engineering',
    year: '2nd Year',
    preferredDomain: initialDomain || 'Artificial Intelligence & ML',
    reason: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    playSound('click');

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      playSound('success');

      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.6 }
      });
    }, 700);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-xl bg-[#060B1B] border border-cyan-500/40 rounded-3xl p-6 sm:p-8 shadow-[0_0_60px_rgba(0,242,254,0.2)] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500" />

        <button
          onClick={() => {
            playSound('click');
            onClose();
          }}
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-cyan-400 transition-colors"
          aria-label="Close Join Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
              <Sparkles className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-display font-bold text-white">Application Received!</h3>
            <p className="text-slate-300 text-sm max-w-md mx-auto font-light leading-relaxed">
              Welcome aboard, <strong className="text-cyan-300">{formData.name}</strong>! Your interest in the <span className="text-cyan-300">{formData.preferredDomain}</span> wing has been queued for verification. The student executive committee will reach out via <strong className="text-cyan-300">{formData.email}</strong>.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="mt-4 px-6 py-2.5 rounded-xl bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 text-xs font-mono hover:bg-cyan-500/30 transition-colors"
            >
              Done & Return to Site
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-2">
                <UserCheck className="w-3.5 h-3.5" />
                <span>STUDENT MEMBERSHIP PORTAL</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">
                Join IEEE CS MBITS
              </h2>
              <p className="text-xs text-slate-400 mt-1 font-light">
                Become part of MBITS' most active computer science community. Free chapter onboarding for enrolled students.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-cyan-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1">College Email *</label>
                  <input
                    type="email"
                    required
                    placeholder="student@mbits.ac.in"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-cyan-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1">Academic Year</label>
                  <select
                    value={formData.year}
                    onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs focus:outline-none focus:border-cyan-400"
                  >
                    <option value="1st Year">1st Year (B.Tech)</option>
                    <option value="2nd Year">2nd Year (B.Tech)</option>
                    <option value="3rd Year">3rd Year (B.Tech)</option>
                    <option value="4th Year">4th Year (B.Tech)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1">Primary Interest Wing</label>
                  <select
                    value={formData.preferredDomain}
                    onChange={(e) => setFormData({ ...formData, preferredDomain: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs focus:outline-none focus:border-cyan-400"
                  >
                    <option value="Artificial Intelligence & ML">AI & Machine Learning</option>
                    <option value="Cybersecurity & DefOps">Cybersecurity & DefOps</option>
                    <option value="Full-Stack & Cloud Systems">Full-Stack & Cloud Systems</option>
                    <option value="Embedded IoT & Robotics">Embedded IoT & Robotics</option>
                    <option value="Data Science & Quantum">Data Science & Quantum</option>
                    <option value="Web3 & Distributed Ledgers">Web3 & Distributed Ledgers</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1">
                  Why do you want to join? (Optional)
                </label>
                <textarea
                  rows={3}
                  value={formData.reason}
                  onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                  placeholder="Tell us what you hope to build, learn, or organize..."
                  className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-cyan-400 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-xs tracking-wider uppercase transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <span>Transmitting Application...</span>
                ) : (
                  <>
                    <span>Submit Membership Application</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
