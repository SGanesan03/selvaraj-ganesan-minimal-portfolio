import React from 'react';

export default function Label({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4 mb-10">
      <span className="font-mono text-[10px] font-medium tracking-[0.22em] uppercase text-taupe-400">{children}</span>
      <div className="flex-1 h-px bg-taupe-200" />
    </div>
  );
}
