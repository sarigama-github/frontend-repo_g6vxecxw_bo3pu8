import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeatureTabs from './components/FeatureTabs'
import Workflow from './components/Workflow'
import About from './components/About'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <Hero />
      <FeatureTabs />
      <Workflow />
      <About />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
