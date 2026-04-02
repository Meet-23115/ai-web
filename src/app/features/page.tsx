import type { Metadata } from 'next';
import { Plug, Brain, Code2, Shield, Webhook, BarChart3, MessageSquare, FileText, Layers, Zap, Check } from 'lucide-react';

export const metadata: Metadata = { title: 'Features' };

const categories = [
  {
    title: 'AI Servers',
    icon: Layers,
    color: 'indigo',
    features: [
      'Multi-model support (Gemini, GPT, Claude)',
      'Per-server configuration & isolation',
      'System prompt customization',
      'Conversation history & context',
      'Token usage tracking',
    ],
  },
  {
    title: 'RAG Knowledge Base',
    icon: FileText,
    color: 'purple',
    features: [
      'PDF, Word, TXT document upload',
      'Automatic chunking & embedding',
      'pgvector semantic search',
      'Cosine similarity ranking',
      'Per-server document isolation',
    ],
  },
  {
    title: 'Dynamic Tools',
    icon: Code2,
    color: 'pink',
    features: [
      'Define REST API tools at runtime',
      'Automatic Java class generation',
      'Spring AI @Tool annotation support',
      'OAuth & API key auth per tool',
      'Live reload without redeploy',
    ],
  },
  {
    title: 'Embeddable Chat',
    icon: MessageSquare,
    color: 'violet',
    features: [
      'One-line embed script',
      'Fully customizable UI',
      'CORS-safe iframe & widget mode',
      'Mobile responsive',
      'Dark & light theme support',
    ],
  },
  {
    title: 'Security & Auth',
    icon: Shield,
    color: 'emerald',
    features: [
      'Per-server API key management',
      'OAuth 2.0 tool authentication',
      'Request signing & header injection',
      'Rate limiting per server',
      'Audit log ready',
    ],
  },
  {
    title: 'Developer Experience',
    icon: Webhook,
    color: 'amber',
    features: [
      'REST API for all operations',
      'Swagger/OpenAPI docs',
      'Docker & docker-compose support',
      'Spring Boot 3 + Java 21',
      'Webhook event support (coming soon)',
    ],
  },
];

const colorMap: Record<string, string> = {
  indigo: 'from-indigo-500 to-indigo-600',
  purple: 'from-purple-500 to-purple-600',
  pink: 'from-pink-500 to-pink-600',
  violet: 'from-violet-500 to-violet-600',
  emerald: 'from-emerald-500 to-emerald-600',
  amber: 'from-amber-500 to-amber-600',
};

const bgMap: Record<string, string> = {
  indigo: 'bg-indigo-500/10',
  purple: 'bg-purple-500/10',
  pink: 'bg-pink-500/10',
  violet: 'bg-violet-500/10',
  emerald: 'bg-emerald-500/10',
  amber: 'bg-amber-500/10',
};

const textMap: Record<string, string> = {
  indigo: 'text-indigo-500',
  purple: 'text-purple-500',
  pink: 'text-pink-500',
  violet: 'text-violet-500',
  emerald: 'text-emerald-500',
  amber: 'text-amber-500',
};

export default function FeaturesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-20 text-center">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-purple-600/10 blur-[100px] rounded-full" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-300 dark:border-purple-500/40 bg-purple-50 dark:bg-purple-500/10 text-purple-600 dark:text-purple-400 text-sm font-medium mb-6">
            <Plug size={14} /> Full feature set
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6">
            Built for every{' '}
            <span className="gradient-text">AI use case</span>
          </h1>
          <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
            From quick RAG prototypes to enterprise-grade AI deployments, every feature you need is already here.
          </p>
        </div>
      </section>

      {/* Feature grid */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map(({ title, icon: Icon, color, features }) => (
              <div key={title} className="card-glass p-6 hover:border-indigo-300 dark:hover:border-indigo-500/30 transition-colors">
                <div className={`w-11 h-11 rounded-xl ${bgMap[color]} flex items-center justify-center mb-4`}>
                  <Icon size={22} className={textMap[color]} />
                </div>
                <h3 className="font-bold text-lg mb-4">{title}</h3>
                <ul className="space-y-2.5">
                  {features.map(f => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-400">
                      <Check size={15} className={`${textMap[color]} flex-shrink-0 mt-0.5`} />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 bg-slate-50 dark:bg-white/[0.02] border-y border-slate-200 dark:border-white/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">How it works</h2>
          <p className="text-slate-500 dark:text-slate-400 mb-16 max-w-xl mx-auto">
            Three steps from zero to a fully working AI assistant.
          </p>
          <div className="grid md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-8 left-1/4 right-1/4 h-px bg-gradient-to-r from-indigo-500 to-purple-500 opacity-30" />
            {[
              { step: '01', icon: Layers, title: 'Create a Server', desc: 'Define your AI server, pick a model, and write your system prompt.' },
              { step: '02', icon: Brain, title: 'Add Knowledge', desc: 'Upload your documents. We chunk, embed, and index them automatically.' },
              { step: '03', icon: Zap, title: 'Deploy & Chat', desc: 'Embed the chat widget or call the API. Your AI is live instantly.' },
            ].map(({ step, icon: Icon, title, desc }) => (
              <div key={step} className="relative">
                <div className="card-glass p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center mx-auto mb-4 text-white font-bold text-sm">
                    {step}
                  </div>
                  <h3 className="font-bold mb-2">{title}</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <BarChart3 size={40} className="text-indigo-500 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">Ready to explore these features?</h2>
          <p className="text-slate-500 dark:text-slate-400 mb-8">Get in touch and we'll walk you through a live demo.</p>
          <a href="/contact" className="btn-primary mx-auto">Request a demo</a>
        </div>
      </section>
    </>
  );
}
