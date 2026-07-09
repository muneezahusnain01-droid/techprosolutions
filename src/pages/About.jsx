import Container from '../components/ui/Container'
import PageHero from '../components/ui/PageHero'
import CtaBand from '../components/home/CtaBand'
import { team, values, aboutStats } from '../data/team'

function Avatar({ name }) {
  const initials = name
    .split(' ')
    .map((w) => w[0])
    .join('')
  return (
    <span className="grid h-12 w-12 place-items-center rounded-full border border-border font-display text-sm text-muted">
      {initials}
    </span>
  )
}

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About"
        meta="Est. 2016"
        title="A small team obsessed with outcomes."
        intro="TechProSolutions is a software development agency built on a simple idea: great engineering should move real business metrics. We stay small on purpose — senior people, direct communication, and work we're proud to put our name on."
      />

      {/* Stats */}
      <section className="pb-8">
        <Container>
          <div className="grid grid-cols-2 border-t border-border md:grid-cols-4">
            {aboutStats.map(([n, l], i) => (
              <div
                key={l}
                className={`py-8 ${i % 2 !== 0 ? 'border-l border-border pl-6 md:pl-8' : ''} ${
                  i !== 0 ? 'md:border-l md:border-border md:pl-8' : ''
                }`}
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

      {/* Story */}
      <section className="py-20 lg:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <div className="lg:sticky lg:top-28">
                <span className="eyebrow">Our story</span>
                <h2
                  className="mt-4 font-display font-bold"
                  style={{ fontSize: 'var(--text-display-sm)' }}
                >
                  Built to do fewer things, exceptionally well.
                </h2>
              </div>
            </div>
            <div className="space-y-6 text-lg leading-relaxed text-muted lg:col-span-7">
              <p>
                We started TechProSolutions after years of watching projects stall inside
                bloated agencies — layers of account managers, junior developers learning on
                the client's budget, and deliverables that looked busy but changed nothing.
              </p>
              <p>
                So we built the opposite. A focused team of senior engineers and designers
                who take a project from first conversation to measurable result. Three
                services — <span className="text-text">web development, CMS, and SEO</span> —
                because they compound: a fast site that's easy to manage and ranks well is
                worth far more than any one of those alone.
              </p>
              <p>
                Today we've shipped over 120 projects for teams who needed software that
                actually performs. We'd love for yours to be next.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="border-t border-border bg-surface/30 py-20 lg:py-28">
        <Container>
          <span className="eyebrow">What we value</span>
          <h2
            className="mt-4 max-w-2xl font-display font-bold"
            style={{ fontSize: 'var(--text-display-sm)' }}
          >
            The principles behind the work.
          </h2>
          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
            {values.map((v, i) => (
              <div key={v.title} className="bg-bg p-8">
                <span className="font-display text-sm text-accent">0{i + 1}</span>
                <h3 className="mt-5 text-xl font-semibold">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{v.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Team */}
      <section className="py-20 lg:py-28">
        <Container>
          <span className="eyebrow">The team</span>
          <h2
            className="mt-4 max-w-2xl font-display font-bold"
            style={{ fontSize: 'var(--text-display-sm)' }}
          >
            The people you'll actually work with.
          </h2>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((m) => (
              <div
                key={m.name}
                className="flex items-center gap-4 rounded-2xl border border-border bg-surface p-6"
              >
                <Avatar name={m.name} />
                <div>
                  <div className="font-semibold">{m.name}</div>
                  <div className="text-sm text-muted">{m.role}</div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  )
}
