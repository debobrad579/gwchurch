import Image from "next/image"
import { HomeCard } from "./HomeCard"
import { Church, Tv2 } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import KidsLogo from "@/svg/kids-logo.svg"
import YouthLogo from "@/svg/youth-logo.svg"

export default function Home() {
  return (
    <>
      <div className="w-[450px] flex justify-between">
        <div className="text-5xl font-[1000] text-gblue leading-tight">
          SUNDAY <br /> SERVICE <br /> TIMES
        </div>
        <div className="text-2xl font-bold mt-32">
          9:00am <br /> 10:45am
          <a href="https://live.gw.church/" target="_blank">
            <div className="text-base text-gblue underline">
              Livestream: 10:45am
            </div>
          </a>
        </div>
      </div>
      <div className="flex flex-col xl:flex-row gap-12">
        <HomeCard title="JOIN US ON SUNDAYS">
          <Church size={116} className="col-span-1" />
          <div className="col-span-2">
            <h4 className="text-2xl">Attend Onsite Regular Service Times:</h4>
            <p className="text-muted-foreground">
              8:30, 10:00, and 11:30am.
              <br />
              <em>**Kids Ministry available during first two services.</em>
            </p>
          </div>
          <Tv2 size={116} className="col-span-1" />
          <div className="col-span-2">
            <h4 className="text-2xl">Watch Live</h4>
            <p className="text-muted-foreground">
              Sundays Online at 10:00am.
              <br />
              Weekly Sunday morning livestream over at{" "}
              <a
                href="https://live.gw.church/"
                target="_blank"
                className="underline"
              >
                live.gw.church
              </a>
              . Catch up on past sermons{" "}
              <a href="#" className="underline">
                here
              </a>
              .
            </p>
          </div>
        </HomeCard>
        <HomeCard title="FOR YOUR FAMILY">
          <a href="#" className="col-span-1">
            <KidsLogo />
          </a>
          <div className="col-span-2">
            <a href="#" className="text-2xl">
              Gateway Kids
            </a>
          </div>
          <Separator className="col-span-3" />
          <a href="#" className="col-span-1">
            <YouthLogo />
          </a>
          <div className="col-span-2">
            <a href="#" className="text-2xl">
              Gateway Youth
            </a>
          </div>
        </HomeCard>
      </div>
      <div className="text-center">
        <h2 className="text-4xl font-bold">CALENDAR</h2>
        <div>Wondering when or where an event is taking place?</div>
        <div className="font-semibold">
          Check out our{" "}
          <a href="#" className="underline">
            CALENDAR
          </a>{" "}
          to find out more.
        </div>
      </div>
    </>
  )
}
