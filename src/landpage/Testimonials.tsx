import { useTheme } from '../theme/ThemeProvider'
import memoji1 from '../assets/landing/memoji (1).png'
import memoji2 from '../assets/landing/memoji (2).png'
import memoji3 from '../assets/landing/memoji (3).png'
import memoji4 from '../assets/landing/memoji (4).png'
import memoji5 from '../assets/landing/memoji (5).png'
import memoji6 from '../assets/landing/memoji (6).png'
import memoji7 from '../assets/landing/memoji (7).png'
import memoji8 from '../assets/landing/memoji (8).png'
import memoji9 from '../assets/landing/memoji.png'

function HeaderBadge() {
  return (
    <div className="mx-auto mb-3 flex items-center justify-center gap-2 text-green-600">
      <span className="inline-block h-1.5 w-1.5 rotate-45 rounded-[2px] bg-green-600" />
      <span className="text-xs font-semibold tracking-widest">SUCCESS STORIES</span>
    </div>
  )
}

function AvatarRow({ name, role, avatar }: { name: string; role: string; avatar: string }) {
  return (
    <div className="mt-5 flex items-center gap-3">
      <img src={avatar} alt={name} className="h-10 w-10 rounded-full object-cover" />
      <div>
        <p className="text-sm font-semibold text-neutral-900 dark:text-white">{name}</p>
        <p className="text-xs text-neutral-500 dark:text-neutral-400">{role}</p>
      </div>
    </div>
  )
}

function StarRating() {
  return (
    <div className="mb-3 flex items-center gap-1 text-green-600">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4" aria-hidden>
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.803 2.037a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.803-2.037a1 1 0 00-1.176 0l-2.803 2.037c-.784.57-1.84-.197-1.54-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.88 8.72c-.783-.57-.38-1.81.588-1.81H6.93a1 1 0 00.95-.69l1.17-3.292z" />
        </svg>
      ))}
    </div>
  )
}

function TestimonialCard({ text, name, role, avatar }: { text: string; name: string; role: string; avatar: string }) {
  const { isDark } = useTheme()
  return (
    <div className={`flex h-[220px] sm:h-[240px] lg:h-[260px] flex-col rounded-2xl border p-6 sm:p-7 shadow-sm ${isDark ? 'border-neutral-800 bg-transparent' : 'border-green-200 bg-green-50'}`}>
      <StarRating />
      <p className={`${isDark ? 'text-neutral-300' : 'text-neutral-700'} text-[16px] sm:text-[17px] leading-relaxed clamp-3 mt-1 sm:mt-2 mb-4 flex-1`}>{text}</p>
      <div className="mt-auto">
        <AvatarRow name={name} role={role} avatar={avatar} />
      </div>
    </div>
  )
}

export default function Testimonials() {
  const { isDark } = useTheme()

  const items = [
    {
      text:
        "Before Guild Academy, blockchain sounded like something only tech bros in Silicon Valley understood. But this course made it real for me. I now understand how blocks work, how consensus is achieved, and I can explain decentralization to others.",
      name: 'Adeleyo Daniel',
      role: 'Product Designer',
      avatar: memoji1,
    },
    {
      text:
        "I’m a digital designer, and I wanted to explore new ways to showcase and sell my art. This course opened my eyes to what’s possible with Web3.",
      name: 'Adeleyo Daniel',
      role: 'Product Designer',
      avatar: memoji2,
    },
    {
      text:
        "I came to Guild Academy with no coding background, just a curiosity about blockchain. The basics course didn’t require a tech background — they explained everything in simple terms and used lots of real-life examples. It demystified the blockchain world for me.",
      name: 'Obinna Nwachukwu',
      role: 'Product Designer',
      avatar: memoji3,
    },
    {
      text:
        "Guild Academy completely changed how I see the internet and programming. I came in with zero knowledge about Web3, but the instructors broke things down in a way that felt accessible and exciting.",
      name: 'Amaka Okon',
      role: 'Product Designer',
      avatar: memoji4,
    },
    {
      text:
        "The Web3 Development bootcamp gave me structure and confidence. I’ve taken many online courses before, but Guild Academy felt different — more engaging, more supportive. I loved that we worked on real projects that simulated actual developer tasks",
      name: 'Adeleyo Daniel',
      role: 'Product Designer',
      avatar: memoji5,
    },
    {
      text:
        "Guild Academy is more than just an online learning platform — it’s a launchpad for young Africans looking to shape their future with skills that matter.",
      name: 'Adeleyo Daniel',
      role: 'Product Designer',
      avatar: memoji6,
    },
    {
      text:
        "The community is my favorite part. I met amazing people, collaborated on real projects, and even got a mentor!",
      name: 'Ganiyat Oladipupo',
      role: 'Product Designer',
      avatar: memoji7,
    },
    {
      text:
        "What stood out for me was how financial concepts I already understood were being reimagined in DeFi. It was thrilling! I now use this knowledge to educate others on financial inclusion and even started a DeFi‑focused podcast",
      name: 'Toyin Alode',
      role: 'Product Designer',
      avatar: memoji8,
    },
    {
      text:
        "What stood out for me was how financial concepts I already understood were being reimagined in DeFi. It was thrilling! I now use this knowledge to educate others on financial inclusion and even started a DeFi‑focused podcast",
      name: 'Adeleyo Daniel',
      role: 'Product Designer',
      avatar: memoji9,
    },
  ]

  return (
    <section className={`relative w-full ${isDark ? 'bg-black' : 'bg-white'}`}>
      <div className="mx-auto w-full max-w-7xl px-6 py-20 space-y-8 sm:space-y-10">
        <div className="text-center">
          <HeaderBadge />
          <h3 className={`font-syne font-bold sm:text-5xl text-4xl ${isDark ? 'text-white' : 'text-neutral-900'}`}>Our Alumni’s success stories</h3>
          <p className={`${isDark ? 'text-neutral-300' : 'text-neutral-600'} mt-3 text-sm sm:text-base`}>
            Hear directly from learners who’ve experienced Guild Academy. From unlocking new skills to landing real opportunities, their journeys speak for themselves.
          </p>
        </div>

        {(() => {
          // Distribute testimonials into 2 rows for horizontal marquee
          const rows: typeof items[] = [[], []]
          items.forEach((it, i) => rows[i % 2].push(it))

          const durations = ['42s', '48s']
          const directions: Array<'normal' | 'reverse'> = ['normal', 'reverse']

          return rows.map((row, rowIdx) => (
            <div key={rowIdx} className="marquee relative">
              {/* Edge fades (light theme only) */}
              {!isDark && (
                <>
                  <div
                    className="pointer-events-none absolute inset-y-0 left-0 z-10"
                    style={{ width: '6rem', background: 'linear-gradient(to right, rgba(255,255,255,1), rgba(255,255,255,0))' }}
                    aria-hidden
                  />
                  <div
                    className="pointer-events-none absolute inset-y-0 right-0 z-10"
                    style={{ width: '6rem', background: 'linear-gradient(to left, rgba(255,255,255,1), rgba(255,255,255,0))' }}
                    aria-hidden
                  />
                </>
              )}
              <div
                className="marquee-track flex items-stretch gap-6"
                style={{ animationDuration: durations[rowIdx % durations.length], animationDirection: directions[rowIdx % directions.length] }}
              >
                {[...row, ...row].map((it, idx) => (
                  <div key={`${rowIdx}-${idx}`} className="w-[320px] sm:w-[360px]">
                    <TestimonialCard text={it.text} name={it.name} role={it.role} avatar={it.avatar} />
                  </div>
                ))}
              </div>
            </div>
          ))
        })()}
      </div>
    </section>
  )
}
