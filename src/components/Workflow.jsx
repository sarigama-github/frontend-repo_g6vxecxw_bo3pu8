import { CheckCircle2, ArrowRight } from 'lucide-react'

const steps = [
  {
    title: 'Blueprint',
    desc: 'Define entities, roles, and outcomes. Start from templates or import existing data.',
  },
  {
    title: 'Assemble',
    desc: 'Drag modules, map fields, and set policies. Spin up environments instantly.',
  },
  {
    title: 'Automate',
    desc: 'Design flows, approvals, and alerts. Connect external systems with connectors.',
  },
  {
    title: 'Launch',
    desc: 'Rollout to teams with SSO. Monitor adoption with realtime insights.',
  },
]

function Workflow() {
  return (
    <section id="workflow" className="relative py-24 bg-slate-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">From idea to ERP — in four steps</h2>
            <p className="mt-3 text-slate-600">A guided studio with best-practice templates gets you to production faster.</p>

            <div className="mt-8 space-y-5">
              {steps.map((s, i) => (
                <div key={i} className="group rounded-2xl bg-white p-5 border border-slate-200 hover:border-slate-300 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="mt-0.5">
                      <CheckCircle2 className="h-5 w-5 text-slate-900" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">{i + 1}. {s.title}</div>
                      <p className="text-slate-600">{s.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative h-[420px] rounded-2xl overflow-hidden border border-slate-200 bg-white flex items-center justify-center">
              <div className="absolute inset-0 bg-[radial-gradient(600px_200px_at_20%_20%,#a5b4fc_0%,transparent_60%),radial-gradient(600px_200px_at_80%_80%,#fbcfe8_0%,transparent_60%)] opacity-40" />
              <div className="relative grid grid-cols-2 gap-4 p-6">
                {steps.map((s, i) => (
                  <div key={i} className="rounded-xl border border-slate-200 bg-white p-4 w-56">
                    <div className="text-xs text-slate-500">Step {i + 1}</div>
                    <div className="mt-1 font-semibold text-slate-900">{s.title}</div>
                    <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex items-center justify-center gap-4">
          <a href="#cta" className="inline-flex items-center rounded-xl bg-slate-900 text-white px-5 py-3 text-sm font-medium shadow-sm hover:bg-slate-800 transition-colors">Get a demo <ArrowRight className="ml-2 h-4 w-4" /></a>
          <a href="#features" className="inline-flex items-center rounded-xl bg-white text-slate-900 px-5 py-3 text-sm font-medium shadow-sm ring-1 ring-slate-200 hover:bg-slate-50 transition-colors">Explore features</a>
        </div>
      </div>
    </section>
  )
}

export default Workflow
