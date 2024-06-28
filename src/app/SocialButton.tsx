import type { ReactElement } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function SocialButton({
  href,
  children,
  inFooter = false,
}: {
  href: string
  children: ReactElement
  inFooter?: boolean
}) {
  return (
    <Button
      className={cn(
        "rounded-full w-10 h-10",
        inFooter &&
          "bg-navbar-muted text-navbar-foreground hover:text-navbar-foreground hover:bg-navbar-muted-foreground/30"
      )}
    >
      <a href={href} target="_blank">
        {children}
      </a>
    </Button>
  )
}
