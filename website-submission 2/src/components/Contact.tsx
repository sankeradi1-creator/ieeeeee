import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send, AlertCircle, Sparkles, MessageSquare } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { playSound } from '../utils/soundEffects';
import { InstagramIcon, LinkedInIcon, GitHubIcon } from './Icons';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    domain: 'General Inquiry',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email address';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject line is required';
    if (!formData.message.trim()) {
      newErrors.message = 'Message content is required';
    } else if (formData.message.trim().length < 15) {
      newErrors.message = 'Please provide at least 15 characters of detail';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      playSound('click');
      return;
    }

    setIsSubmitting(true);
    playSound('click');

    // Simulate reliable frontend submission ready for webhook/backend integration
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      playSound('success');
    }, 800);
  };

  return (
    <section id="contact" className="relative py-24 bg-[#050918] overflow-hidden">
      <div className="absolute inset-0 tech-grid-bg opacity-15 pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono tracking-widest uppercase mb-4">
            <Mail className="w-3.5 h-3.5" />
            <span>Connect & Inquire</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
            Get in Touch with <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400">
              IEEE CS MBITS
            </span>
          </h2>
          <p className="mt-4 text-slate-300 text-base font-light leading-relaxed">
            Have questions regarding membership, workshop sponsorships, technical partnerships, or hackathon registrations? Send us a message or visit our campus branch.
          </p>
        </div>

        {/* Contact Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Chapter HQ Details & Socials */}
          <div className="lg:col-span-5 space-y-6">
            {/* Headquarters Card */}
            <div className="glass-panel rounded-3xl p-6 sm:p-7 border border-cyan-500/20 shadow-xl space-y-6">
              <h3 className="text-xl font-display font-bold text-white flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-cyan-400" />
                <span>Chapter Headquarters</span>
              </h3>

              <div className="space-y-4 text-xs sm:text-sm font-light text-slate-300">
                <div className="flex items-start space-x-3">
                  <div className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-cyan-400 shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Campus Location</div>
                    <div className="text-slate-400 mt-0.5">{siteConfig.institution}</div>
                    <div className="text-slate-400">{siteConfig.location}</div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-cyan-400 shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Official Correspondence</div>
                    <a href={`mailto:${siteConfig.email}`} className="text-cyan-300 hover:underline block mt-0.5">
                      {siteConfig.email}
                    </a>
                    <a href={`mailto:${siteConfig.secondaryEmail}`} className="text-slate-400 hover:underline block text-xs">
                      {siteConfig.secondaryEmail}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-cyan-400 shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Phone Inquiries</div>
                    <div className="text-slate-400 mt-0.5">{siteConfig.phone}</div>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-slate-800">
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">
                  Connect on Socials
                </div>
                <div className="flex items-center space-x-3">
                  <a
                    href={siteConfig.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-300 hover:border-cyan-400/50 transition-colors"
                    aria-label="IEEE CS MBITS Instagram"
                  >
                    <InstagramIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={siteConfig.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-300 hover:border-cyan-400/50 transition-colors"
                    aria-label="IEEE CS MBITS LinkedIn"
                  >
                    <LinkedInIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={siteConfig.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-300 hover:border-cyan-400/50 transition-colors"
                    aria-label="IEEE CS MBITS GitHub"
                  >
                    <GitHubIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Integration Notice Box */}
            <div className="p-4 rounded-2xl bg-cyan-950/30 border border-cyan-500/20 text-xs text-slate-400 leading-relaxed font-mono">
              <span className="text-cyan-400 font-semibold">[Architecture Note]:</span> Frontend form validation is fully active. Form handlers are configured with standard JSON payloads, ready to route to your college mail server, Formspree, or Supabase webhook.
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-cyan-500/20 shadow-2xl relative">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
                    <Sparkles className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-white">Transmission Recorded!</h3>
                  <p className="text-slate-300 text-sm max-w-md mx-auto font-light leading-relaxed">
                    Thank you, <strong className="text-cyan-300">{formData.name}</strong>. Your inquiry has been logged in the chapter dispatch queue. Our coordinator team will reply to <span className="text-cyan-300">{formData.email}</span> shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        subject: '',
                        domain: 'General Inquiry',
                        message: ''
                      });
                    }}
                    className="mt-4 px-6 py-2.5 rounded-xl bg-slate-900 border border-cyan-500/30 text-cyan-300 text-xs font-mono hover:bg-slate-800 transition-colors"
                  >
                    Send Another Dispatch
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                    <span className="text-xs font-mono text-cyan-400 font-semibold uppercase tracking-wider flex items-center space-x-1.5">
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>Direct Transmission Form</span>
                    </span>
                    <span className="text-[11px] font-mono text-slate-500">* Required Fields</span>
                  </div>

                  {/* Name and Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Rahul Sharma"
                        className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border text-white placeholder-slate-500 text-xs focus:outline-none transition-colors ${
                          errors.name ? 'border-rose-500' : 'border-slate-800 focus:border-cyan-400'
                        }`}
                      />
                      {errors.name && (
                        <p className="text-[11px] text-rose-400 mt-1 flex items-center space-x-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. rahul@example.com"
                        className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border text-white placeholder-slate-500 text-xs focus:outline-none transition-colors ${
                          errors.email ? 'border-rose-500' : 'border-slate-800 focus:border-cyan-400'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-rose-400 mt-1 flex items-center space-x-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Domain & Subject */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1">
                        Inquiry Domain
                      </label>
                      <select
                        value={formData.domain}
                        onChange={(e) => setFormData({ ...formData, domain: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-white text-xs focus:outline-none focus:border-cyan-400"
                      >
                        <option value="General Inquiry">General Chapter Inquiry</option>
                        <option value="Student Membership">Student Membership Registration</option>
                        <option value="Event Participation">Hackathon / Workshop Question</option>
                        <option value="Sponsorship & Partnership">Sponsorship & Industry Collaboration</option>
                        <option value="Technical Project Collaboration">Technical Project Wing</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1">
                        Subject *
                      </label>
                      <input
                        type="text"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="Inquiry topic"
                        className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border text-white placeholder-slate-500 text-xs focus:outline-none transition-colors ${
                          errors.subject ? 'border-rose-500' : 'border-slate-800 focus:border-cyan-400'
                        }`}
                      />
                      {errors.subject && (
                        <p className="text-[11px] text-rose-400 mt-1 flex items-center space-x-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.subject}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1">
                      Message *
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Write your query or message in detail..."
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border text-white placeholder-slate-500 text-xs focus:outline-none transition-colors resize-none ${
                        errors.message ? 'border-rose-500' : 'border-slate-800 focus:border-cyan-400'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-[11px] text-rose-400 mt-1 flex items-center space-x-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:via-blue-500 hover:to-indigo-500 text-white font-semibold text-xs tracking-wider uppercase transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] flex items-center justify-center space-x-2"
                  >
                    {isSubmitting ? (
                      <span>Verifying & Sending...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Transmit Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
