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
    <Button variant="secondary" className="rounded-full w-10 h-10">
      <a href={href} target="_blank">
        {children}
      </a>
    </Button>
  )
}
