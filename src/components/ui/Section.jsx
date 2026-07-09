import Container from './Container'

/**
 * A vertical page section with consistent padding.
 * Pass `full` to opt out of the inner Container (e.g. for edge-to-edge content).
 */
export default function Section({
  id,
  className = '',
  containerClassName = '',
  full = false,
  children,
}) {
  return (
    <section id={id} className={`py-16 sm:py-20 lg:py-28 ${className}`}>
      {full ? children : <Container className={containerClassName}>{children}</Container>}
    </section>
  )
}
