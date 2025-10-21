import { useTheme } from '../theme/ThemeProvider'
import man2 from '../assets/landing/Black.png'

export default function WhyChoose() {
  const { isDark } = useTheme()
  return (
    <section className={`relative w-full ${isDark ? 'bg-black' : 'bg-white'}`}>
      <div className="mx-auto w-full px-6 py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 md:grid-cols-2">
          <div className=" ">
            <div className="overflow-hidden rounded-2xl  shadow-sm dark:border-neutral-800">
              <img src={man2} alt="Student at laptop" className="" />
            </div>
          </div>
          <div className="space-y-5 md:space-y-6">
            <p className="text-xs font-semibold uppercase tracking-wide text-green-600">Brand value</p>
            <h3 className={`font-bold leading-tight font-syne ${isDark ? 'text-white' : 'text-neutral-900'} text-4xl sm:text-5xl`}>
              Why choose Guild<br />Academy
            </h3>
            <div className={`${isDark ? 'text-neutral-300' : 'text-neutral-700'} text-sm sm:text-base space-y-4`}>
              <p>
                Guild Academy isn’t just another learning platform. It’s a movement for those who are ready to take charge
                of their growth and build skills that matter. Here, you’re not treated like just another student — you’re
                seen as a creator in progress. Our bootcamps are designed with intention: the kind of learning that feels
                human, personal, and results-driven.
              </p>
              <p>
                We don’t overwhelm you with theory. Instead, we focus on what actually works — practical lessons guided by
                mentors who’ve done it all before. You’ll grow through doing, thinking, failing, and trying again. And you’ll
                do it within a community of learners who are just as ambitious as you.
              </p>
            </div>
            {isDark ? (
              <a href="#" className="inline-flex items-center gap-2 rounded-full border border-green-600 bg-white px-5 py-2.5 text-sm font-semibold text-green-600 shadow-sm transition-colors hover:bg-green-50">
                Learn more about us <span aria-hidden>➜</span>
              </a>
            ) : (
              <a href="#" className="inline-flex items-center gap-2 rounded-full bg-green-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-green-500">
                Learn more about us <span aria-hidden>➜</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
