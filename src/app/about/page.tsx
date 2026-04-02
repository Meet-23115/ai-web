import type { Metadata } from 'next';
import { Zap, Target, Heart, Users } from 'lucide-react';

export const metadata: Metadata = { title: 'About' };

const values = [
  {
    icon: Zap,
    title: 'Speed first',
    desc: 'We believe every team should be able to ship AI in hours, not months. We obsess over reducing friction at every step.',
  },
  {
    icon: Target,
    title: 'Built for builders',
    desc: 'We\'re engineers building tools for engineers. Every feature is born from real problems we\'ve faced building AI systems.',
  },
  {
    icon: Heart,
    title: 'Open by default',
    desc: 'We ship with sensible defaults and expose full configurability. No black boxes — you always know what\'s happening.',
  },
  {
    icon: Users,
    title: 'Team-centric',
    desc: 'AI shouldn\'t be a one-person show. We design for collaboration across engineering, product, and business teams.',
  },
];

const team = [
  { name: 'Alex Morgan', role: 'Founder & CEO', bio: 'Former ML engineer at a major tech company. Built and scaled AI systems to 100M+ users.', initials: 'AM' },
  { name: 'Jamie Lee', role: 'Co-founder & CTO', bio: 'Distributed systems veteran. Believes in making complex infrastructure invisible to developers.', initials: 'JL' },
  { name: 'Sam Patel', role: 'Head of Product', bio: 'Ex-product lead with a passion for developer tools. Previously shipped dev products used by 500k+ engineers.', initials: 'SP' },
];

const timeline = [
  { year: '2023', event: 'Founded with a mission to democratize AI integration.' },
  { year: 'Q1 2024', event: 'Launched RAG knowledge base with pgvector support.' },
  { year: 'Q3 2024', event: 'Dynamic tool system shipped — 0 to 1000 users in 60 days.' },
  { year: '2025', event: 'Embeddable widget & multi-model support released.' },
  { year: 'Today', event: 'Serving teams across 20+ countries, processing millions of AI queries.' },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 text-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-indigo-600/10 blur-[100px] rounded-full" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-300 dark:border-indigo-500/40 bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-sm font-medium mb-6">
            <Zap size={14} /> Our story
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6">
            We&apos;re making AI{' '}
            <span className="gradient-text">accessible to all</span>
          </h1>
          <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Plug And Play AI was born from a simple frustration: AI is incredibly powerful, but integrating it into real applications is still far too hard. We&apos;re changing that.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 border-y border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.02]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Our mission</h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
            To give every development team — from 2-person startups to enterprise — the ability to ship production AI features with the same ease as adding a third-party library.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">What we believe</h2>
            <p className="text-slate-500 dark:text-slate-400">The values that guide everything we build.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="card-glass p-6 text-center">
                <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center mx-auto mb-4">
                  <Icon size={22} className="text-indigo-500" />
                </div>
                <h3 className="font-bold mb-2">{title}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      {/* <section className="py-24 bg-slate-50 dark:bg-white/[0.02] border-y border-slate-200 dark:border-white/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">Our journey</h2>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500 to-purple-500 opacity-30" />
            <div className="space-y-10">
              {timeline.map(({ year, event }, i) => (
                <div key={year} className={`flex gap-6 md:gap-0 relative ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`hidden md:block w-1/2 ${i % 2 === 0 ? 'text-right pr-10' : 'text-left pl-10'}`}>
                    {i % 2 === 0 && <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{event}</p>}
                    {i % 2 !== 0 && <div className="font-bold text-indigo-500">{year}</div>}
                  </div>
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-indigo-500 border-2 border-white dark:border-[#0a0a14] shadow top-1" />
                  <div className={`hidden md:block w-1/2 ${i % 2 === 0 ? 'pl-10' : 'pr-10 text-right'}`}>
                    {i % 2 === 0 && <div className="font-bold text-indigo-500">{year}</div>}
                    {i % 2 !== 0 && <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{event}</p>}
                  </div>
                  
                  <div className="md:hidden ml-10">
                    <div className="font-bold text-indigo-500">{year}</div>
                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mt-1">{event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* Team */}
      {/* <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Meet the team</h2>
            <p className="text-slate-500 dark:text-slate-400">The people building the future of AI integration.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map(({ name, role, bio, initials }) => (
              <div key={name} className="card-glass p-6 text-center">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center mx-auto mb-4 text-white text-2xl font-extrabold">
                  {initials}
                </div>
                <h3 className="font-bold text-lg">{name}</h3>
                <div className="text-sm text-indigo-500 mb-3">{role}</div>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}
    </>
  );
}
