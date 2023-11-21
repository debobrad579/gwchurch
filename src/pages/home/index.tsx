import { Church, Tv2 } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import kids from "@/assets/gateway-kids.png"
import youth from "@/assets/gateway-youth.png"
import { HomeCard } from "./components/HomeCard"

export function Home() {
  return (
    <>
      <div className="w-[450px] flex justify-between">
        <div className="text-5xl font-[1000] text-gblue leading-tight">
          SUNDAY <br /> SERVICE <br /> TIMES
        </div>
        <div className="text-2xl font-bold mt-32">
          8:30am <br /> 10:00am <br /> 11:30am
          <div className="text-base text-gblue">Livestream: 10:00am</div>
        </div>
      </div>
      <div className="text-center">
        <h2 className="text-4xl font-bold">GATEWAY CHURCH ONLINE</h2>
        <div>
          There are lots of ways you can stay connected online right now.
        </div>
        <div className="font-semibold">
          Join us for our{" "}
          <a
            href="https://live.gw.church/"
            target="_blank"
            className="underline"
          >
            LIVESTREAM
          </a>{" "}
          Sunday mornings at 10:00am,
        </div>
        <div>
          look back at previous Sunday experiences, check out our online Gateway
          Kids curriculum, and more!
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
            <img src={kids} />
          </a>
          <div className="col-span-2">
            <a href="#" className="text-2xl">
              Gateway Kids
            </a>
          </div>
          <Separator className="col-span-3" />
          <a href="#" className="col-span-1">
            <img src={youth} />
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
