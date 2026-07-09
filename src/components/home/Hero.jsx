import { Link } from 'react-router-dom'
import Container from '../ui/Container'

const stats = [
  ['120+', 'Projects shipped'],
  ['8', 'Years in business'],
  ['98%', 'Client satisfaction'],
  ['3', 'Core services'],
]

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-6 lg:pt-10">
      <Container className="relative">
        {/* top meta row */}
        <div className="animate-fade-up flex items-center justify-between border-b border-border pb-5">
          <span className="eyebrow">Software Development Agency</span>
          <span className="hidden rounded-full border border-accent/40 px-3 py-1 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-accent sm:block">
            Web · CMS · SEO
          </span>
        </div>

        {/* giant editorial headline */}
        <div className="animate-fade-up py-14 lg:py-20 [animation-delay:80ms]">
          <h1
            className="font-display font-bold leading-[0.98] tracking-[-0.03em]"
            style={{ fontSize: 'var(--text-display)' }}
          >
            We build software
            <br />
            that <span className="italic text-brand">grows</span> your
            <br />
            business.
          </h1>

          <div className="mt-12 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <p className="max-w-md text-lg leading-relaxed text-muted">
              Fast websites, custom CMS platforms, and SEO that ranks — engineered by a
              focused team obsessed with measurable results.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-between gap-6 rounded-full bg-brand px-7 py-4 text-sm font-medium uppercase tracking-[0.1em] text-white transition-transform hover:scale-[1.02]"
              >
                Start a project
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
              <Link
                to="/services"
                className="group inline-flex items-center gap-3 px-2 text-sm font-medium uppercase tracking-[0.1em] text-muted transition-colors hover:text-text"
              >
                Explore services
                <span className="h-px w-8 bg-current transition-all group-hover:w-12" />
              </Link>
            </div>
          </div>
        </div>

        {/* editorial stats row */}
        <div className="animate-fade-up grid grid-cols-2 border-t border-border md:grid-cols-4 [animation-delay:160ms]">
          {stats.map(([n, l], i) => (
            <div
              key={l}
              className={`py-8 ${
                i !== 0 ? 'md:border-l md:border-border md:pl-8' : 'md:pl-0'
              } ${i % 2 !== 0 ? 'border-l border-border pl-6 md:pl-8' : ''}`}
            >
              <div className="font-display text-4xl font-bold tracking-tight lg:text-5xl">
                {n}
              </div>
              <div className="mt-2 text-sm text-muted">{l}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
