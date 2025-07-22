import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Footer } from "@/components/footer"
import { CookieBanner } from "@/components/cookie-banner"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ParisSportifsFrance - Meilleurs Sites de Paris Sportifs France 2025",
  description:
    "Classement des meilleurs sites de paris sportifs en France. Comparatif expert avec bonus, évaluations et cotes pour choisir la meilleure plateforme de paris. 18+ uniquement.",
  keywords: "paris sportifs, sites de paris, bonus paris sportifs, cotes, ANJ, licence, jeu responsable, 18+",
  authors: [{ name: "ParisSportifsFrance" }],
  creator: "ParisSportifsFrance",
  publisher: "ParisSportifsFrance",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://parissportifsfrance.com",
    title: "ParisSportifsFrance - Comparateur Sites Paris Sportifs",
    description: "Guide expert des meilleurs sites de paris sportifs licenciés ANJ en France. Jeu responsable 18+.",
    siteName: "ParisSportifsFrance",
  },
  twitter: {
    card: "summary_large_image",
    title: "ParisSportifsFrance - Sites Paris Sportifs France",
    description: "Comparateur expert sites paris sportifs licenciés ANJ. Jeu responsable 18+.",
  },
  other: {
    "gambling-disclaimer": "Les paris sportifs comportent des risques. Réservé aux 18 ans et plus. Jouez responsable.",
    "age-restriction": "18+",
    "responsible-gambling": "true",
    "licensed-operators-only": "ANJ France",
    "gambling-addiction-help": "Joueurs Info Service: 09 74 75 13 13",
    "content-warning": "Contenu lié aux paris sportifs - Jeu responsable requis",
    "target-audience": "Adultes 18+ résidents français uniquement",
    compliance: "Conforme réglementation française ANJ",
    disclaimer: "Site informatif - Ne constitue pas une incitation au jeu",
    "harm-prevention": "Promotion du jeu responsable et prévention des risques",
    "geographic-restriction": "France uniquement - Vérification géolocalisation requise",
    "financial-warning": "Ne pariez que ce que vous pouvez vous permettre de perdre",
    "addiction-resources": "Ressources aide disponibles - www.joueurs-info-service.fr",
    "regulatory-compliance": "Respect strict législation française jeux en ligne",
    "content-type": "Comparaison éducative sites paris sportifs licenciés",
    "risk-awareness": "Sensibilisation aux risques du jeu problématique",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <div className="min-h-screen w-full">
          {children}
          <Footer />
          <CookieBanner />
        </div>
      </body>
    </html>
  )
}
