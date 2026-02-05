
import React, { useState } from 'react';
import { assessProjectAlignment } from '../services/geminiService';
import { ProjectAssessment } from '../types';
import { Loader2, ArrowRight, ShieldCheck, ShieldAlert, Sparkles } from 'lucide-react';

const Gatekeeper: React.FC = () => {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [assessment, setAssessment] = useState<ProjectAssessment | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    setLoading(true);
    const result = await assessProjectAlignment(input);
    setAssessment(result);
    setLoading(false);
  };

  return (
    <section id="gatekeeper" className="py-24 px-6 max-w-4xl mx-auto relative z-10">
      <div className="border border-white/10 bg-white/[0.02] backdrop-blur-sm p-8 md:p-12 rounded-2xl">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
          <span className="mono text-xs uppercase tracking-widest text-indigo-400">Project Feasibility Check</span>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">
          Will we build it?
        </h2>
        
        <p className="text-zinc-400 text-lg mb-10 leading-relaxed max-w-2xl">
          We reject 90% of requests. Use our neural gateway to see if your vision aligns with our selective craftsmanship.
        </p>

        {!assessment ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Tell us about the complexity, the vision, and the 'why' behind your project..."
              className="w-full bg-black/40 border border-white/10 rounded-xl p-6 h-48 focus:outline-none focus:border-indigo-500/50 transition-colors text-white placeholder:text-zinc-600 resize-none text-lg"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className={`group flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-bold transition-all disabled:opacity-50 disabled:cursor-not-allowed ${loading || !input.trim() ? "" : "hover:bg-indigo-500 hover:text-white"}`}
            >
              {loading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <>
                  Inquire
                  <ArrowRight className={`w-5 h-5 ${loading || !input.trim() ? "" : "group-hover:translate-x-1"} transition-transform`} />
                </>
              )}
            </button>
          </form>
        ) : (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border ${
              assessment.alignment === 'High' ? 'border-emerald-500/30 bg-emerald-500/5 text-emerald-400' :
              assessment.alignment === 'Medium' ? 'border-amber-500/30 bg-amber-500/5 text-amber-400' :
              'border-rose-500/30 bg-rose-500/5 text-rose-400'
            }`}>
              {assessment.alignment === 'High' ? <Sparkles className="w-4 h-4" /> : 
               assessment.alignment === 'Medium' ? <ShieldCheck className="w-4 h-4" /> : 
               <ShieldAlert className="w-4 h-4" />}
              <span className="mono text-sm uppercase tracking-wider">{assessment.alignment} Alignment Potential</span>
            </div>

            <div className="space-y-4">
              <div className="flex items-baseline gap-4">
                <span className="text-6xl font-bold text-white">{assessment.score}</span>
                <span className="text-zinc-500 text-xl font-medium tracking-widest uppercase">/ 100</span>
              </div>
              <p className="text-xl text-zinc-300 leading-relaxed italic">
                "{assessment.reasoning}"
              </p>
            </div>

            <button
              onClick={() => { setAssessment(null); setInput(''); }}
              className="text-zinc-500 hover:text-white transition-colors mono text-sm flex items-center gap-2"
            >
              <ArrowRight className="w-4 h-4 rotate-180" />
              New Inquiry
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gatekeeper;
