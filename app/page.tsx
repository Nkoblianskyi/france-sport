import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { RatingSection } from "@/components/rating-section"
import { InfoSections } from "@/components/info-sections"
import { TopSitesModal } from "@/components/top-sites-modal"

export default function HomePage() {
  return (
    <div className="space-y-2.5">
      <Header />
      <Hero />
      <RatingSection />
      <InfoSections />
      <TopSitesModal />
    </div>
  )
}
