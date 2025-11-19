import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pt-28 pb-24">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur px-3 py-1 text-xs text-slate-600 ring-1 ring-slate-200">AI-powered ERP builder for agencies and enterprises</div>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900">Design, assemble, and launch your ERP in days — not months</h1>
            <p className="mt-5 text-slate-600 text-lg">Blueprint modules, automate workflows, and connect data. A minimal, modern studio to craft the exact ERP your teams need.</p>
            <div className="mt-8 flex items-center gap-3">
              <a href="#cta" className="inline-flex items-center justify-center rounded-xl bg-slate-900 text-white px-5 py-3 text-sm font-medium shadow-sm hover:bg-slate-800 transition-colors">Start your build</a>
              <a href="#features" className="inline-flex items-center justify-center rounded-xl bg-white text-slate-900 px-5 py-3 text-sm font-medium shadow-sm ring-1 ring-slate-200 hover:bg-slate-50 transition-colors">See features</a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm text-slate-600">
              <div>No credit card</div>
              <div className="h-1 w-1 rounded-full bg-slate-300" />
              <div>Enterprise-ready</div>
              <div className="h-1 w-1 rounded-full bg-slate-300" />
              <div>ISO & SOC2 practices</div>
            </div>
          </div>
          <div className="lg:col-span-5"></div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-white to-transparent" />
    </section>
  )
}

export default Hero
