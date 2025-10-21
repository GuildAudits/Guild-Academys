import { useTheme } from '../../theme/ThemeProvider'

export default function ApplyBanner() {
  const { isDark } = useTheme()

  return (
    <section className={`w-full ${isDark ? 'bg-black' : 'bg-white'}`}>
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-[28px] bg-green-600 text-white ">
          <div className="px-6 py-12 sm:py-16 flex flex-col sm:flex-row items-center justify-between gap-4">
            <h2 className="font-syne text-2xl sm:text-2xl md:text-2xl font-bold leading-tight text-center sm:text-left">
              Ready to secure your future in Web3?
            </h2>
            <button
              type="button"
              onClick={() => (window.location.hash = '#/apply')}
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-green-700 shadow-sm transition-colors hover:bg-white/90"
            >
              Enroll on Program <span aria-hidden>↗</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
