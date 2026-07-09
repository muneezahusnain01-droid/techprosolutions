import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Container from '../ui/Container'
import Logo from '../ui/Logo'
import ThemeToggle from '../ui/ThemeToggle'
import { navLinks } from '../../data/site'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const linkClass = ({ isActive }) =>
    `text-[0.8rem] uppercase tracking-[0.12em] transition-colors ${
      isActive ? 'text-text' : 'text-muted hover:text-text'
    }`

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'border-b border-border bg-bg/70 backdrop-blur-xl' : 'border-b border-transparent'
      }`}
    >
      <Container>
        <nav className="flex h-16 items-center justify-between lg:h-20">
          <Link to="/" className="flex items-center" aria-label="TechProSolutions home">
            <Logo className="h-8 w-auto text-text" />
          </Link>

          <ul className="hidden items-center gap-10 lg:flex">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink to={link.to} className={linkClass} end={link.to === '/'}>
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <ThemeToggle />

            <Link
              to="/contact"
              className="group hidden items-center gap-2 text-[0.8rem] uppercase tracking-[0.12em] text-text lg:inline-flex"
            >
              Start a project
              <span className="grid h-8 w-8 place-items-center rounded-full border border-border transition-colors group-hover:border-brand group-hover:bg-brand group-hover:text-white">
                →
              </span>
            </Link>

            <button
              type="button"
              className="grid h-10 w-10 place-items-center text-text lg:hidden"
              aria-label="Toggle menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
            <span className="relative block h-4 w-6">
              <span
                className={`absolute left-0 block h-0.5 w-6 bg-current transition-transform ${
                  open ? 'top-1.5 rotate-45' : 'top-0'
                }`}
              />
              <span
                className={`absolute left-0 top-1.5 block h-0.5 w-6 bg-current transition-opacity ${
                  open ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`absolute left-0 block h-0.5 w-6 bg-current transition-transform ${
                  open ? 'top-1.5 -rotate-45' : 'top-3'
                }`}
              />
            </span>
            </button>
          </div>
        </nav>
      </Container>

      {open && (
        <div className="border-t border-border bg-bg lg:hidden">
          <Container className="py-8">
            <ul className="flex flex-col">
              {navLinks.map((link, i) => (
                <li key={link.to} className={i > 0 ? 'border-t border-border' : ''}>
                  <NavLink
                    to={link.to}
                    end={link.to === '/'}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `block py-4 font-display text-2xl ${
                        isActive ? 'text-text' : 'text-muted'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-8 inline-flex items-center gap-2 text-sm uppercase tracking-[0.12em] text-brand"
            >
              Start a project →
            </Link>
          </Container>
        </div>
      )}
    </header>
  )
}
