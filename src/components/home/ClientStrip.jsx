import Container from '../ui/Container'

const clients = ['Northwind', 'PayKick', 'Lumen', 'Vertex', 'Cloudline', 'Motus', 'Brightly', 'Ketchup']

export default function ClientStrip() {
  const loop = [...clients, ...clients]
  return (
    <section className="border-y border-border py-12">
      <Container>
        <p className="eyebrow text-center">Trusted by teams building great products</p>
      </Container>
      <div className="marquee-mask mt-8 overflow-hidden">
        <div className="animate-marquee flex w-max items-center gap-16 pr-16">
          {loop.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="whitespace-nowrap font-display text-2xl font-semibold text-muted/50"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
