import { useState } from 'react';

export default function ProjectPreview({ url, title }: { url: string; title: string }) {
  const [status, setStatus] = useState<'loading' | 'loaded' | 'error'>('loading');

  if (!url) return null;

  return (
    <div className="rounded-lg overflow-hidden border border-taupe-200">
      <div className="flex items-center gap-1.5 bg-taupe-100 border-b border-taupe-200 px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-red-400/70" />
        <span className="h-2 w-2 rounded-full bg-yellow-400/70" />
        <span className="h-2 w-2 rounded-full bg-green-400/70" />
        <span className="ml-2 flex-1 rounded bg-white border border-taupe-200 px-2 py-0.5 text-[10px] text-taupe-400 truncate font-mono">{url}</span>
      </div>
      <div className="relative h-48 bg-taupe-100">
        {status === 'loading' && (
          <div className="absolute inset-0 flex items-center justify-center gap-2">
            <svg className="h-4 w-4 animate-spin text-crimson-600" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"/>
            </svg>
            <span className="text-[11px] text-taupe-400">Loading…</span>
          </div>
        )}
        {status === 'error' && (
          <a href={url} target="_blank" rel="noreferrer"
            className="absolute inset-0 flex flex-col items-center justify-center gap-2 hover:bg-taupe-200/40 transition-colors group">
            <span className="text-xl">🔒</span>
            <p className="text-[11px] font-semibold text-taupe-500 group-hover:text-crimson-600 transition-colors">Preview unavailable — Open ↗</p>
          </a>
        )}
        <iframe
          src={url}
          title={title}
          loading="lazy"
          onLoad={() => setStatus('loaded')}
          onError={() => setStatus('error')}
          className="absolute inset-0 w-full h-full border-0"
          style={{
            transform: 'scale(0.5)',
            transformOrigin: 'top left',
            width: '200%',
            height: '200%',
            pointerEvents: 'none',
            opacity: status === 'loaded' ? 1 : 0,
            transition: 'opacity 0.3s',
          }}
        />
      </div>
    </div>
  );
}
