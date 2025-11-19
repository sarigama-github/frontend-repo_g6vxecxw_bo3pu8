function Footer() {
  return (
    <footer className="relative border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-slate-600 text-sm">© {new Date().getFullYear()} Flux ERP Studio. All rights reserved.</div>
        <div className="flex items-center gap-6 text-sm text-slate-600">
          <a href="#" className="hover:text-slate-900">Privacy</a>
          <a href="#" className="hover:text-slate-900">Security</a>
          <a href="#" className="hover:text-slate-900">Terms</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
