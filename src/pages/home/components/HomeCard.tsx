import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { ReactNode } from "react"

export function HomeCard({
  title,
  children,
}: {
  title: string
  children: ReactNode
}) {
  return (
    <Card className="w-[450px]">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-3 gap-6 items-center h-[calc(100%-144px)]">
        {children}
      </CardContent>
    </Card>
  )
}
