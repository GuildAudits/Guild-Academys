import { useTheme } from '../theme/ThemeProvider'
import Airwallex from '../assets/landing/Airwallex_idPN8uDYVY_0 (1).png'
import Envestnet from '../assets/landing/Envestnet_idBO7XcT7C_0.png'
import Finanzfluss from '../assets/landing/Finanzfluss_idCpINJUTA_0.png'
import MoneyLion from '../assets/landing/MoneyLion_idltrgzkfr_0.png'
import Stocktwits from '../assets/landing/Stocktwits_Logo_0.png'
import CMC from '../assets/landing/CMC Markets_id_-hhGj54_0.png'

const logos: { src: string; alt: string }[] = [
    { src: Stocktwits, alt: 'Stocktwits' },
    { src: Envestnet, alt: 'Envestnet' },
    { src: Finanzfluss, alt: 'Finanzfluss' },
    { src: Airwallex, alt: 'Airwallex' },
    { src: MoneyLion, alt: 'MoneyLion' },
    { src: CMC, alt: 'CMC Markets' },
  ]

export default function PartnerCompanies() {
  const { isDark } = useTheme()

  return (
    <section className={`w-full ${isDark ? 'bg-black' : 'bg-white'}`}>
      <div className="mx-auto max-w-7xl px-6 py-10 sm:py-12">
        <h2
          className={`text-center text-base sm:text-lg font-semibold tracking-tight ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}
        >
          Our Partner Company
        </h2>

        {/* Marquee row of logos */}
        <div className="mt-8 sm:mt-10 marquee relative">
          {/* Fade edges for nicer look */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-white to-transparent dark:from-black" aria-hidden />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-white to-transparent dark:from-black" aria-hidden />

          <div className="marquee-track items-center gap-10">
            {/* Group A */}
            <div className="flex items-center gap-12 sm:gap-16 md:gap-20">
              {logos.map((logo) => (
                <img
                  key={`a-${logo.alt}`}
                  src={logo.src}
                  alt={logo.alt}
                  className=" opacity-70 hover:opacity-90 transition-opacity grayscale shrink-0"
                  draggable={false}
                />
              ))}
            </div>
            {/* Group B (duplicate, hidden from screen readers) */}
            <div className="flex items-center gap-12 sm:gap-16 md:gap-20" aria-hidden>
              {logos.map((logo) => (
                <img
                  key={`b-${logo.alt}`}
                  src={logo.src}
                  alt={logo.alt}
                  className=" opacity-70 hover:opacity-90 transition-opacity grayscale shrink-0"
                  draggable={false}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
