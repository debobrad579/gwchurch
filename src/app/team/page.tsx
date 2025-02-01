import { Separator } from "@/components/ui/separator"
import { TeamMember } from "./TeamMember"
import steve from "@/img/steve.webp"
import kendra from "@/img/kendra.webp"
import dave from "@/img/dave.webp"
import maggie from "@/img/maggie.webp"
import wes from "@/img/wes.webp"
import sam from "@/img/sam.webp"
import jen from "@/img/jen.webp"
import shannon from "@/img/shannon.webp"
import kim from "@/img/kim.webp"
import bren from "@/img/bren.webp"
import rebecca from "@/img/rebecca.webp"
import ashley from "@/img/ashley.webp"
import abbey from "@/img/abbey.webp"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Team",
}

export default function ContactPage() {
  return (
    <div className="text-center w-full">
      <h1 className="text-6xl font-bold">Meet Our Team</h1>
      <Separator className="my-8" />
      <div className="flex flex-wrap gap-8 justify-center">
        <TeamMember
          image={steve}
          name="Rev. Steve Kerr"
          title="Senior Pastor"
          email="steve@gw.church"
        />
        <TeamMember
          image={kendra}
          name="Rev. Kendra Comeau"
          title="Kids Pastor"
          email="kendra@gw.church"
        />
        <TeamMember
          image={dave}
          name="Rev. Dave Freeman"
          title="Associate Pastor"
          email="dave@gw.church"
        />
        <TeamMember
          image={maggie}
          name="Maggie Dowdell"
          title="Custodian / Facilities"
          email="maggie@gw.church"
        />
        <TeamMember
          image={wes}
          name="Wes Dickson"
          title="Worship Pastor"
          email="wes@gw.church"
        />
        <TeamMember
          image={sam}
          name="Sam Arthur"
          title="Youth Pastor"
          email="sam@gw.church"
        />
        <TeamMember
          image={jen}
          name="Jen Thompson"
          title="Youth Director"
          email="jen@gw.church"
        />
        <TeamMember
          image={shannon}
          name="Shannon Archibald"
          title="Gateway Kids Director"
          email="shannon@gw.church"
        />
        <TeamMember
          image={kim}
          name="Kim Hill"
          title="Book Keeper"
          email="kim@gw.church"
        />
        <TeamMember
          image={bren}
          name="Bren Stacey"
          title="Director of Church Planting"
          email="bren@gw.church"
        />
        <TeamMember
          image={rebecca}
          name="Rebecca Aalbers"
          title="Gateway Kids Administrator"
          email="rebecca@gw.church"
        />
        <TeamMember
          image={ashley}
          name="Ashley Smart"
          title="Director of Technical Services"
          email="ashley@gw.church"
        />
        <TeamMember
          image={abbey}
          name="Abbey Leyland"
          title="Office Administrator"
          email="abbey@gw.church"
        />
      </div>
    </div>
  )
}
