import { Link } from 'react-router-dom'
import Container from '../ui/Container'
import { brand } from '../../data/site'

export default function CtaBand() {
  return (
    <section className="relative overflow-hidden border-t border-border py-28 lg:py-40">
      <Container className="relative text-center">
        <span className="eyebrow">Let's work together</span>
        <h2
          className="mx-auto mt-6 max-w-4xl font-display font-bold leading-[0.98] tracking-[-0.03em]"
          style={{ fontSize: 'var(--text-display)' }}
        >
          Ready to build
          <br />
          something <span className="italic text-brand">great?</span>
        </h2>

        <div className="mt-12 flex flex-col items-center justify-center gap-6 sm:flex-row">
          <Link
            to="/contact"
            className="group inline-flex items-center gap-6 rounded-full bg-brand px-8 py-4 text-sm font-medium uppercase tracking-[0.1em] text-white transition-transform hover:scale-[1.02]"
          >
            Start a project
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
          <a
            href={`mailto:${brand.email}`}
            className="text-sm uppercase tracking-[0.1em] text-muted underline-offset-8 hover:text-text hover:underline"
          >
            {brand.email}
          </a>
        </div>
      </Container>
    </section>
  )
}
