import { useState } from 'react'
import { Boxes, Workflow, ShieldCheck, Cable, Database, Gauge } from 'lucide-react'

const tabs = [
  {
    key: 'modules',
    label: 'Modular Builder',
    icon: Boxes,
    image: 'https://images.unsplash.com/photo-1639447293243-d29625f2523f?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxNb2R1bGFyJTIwQnVpbGRlcnxlbnwwfDB8fHwxNzYzNTYyOTYxfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    points: [
      'Drag-and-drop domain modules: CRM, Finance, HR, Ops',
      'Reusable blueprints with versioning',
      'Role-based UI scaffolding in minutes'
    ]
  },
  {
    key: 'workflow',
    label: 'Workflow Automation',
    icon: Workflow,
    image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1920&auto=format&fit=crop',
    points: [
      'Visual flows with triggers, conditions, actions',
      'Approvals, SLAs, escalations out-of-the-box',
      'Human-in-the-loop steps for audits'
    ]
  },
  {
    key: 'integrations',
    label: 'Integrations',
    icon: Cable,
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1920&auto=format&fit=crop',
    points: [
      'Connect to 200+ apps via native connectors',
      'GraphQL/REST SDK, webhooks, event bus',
      'SSO, SCIM, SAML for enterprise'
    ]
  },
  {
    key: 'data',
    label: 'Data Layer',
    icon: Database,
    image: 'https://images.unsplash.com/photo-1651340550839-3b295d930048?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxEYXRhJTIwTGF5ZXJ8ZW58MHwwfHx8MTc2MzU2Mjk2Mnww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    points: [
      'Unified schema registry and governance',
      'Row-level security and audit trails',
      'AI semantics for unified search'
    ]
  },
  {
    key: 'governance',
    label: 'Security & Governance',
    icon: ShieldCheck,
    image: 'https://images.unsplash.com/photo-1741281843991-05a190e31057?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTZWN1cml0eSUyMCUyNiUyMEdvdmVybmFuY2V8ZW58MHwwfHx8MTc2MzU2Mjk2Mnww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    points: [
      'Policies, permissions, environments',
      'Backups, disaster recovery, regionality',
      'Compliance-ready: SOC2, ISO 27001'
    ]
  },
  {
    key: 'perf',
    label: 'Performance',
    icon: Gauge,
    image: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1920&auto=format&fit=crop',
    points: [
      'Horizontal scaling with autosync',
      'Realtime streams and analytics',
      'Sub-100ms interactions globally'
    ]
  }
]

function FeatureTabs() {
  const [active, setActive] = useState('modules')

  const ActiveIcon = tabs.find(t => t.key === active)?.icon || Boxes

  return (
    <section id="features" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600 ring-1 ring-slate-200">Platform capabilities</div>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Everything you need to build your ERP</h2>
          <p className="mt-3 text-slate-600">Switch tabs to explore how modules, workflows, data, and governance come together.</p>
        </div>

        <div className="mt-12 grid lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-slate-200 bg-white p-2">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {tabs.map(tab => (
                  <button key={tab.key} onClick={() => setActive(tab.key)} className={`group rounded-xl border text-left p-3 transition-all ${active === tab.key ? 'border-slate-900 bg-slate-900 text-white' : 'border-slate-200 hover:border-slate-300 bg-white text-slate-700'}`}>
                    <div className="flex items-center gap-2">
                      <tab.icon className={`h-5 w-5 ${active === tab.key ? 'text-white' : 'text-slate-600 group-hover:text-slate-900'}`} />
                      <span className="text-sm font-medium">{tab.label}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6">
              <div className="flex items-center gap-3">
                <ActiveIcon className="h-5 w-5 text-slate-900" />
                <div className="font-semibold text-slate-900">{tabs.find(t => t.key === active)?.label}</div>
              </div>
              <ul className="mt-4 space-y-2 text-slate-600">
                {tabs.find(t => t.key === active)?.points.map((p, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-slate-300">•</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="relative h-[380px] rounded-2xl overflow-hidden border border-slate-200 bg-white">
              <img src={tabs.find(t => t.key === active)?.image} alt="Feature" className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeatureTabs
