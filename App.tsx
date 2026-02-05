
import React, { useState, useEffect, lazy, Suspense } from 'react';
import { ArrowUpRight, Menu, X, Github, Twitter, Linkedin } from 'lucide-react';
import GridBackground from './components/GridBackground';
import Philosophy from './components/Philosophy';

const Gatekeeper = lazy(() => import('./components/Gatekeeper'));

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Philosophy', href: '#philosophy' },
    { name: 'The Craft', href: '#craft' },
    { name: 'Feasibility', href: '#gatekeeper' },
  ];

  return (
    <div className="min-h-screen selection:bg-indigo-500 selection:text-white">
      <GridBackground />

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'py-4 bg-black/80 backdrop-blur-lg' : 'py-8'
      }`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-white flex items-center justify-center rounded-sm">
              <span className="text-black font-black text-xl italic">E</span>
            </div>
            <span className="mono font-bold tracking-tighter text-xl hidden sm:block">ECHELON</span>
          </div>

          <div className="hidden md:flex items-center gap-12">
            {navLinks.map(link => (
              <a 
                key={link.name} 
                href={link.href} 
                className="mono text-xs uppercase tracking-widest text-zinc-400 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
            <button className="bg-white text-black px-6 py-2 rounded-full text-xs font-bold mono uppercase hover:bg-indigo-500 hover:text-white transition-all">
              Initiate
            </button>
          </div>

          <button 
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative min-h-screen flex flex-col justify-center px-6 pt-20">
        <div className="max-w-7xl mx-auto w-full">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 mono text-[10px] uppercase tracking-widest text-indigo-400 mb-8 animate-in fade-in slide-in-from-bottom-2 duration-700">
            <span className="flex h-2 w-2 rounded-full bg-indigo-500 animate-pulse" />
            Active Capacity: 1 Slot Remaining
          </div>
          
          <h1 className="text-6xl md:text-9xl font-bold tracking-tighter leading-[0.9] mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-100">
            WE ARCHITECT<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 via-white to-zinc-500">DIGITAL LEGACIES</span>
          </h1>
          
          <p className="text-zinc-500 text-xl md:text-2xl max-w-2xl leading-relaxed mb-12 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-200">
            A boutique software collective focusing on high-complexity systems and avant-garde digital experiences. We don't take projects for money; we take them for the challenge.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
            <a href="#gatekeeper" className="group flex items-center justify-center gap-3 bg-white text-black px-10 py-5 rounded-full font-bold text-lg hover:bg-indigo-500 hover:text-white transition-all">
              Apply for Partnership
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
            <a href="#philosophy" className="flex items-center justify-center gap-3 border border-white/10 px-10 py-5 rounded-full font-bold text-lg hover:bg-white/5 transition-all">
              Our Philosophy
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="hidden md:block fixed bottom-10 left-auto right-6 flex items-center gap-4 text-zinc-600 mono text-xs uppercase tracking-widest animate-bounce">
          <div className="w-[1px] h-12 bg-zinc-800" />
          Scroll to Explore
        </div>
      </header>

      <Philosophy />

      {/* Service/Craft Grid */}
      <section id="craft" className="py-24 px-6 border-y border-white/5 relative z-10 bg-zinc-950/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
            <div>
              <span className="mono text-xs uppercase tracking-[0.3em] text-indigo-500 block mb-4">Capabilities</span>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight">Obsessive Craftsmanship</h2>
            </div>
            <p className="text-zinc-500 max-w-md text-lg italic">
              "Good enough" is a term we've removed from our vocabulary. We build for the next decade, not the next quarter.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-1">
            {[
              { title: "Distributed Systems", code: "0x1A", desc: "Building fault-tolerant, high-concurrency backends for mission-critical operations." },
              { title: "Generative AI Systems", code: "0x2B", desc: "Integrating frontier LLMs and custom RAG pipelines into production ecosystems." },
              { title: "Spatial Computing", code: "0x3C", desc: "Architecting immersive AR/VR experiences that challenge human perception." },
              { title: "FinTech Infrastructure", code: "0x4D", desc: "Securing financial movements with low-latency, hyper-resilient ledger systems." },
              { title: "Creative Frontend", code: "0x5E", desc: "Merging WebGL, shaders, and React to build interfaces that feel alive." },
              { title: "Smart Contracts", code: "0x6F", desc: "Writing audited, gas-optimized contracts for the decentralized economy." }
            ].map((s, i) => (
              <div key={i} className="group p-10 border border-white/5 hover:bg-white/[0.02] transition-colors relative overflow-hidden">
                <div className="absolute top-6 right-6 mono text-[10px] text-zinc-700">{s.code}</div>
                <h3 className="text-2xl font-bold mb-4">{s.title}</h3>
                <p className="text-zinc-500 leading-relaxed">{s.desc}</p>
                <div className="mt-8 h-[1px] w-0 group-hover:w-full bg-indigo-500 transition-all duration-700" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Suspense fallback={<section id="gatekeeper" className="py-24 px-6 max-w-4xl mx-auto relative z-10"><div className="border border-white/10 bg-white/[0.02] p-8 md:p-12 rounded-2xl animate-pulse h-64" /></section>}>
        <Gatekeeper />
      </Suspense>

      {/* Footer */}
      <footer className="py-24 px-6 border-t border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-8 h-8 bg-white flex items-center justify-center rounded-sm">
                <span className="text-black font-black text-xl italic">E</span>
              </div>
              <span className="mono font-bold tracking-tighter text-xl">ECHELON</span>
            </div>
            <p className="text-zinc-500 text-lg max-w-sm mb-8 leading-relaxed">
              Selective software development for those who value architectural purity and creative excellence.
            </p>
            <div className="flex gap-6">
              <Github className="w-5 h-5 text-zinc-500 hover:text-white cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-zinc-500 hover:text-white cursor-pointer transition-colors" />
              <Linkedin className="w-5 h-5 text-zinc-500 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          <div>
            <h4 className="mono text-[10px] uppercase tracking-widest text-zinc-600 mb-6">Directory</h4>
            <ul className="space-y-4 text-zinc-400">
              <li><a href="#" className="hover:text-white transition-colors">Manifesto</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Selected Work</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Apply</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Journal</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mono text-[10px] uppercase tracking-widest text-zinc-600 mb-6">Status</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-emerald-500" />
                <span className="text-sm text-zinc-400">Systems Operational</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-indigo-500" />
                <span className="text-sm text-zinc-400">Limited Capacity (1/3)</span>
              </div>
              <p className="text-xs text-zinc-600 mt-4 mono uppercase">
                Est. 2024. San Francisco / London / Tokyo.
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-black flex flex-col items-center justify-center p-6 animate-in fade-in zoom-in duration-300">
          <button 
            className="absolute top-8 right-6 text-white"
            onClick={() => setMobileMenuOpen(false)}
          >
            <X className="w-8 h-8" />
          </button>
          <div className="flex flex-col items-center gap-8 text-center">
            {navLinks.map(link => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setMobileMenuOpen(false)}
                className="text-4xl font-bold tracking-tighter hover:text-indigo-500 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <button className="mt-8 bg-white text-black px-12 py-4 rounded-full font-bold text-xl">
              Initiate Project
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
