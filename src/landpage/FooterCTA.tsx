import { useTheme } from '../theme/ThemeProvider'
import logo from '../assets/landing/Logo.png'
import Facebook from '../assets/landing/Facebook.png'
import Instagram from '../assets/landing/insta.png'
import LinkedIn from '../assets/landing/Linkdin.png'

export default function FooterCTA() {
  const { isDark } = useTheme()

  return (
    <footer className={`w-full ${isDark ? 'bg-black' : 'bg-white'}`}>
      <div className="mx-auto max-w-7xl px-6 py-8">
        {/* Top row */}
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-center sm:justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src={logo} alt="Guild Academy logo" className="h-7 w-auto" />
            <span
              className={`text-2xl font-syne font-bold ${
                isDark ? 'text-white' : 'text-neutral-900'
              }`}
            >
              Guild Academy
            </span>
          </div>

          {/* Center nav */}
          <nav
            className={`flex flex-wrap items-center justify-center gap-6 text-[18px] ${
              isDark ? 'text-neutral-300' : 'text-neutral-600'
            }`}
          >
            <a href="#" className="hover:text-green-500 transition">Home</a>
            <a href="#" className="hover:text-green-500 transition">Bootcamp</a>
            <a href="#" className="hover:text-green-500 transition">Testimonials</a>
            <a href="#" className="hover:text-green-500 transition">Events</a>
            <a href="#" className="hover:text-green-500 transition">About us</a>
          </nav>

          {/* Social Media Icons (Using imported images) */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              aria-label="Facebook"
              className="transition hover:opacity-80"
            >
              <img
                src={Facebook}
                alt="Facebook"
                className="h-7 w-7 object-contain"
              />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="transition hover:opacity-80"
            >
              <img
                src={Instagram}
                alt="Instagram"
                className="h-7 w-7 object-contain"
              />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="transition hover:opacity-80"
            >
              <img
                src={LinkedIn}
                alt="LinkedIn"
                className="h-7 w-7 object-contain"
              />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div
          className={`mt-6 border-t ${
            isDark ? 'border-neutral-800' : 'border-neutral-200'
          }`}
        />

        {/* Bottom note */}
        <p
          className={`mt-4 text-center text-[16px] ${
            isDark ? 'text-neutral-400' : 'text-neutral-500'
          }`}
        >
          ©{new Date().getFullYear()} Guild Academy. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
