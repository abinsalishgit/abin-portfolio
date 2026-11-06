import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MessageSquare, 
  Send, 
  CheckCircle, 
  ExternalLink, 
  Copy, 
  Check, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { GithubIcon, InstagramIcon, WhatsAppIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [copiedType, setCopiedType] = useState(null);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Please enter your name.';
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Please enter a message.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long.';
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setErrors({});
    setSubmitted(true);

    // Prepare mailto link with encoded message so user can send immediately
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const mailtoUrl = `mailto:${personalInfo.contact.email}?subject=${subject}&body=${body}`;

    // Open user's email client
    window.location.href = mailtoUrl;
  };

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  return (
    <section id="contact" className="py-24 relative z-10 border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 mb-4">
            <MessageSquare className="w-3.5 h-3.5 text-[#E31B35]" />
            <span className="text-xs font-mono tracking-widest uppercase text-zinc-300">
              Get in Touch
            </span>
          </div>
          
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight uppercase">
            HAVE AN IDEA? <br className="hidden sm:inline" />
            <span className="text-[#E31B35]">LET'S BUILD SOMETHING.</span>
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg max-w-2xl mt-3 font-sans">
            Whether you want to discuss technology, collaborate on an invention, talk startups, or simply connect, my inbox and channels are always open.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Details & WhatsApp Button */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            
            {/* Phone Card */}
            <div className="glass-card rounded-2xl p-6 group">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-[#E31B35]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500">
                      Direct Voice / SMS
                    </span>
                    <h4 className="text-lg font-display font-bold text-white">
                      +91 91888 55265
                    </h4>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => copyToClipboard('9188855265', 'phone')}
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
                  title="Copy Phone Number"
                >
                  {copiedType === 'phone' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <div className="flex flex-wrap gap-2.5 mt-4 pt-4 border-t border-white/[0.06]">
                <a
                  href={personalInfo.contact.phoneHref}
                  className="flex-1 text-center py-2 px-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-zinc-200 transition-colors"
                >
                  Call Now (tel:)
                </a>
                
                {/* Prominent WhatsApp Action Button */}
                <a
                  href={personalInfo.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center py-2 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-xs font-mono font-semibold text-white transition-all shadow-lg shadow-emerald-900/30 flex items-center justify-center space-x-1.5"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-white" />
                  <span>Chat on WhatsApp</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Email Card */}
            <div className="glass-card rounded-2xl p-6 group">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500">
                      Email Address
                    </span>
                    <h4 className="text-base sm:text-lg font-display font-bold text-white break-all">
                      {personalInfo.contact.email}
                    </h4>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => copyToClipboard(personalInfo.contact.email, 'email')}
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors flex-shrink-0"
                  title="Copy Email"
                >
                  {copiedType === 'email' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <div className="mt-4 pt-4 border-t border-white/[0.06]">
                <a
                  href={personalInfo.contact.emailHref}
                  className="block w-full text-center py-2 px-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-zinc-200 transition-colors"
                >
                  Send Direct Email (mailto:)
                </a>
              </div>
            </div>

            {/* Social Channels (GitHub & Instagram) */}
            <div className="grid grid-cols-2 gap-4">
              
              <a
                href={personalInfo.contact.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card rounded-2xl p-5 hover:border-white/30 transition-all group flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2.5 rounded-xl bg-white/5 text-white">
                    <GithubIcon className="w-5 h-5 text-white" />
                  </div>
                  <ExternalLink className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-zinc-500 uppercase">GitHub Profile</span>
                  <p className="text-sm font-semibold text-white mt-0.5">@{personalInfo.contact.githubHandle}</p>
                </div>
              </a>

              <a
                href={personalInfo.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card rounded-2xl p-5 hover:border-white/30 transition-all group flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2.5 rounded-xl bg-rose-500/10 text-rose-400">
                    <InstagramIcon className="w-5 h-5" />
                  </div>
                  <ExternalLink className="w-4 h-4 text-zinc-500 group-hover:text-rose-400 transition-colors" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-zinc-500 uppercase">Instagram</span>
                  <p className="text-sm font-semibold text-white mt-0.5">@{personalInfo.contact.instagramHandle}</p>
                </div>
              </a>

            </div>

          </div>

          {/* Right Column: Interactive Validated Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-3xl p-7 sm:p-9 relative overflow-hidden">
              
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/[0.08]">
                <div>
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
                    Send a Direct Message
                  </h3>
                  <p className="text-xs text-zinc-400 font-mono mt-1">
                    Validates input & launches your client with prepared dispatch
                  </p>
                </div>
                <span className="w-2.5 h-2.5 rounded-full bg-[#E31B35] animate-ping" />
              </div>

              {submitted && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Draft Prepared!</p>
                    <p className="text-xs text-emerald-400/90 mt-0.5">
                      Your default mail program was triggered. You can also chat on WhatsApp directly above.
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-xs font-mono text-zinc-300 uppercase tracking-wider mb-2">
                    Your Name <span className="text-[#E31B35]">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Sharma"
                    className={`w-full px-4 py-3 rounded-xl bg-black/40 border text-sm text-white placeholder-zinc-600 focus:outline-none transition-colors ${
                      errors.name ? 'border-[#E31B35] focus:border-[#E31B35]' : 'border-white/10 focus:border-[#E31B35]'
                    }`}
                  />
                  {errors.name && (
                    <p className="text-xs text-[#E31B35] font-mono mt-1.5">{errors.name}</p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-xs font-mono text-zinc-300 uppercase tracking-wider mb-2">
                    Your Email Address <span className="text-[#E31B35]">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@example.com"
                    className={`w-full px-4 py-3 rounded-xl bg-black/40 border text-sm text-white placeholder-zinc-600 focus:outline-none transition-colors ${
                      errors.email ? 'border-[#E31B35] focus:border-[#E31B35]' : 'border-white/10 focus:border-[#E31B35]'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-xs text-[#E31B35] font-mono mt-1.5">{errors.email}</p>
                  )}
                </div>

                {/* Message Field */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label htmlFor="message" className="block text-xs font-mono text-zinc-300 uppercase tracking-wider">
                      Message <span className="text-[#E31B35]">*</span>
                    </label>
                    <span className="text-[10px] font-mono text-zinc-500">
                      {formData.message.length} chars
                    </span>
                  </div>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your idea, tech exploration, or project..."
                    className={`w-full px-4 py-3 rounded-xl bg-black/40 border text-sm text-white placeholder-zinc-600 focus:outline-none transition-colors resize-none ${
                      errors.message ? 'border-[#E31B35] focus:border-[#E31B35]' : 'border-white/10 focus:border-[#E31B35]'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-xs text-[#E31B35] font-mono mt-1.5">{errors.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-[#E31B35] hover:bg-[#ff2745] text-white font-display font-semibold text-sm tracking-wider uppercase transition-all duration-300 shadow-xl shadow-[#E31B35]/25 hover:shadow-[#E31B35]/50 flex items-center justify-center space-x-2"
                >
                  <span>Dispatch Message</span>
                  <Send className="w-4 h-4" />
                </button>

                <p className="text-[11px] font-mono text-zinc-500 text-center pt-2">
                  Transparent Protocol: No silent cloud servers — directly connects you to Abin's email inbox.
                </p>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
