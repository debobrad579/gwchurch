import { Separator } from "@/components/ui/separator"
import {
  Facebook,
  Instagram,
  Music,
  Youtube,
  Mail,
  MapPin,
  Phone,
} from "lucide-react"
import { SocialButton } from "./SocialButton"
import { NewsletterForm } from "./NewsletterForm"

export function Footer() {
  return (
    <>
      <Separator className="bg-navbar-muted" />
      <footer className="px-20 py-6 bg-navbar text-navbar-foreground">
        <div className="flex justify-between gap-8 mb-6">
          <div className="flex-1">
            <h3 className="mb-10 text-2xl">ABOUT US</h3>
            <div className="text-muted-foreground space-y-4">
              <p>
                Gateway is an official church of The Christian & Missionary
                Alliance in Canada.
              </p>
              <p>
                What we believe determines what we value, and what we value
                defines how we live.
              </p>
              <p>
                Click{" "}
                <a href="https://www.cmacan.org/about/" className="underline">
                  here
                </a>{" "}
                to learn more about our core beliefs and values.
              </p>
            </div>
          </div>
          <Separator
            orientation="vertical"
            className="h-auto bg-navbar-muted"
          />
          <div className="flex-1">
            <h3 className="mb-10 text-2xl">CONTACT US</h3>
            <div className="text-muted-foreground space-y-4">
              <a
                className="group flex items-center gap-4"
                href="tel:+19057655407"
              >
                <Phone className="group-hover:animate-shake min-w-12 min-h-12" />
                <p>905-765-5407</p>
              </a>
              <a
                className="group flex items-center gap-4"
                href="https://www.google.ca/maps/place/15+Haldimand+66,+Caledonia,+ON+N3W+1N8/@43.0898938,-79.9454549,16z/data=!3m1!4b1!4m6!3m5!1s0x882c8dbd35cb925b:0xee42be52170d255a!8m2!3d43.0898899!4d-79.94288!16s%2Fg%2F11g0km0qhs?entry=ttu"
              >
                <MapPin className="group-hover:animate-shake min-w-12 min-h-12" />
                <p>15 Haldimand Rd. 66 Caledonia, ON N3W 1N7</p>
              </a>
              <a
                className="group flex items-center gap-4"
                href="mailto:info@gw.church"
              >
                <Mail className="group-hover:animate-shake min-w-12 min-h-12" />
                <p>info@gw.church</p>
              </a>
            </div>
          </div>
          <Separator
            orientation="vertical"
            className="h-auto bg-navbar-muted"
          />
          <div className="flex-1">
            <h3 className="mb-10 text-2xl">SUBSCRIBE TO OUR NEWSLETTER</h3>
            <NewsletterForm />
          </div>
        </div>
        <div className="flex justify-around gap-4 mb-6">
          <p>
            &copy; 2018 <strong>Gateway</strong> Church
          </p>
          <div></div>
          <div className="flex gap-4 absolute left-2/4 -translate-x-2/4">
            <SocialButton href="https://www.facebook.com/gatewaychurchcaledonia/">
              <Facebook />
            </SocialButton>
            <SocialButton href="https://www.instagram.com/gw.church/">
              <Instagram />
            </SocialButton>
            <SocialButton href="https://itunes.apple.com/us/podcast/gateway-caledonia-podcast/id905722237?mt=2">
              <Music />
            </SocialButton>
            <SocialButton href="https://www.youtube.com/channel/UCUja5-byoIsVqaSxd3oOWNg">
              <Youtube />
            </SocialButton>
          </div>
          <a
            href="https://www.cmacan.org/report-sexual-misconduct/"
            target="_blank"
            className="underline"
          >
            Report Sexual Misconduct
          </a>
        </div>
      </footer>
    </>
  )
}
