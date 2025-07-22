import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-slate-800/95 backdrop-blur-sm border-t border-blue-500 py-12 w-full">
      <div className="container mx-auto max-w-[1220px] px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-3 mb-4">
              <Image src="/favicon.ico" alt="Logo" width={32} height={32} />
              <h2 className="text-white font-bold text-2xl">ParisSportifsFrance</h2>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              Votre guide expert pour les meilleurs sites de paris sportifs licenciés ANJ en France. Comparaisons
              transparentes et conseils responsables.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="text-center">
            <h3 className="text-white font-bold text-lg mb-4">Informations Légales</h3>
            <div className="space-y-2">
              <Link
                href="/politique-confidentialite"
                className="block text-slate-300 hover:text-blue-400 text-sm transition-colors"
              >
                Politique de Confidentialité
              </Link>
              <Link
                href="/mentions-legales"
                className="block text-slate-300 hover:text-blue-400 text-sm transition-colors"
              >
                Mentions Légales
              </Link>
              <Link
                href="/politique-cookies"
                className="block text-slate-300 hover:text-blue-400 text-sm transition-colors"
              >
                Politique des Cookies
              </Link>
            </div>
          </div>

          {/* Responsible Gaming */}
          <div className="text-center md:text-right">
            <div className="flex items-center justify-center md:justify-end mb-4">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center border-2 border-red-400">
                <span className="text-white font-bold text-lg">18+</span>
              </div>
            </div>
            <h3 className="text-white font-bold text-lg mb-2">Jeu Responsable</h3>
            <p className="text-slate-300 text-sm mb-2">Aide disponible 24h/7j</p>
            <p className="text-blue-400 font-semibold text-sm">09 74 75 13 13</p>
          </div>
        </div>

        {/* Regulatory Organizations */}
        <div className="mt-8 pt-6 border-t border-slate-700">
          <h4 className="text-white font-bold mb-6 text-center text-sm md:text-base">
            Organismes de Protection et de Régulation
          </h4>
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4">
            <Link
              href="https://anj.fr"
              target="_blank"
              className="bg-slate-800/50 hover:bg-slate-700/50 rounded-lg p-2 md:p-4 flex items-center justify-center transition-colors"
            >
              <img
                src="/logo-anj.svg"
                alt="ANJ - Autorité Nationale des Jeux"
                className="h-8 md:h-12 w-auto object-contain"
              />
            </Link>

            <Link
              href="https://www.joueurs-info-service.fr"
              target="_blank"
              className="bg-slate-800/50 hover:bg-slate-700/50 rounded-lg p-2 md:p-4 flex items-center justify-center transition-colors"
            >
              <img
                src="/jouers-info-service.png"
                alt="Joueurs Info Service"
                className="h-8 md:h-12 w-auto object-contain"
              />
            </Link>

            <Link
              href="https://www.gambleaware.org"
              target="_blank"
              className="bg-slate-800/50 hover:bg-slate-700/50 rounded-lg p-2 md:p-4 flex items-center justify-center transition-colors"
            >
              <img src="/gamble.webp" alt="GambleAware" className="h-8 md:h-12 w-auto object-contain" />
            </Link>

            <Link
              href="https://www.gamcare.org.uk"
              target="_blank"
              className="bg-slate-800/50 hover:bg-slate-700/50 rounded-lg p-2 md:p-4 flex items-center justify-center transition-colors"
            >
              <img src="/gamecare.svg" alt="GamCare" className="h-8 md:h-12 w-auto object-contain" />
            </Link>

            <Link
              href="https://www.gamstop.co.uk"
              target="_blank"
              className="bg-slate-800/50 hover:bg-slate-700/50 rounded-lg p-2 md:p-4 flex items-center justify-center transition-colors"
            >
              <img src="/logo-gamstop.svg" alt="GAMSTOP" className="h-8 md:h-12 w-auto object-contain" />
            </Link>

            <Link
              href="https://www.sos-joueurs.org"
              target="_blank"
              className="bg-slate-800/50 hover:bg-slate-700/50 rounded-lg p-2 md:p-4 flex items-center justify-center transition-colors"
            >
              <img src="/logo-sos-joueurs.svg" alt="SOS Joueurs" className="h-8 md:h-12 w-auto object-contain" />
            </Link>

            <Link
              href="https://www.mediateur-jeux.fr"
              target="_blank"
              className="bg-slate-800/50 hover:bg-slate-700/50 rounded-lg p-2 md:p-4 flex items-center justify-center transition-colors"
            >
              <img
                src="/logo-mediateurs-des-jeux.png"
                alt="Médiateur des Jeux"
                className="h-8 md:h-12 w-auto object-contain"
              />
            </Link>

            <Link
              href="https://www.adictel.eu"
              target="_blank"
              className="bg-slate-800/50 hover:bg-slate-700/50 rounded-lg p-2 md:p-4 flex items-center justify-center transition-colors"
            >
              <img src="/logo-adictel.svg" alt="ADICTEL" className="h-8 md:h-12 w-auto object-contain" />
            </Link>

            <div className="bg-slate-800/50 rounded-lg p-2 md:p-4 flex items-center justify-center">
              <img src="/icn-ssl.svg" alt="SSL Sécurisé" className="h-8 md:h-12 w-auto object-contain" />
            </div>
          </div>
        </div>

        {/* Responsible Gaming Warning */}
        <div className="bg-gradient-to-r from-slate-700 to-slate-800 rounded-lg p-6 mb-6 border border-red-500">
          <div className="text-center">
            <h4 className="text-red-400 font-bold mb-3 text-lg flex items-center justify-center gap-2">
              ⚠️ Avertissement Important
            </h4>
            <p className="text-slate-300 text-sm leading-relaxed">
              <span className="text-red-400 font-bold">Les paris sportifs peuvent être dangereux :</span> pertes
              d'argent, conflits familiaux, addiction.
              <span className="text-white font-bold"> Interdit aux mineurs de 18 ans.</span> Le jeu doit rester un
              plaisir. Ne pariez que ce que vous pouvez vous permettre de perdre.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-4 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-blue-400 font-semibold">📞 Aide :</span>
                <span className="text-white font-bold">09 74 75 13 13</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-blue-400 font-semibold">🌐 Site :</span>
                <span className="text-white">www.joueurs-info-service.fr</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-blue-400 font-semibold">🏛️ Régulation :</span>
                <span className="text-white">ANJ France</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-600 pt-6 text-center">
          <p className="text-slate-400 text-sm">&copy; 2025 ParisSportifsFrance.com - Tous droits réservés</p>
          <p className="text-slate-500 text-xs mt-2">
            Comparateur indépendant de sites de paris sportifs licenciés ANJ en France
          </p>
        </div>
      </div>
    </footer>
  )
}
