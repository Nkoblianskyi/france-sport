"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookieConsent")
    if (!cookieConsent) {
      setIsVisible(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted")
    setIsVisible(false)
  }

  const rejectCookies = () => {
    localStorage.setItem("cookieConsent", "rejected")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-t border-green-200 p-4 z-50 shadow-lg">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex-1">
          <p className="text-slate-700 text-sm">
            Ce site utilise des cookies pour améliorer votre expérience de navigation et fournir des fonctionnalités
            personnalisées. En continuant à utiliser notre site, vous acceptez notre{" "}
            <Link href="/politique-confidentialite" className="text-green-600 hover:underline">
              Politique de Confidentialité
            </Link>{" "}
            et notre{" "}
            <Link href="/politique-cookies" className="text-green-600 hover:underline">
              Politique des Cookies
            </Link>
            . Vous pouvez gérer vos préférences à tout moment.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button
            onClick={rejectCookies}
            variant="outline"
            size="sm"
            className="border-green-600 text-slate-700 hover:bg-green-50 bg-transparent"
          >
            Refuser
          </Button>
          <Button onClick={acceptCookies} size="sm" className="bg-green-600 hover:bg-green-700 text-white">
            Accepter
          </Button>
        </div>
      </div>
    </div>
  )
}
