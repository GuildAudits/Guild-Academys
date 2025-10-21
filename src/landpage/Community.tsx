import { useTheme } from '../theme/ThemeProvider'
import logo from '../assets/landing/Logo.png'

function GradientTile({ align = 'left' }: { align?: 'left' | 'right' }) {
  return (
    <div className={`relative overflow-hidden rounded-2xl bg-white shadow-sm dark:bg-neutral-900 ${align === 'left' ? 'order-1' : 'order-2'} md:order-none`}>
      <div className="h-[240px] w-full sm:h-[280px] md:h-[320px]">
        <div className="relative h-full w-full rounded-2xl">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-sky-200 via-blue-200 to-sky-300 dark:from-sky-400/20 dark:via-blue-400/10 dark:to-sky-400/20" />
          <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/50 dark:ring-white/10" />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl bg-white/80 p-2 shadow-sm backdrop-blur">
            <img src={logo} alt="logo" className="h-8 w-8" />
          </div>
        </div>
      </div>
    </div>
  )
}

function Card({
  title,
  desc,
  cta,
  imageLeft = true,
}: {
  title: string
  desc: string
  cta: string
  imageLeft?: boolean
}) {
  const { isDark } = useTheme()
  return (
    <div className={`grid grid-cols-1 items-center gap-6 rounded-2xl border px-4 py-4 sm:gap-8 sm:px-6 sm:py-6 md:grid-cols-2 md:gap-10 md:px-8 md:py-8 ${
      isDark ? 'border-neutral-800 bg-neutral-900' : 'border-neutral-200 bg-white'
    }`}>
      {imageLeft ? <GradientTile align="left" /> : null}

      <div className="space-y-4 md:space-y-5">
        <h4 className={`font-syne text-3xl font-bold sm:text-4xl ${isDark ? 'text-white' : 'text-neutral-900'}`}>{title}</h4>
        <p className={`${isDark ? 'text-neutral-300' : 'text-neutral-600'} text-sm sm:text-base`}>{desc}</p>
        <div>
          {isDark ? (
            <a href="#" className="inline-flex items-center gap-2 rounded-full border border-green-600 bg-white px-5 py-2.5 text-sm font-semibold text-green-600 shadow-sm transition-colors hover:bg-green-50">
              {cta} <span aria-hidden>➜</span>
            </a>
          ) : (
            <a href="#" className="inline-flex items-center gap-2 rounded-full bg-green-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-green-500">
              {cta} <span aria-hidden>➜</span>
            </a>
          )}
        </div>
      </div>

      {!imageLeft ? <GradientTile align="right" /> : null}
    </div>
  )
}

export default function Community() {
  const { isDark } = useTheme()
  return (
    <section className={`relative w-full ${isDark ? 'bg-black' : 'bg-white'}`}>
      <div className="mx-auto w-full max-w-7xl px-6 py-20 space-y-10">
        <div className="text-center space-y-3">
          <p className="text-xs font-semibold uppercase tracking-wide text-green-600">Our products</p>
          <h3 className={`font-syne text-4xl font-bold sm:text-5xl ${isDark ? 'text-white' : 'text-neutral-900'}`}>Join the community</h3>
          <p className={`${isDark ? 'text-neutral-300' : 'text-neutral-600'} text-sm sm:text-base`}>
            Be part of something bigger—see what else we have in store for you.
          </p>
        </div>

        <div className="space-y-10">
          <Card
            title="NodeBridge Africa"
            desc="NodeBridge is a decentralized learning and innovation hub focused on empowering Africa, node by node. We are building a network of forward-thinking developers, students, and entrepreneurs passionate about unlocking the power of Web3 across the continent."
            cta="Visit website"
            imageLeft={true}
          />

          <Card
            title="Web 3 Protocol Africa"
            desc="Web3 Protocol Africa is a community dedicated to hands-on learning and collaboration in blockchain protocol design — exploring consensus, execution, cryptography, and scalability through workshops, research, and open-source projects."
            cta="Visit website"
            imageLeft={false}
          />
        </div>
      </div>
    </section>
  )
}
