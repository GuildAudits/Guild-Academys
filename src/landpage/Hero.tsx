import { useTheme } from '../theme/ThemeProvider'
import man1 from '../assets/landing/man1.png'
import man2 from '../assets/landing/man2.png'
import man3 from '../assets/landing/man3.png'
import man4 from '../assets/landing/man4.png'
import man5 from '../assets/landing/man5.png'
import BlurText from '../components/BlurText'
import TextType from '../components/TextType'

export default function Hero() {
  const { isDark } = useTheme()

  return (
    <section className={`relative w-full overflow-hidden border-b ${isDark ? 'bg-black border-neutral-800' : 'bg-white border-neutral-200'}`}>
      {/* Background layer */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        {/* Dark: solid pure black. Light: soft white gradient with subtle glow/grid */}
        <div className={`${isDark ? 'bg-black' : 'bg-gradient-to-b from-white via-white to-white'} h-full w-full`} />
        {!isDark && (
          <>
            <div className="absolute inset-0 [background-image:radial-gradient(circle_at_center,rgba(16,185,129,0.08)_0,transparent_45%)]" />
            <div className="absolute inset-0 opacity-10 [background-image:linear-gradient(rgba(0,0,0,.06)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,.06)_1px,transparent_1px)]; [background-size:48px_48px]" />
          </>
        )}
        {isDark && (
          <>
            {/* Soft green glows on left and right (wider) */}
            <div className="absolute -left-48 top-24 h-[36rem] w-[36rem] rounded-full bg-green-500/25 blur-[140px]" />
            <div className="absolute -right-48 top-24 h-[36rem] w-[36rem] rounded-full bg-green-500/25 blur-[140px]" />
          </>
        )}
      </div>

      {/* Content */}
      <div className="relative mx-auto w-full px-6 pt-28 pb-10 text-center sm:pt-32 md:pt-36 md:pb-14">
        <div className='max-w-7xl text-center mx-auto'>
        <h1 className={`font-bold leading-tight tracking-tight font-syne ${isDark ? 'text-white' : 'text-gray-900'} text-4xl sm:text-5xl md:text-6xl`}>
          <BlurText as="span" text="Building the future of " animateBy="letters" direction="top" delay={40} />
          <BlurText as="span" text="Web3" animateBy="letters" className="text-green-600" direction="top" delay={40} />
          <br />
          <BlurText as="span" text="security from Africa" animateBy="letters" direction="bottom" delay={40} />
        </h1>

        <TextType
          as="p"
          className={`mx-auto mt-5 text-base sm:text-lg md:text-xl ${isDark ? 'text-neutral-300' : 'text-neutral-500'}`}
          text={
            'Guild Academy empowers young people worldwide with free, in-demand Web3\n' +
            'skills — offering hands-on security engineering training, mentorship from global\n' +
            'experts, scholarships, job opportunities, and a lifelong community rooted in Africa.'
          }
          startOnVisible
          showCursor={false}
          typingSpeed={24}
          deletingSpeed={18}
          loop={false}
        />
        </div>

        <div className="mt-8 flex w-full items-center justify-center">
          {isDark ? (
            <button
              type="button"
              onClick={() => (window.location.hash = '#/bootcamps')}
              className="inline-flex items-center gap-2 rounded-full border border-green-600 bg-white px-6 py-3 text-sm font-semibold text-green-600 shadow-sm transition-colors hover:bg-green-50"
            >
              Join Bootcamp
              <span aria-hidden>➜</span>
            </button>
          ) : (
            <button
              type="button"
              onClick={() => (window.location.hash = '#/bootcamps')}
              className="inline-flex items-center gap-2 rounded-full bg-green-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-green-500"
            >
              Join Bootcamp
              <span aria-hidden>➜</span>
            </button>
          )}
        </div>

        {/* Image row */}
        <div className="mt-12 grid w-full grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5 max-w-7xl mx-auto">
          {(() => {
            const images = [man1, man2, man3, man4, man5]
            const offsets = ['mt-6', '-mt-4', 'mt-10', '-mt-2', 'mt-8']
            return images.map((src, idx) => (
              <div
                key={idx}
                className={`aspect-[3/4] overflow-hidden rounded-xl shadow-sm ${offsets[idx]} ${isDark ? 'bg-black' : 'bg-white'}`}
              >
                <img src={src} alt="Guild Academy student" className="h-full w-full object-cover" />
              </div>
            ))
          })()}
        </div>
      </div>
    </section>
  )
}
