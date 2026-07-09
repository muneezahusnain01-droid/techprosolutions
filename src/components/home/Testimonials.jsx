import Container from '../ui/Container'

const featured = {
  quote:
    'TechProSolutions rebuilt our site and organic traffic doubled within four months. They think like partners, not vendors.',
  name: 'Sarah Whitman',
  role: 'CMO, Northwind',
}

const others = [
  {
    quote:
      'The custom CMS they built saved our editorial team hours every week. Clean, reliable, and genuinely a pleasure to use.',
    name: 'David Chen',
    role: 'Head of Content, Lumen',
  },
  {
    quote:
      'Fast, communicative, and technically excellent. Our web app launched on time and has been rock-solid since.',
    name: 'Priya Nair',
    role: 'Founder, Vertex',
  },
]

function Avatar({ name }) {
  const initials = name
    .split(' ')
    .map((w) => w[0])
    .join('')
  return (
    <span className="grid h-10 w-10 place-items-center rounded-full border border-border font-display text-sm text-muted">
      {initials}
    </span>
  )
}

export default function Testimonials() {
  return (
    <section className="border-t border-border py-24 lg:py-32">
      <Container>
        <span className="eyebrow">Testimonials</span>

        {/* featured pull quote */}
        <figure className="mt-8 border-b border-border pb-14">
          <blockquote
            className="max-w-4xl font-display font-medium leading-[1.1] tracking-[-0.02em]"
            style={{ fontSize: 'var(--text-display-sm)' }}
          >
            <span className="text-brand">“</span>
            {featured.quote}
            <span className="text-brand">”</span>
          </blockquote>
          <figcaption className="mt-8 flex items-center gap-3">
            <Avatar name={featured.name} />
            <span>
              <span className="block text-sm font-semibold text-text">{featured.name}</span>
              <span className="block text-xs text-muted">{featured.role}</span>
            </span>
          </figcaption>
        </figure>

        {/* supporting quotes */}
        <div className="grid gap-10 pt-14 md:grid-cols-2 md:gap-16">
          {others.map((t) => (
            <figure key={t.name}>
              <blockquote className="text-lg leading-relaxed text-text/90">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <Avatar name={t.name} />
                <span>
                  <span className="block text-sm font-semibold text-text">{t.name}</span>
                  <span className="block text-xs text-muted">{t.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  )
}
