import { Link } from 'react-router-dom'
import Container from '../ui/Container'

const items = [
  {
    n: '01',
    slug: 'web-development',
    title: 'Web Development',
    desc: 'High-performance websites and web apps built with modern stacks — fast, responsive, and built to convert.',
    tags: ['React / Next.js', 'Web apps', 'Core Web Vitals'],
  },
  {
    n: '02',
    slug: 'cms-development',
    title: 'CMS Development',
    desc: 'Custom content platforms your team actually enjoys — flexible, secure, and easy to manage without a developer.',
    tags: ['WordPress', 'Headless CMS', 'Editor workflows'],
  },
  {
    n: '03',
    slug: 'seo',
    title: 'SEO',
    desc: 'Data-driven search optimization that grows qualified organic traffic and turns rankings into revenue.',
    tags: ['Technical SEO', 'Content strategy', 'Analytics'],
  },
]

export default function ServicesOverview() {
  return (
    <section id="services" className="py-24 lg:py-32">
      <Container>
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="eyebrow">What we do</span>
            <h2
              className="mt-4 font-display font-bold"
              style={{ fontSize: 'var(--text-display-sm)' }}
            >
              Three services.
              <br />
              One growth engine.
            </h2>
          </div>
          <p className="max-w-sm text-muted md:text-right">
            Everything you need to launch, manage, and scale online — delivered by one
            focused team.
          </p>
        </div>

        {/* editorial list */}
        <div className="mt-16 border-t border-border">
          {items.map((s) => (
            <Link
              key={s.slug}
              to={`/services/${s.slug}`}
              className="group grid grid-cols-1 items-start gap-6 border-b border-border py-10 transition-colors hover:bg-surface/40 md:grid-cols-12 md:gap-8 md:py-12"
            >
              <div className="numeral text-3xl md:col-span-2 md:text-5xl">{s.n}</div>

              <div className="md:col-span-5">
                <h3 className="text-3xl font-bold transition-colors group-hover:text-brand md:text-5xl">
                  {s.title}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-accent/35 px-3 py-1 text-xs text-accent"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <p className="text-muted md:col-span-4">{s.desc}</p>

              <div className="md:col-span-1 md:flex md:justify-end">
                <span className="grid h-11 w-11 place-items-center rounded-full border border-border text-lg transition-all group-hover:border-brand group-hover:bg-brand group-hover:text-white">
                  <span className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    ↗
                  </span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  )
}
