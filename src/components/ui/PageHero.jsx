import Container from './Container'

/**
 * Editorial page header used on inner pages (services, about, contact...).
 * eyebrow (left) + optional meta (right) sit over a hairline; then a big
 * display title and optional intro. Extra content passes through as children.
 */
export default function PageHero({ eyebrow, meta, title, intro, children }) {
  return (
    <section className="pt-6 lg:pt-10">
      <Container>
        <div className="flex items-center justify-between border-b border-border pb-5">
          <span className="eyebrow">{eyebrow}</span>
          {meta && <span className="eyebrow hidden sm:block">{meta}</span>}
        </div>

        <div className="py-12 lg:py-16">
          <h1
            className="max-w-4xl font-display font-bold leading-[1.02] tracking-[-0.03em]"
            style={{ fontSize: 'var(--text-display)' }}
          >
            {title}
          </h1>
          {intro && <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted">{intro}</p>}
          {children}
        </div>
      </Container>
    </section>
  )
}
