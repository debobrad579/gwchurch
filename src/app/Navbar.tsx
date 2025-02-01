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
import Link from "next/link"

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
                <Link href="/team">MEET OUR TEAM</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a
                  href="https://gatewaycaledonia.churchcenter.com/people/forms/657321"
                  target="_blank"
                >
                  CONNECTING CARD
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem>JESUS</DropdownMenuItem>
              <DropdownMenuItem>ONLINE DIRECTORY FAQ</DropdownMenuItem>
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
              <DropdownMenuItem>WOMEN'S MINISTRY</DropdownMenuItem>
              <DropdownMenuItem>YOUTH</DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/ya">YOUNG ADULTS</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>SMALL GROUPS</DropdownMenuItem>
              <DropdownMenuItem>SERVE</DropdownMenuItem>
              <DropdownMenuItem>TRAINING & EQUIPPING</DropdownMenuItem>
              <DropdownMenuItem>MEMBERSHIP</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost">GIVE BACK</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center">
              <DropdownMenuItem asChild>
                <a
                  href="https://www.canadahelps.org/en/dn/7574"
                  target="_blank"
                >
                  ONLINE GIVING
                </a>
              </DropdownMenuItem>
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
