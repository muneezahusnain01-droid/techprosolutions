import Section from './Section'
import Button from './Button'

/** Temporary scaffold for pages we build in later phases. */
export default function PagePlaceholder({ eyebrow, title, description, phase }) {
  return (
    <Section className="min-h-[60vh]">
      <div className="mx-auto max-w-2xl text-center">
        {eyebrow && (
          <span className="text-sm font-medium uppercase tracking-widest text-brand">
            {eyebrow}
          </span>
        )}
        <h1 className="mt-3 text-4xl font-bold sm:text-5xl">{title}</h1>
        {description && <p className="mt-5 text-lg text-muted">{description}</p>}
        {phase && (
          <p className="mt-6 inline-block rounded-full border border-border bg-surface px-4 py-1.5 text-xs text-muted">
            🚧 Coming in {phase}
          </p>
        )}
        <div className="mt-8 flex justify-center gap-3">
          <Button to="/">Back home</Button>
          <Button to="/contact" variant="outline">
            Contact us
          </Button>
        </div>
      </div>
    </Section>
  )
}
