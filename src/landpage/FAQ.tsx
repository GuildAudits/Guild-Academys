import { useState } from 'react'
import { useTheme } from '../theme/ThemeProvider'

type QA = {
  q: string
  a: string
}

function FAQItem({ item }: { item: QA }) {
  const { isDark } = useTheme()
  const [open, setOpen] = useState(false)
  return (
    <div
      className={`rounded-2xl border px-4 py-3 sm:px-5 sm:py-4 ${
        isDark ? 'border-neutral-800 bg-[#121212]' : 'border-neutral-200 bg-white'
      }`}
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 text-left"
        aria-expanded={open}
      >
        <span className={`${isDark ? 'text-white' : 'text-neutral-900'} text-sm sm:text-base font-medium`}>
          {item.q}
        </span>
        <span
          className={`inline-flex h-7 w-7 items-center justify-center rounded-full border text-sm ${
            isDark
              ? 'border-neutral-700 text-neutral-300'
              : 'border-neutral-300 text-neutral-600'
          }`}
          aria-hidden
        >
          {open ? '−' : '+'}
        </span>
      </button>
      {open && (
        <div className={`${isDark ? 'text-neutral-300' : 'text-neutral-600'} mt-3 text-sm leading-relaxed`}>
          {item.a}
        </div>
      )}
    </div>
  )
}

export default function FAQ() {
  const { isDark } = useTheme()
  const items: QA[] = [
    {
      q: 'What kind of courses do you offer?',
      a: 'We offer cohort-based bootcamps in Web2 and Web3 development, plus career-focused programs like Product Design and Data Analysis.',
    },
    {
      q: 'Are the courses beginner‑friendly?',
      a: 'Yes. We design our tracks for beginners and up. You will get guided lessons, mentor support, and projects to build confidence.',
    },
    {
      q: 'Do I get a certificate after completing a course?',
      a: 'Yes. You will receive a certificate of completion and access to job‑readiness support resources.',
    },
    {
      q: 'Can I access course materials after completion?',
      a: 'You retain access to recorded sessions, resources, and community channels for continued learning.',
    },
    {
      q: 'How can I contact support?',
      a: 'You can reach our support via email or through the community Discord. Mentors are also available during cohort hours.',
    },
  ]

  return (
    <section className={`relative w-full ${isDark ? 'bg-black' : 'bg-white'}`}>
      <div className="mx-auto w-full max-w-7xl px-6 py-20">
        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-2">
          {/* Left intro */}
          <div className="space-y-4">
            <span className="inline-flex w-fit items-center rounded-full bg-[#022402] px-2.5 py-0.5 text-xs font-medium text-white">
              Student question
            </span>
            <h3 className={`font-syne text-4xl font-bold sm:text-5xl ${isDark ? 'text-white' : 'text-neutral-900'}`}>
              Frequency
              <br />
              asked
              <br />
              questions
            </h3>
            <p className={`${isDark ? 'text-neutral-300' : 'text-neutral-600'} max-w-md text-sm sm:text-base`}>
              Browse through some of the most common questions and answers to guide you along the way asked by our
              student to understand.
            </p>
          </div>

          {/* Right accordion list */}
          <div className="space-y-4">
            {items.map((it, i) => (
              <FAQItem key={i} item={it} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
