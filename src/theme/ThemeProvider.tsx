import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import type { ReactNode } from 'react'

export type Theme = 'light' | 'dark'

type ThemeContextValue = {
  theme: Theme
  isDark: boolean
  toggleTheme: () => void
  setTheme: (t: Theme) => void
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined)

const THEME_STORAGE_KEY = 'theme'

function applyThemeClass(theme: Theme) {
  const root = document.documentElement
  const body = document.body
  if (theme === 'dark') {
    root.classList.add('dark')
    body.classList.add('dark')
  } else {
    root.classList.remove('dark')
    body.classList.remove('dark')
  }
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>('light')

  // Initialize from localStorage once on mount
  useEffect(() => {
    const saved = (localStorage.getItem(THEME_STORAGE_KEY) as Theme | null) || null
    const initial: Theme = saved ?? 'light'
    setThemeState(initial)
    applyThemeClass(initial)
  }, [])

  const setTheme = (t: Theme) => {
    setThemeState(t)
    localStorage.setItem(THEME_STORAGE_KEY, t)
    applyThemeClass(t)
  }

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark')

  const value = useMemo<ThemeContextValue>(() => ({
    theme,
    isDark: theme === 'dark',
    toggleTheme,
    setTheme,
  }), [theme])

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used within a ThemeProvider')
  return ctx
}
