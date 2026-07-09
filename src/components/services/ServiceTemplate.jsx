import { Link } from 'react-router-dom'
import Container from '../ui/Container'
import PageHero from '../ui/PageHero'
import CtaBand from '../home/CtaBand'
import { serviceDetails, serviceOrder } from '../../data/services'

export default function ServiceTemplate({ slug }) {
  const s = serviceDetails[slug]
  if (!s) return null

  const idx = serviceOrder.indexOf(slug)
  const nextSlug = serviceOrder[(idx + 1) % serviceOrder.length]
  const next = serviceDetails[nextSlug]

  return (
    <>
      <PageHero
        eyebrow={`Service — ${s.n}`}
        meta="Web · CMS · SEO"
        title={s.tagline}
        intro={s.intro}
      >
        <div className="mt-8 flex flex-wrap items-center gap-2">
          {s.tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-accent/35 px-3 py-1 text-xs text-accent"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-start gap-8 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <Link
            to="/contact"
            className="group inline-flex items-center gap-6 rounded-full bg-brand px-7 py-4 text-sm font-medium uppercase tracking-[0.1em] text-white transition-transform hover:scale-[1.02]"
          >
            Start a project
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
          <div>
            <div className="font-display text-4xl font-bold tracking-tight">
              {s.stat.value}
            </div>
            <div className="mt-1 max-w-[16rem] text-sm text-muted">{s.stat.label}</div>
          </div>
        </div>
      </PageHero>

      {/* What's included */}
      <section className="py-20 lg:py-28">
        <Container>
          <span className="eyebrow">What's included</span>
          <h2
            className="mt-4 max-w-2xl font-display font-bold"
            style={{ fontSize: 'var(--text-display-sm)' }}
          >
            Everything the engagement covers.
          </h2>

          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {s.deliverables.map((d) => (
              <div key={d.title} className="bg-bg p-8 transition-colors hover:bg-surface">
                <h3 className="text-lg font-semibold">{d.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{d.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Process */}
      <section className="border-t border-border bg-surface/30 py-20 lg:py-28">
        <Container>
          <span className="eyebrow">How it works</span>
          <h2
            className="mt-4 max-w-2xl font-display font-bold"
            style={{ fontSize: 'var(--text-display-sm)' }}
          >
            A clear path, start to finish.
          </h2>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {s.process.map((p) => (
              <div key={p.n} className="border-t border-border pt-6">
                <span className="numeral text-4xl">{p.n}</span>
                <h3 className="mt-6 text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{p.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Tools */}
      <section className="py-20 lg:py-28">
        <Container>
          <span className="eyebrow">Tools &amp; tech</span>
          <h2
            className="mt-4 max-w-2xl font-display font-bold"
            style={{ fontSize: 'var(--text-display-sm)' }}
          >
            Built with a proven stack.
          </h2>

          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {s.tools.map((group) => (
              <div key={group.group} className="bg-bg p-8">
                <div className="flex items-baseline justify-between">
                  <span className="eyebrow">{group.group}</span>
                  <span className="font-display text-xs text-muted">
                    {String(group.items.length).padStart(2, '0')}
                  </span>
                </div>
                <ul className="mt-6 space-y-4">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                      <span className="text-[0.95rem]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Next service */}
      <section className="border-t border-border py-16">
        <Container>
          <Link
            to={`/services/${next.slug}`}
            className="group flex items-center justify-between gap-6"
          >
            <div>
              <span className="eyebrow">Next service</span>
              <div className="mt-2 font-display text-2xl font-bold transition-colors group-hover:text-brand sm:text-4xl">
                {next.title}
              </div>
            </div>
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-border text-lg transition-all group-hover:border-brand group-hover:bg-brand group-hover:text-white">
              →
            </span>
          </Link>
        </Container>
      </section>

      <CtaBand />
    </>
  )
}
