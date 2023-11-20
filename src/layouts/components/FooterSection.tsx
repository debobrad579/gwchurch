import type { ReactNode } from "react"

export function FooterSection({
  title,
  children,
}: {
  title: string
  children: ReactNode
}) {
  return (
    <div className="flex-1">
      <h3 className="mb-10 text-2xl">{title}</h3>
      <div className="text-muted-foreground flex flex-col gap-4">
        {children}
      </div>
    </div>
  )
}
