
import React from 'react';

const GridBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <div 
        className="absolute inset-0 opacity-[0.03]" 
        style={{
          backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
    </div>
  );
};

export default GridBackground;
