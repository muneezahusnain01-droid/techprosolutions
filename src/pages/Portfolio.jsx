import { Link } from 'react-router-dom'
import Container from '../components/ui/Container'
import PageHero from '../components/ui/PageHero'
import CtaBand from '../components/home/CtaBand'
import { projects } from '../data/projects'

export default function Portfolio() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        meta="Selected work"
        title="Work that moved the numbers."
        intro="A selection of recent projects across web, CMS, and SEO — each measured by the outcome it delivered, not just how it looks."
      />

      <section className="pb-8">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((p) => (
              <Link
                key={p.title}
                to="/contact"
                className="group relative flex h-80 flex-col justify-end overflow-hidden rounded-3xl border border-border p-8"
                style={{ background: p.art }}
              >
                {/* scrim */}
                <div
                  aria-hidden
                  className="absolute inset-0"
                  style={{
                    background:
                      'linear-gradient(to top, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.15) 55%, rgba(0,0,0,0.35) 100%)',
                  }}
                />
                <div className="relative">
                  <div className="flex items-center gap-3">
                    <span className="rounded-full border border-white/30 px-3 py-1 text-xs text-white/90">
                      {p.category}
                    </span>
                    <span className="text-xs text-white/60">{p.year}</span>
                  </div>
                  <h2 className="mt-4 font-display text-3xl font-bold text-white">
                    {p.title}
                  </h2>
                  <p className="mt-2 text-sm font-medium text-white/85">{p.result}</p>
                </div>
                <span className="absolute right-6 top-6 grid h-11 w-11 place-items-center rounded-full border border-white/30 text-white transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                  ↗
                </span>
              </Link>
            ))}
          </div>

          <p className="mt-10 text-center text-sm text-muted">
            Detailed case studies coming soon — want to see work relevant to your industry?{' '}
            <Link to="/contact" className="text-brand underline-offset-4 hover:underline">
              Just ask.
            </Link>
          </p>
        </Container>
      </section>

      <CtaBand />
    </>
  )
}
