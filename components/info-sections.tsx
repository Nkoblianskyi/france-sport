import { Shield, CheckCircle, Award, Users, Clock, Star } from "lucide-react"

export function InfoSections() {
  return (
    <div className="py-16 px-4 w-full bg-slate-900">
      <div className="container mx-auto max-w-[1220px] space-y-16">
        {/* Секція про відбір сайтів */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comment Nous Sélectionnons les Meilleurs Sites
            </h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              Notre équipe d'experts analyse rigoureusement chaque site de paris sportifs selon des critères stricts
              pour vous garantir une expérience de jeu sûre et de qualité.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-800 rounded-lg p-6 shadow-sm border border-blue-500">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Sécurité & Licence</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Vérification de la licence ANJ, sécurité SSL, protection des données personnelles et conformité aux
                réglementations françaises.
              </p>
            </div>

            <div className="bg-slate-800 rounded-lg p-6 shadow-sm border border-red-500">
              <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Bonus & Promotions</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Analyse des conditions de bonus, exigences de mise, valeur réelle des offres et transparence des termes
                et conditions.
              </p>
            </div>

            <div className="bg-slate-800 rounded-lg p-6 shadow-sm border border-white">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                <Star className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Cotes & Marchés</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Comparaison des cotes, variété des sports disponibles, marchés spéciaux et options de paris en direct.
              </p>
            </div>

            <div className="bg-slate-800 rounded-lg p-6 shadow-sm border border-blue-500">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Service Client</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Qualité du support, disponibilité en français, temps de réponse et efficacité dans la résolution des
                problèmes.
              </p>
            </div>

            <div className="bg-slate-800 rounded-lg p-6 shadow-sm border border-red-500">
              <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Paiements</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Méthodes de dépôt et retrait, délais de traitement, frais appliqués et sécurité des transactions
                financières.
              </p>
            </div>

            <div className="bg-slate-800 rounded-lg p-6 shadow-sm border border-white">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Expérience Utilisateur</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Interface intuitive, application mobile, facilité de navigation et fonctionnalités innovantes pour les
                parieurs.
              </p>
            </div>
          </div>
        </section>

        {/* Секція про безпечну гру */}
        <section>
          <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-xl p-8 border border-red-500">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Jeu Responsable - Notre Engagement</h2>
              <p className="text-lg text-slate-300 max-w-3xl mx-auto">
                Nous promouvons un environnement de jeu sain et responsable. Votre bien-être est notre priorité.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Principes du Jeu Responsable</h3>
                  <ul className="space-y-2 text-slate-300">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Ne pariez que l'argent que vous pouvez vous permettre de perdre</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Fixez-vous des limites de temps et d'argent avant de jouer</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Ne jouez jamais sous l'influence de l'alcool ou de drogues</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Ne tentez jamais de récupérer vos pertes en pariant plus</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Prenez des pauses régulières et ne jouez pas tous les jours</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Outils de Protection</h3>
                  <p className="text-slate-300 text-sm mb-3">
                    Tous les sites recommandés proposent des outils pour vous aider à contrôler votre jeu :
                  </p>
                  <ul className="space-y-1 text-slate-300 text-sm">
                    <li>• Limites de dépôt quotidiennes, hebdomadaires et mensuelles</li>
                    <li>• Limites de perte et de temps de jeu</li>
                    <li>• Auto-exclusion temporaire ou permanente</li>
                    <li>• Historique détaillé de vos paris et transactions</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-slate-700 rounded-lg p-6 border border-red-500">
                  <h3 className="text-xl font-bold text-red-600 mb-4">Signaux d'Alarme</h3>
                  <p className="text-slate-300 text-sm mb-3">
                    Si vous ressentez un ou plusieurs de ces symptômes, il est temps de demander de l'aide :
                  </p>
                  <ul className="space-y-1 text-slate-300 text-sm">
                    <li>• Vous pensez constamment aux paris</li>
                    <li>• Vous pariez plus que prévu</li>
                    <li>• Vous mentez sur vos activités de jeu</li>
                    <li>• Vous négligez famille, travail ou études</li>
                    <li>• Vous empruntez de l'argent pour parier</li>
                    <li>• Vous vous sentez anxieux quand vous ne pariez pas</li>
                  </ul>
                </div>

                <div className="bg-red-600 text-white rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-4">Aide Disponible 24h/7j</h3>
                  <div className="space-y-3">
                    <div>
                      <p className="font-semibold">Joueurs Info Service</p>
                      <p className="text-sm">Téléphone : 09 74 75 13 13</p>
                      <p className="text-sm">Site web : www.joueurs-info-service.fr</p>
                      <p className="text-xs opacity-90">Service gratuit et confidentiel</p>
                    </div>
                    <div>
                      <p className="font-semibold">Chat en ligne</p>
                      <p className="text-sm">Disponible tous les jours de 8h à 2h</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-slate-300 text-sm">
                <strong>Rappel :</strong> Les jeux d'argent et de hasard peuvent être dangereux : pertes d'argent,
                conflits familiaux, addiction. Le jeu est interdit aux mineurs de 18 ans.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
