import type { ReactElement } from "react"
import { Button } from "@/components/ui/button"

export function SocialButton({
  href,
  children,
}: {
  href: string
  children: ReactElement
}) {
  return (
    <Button className="rounded-full w-10 h-10 bg-navbar-muted text-navbar-foreground hover:text-navbar-foreground hover:bg-navbar-muted-foreground/30">
      <a href={href} target="_blank">
        {children}
      </a>
    </Button>
  )
}
