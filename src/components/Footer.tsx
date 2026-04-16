import Link from 'next/link';
import { Zap, Github, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-white/10 bg-white dark:bg-[#0a0a14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 font-bold text-lg mb-3">
              <span className="p-1.5 rounded-lg bg-indigo-600">
                <Zap size={16} className="text-white" />
              </span>
              <span className="gradient-text">Plug And Play AI</span>
            </Link>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed max-w-xs">
              The fastest way to integrate AI capabilities into any application — no ML expertise required.
            </p>
            
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-3">Product</h4>
            <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
              {['Features', 'Pricing', 'Changelog', 'Roadmap'].map(item => (
                <li key={item}><Link href="#" className="hover:text-indigo-500 transition-colors">{item}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-3">Company</h4>
            <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
              {[['About', '/about'], ['Contact', '/contact'], ['Privacy', '#'], ['Terms', '#']].map(([label, href]) => (
                <li key={label}><Link href={href} className="hover:text-indigo-500 transition-colors">{label}</Link></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-slate-200 dark:border-white/10 flex flex-col sm:flex-row justify-between items-center gap-2 text-sm text-slate-400">
          <p>© {new Date().getFullYear()} Plug And Play AI. All rights reserved.</p>
          {/* <p>Built with Next.js &amp; Tailwind CSS</p> */}
        </div>
      </div>
    </footer>
  );
}
