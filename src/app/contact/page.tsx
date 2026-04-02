'use client';

import { useState } from 'react';
import { Mail, MessageSquare, MapPin, Clock, Send, Github, Twitter, Linkedin } from 'lucide-react';

const contacts = [
  { icon: Mail, label: 'Email', value: 'hello@plugandplayai.com', href: 'mailto:hello@plugandplayai.com' },
  { icon: MessageSquare, label: 'Discord', value: 'Join our community', href: '#' },
  { icon: MapPin, label: 'Location', value: 'Remote-first, global team', href: null },
  { icon: Clock, label: 'Response time', value: 'Within 24 hours', href: null },
];

const socials = [
  { icon: Github, label: 'GitHub', href: '#' },
  { icon: Twitter, label: 'Twitter', href: '#' },
  { icon: Linkedin, label: 'LinkedIn', href: '#' },
];

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => setStatus('sent'), 1500);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative py-20 text-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-pink-600/10 blur-[100px] rounded-full" />
        </div>
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-pink-300 dark:border-pink-500/40 bg-pink-50 dark:bg-pink-500/10 text-pink-600 dark:text-pink-400 text-sm font-medium mb-6">
            <Mail size={14} /> Get in touch
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
            Let&apos;s <span className="gradient-text">start a conversation</span>
          </h1>
          <p className="text-lg text-slate-500 dark:text-slate-400">
            Have questions about Plug And Play AI? Want a live demo? We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-5 gap-12">
          {/* Left info */}
          <div className="md:col-span-2 space-y-8">
            <div>
              <h2 className="text-xl font-bold mb-6">Contact information</h2>
              <div className="space-y-4">
                {contacts.map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-indigo-500/10 flex items-center justify-center flex-shrink-0">
                      <Icon size={16} className="text-indigo-500" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 mb-0.5">{label}</div>
                      {href ? (
                        <a href={href} className="text-sm font-medium hover:text-indigo-500 transition-colors">{value}</a>
                      ) : (
                        <span className="text-sm font-medium">{value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold mb-3 text-slate-500 dark:text-slate-400 uppercase tracking-wide">Follow us</h3>
              <div className="flex gap-3">
                {socials.map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="p-2.5 rounded-xl border border-slate-200 dark:border-white/10 hover:border-indigo-400 dark:hover:border-indigo-400 hover:text-indigo-500 transition-colors"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            <div className="card-glass p-5">
              <div className="text-sm font-semibold mb-2">Looking for docs?</div>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-3">
                Check our documentation for integration guides, API references, and quickstarts.
              </p>
              <a href="#" className="text-sm text-indigo-500 font-medium hover:underline">Browse docs →</a>
            </div>
          </div>

          {/* Contact form */}
          <div className="md:col-span-3">
            <div className="card-glass p-8">
              {status === 'sent' ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center mx-auto mb-4">
                    <Send size={28} className="text-emerald-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Message sent!</h3>
                  <p className="text-slate-500 dark:text-slate-400">
                    Thanks for reaching out. We&apos;ll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => { setStatus('idle'); setForm({ name: '', email: '', subject: '', message: '' }); }}
                    className="mt-6 btn-outline text-sm"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h2 className="text-xl font-bold mb-6">Send us a message</h2>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium mb-1.5">Name</label>
                      <input
                        type="text"
                        required
                        placeholder="Your name"
                        value={form.name}
                        onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                        className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 focus:outline-none focus:border-indigo-400 dark:focus:border-indigo-500 transition-colors text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1.5">Email</label>
                      <input
                        type="email"
                        required
                        placeholder="you@company.com"
                        value={form.email}
                        onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                        className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 focus:outline-none focus:border-indigo-400 dark:focus:border-indigo-500 transition-colors text-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Subject</label>
                    <select
                      value={form.subject}
                      onChange={e => setForm(f => ({ ...f, subject: e.target.value }))}
                      className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 focus:outline-none focus:border-indigo-400 dark:focus:border-indigo-500 transition-colors text-sm text-slate-700 dark:text-slate-300"
                    >
                      <option value="">Select a topic</option>
                      <option>Request a demo</option>
                      <option>Sales inquiry</option>
                      <option>Technical support</option>
                      <option>Partnership</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Message</label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Tell us about your use case, team size, or any questions you have..."
                      value={form.message}
                      onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                      className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 focus:outline-none focus:border-indigo-400 dark:focus:border-indigo-500 transition-colors text-sm resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="btn-primary w-full justify-center disabled:opacity-60"
                  >
                    {status === 'sending' ? 'Sending...' : <>Send message <Send size={16} /></>}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
