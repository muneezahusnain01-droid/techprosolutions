import { Link } from 'react-router-dom'
import Container from '../ui/Container'
import Logo from '../ui/Logo'
import { brand, navLinks, services, socials } from '../../data/site'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border">
      <Container className="py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          {/* brand + statement */}
          <div className="lg:col-span-5">
            <Link to="/" className="inline-flex" aria-label="TechProSolutions home">
              <Logo className="h-9 w-auto text-text" />
            </Link>
            <p className="mt-6 max-w-sm text-lg leading-relaxed text-muted">
              A software development agency helping brands grow through web, CMS, and
              search.
            </p>
            <div className="mt-8 flex gap-3">
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

          <div className="lg:col-span-2 lg:col-start-7">
            <h4 className="eyebrow">Company</h4>
            <ul className="mt-5 space-y-3 text-sm">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-muted hover:text-text">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="eyebrow">Services</h4>
            <ul className="mt-5 space-y-3 text-sm">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link to={`/services/${s.slug}`} className="text-muted hover:text-text">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="eyebrow">Get in touch</h4>
            <ul className="mt-5 space-y-3 text-sm text-muted">
              <li>
                <a href={`mailto:${brand.email}`} className="hover:text-text">
                  {brand.email}
                </a>
              </li>
              <li>
                <a href={`tel:${brand.phone}`} className="hover:text-text">
                  {brand.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-xs text-muted sm:flex-row">
          <p>
            © {year} {brand.name}. All rights reserved.
          </p>
          <p>Built with React &amp; Tailwind.</p>
        </div>
      </Container>
    </footer>
  )
}
