"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Star, Trophy } from "lucide-react"
import { bettingSites } from "@/lib/mock-data"

export function Hero() {
  const [show18Modal, setShow18Modal] = useState(false)
  const [showRulesModal, setShowRulesModal] = useState(false)

  const currentDate = new Date()
  const formattedDate = currentDate.toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  const topSite = bettingSites[0] // Топ-1 сайт

  return (
    <>
      <section className="py-8 px-4 w-full">
        <div className="container mx-auto max-w-[1220px]">
          <div className="bg-slate-800/95 backdrop-blur-sm rounded-lg shadow-sm border border-blue-500 p-8">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Ліва колонка - Інформація про сайт */}
              <div className="space-y-6">
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold mb-4">
                    <span className="text-blue-400">Le</span>
                    <span className="text-red-400">Paris</span>
                    <span className="text-white">SportifsFrance</span>
                  </h1>

                  <div className="text-slate-400 mb-4 text-sm">Dernière mise à jour : {formattedDate}</div>

                  <p className="text-lg text-slate-300 leading-relaxed mb-6">
                    Votre guide expert pour choisir les meilleurs sites de paris sportifs en France. Nous analysons et
                    comparons les plateformes licenciées ANJ pour vous offrir un classement transparent et fiable.
                  </p>
                </div>

                {/* Плашки з модальними вікнами */}
                <div className="flex items-center gap-2">
                  <div className="flex items-center space-x-1 border-2 border-blue-500 px-2 py-1 rounded-md bg-transparent">
                    <img src="/placeholder.svg?height=16&width=24&text=FR" alt="France" className="w-4 h-3" />
                    <span className="text-blue-400 font-semibold text-xs">ANJ</span>
                  </div>

                  <button
                    onClick={() => setShow18Modal(true)}
                    className="border-2 border-red-500 hover:bg-red-500/10 px-2 py-1 rounded-md text-red-400 font-bold text-xs transition-colors cursor-pointer bg-transparent"
                  >
                    18+
                  </button>

                  <button
                    onClick={() => setShowRulesModal(true)}
                    className="border-2 border-white hover:bg-white/10 px-2 py-1 rounded-md text-white font-semibold text-xs transition-colors cursor-pointer bg-transparent"
                  >
                    RÈGLES
                  </button>
                </div>

                <div className="bg-slate-700 p-4 rounded-lg border-l-4 border-blue-500">
                  <p className="text-slate-300 text-sm">
                    <strong className="text-white">Jeu Responsable :</strong> Les paris sportifs doivent rester un
                    divertissement. Ne pariez jamais plus que vous ne pouvez vous permettre de perdre.
                  </p>
                </div>
              </div>

              {/* Права колонка - Карточка топ-1 */}
              <div className="lg:pl-8">
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 border-2 border-blue-500 shadow-2xl relative overflow-hidden">
                  {/* Декоративні елементи */}
                  <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500/20 rounded-full"></div>
                  <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-red-500/20 rounded-full"></div>

                  {/* Badge #1 */}

                  {/* Trophy icon */}
                  <Trophy className="absolute top-4 right-4 w-8 h-8 text-blue-400 opacity-40" />

                  <div className="relative z-10 text-center">
                    <div className="mb-4">
                      <div className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold inline-block mb-3">
                        MEILLEUR CHOIX 2025
                      </div>
                    </div>

                    {/* Logo */}
                    <div className="bg-white p-4 rounded-lg shadow-sm mb-4 mx-auto w-fit">
                      <img
                        src={topSite.logo || "/placeholder.svg"}
                        alt={topSite.name}
                        className="w-[160px] h-[96px] object-contain"
                      />
                    </div>

                    {/* Bonus */}
                    <div className="mb-4">
                      <div className="text-blue-400 font-bold text-sm mb-2">BONUS EXCLUSIF</div>
                      <p className="text-red-400 font-bold text-lg leading-tight">{topSite.bonus}</p>
                    </div>

                    {/* Rating */}
                    <div className="mb-4">
                      <div className="flex items-center justify-center mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-5 h-5 stroke-blue-400 stroke-[1.5px] ${i < topSite.stars ? "text-blue-400 fill-blue-400" : "text-transparent"
                              }`}
                          />
                        ))}
                      </div>
                      <div className="text-2xl font-bold text-white">
                        {topSite.rating.toFixed(1)}
                        <span className="text-sm text-slate-400">/10</span>
                      </div>
                      <div className="text-slate-400 text-sm">({topSite.reviews} avis)</div>
                    </div>

                    {/* CTA Button */}
                    <Button
                      asChild
                      className="bg-red-600 hover:bg-red-700 text-white font-bold w-full py-3 text-lg shadow-lg border border-red-500"
                    >
                      <a href={topSite.url} target="_blank" rel="noopener noreferrer">
                        OBTENIR LE BONUS
                      </a>
                    </Button>

                    <p className="text-xs text-slate-400 mt-3">Site licencié ANJ • Jeu responsable 18+</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal 18+ */}
      <Dialog open={show18Modal} onOpenChange={setShow18Modal}>
        <DialogContent className="max-w-md mx-4 bg-slate-800 text-white">
          <DialogHeader>
            <DialogTitle className="text-center text-red-600 text-lg md:text-xl font-bold">
              18+ Réservé aux Adultes
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4 text-white text-sm md:text-base">
            <p className="text-slate-300 text-sm md:text-base">
              <strong>Limite d'âge :</strong> Vous devez avoir au moins 18 ans pour participer aux activités de paris
              sur les sites licenciés français.
            </p>

            <p className="text-slate-300 text-sm md:text-base">
              <strong>Jeu responsable :</strong> Les paris doivent être un divertissement, pas un moyen de gagner de
              l'argent. Ne pariez que les montants que vous pouvez vous permettre de perdre.
            </p>

            <p className="text-slate-300 text-sm md:text-base">
              <strong>Fixez des limites :</strong> Utilisez les outils proposés par les sites de paris pour définir des
              limites de dépôt, de perte et de temps.
            </p>

            <div className="p-4 rounded-lg border border-slate-600">
              <p className="font-semibold mb-2 text-slate-300 text-sm md:text-base">Besoin d'aide ?</p>
              <p className="text-sm text-slate-300">Contactez ces organisations :</p>
              <ul className="text-sm mt-2 space-y-1 text-slate-300">
                <li>Joueurs Info Service - 09 74 75 13 13</li>
                <li>www.joueurs-info-service.fr - Conseil gratuit</li>
              </ul>
            </div>
          </div>
          <Button onClick={() => setShow18Modal(false)} className="w-full bg-blue-600 hover:bg-blue-700 text-white">
            Compris
          </Button>
        </DialogContent>
      </Dialog>

      {/* Modal Règles */}
      <Dialog open={showRulesModal} onOpenChange={setShowRulesModal}>
        <DialogContent className="max-w-2xl mx-4 max-h-[80vh] overflow-y-auto bg-slate-800 text-white">
          <DialogHeader>
            <DialogTitle className="text-center text-white text-lg md:text-xl font-bold">
              Règles et Conditions
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-6 text-white text-sm md:text-base">
            <div>
              <h3 className="font-bold mb-2 text-slate-300 text-sm md:text-base">Conditions Générales</h3>
              <p className="text-sm text-slate-300">
                Tous les sites de paris recommandés sont licenciés par l'ANJ (Autorité Nationale des Jeux) et respectent
                les lois françaises.
              </p>
            </div>

            <div>
              <h3 className="font-bold mb-2 text-slate-300 text-sm md:text-base">Conditions des Bonus</h3>
              <ul className="text-sm space-y-1 text-slate-300">
                <li>Tous les bonus de bienvenue ont des exigences de mise entre 1x-10x</li>
                <li>Les bonus doivent être utilisés dans le délai imparti</li>
                <li>Lisez toujours les conditions complètes sur chaque site</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-2 text-slate-300 text-sm md:text-base">Retrait et Vérification</h3>
              <ul className="text-sm space-y-1 text-slate-300">
                <li>Tous les gains sont versés après vérification d'identité réussie</li>
                <li>Les délais de retrait varient entre 1-5 jours ouvrables</li>
                <li>Des documents peuvent être requis lors du premier retrait</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-2 text-slate-300 text-sm md:text-base">Service Client</h3>
              <ul className="text-sm space-y-1 text-slate-300">
                <li>Contactez le support du site pour les problèmes techniques</li>
                <li>Service client français disponible sur tous les sites recommandés</li>
                <li>Support via chat en direct, email ou téléphone</li>
              </ul>
            </div>

            <div className="p-4 rounded-lg border border-slate-600">
              <h3 className="font-bold mb-2 text-slate-300 text-sm md:text-base">Ressources Jeu Responsable</h3>
              <p className="text-sm mb-2 text-slate-300">Si vous rencontrez des problèmes avec votre jeu :</p>
              <ul className="text-sm space-y-1 text-slate-300">
                <li>Joueurs Info Service - Ligne d'écoute et chat</li>
                <li>www.joueurs-info-service.fr - Traitement professionnel</li>
                <li>ANJ.fr - Information officielle</li>
              </ul>
            </div>
          </div>
          <Button onClick={() => setShowRulesModal(false)} className="w-full bg-red-600 hover:bg-red-700 text-white">
            Accepter et Fermer
          </Button>
        </DialogContent>
      </Dialog>
    </>
  )
}
