import Head from "next/head"
import Container from "../components/container/container"
import HeroSection from "../components/index/hero"
import CookieConsent from "react-cookie-consent";
import { FaqSection } from "../components/index/faq";
import { PricingSection } from "../components/index/pricing";
import { ContactSection } from "../components/index/contact";
import { MapsSection } from "../components/index/maps";
import { StatsSection } from "../components/index/stats";
import { ImageSection } from "../components/index/images";

export default function Index() {
  const meta = {
    title: 'PGH Lichtstadt - Jena',
    description: `Test`,
  };

  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta content={meta.description} name="description" />
      </Head>

      <Container>
        <CookieConsent
          location="bottom"
          buttonText="Alles klar!"
          declineButtonText="Ablehnen"
          cookieName="Cookie"
          style={{ background: "#2B373B" }}
          buttonStyle={{ color: "white", backgroundColor: "green", fontSize: "13px" }}
          expires={150}
        >
          Wir verwenden ausschließlich funktionale Cookies, sodass Ihre Anmeldedaten gespeichert werden können und beim Neuladen der Seite keine erneute Anmeldung benötigt wird.{" "}
        </CookieConsent>
        <div className="bg-inherit" style={{ marginTop: "22rem", marginBottom: "7rem" }}>
          <HeroSection />
        </div>
        <FaqSection />
        <PricingSection />
        <ImageSection />
        <StatsSection />
        <ContactSection />
        <MapsSection />
      </Container>

    </div>
  )
}
