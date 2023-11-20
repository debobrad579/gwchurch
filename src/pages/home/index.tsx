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
      <div className="flex flex-col xl:flex-row gap-12">
        <HomeCard title="JOIN US ON SUNDAYS">
          <Church size={116} className="col-span-1" />
          <div className="col-span-2">
            <h4 className="text-2xl">Attend Onsite Regular Service Times:</h4>
            <p className="text-muted-foreground">
              8:30, 10, and 11:30am <br />
              **Kids Ministry available during first two services
            </p>
          </div>
          <Tv2 size={116} className="col-span-1" />
          <div className="col-span-2">
            <h4 className="text-2xl">Watch Live</h4>
            <p className="text-muted-foreground">
              Sundays Online at 10:00am <br />
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
          <img src={kids} className="col-span-1" />
          <div className="col-span-2">
            <h4 className="text-2xl">Gateway Kids</h4>
          </div>
          <Separator className="col-span-3" />
          <img src={youth} className="col-span-1" />
          <div className="col-span-2">
            <h4 className="text-2xl">Gateway Youth</h4>
          </div>
        </HomeCard>
      </div>
      <div className="text-center">
        <h2 className="text-5xl font-bold">GATEWAY CHURCH ONLINE</h2>
        <div>
          There are lots of ways you can stay connected online right now.
        </div>
        <div className="font-semibold">
          Join us for our LIVESTREAM Sunday mornings at 10:00am,
        </div>
        <div>
          look back at previous Sunday experiences, check out our online Gateway
          Kids curriculum and more!
        </div>
      </div>
    </>
  )
}
