import Container from '../ui/Container'

const features = [
  {
    title: 'Senior engineers only',
    desc: 'Your project is handled by experienced developers — no juniors learning on your budget.',
  },
  {
    title: 'Results, not just deliverables',
    desc: 'We measure success in performance, rankings, and revenue — not lines of code.',
  },
  {
    title: 'Transparent process',
    desc: 'Clear timelines, weekly updates, and direct access to the people doing the work.',
  },
  {
    title: 'Built to scale',
    desc: 'Clean, maintainable architecture that grows with you — no costly rebuilds later.',
  },
  {
    title: 'SEO-first from day one',
    desc: 'Every site we ship is fast, semantic, and search-ready — not bolted on afterward.',
  },
  {
    title: 'Ongoing partnership',
    desc: 'We stick around after launch with maintenance, monitoring, and growth plans.',
  },
]

export default function WhyUs() {
  return (
    <section className="border-t border-border bg-surface/30 py-24 lg:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* sticky heading */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <span className="eyebrow">Why TechProSolutions</span>
              <h2
                className="mt-4 font-display font-bold"
                style={{ fontSize: 'var(--text-display-sm)' }}
              >
                An agency that acts like your in-house team.
              </h2>
              <p className="mt-6 max-w-sm text-muted">
                We combine engineering discipline with a growth mindset to ship work that
                actually moves the needle.
              </p>
            </div>
          </div>

          {/* hairline list */}
          <div className="lg:col-span-7">
            <div className="border-t border-border">
              {features.map((f, i) => (
                <div
                  key={f.title}
                  className="group grid grid-cols-[auto_1fr] gap-6 border-b border-border py-7"
                >
                  <span className="font-display text-sm text-accent">0{i + 1}</span>
                  <div>
                    <h3 className="text-xl font-semibold">{f.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
