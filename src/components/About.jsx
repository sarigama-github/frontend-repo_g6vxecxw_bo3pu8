function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Built for agencies. Loved by enterprises.</h2>
          <p className="mt-4 text-slate-600 max-w-3xl mx-auto">We combine a modular platform with opinionated best practices so cross-functional teams can ship secure, compliant ERP systems that actually fit the business. Minimal surface, serious power.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {k: '99.99% uptime', d: 'Global infrastructure and auto-failover'},
            {k: 'SOC2 Type II', d: 'Security by design and audits'},
            {k: 'SSO & SCIM', d: 'Bring your identity provider'},
            {k: 'EU & US regions', d: 'Data residency and controls'},
          ].map((i) => (
            <div key={i.k} className="rounded-2xl border border-slate-200 bg-white p-6 text-left">
              <div className="text-slate-900 font-semibold">{i.k}</div>
              <div className="text-slate-600 text-sm">{i.d}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
