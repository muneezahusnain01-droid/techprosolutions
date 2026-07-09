import Container from '../components/ui/Container'
import PageHero from '../components/ui/PageHero'
import ContactForm from '../components/contact/ContactForm'
import { brand, socials } from '../data/site'

const steps = [
  ['01', 'We reply within a day', 'A real person reads your message and gets back within one business day.'],
  ['02', 'A quick discovery call', 'We learn about your goals and see if we’re the right fit — no pressure.'],
  ['03', 'A clear proposal', 'You get a scoped plan with timeline and pricing, ready to move forward.'],
]

export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        meta="Let's talk"
        title="Let's build something great."
        intro="Tell us about your project and we'll get back within one business day. No sales scripts — just a straight conversation about how we can help."
      />

      <section className="pb-24 lg:pb-32">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            {/* form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

            {/* details */}
            <aside className="lg:col-span-5">
              <div className="lg:sticky lg:top-28">
                <div className="rounded-2xl border border-border bg-surface p-8">
                  <span className="eyebrow">Reach us directly</span>
                  <ul className="mt-5 space-y-4">
                    <li>
                      <a href={`mailto:${brand.email}`} className="text-lg hover:text-brand">
                        {brand.email}
                      </a>
                    </li>
                    <li>
                      <a href={`tel:${brand.phone}`} className="text-lg hover:text-brand">
                        {brand.phone}
                      </a>
                    </li>
                  </ul>
                  <div className="mt-6 flex gap-3">
                    {socials.map((s) => (
                      <a
                        key={s.label}
                        href={s.href}
                        className="rounded-full border border-border px-4 py-1.5 text-xs text-muted transition-colors hover:border-brand hover:text-text"
                      >
                        {s.label}
                      </a>
                    ))}
                  </div>
                </div>

                <div className="mt-6">
                  <span className="eyebrow">What happens next</span>
                  <ol className="mt-5 space-y-6">
                    {steps.map(([n, title, desc]) => (
                      <li key={n} className="grid grid-cols-[auto_1fr] gap-4">
                        <span className="font-display text-sm text-accent">{n}</span>
                        <div>
                          <div className="font-semibold">{title}</div>
                          <p className="mt-1 text-sm leading-relaxed text-muted">{desc}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </>
  )
}
