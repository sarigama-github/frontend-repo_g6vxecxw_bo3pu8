function CTA() {
  return (
    <section id="cta" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white">
          <div className="absolute inset-0 bg-[radial-gradient(500px_200px_at_30%_20%,#e9d5ff_0%,transparent_60%),radial-gradient(500px_200px_at_70%_80%,#bfdbfe_0%,transparent_60%)] opacity-60" />
          <div className="relative p-10 md:p-14 text-center">
            <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Start building your ERP today</h3>
            <p className="mt-3 text-slate-600 max-w-2xl mx-auto">Use our guided templates or begin with a blank canvas. Your first workspace is free.</p>
            <div className="mt-8 flex items-center justify-center gap-3">
              <a href="#" className="inline-flex items-center justify-center rounded-xl bg-slate-900 text-white px-6 py-3 text-sm font-medium shadow-sm hover:bg-slate-800 transition-colors">Create free workspace</a>
              <a href="#" className="inline-flex items-center justify-center rounded-xl bg-white text-slate-900 px-6 py-3 text-sm font-medium shadow-sm ring-1 ring-slate-200 hover:bg-slate-50 transition-colors">Talk to sales</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
