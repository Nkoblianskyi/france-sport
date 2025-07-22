import Link from "next/link"
import Image from "next/image"

export function Header() {
  return (
    <header className="bg-slate-800/95 backdrop-blur-sm border-b border-blue-500 shadow-sm relative z-50 w-full">
      <div className="container mx-auto max-w-[1220px] px-4 py-3">
        <div className="flex items-center justify-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <Image src="/favicon.ico" alt="Logo" width={32} height={32} />
            <h1 className="text-xl md:text-2xl font-bold">
              <span className="text-blue-400">Le</span>
              <span className="text-red-400">Paris</span>
              <span className="text-white">SportifsFrance</span>
            </h1>
          </Link>
        </div>
      </div>
    </header>
  )
}
