import Container from '../ui/Container'

const steps = [
  {
    n: '01',
    title: 'Discover',
    desc: 'We dig into your goals, users, and market to define what success looks like.',
    art: 'radial-gradient(120% 90% at 20% 15%, #e0895a 0%, transparent 55%), radial-gradient(110% 100% at 85% 85%, #a24025 0%, transparent 55%), radial-gradient(90% 90% at 60% 40%, #6e2c1a 0%, transparent 70%), #2a130c',
    r: '-10deg',
    y: '1.5rem',
  },
  {
    n: '02',
    title: 'Design',
    desc: 'We map the architecture and craft interfaces that convert.',
    art: 'radial-gradient(120% 90% at 25% 20%, #3f9296 0%, transparent 55%), radial-gradient(110% 100% at 80% 80%, #1e5457 0%, transparent 55%), radial-gradient(90% 90% at 55% 45%, #13383a 0%, transparent 70%), #0b2325',
    r: '-4deg',
    y: '0.25rem',
  },
  {
    n: '03',
    title: 'Build',
    desc: 'Our engineers ship in fast, tested iterations — progress every week.',
    art: 'radial-gradient(120% 90% at 20% 20%, #e0b06a 0%, transparent 55%), radial-gradient(110% 100% at 82% 82%, #b57733 0%, transparent 55%), radial-gradient(90% 90% at 55% 45%, #7a4a1f 0%, transparent 70%), #241606',
    r: '4deg',
    y: '0.25rem',
  },
  {
    n: '04',
    title: 'Grow',
    desc: 'We launch, measure, and optimize — data into compounding results.',
    art: 'radial-gradient(120% 90% at 22% 18%, #a3a35c 0%, transparent 55%), radial-gradient(110% 100% at 80% 85%, #5f6b3a 0%, transparent 55%), radial-gradient(90% 90% at 58% 45%, #3d4423 0%, transparent 70%), #171a0d',
    r: '10deg',
    y: '1.5rem',
  },
]

export default function Process() {
  return (
    <section className="overflow-hidden py-24 lg:py-32">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">How we work</span>
          <h2
            className="mt-4 font-display font-bold"
            style={{ fontSize: 'var(--text-display-sm)' }}
          >
            From idea to measurable growth.
          </h2>
        </div>

        <div className="card-fan mt-16 lg:mt-20">
          {steps.map((s) => (
            <article
              key={s.n}
              className="fan-card group relative h-[22rem] w-64 shrink-0 overflow-hidden rounded-3xl border border-white/10 shadow-2xl shadow-black/60 sm:w-72"
              style={{ '--r': s.r, '--y': s.y, background: s.art }}
            >
              {/* darkening scrim for legible text */}
              <div
                aria-hidden
                className="absolute inset-0"
                style={{
                  background:
                    'linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.15) 45%, rgba(0,0,0,0.35) 100%)',
                }}
              />
              {/* number */}
              <span className="absolute left-5 top-5 font-display text-lg font-bold text-white/80">
                {s.n}
              </span>
              {/* title + desc */}
              <div className="absolute inset-x-5 bottom-5">
                <h3 className="font-display text-2xl font-bold text-white">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/75">{s.desc}</p>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-14 text-center text-sm text-muted lg:mt-16">
          Hover a step to bring it into focus.
        </p>
      </Container>
    </section>
  )
}
