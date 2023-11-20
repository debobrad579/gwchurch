import { createContext } from "react"

type Theme = "dark" | "light" | "system"

type ThemeState = {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const initialState: ThemeState = {
  theme: "system",
  setTheme: () => null,
}

export const ThemeContext = createContext<ThemeState>(initialState)
