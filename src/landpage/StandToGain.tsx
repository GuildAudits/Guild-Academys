import { useTheme } from '../theme/ThemeProvider'
import ElectricBorder from '../components/ElectricBorder'

function Badge() {
  return (
    <div className="mx-auto mb-3 flex items-center justify-center gap-2 text-green-600">
      <span className="inline-block h-1.5 w-1.5 rotate-45 rounded-[2px] bg-green-600" />
      <span className="text-xs font-semibold tracking-widest">WHY JOIN US?</span>
    </div>
  )
}

function Card({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  const { isDark } = useTheme()
  return (
    <ElectricBorder
      color={isDark ? '#16a34a' : '#16a34a'}
      thickness={2}
      speed={1}
      chaos={1}
      className="rounded-2xl"
      style={{ borderRadius: '1rem' }}
    >
      <div className={`rounded-2xl p-6 shadow-sm backdrop-blur-sm hover:shadow transition-shadow ${isDark ? 'bg-transparent' : 'bg-green-50/50'}`}>
        <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-green-600/90 text-white">
          {icon}
        </div>
        <h3 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>{title}</h3>
        <p className={`mt-2 text-sm leading-6 ${isDark ? 'text-neutral-300' : 'text-gray-600'}`}>{desc}</p>
      </div>
    </ElectricBorder>
  )
}

export default function StandToGain() {
  const { isDark } = useTheme()

  return (
    <section className={`w-full ${isDark ? 'bg-black' : 'bg-white'}`}>
      <div className="mx-auto max-w-7xl px-6 py-12 sm:py-16">
        <Badge />
        <h2 className={`text-center font-bold font-syne tracking-tight ${isDark ? 'text-white' : 'text-gray-900'} text-3xl sm:text-4xl md:text-5xl`}>
          What you stand to gain
        </h2>
        <p className={`mx-auto mt-3 max-w-3xl text-center text-sm sm:text-base ${isDark ? 'text-neutral-300' : 'text-neutral-600'}`}>
          At Guild Academy, learning is not just about watching videos or memorizing slides — it’s
          a journey that’s structured, supportive, and full of momentum.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-3">
          <Card
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path d="M12 2.25c-.41 0-.82.09-1.19.26l-6 2.7A2.25 2.25 0 0 0 3 7.24V12c0 5.09 3.54 8.55 8.53 9.69.3.07.63.07.94 0C17.46 20.55 21 17.09 21 12V7.24c0-.9-.53-1.7-1.31-2.05l-6-2.7c-.37-.17-.78-.26-1.19-.26Zm0 6.75a.75.75 0 0 1 .75.75v2.25h2.25a.75.75 0 0 1 0 1.5H12.75v2.25a.75.75 0 0 1-1.5 0V13.5H9a.75.75 0 0 1 0-1.5h2.25V9.75A.75.75 0 0 1 12 9Z" />
              </svg>
            }
            title="Expert mentorship"
            desc="Learn directly from experienced professionals with guidance, support, and insights to help you grow faster."
          />

          <Card
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path d="M12 3C7.03 3 3 7.03 3 12s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9Zm0 3.75a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm0 12.75a7.49 7.49 0 0 1-6-3.03c.03-1.99 4-3.09 6-3.09s5.97 1.1 6 3.09a7.49 7.49 0 0 1-6 3.03Z" />
              </svg>
            }
            title="Global community"
            desc="Connect with a global network of learners and creators, offering collaboration and mentorship."
          />

          <Card
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path d="M4.5 6.75A2.25 2.25 0 0 1 6.75 4.5h10.5A2.25 2.25 0 0 1 19.5 6.75v10.5A2.25 2.25 0 0 1 17.25 19.5H6.75A2.25 2.25 0 0 1 4.5 17.25V6.75ZM7.5 9h9v1.5h-9V9Zm0 3h9v1.5h-9V12Zm0 3h6v1.5h-6V15Z" />
              </svg>
            }
            title="Fully funded scholarship"
            desc="Gain access to scholarships that remove financial barriers so you can focus on building real skills."
          />
        </div>
      </div>
    </section>
  )
}
