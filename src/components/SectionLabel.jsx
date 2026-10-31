import React from 'react';

export default function SectionLabel({ 
  number = "01", 
  title = "CHAPTER", 
  dark = false,
  className = "" 
}) {
  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      <span 
        className={`w-6 h-[1px] transition-all duration-300 ${
          dark ? 'bg-[#171918]/40' : 'bg-[#A68A64]'
        }`} 
        aria-hidden="true" 
      />
      <div className="flex items-center gap-2">
        <span 
          className={`text-[10px] font-mono tracking-widest font-semibold ${
            dark ? 'text-[#171918]/60' : 'text-[#A68A64]'
          }`}
        >
          {number}
        </span>
        <span 
          className={`text-[11px] uppercase tracking-[0.28em] font-medium ${
            dark ? 'text-[#171918]/80' : 'text-[#D6CDBE]'
          }`}
        >
          {title}
        </span>
      </div>
    </div>
  );
}
