import { useEffect, useState } from 'react';
import { ACHIEVEMENTS, EDUCATION, EXPERIENCE, LANGUAGES, PROFILE, SKILLS } from './data/resumePortfolioData';
import GrafanaDemoPanel from './components/GrafanaDemoPanel';
import ProjectPreview from './components/ProjectPreview';
import Label from './components/Label';

/* ── Scroll reveal ── */
function useReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }),
      { threshold: 0.10 }
    );
    document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

const NAV_LINKS = [
  { href: '#experience', label: 'Experience' },
  { href: '#projects',   label: 'Projects'   },
  { href: '#skills',     label: 'Skills'     },
  { href: '#education',  label: 'Education'  },
];

export default function App() {
  useReveal();
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 32);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <div className="min-h-screen" style={{ background: '#F7F5F2', color: '#2B2F3A' }}>

      {/* ── Nav ── */}
      <header className={`sticky top-0 z-30 transition-all duration-300 ${scrolled ? 'border-b border-taupe-200 shadow-warm-sm backdrop-blur-md' : ''}`}
        style={scrolled ? { background: 'rgba(247,245,242,0.96)' } : { background: 'transparent' }}>
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">

          <a href="#top" className="flex items-center gap-3 group">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl font-display font-bold text-white text-[11px] select-none transition-all group-hover:shadow-crimson-glow"
              style={{ background: '#6A1022' }}>
              SG
            </span>
            <div>
              <p className="text-sm font-display font-bold tracking-tight leading-none" style={{ color: '#2B2F3A' }}>{PROFILE.name}</p>
              <p className="text-[10px] font-medium leading-none mt-0.5 text-taupe-400">{PROFILE.role}</p>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-0.5">
            {NAV_LINKS.map(({ href, label }) => (
              <a key={href} href={href}
                className="px-3.5 py-2 rounded-lg text-xs font-medium text-taupe-500 transition-all hover:text-navy-800 hover:bg-taupe-100">
                {label}
              </a>
            ))}
          </nav>

          <a href={`mailto:${PROFILE.email}`}
            className="hidden sm:inline-flex items-center gap-1.5 rounded-xl px-4 py-2 text-xs font-semibold text-white transition-all hover:shadow-crimson-glow"
            style={{ background: '#6A1022' }}>
            Hire Me →
          </a>
        </div>
      </header>

      {/* ── Hero ── */}
      <section id="top" className="relative overflow-hidden grain" style={{ background: '#2B2F3A' }}>
        <div className="absolute inset-0 bg-hero-lines" />
        <div className="absolute top-[-60px] left-[-40px] w-[500px] h-[380px] rounded-full opacity-25"
          style={{ background: 'radial-gradient(ellipse, #6A1022 0%, transparent 70%)', filter: 'blur(90px)' }} />
        <div className="absolute bottom-[-40px] right-0 w-[380px] h-[280px] rounded-full opacity-20"
          style={{ background: 'radial-gradient(ellipse, #B58D4F 0%, transparent 70%)', filter: 'blur(70px)' }} />

        <div className="relative mx-auto max-w-5xl px-6 pt-24 pb-28 sm:pt-32 sm:pb-36">

          <div className="h0 flex items-center gap-3 mb-8">
            <div className="h-px w-8 crimson-line" />
            <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-gold-400">Senior Frontend Developer · 5+ Years</span>
          </div>

          <div className="h1 mb-6">
            <h1 className="font-display font-extrabold leading-[0.95] tracking-tight">
              <span className="block text-white" style={{ fontSize: 'clamp(3rem, 8vw, 5.5rem)' }}>
                {PROFILE.name.split(' ')[0]}
              </span>
              <span className="block text-brand-grad" style={{ fontSize: 'clamp(3rem, 8vw, 5.5rem)' }}>
                {PROFILE.name.split(' ')[1]}
              </span>
            </h1>
          </div>

          {/* shortened punchy summary */}
          <p className="h2 text-sm leading-7 max-w-xl mb-10" style={{ color: '#C1B8AD' }}>
            Senior Frontend Developer with 5+ years building production-grade apps across fintech, industrial automation, and data visualisation.
            Delivered 45% load time gains, led 4-engineer teams, and secured platforms for 8,000+ users using React, Angular, TypeScript, and micro-frontend architectures.
          </p>

          <div className="h3 flex flex-wrap gap-3 mb-10">
            {[
              { n: '5+',      l: 'Years Experience' },
              { n: '4',       l: 'Companies'        },
              { n: 'React',   l: '& Angular Expert' },
              { n: 'Chennai', l: 'Tamil Nadu'        },
            ].map(({ n, l }) => (
              <div key={l} className="rounded-xl border px-5 py-3"
                style={{ borderColor: 'rgba(193,184,173,0.15)', background: 'rgba(193,184,173,0.07)' }}>
                <p className="font-display font-bold text-white text-lg leading-none">{n}</p>
                <p className="text-[10px] mt-1 tracking-wide" style={{ color: '#C1B8AD' }}>{l}</p>
              </div>
            ))}
          </div>

          <div className="h4 flex flex-wrap gap-2.5">
            <a href={`mailto:${PROFILE.email}`}
              className="inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-semibold text-white transition-all hover:shadow-gold-glow"
              style={{ background: '#B58D4F' }}>
              ✉ {PROFILE.email}
            </a>
            {[
              { href: `tel:${PROFILE.phone}`, label: PROFILE.phone },
              { href: PROFILE.linkedin, label: 'LinkedIn ↗', external: true },
              { href: PROFILE.github,   label: 'GitHub ↗',   external: true },
            ].map(({ href, label, external }) => (
              <a key={label} href={href} {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
                className="inline-flex items-center gap-2 rounded-xl border px-4 py-2.5 text-xs font-medium transition-all hover:border-gold-500 hover:text-white"
                style={{ borderColor: 'rgba(193,184,173,0.18)', color: '#C1B8AD' }}>
                {label}
              </a>
            ))}
            {/* availability badge */}
            <span className="inline-flex items-center gap-2 rounded-xl border px-4 py-2.5 text-xs font-medium"
              style={{ borderColor: 'rgba(115,191,105,0.35)', background: 'rgba(115,191,105,0.08)', color: '#73bf69' }}>
              <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
              Available · 90-day notice
            </span>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-20"
          style={{ background: 'linear-gradient(to top, #F7F5F2, transparent)' }} />
      </section>

      <main className="mx-auto max-w-5xl px-6 py-20 space-y-24">

        {/* ── Impact Numbers ── */}
        <section className="reveal">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {ACHIEVEMENTS.map((a) => (
              <div key={a.label} className="rounded-2xl border border-taupe-200 bg-white p-5 shadow-warm-sm text-center ring-brand transition-all duration-300">
                <p className="font-display font-extrabold text-2xl" style={{ color: '#6A1022' }}>{a.metric}</p>
                <p className="text-xs font-semibold mt-1" style={{ color: '#2B2F3A' }}>{a.label}</p>
                <p className="text-[10px] text-taupe-400 mt-0.5 leading-snug">{a.context}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Experience ── */}
        <section id="experience" className="reveal">
          <Label>Work Experience</Label>
          <div className="relative">
            <div className="absolute left-[10px] top-3 bottom-3 w-px"
              style={{ background: 'linear-gradient(to bottom, #6A1022, #C1B8AD, transparent)' }} aria-hidden />

            {EXPERIENCE.map((exp, i) => (
              <div key={`${exp.company}-${exp.period}`}
                className={`relative pl-10 pb-8 last:pb-0 reveal reveal-d${Math.min(i + 1, 5)}`}>

                <div className={`absolute left-0 top-2 h-5 w-5 rounded-full border-2 flex items-center justify-center ${i === 0 ? 'shadow-crimson-glow' : 'border-taupe-300 bg-white'}`}
                  style={i === 0 ? { background: '#6A1022', borderColor: '#6A1022' } : {}}>
                  {i === 0 && <span className="h-1.5 w-1.5 rounded-full bg-white" />}
                </div>

                <div className={`rounded-2xl border transition-all duration-300 ring-brand ${i === 0 ? 'grain shadow-dark-lift' : 'bg-white border-taupe-200 shadow-warm-sm'}`}
                  style={i === 0 ? { background: '#2B2F3A', borderColor: 'rgba(193,184,173,0.12)' } : {}}>

                  <div className="flex flex-wrap items-start justify-between gap-2 px-6 pt-6 pb-0">
                    <div>
                      <h3 className={`text-sm font-display font-bold leading-snug ${i === 0 ? 'text-white' : ''}`}
                        style={i !== 0 ? { color: '#2B2F3A' } : {}}>
                        {exp.role}
                      </h3>
                      <p className={`text-xs font-semibold mt-1 ${i === 0 ? 'text-gold-300' : 'text-crimson-600'}`}>
                        {exp.company} · {exp.location}
                      </p>
                    </div>
                    <span className="rounded-full px-3 py-0.5 text-[10px] font-mono font-medium shrink-0"
                      style={i === 0
                        ? { background: 'rgba(181,141,79,0.20)', border: '1px solid rgba(181,141,79,0.40)', color: '#D4B87A' }
                        : { background: '#f0ede9', color: '#7d7670' }}>
                      {exp.period}
                    </span>
                  </div>

                  <div className={`px-6 pt-5 pb-6 ${exp.demo ? 'md:grid md:grid-cols-2' : ''}`}>

                    <div className={exp.demo ? 'md:pr-6 md:border-r' : ''}
                      style={exp.demo ? { borderColor: i === 0 ? 'rgba(193,184,173,0.12)' : '#f0ede9' } : {}}>
                      <ul className="space-y-2.5">
                        {exp.bullets.map(b => (
                          <li key={b} className="flex gap-2.5 text-xs leading-relaxed"
                            style={{ color: i === 0 ? '#E8E4DF' : '#7d7670' }}>
                            <span className={`mt-1.5 h-1 w-1 shrink-0 rounded-full ${i === 0 ? 'bg-gold-400' : 'bg-crimson-600'}`} />
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {exp.demo && (
                      <div className="md:pl-6 mt-5 md:mt-0 pt-5 md:pt-0 border-t md:border-t-0"
                        style={{ borderColor: i === 0 ? 'rgba(193,184,173,0.12)' : '#f0ede9' }}>
                        <div className="flex items-center justify-between mb-3">
                          <p className="font-mono text-[10px] font-medium tracking-[0.18em] uppercase"
                            style={{ color: i === 0 ? '#B58D4F' : '#6A1022' }}>Demo</p>
                          <div className="flex flex-wrap gap-1.5">
                            {exp.demo.tech.map(t => (
                              <span key={t} className="rounded-full px-2 py-0.5 text-[10px] font-semibold"
                                style={i === 0
                                  ? { background: 'rgba(181,141,79,0.15)', border: '1px solid rgba(181,141,79,0.28)', color: '#d4b87a' }
                                  : { background: '#f0ede9', border: '1px solid #e2ddd7', color: '#5c5650' }}>{t}</span>
                            ))}
                          </div>
                        </div>
                        {exp.demo.name === 'grafana-industrial-plugins-demo'
                          ? <GrafanaDemoPanel />
                          : <ProjectPreview url={exp.demo.liveUrl} title={exp.demo.name} />}
                        <div className="flex items-center gap-2.5 mt-3 text-xs font-semibold">
                          {exp.demo.liveUrl && (
                            <a href={exp.demo.liveUrl} target="_blank" rel="noreferrer"
                              className="inline-flex items-center gap-1 rounded-xl px-3.5 py-2 text-white transition-all hover:shadow-crimson-glow"
                              style={{ background: '#6A1022' }}>
                              {exp.demo.name === 'grafana-industrial-plugins-demo' ? 'Open in Grafana ↗' : 'Live Preview ↗'}
                            </a>
                          )}
                          <a href={exp.demo.repoUrl} target="_blank" rel="noreferrer"
                            className="inline-flex items-center gap-1 rounded-xl border px-3.5 py-2 transition-all"
                            style={i === 0
                              ? { borderColor: 'rgba(193,184,173,0.20)', color: '#C1B8AD' }
                              : { borderColor: '#e2ddd7', color: '#5c5650' }}>Source ↗</a>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Projects ── */}
        <section id="projects" className="reveal">
          <Label>Projects</Label>
          <div className="grid gap-6 sm:grid-cols-2">

            {/* AutoMall Pro */}
            <article className="group flex flex-col rounded-2xl border border-taupe-200 bg-white shadow-warm-sm transition-all duration-300 ring-brand">
              <div className="relative overflow-hidden rounded-t-2xl grain px-5 pt-5 pb-4" style={{ background: '#2B2F3A' }}>
                <div className="absolute top-0 right-0 w-40 h-40 rounded-full opacity-20"
                  style={{ background: 'radial-gradient(ellipse, #6A1022, transparent)', filter: 'blur(40px)' }} />
                <div className="relative">
                  <div className="flex flex-wrap gap-1.5 mb-2.5">
                    {['React 18', 'TypeScript', 'Redux Toolkit', 'Tailwind CSS'].map(s => (
                      <span key={s} className="rounded-full px-2.5 py-0.5 text-[10px] font-semibold"
                        style={{ background: 'rgba(181,141,79,0.15)', border: '1px solid rgba(181,141,79,0.28)', color: '#d4b87a' }}>{s}</span>
                    ))}
                  </div>
                  <h3 className="text-sm font-display font-bold text-white leading-snug">AutoMall Pro — Vehicle Auction &amp; Lifecycle Workbench</h3>
                </div>
              </div>
              <div className="px-5 pt-4">
                <ProjectPreview url="https://sganesan03.github.io/automall-pro-auction-workbench/" title="AutoMall Pro" />
              </div>
              <div className="flex flex-col flex-1 px-5 py-4">
                <p className="text-xs text-taupe-400 leading-relaxed mb-3 italic">
                  Transaction-oriented bidding platform with post-auction vehicle lifecycle governance for NBFC institutions and RTO admins.
                </p>
                <ul className="space-y-2 flex-1 mb-4">
                  {[
                    'Persona-based RBAC (Bidder, Seller/NBFC, Ops Admin, RTO Admin) with field-level masking per role.',
                    'Optimistic bid state updates with automatic rollback on simulated payment gateway failures.',
                    'Debounced multi-facet filtering and real-time countdown state transitions across auction lots.',
                  ].map(b => (
                    <li key={b} className="flex gap-2.5 text-xs text-taupe-500 leading-relaxed">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-crimson-600" />{b}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center gap-2.5 border-t border-taupe-100 pt-4 text-xs font-semibold">
                  <a href="https://sganesan03.github.io/automall-pro-auction-workbench/" target="_blank" rel="noreferrer"
                    className="inline-flex items-center gap-1 rounded-xl px-3.5 py-2 text-white transition-all hover:shadow-crimson-glow"
                    style={{ background: '#6A1022' }}>Live Preview ↗</a>
                  <a href="https://github.com/sganesan03/automall-pro-auction-workbench" target="_blank" rel="noreferrer"
                    className="inline-flex items-center gap-1 rounded-xl border border-taupe-200 px-3.5 py-2 text-taupe-500 transition-all hover:border-taupe-400 hover:text-navy-800">Source ↗</a>
                </div>
              </div>
            </article>

            {/* Coming soon */}
            <article className="flex flex-col rounded-2xl border border-dashed border-taupe-300 bg-taupe-50 shadow-warm-sm items-center justify-center px-8 py-14 gap-3 text-center">
              <span className="text-2xl">🚧</span>
              <p className="font-display font-bold text-sm" style={{ color: '#2B2F3A' }}>Next Project</p>
              <p className="text-xs text-taupe-400 leading-relaxed">Currently in progress — will be showcased here soon.</p>
            </article>

          </div>
        </section>

        {/* ── Skills ── */}
        <section id="skills" className="reveal">
          <Label>Technical Skills</Label>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SKILLS.map((group, i) => (
              <div key={group.category}
                className={`rounded-2xl border p-5 transition-all duration-300 ring-brand reveal reveal-d${Math.min(i + 1, 5)} ${i === 0 ? 'grain shadow-dark-lift' : 'bg-white border-taupe-200 shadow-warm-sm'}`}
                style={i === 0 ? { background: '#2B2F3A', borderColor: 'rgba(193,184,173,0.12)' } : {}}>
                <p className={`mb-3 font-mono text-[10px] font-medium tracking-[0.18em] uppercase ${i === 0 ? 'text-gold-400' : 'text-crimson-600'}`}>
                  {group.category}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {group.items.map(item => (
                    <span key={item}
                      className={`rounded-full border px-2.5 py-0.5 text-[11px] font-medium ${i === 0 ? '' : 'text-taupe-600 bg-taupe-100 border-taupe-200'}`}
                      style={i === 0 ? { borderColor: 'rgba(193,184,173,0.30)', background: 'rgba(193,184,173,0.12)', color: '#E8E4DF' } : {}}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Education ── */}
        <section id="education" className="reveal">
          <Label>Education</Label>
          <div className="grid gap-4 sm:grid-cols-2">
            {EDUCATION.map((edu, i) => (
              <div key={edu.degree}
                className={`rounded-2xl border p-6 transition-all duration-300 ring-brand reveal reveal-d${i + 1} ${i === 0 ? 'grain shadow-dark-lift' : 'bg-white border-taupe-200 shadow-warm-sm'}`}
                style={i === 0 ? { background: '#2B2F3A', borderColor: 'rgba(193,184,173,0.12)' } : {}}>
                <div className="mb-3 h-0.5 w-10 rounded-full crimson-line" />
                <p className={`text-sm font-display font-bold leading-snug ${i === 0 ? 'text-white' : ''}`}
                  style={i !== 0 ? { color: '#2B2F3A' } : {}}>{edu.degree}</p>
                <p className="mt-1.5 text-xs" style={{ color: i === 0 ? '#C1B8AD' : '#a09890' }}>{edu.institution}</p>
                <p className="mt-2 font-mono text-[11px]" style={{ color: i === 0 ? '#B58D4F' : '#a09890' }}>{edu.period}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Languages ── */}
        <section id="languages" className="reveal">
          <Label>Languages</Label>
          <div className="flex flex-wrap gap-3">
            {LANGUAGES.map(lang => (
              <div key={lang.name} className="grain rounded-2xl border px-6 py-3.5 shadow-dark-lift flex items-center gap-2.5"
                style={{ background: '#2B2F3A', borderColor: 'rgba(193,184,173,0.12)' }}>
                <span className="h-2 w-2 rounded-full bg-gold-500" />
                <span className="font-display font-bold text-white text-sm">{lang.name}</span>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer className="relative overflow-hidden grain border-t"
        style={{ background: '#2B2F3A', borderColor: 'rgba(193,184,173,0.12)' }}>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[180px] opacity-15 rounded-full"
          style={{ background: 'radial-gradient(ellipse, #6A1022, transparent)', filter: 'blur(60px)' }} />
        <div className="relative mx-auto max-w-5xl px-6 py-10 flex flex-wrap items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl text-[11px] font-display font-bold text-white select-none"
              style={{ background: '#6A1022' }}>SG</span>
            <div>
              <p className="text-sm font-display font-bold text-white">{PROFILE.name}</p>
              <p className="text-[11px] text-taupe-400">{PROFILE.role}</p>
            </div>
          </div>
          <p className="text-xs text-taupe-500">{PROFILE.location}</p>
          <div className="flex items-center gap-5 text-xs font-medium">
            <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="text-taupe-400 hover:text-gold-400 transition-colors">LinkedIn</a>
            <a href={PROFILE.github}   target="_blank" rel="noreferrer" className="text-taupe-400 hover:text-gold-400 transition-colors">GitHub</a>
            <a href={`mailto:${PROFILE.email}`}        className="text-taupe-400 hover:text-gold-400 transition-colors">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
