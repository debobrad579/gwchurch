import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Facebook, Instagram, Music, Youtube } from "lucide-react"
import { SocialButton } from "./components/SocialButton"
import { FooterSection } from "./components/FooterSection"

export function Footer() {
  return (
    <>
      <Separator />
      <footer className="px-20 py-6 bg-navbar text-navbar-foreground">
        <div className="flex justify-between gap-8 mb-6">
          <FooterSection title="ABOUT US">
            <p>
              Gateway is an official church of The Christian & Missionary
              Alliance in Canada.
            </p>
            <p>
              What we believe determines what we value, and what we value
              defines how we live.
            </p>
            <p>Click here to learn more about our core beliefs and values.</p>
          </FooterSection>
          <Separator orientation="vertical" className="h-auto" />
          <FooterSection title="CONTACT US">
            <p>905-765-5407</p>
            <p>
              15 Haldimand Rd. 66 <br /> Caledonia, ON. N3W 1N7
            </p>
            <p>info@gw.church</p>
          </FooterSection>
          <Separator orientation="vertical" className="h-auto" />
          <FooterSection title="SUBSCRIBE TO OUR NEWSLETTER">
            <Input placeholder="Name" />
            <Input placeholder="Email" type="email" />
            <Button
              variant="secondary"
              className="w-full text-muted-foreground"
            >
              Submit Now
            </Button>
          </FooterSection>
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
