import { Link } from 'react-router-dom'
import Container from '../../components/ui/Container'
import PageHero from '../../components/ui/PageHero'
import CtaBand from '../../components/home/CtaBand'
import { serviceDetails, serviceOrder } from '../../data/services'

export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        meta="Web · CMS · SEO"
        title="Three services. One growth engine."
        intro="Everything you need to launch, manage, and scale your presence online — delivered by one focused team that treats your goals as its own."
      />

      <section className="pb-8">
        <Container>
          <div className="border-t border-border">
            {serviceOrder.map((slug) => {
              const s = serviceDetails[slug]
              return (
                <Link
                  key={slug}
                  to={`/services/${slug}`}
                  className="group grid grid-cols-1 items-start gap-6 border-b border-border py-10 transition-colors hover:bg-surface/40 md:grid-cols-12 md:gap-8 md:py-12"
                >
                  <div className="numeral text-3xl md:col-span-2 md:text-5xl">{s.n}</div>

                  <div className="md:col-span-5">
                    <h2 className="text-3xl font-bold transition-colors group-hover:text-brand md:text-5xl">
                      {s.title}
                    </h2>
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

                  <p className="text-muted md:col-span-4">{s.tagline}</p>

                  <div className="md:col-span-1 md:flex md:justify-end">
                    <span className="grid h-11 w-11 place-items-center rounded-full border border-border text-lg transition-all group-hover:border-brand group-hover:bg-brand group-hover:text-white">
                      <span className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                        ↗
                      </span>
                    </span>
                  </div>
                </Link>
              )
            })}
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  )
}
