import YoungAdultsLogo from "@/svg/young-adults-logo.svg"
import {
  Facebook,
  Globe,
  Instagram,
  Mail,
  Phone,
  Share2,
  Wifi,
} from "lucide-react"
import { SocialButton } from "../SocialButton"

export default function YoungAdultsPage() {
  return (
    <div className="flex flex-col items-center gap-8 text-center">
      <div className="flex items-center gap-4">
        <YoungAdultsLogo className="w-48" />
        <h1 className="text-6xl font-bold">Young Adults</h1>
      </div>
      <p className="font-bold text-xl">
        Join us on Monday Nights at Gateway Church from 7-9pm
      </p>
      <p>
        This space for our YOUNG ADULTS to belong, and find community,
        authenticity, and support as we do life together.
        <br />
        Join us as we gather and catch up, eat, worship and dive into The Word
        together!
      </p>

      <div className="w-full max-w-[1000px] flex justify-around items-center gap-4">
        <div className="flex flex-col items-center gap-2">
          <Mail size={50} />
          <div>
            <a className="block" href="mailto:wes@gw.church">
              wes@gw.church
            </a>
            <a href="mailto:jen@gw.church">jen@gw.church</a>
          </div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Phone size={50} />
          <a href="tel:+15199943061">519-994-3061</a>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Share2 size={50} />
          <div className="flex gap-4">
            <SocialButton href="https://www.facebook.com/groups/381936420445060">
              <Facebook />
            </SocialButton>
            <SocialButton href="http://www.instagram.com/gatewaycaledoniayoungadults">
              <Instagram />
            </SocialButton>
          </div>
        </div>
      </div>
    </div>
  )
}
