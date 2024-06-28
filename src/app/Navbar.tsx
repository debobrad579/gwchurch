"use client"

import { ThemeToggle } from "@/components/ThemeToggle"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Separator } from "@/components/ui/separator"
import Logo from "@/svg/gateway-logo.svg"

export function Navbar() {
  return (
    <>
      <nav className="flex items-center justify-between px-20 py-6 bg-navbar text-navbar-foreground">
        <a href="/">
          <Logo className="h-20" />
        </a>
        <div className="flex gap-4 absolute left-2/4 -translate-x-2/4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost">GET IN TOUCH</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center">
              <DropdownMenuItem asChild>
                <a href="/contact">OUR TEAM</a>
              </DropdownMenuItem>
              <DropdownMenuItem>CONNECTING CARD</DropdownMenuItem>
              <DropdownMenuItem>JESUS</DropdownMenuItem>
              <DropdownMenuItem>CHRISTMAS 2023</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost">GET INVOLVED</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center">
              <DropdownMenuItem>SERMONS</DropdownMenuItem>
              <DropdownMenuItem>CALENDAR / EVENTS</DropdownMenuItem>
              <DropdownMenuItem>ADULTS</DropdownMenuItem>
              <DropdownMenuItem>YOUTH</DropdownMenuItem>
              <DropdownMenuItem>YOUNG ADULTS</DropdownMenuItem>
              <DropdownMenuItem>SMALL GROUPS</DropdownMenuItem>
              <DropdownMenuItem>SHALEM PARTNERSHIP</DropdownMenuItem>
              <DropdownMenuItem>SERVE</DropdownMenuItem>
              <DropdownMenuItem>TRAINING & EQUIPPING</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost">GIVE BACK</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center">
              <a href="https://www.canadahelps.org/en/dn/7574" target="blank">
                <DropdownMenuItem>ONLINE GIVING</DropdownMenuItem>
              </a>
              <DropdownMenuItem>ETRANSFER</DropdownMenuItem>
              <DropdownMenuItem>PRE-AUTHORIZED GIVING</DropdownMenuItem>
              <DropdownMenuItem>MINISTRY INVOLVEMENT</DropdownMenuItem>
              <DropdownMenuItem>MISSIONS</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <ThemeToggle />
      </nav>
      <Separator className="bg-navbar-muted" />
    </>
  )
}
