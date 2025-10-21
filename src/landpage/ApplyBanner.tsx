import { useTheme } from '../theme/ThemeProvider'

export default function ApplyBanner() {
  const { isDark } = useTheme()

  return (
    <section className={`w-full ${isDark ? 'bg-black' : 'bg-white'}`}>
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-[28px] bg-green-600 text-white">
          <div className="mx-auto max-w-4xl px-6 py-12 sm:py-16 text-center">
            <h2 className="font-syne text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              Your journey to Web3
              <br className="hidden sm:block" />
              mastery begins today!
            </h2>
            <p className="mt-4 text-sm sm:text-base text-white/90">
              Whether you’re exploring a new path or deepening your current software engineering skills, Guild Academy is
              here to help you grow with purpose.
            </p>
            <div className="mt-8 flex justify-center">
              <button
                type="button"
                onClick={() => (window.location.hash = '#/apply')}
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-green-700 shadow-sm transition-colors hover:bg-white/90"
              >
                Apply now
                <span aria-hidden>↗</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
