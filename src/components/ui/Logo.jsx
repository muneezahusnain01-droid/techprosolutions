/**
 * TPS wordmark (placeholder).
 *
 * The original blue logo doesn't suit the warm terracotta palette, so this is a
 * clean typographic mark using the current theme colours. When you have new
 * artwork, drop it in /public and swap the SVG for:
 *   <img src="/logo.svg" alt="TechProSolutions" className={className} />
 * "TPS" uses currentColor (ink); the accents use the terracotta brand tokens.
 */
export default function Logo({ className = 'h-8 w-auto' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 132 40"
      fill="none"
      role="img"
      aria-label="TechProSolutions"
      xmlns="http://www.w3.org/2000/svg"
    >
      <text
        x="2"
        y="30"
        fontFamily="'Space Grotesk', system-ui, sans-serif"
        fontWeight="700"
        fontStyle="italic"
        fontSize="30"
        letterSpacing="2"
        fill="currentColor"
      >
        TPS
      </text>
      <polygon points="94,7 120,7 114,16 88,16" fill="var(--color-brand)" />
      <polygon points="94,22 120,22 114,31 88,31" fill="var(--color-brand-700)" />
    </svg>
  )
}
