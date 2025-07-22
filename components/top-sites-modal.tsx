"use client"

import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"
import { bettingSites } from "@/lib/mock-data"

export function TopSitesModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(true)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  useEffect(() => {
    if (isMobile) return

    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 10000)

    return () => clearTimeout(timer)
  }, [isMobile])

  if (isMobile) return null

  const topThreeSites = bettingSites.slice(0, 3)

  // Réorganiser les sites pour la mise en page souhaitée (1er au centre, 2e à gauche, 3e à droite)
  const orderedSites = [
    topThreeSites[1], // 2e place (gauche)
    topThreeSites[0], // 1ère place (centre)
    topThreeSites[2], // 3e place (droite)
  ]

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="bg-transparent border-none shadow-none max-w-3xl p-4">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center text-blue-400">TOP CLASSEMENT</DialogTitle>
        </DialogHeader>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          {orderedSites.map((site, index) => {
            // Déterminer le rang réel (pas l'index du tableau réorganisé)
            const realRank = index === 0 ? 2 : index === 1 ? 1 : 3

            // Déterminer si c'est la première place (position centrale)
            const isFirstPlace = realRank === 1

            return (
              <div
                key={site.id}
                className={`${
                  isFirstPlace
                    ? "bg-slate-800 border-2 border-blue-500 w-full md:w-[38%] order-first md:order-none"
                    : "bg-slate-700 border border-slate-600 w-full md:w-[31%]"
                } rounded-lg p-4 text-center relative shadow-sm flex flex-col justify-between min-h-[350px]`}
              >
                {/* Badge de position */}
                <div
                  className={`absolute -top-3 -left-3 rounded-full flex items-center justify-center ${
                    isFirstPlace ? "w-10 h-10 bg-green-600 text-white" : "w-8 h-8 bg-blue-600 text-white"
                  }`}
                >
                  <div className="flex items-center justify-center">
                    <span className="font-bold">{realRank}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <img
                    src={site.logo || "/placeholder.svg"}
                    alt={site.name}
                    className={`${isFirstPlace ? "w-[160px] h-[96px]" : "w-[140px] h-[84px]"} object-contain mx-auto`}
                  />
                </div>

                <h4 className="font-bold text-lg text-white mb-3">{site.name}</h4>

                <div className="mb-4">
                  <div className="text-blue-400 font-bold text-sm mb-2">BONUS</div>
                  <p className="text-red-400 font-semibold text-sm">{site.bonus}</p>
                </div>

                <div className="mb-4">
                  <div className="flex items-center justify-center mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 stroke-green-500 stroke-[1.5px] ${
                          i < site.stars ? "text-green-500 fill-green-500" : "text-transparent"
                        }`}
                      />
                    ))}
                  </div>
                  <div className="text-xl font-bold text-white">
                    {site.rating.toFixed(1)}
                    <span className="text-sm text-slate-400">/10</span>
                  </div>
                  <div className="text-slate-400 text-xs">({site.reviews})</div>
                </div>

                <Button
                  asChild
                  className={`${
                    isFirstPlace ? "bg-red-600 hover:bg-red-700 text-white" : "bg-blue-600 hover:bg-blue-700 text-white"
                  } font-bold w-full`}
                >
                  <a href={site.url} target="_blank" rel="noopener noreferrer">
                    PARIER
                  </a>
                </Button>
              </div>
            )
          })}
        </div>

        <div className="mt-4 bg-slate-800 rounded-lg p-3 border border-red-500">
          <div className="text-center">
            <p className="text-slate-300 text-sm">
              <span className="text-red-400 font-bold">18+ uniquement</span> - Les paris peuvent être dangereux.
              <span className="text-white font-semibold"> Aide : 09 74 75 13 13</span> -
              <span className="text-blue-400"> Sites licenciés ANJ</span> - Jeu responsable obligatoire.
            </p>
          </div>
        </div>

        <div className="text-center pt-3">
          <Button
            onClick={() => setIsOpen(false)}
            className="bg-slate-600 hover:bg-slate-700 text-white font-bold px-6 py-2 rounded-lg border-none"
          >
            Fermer
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
