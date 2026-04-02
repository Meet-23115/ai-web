import Link from 'next/link';
import { ArrowRight, Zap, Brain, Plug, BarChart3, Shield, Code2, ChevronRight } from 'lucide-react';

const stats = [
  { value: '10x', label: 'Faster integration' },
  { value: '99.9%', label: 'Uptime SLA' },
  { value: '< 200ms', label: 'Average latency' },
  { value: '10+', label: 'AI model support' },
];

const features = [
  {
    icon: Plug,
    title: 'Plug & Play Setup',
    desc: 'Connect any AI model to your app in days with our zero-config SDK.',
  },
  {
    icon: Brain,
    title: 'RAG Knowledge Base',
    desc: 'Upload documents and let your AI answer questions from your own data.',
  },
  {
    icon: Code2,
    title: 'Dynamic Tools',
    desc: 'Define custom API tools at runtime — no redeploy, no downtime.',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    desc: 'OAuth, API key rotation, and per-server auth policies built in.',
  },
];

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'CTO, TechFlow',
    body: 'We went from prototype to production AI chatbot in 2 days. Plug And Play AI handles all the complexity we didn\'t want to build.',
    avatar: 'SC',
  },
  {
    name: 'Marcus Rivera',
    role: 'Lead Engineer, DataSync',
    body: 'The RAG feature alone saved us 3 months of development. Our support bot now answers with 95% accuracy from our docs.',
    avatar: 'MR',
  },
  {
    name: 'Priya Patel',
    role: 'Founder, NovaMind',
    body: 'Dynamic tool registration is a game-changer. We update our AI\'s capabilities without touching the codebase.',
    avatar: 'PP',
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-indigo-600/20 dark:bg-indigo-600/10 blur-[120px] rounded-full" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-300 dark:border-indigo-500/40 bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-sm font-medium mb-8">
            <Zap size={14} />
            Now supporting Gemini 2.5, GPT-4o & Claude 3.5
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight mb-6">
            No-Code AI{' '}  
            <br />
            <span className="gradient-text">Seamless Integration.</span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Plug And Play AI gives you a production-ready AI platform — RAG chatbots, dynamic tools, embeddable widgets — without writing a single line of ML code.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary text-base">
              Start for free <ArrowRight size={18} />
            </Link>
            <Link href="/features" className="btn-outline text-base">
              See all features <ChevronRight size={18} />
            </Link>
          </div>

          {/* Browser mockup */}
          <div className="mt-20 max-w-4xl mx-auto">
            <div className="card-glass overflow-hidden shadow-2xl shadow-indigo-500/10">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="flex-1 mx-4 bg-white dark:bg-white/10 rounded-md px-3 py-1 text-xs text-slate-400 text-left">
                  app.plugandplayai.com/chat
                </div>
              </div>
              <div className="p-6 space-y-4 text-left min-h-48">
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center flex-shrink-0">
                    <Brain size={14} className="text-white" />
                  </div>
                  <div className="card-glass px-4 py-3 text-sm max-w-sm">
                    Hello! I&apos;m your AI assistant. How can I help you today?
                  </div>
                </div>
                <div className="flex gap-3 justify-end">
                  <div className="bg-indigo-600 text-white px-4 py-3 rounded-2xl rounded-tr-sm text-sm max-w-sm">
                    Hi! I would like to check the status of my order #12345.
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center flex-shrink-0">
                    <Brain size={14} className="text-white" />
                  </div>
                  <div className="card-glass px-4 py-3 text-sm max-w-sm">
                    Sure! Your order #12345 is currently being processed and should be shipped within the next 2 days.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map(({ value, label }) => (
            <div key={label}>
              <div className="text-3xl font-extrabold gradient-text">{value}</div>
              <div className="text-sm text-slate-500 dark:text-slate-400 mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Everything you need to ship AI</h2>
            <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
              One platform, all the building blocks. From first prototype to scaled production.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="card-glass p-6 hover:border-indigo-300 dark:hover:border-indigo-500/40 transition-colors group">
                <div className="w-10 h-10 rounded-xl bg-indigo-600/10 dark:bg-indigo-500/10 flex items-center justify-center mb-4 group-hover:bg-indigo-600/20 transition-colors">
                  <Icon size={20} className="text-indigo-600 dark:text-indigo-400" />
                </div>
                <h3 className="font-semibold mb-2">{title}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/features" className="btn-outline">
              Explore all features <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {/* <section className="py-24 bg-slate-50 dark:bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Loved by engineering teams</h2>
            <p className="text-slate-500 dark:text-slate-400">Don&apos;t just take our word for it.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map(({ name, role, body, avatar }) => (
              <div key={name} className="card-glass p-6">
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">&ldquo;{body}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                    {avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-sm">{name}</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">{role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA */}
      <section className="py-24 bg-slate-50 dark:bg-white/[0.02]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="card-glass p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/5 to-transparent pointer-events-none" />
            <BarChart3 size={40} className="text-indigo-500 mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to plug in?</h2>
            <p className="text-slate-500 dark:text-slate-400 mb-8 max-w-lg mx-auto">
              Get your first AI server running in under 5 minutes. No credit card required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Get started free <ArrowRight size={18} />
              </Link>
              <Link href="/about" className="btn-outline">
                Learn about us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
