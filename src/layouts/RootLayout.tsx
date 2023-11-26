import { ThemeProvider } from "@/context/ThemeProvider"
import { Home } from "@/pages/home"
import { Navbar } from "./Navbar"
import { Footer } from "./Footer"

export function RootLayout() {
  return (
    <ThemeProvider storageKey="vite-ui-theme">
      <Navbar />
      <main className="px-20 py-14 flex flex-col items-center gap-14">
        <Home />
      </main>
      <Footer />
    </ThemeProvider>
  )
}
