import Container from '../ui/Container'

const tech = [
  'React',
  'Next.js',
  'TypeScript',
  'Node.js',
  'WordPress',
  'Tailwind',
  'PostgreSQL',
  'GraphQL',
  'AWS',
  'Vercel',
  'Figma',
  'Google Analytics',
]

export default function TechStack() {
  const loop = [...tech, ...tech]
  return (
    <section className="border-t border-border py-16">
      <Container>
        <p className="eyebrow text-center">The modern stack we build on</p>
      </Container>
      <div className="marquee-mask mt-8 overflow-hidden">
        <div className="animate-marquee flex w-max items-center gap-3 pr-3">
          {loop.map((t, i) => (
            <span
              key={`${t}-${i}`}
              className="whitespace-nowrap rounded-full border border-border px-5 py-2 text-sm text-muted"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
