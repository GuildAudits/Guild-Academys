import { useTheme } from '../theme/ThemeProvider'
import type { ReactNode } from 'react'
import man3 from '../assets/landing/Laptop.png'

type Step = {
  title: string
  desc: string
  icon: ReactNode
}

const Bullet = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-start gap-4">
    <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-neutral-300 text-neutral-500 dark:border-neutral-700 dark:text-neutral-300">
      {children}
    </div>
  </div>
)

export default function BootcampProcess() {
  const { isDark } = useTheme()

  const steps: Step[] = [
    {
      title: 'Choose your track',
      desc:
        'Select from beginner‑friendly courses in Web3, Product Design, Data Analysis, Digital Marketing, and more.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-4 w-4">
          <rect x="3" y="4" width="18" height="14" rx="2" />
          <path d="M3 8h18" />
        </svg>
      ),
    },
    {
      title: 'Join a Bootcamp',
      desc:
        'Learn alongside peers in structured cohorts with weekly live classes and tasks. Hands‑on learning.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-4 w-4">
          <path d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5Z" />
          <path d="M20 21a8 8 0 0 0-16 0" />
        </svg>
      ),
    },
    {
      title: 'Hands on Learning',
      desc:
        'Work on real‑world projects, receive mentor feedback, and build your portfolio. Get Certified & Go Pro.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-4 w-4">
          <path d="m9 12 2 2 4-4" />
          <path d="M21 12a9 9 0 1 1-9-9" />
        </svg>
      ),
    },
    {
      title: 'Get Certification after bootcamp',
      desc:
        'Receive a recognized certificate and unlock job‑readiness support or internship pathways.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-4 w-4">
          <path d="M12 2v20" />
          <path d="M7 7h10v6H7z" />
        </svg>
      ),
    },
  ]

  return (
    <section className={`relative w-full space-y-8 ${isDark ? 'bg-black' : 'bg-white'}`}>
      <div className="mx-auto w-full px-6 py-16 space-y-8">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center ">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-green-600">bootcamp process</p>
          <h2 className={`font-bold leading-tight font-syne  ${isDark ? 'text-white' : 'text-neutral-900'} text-4xl sm:text-5xl`}>
            How Guild
            <br />
            Academy
            <br />
            bootcamp works
          </h2>
          <p className={`mt-4  text-[18px] sm:text-[20px] ${isDark ? 'text-neutral-300' : 'text-neutral-600'}`}>
            At Guild Academy, learning is not just about watching videos or memorizing <br/> slides it’s a journey that’s
            structured, supportive, and full of momentum.
          </p>
        </div>

        {/* Content grid */}
        <div className="mt-10 flex gap-20 max-w-7xl justify-center mx-auto">
          {/* Steps list */}
          <div className="space-y-8">
            {steps.map((s, i) => (
              <div key={i} className="flex items-start gap-4">
                <Bullet>{s.icon}</Bullet>
                <div className="">
                  <h3 className={`text-[24px] sm:text-[26px] font-semibold ${isDark ? 'text-white' : 'text-neutral-900'}`}>{s.title}</h3>
                  <p className={`mt-1 text-[18px] leading-relaxed ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>{s.desc}</p>
                </div>
              </div>
            ))}

            
          </div>

          {/* Image card */}
          <div className="flex justify-center ">
            <div className="overflow-hidden rounded-2xl b shadow-sm ">
              <img src={man3} alt="Student working on laptop" className="" />
            </div>
          </div>
          
        </div>
        <div className="pt-2 flex justify-center mt-8">
              {isDark ? (
                <a href="#" className="inline-flex items-center gap-2 rounded-full border border-green-600 bg-white px-5 py-2.5 text-sm font-semibold text-green-600 shadow-sm transition-colors hover:bg-green-50">
                  Explore bootcamp <span aria-hidden>➜</span>
                </a>
              ) : (
                <a href="#" className="inline-flex items-center gap-2 rounded-full bg-green-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-green-500">
                  Explore bootcamp <span aria-hidden>➜</span>
                </a>
              )}
            </div>
      </div>
    </section>
  )
}
