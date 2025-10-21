import { useTheme } from '../theme/ThemeProvider'
import groupImg from '../assets/landing/Group.png'

function Badge() {
  return (
    <div className="mx-auto mb-3 flex items-center justify-center gap-2 text-green-600">
      <span className="inline-block h-1.5 w-1.5 rotate-45 rounded-[2px] bg-green-600" />
      <span className="text-xs font-semibold tracking-widest">ACHIEVEMENT</span>
    </div>
  )
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center w-full sm:w-auto">
      <div className="font-syne font-bold tracking-tight leading-tight text-black text-3xl sm:text-4xl md:text-[42px] dark:text-white">
        {value}
      </div>
      <div className="mt-1 text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 max-w-[10rem] mx-auto">
        {label}
      </div>
    </div>
  )
}

export default function Achievements() {
  const { isDark } = useTheme()

  return (
    <section className={`w-full ${isDark ? 'bg-black' : 'bg-white'}`}>
      <div className="mx-auto max-w-7xl px-6 py-12 sm:py-16">
        <Badge />
        <h2 className={`text-center font-bold font-syne tracking-tight ${isDark ? 'text-white/90' : 'text-gray-900/90'} text-3xl sm:text-4xl md:text-5xl`}>
          Impact that speaks for itself
        </h2>
        <p className={`mx-auto mt-3 max-w-3xl text-center text-sm sm:text-base ${isDark ? 'text-neutral-300' : 'text-neutral-600'}`}>
          Discover stories, milestones, and real results from our journey. Watch how our work is driving change, creating
          opportunities, and communities.
        </p>

        {/* Video thumbnail with play overlay */}
        <div className="relative mx-auto mt-6 sm:mt-10 overflow-hidden rounded-2xl shadow-sm border border-neutral-200/80 dark:border-neutral-800">
          <img src={groupImg} alt="Guild Academy achievements video" className="w-full " />
        
            
        </div>

        {/* Stats row */}
        <div className="mx-auto mt-8 sm:mt-10 grid grid-cols-2 gap-x-8 gap-y-6 justify-items-center sm:flex sm:justify-center sm:gap-10 md:gap-16 text-center text-2xl sm:text-[28px] md:text-[32px] font-syne">
          <Stat value="42,000+" label="Total Applications" />
          <div className="hidden sm:block h-10 w-px self-center bg-neutral-200 dark:bg-neutral-800" aria-hidden />
          <Stat value="500+" label="Graduates" />
          <div className="hidden sm:block h-10 w-px self-center bg-neutral-200 dark:bg-neutral-800" aria-hidden />
          <Stat value="3,000+" label="Global Growing Community" />
          <div className="hidden sm:block h-10 w-px self-center bg-neutral-200 dark:bg-neutral-800" aria-hidden />
          <Stat value="$20K+" label="Hackathons won by students" />
        </div>

        <div className="mt-8 sm:mt-10 flex justify-center">
          <button
            type="button"
            onClick={() => (window.location.hash = '#/bootcamps')}
            className="inline-flex items-center gap-2 rounded-full bg-green-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-green-500"
          >
            Learn more about us
            <span aria-hidden>➜</span>
          </button>
        </div>
      </div>
    </section>
  )
}
