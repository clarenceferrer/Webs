import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/images/Gabailogo.png'

const defaultLinks = [
  { label: 'About', to: '/about' },
  { label: 'Demo', to: '/demo' },
  { label: 'How it works', to: '/how-it-works' },
]

function Navbar({ links = defaultLinks, ctaText = 'Caregiver Access', ctaTo = '/caregiver' }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="w-full bg-gradient-to-r from-[#a9c9df] via-[#7ec8d0] to-[#72cfd0]">
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3 sm:px-6 md:py-4 lg:px-8">
        <div className="flex items-center gap-6 md:gap-8 lg:gap-10">
          <Link to="/" className="shrink-0" onClick={() => setIsMenuOpen(false)}>
            <img src={logo} alt="GabAI" className="h-10 w-auto sm:h-11 md:h-12" />
          </Link>

          <div className="hidden items-center gap-7 md:flex lg:gap-8">
            {links.map((link) => (
              <NavLink
                key={link.label}
                to={link.to}
                className={({ isActive }) =>
                  `relative pb-1 text-lg leading-none transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-left after:bg-white after:transition-transform after:duration-300 after:content-[''] lg:text-xl ${
                    isActive
                      ? 'font-semibold text-white after:scale-x-100'
                      : 'text-[#27364d] hover:text-white after:scale-x-0 hover:after:scale-x-100'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-3 md:gap-4">
          <Link
            to={ctaTo}
            className="hidden rounded-full border border-white/70 px-5 py-2 text-sm font-bold text-white transition-all hover:bg-white hover:text-[#2e6e8a] sm:inline-flex md:px-7 md:text-base lg:text-lg"
          >
            {ctaText}
          </Link>

          <button
            type="button"
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation menu"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-white/60 text-white transition-colors hover:bg-white/20 md:hidden"
          >
            <span className="text-2xl leading-none">{isMenuOpen ? '×' : '≡'}</span>
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="border-t border-white/30 bg-[#70bfd0] md:hidden">
          <div className="mx-auto flex w-full max-w-7xl flex-col gap-2 px-4 py-3 sm:px-6 lg:px-8">
            {links.map((link) => (
              <NavLink
                key={link.label}
                to={link.to}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `rounded-md px-2 py-2 text-base font-medium hover:bg-white/30 ${
                    isActive ? 'bg-white/25 text-white' : 'text-[#1d3045] hover:text-white'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}

            <Link
              to={ctaTo}
              onClick={() => setIsMenuOpen(false)}
              className="mt-1 inline-flex w-full items-center justify-center rounded-full border border-white/70 px-5 py-2.5 text-sm font-bold text-white transition-all hover:bg-white hover:text-[#2e6e8a]"
            >
              {ctaText}
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
