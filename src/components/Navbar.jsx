import { Menu, Sparkles } from 'lucide-react'

function Navbar() {
  return (
    <header className="sticky top-0 z-30 w-full backdrop-blur bg-white/70 border-b border-slate-200/60">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500 flex items-center justify-center shadow-sm">
            <Sparkles className="h-5 w-5 text-white" />
          </div>
          <div className="text-slate-900 font-semibold tracking-tight">Flux ERP Studio</div>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm text-slate-600">
          <a href="#features" className="hover:text-slate-900 transition-colors">Features</a>
          <a href="#workflow" className="hover:text-slate-900 transition-colors">Workflow</a>
          <a href="#about" className="hover:text-slate-900 transition-colors">About</a>
        </nav>
        <div className="hidden md:block">
          <a href="#cta" className="inline-flex items-center rounded-xl bg-slate-900 text-white px-4 py-2 text-sm font-medium hover:bg-slate-800 transition-colors">Get Started</a>
        </div>
        <button className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-300 text-slate-700"><Menu className="h-5 w-5" /></button>
      </div>
    </header>
  )
}

export default Navbar
