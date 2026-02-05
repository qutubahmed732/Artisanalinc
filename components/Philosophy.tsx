
import React from 'react';
import { Eye, ShieldX, Zap } from 'lucide-react';

const Philosophy: React.FC = () => {
  const values = [
    {
      icon: <ShieldX className="w-6 h-6" />,
      title: "Commercial Defiance",
      description: "We refuse to build standard software for high-margin gains. We only say yes when the problem is worth solving."
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Architectural Purity",
      description: "Code is our medium, but architecture is our soul. Every line is intentional, every system is a masterpiece."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Limited Engagement",
      description: "We maintain a maximum of three concurrent projects. This ensures your vision has our undivided collective consciousness."
    }
  ];

  return (
    <section id="philosophy" className="py-24 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <span className="mono text-xs uppercase tracking-[0.3em] text-indigo-500 block mb-4">Our Ethos</span>
          <h2 className="text-4xl md:text-7xl font-bold tracking-tight max-w-4xl">
            The art of saying <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-white">no.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12 md:gap-24">
          {values.map((v, i) => (
            <div key={i}>
              <div className="mb-8 text-indigo-500 transition-transform duration-500">
                {v.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 tracking-tight">{v.title}</h3>
              <p className="text-zinc-500 leading-relaxed text-lg">
                {v.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
